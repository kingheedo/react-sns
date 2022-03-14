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
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap-icons */ "react-bootstrap-icons");
/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _PostForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Recommend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Recommend */ "./components/Recommend.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\AppLayout.js";













const Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])([".container-true{margin:2rem !important;}a{margin:5px !important;}.list-group-item-action{margin:0 !important;}"]);
const ButtonGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"]).withConfig({
  displayName: "AppLayout__ButtonGroupWrapper",
  componentId: "sc-1x6xxdo-0"
})(["display:flex;position:fixed;top:7rem;a{margin:0 !important;padding-right:14rem;text-decoration:none;};Button{text-align:left;};h3{color:#0a58ca;};@media screen and (max-width:767px){position:static;};"]);
const TwitterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h3.withConfig({
  displayName: "AppLayout__TwitterWrapper",
  componentId: "sc-1x6xxdo-1"
})(["cursor:pointer;margin-bottom:10px;font-size:3rem;position:fixed;@media screen and (max-width:767px){position:static;};"]);
const SearchList = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"]).withConfig({
  displayName: "AppLayout__SearchList",
  componentId: "sc-1x6xxdo-2"
})(["position:fixed;top:3.19rem;z-index:9;width:20.2%;border-left:1px solid #e9ecef;background-color:#ffffff;border-right:1px solid #e9ecef;"]);
const CircleButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "AppLayout__CircleButton",
  componentId: "sc-1x6xxdo-3"
})(["margin-top:50px;border-radius:9999px;text-align:center !important;display:block;height:64px;width:270px;font-size:1.5rem;}"]);
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "AppLayout__SearchWrapper",
  componentId: "sc-1x6xxdo-4"
})(["position:fixed;width:20vw;"]);
const SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"]).withConfig({
  displayName: "AppLayout__SearchForm",
  componentId: "sc-1x6xxdo-5"
})(["display:inline-block;padding-left:30px;width:100% !important;}"]);
const SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__["Search"]).withConfig({
  displayName: "AppLayout__SearchIcon",
  componentId: "sc-1x6xxdo-6"
})(["position:absolute;top:9px;left:5px;width:20px;height:20px;padding-left:5px;"]);
const DeleteSearchContent = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["CloseButton"]).withConfig({
  displayName: "AppLayout__DeleteSearchContent",
  componentId: "sc-1x6xxdo-7"
})(["position:absolute;right:1.5rem;top:0.25rem;"]);
const DropdownDivider = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Divider).withConfig({
  displayName: "AppLayout__DropdownDivider",
  componentId: "sc-1x6xxdo-8"
})(["margin:0;"]);
const UserInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "AppLayout__UserInfoWrapper",
  componentId: "sc-1x6xxdo-9"
})(["top:5rem;position:fixed;@media screen and (max-width:992px){position:fixed;top:31rem;left:4rem;};@media screen and (max-width:840px){left:3rem;};@media screen and (max-width:767px){position:relative;top:5rem;left:0;};"]);
const Col1 = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"]).withConfig({
  displayName: "AppLayout__Col1",
  componentId: "sc-1x6xxdo-10"
})(["padding-left:12rem;border-right:1px solid #DCDCDC;position:relative;@media screen and (max-width:1456px){position:static;padding-left:0;display:flex;flex-direction:column;align-items:center;},"]);
const Col2 = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"]).withConfig({
  displayName: "AppLayout__Col2",
  componentId: "sc-1x6xxdo-11"
})(["border-right:1px solid #DCDCDC;@media screen and (max-width:1456px){position:relative;};@media screen and (max-width:767px){top:5rem;};"]);
const TwitterIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__["Twitter"]).withConfig({
  displayName: "AppLayout__TwitterIcon",
  componentId: "sc-1x6xxdo-12"
})(["color:#0a58ca"]);
const HouseDoorIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__["HouseDoor"]).withConfig({
  displayName: "AppLayout__HouseDoorIcon",
  componentId: "sc-1x6xxdo-13"
})(["margin-right:1rem"]);
const BookmarkIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__["Bookmark"]).withConfig({
  displayName: "AppLayout__BookmarkIcon",
  componentId: "sc-1x6xxdo-14"
})(["margin-right:1rem"]);
const PersonIcon = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_6__["Person"]).withConfig({
  displayName: "AppLayout__PersonIcon",
  componentId: "sc-1x6xxdo-15"
})(["margin-right:1rem"]);
const Forms = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"]).withConfig({
  displayName: "AppLayout__Forms",
  componentId: "sc-1x6xxdo-16"
})(["position:relative;"]);
const Anchor = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.a.withConfig({
  displayName: "AppLayout__Anchor",
  componentId: "sc-1x6xxdo-17"
})(["display:block;text-decoration:none;"]);

const AppLayout = ({
  children
}) => {
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
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOAD_RECOMMEND_USER_REQUEST"]
      });
    }
  }, [me]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (searchContent.startsWith('#')) {
      setsearchHashtag(searchContent.slice(1));
    }

    if (searchContent) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOAD_SEARCH_USER_REQUEST"],
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOAD_SEARCH_USER_REQUEST"],
      data: null
    });
  }, []);
  const FindUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    searchUserList === null || searchUserList === void 0 ? void 0 : searchUserList.map(v => {
      if (searchContent && searchContent === v.nickname) {
        Router.push(`/user/${v.id}`);
        setsearchContent('');
      }
    });

    if (searchHashtag) {
      Router.push(`/hashtag/${searchHashtag}`);
      setsearchContent('');
    }
  }, [searchHashtag, searchUserList, searchContent]);
  const SelectListItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setsearchContent('');
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 10
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: "true",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        xs: 1,
        md: 2,
        lg: 3,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Col1, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(TwitterWrapper, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(TwitterIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 27
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 23
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(ButtonGroupWrapper, {
            vertical: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(HouseDoorIcon, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 27
                  }, undefined), "Home"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 23
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/bookmarks",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(BookmarkIcon, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 27
                  }, undefined), "Bookmark"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 23
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/profile",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h3", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(PersonIcon, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 300,
                    columnNumber: 27
                  }, undefined), "Profile"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 26
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 24
            }, undefined), !me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/signup",
                children: "\uD68C\uC6D0\uAC00\uC785"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 23
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h1", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(CircleButton, {
                variant: "primary",
                onClick: handleModalForm,
                children: "Tweet"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 27
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 23
            }, undefined), me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
              size: "lg",
              show: show,
              onHide: handleModalForm,
              animation: false,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, {
                closeButton: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Title, {
                  children: ' '
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 319,
                  columnNumber: 29
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 27
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_PostForm__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 25
            }, undefined) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Col2, {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Forms, {
            inline: true,
            onSubmit: FindUser,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(SearchWrapper, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 27
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(SearchForm, {
                value: searchContent,
                onChange: onChangeSearchUserInput,
                type: "text",
                placeholder: "Search User or Hashtag",
                className: "mr-sm-2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 27
              }, undefined), searchContent && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(DeleteSearchContent, {
                onClick: DeleteSearch
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 335,
                columnNumber: 45
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 23
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(SearchList, {
              children: searchContent && searchUserList && searchUserList.map((v, i) =>
              /*#__PURE__*/
              // eslint-disable-next-line react/no-array-index-key
              Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
                  disabled: searchControl,
                  onSelect: SelectListItem,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/user/${v.id}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Anchor, {
                      children: v.nickname
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 344,
                      columnNumber: 72
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 43
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 39
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(DropdownDivider, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 39
                }, undefined)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 35
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 23
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(UserInfoWrapper, {
            children: me ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_UserProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 33
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 51
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 19
          }, undefined), me && recommend ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Recommend__WEBPACK_IMPORTED_MODULE_11__["default"], {
            recommend: recommend
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 40
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 268,
    columnNumber: 7
  }, undefined);
};

AppLayout.propTypes = {
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\CommentForm.js";










const FormButton = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "CommentForm__FormButton",
  componentId: "sc-1vcj00f-0"
})(["position:absolute;right:0;"]);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: onSubmitComment,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        style: {
          position: 'relative'
        },
        controlId: "exampleForm.ControlTextarea1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          srOnly: true,
          children: "Example textarea"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          as: "textarea",
          rows: 3,
          value: commentText,
          onChange: OnChangeCommentText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(FormButton, {
        disabled: addCommentLoading || !commentText,
        variant: "primary",
        type: "submit",
        children: addCommentLoading ? 'Loading…' : '게시'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\EditPostContent.js";

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable max-len */











const ModalCard = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"]).withConfig({
  displayName: "EditPostContent__ModalCard",
  componentId: "sc-12z90o3-0"
})(["border:0;width:100%;display:inline-block;margin:0.05rem;"]);
const ModalDiv1 = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "EditPostContent__ModalDiv1",
  componentId: "sc-12z90o3-1"
})(["position:relative;"]);
const ModalDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "EditPostContent__ModalDiv2",
  componentId: "sc-12z90o3-2"
})(["padding:24px;"]);
const CartTitle = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title).withConfig({
  displayName: "EditPostContent__CartTitle",
  componentId: "sc-12z90o3-3"
})(["margin-bottom:2rem;"]);
const ModalButton = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "EditPostContent__ModalButton",
  componentId: "sc-12z90o3-4"
})(["float:right;"]);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: show,
      onHide: handleModalForm,
      "aria-labelledby": "Edit Content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
          id: "eEdit Content",
          children: "Edit Content"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ModalCard, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ModalDiv1, {
            children: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
              header: "\uC218\uC815",
              postid: post.id,
              images: post.Images
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 46
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ModalDiv2, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CartTitle, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: `/user/${post.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
                  children: post.User.nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 84
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 25
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
                as: "textarea",
                rows: 3,
                value: text,
                onChange: onChangeText
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(ModalButton, {
          onClick: onSubmitEdit,
          variant: "primary",
          children: "\uC218\uC815"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\FollowButton.js";







const IsFollowButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "FollowButton__IsFollowButton",
  componentId: "sc-whpq5j-0"
})(["float:right;"]);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(IsFollowButton, {
    onClick: onClickButton,
    variant: "outline-primary",
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/ImagesZoom/style.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\ImagesZoom\\index.js";






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_3__["Overlay"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_3__["Global"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_3__["CloseBtn"], {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_3__["SlickWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          beforeChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_3__["ImgWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              style: {
                width: '30rem'
              },
              src: `http://localhost:3065/${v.src}`,
              alt: v.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, undefined)
          }, v.src, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_3__["Indicator"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
const FormControl = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control).withConfig({
  displayName: "LoginForm__FormControl",
  componentId: "sc-k4bay5-1"
})(["margin-eeft:10px"]);

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
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          sm: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FormControl, {
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: onChangeEmail,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
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
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          sm: 10,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FormControl, {
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: onChangePassword,
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
            lineNumber: 57,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/signup",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              variant: "outline-primary",
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 42
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Report */ "./components/Report.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
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
const CardDiv = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "PostCard__CardDiv",
  componentId: "sc-10lmnn1-3"
})(["margin:100px 0 20px"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "PostCard__ImageDiv",
  componentId: "sc-10lmnn1-4"
})(["display:flex;"]);
const CardInner = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "PostCard__CardInner",
  componentId: "sc-10lmnn1-5"
})(["width:100%;padding:24px;"]);
const MomentDiv = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "PostCard__MomentDiv",
  componentId: "sc-10lmnn1-6"
})(["float:right;"]);
const PostComment = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "PostCard__PostComment",
  componentId: "sc-10lmnn1-7"
})(["margin-top:1rem;display:flex;"]);
const Anchor = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.a.withConfig({
  displayName: "PostCard__Anchor",
  componentId: "sc-10lmnn1-8"
})(["text-decoration:none;color:#212529;"]);
const P = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.p.withConfig({
  displayName: "PostCard__P",
  componentId: "sc-10lmnn1-9"
})(["line-height:1.2;"]);
const H6 = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.h6.withConfig({
  displayName: "PostCard__H6",
  componentId: "sc-10lmnn1-10"
})(["font-Weight:600'"]);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title).withConfig({
  displayName: "PostCard__CardTitle",
  componentId: "sc-10lmnn1-11"
})(["margin-bottom:2rem"]);

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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
  const CardStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    width: '100%'
  }), []);
  const CardBody = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    padding: '0'
  }), []);
  const RetweetCard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    border: '0',
    width: '100%',
    display: 'inline-block',
    margin: '0.05rem'
  }), []);
  const TweetCard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    border: "0",
    width: '100%',
    display: 'inline-block',
    margin: '0.05rem'
  }), []);
  const CardIcon = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    width: '100%'
  }), []);
  const HeartFillIcon = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    width: '100%',
    color: '#dc3545'
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
  const onPostDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
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

  const renderTooltip = props =>
  /*#__PURE__*/
  // eslint-disable-next-line react/jsx-props-no-spreading
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(MoreButton, _objectSpread(_objectSpread({
    id: "button-tooltip"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
      children: [id && post.User.id === id && !post.Retweet && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "warning",
        onClick: handleModalForm,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 21
      }, undefined), id && post.User.id === id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "danger",
        onClick: onPostDelete,
        children: "\uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 19
      }, undefined)]
    }, void 0, true), (id && post.User.id !== id || !id) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "danger",
      onClick: handleModalForm,
      children: "\uC2E0\uACE0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 20
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 238,
    columnNumber: 9
  }, undefined);

  const like = post.Likers.find(v => v.id === id);
  const bookmark = post.Bookmarkers.find(v => v.id === id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(CardDiv, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: CardStyle,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        style: headerStyle,
        children: [post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null, id && post.User.id === id ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_FollowButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          post: post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 23
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        style: CardBody,
        children: [post.RetweetId && post.Retweet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          style: RetweetCard,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(ImageDiv, {
            children: post.Retweet.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_11__["default"], {
              postid: post.id,
              header: "\uBA54\uC778\uC774\uBBF8\uC9C0",
              images: post.Retweet.Images
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 60
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(CardInner, {
            children: [bookmark ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["BookmarkFill"], {
              style: BookmarkStyle,
              onClick: OnUnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 35
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Bookmark"], {
              style: BookmarkStyle,
              onClick: OnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 35
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(CardTitle, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: `/user/${post.Retweet.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("a", {
                  children: post.Retweet.User.nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(MomentDiv, {
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).fromNow()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 37
              }, undefined), post.Likers.length >= 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(H6, {
                children: ["\uC88B\uC544\uC694 ", post.Likers.length, "\uAC1C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 64
              }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                postContent: post.Retweet.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(PostComment, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("h6", {
                  children: post.Comments[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/user/${post.Comments[0].User.id}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(Anchor, {
                      children: post.Comments[0].User.nickname
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 290,
                      columnNumber: 115
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 66
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 41
                }, undefined), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(P, {
                  children: post.Comments[0] && post.Comments[0].content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 292,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 284,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          style: TweetCard,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(ImageDiv, {
            children: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_11__["default"], {
              postid: post.id,
              header: "\uBA54\uC778\uC774\uBBF8\uC9C0",
              images: post.Images
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 48
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(CardInner, {
            children: [bookmark ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["BookmarkFill"], {
              style: BookmarkStyle,
              onClick: OnUnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 35
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Bookmark"], {
              style: BookmarkStyle,
              onClick: OnBookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 35
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(CardTitle, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: `/user/${post.User.id}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("a", {
                  children: post.User.nickname
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 92
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 308,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(MomentDiv, {
                children: moment__WEBPACK_IMPORTED_MODULE_6___default()(post.createdAt).fromNow()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 37
              }, undefined), post.Likers.length >= 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(H6, {
                children: ["\uC88B\uC544\uC694 ", post.Likers.length, "\uAC1C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 68
              }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
                postContent: post.content
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 37
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(PostComment, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("h6", {
                  children: post.Comments[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/user/${post.Comments[0].User.id}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(Anchor, {
                      children: post.Comments[0].User.nickname
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 324,
                      columnNumber: 49
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 33
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 41
                }, undefined), "\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(P, {
                  children: post.Comments[0] && post.Comments[0].content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 329,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("ul", {
          style: ulStyle,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("span", {
              style: spanStyle,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Share"], {
                style: CardIcon,
                onClick: onRetweet
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("span", {
              style: spanStyle,
              children: like ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["HeartFill"], {
                style: HeartFillIcon,
                onClick: onUnLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 35
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["Heart"], {
                style: CardIcon,
                onClick: onLike
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 35
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("span", {
              style: spanStyle,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["ChatDots"], {
                style: CardIcon,
                onClick: OnToggleComment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("span", {
              style: spanStyle,
              children: show ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
                placement: "top",
                overlay: renderTooltip,
                trigger: "click",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_2__["ThreeDots"], {
                  style: CardIcon
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }, undefined), commentOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("span", {
        children: [post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(CommentList, {
        variant: "flush",
        children: post.Comments[0] && post.Comments.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(CommentListItem, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/user/${v.User.id}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("a", {
              children: v.UserId && v.User.nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 68
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("p", {
            children: v.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 29
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 17
    }, undefined), id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_EditPostContent__WEBPACK_IMPORTED_MODULE_13__["default"], {
      post: post,
      show: show,
      handleModalForm: handleModalForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 15
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])(_Report__WEBPACK_IMPORTED_MODULE_15__["default"], {
      post: post,
      show: show,
      handleModalForm: handleModalForm
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 255,
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\PostForm.js";







const UploadButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "PostForm__UploadButton",
  componentId: "sc-3fudxx-0"
})(["margin-top:1rem;"]);
const PostButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "PostForm__PostButton",
  componentId: "sc-3fudxx-1"
})(["float:right;margin-top:1rem;"]);
const ImaegPathDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "PostForm__ImaegPathDiv",
  componentId: "sc-3fudxx-2"
})(["display:flex;margin-top:20px;"]);
const ImageDiv = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "PostForm__ImageDiv",
  componentId: "sc-3fudxx-3"
})(["margin-rght:5px"]);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSumbitUpload,
    encType: "multipart/form-data",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 30
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          as: "textarea",
          rows: 3,
          value: text,
          onChange: onChangeText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].File.Input, {
          type: "file",
          name: "image",
          ref: imageUpload,
          onChange: onChangeImages,
          multiple: true,
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(UploadButton, {
          onClick: onClickImageUpload,
          children: "\uC774\uBBF8\uC9C0\uC5C5\uB85C\uB4DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(PostButton, {
          type: "submit",
          children: "\uAC8C\uC2DC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ImaegPathDiv, {
      children: imagePaths.map((v, i) =>
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ImageDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          src: `http://localhost:3065/${v}`,
          alt: v,
          style: {
            width: '220px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 25
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\PostImages.js";










const CardImg1 = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img).withConfig({
  displayName: "PostImages__CardImg1",
  componentId: "sc-11ainqo-0"
})(["width:100%;"]);
const CardImg2 = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Img).withConfig({
  displayName: "PostImages__CardImg2",
  componentId: "sc-11ainqo-1"
})(["width:50%;"]);
const XSquare1 = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__["XSquareFill"]).withConfig({
  displayName: "PostImages__XSquare1",
  componentId: "sc-11ainqo-2"
})(["position:absolute;top:0;right:0;font-size:28px;color:red;background-color:black;cursor:pointer;"]);
const XSquare2 = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_4__["XSquareFill"]).withConfig({
  displayName: "PostImages__XSquare2",
  componentId: "sc-11ainqo-3"
})(["position:absolute;top:0;right:50%;font-size:28px;color:red;background-color:black;cursor:pointer;"]);

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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      children: [header === '수정' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg1, {
          id: images[0].id,
          onClick: handleDeleteImage,
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, undefined), selectImage1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(XSquare1, {
          onClick: !deletePostImageLoading && onDeleteImage(images[0].id, postid),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 34
        }, undefined)]
      }, void 0, true), header === '메인이미지' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg1, {
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`,
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          images: images,
          onClose: onClose
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 37
        }, undefined)]
      }, void 0, true)]
    }, void 0, true);
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      children: [header === '수정' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg2, {
          id: images[0].id,
          onClick: handleDeleteImage,
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg2, {
          id: images[1].id,
          onClick: handleDeleteImage,
          variant: "top",
          alt: images[1].src,
          src: `http://localhost:3065/${images[1].src}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, undefined), selectImage1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(XSquare2, {
          onClick: !deletePostImageLoading && onDeleteImage(images[0].id, postid),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 38
        }, undefined), selectImage2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(XSquare1, {
          onClick: !deletePostImageLoading && onDeleteImage(images[1].id, postid),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 38
        }, undefined)]
      }, void 0, true), header === '메인이미지' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg2, {
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`,
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg2, {
          variant: "top",
          alt: images[1].src,
          src: `http://localhost:3065/${images[1].src}`,
          onClick: onZoom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_6__["default"], {
          images: images,
          onClose: onClose
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 39
        }, undefined)]
      }, void 0, true)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [header === '수정' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg1, {
        id: images[0].id,
        onClick: handleDeleteImage,
        variant: "top",
        alt: images[0].src,
        src: `http://localhost:3065/${images[0].src}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, undefined), selectImage1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(XSquare1, {
        onClick: !deletePostImageLoading && onDeleteImage(images[0].id, postid),
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 34
      }, undefined)]
    }, void 0, true), header === '메인이미지' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CardImg1, {
        variant: "top",
        alt: images[0].src,
        src: `http://localhost:3065/${images[0].src}`,
        onClick: onZoom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }, undefined), showImagesZoom && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: images,
        onClose: onClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
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







const List = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"]).withConfig({
  displayName: "Recommend__List",
  componentId: "sc-18j2ceu-0"
})(["width:20rem;top:21rem;position:fixed;z-index:7;"]);
const ListGroupItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item).withConfig({
  displayName: "Recommend__ListGroupItem",
  componentId: "sc-18j2ceu-1"
})(["margin:0 !important;padding:2rem;"]);
const ListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Recommend__ListItemWrapper",
  componentId: "sc-18j2ceu-2"
})(["position:relative;z-index:9;"]);

const Recommend = ({
  recommend
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
        children: "Who to follow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
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
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
          style: {
            margin: 0
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_RecommendFollowButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
            recommendUser: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\RecommendFollowButton.js";







const isFollowButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "RecommendFollowButton__isFollowButton",
  componentId: "sc-x14rof-0"
})(["position:absolute;z-index:10;right:1rem;top:1.6rem;"]);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("isFollowButton", {
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 13
  }, undefined);
};

RecommendFollowButton.propTypes = {
  recommendUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RecommendFollowButton);

/***/ }),

/***/ "./components/Report.js":
/*!******************************!*\
  !*** ./components/Report.js ***!
  \******************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\components\\Report.js";

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable max-len */









const FormButton = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"]).withConfig({
  displayName: "Report__FormButton",
  componentId: "sc-r3kxo7-0"
})(["float:right;"]);

const Report = ({
  post,
  show,
  handleModalForm
}) => {
  const {
    addReportLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const [report, onChangeReport] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (addReportLoading) {
      alert('신고 접수되었습니다.');
    }
  }, []);
  const onReport = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    handleModalForm();
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["ADD_REPORT_REQUEST"],
      data: {
        postId: post.id,
        content: report
      }
    });
  }, [post.id, report]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: show,
      onHide: handleModalForm,
      "aria-labelledby": "Edit Content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
        closeButton: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
          id: "eEdit Content",
          children: "Report"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
          as: "textarea",
          rows: 3,
          value: report,
          onChange: onChangeReport
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(FormButton, {
          onClick: onReport,
          variant: "primary",
          children: "\uC218\uC815"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 14
    }, undefined)
  }, void 0, false);
};

Report.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  handleModalForm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Report);

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
const ProfileCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"]).withConfig({
  displayName: "UserProfile__ProfileCard",
  componentId: "sc-b71tg5-2"
})(["width:26rem;flex-direction:row;@media screen and (max-width:991px){width:20rem;}"]);
const CardBody = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body).withConfig({
  displayName: "UserProfile__CardBody",
  componentId: "sc-b71tg5-3"
})(["padding:1.0rem;"]);
const CardLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Link).withConfig({
  displayName: "UserProfile__CardLink",
  componentId: "sc-b71tg5-4"
})(["padding:0;display:flex;text-align:center;"]);
const MomentDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "UserProfile__MomentDiv",
  componentId: "sc-b71tg5-5"
})(["float:right;margin-top:15px;"]);

const UserProfile = () => {
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const logoutHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_6__["logoutRequestAction"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ProfileCard, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardBody, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/user/${me.id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
            children: me.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 51
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 48
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(LogoutButton, {
        onClick: logoutHandler,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(MomentDiv, {
        children: ["Joined ", moment__WEBPACK_IMPORTED_MODULE_5___default()(me.createdAt).format('MMMM YYYY')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLinkWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `/user/${me.id}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLink, {
              href: "#",
              children: ["\uAC8C\uC2DC\uBB3C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 78
              }, undefined), me.Posts.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 55
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 52
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLink, {
              href: "#",
              children: ["\uD314\uB85C\uC6B0 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 69
              }, undefined), me.Followings.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 46
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 43
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CardLink, {
              href: "#",
              children: ["\uD314\uB85C\uC6CC ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 69
              }, undefined), me.Followers.length]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 46
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 43
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
    me
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
/*! exports provided: initialState, ADD_REPORT_REQUEST, ADD_REPORT_SUCCESS, ADD_REPORT_FAILURE, DELETE_POST_IMAGE_REQUEST, DELETE_POST_IMAGE_SUCCESS, DELETE_POST_IMAGE_FAILURE, EDIT_POST_CONTENT_REQUEST, EDIT_POST_CONTENT_SUCCESS, EDIT_POST_CONTENT_FAILURE, LOAD_USER_BOOKMARKS_REQUEST, LOAD_USER_BOOKMARKS_SUCCESS, LOAD_USER_BOOKMARKS_FAILURE, ADD_BOOKMARK_REQUEST, ADD_BOOKMARK_SUCCESS, ADD_BOOKMARK_FAILURE, REMOVE_BOOKMARK_REQUEST, REMOVE_BOOKMARK_SUCCESS, REMOVE_BOOKMARK_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPostRequestAction, addPostSuccessAction, addPostFailureAction, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPORT_REQUEST", function() { return ADD_REPORT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPORT_SUCCESS", function() { return ADD_REPORT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REPORT_FAILURE", function() { return ADD_REPORT_FAILURE; });
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
  deltePostImageError: null,
  addReportLoading: false,
  addReportDone: false,
  addReportError: null
};
const ADD_REPORT_REQUEST = 'ADD_REPORT_REQUEST';
const ADD_REPORT_SUCCESS = 'ADD_REPORT_SUCCESS';
const ADD_REPORT_FAILURE = 'ADD_REPORT_FAILURE';
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
      case ADD_REPORT_REQUEST:
        draft.addReportLoading = true;
        draft.addReportDone = false;
        draft.addReportError = null;
        break;

      case ADD_REPORT_SUCCESS:
        {
          draft.addReportLoading = false;
          draft.addReportDone = true;
          break;
        }

      case ADD_REPORT_FAILURE:
        draft.addReportLoading = false;
        draft.addReportError = action.error;
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

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
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
};
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
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
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





function AddReportApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/report`, data);
}

function* AddReport(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(AddReportApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_REPORT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_REPORT_FAILURE"],
      error: err.response.data
    });
  }
}

function DeltePostImageApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data.postId}/image/${data.imageId}`, data);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/addpost', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/unlike`);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`, data);
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

function* watchAddReport() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_REPORT_REQUEST"], AddReport);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddReport), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchDeltePostImage), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchEditPostContent), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveBookmark), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddBookmark), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0UG9zdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZXNab29tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjb21tZW5kLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVjb21tZW5kRm9sbG93QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVwb3J0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL3Byb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkJ1dHRvbkdyb3VwV3JhcHBlciIsInN0eWxlZCIsIkJ1dHRvbkdyb3VwIiwiVHdpdHRlcldyYXBwZXIiLCJoMyIsIlNlYXJjaExpc3QiLCJMaXN0R3JvdXAiLCJDaXJjbGVCdXR0b24iLCJCdXR0b24iLCJTZWFyY2hXcmFwcGVyIiwiZGl2IiwiU2VhcmNoRm9ybSIsIkZvcm1Db250cm9sIiwiU2VhcmNoSWNvbiIsIlNlYXJjaCIsIkRlbGV0ZVNlYXJjaENvbnRlbnQiLCJDbG9zZUJ1dHRvbiIsIkRyb3Bkb3duRGl2aWRlciIsIkRyb3Bkb3duIiwiRGl2aWRlciIsIlVzZXJJbmZvV3JhcHBlciIsIkNvbDEiLCJDb2wiLCJDb2wyIiwiVHdpdHRlckljb24iLCJUd2l0dGVyIiwiSG91c2VEb29ySWNvbiIsIkhvdXNlRG9vciIsIkJvb2ttYXJrSWNvbiIsIkJvb2ttYXJrIiwiUGVyc29uSWNvbiIsIlBlcnNvbiIsIkZvcm1zIiwiRm9ybSIsIkFuY2hvciIsImEiLCJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJoYW5kbGVNb2RhbEZvcm0iLCJ1c2VDYWxsYmFjayIsInByZXYiLCJtZSIsInJlY29tbWVuZCIsInNlYXJjaFVzZXJMaXN0Iiwic2VhcmNoVXNlckxvYWRpbmciLCJzZWFyY2hVc2VyRG9uZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiYWRkUG9zdExvYWRpbmciLCJwb3N0Iiwic2VhcmNoQ29udGVudCIsInNldHNlYXJjaENvbnRlbnQiLCJzZWFyY2hIYXNodGFnIiwic2V0c2VhcmNoSGFzaHRhZyIsInNlYXJjaENvbnRyb2wiLCJzZXRTZWFyY2hDb250cm9sIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIkZvbGxvd2VycyIsImxlbmd0aCIsIkZvbGxvd2luZ3MiLCJ0eXBlIiwiTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNUIiwic3RhcnRzV2l0aCIsInNsaWNlIiwiTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUIiwiZGF0YSIsIm9uQ2hhbmdlU2VhcmNoVXNlcklucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiRGVsZXRlU2VhcmNoIiwiRmluZFVzZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsInYiLCJuaWNrbmFtZSIsIlJvdXRlciIsInB1c2giLCJpZCIsIlNlbGVjdExpc3RJdGVtIiwiaSIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiRm9ybUJ1dHRvbiIsIkNvbW1lbnRGb3JtIiwiYWRkQ29tbWVudExvYWRpbmciLCJjb21tZW50VGV4dCIsIk9uQ2hhbmdlQ29tbWVudFRleHQiLCJzZXRDb21tZW50VGV4dCIsInVzZUlucHV0IiwiYWRkQ29tbWVudERvbmUiLCJvblN1Ym1pdENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiY29udGVudCIsInBvc3RJZCIsInVzZXJJZCIsInBvc2l0aW9uIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiTW9kYWxDYXJkIiwiQ2FyZCIsIk1vZGFsRGl2MSIsIk1vZGFsRGl2MiIsIkNhcnRUaXRsZSIsIlRpdGxlIiwiTW9kYWxCdXR0b24iLCJFZGl0UG9zdENvbnRlbnQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwib25TdWJtaXRFZGl0IiwiRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCIsImNvbnRlbnRUZXh0IiwiSW1hZ2VzIiwiVXNlciIsImJvb2wiLCJmdW5jIiwiSXNGb2xsb3dCdXR0b24iLCJGb2xsb3dCdXR0b24iLCJpc0ZvbGxvd2luZyIsImZpbmQiLCJvbkNsaWNrQnV0dG9uIiwiVU5GT0xMT1dfUkVRVUVTVCIsIkZPTExPV19SRVFVRVNUIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJzbGlkZSIsIndpZHRoIiwic3JjIiwiYXJyYXlPZiIsIk92ZXJsYXkiLCJIZWFkZXIiLCJoZWFkZXIiLCJTbGlja1dyYXBwZXIiLCJJbWdXcmFwcGVyIiwiSW5kaWNhdG9yIiwiQ2xvc2VCdG4iLCJYIiwiRm9ybUxhYmVsIiwiTGFiZWwiLCJDb250cm9sIiwiTG9naW5Gb3JtIiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsImFsZXJ0Iiwib25TdWJtaXRIYW5kbGVyIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiUm93Iiwic3BhbiIsIm9mZnNldCIsIm1vbWVudCIsImxvY2FsZSIsIkNvbW1lbnRMaXN0IiwiQ29tbWVudExpc3RJdGVtIiwiSXRlbSIsIk1vcmVCdXR0b24iLCJUb29sdGlwIiwiQ2FyZERpdiIsIkltYWdlRGl2IiwiQ2FyZElubmVyIiwiTW9tZW50RGl2IiwiUG9zdENvbW1lbnQiLCJQIiwicCIsIkg2IiwiaDYiLCJDYXJkVGl0bGUiLCJQb3N0Q2FyZCIsImNvbW1lbnRPcGVuIiwic2V0Q29tbWVudE9wZW4iLCJyZXR3ZWV0RXJyb3IiLCJoZWFkZXJTdHlsZSIsInVzZU1lbW8iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ1bFN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImxpc3RTdHlsZSIsImJvcmRlclRvcCIsImxpU3R5bGUiLCJib3JkZXJSaWdodCIsImZsb2F0IiwidGV4dEFsaWduIiwic3BhblN0eWxlIiwibGluZUhlaWdodCIsImN1cnNvciIsImZvbnRTaXplIiwiQm9va21hcmtTdHlsZSIsIkNhcmRTdHlsZSIsIkNhcmRCb2R5IiwiUmV0d2VldENhcmQiLCJib3JkZXIiLCJkaXNwbGF5IiwiVHdlZXRDYXJkIiwiQ2FyZEljb24iLCJIZWFydEZpbGxJY29uIiwiY29sb3IiLCJvblJldHdlZXQiLCJSRVRXRUVUX1JFUVVFU1QiLCJvblVuTGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvbkxpa2UiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIk9uVG9nZ2xlQ29tbWVudCIsIm9uUG9zdERlbGV0ZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJPbkJvb2ttYXJrIiwiQUREX0JPT0tNQVJLX1JFUVVFU1QiLCJPblVuQm9va21hcmsiLCJSRU1PVkVfQk9PS01BUktfUkVRVUVTVCIsInJlbmRlclRvb2x0aXAiLCJwcm9wcyIsIlJldHdlZXQiLCJsaWtlIiwiTGlrZXJzIiwiYm9va21hcmsiLCJCb29rbWFya2VycyIsIlJldHdlZXRJZCIsImNyZWF0ZWRBdCIsImZyb21Ob3ciLCJDb21tZW50cyIsIlVzZXJJZCIsInNoYXBlIiwibnVtYmVyIiwic3RyaW5nIiwib2JqZWN0T2YiLCJhbnkiLCJQb3N0Q2FyZENvbnRlbnQiLCJwb3N0Q29udGVudCIsInNwbGl0IiwibWF0Y2giLCJVcGxvYWRCdXR0b24iLCJQb3N0QnV0dG9uIiwiSW1hZWdQYXRoRGl2IiwiUG9zdEZvcm0iLCJhZGRQb3N0RG9uZSIsImltYWdlUGF0aHMiLCJpbWFnZVVwbG9hZCIsInVzZVJlZiIsInNldFRleHQiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvblN1bWJpdFVwbG9hZCIsInRyaW0iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImFwcGVuZCIsIkFERF9QT1NUX1JFUVVFU1QiLCJvbkNoYW5nZUltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJmaWxlcyIsImltYWdlRm9ybURhdGEiLCJjYWxsIiwiZiIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIkNhcmRJbWcxIiwiSW1nIiwiQ2FyZEltZzIiLCJYU3F1YXJlMSIsIlhTcXVhcmVGaWxsIiwiWFNxdWFyZTIiLCJQb3N0SW1hZ2VzIiwicG9zdGlkIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsInNlbGVjdEltYWdlMSIsInNldFNlbGVjdEltYWdlMSIsInNlbGVjdEltYWdlMiIsInNldFNlbGVjdEltYWdlMiIsImRlbGV0ZVBvc3RJbWFnZUxvYWRpbmciLCJvblpvb20iLCJvbkRlbGV0ZUltYWdlIiwiaW1hZ2VpZCIsIkRFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QiLCJpbWFnZUlkIiwiaGFuZGxlRGVsZXRlSW1hZ2UiLCJ0b1N0cmluZyIsInN0eWxlIiwiUHJvcHR5cGVzIiwiTGlzdCIsIkxpc3RHcm91cEl0ZW0iLCJMaXN0SXRlbVdyYXBwZXIiLCJSZWNvbW1lbmQiLCJpc0ZvbGxvd0J1dHRvbiIsIlJlY29tbWVuZEZvbGxvd0J1dHRvbiIsInJlY29tbWVuZFVzZXIiLCJSZXBvcnQiLCJhZGRSZXBvcnRMb2FkaW5nIiwicmVwb3J0Iiwib25DaGFuZ2VSZXBvcnQiLCJvblJlcG9ydCIsIkFERF9SRVBPUlRfUkVRVUVTVCIsIkNhcmRMaW5rV3JhcHBlciIsIkxvZ291dEJ1dHRvbiIsIlByb2ZpbGVDYXJkIiwiQm9keSIsIkNhcmRMaW5rIiwiTGluayIsIlVzZXJQcm9maWxlIiwibG9nb3V0SGFuZGxlciIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJmb3JtYXQiLCJQb3N0cyIsImluaXRpYWxWYWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsIm9uU2Nyb2xsIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid3JhcHBlciIsImNvbnRleHQiLCJjb29raWUiLCJyZXEiLCJoZWFkZXJzIiwiYXhpb3MiLCJkZWZhdWx0cyIsIkNvb2tpZSIsInN0b3JlIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsInNpbmdsZVBvc3QiLCJyZW1vdmVCb29rbWFya0xvYWRpbmciLCJyZW1vdmVCb29rbWFya0RvbmUiLCJyZW1vdmVCb29rbWFya0Vycm9yIiwiYWRkQm9va21hcmtMb2FkaW5nIiwiYWRkQm9va21hcmtEb25lIiwiYWRkQm9va21hcmtFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsImVkaXRQb3N0Q29udGVudExvYWRpbmciLCJlZGl0UG9zdENvbnRlbnREb25lIiwiZWRpdFBvc3RDb250ZW50RXJyb3IiLCJkZWx0ZVBvc3RJbWFnZUxvYWRpbmciLCJkZWx0ZVBvc3RJbWFnZURvbmUiLCJkZWx0ZVBvc3RJbWFnZUVycm9yIiwiYWRkUmVwb3J0RG9uZSIsImFkZFJlcG9ydEVycm9yIiwiQUREX1JFUE9SVF9TVUNDRVNTIiwiQUREX1JFUE9SVF9GQUlMVVJFIiwiREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUyIsIkRFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUiLCJFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTIiwiRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSIsIkxPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCIsIkxPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyIsIkxPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSIsIkFERF9CT09LTUFSS19TVUNDRVNTIiwiQUREX0JPT0tNQVJLX0ZBSUxVUkUiLCJSRU1PVkVfQk9PS01BUktfU1VDQ0VTUyIsIlJFTU9WRV9CT09LTUFSS19GQUlMVVJFIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRQb3N0U3VjY2Vzc0FjdGlvbiIsImFkZFBvc3RGYWlsdXJlQWN0aW9uIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJkZWxldGVQb3N0SW1hZ2VEb25lIiwiZGVsZXRlUG9zdEltYWdlRXJyb3IiLCJQb3N0SWQiLCJmaWx0ZXIiLCJJbWFnZUlkIiwidW5saWtlUG9zdHNMb2FkaW5nIiwidW5saWtlUG9zdHNEb25lIiwidW5saWtlUG9zdHNFcnJvciIsInVuc2hpZnQiLCJjb25jYXQiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2dJbkRvbmUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImNoYW5nZU5pY2tOYW1lTG9hZGluZyIsImNoYW5nZU5pY2tOYW1lRXJyb3IiLCJjaGFuZ2VOaWNrTmFtZURvbmUiLCJzZWFyY2hVc2VyRXJyb3IiLCJ1c2VySW5mbyIsIkxPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyIsIkxPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSIsIkxPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUyIsIkxPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX1JFU0VUIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwiQWRkUmVwb3J0QXBpIiwiQWRkUmVwb3J0IiwicHV0IiwicmVzcG9uc2UiLCJEZWx0ZVBvc3RJbWFnZUFwaSIsImRlbGV0ZSIsIkRlbHRlUG9zdEltYWdlIiwiRWRpdFBvc3RDb250ZW50QXBpIiwicGF0Y2giLCJsb2FkSGFzaHRhZ1Bvc3RzQXBpIiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRQb3N0QXBpIiwibG9hZFBvc3QiLCJsb2FkUG9zdHNBcGkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QXBpIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBcGkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFwaSIsImFkZEJvb2tNYXJrQXBpIiwiYWRkQm9va01hcmsiLCJyZW1vdmVCb29rTWFya0FwaSIsInJlbW92ZUJvb2tNYXJrIiwibGlrZVBvc3RBcGkiLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ3YXRjaEFkZFJlcG9ydCIsInRha2VMYXRlc3QiLCJ3YXRjaERlbHRlUG9zdEltYWdlIiwidGhyb3R0bGUiLCJ3YXRjaEVkaXRQb3N0Q29udGVudCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoUmVtb3ZlQm9va21hcmsiLCJ3YXRjaEFkZEJvb2ttYXJrIiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hSZXR3ZWV0IiwibG9hZEJvb2ttYXJrc0FwaSIsImxvYWRCb29rbWFya3MiLCJyZWNvbW1lbmRVc2VyQXBpIiwic2VhcmNoVXNlckFwaSIsInNlYXJjaFVzZXIiLCJsb2FkVXNlclBvc3RzQXBpIiwibG9hZFVzZXJQb3N0cyIsImxvYWRNeUluZm9BcGkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBcGkiLCJsb2FkVXNlciIsInNpZ251cEFwaSIsInNpZ251cCIsImxvZ0luQXBpIiwibG9nSW4iLCJsb2dPdXRBcGkiLCJsb2dPdXQiLCJjaGFuZ2VOaWNrTmFtZUFwaSIsImNoYW5nZU5pY2tOYW1lIiwiZm9sbG93QXBpIiwiZm9sbG93IiwidW5mb2xsb3dBcGkiLCJ1bmZvbGxvdyIsImxvYWRmb2xsb3dlcnNBcGkiLCJsb2FkZm9sbG93ZXJzIiwibG9hZGZvbGxvd2luZ3NBcGkiLCJsb2FkZm9sbG93aW5ncyIsInJlbW92ZWZvbGxvd2VyQXBpIiwicmVtb3ZlZm9sbG93ZXIiLCJ3YXRjaExvYWRCb29rTWFya3MiLCJ3YXRjaFJlY29tbWVuZFVzZXIiLCJ3YXRjaFNlYXJjaFVzZXIiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hsb2FkTXlJbmZvIiwid2F0Y2hsb2FkVXNlciIsIndhdGNobG9hZFVzZXJQb3N0cyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgRm9ybUNvbnRyb2wsIEZvcm0sIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIE1vZGFsLCBMaXN0R3JvdXAsIENsb3NlQnV0dG9uLCBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgVHdpdHRlciwgU2VhcmNoLCBIb3VzZURvb3IsIEJvb2ttYXJrLCBQZXJzb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vTG9naW5Gb3JtJztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vVXNlclByb2ZpbGUnO1xyXG5cclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4vUG9zdEZvcm0nO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNULCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IFJlY29tbWVuZCBmcm9tICcuL1JlY29tbWVuZCc7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5jb250YWluZXItdHJ1ZSB7XHJcbiAgICAgICAgIG1hcmdpbjogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9ue1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYDtcclxuICAgIFxyXG5jb25zdCBCdXR0b25Hcm91cFdyYXBwZXIgPSBzdHlsZWQoQnV0dG9uR3JvdXApYFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA3cmVtO1xyXG4gICAgYXtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgcGFkZGluZy1yaWdodDogMTRyZW07XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfTtcclxuICAgIEJ1dHRvbntcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfTtcclxuICAgIGgze1xyXG4gICAgICAgICBjb2xvcjogIzBhNThjYTtcclxuICAgIH07XHJcbiAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG59O1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IFR3aXR0ZXJXcmFwcGVyID0gc3R5bGVkLmgzYFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxufTtcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaExpc3QgPSBzdHlsZWQoTGlzdEdyb3VwKWBcclxuICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgdG9wOiAzLjE5cmVtO1xyXG4gICAgIHotaW5kZXg6IDk7XHJcbiAgICAgd2lkdGg6IDIwLjIlO1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBgO1xyXG5jb25zdCBDaXJjbGVCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246IGZpeGVkOyBcclxuIHdpZHRoOiAyMHZ3O1xyXG5cclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEZvcm0gPSBzdHlsZWQoRm9ybUNvbnRyb2wpYFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmA7XHJcbmNvbnN0IFNlYXJjaEljb24gPSBzdHlsZWQoU2VhcmNoKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgIGA7XHJcbmNvbnN0IERlbGV0ZVNlYXJjaENvbnRlbnQgPSBzdHlsZWQoQ2xvc2VCdXR0b24pYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjI1cmVtO1xyXG4gICAgYDtcclxuY29uc3QgRHJvcGRvd25EaXZpZGVyID0gc3R5bGVkKERyb3Bkb3duLkRpdmlkZXIpYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgYDtcclxuICBjb25zdCBVc2VySW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICB0b3A6IDVyZW07XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuIFxyXG5cclxuICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHsgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMxcmVtO1xyXG4gICAgbGVmdDogNHJlbTtcclxufTtcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHsgXHJcbiAgICBsZWZ0OiAzcmVtO1xyXG59O1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cmVtO1xyXG4gICAgbGVmdDogMDtcclxufTtcclxuICBgOyBcclxuXHJcbiAgY29uc3QgQ29sMSA9IHN0eWxlZChDb2wpYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnJlbTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEQ0RDREM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1NnB4KSB7IFxyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcblxyXG59LFxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IENvbDIgPSBzdHlsZWQoQ29sKWBcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEQ0RDREM7XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ1NnB4KSB7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59O1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIHRvcDogNXJlbTtcclxufTtcclxuICBgIDtcclxuXHJcbmNvbnN0IFR3aXR0ZXJJY29uID0gc3R5bGVkKFR3aXR0ZXIpYFxyXG4gIGNvbG9yOiAjMGE1OGNhXHJcbmBcclxuY29uc3QgSG91c2VEb29ySWNvbiA9IHN0eWxlZChIb3VzZURvb3IpYFxyXG4gIG1hcmdpbi1yaWdodCA6IDFyZW1cclxuYFxyXG5jb25zdCBCb29rbWFya0ljb24gPSBzdHlsZWQoQm9va21hcmspYFxyXG4gIG1hcmdpbi1yaWdodCA6IDFyZW1cclxuYFxyXG5jb25zdCBQZXJzb25JY29uID0gc3R5bGVkKFBlcnNvbilgXHJcbiAgbWFyZ2luLXJpZ2h0IDogMXJlbVxyXG5gIFxyXG5jb25zdCBGb3JtcyA9IHN0eWxlZChGb3JtKWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmAgXHJcbmNvbnN0IEFuY2hvciA9IHN0eWxlZC5hYFxyXG4gICBkaXNwbGF5OiBibG9jazsgXHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuYCBcclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVNb2RhbEZvcm0gPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHtcclxuICAgICAgc2V0U2hvdygocHJldikgPT4gIXByZXYpO1xyXG4gICAgfSxcclxuICAgIFtzaG93XSxcclxuICApO1xyXG5cclxuICBjb25zdCB7IG1lLCByZWNvbW1lbmQsIHNlYXJjaFVzZXJMaXN0LCBzZWFyY2hVc2VyTG9hZGluZywgc2VhcmNoVXNlckRvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBhZGRQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbc2VhcmNoQ29udGVudCwgc2V0c2VhcmNoQ29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlYXJjaEhhc2h0YWcsIHNldHNlYXJjaEhhc2h0YWddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzZWFyY2hDb250cm9sLCBzZXRTZWFyY2hDb250cm9sXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobWUgJiYgbWUuRm9sbG93ZXJzLmxlbmd0aCA+PSAxICYmIG1lLkZvbGxvd2luZ3MubGVuZ3RoID49IDEpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW21lXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoQ29udGVudC5zdGFydHNXaXRoKCcjJykpIHtcclxuICAgICAgc2V0c2VhcmNoSGFzaHRhZyhzZWFyY2hDb250ZW50LnNsaWNlKDEpKTtcclxuICAgIH1cclxuICAgIGlmIChzZWFyY2hDb250ZW50KSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogc2VhcmNoQ29udGVudCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3NlYXJjaENvbnRlbnRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWFyY2hVc2VyTG9hZGluZykge1xyXG4gICAgICBzZXRTZWFyY2hDb250cm9sKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWFyY2hVc2VyTG9hZGluZ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZFBvc3RMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgc2V0U2hvdygocHJldikgPT4gIXByZXYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FkZFBvc3RMb2FkaW5nXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzZWFyY2hVc2VyRG9uZSkge1xyXG4gICAgICBzZXRTZWFyY2hDb250cm9sKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbc2VhcmNoVXNlckRvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWFyY2hVc2VySW5wdXQgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldHNlYXJjaENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIFtzZWFyY2hDb250ZW50XSxcclxuICApO1xyXG4gIGNvbnN0IERlbGV0ZVNlYXJjaCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzZXRzZWFyY2hDb250ZW50KCcnKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbXSxcclxuICApO1xyXG5cclxuICBjb25zdCBGaW5kVXNlciA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZWFyY2hVc2VyTGlzdD8ubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgaWYgKHNlYXJjaENvbnRlbnQgJiYgc2VhcmNoQ29udGVudCA9PT0gdi5uaWNrbmFtZSkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC91c2VyLyR7di5pZH1gKTtcclxuICAgICAgICAgIHNldHNlYXJjaENvbnRlbnQoJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoc2VhcmNoSGFzaHRhZykge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvaGFzaHRhZy8ke3NlYXJjaEhhc2h0YWd9YCk7XHJcbiAgICAgICAgc2V0c2VhcmNoQ29udGVudCgnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbc2VhcmNoSGFzaHRhZywgc2VhcmNoVXNlckxpc3QsIHNlYXJjaENvbnRlbnRdLFxyXG4gICk7XHJcbiAgY29uc3QgU2VsZWN0TGlzdEl0ZW0gPSB1c2VDYWxsYmFjayhcclxuICAgICgpID0+IHtcclxuICAgICAgc2V0c2VhcmNoQ29udGVudCgnJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIFtdLFxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgPEdsb2JhbCAvPlxyXG4gICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPFJvdyB4cz17MX0gbWQ9ezJ9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8Q29sMT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUd2l0dGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHdpdHRlckljb24vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ud2l0dGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXBXcmFwcGVyIHZlcnRpY2FsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50IHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SG91c2VEb29ySWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudCBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ib29rbWFya3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2ttYXJrSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQm9va21hcmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudCBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uSWNvbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQgc2l6ZT1cImxnXCI+PExpbmsgaHJlZj1cIi9zaWdudXBcIj7tmozsm5DqsIDsnoU8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGVCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVNb2RhbEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NpcmNsZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbCBzaXplPVwibGdcIiBzaG93PXtzaG93fSBvbkhpZGU9e2hhbmRsZU1vZGFsRm9ybX0gYW5pbWF0aW9uPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57JyAnfTwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuQm9keT48UG9zdEZvcm0vPjwvTW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXBXcmFwcGVyPlxyXG4gICAgICAgICAgICAgIDwvQ29sMT5cclxuXHJcbiAgICAgICAgICAgICAgPENvbDI+e2NoaWxkcmVufTwvQ29sMj5cclxuXHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPEZvcm1zIGlubGluZSBvblN1Ym1pdD17RmluZFVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoRm9ybSB2YWx1ZT17c2VhcmNoQ29udGVudH0gb25DaGFuZ2U9e29uQ2hhbmdlU2VhcmNoVXNlcklucHV0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFVzZXIgb3IgSGFzaHRhZ1wiIGNsYXNzTmFtZT1cIm1yLXNtLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hDb250ZW50ICYmIDxEZWxldGVTZWFyY2hDb250ZW50IG9uQ2xpY2s9e0RlbGV0ZVNlYXJjaH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaFdyYXBwZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNlYXJjaENvbnRlbnQgJiYgc2VhcmNoVXNlckxpc3QpICYmIHNlYXJjaFVzZXJMaXN0Lm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gZGlzYWJsZWQ9e3NlYXJjaENvbnRyb2x9IG9uU2VsZWN0PXtTZWxlY3RMaXN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3YuaWR9YH0+PEFuY2hvcj57di5uaWNrbmFtZX08L0FuY2hvcj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkRpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybXM+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lID8gPFVzZXJQcm9maWxlIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgIHsobWUgJiYgcmVjb21tZW5kKSA/IDxSZWNvbW1lbmQgcmVjb21tZW5kPXtyZWNvbW1lbmR9IC8+IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5BcHBMYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBwcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgRm9ybUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gcG9zaXRpb246IGFic29sdXRlOyBcclxuIHJpZ2h0OiAwO1xyXG5gXHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICAgIGNvbnN0IHsgYWRkQ29tbWVudExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbY29tbWVudFRleHQsIE9uQ2hhbmdlQ29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IHsgYWRkQ29tbWVudERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWRkQ29tbWVudERvbmUpIHsgc2V0Q29tbWVudFRleHQoJycpOyB9XHJcbiAgICB9LCBbYWRkQ29tbWVudERvbmVdKTtcclxuICAgIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGNvbnRlbnQ6IGNvbW1lbnRUZXh0LCBwb3N0SWQ6IHBvc3QuaWQsIHVzZXJJZDogaWQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbbWUsIGNvbW1lbnRUZXh0LCBtZSAmJiBtZS5pZF0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19IGNvbnRyb2xJZD1cImV4YW1wbGVGb3JtLkNvbnRyb2xUZXh0YXJlYTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBzck9ubHk+RXhhbXBsZSB0ZXh0YXJlYTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3dzPXszfSB2YWx1ZT17Y29tbWVudFRleHR9IG9uQ2hhbmdlPXtPbkNoYW5nZUNvbW1lbnRUZXh0fS8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUJ1dHRvbiBkaXNhYmxlZD17YWRkQ29tbWVudExvYWRpbmcgfHwgIWNvbW1lbnRUZXh0fSB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIHthZGRDb21tZW50TG9hZGluZyA/ICdMb2FkaW5n4oCmJyA6ICfqsozsi5wnfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBGb3JtQ29udHJvbCwgTW9kYWwsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBFRElUX1BPU1RfQ09OVEVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5jb25zdCBNb2RhbENhcmQgPSBzdHlsZWQoQ2FyZClgXHJcbiBib3JkZXI6IDA7XHJcbiB3aWR0aDogMTAwJTtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuIG1hcmdpbjogMC4wNXJlbTtcclxuYFxyXG5jb25zdCBNb2RhbERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gXHJcbmNvbnN0IE1vZGFsRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiBwYWRkaW5nOiAyNHB4O1xyXG5gXHJcbmNvbnN0IENhcnRUaXRsZSA9IHN0eWxlZChDYXJkLlRpdGxlKWBcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5gXHJcbmNvbnN0IE1vZGFsQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiBmbG9hdDogcmlnaHQ7XHJcbmBcclxuY29uc3QgRWRpdFBvc3RDb250ZW50ID0gKHsgcG9zdCwgc2hvdywgaGFuZGxlTW9kYWxGb3JtIH0pID0+IHtcclxuICAgIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHRdID0gdXNlSW5wdXQocG9zdD8uY29udGVudCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBvblN1Ym1pdEVkaXQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGFuZGxlTW9kYWxGb3JtKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgcG9zdElkOiBwb3N0LmlkLCBjb250ZW50VGV4dDogdGV4dCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgW3Bvc3QuaWQsIHRleHRdLFxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgICAgICAgIG9uSGlkZT17aGFuZGxlTW9kYWxGb3JtfVxyXG4gICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJFZGl0IENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGUgaWQ9XCJlRWRpdCBDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXQgQ29udGVudFxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxEaXYxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBoZWFkZXIgPSBcIuyImOyglVwiIHBvc3RpZCA9IHtwb3N0LmlkfSBpbWFnZXMgPSB7cG9zdC5JbWFnZXN9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbERpdjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJ0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz1cImhvbGRlci5qcy8xNzF4MTgwXCIgcm91bmRlZENpcmNsZSAvPiAqL308YT57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcnRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgYXM9XCJ0ZXh0YXJlYVwiIHJvd3M9ezN9IHZhbHVlPXt0ZXh0fSBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsRGl2Mj5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdEVkaXR9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgPuyImOyglTwvTW9kYWxCdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbkVkaXRQb3N0Q29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogcHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIHNob3c6IHByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlTW9kYWxGb3JtOiBwcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdENvbnRlbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IElzRm9sbG93QnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiBmbG9hdDogcmlnaHQ7XHJcbmBcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKTsgXHJcbiAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbaXNGb2xsb3dpbmddKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8SXNGb2xsb3dCdXR0b24gb25DbGljaz0ge29uQ2xpY2tCdXR0b259dmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiPlxyXG4gICAgICAgIHtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9XHJcbiAgICA8L0lzRm9sbG93QnV0dG9uPlxyXG4gICAgXHJcbiAgICApO1xyXG59O1xyXG5cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAgICAgICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBHbG9iYWwsIENsb3NlQnRuLCBIZWFkZXIsIEltZ1dyYXBwZXIsIEluZGljYXRvciwgU2xpY2tXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHsgaW1hZ2VzLCBvbkNsb3NlIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxPdmVybGF5PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXtvbkNsb3NlfT5YPC9DbG9zZUJ0bj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbGlja1xyXG4gICAgICAgICAgICBpbml0aWFsU2xpZGU9ezB9XHJcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICBpbmZpbml0ZVxyXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogJzMwcmVtJyB9fSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHt2LnNyY31gfSBhbHQ9e3Yuc3JjfSAvPlxyXG4gICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgICAgPEluZGljYXRvcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7Y3VycmVudFNsaWRlICsgMX1cclxuICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0luZGljYXRvcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlja1dyYXBwZXI+XHJcbiAgICA8L092ZXJsYXk+XHJcbiAgKTtcclxufTtcclxuSW1hZ2VzWm9vbS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFggfSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBib3R0b206MDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgICBoZWFkZXI6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAwIDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgJmgxIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbmhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbmJhY2tncm91bmQ6IzA5MDkwOTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWdXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJmltZ3tcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA3NTBweDtcclxuICAgIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6NzVweDtcclxuICAgICAgICBoZWdpdGg6MzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlQnRuID0gc3R5bGVkKFgpYFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5zbGljay1zbGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIENvbCwgQnV0dG9uLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvcm1MYWJlbCA9IHN0eWxlZChGb3JtLkxhYmVsKWBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IEZvcm1Db250cm9sID0gc3R5bGVkKEZvcm0uQ29udHJvbClgXHJcbiAgICAgbWFyZ2luLWVlZnQ6IDEwcHhcclxuYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbih7IGVtYWlsLCBwYXNzd29yZCB9KSk7XHJcbiAgICAgICAgIH0sIFtlbWFpbCwgcGFzc3dvcmRdLFxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjb250cm9sSWQ9XCJmb3JtSG9yaXpvbnRhbEVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb2x1bW4gc209ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gcmVxdWlyZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGNvbHVtbiBzbT17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXt7IHNwYW46IDEwLCBvZmZzZXQ6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2xvZ0luTG9hZGluZ30gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9nSW5Mb2FkaW5nID8gJ0xvYWRpbmfigKYnIDogJ+uhnOq3uOyduCd9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiPu2ajOybkOqwgOyehTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIExpc3RHcm91cCwgT3ZlcmxheVRyaWdnZXIsIFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBTaGFyZSwgSGVhcnQsIEhlYXJ0RmlsbCwgQ2hhdERvdHMsIFRocmVlRG90cywgQm9va21hcmssIEJvb2ttYXJrRmlsbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC1pY29ucyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQUREX0JPT0tNQVJLX1JFUVVFU1QsIExJS0VfUE9TVF9SRVFVRVNULCBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVUV0VFVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSAnLi9Gb2xsb3dCdXR0b24nO1xyXG5pbXBvcnQgRWRpdFBvc3RDb250ZW50IGZyb20gJy4vRWRpdFBvc3RDb250ZW50JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IFJlcG9ydCBmcm9tICcuL1JlcG9ydCc7XHJcblxyXG5tb21lbnQubG9jYWxlKCdrbycpO1xyXG5cclxuY29uc3QgQ29tbWVudExpc3QgPSBzdHlsZWQoTGlzdEdyb3VwKWBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvciA6ICMyMTI1Mjk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wIDogMC4zcmVtXHJcbiAgICAgICAgfVxyXG4gICAgYDtcclxuY29uc3QgQ29tbWVudExpc3RJdGVtID0gc3R5bGVkKExpc3RHcm91cC5JdGVtKWBcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcCA6IDFyZW07XHJcbmA7XHJcbmNvbnN0IE1vcmVCdXR0b24gPSBzdHlsZWQoVG9vbHRpcClgXHJcbiAgICAgICAgLnRvb2x0aXAtaW5uZXJ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmMGYwZjE7XHJcbiAgICAgICAgfSxcclxuYDtcclxuY29uc3QgQ2FyZERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgIG1hcmdpbjogMTAwcHggMCAyMHB4XHJcbmA7XHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5jb25zdCBDYXJkSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG5gO1xyXG5jb25zdCBNb21lbnREaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuYDtcclxuY29uc3QgUG9zdENvbW1lbnQgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07IFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcbmNvbnN0IEFuY2hvciA9IHN0eWxlZC5hYFxyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG5jb2xvcjogIzIxMjUyOTtcclxuYFxyXG5jb25zdCBQID0gc3R5bGVkLnBgXHJcbiBsaW5lLWhlaWdodDogMS4yO1xyXG5gXHJcbmNvbnN0IEg2ID0gc3R5bGVkLmg2YFxyXG4gZm9udC1XZWlnaHQ6IDYwMCdcclxuYFxyXG5jb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQoQ2FyZC5UaXRsZSlgXHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbVxyXG5gXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbW1lbnRPcGVuLCBzZXRDb21tZW50T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gICAgY29uc3QgeyByZXR3ZWV0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgICB9KSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHVsU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNmMGYwZjAnLFxyXG4gICAgfSksIFtdKTtcclxuXHJcbiAgICBjb25zdCBsaVN0eWxlID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgICAgIHdpZHRoOiAnMjUlJyxcclxuICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCAjZjBmMGYwJyxcclxuICAgICAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiAnMTJweCAwJyxcclxuICAgIH0pLCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc3BhblN0eWxlID0gdXNlTWVtbygoKSA9PiAoe1xyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxNHB4JyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcblxyXG4gICAgfSksIFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgQm9va21hcmtTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBmb250U2l6ZTogJzEuNXJlbScsXHJcbiAgICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgfSksIFtdKTtcclxuXHJcbiAgICBjb25zdCBDYXJkU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH0pLCBbXSlcclxuXHJcbiAgICBjb25zdCBDYXJkQm9keSA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICB9KSwgW10pXHJcblxyXG4gICAgY29uc3QgUmV0d2VldENhcmQgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgYm9yZGVyOicwJywgXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBtYXJnaW46ICcwLjA1cmVtJyxcclxuICAgIH0pLCBbXSlcclxuXHJcbiAgICBjb25zdCBUd2VldENhcmQgPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgYm9yZGVyOiBcIjBcIiwgXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJywgXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgbWFyZ2luOiAnMC4wNXJlbScsXHJcbiAgICB9KSwgW10pXHJcblxyXG4gICAgY29uc3QgQ2FyZEljb24gPSB1c2VNZW1vKCgpID0+ICh7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSksIFtdKVxyXG4gICAgY29uc3QgSGVhcnRGaWxsSWNvbiA9IHVzZU1lbW8oKCkgPT4gKHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGNvbG9yOiAnI2RjMzU0NScsXHJcbiAgICB9KSwgW10pXHJcblxyXG4gICAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduCDtm4Qg7J207Jqp7ZWY7IukIOyImCDsnojsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbaWRdLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBvblVuTGlrZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbgg7ZuEIOydtOyaqe2VmOyLpCDsiJgg7J6I7Iq164uI64ukLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtpZF0sXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduCDtm4Qg7J207Jqp7ZWY7IukIOyImCDsnojsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtpZF0sXHJcbiAgICApO1xyXG4gICAgXHJcbiAgICBjb25zdCBPblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvbW1lbnRPcGVuKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBvblBvc3REZWxldGUgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J24IO2bhCDsnbTsmqntlZjsi6Qg7IiYIOyeiOyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbcG9zdC5pZF0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IE9uQm9va21hcmsgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J24IO2bhCDsnbTsmqntlZjsi6Qg7IiYIOyeiOyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBBRERfQk9PS01BUktfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2lkXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBPblVuQm9va21hcmsgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn66Gc6re47J24IO2bhCDsnbTsmqntlZjsi6Qg7IiYIOyeiOyKteuLiOuLpC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2lkXSxcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZU1vZGFsRm9ybSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3coKHNob3cpID0+ICFzaG93KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtzaG93XSxcclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbmRlclRvb2x0aXAgPSAocHJvcHMpID0+IChcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZ1xyXG4gICAgICAgIDxNb3JlQnV0dG9uIGlkPVwiYnV0dG9uLXRvb2x0aXBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgJiYgIXBvc3QuUmV0d2VldFxyXG4gICAgICAgICAgICAgICAgICYmIDxCdXR0b24gdmFyaWFudD1cIndhcm5pbmdcIiBvbkNsaWNrPXtoYW5kbGVNb2RhbEZvcm19PuyImOyglTwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWRcclxuICAgICAgICAgICAgICAgJiYgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17b25Qb3N0RGVsZXRlfT7sgq3soJw8L0J1dHRvbj59XHJcbiAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgeygoaWQgJiYgcG9zdC5Vc2VyLmlkICE9PSBpZCkgfHwgIWlkKVxyXG4gICAgICAgICAgICAgICAgJiYgPEJ1dHRvbiB2YXJpYW50PVwiZGFuZ2VyXCIgb25DbGljaz17aGFuZGxlTW9kYWxGb3JtfT7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgPC9Nb3JlQnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICBjb25zdCBsaWtlID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG5cclxuICAgIGNvbnN0IGJvb2ttYXJrID0gcG9zdC5Cb29rbWFya2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkRGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17Q2FyZFN0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBzdHlsZT17aGVhZGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDslYTsnbTrlJTqsIAgcG9zdOydmCB1c2VyaWTsmYAg6rCZ64uk66m0IOyViOuztOydtOqyjCAqL31cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5SZXR3ZWV0SWQgPyBgJHtwb3N0LlVzZXIubmlja25hbWV964uY7J20IOumrO2KuOyclyDtlZjshajsirXri4jri6QuYCA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgOiA8Rm9sbG93QnV0dG9uIHBvc3QgPSB7cG9zdH0vPn1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5IHN0eWxlPXtDYXJkQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldFxyXG4gICAgICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17UmV0d2VldENhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIHBvc3RpZD17cG9zdC5pZH0gaGVhZGVyID0gXCLrqZTsnbjsnbTrr7jsp4BcIiBpbWFnZXMgPSB7cG9zdC5SZXR3ZWV0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZElubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rbWFyayBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxCb29rbWFya0ZpbGwgc3R5bGUgPSB7Qm9va21hcmtTdHlsZX0gb25DbGljayA9IHtPblVuQm9va21hcmt9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxCb29rbWFyayBzdHlsZT17Qm9va21hcmtTdHlsZX0gb25DbGljaz17T25Cb29rbWFya30vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL3VzZXIvJHtwb3N0LlJldHdlZXQuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwiaG9sZGVyLmpzLzE3MXgxODBcIiByb3VuZGVkQ2lyY2xlIC8+ICovfXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnREaXY+e21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZnJvbU5vdygpfTwvTW9tZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5MaWtlcnMubGVuZ3RoID49IDEgPyA8SDY+7KKL7JWE7JqUIHtwb3N0Lkxpa2Vycy5sZW5ndGh96rCcPC9INj4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmRDb250ZW50IHBvc3RDb250ZW50ID0ge3Bvc3QuUmV0d2VldC5jb250ZW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cG9zdC5Db21tZW50c1swXSAmJiA8TGluayBocmVmPXtgL3VzZXIvJHtwb3N0LkNvbW1lbnRzWzBdLlVzZXIuaWR9YH0+PEFuY2hvcj57cG9zdC5Db21tZW50c1swXS5Vc2VyLm5pY2tuYW1lfTwvQW5jaG9yPjwvTGluaz59PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFA+e3Bvc3QuQ29tbWVudHNbMF0gJiYgcG9zdC5Db21tZW50c1swXS5jb250ZW50fTwvUD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3N0Q29tbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZElubmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXtUd2VldENhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VEaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgcG9zdGlkPXtwb3N0LmlkfSBoZWFkZXIgPSBcIuuplOyduOydtOuvuOyngFwiIGltYWdlcyA9IHtwb3N0LkltYWdlc30vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZURpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkSW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2ttYXJrIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPEJvb2ttYXJrRmlsbCBzdHlsZSA9IHtCb29rbWFya1N0eWxlfSBvbkNsaWNrID0ge09uVW5Cb29rbWFya30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPEJvb2ttYXJrIHN0eWxlPXtCb29rbWFya1N0eWxlfSBvbkNsaWNrPXtPbkJvb2ttYXJrfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0ge2AvdXNlci8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9XCJob2xkZXIuanMvMTcxeDE4MFwiIHJvdW5kZWRDaXJjbGUgLz4gKi99PGE+e3Bvc3QuVXNlci5uaWNrbmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb21lbnREaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9tZW50RGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuTGlrZXJzLmxlbmd0aCA+PSAxID8gPEg2Puyii+yVhOyalCB7cG9zdC5MaWtlcnMubGVuZ3RofeqwnDwvSDY+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDYXJkQ29udGVudCBwb3N0Q29udGVudCA9IHtwb3N0LmNvbnRlbnR9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57cG9zdC5Db21tZW50c1swXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5Db21tZW50c1swXS5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5jaG9yPntwb3N0LkNvbW1lbnRzWzBdLlVzZXIubmlja25hbWV9PC9BbmNob3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UD57cG9zdC5Db21tZW50c1swXSAmJiBwb3N0LkNvbW1lbnRzWzBdLmNvbnRlbnR9PC9QPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RDb21tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkSW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17dWxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17bGlTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3BhblN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZSBzdHlsZT17Q2FyZEljb259IG9uQ2xpY2s9e29uUmV0d2VldH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xpU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3NwYW5TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlrZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0RmlsbCBzdHlsZT17SGVhcnRGaWxsSWNvbn0gb25DbGljaz17b25Vbkxpa2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxIZWFydCBzdHlsZT17Q2FyZEljb259IG9uQ2xpY2s9e29uTGlrZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXtsaVN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzcGFuU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGF0RG90cyBzdHlsZT17Q2FyZEljb259IG9uQ2xpY2s9e09uVG9nZ2xlQ29tbWVudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e2xpU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3NwYW5TdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3cgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdmVybGF5VHJpZ2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheT17cmVuZGVyVG9vbHRpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhyZWVEb3RzIHN0eWxlPXtDYXJkSWNvbn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXlUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRPcGVuXHJcbiAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3QgdmFyaWFudD1cImZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LkNvbW1lbnRzWzBdICYmIHBvc3QuQ29tbWVudHMubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImhvbGRlci5qcy8yMHgyMD90ZXh0PSUyMFwiIGNsYXNzTmFtZT1cInJvdW5kZWQgbXItMlwiIGFsdD1cIlwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL3VzZXIvJHt2LlVzZXIuaWR9YH0+PGE+e3YuVXNlcklkICYmIHYuVXNlci5uaWNrbmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db21tZW50TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0NvbW1lbnRMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgXHJcbiAgICAgICAgICAgID8gPEVkaXRQb3N0Q29udGVudCBwb3N0PXtwb3N0fSBzaG93PXtzaG93fSBoYW5kbGVNb2RhbEZvcm09IHtoYW5kbGVNb2RhbEZvcm19Lz5cclxuICAgICAgICAgICAgOiA8UmVwb3J0IHBvc3Q9e3Bvc3R9IHNob3c9e3Nob3d9IGhhbmRsZU1vZGFsRm9ybT0ge2hhbmRsZU1vZGFsRm9ybX0vPn1cclxuICAgICAgIFxyXG4gICAgICAgIDwvQ2FyZERpdj5cclxuICAgICk7XHJcbn07XHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBMaWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgICAgIFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHsgcG9zdENvbnRlbnQgfSkgPT4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3Bvc3RDb250ZW50LnNwbGl0KC8oI1teXFxzI10rKS9nKS5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgIGlmICh2Lm1hdGNoKC8oI1teXFxzI10rKS8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9IGtleT17aX0+PGE+e3Z9PC9hPjwvTGluaz47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHsgcG9zdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFLCBVUExPQURfSU1BR0VTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBVcGxvYWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuIG1hcmdpbi10b3A6IDFyZW07XHJcbmBcclxuY29uc3QgUG9zdEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gZmxvYXQ6IHJpZ2h0O1xyXG4gbWFyZ2luLXRvcDogMXJlbTtcclxuYFxyXG5jb25zdCBJbWFlZ1BhdGhEaXYgPSBzdHlsZWQuZGl2YFxyXG4gZGlzcGxheTogZmxleDsgXHJcbiBtYXJnaW4tdG9wOiAyMHB4O1xyXG5gXHJcbmNvbnN0IEltYWdlRGl2ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tcmdodDogNXB4XHJcbmBcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRQb3N0RG9uZSwgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGltYWdlVXBsb2FkID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgICAgICAgIHNldFRleHQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthZGRQb3N0RG9uZV0pO1xyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpbWFnZVVwbG9hZC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbaW1hZ2VVcGxvYWQuY3VycmVudF0sXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25TdW1iaXRVcGxvYWQgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgn6rKM7Iuc6riA7J2EIOyekeyEse2VmOyEuOyalCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGV4dCwgaW1hZ2VQYXRoc10sXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2VzJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGYpID0+IHtcclxuICAgICAgICAgICAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGYpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbiAgICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgICAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgICAgICAgIH0pOyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtdLFxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VtYml0VXBsb2FkfSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsID48aDI+SG9tZTwvaDI+PC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcm93cz17M30gdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZS5JbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIHJlZj17aW1hZ2VVcGxvYWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gbXVsdGlwbGUgaGlkZGVuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZEJ1dHRvbiBvbkNsaWNrID0ge29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeA7JeF66Gc65OcPC9VcGxvYWRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RCdXR0b24gdHlwZT1cInN1Ym1pdFwiID7qsozsi5w8L1Bvc3RCdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbWFlZ1BhdGhEaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlRGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBhbHQ9e3Z9IHN0eWxlPSB7eyB3aWR0aDogJzIyMHB4JyB9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ltYWdlRGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvSW1hZWdQYXRoRGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICBcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvcHR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgWFNxdWFyZUZpbGwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAtaWNvbnMnO1xyXG5pbXBvcnQgeyBERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gJy4vSW1hZ2VzWm9vbSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ2FyZEltZzEgPSBzdHlsZWQoQ2FyZC5JbWcpYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgQ2FyZEltZzIgPSBzdHlsZWQoQ2FyZC5JbWcpYFxyXG4gICAgd2lkdGg6IDUwJTtcclxuYFxyXG5jb25zdCBYU3F1YXJlMSA9IHN0eWxlZChYU3F1YXJlRmlsbClgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuY29uc3QgWFNxdWFyZTIgPSBzdHlsZWQoWFNxdWFyZUZpbGwpYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDUwJTsgXHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzLCBoZWFkZXIsIHBvc3RpZCB9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd0ltYWdlc1pvb20sIHNldFNob3dJbWFnZXNab29tXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzZWxlY3RJbWFnZTEsIHNldFNlbGVjdEltYWdlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2VsZWN0SW1hZ2UyLCBzZXRTZWxlY3RJbWFnZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBkZWxldGVQb3N0SW1hZ2VMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtdLFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldFNob3dJbWFnZXNab29tKGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtdLFxyXG4gICAgKTtcclxuICAgXHJcbiAgICBjb25zdCBvbkRlbGV0ZUltYWdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoaW1hZ2VpZCwgcG9zdGlkKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgZGF0YTogeyBpbWFnZUlkOiBpbWFnZWlkLCBwb3N0SWQ6IHBvc3RpZCB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgW10sXHJcbiAgICApO1xyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlSW1hZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBpbWFnZXNbMF0uaWQudG9TdHJpbmcoMTApICYmICFzZWxlY3RJbWFnZTEpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyID0gJzAuNXJlbSBzb2xpZCByZWQnO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RJbWFnZTEoKHByZXYpID0+ICFwcmV2KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBpbWFnZXNbMF0uaWQudG9TdHJpbmcoMTApICYmIHNlbGVjdEltYWdlMSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdEltYWdlMSgocHJldikgPT4gIXByZXYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IGltYWdlc1sxXS5pZC50b1N0cmluZygxMCkgJiYgIXNlbGVjdEltYWdlMikge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXIgPSAnMC41cmVtIHNvbGlkIHJlZCc7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdEltYWdlMigocHJldikgPT4gIXByZXYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IGltYWdlc1sxXS5pZC50b1N0cmluZygxMCkgJiYgc2VsZWN0SW1hZ2UyKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlciA9ICdub25lJztcclxuICAgICAgICAgICAgc2V0U2VsZWN0SW1hZ2UyKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAgICBbc2VsZWN0SW1hZ2UxLCBzZWxlY3RJbWFnZTIsIGltYWdlc10sXHJcblxyXG4gICAgKTtcclxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgaGVhZGVyID09PSAn7IiY7KCVJ1xyXG4gICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEltZzEgaWQgPXtpbWFnZXNbMF0uaWR9IG9uQ2xpY2sgPSB7aGFuZGxlRGVsZXRlSW1hZ2V9ICB2YXJpYW50PVwidG9wXCIgYWx0PXtpbWFnZXNbMF0uc3JjfSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMF0uc3JjfWB9IC8+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0SW1hZ2UxICYmIDxYU3F1YXJlMSAgb25DbGljaz17IWRlbGV0ZVBvc3RJbWFnZUxvYWRpbmcgJiYgb25EZWxldGVJbWFnZShpbWFnZXNbMF0uaWQsIHBvc3RpZCl9PkRlbGV0ZTwvWFNxdWFyZTE+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2hlYWRlciA9PT0gJ+uplOyduOydtOuvuOyngCcgXHJcbiAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmRJbWcxIHZhcmlhbnQ9XCJ0b3BcIiBhbHQ9e2ltYWdlc1swXS5zcmN9IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS8ke2ltYWdlc1swXS5zcmN9YH0gb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbSBpbWFnZXM9e2ltYWdlc30gb25DbG9zZT17b25DbG9zZX0gLz59XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD4gIFxyXG4gICAgICAgICAgICB7aGVhZGVyID09PSAn7IiY7KCVJ1xyXG4gICAgICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nMiBpZCA9e2ltYWdlc1swXS5pZH0gb25DbGljayA9IHtoYW5kbGVEZWxldGVJbWFnZX0gdmFyaWFudD1cInRvcFwiIGFsdD17aW1hZ2VzWzBdLnNyY30gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkSW1nMiBpZCA9e2ltYWdlc1sxXS5pZH0gb25DbGljayA9IHtoYW5kbGVEZWxldGVJbWFnZX0gdmFyaWFudD1cInRvcFwiIGFsdD17aW1hZ2VzWzFdLnNyY30gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzFdLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RJbWFnZTEgJiYgPFhTcXVhcmUyIG9uQ2xpY2s9eyFkZWxldGVQb3N0SW1hZ2VMb2FkaW5nICYmIG9uRGVsZXRlSW1hZ2UoaW1hZ2VzWzBdLmlkLCBwb3N0aWQpfT5EZWxldGU8L1hTcXVhcmUyPn1cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0SW1hZ2UyICYmIDxYU3F1YXJlMSAgb25DbGljaz17IWRlbGV0ZVBvc3RJbWFnZUxvYWRpbmcgJiYgb25EZWxldGVJbWFnZShpbWFnZXNbMV0uaWQsIHBvc3RpZCl9PkRlbGV0ZTwvWFNxdWFyZTE+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtoZWFkZXIgPT09ICfrqZTsnbjsnbTrr7jsp4AnXHJcbiAgICAgICAgICAgICAgICAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEltZzIgdmFyaWFudD1cInRvcFwiIGFsdD17aW1hZ2VzWzBdLnNyY30gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfSBvbkNsaWNrPXtvblpvb219Lz5cclxuICAgICAgICAgICAgICAgIDxDYXJkSW1nMiB2YXJpYW50PVwidG9wXCIgYWx0PXtpbWFnZXNbMV0uc3JjfSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvJHtpbWFnZXNbMV0uc3JjfWB9IG9uQ2xpY2s9e29uWm9vbX0vPlxyXG4gICAgICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIGhlYWRlciA9PT0gJ+yImOyglScgXHJcbiAgICAgICAgICAgICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDYXJkSW1nMSBpZCA9e2ltYWdlc1swXS5pZH0gb25DbGljayA9IHtoYW5kbGVEZWxldGVJbWFnZX0gdmFyaWFudD1cInRvcFwiIGFsdD17aW1hZ2VzWzBdLnNyY30gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfSAvPlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdEltYWdlMSAmJiA8WFNxdWFyZTEgIG9uQ2xpY2s9eyFkZWxldGVQb3N0SW1hZ2VMb2FkaW5nICYmIG9uRGVsZXRlSW1hZ2UoaW1hZ2VzWzBdLmlkLCBwb3N0aWQpfT5EZWxldGU8L1hTcXVhcmUxPn1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge2hlYWRlciA9PT0gJ+uplOyduOydtOuvuOyngCdcclxuICAgICAgICAgICAgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZEltZzEgdmFyaWFudD1cInRvcFwiIGFsdD17aW1hZ2VzWzBdLnNyY30gc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7aW1hZ2VzWzBdLnNyY31gfSBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG5Qb3N0SW1hZ2VzLnByb3BUeXBlcyA9IHtcclxuICAgIGltYWdlczogUHJvcHR5cGVzLmFycmF5T2YoUHJvcHR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxuICAgIGhlYWRlcjogUHJvcHR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcG9zdGlkOiBQcm9wdHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3RHcm91cCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVjb21tZW5kRm9sbG93QnV0dG9uIGZyb20gJy4vUmVjb21tZW5kRm9sbG93QnV0dG9uJztcclxuXHJcbmNvbnN0IExpc3QgPSBzdHlsZWQoTGlzdEdyb3VwKWBcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIHRvcDogMjFyZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA3O1xyXG5gO1xyXG5jb25zdCBMaXN0R3JvdXBJdGVtID0gc3R5bGVkKExpc3RHcm91cC5JdGVtKWBcclxuICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG5gO1xyXG5jb25zdCBMaXN0SXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIFxyXG5gO1xyXG5jb25zdCBSZWNvbW1lbmQgPSAoeyByZWNvbW1lbmQgfSkgPT4ge1xyXG4gICByZXR1cm4gKFxyXG4gICAgICAgPD5cclxuICAgICAgICA8TGlzdEdyb3VwPlxyXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0+V2hvIHRvIGZvbGxvdzwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICAgIHtyZWNvbW1lbmQgJiYgcmVjb21tZW5kLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtV3JhcHBlciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGFjdGlvbiBocmVmPXtgL3VzZXIvJHt2LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7di5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlY29tbWVuZEZvbGxvd0J1dHRvbiByZWNvbW1lbmRVc2VyPXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtV3JhcHBlcj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICA8Lz5cclxuICAgKTtcclxufTtcclxuUmVjb21tZW5kLnByb3BUeXBlcyA9IHtcclxuICAgIHJlY29tbWVuZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVjb21tZW5kO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBQcm9wdHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBpc0ZvbGxvd0J1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICB0b3A6IDEuNnJlbTtcclxuYFxyXG5cclxuY29uc3QgUmVjb21tZW5kRm9sbG93QnV0dG9uID0gKHsgcmVjb21tZW5kVXNlciB9KSA9PiB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZSAmJiBtZS5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHJlY29tbWVuZFVzZXIuaWQpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVjb21tZW5kVXNlci5pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlY29tbWVuZFVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW2lzRm9sbG93aW5nLCByZWNvbW1lbmRVc2VyXSxcclxuICAgICk7IFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlzRm9sbG93QnV0dG9uICBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIHtpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCcgfVxyXG4gICAgICAgICAgICA8L2lzRm9sbG93QnV0dG9uPlxyXG4gICAgKTtcclxufTtcclxuUmVjb21tZW5kRm9sbG93QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICAgIHJlY29tbWVuZFVzZXI6IFByb3B0eXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVjb21tZW5kRm9sbG93QnV0dG9uO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE1vZGFsLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEFERF9SRVBPUlRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEZvcm1CdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICBmbG9hdDogcmlnaHQ7XHJcbmBcclxuXHJcbmNvbnN0IFJlcG9ydCA9ICh7IHBvc3QsIHNob3csIGhhbmRsZU1vZGFsRm9ybSB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFJlcG9ydExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCBbcmVwb3J0LCBvbkNoYW5nZVJlcG9ydF0gPSB1c2VJbnB1dCgnJyk7IFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYgKGFkZFJlcG9ydExvYWRpbmcpIHtcclxuICAgICAgICAgIGFsZXJ0KCfsi6Dqs6Ag7KCR7IiY65CY7JeI7Iq164uI64ukLicpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uUmVwb3J0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBoYW5kbGVNb2RhbEZvcm0oKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9SRVBPUlRfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogeyBwb3N0SWQ6IHBvc3QuaWQsIGNvbnRlbnQ6IHJlcG9ydCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBbcG9zdC5pZCwgcmVwb3J0XSxcclxuICAgICk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgICAgICBvbkhpZGU9e2hhbmRsZU1vZGFsRm9ybX1cclxuICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiRWRpdCBDb250ZW50XCJcclxuICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiZUVkaXQgQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICBSZXBvcnRcclxuICAgICAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3dzPXszfSB2YWx1ZT17cmVwb3J0fSBvbkNoYW5nZT17b25DaGFuZ2VSZXBvcnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1CdXR0b24gb25DbGljaz17b25SZXBvcnR9IHZhcmlhbnQ9XCJwcmltYXJ5XCIgPuyImOyglTwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuUmVwb3J0LnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgc2hvdzogcHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBoYW5kbGVNb2RhbEZvcm06IHByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IGxvZ291dFJlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IENhcmRMaW5rV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nLXRvcCA6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnRcclxuICAgIFxyXG5gO1xyXG5jb25zdCBMb2dvdXRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmA7XHJcbmNvbnN0IFByb2ZpbGVDYXJkID0gc3R5bGVkKENhcmQpYFxyXG4gICAgd2lkdGg6IDI2cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHsgXHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgIH1cclxuICAgIFxyXG5gO1xyXG5jb25zdCBDYXJkQm9keSA9IHN0eWxlZChDYXJkLkJvZHkpYFxyXG4gICAgcGFkZGluZzogMS4wcmVtO1xyXG5gO1xyXG5jb25zdCBDYXJkTGluayA9IHN0eWxlZChDYXJkLkxpbmspYFxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IE1vbWVudERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5gXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGxvZ291dEhhbmRsZXIgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgbG9nb3V0UmVxdWVzdEFjdGlvbigpLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW10sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvZmlsZUNhcmQ+XHJcbiAgICAgICAgICAgIHsvKiA8Q2FyZC5JbWcgdmFyaWFudD1cImxlZnRcIiBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMjA3NTQ2OTc1MS0zYTY2OTRmYjJmNjE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTUwMCZxPTgwXCIgd2lkdGg9JzE1NScgLz4gKi99XHJcbiAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL3VzZXIvJHttZS5pZH1gfT48YT48Q2FyZC5UaXRsZT57bWUubmlja25hbWV9PC9DYXJkLlRpdGxlPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TG9nb3V0QnV0dG9uIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PuuhnOq3uOyVhOybgzwvTG9nb3V0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPE1vbWVudERpdj5cclxuICAgICAgICAgICAgICAgICAgICBKb2luZWQge21vbWVudChtZS5jcmVhdGVkQXQpLmZvcm1hdCgnTU1NTSBZWVlZJyl9XHJcbiAgICAgICAgICAgICAgICA8L01vbWVudERpdj5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZExpbmtXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9IHtgL3VzZXIvJHttZS5pZH1gfT48YT48Q2FyZExpbmsgaHJlZj1cIiNcIj7qsozsi5zrrLwgPGJyLz57bWUuUG9zdHMubGVuZ3RofTwvQ2FyZExpbms+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj48YT48Q2FyZExpbmsgaHJlZj1cIiNcIj7tjJTroZzsmrAgPGJyLz57bWUuRm9sbG93aW5ncy5sZW5ndGh9PC9DYXJkTGluaz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPjxhPjxDYXJkTGluayBocmVmPVwiI1wiPu2MlOuhnOybjCA8YnIvPnttZS5Gb2xsb3dlcnMubGVuZ3RofTwvQ2FyZExpbms+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZExpbmtXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgPC9Qcm9maWxlQ2FyZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0sIFtdLFxyXG4pO1xyXG4gICAgICAgIHJldHVybiBbdmFsdWUsIGhhbmRsZXIsIHNldFZhbHVlXTtcclxufTtcclxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcclxuXHJcbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XHJcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xyXG4gICAgcmV0dXJuIGNhY2hlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjYWNoZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XHJcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xyXG5cclxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcclxuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcclxuICB9XHJcblxyXG4gIHZhciBuZXdPYmogPSB7fTtcclxuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xyXG5cclxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcclxuXHJcbiAgaWYgKGNhY2hlKSB7XHJcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcclxuXHJcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XHJcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XHJcbiAgICB2YXIgdG9rZW5zID0gW107XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcclxuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXHJcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxyXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghbmFtZSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcclxuICAgICAgICAgICAgaSA9IGo7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcclxuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xyXG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY291bnQpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XHJcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xyXG4gICAgICAgICAgICBpID0gajtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XHJcbiAgICB9XHJcbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcclxuICAgIHJldHVybiB0b2tlbnM7XHJcbn1cclxuLyoqXHJcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xyXG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XHJcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgdmFyIGtleSA9IDA7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICB2YXIgcGF0aCA9IFwiXCI7XHJcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XHJcbiAgICB9O1xyXG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcclxuICAgIH07XHJcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHZhbHVlO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcclxuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XHJcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xyXG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcclxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXHJcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcclxuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcclxuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XHJcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcclxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcclxuLyoqXHJcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XHJcbn1cclxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcclxuLyoqXHJcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xyXG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcclxuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxyXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcclxuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcclxuLyoqXHJcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxyXG4gKi9cclxuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XHJcbn1cclxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xyXG4vKipcclxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxyXG4gKi9cclxuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcclxuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xyXG4gICAgICAgIGlmICghbSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XHJcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgX2xvb3BfMShpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xyXG4vKipcclxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XHJcbn1cclxuLyoqXHJcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcclxuICAgIGlmICgha2V5cylcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXHJcbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XHJcbiAgICBpZiAoZ3JvdXBzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAga2V5cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGksXHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuLyoqXHJcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xyXG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxyXG4gKi9cclxuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcclxufVxyXG4vKipcclxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cclxuICovXHJcbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xyXG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XHJcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcclxuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xyXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cclxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XHJcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZW5kKSB7XHJcbiAgICAgICAgaWYgKCFzdHJpY3QpXHJcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xyXG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcclxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcclxuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcclxuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xyXG59XHJcbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcclxuLyoqXHJcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cclxuICpcclxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcclxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxyXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cclxuICovXHJcbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XHJcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcclxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcclxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcclxuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcclxufVxyXG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RGb3JtJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyByZXR3ZWV0RXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmV0d2VldEVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQocmV0d2VldEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmV0d2VldEVycm9yXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0SWQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgbWFpblBvc3RzXSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSBtZT17bWV9Lz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX1cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuXHJcbiAgICByZW1vdmVCb29rbWFya0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQm9va21hcmtEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUJvb2ttYXJrRXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQm9va21hcmtMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZEJvb2ttYXJrRG9uZTogZmFsc2UsXHJcbiAgICBhZGRCb29rbWFya0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblxyXG4gICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgcmV0d2VldEVycm9yOiBudWxsLFxyXG4gICBcclxuICAgZWRpdFBvc3RDb250ZW50TG9hZGluZzogZmFsc2UsXHJcbiAgIGVkaXRQb3N0Q29udGVudERvbmU6IGZhbHNlLFxyXG4gICBlZGl0UG9zdENvbnRlbnRFcnJvcjogbnVsbCxcclxuICAgXHJcbiAgIGRlbHRlUG9zdEltYWdlTG9hZGluZzogZmFsc2UsXHJcbiAgIGRlbHRlUG9zdEltYWdlRG9uZTogZmFsc2UsXHJcbiAgIGRlbHRlUG9zdEltYWdlRXJyb3I6IG51bGwsXHJcblxyXG4gICBhZGRSZXBvcnRMb2FkaW5nOiBmYWxzZSxcclxuICAgYWRkUmVwb3J0RG9uZTogZmFsc2UsXHJcbiAgIGFkZFJlcG9ydEVycm9yOiBudWxsLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUkVQT1JUX1JFUVVFU1QgPSAnQUREX1JFUE9SVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9SRVBPUlRfU1VDQ0VTUyA9ICdBRERfUkVQT1JUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1JFUE9SVF9GQUlMVVJFID0gJ0FERF9SRVBPUlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCA9ICdERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MgPSAnREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFID0gJ0RFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QgPSAnRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTID0gJ0VESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSA9ICdFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQk9PS01BUktTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfQk9PS01BUktTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFID0gJ0xPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0JPT0tNQVJLX1JFUVVFU1QgPSAnQUREX0JPT0tNQVJLX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0JPT0tNQVJLX1NVQ0NFU1MgPSAnQUREX0JPT0tNQVJLX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0JPT0tNQVJLX0ZBSUxVUkUgPSAnQUREX0JPT0tNQVJLX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSS19SRVFVRVNUID0gJ1JFTU9WRV9CT09LTUFSS19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSS19TVUNDRVNTID0gJ1JFTU9WRV9CT09LTUFSS19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSS19GQUlMVVJFID0gJ1JFTU9WRV9CT09LTUFSS19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBRERfUkVQT1JUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRSZXBvcnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9SRVBPUlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUmVwb3J0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUmVwb3J0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9SRVBPUlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVQb3N0SW1hZ2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5JbWFnZXMgPSBwb3N0LkltYWdlcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLkltYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9CT09LTUFSS19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkJvb2ttYXJrZXJzID0gcG9zdC5Cb29rbWFya2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9CT09LTUFSS19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lZGl0UG9zdENvbnRlbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9CT09LTUFSS19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQk9PS01BUktfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Cb29rbWFya2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0JPT0tNQVJLX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7ICBcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICBzZWFyY2hVc2VyTGlzdDogbnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIFxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgY2hhbmdlTmlja05hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tOYW1lRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrTmFtZURvbmU6IGZhbHNlLFxyXG5cclxuICAgIHNlYXJjaFVzZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgc2VhcmNoVXNlckRvbmU6IGZhbHNlLFxyXG4gICBzZWFyY2hVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbWU6IG51bGwsXHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHJlY29tbWVuZDogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFID0gJ0xPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUID0gJ0xPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVTRVQgPSAnU0lHTl9VUF9SRVNFVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgZGF0YSxcclxufSk7IFxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgIGRhdGEsXHJcbn0pOyBcclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlY29tbWVuZCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgIGNhc2UgTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVTRVQ6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEuaWQgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07IFxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFERF9CT09LTUFSS19GQUlMVVJFLCBBRERfQk9PS01BUktfUkVRVUVTVCwgQUREX0JPT0tNQVJLX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9SRVBPUlRfRkFJTFVSRSwgQUREX1JFUE9SVF9SRVFVRVNULCBBRERfUkVQT1JUX1NVQ0NFU1MsIERFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUsIERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QsIERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MsIEVESVRfUE9TVF9DT05URU5UX0ZBSUxVUkUsIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QsIEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9CT09LTUFSS19GQUlMVVJFLCBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCwgUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkUsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBBZGRSZXBvcnRBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L3JlcG9ydGAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBBZGRSZXBvcnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQWRkUmVwb3J0QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFUE9SVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFUE9SVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlbHRlUG9zdEltYWdlQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2ltYWdlLyR7ZGF0YS5pbWFnZUlkfWAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBEZWx0ZVBvc3RJbWFnZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChEZWx0ZVBvc3RJbWFnZUFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVkaXRQb3N0Q29udGVudEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2VkaXRgLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogRWRpdFBvc3RDb250ZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEVkaXRQb3N0Q29udGVudEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBcGkoZGF0YSwgbGFzdElkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FwaSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FwaShsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FwaSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9hZGRwb3N0JywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L3JlbW92ZWApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFwaSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tNYXJrQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9ib29rbWFya2ApO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRCb29rTWFyayhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZEJvb2tNYXJrQXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9CT09LTUFSS19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQk9PS01BUktfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tNYXJrQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS91bmJvb2ttYXJrYCk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZUJvb2tNYXJrKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQm9va01hcmtBcGksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9CT09LTUFSS19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsaWtlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vdW5saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFJlcG9ydCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9SRVBPUlRfUkVRVUVTVCwgQWRkUmVwb3J0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hEZWx0ZVBvc3RJbWFnZSgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgzMDAwLCBERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNULCBEZWx0ZVBvc3RJbWFnZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdFBvc3RDb250ZW50KCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QsIEVkaXRQb3N0Q29udGVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQk9PS01BUktfUkVRVUVTVCwgcmVtb3ZlQm9va01hcmspO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZEJvb2ttYXJrKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0JPT0tNQVJLX1JFUVVFU1QsIGFkZEJvb2tNYXJrKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFJlcG9ydCksXHJcbiAgICAgICAgZm9yayh3YXRjaERlbHRlUG9zdEltYWdlKSxcclxuICAgICAgICBmb3JrKHdhdGNoRWRpdFBvc3RDb250ZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQm9va21hcmspLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRCb29rbWFyayksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCB0aHJvdHRsZSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSwgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFLCBMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QsIExPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUywgTE9BRF9TRUFSQ0hfVVNFUl9GQUlMVVJFLCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QsIExPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkUsIExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCwgTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTLCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIExPQURfVVNFUl9QT1NUU19TVUNDRVNTIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQm9va21hcmtzQXBpKGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvYm9va21hcmtzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfSBgKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZEJvb2ttYXJrcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRCb29rbWFya3NBcGksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWNvbW1lbmRVc2VyQXBpKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvcmVjb21tZW5kJyk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIHJlY29tbWVuZFVzZXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZWNvbW1lbmRVc2VyQXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoVXNlckFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9saXN0P2RhdGE9JHtkYXRhIHx8IG51bGx9YCk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIHNlYXJjaFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWFyY2hVc2VyQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FwaShkYXRhLCBsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQXBpLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BcGkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2dpbicpO1xyXG59ICAgXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FwaSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL3NpZ25VcCcsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWdudXBBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBcGkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrTmFtZUFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufVxyXG5mdW5jdGlvbiogY2hhbmdlTmlja05hbWUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrTmFtZUFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vdW5mb2xsb3dgKTtcclxufVxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGZvbGxvd2Vyc0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRmb2xsb3dlcnNBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRmb2xsb3dpbmdzQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkZm9sbG93aW5nc0FwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVmb2xsb3dlckFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZWZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlZm9sbG93ZXJBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEJvb2tNYXJrcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCwgbG9hZEJvb2ttYXJrcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVjb21tZW5kVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCwgcmVjb21tZW5kVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoVXNlcigpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgzMDAwLCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QsIHNlYXJjaFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tOYW1lKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkVXNlclBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkZm9sbG93ZXJzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkZm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlZm9sbG93ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQm9va01hcmtzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVjb21tZW5kVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaFNlYXJjaFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAgICAgZm9yayh3YXRjaGxvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hsb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaGxvYWRVc2VyUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJpbXBvcnQgeyBlbmFibGVFUzUsIHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gICAgZW5hYmxlRVM1KCk7XHJcbiAgICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9