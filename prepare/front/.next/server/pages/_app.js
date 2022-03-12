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








const NodeBird = ({
  Component
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
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
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3V0aWwvcHJvZHVjZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJyZW1vdmVCb29rbWFya0xvYWRpbmciLCJyZW1vdmVCb29rbWFya0RvbmUiLCJyZW1vdmVCb29rbWFya0Vycm9yIiwiYWRkQm9va21hcmtMb2FkaW5nIiwiYWRkQm9va21hcmtEb25lIiwiYWRkQm9va21hcmtFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsImVkaXRQb3N0Q29udGVudExvYWRpbmciLCJlZGl0UG9zdENvbnRlbnREb25lIiwiZWRpdFBvc3RDb250ZW50RXJyb3IiLCJkZWx0ZVBvc3RJbWFnZUxvYWRpbmciLCJkZWx0ZVBvc3RJbWFnZURvbmUiLCJkZWx0ZVBvc3RJbWFnZUVycm9yIiwiREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCIsIkRFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MiLCJERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFIiwiRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCIsIkVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MiLCJFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFIiwiTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUIiwiTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTIiwiTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFIiwiQUREX0JPT0tNQVJLX1JFUVVFU1QiLCJBRERfQk9PS01BUktfU1VDQ0VTUyIsIkFERF9CT09LTUFSS19GQUlMVVJFIiwiUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1QiLCJSRU1PVkVfQk9PS01BUktfU1VDQ0VTUyIsIlJFTU9WRV9CT09LTUFSS19GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwiYWRkUG9zdFN1Y2Nlc3NBY3Rpb24iLCJhZGRQb3N0RmFpbHVyZUFjdGlvbiIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiZmlsdGVyIiwidiIsImkiLCJkZWxldGVQb3N0SW1hZ2VMb2FkaW5nIiwiZGVsZXRlUG9zdEltYWdlRG9uZSIsImRlbGV0ZVBvc3RJbWFnZUVycm9yIiwiZmluZCIsImlkIiwiUG9zdElkIiwiSW1hZ2VzIiwiSW1hZ2VJZCIsImVycm9yIiwiQm9va21hcmtlcnMiLCJVc2VySWQiLCJjb250ZW50IiwicHVzaCIsIkxpa2VycyIsInVubGlrZVBvc3RzTG9hZGluZyIsInVubGlrZVBvc3RzRG9uZSIsInVubGlrZVBvc3RzRXJyb3IiLCJ1bnNoaWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiQ29tbWVudHMiLCJzZWFyY2hVc2VyTGlzdCIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImNoYW5nZU5pY2tOYW1lTG9hZGluZyIsImNoYW5nZU5pY2tOYW1lRXJyb3IiLCJjaGFuZ2VOaWNrTmFtZURvbmUiLCJzZWFyY2hVc2VyTG9hZGluZyIsInNlYXJjaFVzZXJEb25lIiwic2VhcmNoVXNlckVycm9yIiwibWUiLCJ1c2VySW5mbyIsInJlY29tbWVuZCIsIkxPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCIsIkxPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyIsIkxPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSIsIkxPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCIsIkxPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUyIsIkxPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfUkVTRVQiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9naW5TdWNjZXNzQWN0aW9uIiwibG9naW5GYWlsdXJlQWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ091dExvYWRpbmciLCJsb2dPdXRFcnJvciIsImxvZ091dERvbmUiLCJuaWNrbmFtZSIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwiRGVsdGVQb3N0SW1hZ2VBcGkiLCJkZWxldGUiLCJwb3N0SWQiLCJpbWFnZUlkIiwiRGVsdGVQb3N0SW1hZ2UiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJFZGl0UG9zdENvbnRlbnRBcGkiLCJwYXRjaCIsIkVkaXRQb3N0Q29udGVudCIsImxvYWRIYXNodGFnUG9zdHNBcGkiLCJsYXN0SWQiLCJnZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZFBvc3RBcGkiLCJsb2FkUG9zdCIsImxvYWRQb3N0c0FwaSIsImxvYWRQb3N0cyIsImFkZFBvc3RBcGkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFwaSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QXBpIiwiYWRkQm9va01hcmtBcGkiLCJhZGRCb29rTWFyayIsInJlbW92ZUJvb2tNYXJrQXBpIiwicmVtb3ZlQm9va01hcmsiLCJsaWtlUG9zdEFwaSIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJyZXR3ZWV0QVBJIiwicmV0d2VldCIsIndhdGNoRGVsdGVQb3N0SW1hZ2UiLCJ0aHJvdHRsZSIsIndhdGNoRWRpdFBvc3RDb250ZW50Iiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hSZW1vdmVCb29rbWFyayIsInRha2VMYXRlc3QiLCJ3YXRjaEFkZEJvb2ttYXJrIiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5MaWtlUG9zdCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwid2F0Y2hSZXR3ZWV0IiwibG9hZEJvb2ttYXJrc0FwaSIsImxvYWRCb29rbWFya3MiLCJyZWNvbW1lbmRVc2VyQXBpIiwicmVjb21tZW5kVXNlciIsInNlYXJjaFVzZXJBcGkiLCJzZWFyY2hVc2VyIiwibG9hZFVzZXJQb3N0c0FwaSIsImxvYWRVc2VyUG9zdHMiLCJsb2FkTXlJbmZvQXBpIiwibG9hZE15SW5mbyIsImxvYWRVc2VyQXBpIiwibG9hZFVzZXIiLCJzaWdudXBBcGkiLCJzaWdudXAiLCJsb2dJbkFwaSIsImxvZ0luIiwibG9nT3V0QXBpIiwibG9nT3V0IiwiY2hhbmdlTmlja05hbWVBcGkiLCJjaGFuZ2VOaWNrTmFtZSIsImZvbGxvd0FwaSIsImZvbGxvdyIsInVuZm9sbG93QXBpIiwidW5mb2xsb3ciLCJsb2FkZm9sbG93ZXJzQXBpIiwibG9hZGZvbGxvd2VycyIsImxvYWRmb2xsb3dpbmdzQXBpIiwibG9hZGZvbGxvd2luZ3MiLCJyZW1vdmVmb2xsb3dlckFwaSIsInJlbW92ZWZvbGxvd2VyIiwid2F0Y2hMb2FkQm9va01hcmtzIiwid2F0Y2hSZWNvbW1lbmRVc2VyIiwid2F0Y2hTZWFyY2hVc2VyIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNobG9hZE15SW5mbyIsIndhdGNobG9hZFVzZXIiLCJ3YXRjaGxvYWRVc2VyUG9zdHMiLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaFJlbW92ZUZvbGxvd2VyIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYXJncyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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MkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcs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Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFFZSxnRUFBQyxHQUFHc1csSUFBSixLQUFhO0FBQ3hCQyx5REFBUztBQUNULFNBQU90UCxxREFBTyxDQUFDLEdBQUdxUCxJQUFKLENBQWQ7QUFDSCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIiAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4gICAgaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuICAgIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbiAgICBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuICAgIGltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuICBcclxuICAgIGNvbnN0IE5vZGVCaXJkID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7tirjsnITthLA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gICAgICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZVJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuXHJcbiAgICByZW1vdmVCb29rbWFya0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlQm9va21hcmtEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUJvb2ttYXJrRXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQm9va21hcmtMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZEJvb2ttYXJrRG9uZTogZmFsc2UsXHJcbiAgICBhZGRCb29rbWFya0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblxyXG4gICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgcmV0d2VldEVycm9yOiBudWxsLFxyXG4gICBcclxuICAgZWRpdFBvc3RDb250ZW50TG9hZGluZzogZmFsc2UsXHJcbiAgIGVkaXRQb3N0Q29udGVudERvbmU6IGZhbHNlLFxyXG4gICBlZGl0UG9zdENvbnRlbnRFcnJvcjogbnVsbCxcclxuICAgXHJcbiAgIGRlbHRlUG9zdEltYWdlTG9hZGluZzogZmFsc2UsXHJcbiAgIGRlbHRlUG9zdEltYWdlRG9uZTogZmFsc2UsXHJcbiAgIGRlbHRlUG9zdEltYWdlRXJyb3I6IG51bGwsXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QgPSAnREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9JTUFHRV9TVUNDRVNTID0gJ0RFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfSU1BR0VfRkFJTFVSRSA9ICdERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfQ09OVEVOVF9SRVFVRVNUID0gJ0VESVRfUE9TVF9DT05URU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0NPTlRFTlRfU1VDQ0VTUyA9ICdFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9DT05URU5UX0ZBSUxVUkUgPSAnRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUID0gJ0xPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQk9PS01BUktTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSA9ICdMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSS19SRVFVRVNUID0gJ0FERF9CT09LTUFSS19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSS19TVUNDRVNTID0gJ0FERF9CT09LTUFSS19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSS19GQUlMVVJFID0gJ0FERF9CT09LTUFSS19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCA9ICdSRU1PVkVfQk9PS01BUktfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUktfU1VDQ0VTUyA9ICdSRU1PVkVfQk9PS01BUktfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUktfRkFJTFVSRSA9ICdSRU1PVkVfQk9PS01BUktfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdFN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RGYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkltYWdlcyA9IHBvc3QuSW1hZ2VzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuSW1hZ2VJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9QT1NUX0lNQUdFX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVQb3N0SW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVQb3N0SW1hZ2VFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfQk9PS01BUktfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQm9va21hcmtlcnMgPSBwb3N0LkJvb2ttYXJrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRURJVF9QT1NUX0NPTlRFTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDsgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lZGl0UG9zdENvbnRlbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lZGl0UG9zdENvbnRlbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0JPT0tNQVJLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9CT09LTUFSS19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkJvb2ttYXJrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQk9PS01BUktfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhazsgIFxyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfQk9PS01BUktTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgIHNlYXJjaFVzZXJMaXN0OiBudWxsLFxyXG5cclxuICAgIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcblxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgXHJcbiAgICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93ZXJzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuXHJcbiAgICBjaGFuZ2VOaWNrTmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja05hbWVFcnJvcjogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tOYW1lRG9uZTogZmFsc2UsXHJcblxyXG4gICAgc2VhcmNoVXNlckxvYWRpbmc6IGZhbHNlLFxyXG4gICBzZWFyY2hVc2VyRG9uZTogZmFsc2UsXHJcbiAgIHNlYXJjaFVzZXJFcnJvcjogbnVsbCxcclxuXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgcmVjb21tZW5kOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNPTU1FTkRfVVNFUl9TVUNDRVNTID0gJ0xPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfVVNFUl9GQUlMVVJFID0gJ0xPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVNFVCA9ICdTSUdOX1VQX1JFU0VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBkYXRhLFxyXG59KTsgXHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgZGF0YSxcclxufSk7IFxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVjb21tZW5kID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgY2FzZSBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9TRUFSQ0hfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVNFVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YS5pZCB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTsgXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQUREX0JPT0tNQVJLX0ZBSUxVUkUsIEFERF9CT09LTUFSS19SRVFVRVNULCBBRERfQk9PS01BUktfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgREVMRVRFX1BPU1RfSU1BR0VfRkFJTFVSRSwgREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCwgREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUywgRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSwgRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCwgRURJVF9QT1NUX0NPTlRFTlRfU1VDQ0VTUywgTElLRV9QT1NUX0ZBSUxVUkUsIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLCBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX0JPT0tNQVJLX0ZBSUxVUkUsIFJFTU9WRV9CT09LTUFSS19SRVFVRVNULCBSRU1PVkVfQk9PS01BUktfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVUV0VFVF9GQUlMVVJFLCBSRVRXRUVUX1JFUVVFU1QsIFJFVFdFRVRfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVVBMT0FEX0lNQUdFU19GQUlMVVJFLCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIERlbHRlUG9zdEltYWdlQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2ltYWdlLyR7ZGF0YS5pbWFnZUlkfWAsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBEZWx0ZVBvc3RJbWFnZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChEZWx0ZVBvc3RJbWFnZUFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEVkaXRQb3N0Q29udGVudEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2VkaXRgLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogRWRpdFBvc3RDb250ZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKEVkaXRQb3N0Q29udGVudEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEVESVRfUE9TVF9DT05URU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBcGkoZGF0YSwgbGFzdElkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FwaSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FwaShsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FwaSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9hZGRwb3N0JywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L3JlbW92ZWApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFwaSwgYWN0aW9uLmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEJvb2tNYXJrQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9ib29rbWFya2ApO1xyXG59XHJcbmZ1bmN0aW9uKiBhZGRCb29rTWFyayhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZEJvb2tNYXJrQXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9CT09LTUFSS19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQk9PS01BUktfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tNYXJrQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS91bmJvb2ttYXJrYCk7XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZUJvb2tNYXJrKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlQm9va01hcmtBcGksIGFjdGlvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9CT09LTUFSS19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsaWtlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QXBpLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vdW5saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaERlbHRlUG9zdEltYWdlKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDMwMDAsIERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QsIERlbHRlUG9zdEltYWdlKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hFZGl0UG9zdENvbnRlbnQoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVCwgRWRpdFBvc3RDb250ZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVCb29rbWFyaygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9CT09LTUFSS19SRVFVRVNULCByZW1vdmVCb29rTWFyayk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQm9va21hcmsoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQk9PS01BUktfUkVRVUVTVCwgYWRkQm9va01hcmspO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoRGVsdGVQb3N0SW1hZ2UpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hFZGl0UG9zdENvbnRlbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVCb29rbWFyayksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZEJvb2ttYXJrKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIHRocm90dGxlLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLCBMT0FEX0ZPTExPV0VSU19SRVFVRVNULCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19TVUNDRVNTLCBMT0FEX01ZX0lORk9fRkFJTFVSRSwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfTVlfSU5GT19TVUNDRVNTLCBMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUsIExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCwgTE9BRF9SRUNPTU1FTkRfVVNFUl9TVUNDRVNTLCBMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUsIExPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCwgTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTLCBMT0FEX1VTRVJfRkFJTFVSRSwgTE9BRF9VU0VSX1JFUVVFU1QsIExPQURfVVNFUl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSwgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSwgTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNULCBMT0FEX1VTRVJfQk9PS01BUktTX1NVQ0NFU1MsIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIGxvYWRCb29rbWFya3NBcGkobGFzdElkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9ib29rbWFya3M/bGFzdElkPSR7bGFzdElkIHx8IDB9IGApOyAgIFxyXG59ICAgXHJcbmZ1bmN0aW9uKiBsb2FkQm9va21hcmtzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEJvb2ttYXJrc0FwaSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlY29tbWVuZFVzZXJBcGkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9yZWNvbW1lbmQnKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogcmVjb21tZW5kVXNlcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlY29tbWVuZFVzZXJBcGkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hVc2VyQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2xpc3Q/ZGF0YT0ke2RhdGEgfHwgbnVsbH1gKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogc2VhcmNoVXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlYXJjaFVzZXJBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQXBpKGRhdGEsIGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBcGksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FwaSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2xvZ2luJyk7XHJcbn0gICBcclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG59ICAgXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ251cEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvc2lnblVwJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ251cEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFwaSgpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0Jyk7XHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBcGkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tOYW1lQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59XHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrTmFtZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tOYW1lQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS91bmZvbGxvd2ApO1xyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkZm9sbG93ZXJzQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2VycycpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkZm9sbG93ZXJzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZGZvbGxvd2Vyc0FwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGZvbGxvd2luZ3NBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93aW5ncycpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2FkZm9sbG93aW5ncyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRmb2xsb3dpbmdzQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZWZvbGxvd2VyQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlZm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVmb2xsb3dlckFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQm9va01hcmtzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNULCBsb2FkQm9va21hcmtzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZWNvbW1lbmRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNULCByZWNvbW1lbmRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hVc2VyKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDMwMDAsIExPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCwgc2VhcmNoVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja05hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNobG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ251cCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRmb2xsb3dlcnMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRmb2xsb3dpbmdzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVmb2xsb3dlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRCb29rTWFya3MpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZWNvbW1lbmRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoU2VhcmNoVXNlciksXHJcbiAgICAgICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgICAgICBmb3JrKHdhdGNobG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaGxvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNobG9hZFVzZXJQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsImltcG9ydCB7ZW5hYmxlRVM1LCBwcm9kdWNlfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gICAgZW5hYmxlRVM1KCk7XHJcbiAgICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=