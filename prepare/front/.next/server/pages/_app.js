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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const NodeBird = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "\uD2B8\uC704\uD130"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3V0aWwvcHJvZHVjZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJyZW1vdmVCb29rbWFya0xvYWRpbmciLCJyZW1vdmVCb29rbWFya0RvbmUiLCJyZW1vdmVCb29rbWFya0Vycm9yIiwiYWRkQm9va21hcmtMb2FkaW5nIiwiYWRkQm9va21hcmtEb25lIiwiYWRkQm9va21hcmtFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsImVkaXRQb3N0Q29udGVudExvYWRpbmciLCJlZGl0UG9zdENvbnRlbnREb25lIiwiZWRpdFBvc3RDb250ZW50RXJyb3IiLCJkZWx0ZVBvc3RJbWFnZUxvYWRpbmciLCJkZWx0ZVBvc3RJbWFnZURvbmUiLCJkZWx0ZVBvc3RJbWFnZUVycm9yIiwiYWRkUmVwb3J0TG9hZGluZyIsImFkZFJlcG9ydERvbmUiLCJhZGRSZXBvcnRFcnJvciIsIkFERF9SRVBPUlRfUkVRVUVTVCIsIkFERF9SRVBPUlRfU1VDQ0VTUyIsIkFERF9SRVBPUlRfRkFJTFVSRSIsIkRFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9JTUFHRV9TVUNDRVNTIiwiREVMRVRFX1BPU1RfSU1BR0VfRkFJTFVSRSIsIkVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QiLCJFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTIiwiRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSIsIkxPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCIsIkxPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyIsIkxPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSIsIkFERF9CT09LTUFSS19SRVFVRVNUIiwiQUREX0JPT0tNQVJLX1NVQ0NFU1MiLCJBRERfQk9PS01BUktfRkFJTFVSRSIsIlJFTU9WRV9CT09LTUFSS19SRVFVRVNUIiwiUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MiLCJSRU1PVkVfQk9PS01BUktfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImFkZFBvc3RTdWNjZXNzQWN0aW9uIiwiYWRkUG9zdEZhaWx1cmVBY3Rpb24iLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiZGVsZXRlUG9zdEltYWdlTG9hZGluZyIsImRlbGV0ZVBvc3RJbWFnZURvbmUiLCJkZWxldGVQb3N0SW1hZ2VFcnJvciIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJJbWFnZXMiLCJmaWx0ZXIiLCJJbWFnZUlkIiwiQm9va21hcmtlcnMiLCJVc2VySWQiLCJjb250ZW50IiwicHVzaCIsIkxpa2VycyIsInVubGlrZVBvc3RzTG9hZGluZyIsInVubGlrZVBvc3RzRG9uZSIsInVubGlrZVBvc3RzRXJyb3IiLCJ1bnNoaWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiQ29tbWVudHMiLCJpIiwic2VhcmNoVXNlckxpc3QiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJjaGFuZ2VOaWNrTmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrTmFtZUVycm9yIiwiY2hhbmdlTmlja05hbWVEb25lIiwic2VhcmNoVXNlckxvYWRpbmciLCJzZWFyY2hVc2VyRG9uZSIsInNlYXJjaFVzZXJFcnJvciIsIm1lIiwidXNlckluZm8iLCJyZWNvbW1lbmQiLCJMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QiLCJMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUiLCJMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QiLCJMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX1JFU0VUIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwibG9nb3V0RmFpbHVyZUFjdGlvbiIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RXJyb3IiLCJsb2dPdXREb25lIiwibmlja25hbWUiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiLCJwb3N0U2FnYSIsIkFkZFJlcG9ydEFwaSIsInBvc3RJZCIsIkFkZFJlcG9ydCIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsIkRlbHRlUG9zdEltYWdlQXBpIiwiZGVsZXRlIiwiaW1hZ2VJZCIsIkRlbHRlUG9zdEltYWdlIiwiRWRpdFBvc3RDb250ZW50QXBpIiwicGF0Y2giLCJFZGl0UG9zdENvbnRlbnQiLCJsb2FkSGFzaHRhZ1Bvc3RzQXBpIiwibGFzdElkIiwiZ2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRQb3N0QXBpIiwibG9hZFBvc3QiLCJsb2FkUG9zdHNBcGkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QXBpIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBcGkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFwaSIsImFkZEJvb2tNYXJrQXBpIiwiYWRkQm9va01hcmsiLCJyZW1vdmVCb29rTWFya0FwaSIsInJlbW92ZUJvb2tNYXJrIiwibGlrZVBvc3RBcGkiLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ3YXRjaEFkZFJlcG9ydCIsInRha2VMYXRlc3QiLCJ3YXRjaERlbHRlUG9zdEltYWdlIiwidGhyb3R0bGUiLCJ3YXRjaEVkaXRQb3N0Q29udGVudCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoUmVtb3ZlQm9va21hcmsiLCJ3YXRjaEFkZEJvb2ttYXJrIiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hSZXR3ZWV0IiwibG9hZEJvb2ttYXJrc0FwaSIsImxvYWRCb29rbWFya3MiLCJyZWNvbW1lbmRVc2VyQXBpIiwicmVjb21tZW5kVXNlciIsInNlYXJjaFVzZXJBcGkiLCJzZWFyY2hVc2VyIiwibG9hZFVzZXJQb3N0c0FwaSIsImxvYWRVc2VyUG9zdHMiLCJsb2FkTXlJbmZvQXBpIiwibG9hZE15SW5mbyIsImxvYWRVc2VyQXBpIiwibG9hZFVzZXIiLCJzaWdudXBBcGkiLCJzaWdudXAiLCJsb2dJbkFwaSIsImxvZ0luIiwibG9nT3V0QXBpIiwibG9nT3V0IiwiY2hhbmdlTmlja05hbWVBcGkiLCJjaGFuZ2VOaWNrTmFtZSIsImZvbGxvd0FwaSIsImZvbGxvdyIsInVuZm9sbG93QXBpIiwidW5mb2xsb3ciLCJsb2FkZm9sbG93ZXJzQXBpIiwibG9hZGZvbGxvd2VycyIsImxvYWRmb2xsb3dpbmdzQXBpIiwibG9hZGZvbGxvd2luZ3MiLCJyZW1vdmVmb2xsb3dlckFwaSIsInJlbW92ZWZvbGxvd2VyIiwid2F0Y2hMb2FkQm9va01hcmtzIiwid2F0Y2hSZWNvbW1lbmRVc2VyIiwid2F0Y2hTZWFyY2hVc2VyIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNobG9hZE15SW5mbyIsIndhdGNobG9hZFVzZXIiLCJ3YXRjaGxvYWRVc2VyUG9zdHMiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYXJncyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzNDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQSxrQkFESjtBQVNILENBVkQ7O0FBV0FGLFFBQVEsQ0FBQ0csU0FBVCxHQUFxQjtBQUNqQkYsV0FBUyxFQUFFRyxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURoQixDQUFyQjtBQUllQyw0SEFBTyxDQUFDQyxTQUFSLENBQWtCUixRQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1TLFdBQVcsR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDL0IsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0MsMERBQUw7QUFDSUMsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkosTUFBdkI7QUFDQSxhQUFPQSxNQUFNLENBQUNLLE9BQWQ7O0FBQ0o7QUFBUztBQUNMLGNBQU1DLGNBQWMsR0FBR0MsNkRBQWUsQ0FBQztBQUNuQ0MsNkRBRG1DO0FBRW5DQyw2REFBSUE7QUFGK0IsU0FBRCxDQUF0QztBQUlBLGVBQU9ILGNBQWMsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLENBQXJCO0FBQ0g7QUFWTDtBQVlQLENBYkQ7O0FBZWVGLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNWSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxFQURhO0FBRXhCQyxZQUFVLEVBQUUsSUFGWTtBQUd4QkMsWUFBVSxFQUFFLEVBSFk7QUFJeEJDLGNBQVksRUFBRSxJQUpVO0FBTXhCQyx1QkFBcUIsRUFBRSxLQU5DO0FBT3hCQyxvQkFBa0IsRUFBRSxLQVBJO0FBUXhCQyxxQkFBbUIsRUFBRSxJQVJHO0FBVXhCQyxvQkFBa0IsRUFBRSxLQVZJO0FBV3hCQyxpQkFBZSxFQUFFLEtBWE87QUFZeEJDLGtCQUFnQixFQUFFLElBWk07QUFjeEJDLGlCQUFlLEVBQUUsS0FkTztBQWV4QkMsY0FBWSxFQUFFLEtBZlU7QUFnQnhCQyxlQUFhLEVBQUUsSUFoQlM7QUFrQnhCQyxtQkFBaUIsRUFBRSxLQWxCSztBQW1CeEJDLGdCQUFjLEVBQUUsS0FuQlE7QUFvQnhCQyxpQkFBZSxFQUFFLElBcEJPO0FBc0J4QkMsaUJBQWUsRUFBRSxLQXRCTztBQXVCeEJDLGNBQVksRUFBRSxLQXZCVTtBQXdCeEJDLGVBQWEsRUFBRSxJQXhCUztBQTBCeEJDLGtCQUFnQixFQUFFLEtBMUJNO0FBMkJ4QkMsZUFBYSxFQUFFLEtBM0JTO0FBNEJ4QkMsZ0JBQWMsRUFBRSxJQTVCUTtBQThCeEJDLGdCQUFjLEVBQUUsS0E5QlE7QUErQnhCQyxhQUFXLEVBQUUsS0EvQlc7QUFnQ3hCQyxjQUFZLEVBQUUsSUFoQ1U7QUFrQ3hCQyxtQkFBaUIsRUFBRSxLQWxDSztBQW1DeEJDLGdCQUFjLEVBQUUsS0FuQ1E7QUFvQ3hCQyxpQkFBZSxFQUFFLElBcENPO0FBc0N4QkMsbUJBQWlCLEVBQUUsS0F0Q0s7QUF1Q3hCQyxnQkFBYyxFQUFFLEtBdkNRO0FBd0N4QkMsaUJBQWUsRUFBRSxJQXhDTztBQTBDeEJDLHFCQUFtQixFQUFFLEtBMUNHO0FBMkN4QkMsa0JBQWdCLEVBQUUsS0EzQ007QUE0Q3hCQyxtQkFBaUIsRUFBRSxJQTVDSztBQThDekJDLGdCQUFjLEVBQUUsS0E5Q1M7QUErQ3pCQyxhQUFXLEVBQUUsS0EvQ1k7QUFnRHpCQyxjQUFZLEVBQUUsSUFoRFc7QUFrRHpCQyx3QkFBc0IsRUFBRSxLQWxEQztBQW1EekJDLHFCQUFtQixFQUFFLEtBbkRJO0FBb0R6QkMsc0JBQW9CLEVBQUUsSUFwREc7QUFzRHpCQyx1QkFBcUIsRUFBRSxLQXRERTtBQXVEekJDLG9CQUFrQixFQUFFLEtBdkRLO0FBd0R6QkMscUJBQW1CLEVBQUUsSUF4REk7QUEwRHpCQyxrQkFBZ0IsRUFBRSxLQTFETztBQTJEekJDLGVBQWEsRUFBRSxLQTNEVTtBQTREekJDLGdCQUFjLEVBQUU7QUE1RFMsQ0FBckI7QUFnRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUlDLElBQUQsS0FBVztBQUMzQzdHLE1BQUksRUFBRWdGLGdCQURxQztBQUUzQzZCO0FBRjJDLENBQVgsQ0FBN0I7QUFJQSxNQUFNQyxvQkFBb0IsR0FBSUQsSUFBRCxLQUFXO0FBQzNDN0csTUFBSSxFQUFFaUYsZ0JBRHFDO0FBRTNDNEI7QUFGMkMsQ0FBWCxDQUE3QjtBQUlBLE1BQU1FLG9CQUFvQixHQUFJRixJQUFELEtBQVc7QUFDM0M3RyxNQUFJLEVBQUVrRjtBQURxQyxDQUFYLENBQTdCO0FBSUEsTUFBTThCLFVBQVUsR0FBSUgsSUFBRCxLQUFXO0FBQ2pDN0csTUFBSSxFQUFFK0YsbUJBRDJCO0FBRWpDYztBQUZpQyxDQUFYLENBQW5COztBQUtQLE1BQU1JLE9BQU8sR0FBRyxDQUFDbkgsS0FBSyxHQUFHVyxZQUFULEVBQXVCVixNQUF2QixLQUFrQztBQUM5QyxTQUFPbUgsNkRBQU8sQ0FBQ3BILEtBQUQsRUFBU3FILEtBQUQsSUFBVztBQUM3QixZQUFRcEgsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksV0FBS3dELGtCQUFMO0FBQ0kyRCxhQUFLLENBQUM5RCxnQkFBTixHQUF5QixJQUF6QjtBQUNBOEQsYUFBSyxDQUFDN0QsYUFBTixHQUFzQixLQUF0QjtBQUNBNkQsYUFBSyxDQUFDNUQsY0FBTixHQUF1QixJQUF2QjtBQUNBOztBQUNKLFdBQUtFLGtCQUFMO0FBQXlCO0FBQ3JCMEQsZUFBSyxDQUFDOUQsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQThELGVBQUssQ0FBQzdELGFBQU4sR0FBc0IsSUFBdEI7QUFDQTtBQUNIOztBQUNELFdBQUtJLGtCQUFMO0FBQ0l5RCxhQUFLLENBQUM5RCxnQkFBTixHQUF5QixLQUF6QjtBQUNBOEQsYUFBSyxDQUFDNUQsY0FBTixHQUF1QnhELE1BQU0sQ0FBQ3FILEtBQTlCO0FBQ0E7O0FBRUosV0FBS3pELHlCQUFMO0FBQ0l3RCxhQUFLLENBQUNFLHNCQUFOLEdBQStCLElBQS9CO0FBQ0FGLGFBQUssQ0FBQ0csbUJBQU4sR0FBNEIsS0FBNUI7QUFDQUgsYUFBSyxDQUFDSSxvQkFBTixHQUE2QixJQUE3QjtBQUNBOztBQUNKLFdBQUszRCx5QkFBTDtBQUFnQztBQUM1QnVELGVBQUssQ0FBQ0Usc0JBQU4sR0FBK0IsS0FBL0I7QUFDQUYsZUFBSyxDQUFDRyxtQkFBTixHQUE0QixJQUE1QjtBQUNBLGdCQUFNOUcsSUFBSSxHQUFHMkcsS0FBSyxDQUFDekcsU0FBTixDQUFnQjhHLElBQWhCLENBQXNCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTM0gsTUFBTSxDQUFDOEcsSUFBUCxDQUFZYyxNQUFqRCxDQUFiO0FBQ0FuSCxjQUFJLENBQUNvSCxNQUFMLEdBQWNwSCxJQUFJLENBQUNvSCxNQUFMLENBQVlDLE1BQVosQ0FBb0JKLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVMzSCxNQUFNLENBQUM4RyxJQUFQLENBQVlpQixPQUEvQyxDQUFkO0FBQ0E7QUFDSDs7QUFDRCxXQUFLakUseUJBQUw7QUFDSXNELGFBQUssQ0FBQ0Usc0JBQU4sR0FBK0IsS0FBL0I7QUFDQUYsYUFBSyxDQUFDSSxvQkFBTixHQUE2QnhILE1BQU0sQ0FBQ3FILEtBQXBDO0FBQ0E7O0FBRUosV0FBSzdDLHVCQUFMO0FBQ0k0QyxhQUFLLENBQUNyRyxxQkFBTixHQUE4QixJQUE5QjtBQUNBcUcsYUFBSyxDQUFDcEcsa0JBQU4sR0FBMkIsS0FBM0I7QUFDQW9HLGFBQUssQ0FBQ25HLG1CQUFOLEdBQTRCLElBQTVCO0FBQ0E7O0FBQ0osV0FBS3dELHVCQUFMO0FBQThCO0FBQzFCMkMsZUFBSyxDQUFDckcscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXFHLGVBQUssQ0FBQ3BHLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0EsZ0JBQU1QLElBQUksR0FBRzJHLEtBQUssQ0FBQ3pHLFNBQU4sQ0FBZ0I4RyxJQUFoQixDQUFzQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBUzNILE1BQU0sQ0FBQzhHLElBQVAsQ0FBWWMsTUFBakQsQ0FBYjtBQUNBbkgsY0FBSSxDQUFDdUgsV0FBTCxHQUFtQnZILElBQUksQ0FBQ3VILFdBQUwsQ0FBaUJGLE1BQWpCLENBQXlCSixDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTM0gsTUFBTSxDQUFDOEcsSUFBUCxDQUFZbUIsTUFBcEQsQ0FBbkI7QUFDQTtBQUNIOztBQUNELFdBQUt2RCx1QkFBTDtBQUNJMEMsYUFBSyxDQUFDckcscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXFHLGFBQUssQ0FBQ25HLG1CQUFOLEdBQTRCakIsTUFBTSxDQUFDcUgsS0FBbkM7QUFDQTs7QUFFSixXQUFLdEQseUJBQUw7QUFDSXFELGFBQUssQ0FBQ3BFLHNCQUFOLEdBQStCLElBQS9CO0FBQ0FvRSxhQUFLLENBQUNuRSxtQkFBTixHQUE0QixLQUE1QjtBQUNBbUUsYUFBSyxDQUFDbEUsb0JBQU4sR0FBNkIsSUFBN0I7QUFDQTs7QUFDSixXQUFLYyx5QkFBTDtBQUFnQztBQUM1QixnQkFBTXZELElBQUksR0FBRzJHLEtBQUssQ0FBQ3pHLFNBQU4sQ0FBZ0I4RyxJQUFoQixDQUFzQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBUzNILE1BQU0sQ0FBQzhHLElBQVAsQ0FBWWMsTUFBakQsQ0FBYjtBQUNBbkgsY0FBSSxDQUFDeUgsT0FBTCxHQUFlbEksTUFBTSxDQUFDOEcsSUFBUCxDQUFZb0IsT0FBM0I7QUFDQWQsZUFBSyxDQUFDcEUsc0JBQU4sR0FBK0IsS0FBL0I7QUFDQW9FLGVBQUssQ0FBQ25FLG1CQUFOLEdBQTRCLElBQTVCO0FBRUE7QUFDSDs7QUFDRCxXQUFLZ0IseUJBQUw7QUFDSW1ELGFBQUssQ0FBQ3BFLHNCQUFOLEdBQStCLEtBQS9CO0FBQ0FvRSxhQUFLLENBQUNsRSxvQkFBTixHQUE2QmxELE1BQU0sQ0FBQ3FILEtBQXBDO0FBQ0E7O0FBRUosV0FBS2hELG9CQUFMO0FBQ0krQyxhQUFLLENBQUNsRyxrQkFBTixHQUEyQixJQUEzQjtBQUNBa0csYUFBSyxDQUFDakcsZUFBTixHQUF3QixLQUF4QjtBQUNBaUcsYUFBSyxDQUFDaEcsZ0JBQU4sR0FBeUIsSUFBekI7QUFDQTs7QUFDSixXQUFLa0Qsb0JBQUw7QUFBMkI7QUFDdkI4QyxlQUFLLENBQUNsRyxrQkFBTixHQUEyQixLQUEzQjtBQUNBa0csZUFBSyxDQUFDakcsZUFBTixHQUF3QixJQUF4QjtBQUNBLGdCQUFNVixJQUFJLEdBQUcyRyxLQUFLLENBQUN6RyxTQUFOLENBQWdCOEcsSUFBaEIsQ0FBc0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVMzSCxNQUFNLENBQUM4RyxJQUFQLENBQVljLE1BQWpELENBQWI7QUFDQW5ILGNBQUksQ0FBQ3VILFdBQUwsQ0FBaUJHLElBQWpCLENBQXNCO0FBQUVSLGNBQUUsRUFBRTNILE1BQU0sQ0FBQzhHLElBQVAsQ0FBWW1CO0FBQWxCLFdBQXRCO0FBQ0E7QUFDSDs7QUFDRCxXQUFLMUQsb0JBQUw7QUFDSTZDLGFBQUssQ0FBQ2xHLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0FrRyxhQUFLLENBQUNoRyxnQkFBTixHQUF5QnBCLE1BQU0sQ0FBQ3FILEtBQWhDO0FBQ0E7O0FBRUosV0FBSzFDLGlCQUFMO0FBQ0l5QyxhQUFLLENBQUMvRixlQUFOLEdBQXdCLElBQXhCO0FBQ0ErRixhQUFLLENBQUM5RixZQUFOLEdBQXFCLEtBQXJCO0FBQ0E4RixhQUFLLENBQUM3RixhQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBQ0osV0FBS3FELGlCQUFMO0FBQXdCO0FBQ3BCd0MsZUFBSyxDQUFDL0YsZUFBTixHQUF3QixLQUF4QjtBQUNBK0YsZUFBSyxDQUFDOUYsWUFBTixHQUFxQixJQUFyQjtBQUNBLGdCQUFNYixJQUFJLEdBQUcyRyxLQUFLLENBQUN6RyxTQUFOLENBQWdCOEcsSUFBaEIsQ0FBc0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVMzSCxNQUFNLENBQUM4RyxJQUFQLENBQVljLE1BQWpELENBQWI7QUFDQW5ILGNBQUksQ0FBQzJILE1BQUwsQ0FBWUQsSUFBWixDQUFpQjtBQUFFUixjQUFFLEVBQUUzSCxNQUFNLENBQUM4RyxJQUFQLENBQVltQjtBQUFsQixXQUFqQjtBQUNBO0FBQ0g7O0FBQ0QsV0FBS3BELGlCQUFMO0FBQ0l1QyxhQUFLLENBQUMvRixlQUFOLEdBQXdCLEtBQXhCO0FBQ0ErRixhQUFLLENBQUM3RixhQUFOLEdBQXNCdkIsTUFBTSxDQUFDcUgsS0FBN0I7QUFDQTs7QUFFSixXQUFLdkMsbUJBQUw7QUFDSXNDLGFBQUssQ0FBQ2lCLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0FqQixhQUFLLENBQUNrQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0FsQixhQUFLLENBQUNtQixnQkFBTixHQUF5QixJQUF6QjtBQUNKOztBQUVBLFdBQUt4RCxtQkFBTDtBQUEwQjtBQUN0QixnQkFBTXRFLElBQUksR0FBRzJHLEtBQUssQ0FBQ3pHLFNBQU4sQ0FBZ0I4RyxJQUFoQixDQUFzQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBUzNILE1BQU0sQ0FBQzhHLElBQVAsQ0FBWWMsTUFBakQsQ0FBYjtBQUNBbkgsY0FBSSxDQUFDMkgsTUFBTCxHQUFjM0gsSUFBSSxDQUFDMkgsTUFBTCxDQUFZTixNQUFaLENBQW9CSixDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTM0gsTUFBTSxDQUFDOEcsSUFBUCxDQUFZbUIsTUFBL0MsQ0FBZDtBQUNBYixlQUFLLENBQUNpQixrQkFBTixHQUEyQixLQUEzQjtBQUNBakIsZUFBSyxDQUFDa0IsZUFBTixHQUF3QixJQUF4QjtBQUNKO0FBQ0M7O0FBQ0QsV0FBS3RELG1CQUFMO0FBQ0lvQyxhQUFLLENBQUNpQixrQkFBTixHQUEyQixLQUEzQjtBQUNBakIsYUFBSyxDQUFDbUIsZ0JBQU4sR0FBeUJ2SSxNQUFNLENBQUNxSCxLQUFoQztBQUNKOztBQUVBLFdBQUtwQyxnQkFBTDtBQUNJbUMsYUFBSyxDQUFDbkYsY0FBTixHQUF1QixJQUF2QjtBQUNBbUYsYUFBSyxDQUFDbEYsV0FBTixHQUFvQixLQUFwQjtBQUNBa0YsYUFBSyxDQUFDakYsWUFBTixHQUFxQixJQUFyQjtBQUNBOztBQUNKLFdBQUsrQyxnQkFBTDtBQUNJa0MsYUFBSyxDQUFDbkYsY0FBTixHQUF1QixLQUF2QjtBQUNBbUYsYUFBSyxDQUFDbEYsV0FBTixHQUFvQixJQUFwQjtBQUNBa0YsYUFBSyxDQUFDekcsU0FBTixDQUFnQjZILE9BQWhCLENBQXdCeEksTUFBTSxDQUFDOEcsSUFBL0I7QUFDQU0sYUFBSyxDQUFDdkcsVUFBTixHQUFtQixFQUFuQjtBQUNBOztBQUNKLFdBQUtzRSxnQkFBTDtBQUNJaUMsYUFBSyxDQUFDbkYsY0FBTixHQUF1QixLQUF2QjtBQUNBbUYsYUFBSyxDQUFDbEYsV0FBTixHQUFvQixLQUFwQjtBQUNBa0YsYUFBSyxDQUFDakYsWUFBTixHQUFxQm5DLE1BQU0sQ0FBQ3FILEtBQTVCO0FBQ0E7O0FBRUosV0FBS3hCLGlCQUFMO0FBQ0l1QixhQUFLLENBQUN6RixlQUFOLEdBQXdCLElBQXhCO0FBQ0F5RixhQUFLLENBQUN4RixZQUFOLEdBQXFCLEtBQXJCO0FBQ0F3RixhQUFLLENBQUN2RixhQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBQ0osV0FBS2lFLGlCQUFMO0FBQ0lzQixhQUFLLENBQUN6RixlQUFOLEdBQXdCLEtBQXhCO0FBQ0F5RixhQUFLLENBQUN4RixZQUFOLEdBQXFCLElBQXJCO0FBQ0F3RixhQUFLLENBQUN4RyxVQUFOLEdBQW1CWixNQUFNLENBQUM4RyxJQUExQjtBQUNBOztBQUNKLFdBQUtmLGlCQUFMO0FBQ0lxQixhQUFLLENBQUN6RixlQUFOLEdBQXdCLEtBQXhCO0FBQ0F5RixhQUFLLENBQUN2RixhQUFOLEdBQXNCN0IsTUFBTSxDQUFDcUgsS0FBN0I7QUFDQTs7QUFFSixXQUFLbkQsMkJBQUw7QUFDQSxXQUFLa0Isa0JBQUw7QUFDQSxXQUFLTSwwQkFBTDtBQUNBLFdBQUtILHVCQUFMO0FBQ0k2QixhQUFLLENBQUN0RixnQkFBTixHQUF5QixJQUF6QjtBQUNBc0YsYUFBSyxDQUFDckYsYUFBTixHQUFzQixLQUF0QjtBQUNBcUYsYUFBSyxDQUFDcEYsY0FBTixHQUF1QixJQUF2QjtBQUNBOztBQUVKLFdBQUttQywyQkFBTDtBQUNBLFdBQUtrQixrQkFBTDtBQUNBLFdBQUtNLDBCQUFMO0FBQ0EsV0FBS0gsdUJBQUw7QUFDSTRCLGFBQUssQ0FBQ3RGLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0FzRixhQUFLLENBQUNyRixhQUFOLEdBQXNCLElBQXRCO0FBQ0FxRixhQUFLLENBQUN6RyxTQUFOLEdBQWtCeUcsS0FBSyxDQUFDekcsU0FBTixDQUFnQjhILE1BQWhCLENBQXVCekksTUFBTSxDQUFDOEcsSUFBOUIsQ0FBbEI7QUFDQU0sYUFBSyxDQUFDdEcsWUFBTixHQUFxQmQsTUFBTSxDQUFDOEcsSUFBUCxDQUFZNEIsTUFBWixLQUF1QixFQUE1QztBQUNBOztBQUVKLFdBQUt0RSwyQkFBTDtBQUNBLFdBQUtrQixrQkFBTDtBQUNBLFdBQUtNLDBCQUFMO0FBQ0EsV0FBS0gsdUJBQUw7QUFDSTJCLGFBQUssQ0FBQ3RGLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0FzRixhQUFLLENBQUNwRixjQUFOLEdBQXVCaEMsTUFBTSxDQUFDcUgsS0FBOUI7QUFDQTs7QUFFSixXQUFLckIsbUJBQUw7QUFDSW9CLGFBQUssQ0FBQ2hGLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FnRixhQUFLLENBQUMvRSxjQUFOLEdBQXVCLEtBQXZCO0FBQ0ErRSxhQUFLLENBQUM5RSxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0osV0FBSzJELG1CQUFMO0FBQTBCO0FBQ3RCLGdCQUFNeEYsSUFBSSxHQUFHMkcsS0FBSyxDQUFDekcsU0FBTixDQUFnQjhHLElBQWhCLENBQXNCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTM0gsTUFBTSxDQUFDOEcsSUFBUCxDQUFZYyxNQUFqRCxDQUFiO0FBQ0FuSCxjQUFJLENBQUNrSSxRQUFMLENBQWNILE9BQWQsQ0FBc0J4SSxNQUFNLENBQUM4RyxJQUE3QjtBQUNBTSxlQUFLLENBQUNoRixpQkFBTixHQUEwQixLQUExQjtBQUNBZ0YsZUFBSyxDQUFDL0UsY0FBTixHQUF1QixJQUF2QjtBQUNBO0FBQ0M7O0FBQ0wsV0FBSzZELG1CQUFMO0FBQ0lrQixhQUFLLENBQUNoRixpQkFBTixHQUEwQixLQUExQjtBQUNBZ0YsYUFBSyxDQUFDOUUsZUFBTixHQUF3QnRDLE1BQU0sQ0FBQ3FILEtBQS9CO0FBQ0E7O0FBRUosV0FBS2xCLG1CQUFMO0FBQ0lpQixhQUFLLENBQUM3RSxpQkFBTixHQUEwQixJQUExQjtBQUNBNkUsYUFBSyxDQUFDNUUsY0FBTixHQUF1QixLQUF2QjtBQUNBNEUsYUFBSyxDQUFDM0UsZUFBTixHQUF3QixJQUF4QjtBQUNKOztBQUNBLFdBQUsyRCxtQkFBTDtBQUNJZ0IsYUFBSyxDQUFDN0UsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTZFLGFBQUssQ0FBQzVFLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTRFLGFBQUssQ0FBQ3pHLFNBQU4sR0FBa0J5RyxLQUFLLENBQUN6RyxTQUFOLENBQWdCbUgsTUFBaEIsQ0FBd0JKLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVMzSCxNQUFNLENBQUM4RyxJQUFQLENBQVljLE1BQW5ELENBQWxCO0FBQ0E7O0FBQ0osV0FBS3ZCLG1CQUFMO0FBQ0llLGFBQUssQ0FBQzdFLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2RSxhQUFLLENBQUMzRSxlQUFOLEdBQXdCekMsTUFBTSxDQUFDcUgsS0FBL0I7QUFDQTs7QUFFSixXQUFLZixxQkFBTDtBQUNJYyxhQUFLLENBQUMxRSxtQkFBTixHQUE0QixJQUE1QjtBQUNBMEUsYUFBSyxDQUFDekUsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQXlFLGFBQUssQ0FBQ3hFLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0o7O0FBQ0EsV0FBSzJELHFCQUFMO0FBQ0lhLGFBQUssQ0FBQ3ZHLFVBQU4sR0FBbUJiLE1BQU0sQ0FBQzhHLElBQTFCO0FBQ0FNLGFBQUssQ0FBQzFFLG1CQUFOLEdBQTRCLEtBQTVCO0FBQ0EwRSxhQUFLLENBQUN6RSxnQkFBTixHQUF5QixJQUF6QjtBQUNBOztBQUNKLFdBQUs2RCxxQkFBTDtBQUNJWSxhQUFLLENBQUMxRSxtQkFBTixHQUE0QixLQUE1QjtBQUNBMEUsYUFBSyxDQUFDeEUsaUJBQU4sR0FBMEI1QyxNQUFNLENBQUNxSCxLQUFqQztBQUNBOztBQUVKLFdBQUtaLGVBQUw7QUFDSVcsYUFBSyxDQUFDdkUsY0FBTixHQUF1QixJQUF2QjtBQUNBdUUsYUFBSyxDQUFDdEUsV0FBTixHQUFvQixLQUFwQjtBQUNBc0UsYUFBSyxDQUFDckUsWUFBTixHQUFxQixJQUFyQjtBQUNKOztBQUNBLFdBQUsyRCxlQUFMO0FBQ0lVLGFBQUssQ0FBQ3pHLFNBQU4sQ0FBZ0I2SCxPQUFoQixDQUF3QnhJLE1BQU0sQ0FBQzhHLElBQS9CO0FBQ0FNLGFBQUssQ0FBQ3ZFLGNBQU4sR0FBdUIsS0FBdkI7QUFDQXVFLGFBQUssQ0FBQ3RFLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFDSixXQUFLNkQsZUFBTDtBQUNJUyxhQUFLLENBQUN2RSxjQUFOLEdBQXVCLEtBQXZCO0FBQ0F1RSxhQUFLLENBQUNyRSxZQUFOLEdBQXFCL0MsTUFBTSxDQUFDcUgsS0FBNUI7QUFDQTs7QUFFSixXQUFLVCxZQUFMO0FBQ0lRLGFBQUssQ0FBQ3ZHLFVBQU4sR0FBbUJ1RyxLQUFLLENBQUN2RyxVQUFOLENBQWlCaUgsTUFBakIsQ0FBd0IsQ0FBQ0osQ0FBRCxFQUFJa0IsQ0FBSixLQUFVQSxDQUFDLEtBQUs1SSxNQUFNLENBQUM4RyxJQUEvQyxDQUFuQjtBQUNBOztBQUNKO0FBQ0k7QUFyUFI7QUF1UEgsR0F4UGEsQ0FBZDtBQXlQSCxDQTFQRDs7QUE0UGVJLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU14RyxZQUFZLEdBQUc7QUFDekJtSSxnQkFBYyxFQUFFLElBRFM7QUFHeEJDLGlCQUFlLEVBQUUsS0FITztBQUl4QkMsY0FBWSxFQUFFLEtBSlU7QUFLeEJDLGVBQWEsRUFBRSxJQUxTO0FBT3hCQyxtQkFBaUIsRUFBRSxLQVBLO0FBUXhCQyxnQkFBYyxFQUFFLEtBUlE7QUFTeEJDLGlCQUFlLEVBQUUsSUFUTztBQVd4QkMsZUFBYSxFQUFFLEtBWFM7QUFZeEJDLFlBQVUsRUFBRSxLQVpZO0FBYXhCQyxhQUFXLEVBQUUsSUFiVztBQWV4QkMsY0FBWSxFQUFFLEtBZlU7QUFnQnhCQyxXQUFTLEVBQUUsS0FoQmE7QUFpQnhCQyxZQUFVLEVBQUUsSUFqQlk7QUFtQnhCQyxlQUFhLEVBQUUsS0FuQlM7QUFvQnhCQyxZQUFVLEVBQUUsS0FwQlk7QUFxQnhCQyxhQUFXLEVBQUUsSUFyQlc7QUF1QnhCQyxpQkFBZSxFQUFFLEtBdkJPO0FBd0J4QkMsY0FBWSxFQUFFLEtBeEJVO0FBeUJ4QkMsZUFBYSxFQUFFLElBekJTO0FBMkJ4QkMsc0JBQW9CLEVBQUUsS0EzQkU7QUE0QnhCQyxtQkFBaUIsRUFBRSxLQTVCSztBQTZCeEJDLG9CQUFrQixFQUFFLElBN0JJO0FBK0J4QkMsdUJBQXFCLEVBQUUsS0EvQkM7QUFnQ3hCQyxvQkFBa0IsRUFBRSxLQWhDSTtBQWlDeEJDLHFCQUFtQixFQUFFLElBakNHO0FBbUN4QkMsdUJBQXFCLEVBQUUsS0FuQ0M7QUFvQ3hCQyxvQkFBa0IsRUFBRSxLQXBDSTtBQXFDeEJDLHFCQUFtQixFQUFFLElBckNHO0FBdUN4QkMsdUJBQXFCLEVBQUUsS0F2Q0M7QUF3Q3hCQyxxQkFBbUIsRUFBRSxJQXhDRztBQXlDeEJDLG9CQUFrQixFQUFFLEtBekNJO0FBMkN4QkMsbUJBQWlCLEVBQUUsS0EzQ0s7QUE0Q3pCQyxnQkFBYyxFQUFFLEtBNUNTO0FBNkN6QkMsaUJBQWUsRUFBRSxJQTdDUTtBQStDeEJDLElBQUUsRUFBRSxJQS9Db0I7QUFnRHhCQyxVQUFRLEVBQUUsSUFoRGM7QUFpRHhCQyxXQUFTLEVBQUU7QUFqRGEsQ0FBckI7QUFvREEsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLGtCQUFrQixHQUFJOUcsSUFBRCxLQUFXO0FBQ3pDN0csTUFBSSxFQUFFNE0sY0FEbUM7QUFFekMvRjtBQUZ5QyxDQUFYLENBQTNCO0FBSUEsTUFBTStHLGtCQUFrQixHQUFJL0csSUFBRCxLQUFXO0FBQ3pDN0csTUFBSSxFQUFFNk0sY0FEbUM7QUFFekNoRztBQUZ5QyxDQUFYLENBQTNCO0FBSUEsTUFBTWdILGtCQUFrQixHQUFJaEgsSUFBRCxLQUFXO0FBQ3pDN0csTUFBSSxFQUFFOE0sY0FEbUM7QUFFekNqRztBQUZ5QyxDQUFYLENBQTNCO0FBSUEsTUFBTWlILG1CQUFtQixHQUFJakgsSUFBRCxLQUFXO0FBQzVDN0csTUFBSSxFQUFFK00sZUFEc0M7QUFFNUNsRztBQUY0QyxDQUFYLENBQTVCO0FBS0EsTUFBTWtILG1CQUFtQixHQUFJbEgsSUFBRCxLQUFXO0FBQzVDN0csTUFBSSxFQUFFZ04sZUFEc0M7QUFFNUNuRztBQUY0QyxDQUFYLENBQTVCO0FBSUEsTUFBTW1ILG1CQUFtQixHQUFJbkgsSUFBRCxLQUFXO0FBQzVDN0csTUFBSSxFQUFFaU4sZUFEc0M7QUFFNUNwRztBQUY0QyxDQUFYLENBQTVCOztBQUtQLE1BQU1JLE9BQU8sR0FBRyxDQUFDbkgsS0FBSyxHQUFHVyxZQUFULEVBQXVCVixNQUF2QixLQUFrQztBQUNoRCxTQUFPbUgsNkRBQU8sQ0FBQ3BILEtBQUQsRUFBU3FILEtBQUQsSUFBVztBQUMzQixZQUFRcEgsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksV0FBS2lMLDJCQUFMO0FBQ0E5RCxhQUFLLENBQUM2QixpQkFBTixHQUEwQixJQUExQjtBQUNBN0IsYUFBSyxDQUFDK0IsZUFBTixHQUF3QixJQUF4QjtBQUNBL0IsYUFBSyxDQUFDOEIsY0FBTixHQUF1QixLQUF2QjtBQUNBOztBQUVBLFdBQUtpQywyQkFBTDtBQUNBL0QsYUFBSyxDQUFDNkIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTdCLGFBQUssQ0FBQzhCLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTlCLGFBQUssQ0FBQzZELFNBQU4sR0FBa0JqTCxNQUFNLENBQUM4RyxJQUF6QjtBQUNBOztBQUVBLFdBQUtzRSwyQkFBTDtBQUNBaEUsYUFBSyxDQUFDNkIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTdCLGFBQUssQ0FBQytCLGVBQU4sR0FBd0JuSixNQUFNLENBQUNxSCxLQUEvQjtBQUNBOztBQUVDLFdBQUtnRSx3QkFBTDtBQUNHakUsYUFBSyxDQUFDd0QsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQXhELGFBQUssQ0FBQ3lELGNBQU4sR0FBdUIsS0FBdkI7QUFDQXpELGFBQUssQ0FBQzBELGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDSixXQUFLUSx3QkFBTDtBQUNJbEUsYUFBSyxDQUFDd0QsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXhELGFBQUssQ0FBQ3lELGNBQU4sR0FBdUIsSUFBdkI7QUFDQXpELGFBQUssQ0FBQ3lCLGNBQU4sR0FBdUI3SSxNQUFNLENBQUM4RyxJQUE5QjtBQUNBOztBQUNKLFdBQUt5RSx3QkFBTDtBQUNJbkUsYUFBSyxDQUFDd0QsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXhELGFBQUssQ0FBQzBELGVBQU4sR0FBd0I5SyxNQUFNLENBQUNxSCxLQUEvQjtBQUNBOztBQUVKLFdBQUtzRSxvQkFBTDtBQUNBdkUsYUFBSyxDQUFDNkIsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTdCLGFBQUssQ0FBQytCLGVBQU4sR0FBd0IsSUFBeEI7QUFDQS9CLGFBQUssQ0FBQzhCLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTs7QUFFQSxXQUFLMEMsb0JBQUw7QUFDQXhFLGFBQUssQ0FBQzZCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E3QixhQUFLLENBQUM4QixjQUFOLEdBQXVCLElBQXZCO0FBQ0E5QixhQUFLLENBQUMyRCxFQUFOLEdBQVcvSyxNQUFNLENBQUM4RyxJQUFsQjtBQUNBOztBQUVBLFdBQUsrRSxvQkFBTDtBQUNBekUsYUFBSyxDQUFDNkIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTdCLGFBQUssQ0FBQytCLGVBQU4sR0FBd0JuSixNQUFNLENBQUNxSCxLQUEvQjtBQUNBOztBQUVBLFdBQUttRSxpQkFBTDtBQUNBcEUsYUFBSyxDQUFDMEIsZUFBTixHQUF3QixJQUF4QjtBQUNBMUIsYUFBSyxDQUFDNEIsYUFBTixHQUFzQixJQUF0QjtBQUNBNUIsYUFBSyxDQUFDMkIsWUFBTixHQUFxQixLQUFyQjtBQUNBOztBQUVBLFdBQUswQyxpQkFBTDtBQUNBckUsYUFBSyxDQUFDMEIsZUFBTixHQUF3QixLQUF4QjtBQUNBMUIsYUFBSyxDQUFDMkIsWUFBTixHQUFxQixJQUFyQjtBQUNBM0IsYUFBSyxDQUFDNEQsUUFBTixHQUFpQmhMLE1BQU0sQ0FBQzhHLElBQXhCO0FBQ0E7O0FBRUEsV0FBSzRFLGlCQUFMO0FBQ0F0RSxhQUFLLENBQUMwQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0ExQixhQUFLLENBQUM0QixhQUFOLEdBQXNCaEosTUFBTSxDQUFDcUgsS0FBN0I7QUFDQTs7QUFFQSxXQUFLeUUsY0FBTDtBQUNBMUUsYUFBSyxDQUFDc0MsYUFBTixHQUFzQixJQUF0QjtBQUNBdEMsYUFBSyxDQUFDd0MsV0FBTixHQUFvQixJQUFwQjtBQUNBeEMsYUFBSyxDQUFDdUMsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUVBLFdBQUtvQyxjQUFMO0FBQ0EzRSxhQUFLLENBQUNzQyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0F0QyxhQUFLLENBQUN1QyxVQUFOLEdBQW1CLElBQW5CO0FBQ0F2QyxhQUFLLENBQUMyRCxFQUFOLENBQVNtRCxVQUFULENBQW9CL0YsSUFBcEIsQ0FBeUJuSSxNQUFNLENBQUM4RyxJQUFoQztBQUNBOztBQUVBLFdBQUtrRixjQUFMO0FBQ0E1RSxhQUFLLENBQUNzQyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0F0QyxhQUFLLENBQUN3QyxXQUFOLEdBQW9CNUosTUFBTSxDQUFDcUgsS0FBM0I7QUFDQTs7QUFFQSxXQUFLNEUsZ0JBQUw7QUFDQTdFLGFBQUssQ0FBQ3lDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQXpDLGFBQUssQ0FBQzJDLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTNDLGFBQUssQ0FBQzBDLFlBQU4sR0FBcUIsS0FBckI7QUFDQTs7QUFFQSxXQUFLb0MsZ0JBQUw7QUFDQTlFLGFBQUssQ0FBQ3lDLGVBQU4sR0FBd0IsS0FBeEI7QUFDQXpDLGFBQUssQ0FBQzBDLFlBQU4sR0FBcUIsSUFBckI7QUFDQTFDLGFBQUssQ0FBQzJELEVBQU4sQ0FBU21ELFVBQVQsR0FBc0I5RyxLQUFLLENBQUMyRCxFQUFOLENBQVNtRCxVQUFULENBQW9CcEcsTUFBcEIsQ0FBNEJKLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVMzSCxNQUFNLENBQUM4RyxJQUFQLENBQVltQixNQUF2RCxDQUF0QjtBQUNBOztBQUVBLFdBQUtrRSxnQkFBTDtBQUNBL0UsYUFBSyxDQUFDeUMsZUFBTixHQUF3QixLQUF4QjtBQUNBekMsYUFBSyxDQUFDMkMsYUFBTixHQUFzQi9KLE1BQU0sQ0FBQ3FILEtBQTdCO0FBQ0E7O0FBRUEsV0FBS2tGLHNCQUFMO0FBQ0FuRixhQUFLLENBQUM0QyxvQkFBTixHQUE2QixJQUE3QjtBQUNBNUMsYUFBSyxDQUFDOEMsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTlDLGFBQUssQ0FBQzZDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E7O0FBRUEsV0FBS3VDLHNCQUFMO0FBQ0FwRixhQUFLLENBQUM0QyxvQkFBTixHQUE2QixLQUE3QjtBQUNBNUMsYUFBSyxDQUFDNkMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTdDLGFBQUssQ0FBQzJELEVBQU4sQ0FBU29ELFNBQVQsR0FBcUJuTyxNQUFNLENBQUM4RyxJQUE1QjtBQUNBOztBQUVBLFdBQUsyRixzQkFBTDtBQUNBckYsYUFBSyxDQUFDNEMsb0JBQU4sR0FBNkIsS0FBN0I7QUFDQTVDLGFBQUssQ0FBQzhDLGtCQUFOLEdBQTJCbEssTUFBTSxDQUFDcUgsS0FBbEM7QUFDQTs7QUFFQSxXQUFLcUYsdUJBQUw7QUFDQXRGLGFBQUssQ0FBQytDLHFCQUFOLEdBQThCLElBQTlCO0FBQ0EvQyxhQUFLLENBQUNpRCxtQkFBTixHQUE0QixJQUE1QjtBQUNBakQsYUFBSyxDQUFDZ0Qsa0JBQU4sR0FBMkIsS0FBM0I7QUFDQTs7QUFFQSxXQUFLdUMsdUJBQUw7QUFDQXZGLGFBQUssQ0FBQytDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0EvQyxhQUFLLENBQUNnRCxrQkFBTixHQUEyQixJQUEzQjtBQUNBaEQsYUFBSyxDQUFDMkQsRUFBTixDQUFTbUQsVUFBVCxHQUFzQmxPLE1BQU0sQ0FBQzhHLElBQTdCO0FBQ0E7O0FBRUEsV0FBSzhGLHVCQUFMO0FBQ0F4RixhQUFLLENBQUMrQyxxQkFBTixHQUE4QixLQUE5QjtBQUNBL0MsYUFBSyxDQUFDaUQsbUJBQU4sR0FBNEJySyxNQUFNLENBQUNxSCxLQUFuQztBQUNBOztBQUVBLFdBQUsrRSx1QkFBTDtBQUNBaEYsYUFBSyxDQUFDa0QscUJBQU4sR0FBOEIsSUFBOUI7QUFDQWxELGFBQUssQ0FBQ29ELG1CQUFOLEdBQTRCLElBQTVCO0FBQ0FwRCxhQUFLLENBQUNtRCxrQkFBTixHQUEyQixLQUEzQjtBQUNBOztBQUVBLFdBQUs4Qix1QkFBTDtBQUNBakYsYUFBSyxDQUFDa0QscUJBQU4sR0FBOEIsS0FBOUI7QUFDQWxELGFBQUssQ0FBQ21ELGtCQUFOLEdBQTJCLElBQTNCO0FBQ0FuRCxhQUFLLENBQUMyRCxFQUFOLENBQVNvRCxTQUFULEdBQXFCL0csS0FBSyxDQUFDMkQsRUFBTixDQUFTb0QsU0FBVCxDQUFtQnJHLE1BQW5CLENBQTJCSixDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTM0gsTUFBTSxDQUFDOEcsSUFBUCxDQUFZbUIsTUFBdEQsQ0FBckI7QUFDQTs7QUFFQSxXQUFLcUUsdUJBQUw7QUFDQWxGLGFBQUssQ0FBQ2tELHFCQUFOLEdBQThCLEtBQTlCO0FBQ0FsRCxhQUFLLENBQUNvRCxtQkFBTixHQUE0QnhLLE1BQU0sQ0FBQ3FILEtBQW5DO0FBQ0E7O0FBRUEsV0FBS3dGLGNBQUw7QUFDQXpGLGFBQUssQ0FBQ21DLFlBQU4sR0FBcUIsSUFBckI7QUFDQW5DLGFBQUssQ0FBQ3FDLFVBQU4sR0FBbUIsSUFBbkI7QUFDQXJDLGFBQUssQ0FBQ29DLFNBQU4sR0FBa0IsS0FBbEI7QUFDQTs7QUFFQSxXQUFLc0QsY0FBTDtBQUNBMUYsYUFBSyxDQUFDbUMsWUFBTixHQUFxQixLQUFyQjtBQUNBbkMsYUFBSyxDQUFDb0MsU0FBTixHQUFrQixJQUFsQjtBQUNBcEMsYUFBSyxDQUFDMkQsRUFBTixHQUFXL0ssTUFBTSxDQUFDOEcsSUFBbEI7QUFDQTs7QUFFQSxXQUFLaUcsY0FBTDtBQUNBM0YsYUFBSyxDQUFDbUMsWUFBTixHQUFxQixLQUFyQjtBQUNBbkMsYUFBSyxDQUFDcUMsVUFBTixHQUFtQnpKLE1BQU0sQ0FBQ3FILEtBQTFCO0FBQ0E7O0FBRUEsV0FBSzJGLGVBQUw7QUFDQTVGLGFBQUssQ0FBQ2dILGFBQU4sR0FBc0IsSUFBdEI7QUFDQWhILGFBQUssQ0FBQ2lILFdBQU4sR0FBb0IsSUFBcEI7QUFDQWpILGFBQUssQ0FBQ2tILFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFFQSxXQUFLckIsZUFBTDtBQUNBN0YsYUFBSyxDQUFDZ0gsYUFBTixHQUFzQixLQUF0QjtBQUNBaEgsYUFBSyxDQUFDa0gsVUFBTixHQUFtQixJQUFuQjtBQUNBbEgsYUFBSyxDQUFDMkQsRUFBTixHQUFXLElBQVg7QUFDQTs7QUFFQSxXQUFLbUMsZUFBTDtBQUNBOUYsYUFBSyxDQUFDZ0gsYUFBTixHQUFzQixLQUF0QjtBQUNBaEgsYUFBSyxDQUFDaUgsV0FBTixHQUFvQnJPLE1BQU0sQ0FBQ3FILEtBQTNCO0FBQ0E7O0FBRUEsV0FBSzhGLGVBQUw7QUFDQS9GLGFBQUssQ0FBQ2dDLGFBQU4sR0FBc0IsSUFBdEI7QUFDQWhDLGFBQUssQ0FBQ2tDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQWxDLGFBQUssQ0FBQ2lDLFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFFQSxXQUFLK0QsZUFBTDtBQUNBaEcsYUFBSyxDQUFDZ0MsYUFBTixHQUFzQixLQUF0QjtBQUNBaEMsYUFBSyxDQUFDaUMsVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUVBLFdBQUtnRSxlQUFMO0FBQ0FqRyxhQUFLLENBQUNnQyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FoQyxhQUFLLENBQUNrQyxXQUFOLEdBQW9CdEosTUFBTSxDQUFDcUgsS0FBM0I7QUFDQTs7QUFFQSxXQUFLaUcsYUFBTDtBQUNBbEcsYUFBSyxDQUFDaUMsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUVBLFdBQUtrRSx1QkFBTDtBQUNBbkcsYUFBSyxDQUFDcUQscUJBQU4sR0FBOEIsSUFBOUI7QUFDQXJELGFBQUssQ0FBQ3NELG1CQUFOLEdBQTRCLElBQTVCO0FBQ0F0RCxhQUFLLENBQUN1RCxrQkFBTixHQUEyQixLQUEzQjtBQUNBOztBQUVBLFdBQUs2Qyx1QkFBTDtBQUNBcEcsYUFBSyxDQUFDcUQscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXJELGFBQUssQ0FBQ3VELGtCQUFOLEdBQTJCLElBQTNCO0FBQ0F2RCxhQUFLLENBQUMyRCxFQUFOLENBQVN3RCxRQUFULEdBQW9Cdk8sTUFBTSxDQUFDOEcsSUFBUCxDQUFZeUgsUUFBaEM7QUFDQTs7QUFFQSxXQUFLZCx1QkFBTDtBQUNBckcsYUFBSyxDQUFDcUQscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXJELGFBQUssQ0FBQ3NELG1CQUFOLEdBQTRCMUssTUFBTSxDQUFDcUgsS0FBbkM7QUFDQTs7QUFFQSxXQUFLcUcsY0FBTDtBQUNJdEcsYUFBSyxDQUFDMkQsRUFBTixDQUFTeUQsS0FBVCxDQUFlaEcsT0FBZixDQUF1QjtBQUFFYixZQUFFLEVBQUUzSCxNQUFNLENBQUM4RyxJQUFQLENBQVlhO0FBQWxCLFNBQXZCO0FBQ0o7O0FBQ0EsV0FBS2dHLGlCQUFMO0FBQ0l2RyxhQUFLLENBQUMyRCxFQUFOLENBQVN5RCxLQUFULEdBQWlCcEgsS0FBSyxDQUFDMkQsRUFBTixDQUFTeUQsS0FBVCxDQUFlMUcsTUFBZixDQUF1QkosQ0FBRCxJQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBUzNILE1BQU0sQ0FBQzhHLElBQVAsQ0FBWWMsTUFBbEQsQ0FBakI7QUFDSjs7QUFFQTtBQUFTO0FBdE9iO0FBd09ILEdBek9XLENBQWQ7QUEwT0QsQ0EzT0Q7O0FBNE9lVixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUF1SCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsdUJBQXpCO0FBQ0FGLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUUsZUFBZixHQUFpQyxJQUFqQztBQUVlLFVBQVVDLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDQyw2Q0FBRCxDQURFLEVBRU5ELCtEQUFJLENBQUNFLDZDQUFELENBRkUsQ0FBRCxDQUFUO0FBSUgsQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JwSSxJQUF0QixFQUE0QjtBQUN4QixTQUFPMkgsNENBQUssQ0FBQ2hPLElBQU4sQ0FBWSxTQUFRcUcsSUFBSSxDQUFDcUksTUFBTyxTQUFoQyxFQUEwQ3JJLElBQTFDLENBQVA7QUFDSDs7QUFDRCxVQUFVc0ksU0FBVixDQUFvQnBQLE1BQXBCLEVBQTRCO0FBQ3hCLE1BQUk7QUFDQSxVQUFNcVAsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNKLFlBQUQsRUFBZWxQLE1BQU0sQ0FBQzhHLElBQXRCLENBQXpCO0FBQ0EsVUFBTXlJLDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXlELGlFQURBO0FBRU5vRCxVQUFJLEVBQUV1SSxNQUFNLENBQUN2STtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPMEksR0FBUCxFQUFZO0FBQ1pyUCxXQUFPLENBQUNrSCxLQUFSLENBQWNtSSxHQUFkO0FBQ0UsVUFBTUQsOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFMEQsaUVBREE7QUFFTjBELFdBQUssRUFBRW1JLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0k7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVM0SSxpQkFBVCxDQUEyQjVJLElBQTNCLEVBQWlDO0FBQzdCLFNBQU8ySCw0Q0FBSyxDQUFDa0IsTUFBTixDQUFjLFNBQVE3SSxJQUFJLENBQUNxSSxNQUFPLFVBQVNySSxJQUFJLENBQUM4SSxPQUFRLEVBQXhELEVBQTJEOUksSUFBM0QsQ0FBUDtBQUNIOztBQUNELFVBQVUrSSxjQUFWLENBQXlCN1AsTUFBekIsRUFBaUM7QUFDN0IsTUFBSTtBQUNBLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0ksaUJBQUQsRUFBb0IxUCxNQUFNLENBQUM4RyxJQUEzQixDQUF6QjtBQUNBLFVBQU15SSw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUU0RCx3RUFEQTtBQUVOaUQsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBJLEdBQVAsRUFBWTtBQUNaclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNFLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRTZELHdFQURBO0FBRU51RCxXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTZ0osa0JBQVQsQ0FBNEJoSixJQUE1QixFQUFrQztBQUM5QixTQUFPMkgsNENBQUssQ0FBQ3NCLEtBQU4sQ0FBYSxTQUFRakosSUFBSSxDQUFDcUksTUFBTyxPQUFqQyxFQUF5Q3JJLElBQXpDLENBQVA7QUFDSDs7QUFDRCxVQUFVa0osZUFBVixDQUEwQmhRLE1BQTFCLEVBQWtDO0FBQzlCLE1BQUk7QUFDQSxVQUFNcVAsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNRLGtCQUFELEVBQXFCOVAsTUFBTSxDQUFDOEcsSUFBNUIsQ0FBekI7QUFDQSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFK0Qsd0VBREE7QUFFTjhDLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDWnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFDRSxVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVnRSx3RUFEQTtBQUVOb0QsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBU21KLG1CQUFULENBQTZCbkosSUFBN0IsRUFBbUNvSixNQUFuQyxFQUEyQztBQUN2QyxTQUFPekIsNENBQUssQ0FBQzBCLEdBQU4sQ0FBVyxZQUFXQyxrQkFBa0IsQ0FBQ3RKLElBQUQsQ0FBTyxXQUFVb0osTUFBTSxJQUFJLENBQUUsRUFBckUsQ0FBUDtBQUNIOztBQUNELFVBQVVHLGdCQUFWLENBQTJCclEsTUFBM0IsRUFBbUM7QUFDL0IsTUFBSTtBQUNBLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1csbUJBQUQsRUFBc0JqUSxNQUFNLENBQUM4RyxJQUE3QixFQUFtQzlHLE1BQU0sQ0FBQ2tRLE1BQTFDLENBQXpCO0FBQ0EsVUFBTVgsOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFMEYseUVBREE7QUFFTm1CLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDWnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFDRSxVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUUyRix5RUFEQTtBQUVOeUIsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBU3dKLFdBQVQsQ0FBcUJ4SixJQUFyQixFQUEyQjtBQUN2QixTQUFPMkgsNENBQUssQ0FBQzBCLEdBQU4sQ0FBVyxTQUFRckosSUFBSyxFQUF4QixDQUFQO0FBQ0g7O0FBQ0QsVUFBVXlKLFFBQVYsQ0FBbUJ2USxNQUFuQixFQUEyQjtBQUN2QixNQUFJO0FBQ0EsVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDZ0IsV0FBRCxFQUFjdFEsTUFBTSxDQUFDOEcsSUFBckIsQ0FBekI7QUFDQSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFNkYsZ0VBREE7QUFFTmdCLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUU4RixnRUFEQTtBQUVOc0IsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzBKLFlBQVQsQ0FBc0JOLE1BQXRCLEVBQThCO0FBQzFCLFNBQU96Qiw0Q0FBSyxDQUFDMEIsR0FBTixDQUFXLGlCQUFnQkQsTUFBTSxJQUFJLENBQUUsRUFBdkMsQ0FBUDtBQUNIOztBQUNELFVBQVVPLFNBQVYsQ0FBb0J6USxNQUFwQixFQUE0QjtBQUN4QixNQUFJO0FBQ0EsVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDa0IsWUFBRCxFQUFleFEsTUFBTSxDQUFDa1EsTUFBdEIsQ0FBekI7QUFDQSxVQUFNWCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVvRixpRUFEQTtBQUVOeUIsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBJLEdBQVAsRUFBWTtBQUNWLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXFGLGlFQURBO0FBRU4rQixXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTNEosVUFBVCxDQUFvQjVKLElBQXBCLEVBQTBCO0FBQ3RCLFNBQU8ySCw0Q0FBSyxDQUFDaE8sSUFBTixDQUFXLGVBQVgsRUFBNEJxRyxJQUE1QixDQUFQO0FBQ0g7O0FBQ0QsVUFBVTZKLE9BQVYsQ0FBa0IzUSxNQUFsQixFQUEwQjtBQUN0QixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDb0IsVUFBRCxFQUFhMVEsTUFBTSxDQUFDOEcsSUFBcEIsQ0FBekI7QUFDSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFaUYsK0RBREE7QUFFTjRCLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUEsVUFBTXlJLDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXlOLDZEQURBO0FBRU41RyxVQUFJLEVBQUV1SSxNQUFNLENBQUN2SSxJQUFQLENBQVlhO0FBRlosS0FBRCxDQUFUO0FBSUgsR0FWRCxDQVVFLE9BQU82SCxHQUFQLEVBQVk7QUFDVnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVrRiwrREFEQTtBQUVOa0MsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzhKLGFBQVQsQ0FBdUI5SixJQUF2QixFQUE2QjtBQUN6QixTQUFPMkgsNENBQUssQ0FBQ2tCLE1BQU4sQ0FBYyxTQUFRN0ksSUFBSyxTQUEzQixDQUFQO0FBQ0g7O0FBQ0QsVUFBVStKLFVBQVYsQ0FBcUI3USxNQUFyQixFQUE2QjtBQUN6QixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDc0IsYUFBRCxFQUFnQjVRLE1BQU0sQ0FBQzhHLElBQXZCLENBQXpCO0FBRUksVUFBTXlJLDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRW1HLGtFQURBO0FBRU5VLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUEsVUFBTXlJLDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRTBOLGdFQURBO0FBRU43RyxVQUFJLEVBQUV1SSxNQUFNLENBQUN2STtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBWEQsQ0FXRSxPQUFPMEksR0FBUCxFQUFZO0FBQ1ZyUCxXQUFPLENBQUNrSCxLQUFSLENBQWNtSSxHQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFb0csa0VBREE7QUFFTmdCLFdBQUssRUFBRW1JLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0k7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNnSyxhQUFULENBQXVCaEssSUFBdkIsRUFBNkI7QUFDekIsU0FBTzJILDRDQUFLLENBQUNoTyxJQUFOLENBQVksU0FBUXFHLElBQUksQ0FBQ3FJLE1BQU8sVUFBaEMsRUFBMkNySSxJQUEzQyxDQUFQO0FBQ0g7O0FBQ0QsVUFBVUcsVUFBVixDQUFxQmpILE1BQXJCLEVBQTZCO0FBQ3pCLE1BQUk7QUFDSixVQUFNcVAsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUN3QixhQUFELEVBQWdCOVEsTUFBTSxDQUFDOEcsSUFBdkIsQ0FBekI7QUFFSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFZ0csa0VBREE7QUFFTmEsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQVBELENBT0UsT0FBTzBJLEdBQVAsRUFBWTtBQUNWLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRWlHLGtFQURBO0FBRU5ZLFVBQUksRUFBRTBJLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0k7QUFGYixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNpSyxjQUFULENBQXdCakssSUFBeEIsRUFBOEI7QUFDMUIsU0FBTzJILDRDQUFLLENBQUNzQixLQUFOLENBQWEsU0FBUWpKLElBQUssV0FBMUIsQ0FBUDtBQUNIOztBQUNELFVBQVVrSyxXQUFWLENBQXNCaFIsTUFBdEIsRUFBOEI7QUFDMUIsTUFBSTtBQUNKLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3lCLGNBQUQsRUFBaUIvUSxNQUFNLENBQUM4RyxJQUF4QixDQUF6QjtBQUVJLFVBQU15SSw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVxRSxtRUFEQTtBQUVOd0MsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQVBELENBT0UsT0FBTzBJLEdBQVAsRUFBWTtBQUNWclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXNFLG1FQURBO0FBRU51QyxVQUFJLEVBQUUwSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmIsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTbUssaUJBQVQsQ0FBMkJuSyxJQUEzQixFQUFpQztBQUM3QixTQUFPMkgsNENBQUssQ0FBQ3NCLEtBQU4sQ0FBYSxTQUFRakosSUFBSyxhQUExQixDQUFQO0FBQ0g7O0FBQ0QsVUFBVW9LLGNBQVYsQ0FBeUJsUixNQUF6QixFQUFpQztBQUM3QixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDMkIsaUJBQUQsRUFBb0JqUixNQUFNLENBQUM4RyxJQUEzQixDQUF6QjtBQUVJLFVBQU15SSw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUV3RSxzRUFEQTtBQUVOcUMsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQVBELENBT0UsT0FBTzBJLEdBQVAsRUFBWTtBQUNWclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXlFLHNFQURBO0FBRU5vQyxVQUFJLEVBQUUwSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmIsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFDRCxTQUFTcUssV0FBVCxDQUFxQnJLLElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU8ySCw0Q0FBSyxDQUFDc0IsS0FBTixDQUFhLFNBQVFqSixJQUFLLE9BQTFCLENBQVA7QUFDSDs7QUFDRCxVQUFVc0ssUUFBVixDQUFtQnBSLE1BQW5CLEVBQTJCO0FBQ3ZCLE1BQUk7QUFDSixVQUFNcVAsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUM2QixXQUFELEVBQWNuUixNQUFNLENBQUM4RyxJQUFyQixDQUF6QjtBQUVJLFVBQU15SSw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUUyRSxnRUFEQTtBQUVOa0MsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQVBELENBT0UsT0FBTzBJLEdBQVAsRUFBWTtBQUNWclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRTRFLGdFQURBO0FBRU5pQyxVQUFJLEVBQUUwSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmIsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTdUssYUFBVCxDQUF1QnZLLElBQXZCLEVBQTZCO0FBQzNCLFNBQU8ySCw0Q0FBSyxDQUFDa0IsTUFBTixDQUFjLFNBQVE3SSxJQUFLLFNBQTNCLENBQVA7QUFDRDs7QUFFRCxVQUFVd0ssVUFBVixDQUFxQnRSLE1BQXJCLEVBQTZCO0FBQzNCLE1BQUk7QUFDRixVQUFNcVAsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUMrQixhQUFELEVBQWdCclIsTUFBTSxDQUFDOEcsSUFBdkIsQ0FBekI7QUFDQSxVQUFNeUksOERBQUcsQ0FBQztBQUNSdFAsVUFBSSxFQUFFOEUsa0VBREU7QUFFUitCLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFDRixVQUFNRCw4REFBRyxDQUFDO0FBQ1J0UCxVQUFJLEVBQUUrRSxrRUFERTtBQUVScUMsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBU3lLLGVBQVQsQ0FBeUJ6SyxJQUF6QixFQUErQjtBQUM3QixTQUFPMkgsNENBQUssQ0FBQ2hPLElBQU4sQ0FBVyxjQUFYLEVBQTJCcUcsSUFBM0IsQ0FBUDtBQUNEOztBQUVELFVBQVUwSyxZQUFWLENBQXVCeFIsTUFBdkIsRUFBK0I7QUFDN0IsTUFBSTtBQUNGLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2lDLGVBQUQsRUFBa0J2UixNQUFNLENBQUM4RyxJQUF6QixDQUF6QjtBQUNBLFVBQU15SSw4REFBRyxDQUFDO0FBQ1J0UCxVQUFJLEVBQUVzRyxvRUFERTtBQUVSTyxVQUFJLEVBQUV1SSxNQUFNLENBQUN2STtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPMEksR0FBUCxFQUFZO0FBQ1ZyUCxXQUFPLENBQUNrSCxLQUFSLENBQWNtSSxHQUFkO0FBQ0YsVUFBTUQsOERBQUcsQ0FBQztBQUNSdFAsVUFBSSxFQUFFdUcsb0VBREU7QUFFUmEsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUzJLLFVBQVQsQ0FBb0IzSyxJQUFwQixFQUEwQjtBQUN4QixTQUFPMkgsNENBQUssQ0FBQ2hPLElBQU4sQ0FBWSxTQUFRcUcsSUFBSyxVQUF6QixFQUFvQ0EsSUFBcEMsQ0FBUDtBQUNEOztBQUVELFVBQVU0SyxPQUFWLENBQWtCMVIsTUFBbEIsRUFBMEI7QUFDeEIsTUFBSTtBQUNGLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ21DLFVBQUQsRUFBYXpSLE1BQU0sQ0FBQzhHLElBQXBCLENBQXpCO0FBQ0EsVUFBTXlJLDhEQUFHLENBQUM7QUFDUnRQLFVBQUksRUFBRXlHLDhEQURFO0FBRVJJLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFDRixVQUFNRCw4REFBRyxDQUFDO0FBQ1J0UCxVQUFJLEVBQUUwRyw4REFERTtBQUVSVSxXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVNkssY0FBVixHQUEyQjtBQUN6QixRQUFNQyxxRUFBVSxDQUFDbk8saUVBQUQsRUFBcUIyTCxTQUFyQixDQUFoQjtBQUNEOztBQUNELFVBQVV5QyxtQkFBVixHQUFnQztBQUM5QixRQUFNQyxtRUFBUSxDQUFDLElBQUQsRUFBT2xPLHdFQUFQLEVBQWtDaU0sY0FBbEMsQ0FBZDtBQUNEOztBQUNELFVBQVVrQyxvQkFBVixHQUFpQztBQUMvQixRQUFNRCxtRUFBUSxDQUFDLElBQUQsRUFBTy9OLHdFQUFQLEVBQWtDaU0sZUFBbEMsQ0FBZDtBQUNEOztBQUNELFVBQVVnQyxxQkFBVixHQUFrQztBQUNoQyxRQUFNRixtRUFBUSxDQUFDLElBQUQsRUFBT3BNLHlFQUFQLEVBQW1DMkssZ0JBQW5DLENBQWQ7QUFDRDs7QUFDRCxVQUFVNEIsbUJBQVYsR0FBZ0M7QUFDOUIsUUFBTUwscUVBQVUsQ0FBQ3BOLHNFQUFELEVBQTBCME0sY0FBMUIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVZ0IsZ0JBQVYsR0FBNkI7QUFDM0IsUUFBTU4scUVBQVUsQ0FBQ3ZOLG1FQUFELEVBQXVCMk0sV0FBdkIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVbUIsYUFBVixHQUEwQjtBQUN4QixRQUFNTCxtRUFBUSxDQUFDLElBQUQsRUFBT2pNLGdFQUFQLEVBQTBCMEssUUFBMUIsQ0FBZDtBQUNEOztBQUNELFVBQVU2QixjQUFWLEdBQTJCO0FBQ3pCLFFBQU1OLG1FQUFRLENBQUMsSUFBRCxFQUFPMU0saUVBQVAsRUFBMkJxTCxTQUEzQixDQUFkO0FBQ0Q7O0FBQ0QsVUFBVTRCLFlBQVYsR0FBeUI7QUFDdkIsUUFBTVQscUVBQVUsQ0FBQzNNLCtEQUFELEVBQW1CMEwsT0FBbkIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVMkIsZUFBVixHQUE0QjtBQUMxQixRQUFNVixxRUFBVSxDQUFDekwsa0VBQUQsRUFBc0IwSyxVQUF0QixDQUFoQjtBQUNEOztBQUNELFVBQVUwQixlQUFWLEdBQTRCO0FBQzFCLFFBQU1YLHFFQUFVLENBQUM1TCxrRUFBRCxFQUFzQmlCLFVBQXRCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVXVMLGFBQVYsR0FBMEI7QUFDeEIsUUFBTVoscUVBQVUsQ0FBQ2pOLGdFQUFELEVBQW9CeU0sUUFBcEIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVcUIsZUFBVixHQUE0QjtBQUMxQixRQUFNYixxRUFBVSxDQUFDOU0sa0VBQUQsRUFBc0J3TSxVQUF0QixDQUFoQjtBQUNEOztBQUNELFVBQVVvQixpQkFBVixHQUE4QjtBQUM1QixRQUFNZCxxRUFBVSxDQUFDdEwsb0VBQUQsRUFBd0JrTCxZQUF4QixDQUFoQjtBQUNEOztBQUNELFVBQVVtQixZQUFWLEdBQXlCO0FBQ3ZCLFFBQU1mLHFFQUFVLENBQUNuTCw4REFBRCxFQUFrQmlMLE9BQWxCLENBQWhCO0FBQ0Q7O0FBRWMsVUFBVXpDLFFBQVYsR0FBcUI7QUFDaEMsUUFBTUgsOERBQUcsQ0FBQyxDQUNOQywrREFBSSxDQUFDNEMsY0FBRCxDQURFLEVBRU41QywrREFBSSxDQUFDOEMsbUJBQUQsQ0FGRSxFQUdOOUMsK0RBQUksQ0FBQ2dELG9CQUFELENBSEUsRUFJTmhELCtEQUFJLENBQUNrRCxtQkFBRCxDQUpFLEVBS05sRCwrREFBSSxDQUFDbUQsZ0JBQUQsQ0FMRSxFQU1ObkQsK0RBQUksQ0FBQ2lELHFCQUFELENBTkUsRUFPTmpELCtEQUFJLENBQUNvRCxhQUFELENBUEUsRUFRTnBELCtEQUFJLENBQUNxRCxjQUFELENBUkUsRUFTTnJELCtEQUFJLENBQUNzRCxZQUFELENBVEUsRUFVTnRELCtEQUFJLENBQUN1RCxlQUFELENBVkUsRUFXTnZELCtEQUFJLENBQUN3RCxlQUFELENBWEUsRUFZTnhELCtEQUFJLENBQUN5RCxhQUFELENBWkUsRUFhTnpELCtEQUFJLENBQUMwRCxlQUFELENBYkUsRUFjTjFELCtEQUFJLENBQUMyRCxpQkFBRCxDQWRFLEVBZU4zRCwrREFBSSxDQUFDNEQsWUFBRCxDQWZFLENBQUQsQ0FBVDtBQWlCSCxDOzs7Ozs7Ozs7Ozs7QUM5V0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLGdCQUFULENBQTBCMUMsTUFBMUIsRUFBa0M7QUFDOUIsU0FBT3pCLDRDQUFLLENBQUMwQixHQUFOLENBQVcsMEJBQXlCRCxNQUFNLElBQUksQ0FBRSxHQUFoRCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVTJDLGFBQVYsQ0FBd0I3UyxNQUF4QixFQUFnQztBQUM1QixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDc0QsZ0JBQUQsRUFBbUI1UyxNQUFNLENBQUNrUSxNQUExQixDQUF6QjtBQUNJLFVBQU1YLDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRWtFLDBFQURBO0FBRU4yQyxVQUFJLEVBQUV1SSxNQUFNLENBQUN2STtBQUZQLEtBQUQsQ0FBVDtBQUtILEdBUEQsQ0FPRSxPQUFPMEksR0FBUCxFQUFZO0FBQ1ZyUCxXQUFPLENBQUNrSCxLQUFSLENBQWNtSSxHQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFbUUsMEVBREE7QUFFTmlELFdBQUssRUFBRW1JLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0k7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNnTSxnQkFBVCxHQUE0QjtBQUN4QixTQUFPckUsNENBQUssQ0FBQzBCLEdBQU4sQ0FBVSxpQkFBVixDQUFQO0FBQ0g7O0FBQ0QsVUFBVTRDLGFBQVYsR0FBMEI7QUFDdEIsTUFBSTtBQUNKLFVBQU0xRCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3dELGdCQUFELENBQXpCO0FBQ0ksVUFBTXZELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRWtMLDBFQURBO0FBRU5yRSxVQUFJLEVBQUV1SSxNQUFNLENBQUN2STtBQUZQLEtBQUQsQ0FBVDtBQUtILEdBUEQsQ0FPRSxPQUFPMEksR0FBUCxFQUFZO0FBQ1ZyUCxXQUFPLENBQUNrSCxLQUFSLENBQWNtSSxHQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFbUwsMEVBREE7QUFFTi9ELFdBQUssRUFBRW1JLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0k7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNrTSxhQUFULENBQXVCbE0sSUFBdkIsRUFBNkI7QUFDekIsU0FBTzJILDRDQUFLLENBQUMwQixHQUFOLENBQVcsbUJBQWtCckosSUFBSSxJQUFJLElBQUssRUFBMUMsQ0FBUDtBQUNIOztBQUNELFVBQVVtTSxVQUFWLENBQXFCalQsTUFBckIsRUFBNkI7QUFDekIsTUFBSTtBQUNKLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzBELGFBQUQsRUFBZ0JoVCxNQUFNLENBQUM4RyxJQUF2QixDQUF6QjtBQUNJLFVBQU15SSw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVxTCx1RUFEQTtBQUVOeEUsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBJLEdBQVAsRUFBWTtBQUNWclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXNMLHVFQURBO0FBRU5sRSxXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTb00sZ0JBQVQsQ0FBMEJwTSxJQUExQixFQUFnQ29KLE1BQWhDLEVBQXdDO0FBQ3BDLFNBQU96Qiw0Q0FBSyxDQUFDMEIsR0FBTixDQUFXLFNBQVFySixJQUFLLGlCQUFnQm9KLE1BQU0sSUFBSSxDQUFFLEVBQXBELENBQVA7QUFDSDs7QUFDRCxVQUFVaUQsYUFBVixDQUF3Qm5ULE1BQXhCLEVBQWdDO0FBQzVCLE1BQUk7QUFDSixVQUFNcVAsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUM0RCxnQkFBRCxFQUFtQmxULE1BQU0sQ0FBQzhHLElBQTFCLEVBQWdDOUcsTUFBTSxDQUFDa1EsTUFBdkMsQ0FBekI7QUFDSSxVQUFNWCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUV1RixzRUFEQTtBQUVOc0IsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBJLEdBQVAsRUFBWTtBQUNWclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXdGLHNFQURBO0FBRU40QixXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTc00sYUFBVCxHQUF5QjtBQUNyQixTQUFPM0UsNENBQUssQ0FBQzBCLEdBQU4sQ0FBVSxhQUFWLENBQVA7QUFDSDs7QUFDRCxVQUFVa0QsVUFBVixHQUF1QjtBQUNuQixNQUFJO0FBQ0osVUFBTWhFLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDOEQsYUFBRCxDQUF6QjtBQUNJLFVBQU03RCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUUyTCxtRUFEQTtBQUVOOUUsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBJLEdBQVAsRUFBWTtBQUNWclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRTRMLG1FQURBO0FBRU54RSxXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTd00sV0FBVCxDQUFxQnhNLElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU8ySCw0Q0FBSyxDQUFDMEIsR0FBTixDQUFXLFNBQVFySixJQUFLLEVBQXhCLENBQVA7QUFDSDs7QUFDRCxVQUFVeU0sUUFBVixDQUFtQnZULE1BQW5CLEVBQTJCO0FBQ3ZCLE1BQUk7QUFDSixVQUFNcVAsTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNnRSxXQUFELEVBQWN0VCxNQUFNLENBQUM4RyxJQUFyQixDQUF6QjtBQUNJLFVBQU15SSw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUV3TCxnRUFEQTtBQUVOM0UsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBJLEdBQVAsRUFBWTtBQUNWclAsV0FBTyxDQUFDa0gsS0FBUixDQUFjbUksR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXlMLGdFQURBO0FBRU5yRSxXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTME0sU0FBVCxDQUFtQjFNLElBQW5CLEVBQXlCO0FBQ3JCLFNBQU8ySCw0Q0FBSyxDQUFDaE8sSUFBTixDQUFXLGNBQVgsRUFBMkJxRyxJQUEzQixDQUFQO0FBQ0g7O0FBQ0QsVUFBVTJNLE1BQVYsQ0FBaUJ6VCxNQUFqQixFQUF5QjtBQUNyQixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDa0UsU0FBRCxFQUFZeFQsTUFBTSxDQUFDOEcsSUFBbkIsQ0FBekI7QUFDSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFbU4sOERBREE7QUFFTnRHLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVvTiw4REFEQTtBQUVOaEcsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzRNLFFBQVQsQ0FBa0I1TSxJQUFsQixFQUF3QjtBQUNwQixTQUFPMkgsNENBQUssQ0FBQ2hPLElBQU4sQ0FBVyxhQUFYLEVBQTBCcUcsSUFBMUIsQ0FBUDtBQUNIOztBQUNELFVBQVU2TSxLQUFWLENBQWdCM1QsTUFBaEIsRUFBd0I7QUFDcEIsTUFBSTtBQUNKLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ29FLFFBQUQsRUFBVzFULE1BQU0sQ0FBQzhHLElBQWxCLENBQXpCO0FBQ0ksVUFBTXlJLDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRTZNLDZEQURBO0FBRU5oRyxVQUFJLEVBQUV1SSxNQUFNLENBQUN2STtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPMEksR0FBUCxFQUFZO0FBQ1ZyUCxXQUFPLENBQUNrSCxLQUFSLENBQWNtSSxHQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFOE0sNkRBREE7QUFFTjFGLFdBQUssRUFBRW1JLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0k7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVM4TSxTQUFULEdBQXFCO0FBQ2IsU0FBT25GLDRDQUFLLENBQUNoTyxJQUFOLENBQVcsY0FBWCxDQUFQO0FBQ1A7O0FBQ0QsVUFBVW9ULE1BQVYsR0FBbUI7QUFDZixNQUFJO0FBQ0EsVUFBTXZFLCtEQUFJLENBQUNzRSxTQUFELENBQVY7QUFDQSxVQUFNckUsOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFZ04sOERBQWVBO0FBRGYsS0FBRCxDQUFUO0FBR0gsR0FMRCxDQUtFLE9BQU91QyxHQUFQLEVBQVk7QUFDVnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFFQSxVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVpTiw4REFEQTtBQUVON0YsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBU2dOLGlCQUFULENBQTJCaE4sSUFBM0IsRUFBaUM7QUFDN0IsU0FBTzJILDRDQUFLLENBQUNzQixLQUFOLENBQVksZ0JBQVosRUFBOEI7QUFBRXhCLFlBQVEsRUFBRXpIO0FBQVosR0FBOUIsQ0FBUDtBQUNIOztBQUNELFVBQVVpTixjQUFWLENBQXlCL1QsTUFBekIsRUFBaUM7QUFDN0IsTUFBSTtBQUNKLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3dFLGlCQUFELEVBQW9COVQsTUFBTSxDQUFDOEcsSUFBM0IsQ0FBekI7QUFDSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFdU4sc0VBREE7QUFFTjFHLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVnJQLFdBQU8sQ0FBQ2tILEtBQVIsQ0FBY21JLEdBQWQ7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUV3TixzRUFEQTtBQUVOcEcsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBU2tOLFNBQVQsQ0FBbUJsTixJQUFuQixFQUF5QjtBQUNyQixTQUFPMkgsNENBQUssQ0FBQ3NCLEtBQU4sQ0FBYSxTQUFRakosSUFBSyxTQUExQixDQUFQO0FBQ0g7O0FBQ0QsVUFBVW1OLE1BQVYsQ0FBaUJqVSxNQUFqQixFQUF5QjtBQUNyQixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDMEUsU0FBRCxFQUFZaFUsTUFBTSxDQUFDOEcsSUFBbkIsQ0FBekI7QUFDSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFOEwsNkRBREE7QUFFTmpGLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUUrTCw2REFEQTtBQUVOM0UsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUtIO0FBQ0o7O0FBRUQsU0FBU29OLFdBQVQsQ0FBcUJwTixJQUFyQixFQUEyQjtBQUN2QixTQUFPMkgsNENBQUssQ0FBQ2tCLE1BQU4sQ0FBYyxTQUFRN0ksSUFBSyxXQUEzQixDQUFQO0FBQ0g7O0FBQ0QsVUFBVXFOLFFBQVYsQ0FBbUJuVSxNQUFuQixFQUEyQjtBQUN2QixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDNEUsV0FBRCxFQUFjbFUsTUFBTSxDQUFDOEcsSUFBckIsQ0FBekI7QUFDSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFaU0sK0RBREE7QUFFTnBGLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVrTSwrREFEQTtBQUVOOUUsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUtIO0FBQ0o7O0FBRUQsU0FBU3NOLGdCQUFULENBQTBCdE4sSUFBMUIsRUFBZ0M7QUFDNUIsU0FBTzJILDRDQUFLLENBQUMwQixHQUFOLENBQVUsaUJBQVYsQ0FBUDtBQUNIOztBQUNELFVBQVVrRSxhQUFWLENBQXdCclUsTUFBeEIsRUFBZ0M7QUFDNUIsTUFBSTtBQUNKLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQzhFLGdCQUFELEVBQW1CcFUsTUFBTSxDQUFDOEcsSUFBMUIsQ0FBekI7QUFDSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFdU0scUVBREE7QUFFTjFGLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUV3TSxxRUFEQTtBQUVOcEYsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUtIO0FBQ0o7O0FBRUQsU0FBU3dOLGlCQUFULENBQTJCeE4sSUFBM0IsRUFBaUM7QUFDN0IsU0FBTzJILDRDQUFLLENBQUMwQixHQUFOLENBQVUsa0JBQVYsQ0FBUDtBQUNIOztBQUNELFVBQVVvRSxjQUFWLENBQXlCdlUsTUFBekIsRUFBaUM7QUFDN0IsTUFBSTtBQUNKLFVBQU1xUCxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2dGLGlCQUFELEVBQW9CdFUsTUFBTSxDQUFDOEcsSUFBM0IsQ0FBekI7QUFDSSxVQUFNeUksOERBQUcsQ0FBQztBQUNOdFAsVUFBSSxFQUFFME0sc0VBREE7QUFFTjdGLFVBQUksRUFBRXVJLE1BQU0sQ0FBQ3ZJO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU8wSSxHQUFQLEVBQVk7QUFDVixVQUFNRCw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUUyTSxzRUFEQTtBQUVOdkYsV0FBSyxFQUFFbUksR0FBRyxDQUFDQyxRQUFKLENBQWEzSTtBQUZkLEtBQUQsQ0FBVDtBQUtIO0FBQ0o7O0FBRUQsU0FBUzBOLGlCQUFULENBQTJCMU4sSUFBM0IsRUFBaUM7QUFDN0IsU0FBTzJILDRDQUFLLENBQUNrQixNQUFOLENBQWMsa0JBQWlCN0ksSUFBSyxFQUFwQyxDQUFQO0FBQ0g7O0FBQ0QsVUFBVTJOLGNBQVYsQ0FBeUJ6VSxNQUF6QixFQUFpQztBQUM3QixNQUFJO0FBQ0osVUFBTXFQLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDa0YsaUJBQUQsRUFBb0J4VSxNQUFNLENBQUM4RyxJQUEzQixDQUF6QjtBQUNJLFVBQU15SSw4REFBRyxDQUFDO0FBQ050UCxVQUFJLEVBQUVvTSxzRUFEQTtBQUVOdkYsVUFBSSxFQUFFdUksTUFBTSxDQUFDdkk7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUUsT0FBTzBJLEdBQVAsRUFBWTtBQUNWLFVBQU1ELDhEQUFHLENBQUM7QUFDTnRQLFVBQUksRUFBRXFNLHNFQURBO0FBRU5qRixXQUFLLEVBQUVtSSxHQUFHLENBQUNDLFFBQUosQ0FBYTNJO0FBRmQsS0FBRCxDQUFUO0FBS0g7QUFDSjs7QUFFRCxVQUFVNE4sa0JBQVYsR0FBK0I7QUFDN0IsUUFBTTlDLHFFQUFVLENBQUMxTiwwRUFBRCxFQUE4QjJPLGFBQTlCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVThCLGtCQUFWLEdBQStCO0FBQzdCLFFBQU0vQyxxRUFBVSxDQUFDMUcsMEVBQUQsRUFBOEI2SCxhQUE5QixDQUFoQjtBQUNEOztBQUNELFVBQVU2QixlQUFWLEdBQTRCO0FBQzFCLFFBQU05QyxtRUFBUSxDQUFDLElBQUQsRUFBT3pHLHVFQUFQLEVBQWlDNEgsVUFBakMsQ0FBZDtBQUNEOztBQUNELFVBQVU0QixtQkFBVixHQUFnQztBQUM5QixRQUFNakQscUVBQVUsQ0FBQ3JFLHNFQUFELEVBQTBCd0csY0FBMUIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVZSxlQUFWLEdBQTRCO0FBQzFCLFFBQU1sRCxxRUFBVSxDQUFDakcsbUVBQUQsRUFBdUIwSCxVQUF2QixDQUFoQjtBQUNEOztBQUNELFVBQVUwQixhQUFWLEdBQTBCO0FBQ3hCLFFBQU1uRCxxRUFBVSxDQUFDcEcsZ0VBQUQsRUFBb0IrSCxRQUFwQixDQUFoQjtBQUNEOztBQUNELFVBQVV5QixrQkFBVixHQUErQjtBQUM3QixRQUFNcEQscUVBQVUsQ0FBQ3JNLHNFQUFELEVBQTBCNE4sYUFBMUIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVOEIsVUFBVixHQUF1QjtBQUNyQixRQUFNckQscUVBQVUsQ0FBQy9FLDZEQUFELEVBQWlCOEcsS0FBakIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVdUIsV0FBVixHQUF3QjtBQUN0QixRQUFNdEQscUVBQVUsQ0FBQzVFLDhEQUFELEVBQWtCNkcsTUFBbEIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVc0IsV0FBVixHQUF3QjtBQUN0QixRQUFNdkQscUVBQVUsQ0FBQ3pFLDhEQUFELEVBQWtCc0csTUFBbEIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVMkIsV0FBVixHQUF3QjtBQUN0QixRQUFNeEQscUVBQVUsQ0FBQzlGLDZEQUFELEVBQWlCbUksTUFBakIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVb0IsYUFBVixHQUEwQjtBQUN4QixRQUFNekQscUVBQVUsQ0FBQzNGLCtEQUFELEVBQW1Ca0ksUUFBbkIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVbUIsa0JBQVYsR0FBK0I7QUFDN0IsUUFBTTFELHFFQUFVLENBQUNyRixxRUFBRCxFQUF5QjhILGFBQXpCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVWtCLG1CQUFWLEdBQWdDO0FBQzlCLFFBQU0zRCxxRUFBVSxDQUFDbEYsc0VBQUQsRUFBMEI2SCxjQUExQixDQUFoQjtBQUNEOztBQUNELFVBQVVpQixtQkFBVixHQUFnQztBQUM5QixRQUFNNUQscUVBQVUsQ0FBQ3hGLHNFQUFELEVBQTBCcUksY0FBMUIsQ0FBaEI7QUFDRDs7QUFFYyxVQUFVekYsUUFBVixHQUFxQjtBQUNoQyxRQUFNRiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUMyRixrQkFBRCxDQURFLEVBRU4zRiwrREFBSSxDQUFDNEYsa0JBQUQsQ0FGRSxFQUdONUYsK0RBQUksQ0FBQzZGLGVBQUQsQ0FIRSxFQUlON0YsK0RBQUksQ0FBQzhGLG1CQUFELENBSkUsRUFLTjlGLCtEQUFJLENBQUMrRixlQUFELENBTEUsRUFNTi9GLCtEQUFJLENBQUNnRyxhQUFELENBTkUsRUFPTmhHLCtEQUFJLENBQUNpRyxrQkFBRCxDQVBFLEVBUU5qRywrREFBSSxDQUFDb0csV0FBRCxDQVJFLEVBU05wRywrREFBSSxDQUFDcUcsV0FBRCxDQVRFLEVBVU5yRywrREFBSSxDQUFDdUcsa0JBQUQsQ0FWRSxFQVdOdkcsK0RBQUksQ0FBQ3dHLG1CQUFELENBWEUsRUFZTnhHLCtEQUFJLENBQUNzRyxhQUFELENBWkUsRUFhTnRHLCtEQUFJLENBQUNrRyxVQUFELENBYkUsRUFjTmxHLCtEQUFJLENBQUNtRyxXQUFELENBZEUsRUFlTm5HLCtEQUFJLENBQUN5RyxtQkFBRCxDQWZFLENBQUQsQ0FBVDtBQWlCSCxDOzs7Ozs7Ozs7Ozs7QUNwV0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQTZCQyxJQUFELElBQVc1VixNQUFELElBQVk7QUFDekVHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaO0FBQ0EsU0FBTzRWLElBQUksQ0FBQzVWLE1BQUQsQ0FBWDtBQUNELENBSEQ7O0FBS0EsTUFBTTZWLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUJMLGdCQUFqQixDQUFwQjtBQUNBLFFBQU1RLFFBQVEsR0FBRyxRQUNiQyxTQURhLEdBRWJDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGdkI7QUFHQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNwUCxpREFBRCxFQUFVK08sUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQjNILDhDQUFuQixDQUFqQjtBQUNBLFNBQU93SCxLQUFQO0FBQ0QsQ0FURDs7QUFXQSxNQUFNelcsT0FBTyxHQUFHNlcsd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUM1Q2EsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllOVcsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBRWUsZ0VBQUMsR0FBRytXLElBQUosS0FBYTtBQUN4QkMseURBQVM7QUFDVCxTQUFPelAscURBQU8sQ0FBQyxHQUFHd1AsSUFBSixDQUFkO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICAgIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbiAgICBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gICAgaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XHJcbiAgICBpbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbiAgXHJcbiAgICBjb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7tirjsnITthLA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfS8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gICAgICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuXHJcbiAgICByZW1vdmVCb29rbWFya0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQm9va21hcmtEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUJvb2ttYXJrRXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQm9va21hcmtMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZEJvb2ttYXJrRG9uZTogZmFsc2UsXHJcbiAgICBhZGRCb29rbWFya0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblxyXG4gICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgcmV0d2VldEVycm9yOiBudWxsLFxyXG4gICBcclxuICAgZWRpdFBvc3RDb250ZW50TG9hZGluZzogZmFsc2UsXHJcbiAgIGVkaXRQb3N0Q29udGVudERvbmU6IGZhbHNlLFxyXG4gICBlZGl0UG9zdENvbnRlbnRFcnJvcjogbnVsbCxcclxuICAgXHJcbiAgIGRlbHRlUG9zdEltYWdlTG9hZGluZzogZmFsc2UsXHJcbiAgIGRlbHRlUG9zdEltYWdlRG9uZTogZmFsc2UsXHJcbiAgIGRlbHRlUG9zdEltYWdlRXJyb3I6IG51bGwsXHJcblxyXG4gICBhZGRSZXBvcnRMb2FkaW5nOiBmYWxzZSxcclxuICAgYWRkUmVwb3J0RG9uZTogZmFsc2UsXHJcbiAgIGFkZFJlcG9ydEVycm9yOiBudWxsLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUkVQT1JUX1JFUVVFU1QgPSAnQUREX1JFUE9SVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9SRVBPUlRfU1VDQ0VTUyA9ICdBRERfUkVQT1JUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1JFUE9SVF9GQUlMVVJFID0gJ0FERF9SRVBPUlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCA9ICdERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MgPSAnREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFID0gJ0RFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QgPSAnRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTID0gJ0VESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSA9ICdFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQk9PS01BUktTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfQk9PS01BUktTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFID0gJ0xPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0JPT0tNQVJLX1JFUVVFU1QgPSAnQUREX0JPT0tNQVJLX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0JPT0tNQVJLX1NVQ0NFU1MgPSAnQUREX0JPT0tNQVJLX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0JPT0tNQVJLX0ZBSUxVUkUgPSAnQUREX0JPT0tNQVJLX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSS19SRVFVRVNUID0gJ1JFTU9WRV9CT09LTUFSS19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSS19TVUNDRVNTID0gJ1JFTU9WRV9CT09LTUFSS19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9CT09LTUFSS19GQUlMVVJFID0gJ1JFTU9WRV9CT09LTUFSS19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBRERfUkVQT1JUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRSZXBvcnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9SRVBPUlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUmVwb3J0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUmVwb3J0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9SRVBPUlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFJlcG9ydEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVQb3N0SW1hZ2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5JbWFnZXMgPSBwb3N0LkltYWdlcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLkltYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9CT09LTUFSS19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkJvb2ttYXJrZXJzID0gcG9zdC5Cb29rbWFya2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9CT09LTUFSS19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lZGl0UG9zdENvbnRlbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7IFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9CT09LTUFSS19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQk9PS01BUktfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Cb29rbWFya2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0JPT0tNQVJLX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7ICBcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICBzZWFyY2hVc2VyTGlzdDogbnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIFxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgY2hhbmdlTmlja05hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tOYW1lRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrTmFtZURvbmU6IGZhbHNlLFxyXG5cclxuICAgIHNlYXJjaFVzZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgc2VhcmNoVXNlckRvbmU6IGZhbHNlLFxyXG4gICBzZWFyY2hVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbWU6IG51bGwsXHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHJlY29tbWVuZDogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFID0gJ0xPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUID0gJ0xPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVTRVQgPSAnU0lHTl9VUF9SRVNFVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgZGF0YSxcclxufSk7IFxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgIGRhdGEsXHJcbn0pOyBcclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlY29tbWVuZCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgIGNhc2UgTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVTRVQ6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEuaWQgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07IFxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFERF9CT09LTUFSS19GQUlMVVJFLCBBRERfQk9PS01BUktfUkVRVUVTVCwgQUREX0JPT0tNQVJLX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9SRVBPUlRfRkFJTFVSRSwgQUREX1JFUE9SVF9SRVFVRVNULCBBRERfUkVQT1JUX1NVQ0NFU1MsIERFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkUsIERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QsIERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MsIEVESVRfUE9TVF9DT05URU5UX0ZBSUxVUkUsIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QsIEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9CT09LTUFSS19GQUlMVVJFLCBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCwgUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkUsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBBZGRSZXBvcnRBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L3JlcG9ydGAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBBZGRSZXBvcnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQWRkUmVwb3J0QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFUE9SVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFUE9SVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlbHRlUG9zdEltYWdlQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2ltYWdlLyR7ZGF0YS5pbWFnZUlkfWAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBEZWx0ZVBvc3RJbWFnZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChEZWx0ZVBvc3RJbWFnZUFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVkaXRQb3N0Q29udGVudEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2VkaXRgLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogRWRpdFBvc3RDb250ZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEVkaXRQb3N0Q29udGVudEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBcGkoZGF0YSwgbGFzdElkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FwaSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FwaShsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FwaSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9hZGRwb3N0JywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L3JlbW92ZWApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFwaSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tNYXJrQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9ib29rbWFya2ApO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRCb29rTWFyayhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZEJvb2tNYXJrQXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9CT09LTUFSS19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQk9PS01BUktfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tNYXJrQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS91bmJvb2ttYXJrYCk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZUJvb2tNYXJrKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQm9va01hcmtBcGksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9CT09LTUFSS19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsaWtlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vdW5saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFJlcG9ydCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9SRVBPUlRfUkVRVUVTVCwgQWRkUmVwb3J0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hEZWx0ZVBvc3RJbWFnZSgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgzMDAwLCBERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNULCBEZWx0ZVBvc3RJbWFnZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRWRpdFBvc3RDb250ZW50KCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIEVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QsIEVkaXRQb3N0Q29udGVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlQm9va21hcmsoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfQk9PS01BUktfUkVRVUVTVCwgcmVtb3ZlQm9va01hcmspO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZEJvb2ttYXJrKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0JPT0tNQVJLX1JFUVVFU1QsIGFkZEJvb2tNYXJrKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFJlcG9ydCksXHJcbiAgICAgICAgZm9yayh3YXRjaERlbHRlUG9zdEltYWdlKSxcclxuICAgICAgICBmb3JrKHdhdGNoRWRpdFBvc3RDb250ZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQm9va21hcmspLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRCb29rbWFyayksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCB0aHJvdHRsZSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULCBGT0xMT1dfU1VDQ0VTUywgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSwgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUywgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFLCBMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QsIExPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUywgTE9BRF9TRUFSQ0hfVVNFUl9GQUlMVVJFLCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QsIExPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUywgTE9BRF9VU0VSX0ZBSUxVUkUsIExPQURfVVNFUl9SRVFVRVNULCBMT0FEX1VTRVJfU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX09VVF9GQUlMVVJFLCBMT0dfT1VUX1JFUVVFU1QsIExPR19PVVRfU1VDQ0VTUywgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLCBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgVU5GT0xMT1dfRkFJTFVSRSwgVU5GT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkUsIExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCwgTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTLCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSwgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIExPQURfVVNFUl9QT1NUU19TVUNDRVNTIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBsb2FkQm9va21hcmtzQXBpKGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvYm9va21hcmtzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfSBgKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZEJvb2ttYXJrcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRCb29rbWFya3NBcGksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWNvbW1lbmRVc2VyQXBpKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvcmVjb21tZW5kJyk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIHJlY29tbWVuZFVzZXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZWNvbW1lbmRVc2VyQXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoVXNlckFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9saXN0P2RhdGE9JHtkYXRhIHx8IG51bGx9YCk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIHNlYXJjaFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWFyY2hVc2VyQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FwaShkYXRhLCBsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQXBpLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BcGkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2dpbicpO1xyXG59ICAgXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FwaSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL3NpZ25VcCcsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWdudXBBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBcGkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrTmFtZUFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufVxyXG5mdW5jdGlvbiogY2hhbmdlTmlja05hbWUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrTmFtZUFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vdW5mb2xsb3dgKTtcclxufVxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd0FwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGZvbGxvd2Vyc0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2VycyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRmb2xsb3dlcnNBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRmb2xsb3dpbmdzQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkZm9sbG93aW5nc0FwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVmb2xsb3dlckFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZWZvbGxvd2VyKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlZm9sbG93ZXJBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEJvb2tNYXJrcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCwgbG9hZEJvb2ttYXJrcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVjb21tZW5kVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCwgcmVjb21tZW5kVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoVXNlcigpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgzMDAwLCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QsIHNlYXJjaFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tOYW1lKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkVXNlclBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWdudXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBsb2FkZm9sbG93ZXJzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkZm9sbG93aW5ncyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlZm9sbG93ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkQm9va01hcmtzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVjb21tZW5kVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaFNlYXJjaFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICAgICAgZm9yayh3YXRjaGxvYWRNeUluZm8pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hsb2FkVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaGxvYWRVc2VyUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93ZXJzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJpbXBvcnQgeyBlbmFibGVFUzUsIHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gICAgZW5hYmxlRVM1KCk7XHJcbiAgICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==