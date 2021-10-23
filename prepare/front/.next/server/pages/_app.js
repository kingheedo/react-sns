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

NodeBird.proptypes = {
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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);





const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");






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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/images`, data); //patch 게시글의 일부분을 수정
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/followers`);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/followings`);
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

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3V0aWwvcHJvZHVjZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50IiwicHJvcHR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNpbmdsZVBvc3QiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwicmVtb3ZlQm9va21hcmtMb2FkaW5nIiwicmVtb3ZlQm9va21hcmtEb25lIiwicmVtb3ZlQm9va21hcmtFcnJvciIsImFkZEJvb2ttYXJrTG9hZGluZyIsImFkZEJvb2ttYXJrRG9uZSIsImFkZEJvb2ttYXJrRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJlZGl0UG9zdENvbnRlbnRMb2FkaW5nIiwiZWRpdFBvc3RDb250ZW50RG9uZSIsImVkaXRQb3N0Q29udGVudEVycm9yIiwiZGVsdGVQb3N0SW1hZ2VMb2FkaW5nIiwiZGVsdGVQb3N0SW1hZ2VEb25lIiwiZGVsdGVQb3N0SW1hZ2VFcnJvciIsIkRFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9JTUFHRV9TVUNDRVNTIiwiREVMRVRFX1BPU1RfSU1BR0VfRkFJTFVSRSIsIkVESVRfUE9TVF9DT05URU5UX1JFUVVFU1QiLCJFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTIiwiRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSIsIkxPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCIsIkxPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUyIsIkxPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSIsIkFERF9CT09LTUFSS19SRVFVRVNUIiwiQUREX0JPT0tNQVJLX1NVQ0NFU1MiLCJBRERfQk9PS01BUktfRkFJTFVSRSIsIlJFTU9WRV9CT09LTUFSS19SRVFVRVNUIiwiUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MiLCJSRU1PVkVfQk9PS01BUktfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImFkZFBvc3RTdWNjZXNzQWN0aW9uIiwiYWRkUG9zdEZhaWx1cmVBY3Rpb24iLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwiZGVsZXRlUG9zdEltYWdlTG9hZGluZyIsImRlbGV0ZVBvc3RJbWFnZURvbmUiLCJkZWxldGVQb3N0SW1hZ2VFcnJvciIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkltYWdlcyIsIkltYWdlSWQiLCJlcnJvciIsIkJvb2ttYXJrZXJzIiwiVXNlcklkIiwiY29udGVudCIsInB1c2giLCJMaWtlcnMiLCJ1bmxpa2VQb3N0c0xvYWRpbmciLCJ1bmxpa2VQb3N0c0RvbmUiLCJ1bmxpa2VQb3N0c0Vycm9yIiwidW5zaGlmdCIsImNvbmNhdCIsImxlbmd0aCIsIkNvbW1lbnRzIiwic2VhcmNoVXNlckxpc3QiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJjaGFuZ2VOaWNrTmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrTmFtZUVycm9yIiwiY2hhbmdlTmlja05hbWVEb25lIiwic2VhcmNoVXNlckxvYWRpbmciLCJzZWFyY2hVc2VyRG9uZSIsInNlYXJjaFVzZXJFcnJvciIsIm1lIiwidXNlckluZm8iLCJyZWNvbW1lbmQiLCJMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QiLCJMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUiLCJMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QiLCJMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX1JFU0VUIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwibG9nb3V0RmFpbHVyZUFjdGlvbiIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RXJyb3IiLCJsb2dPdXREb25lIiwibmlja25hbWUiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiLCJwb3N0U2FnYSIsIkRlbHRlUG9zdEltYWdlQXBpIiwiZGVsZXRlIiwicG9zdElkIiwiaW1hZ2VJZCIsIkRlbHRlUG9zdEltYWdlIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwiRWRpdFBvc3RDb250ZW50QXBpIiwicGF0Y2giLCJFZGl0UG9zdENvbnRlbnQiLCJsb2FkSGFzaHRhZ1Bvc3RzQXBpIiwibGFzdElkIiwiZ2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRQb3N0QXBpIiwibG9hZFBvc3QiLCJsb2FkUG9zdHNBcGkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QXBpIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBcGkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFwaSIsImFkZEJvb2tNYXJrQXBpIiwiYWRkQm9va01hcmsiLCJyZW1vdmVCb29rTWFya0FwaSIsInJlbW92ZUJvb2tNYXJrIiwibGlrZVBvc3RBcGkiLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ3YXRjaERlbHRlUG9zdEltYWdlIiwidGhyb3R0bGUiLCJ3YXRjaEVkaXRQb3N0Q29udGVudCIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoUmVtb3ZlQm9va21hcmsiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRCb29rbWFyayIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoUmV0d2VldCIsImxvYWRCb29rbWFya3NBcGkiLCJsb2FkQm9va21hcmtzIiwicmVjb21tZW5kVXNlckFwaSIsInJlY29tbWVuZFVzZXIiLCJzZWFyY2hVc2VyQXBpIiwic2VhcmNoVXNlciIsImxvYWRVc2VyUG9zdHNBcGkiLCJsb2FkVXNlclBvc3RzIiwibG9hZE15SW5mb0FwaSIsImxvYWRNeUluZm8iLCJsb2FkVXNlckFwaSIsImxvYWRVc2VyIiwic2lnbnVwQXBpIiwic2lnbnVwIiwibG9nSW5BcGkiLCJsb2dJbiIsImxvZ091dEFwaSIsImxvZ091dCIsImNoYW5nZU5pY2tOYW1lQXBpIiwiY2hhbmdlTmlja05hbWUiLCJmb2xsb3dBcGkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FwaSIsInVuZm9sbG93IiwibG9hZGZvbGxvd2Vyc0FwaSIsImxvYWRmb2xsb3dlcnMiLCJsb2FkZm9sbG93aW5nc0FwaSIsImxvYWRmb2xsb3dpbmdzIiwicmVtb3ZlZm9sbG93ZXJBcGkiLCJyZW1vdmVmb2xsb3dlciIsIndhdGNoTG9hZEJvb2tNYXJrcyIsIndhdGNoUmVjb21tZW5kVXNlciIsIndhdGNoU2VhcmNoVXNlciIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJ3YXRjaGxvYWRNeUluZm8iLCJ3YXRjaGxvYWRVc2VyIiwid2F0Y2hsb2FkVXNlclBvc3RzIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGVsd2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFyZ3MiLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR08sTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdB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QWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUJMLGdCQUFqQixDQUFwQjtBQUNBLFFBQU1RLFFBQVEsR0FBRyxRQUNiQyxTQURhLEdBRWJDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGdkI7QUFJQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNqUCxpREFBRCxFQUFVNE8sUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQnhILDhDQUFuQixDQUFqQjtBQUNBLFNBQU9xSCxLQUFQO0FBQ0QsQ0FWRDs7QUFZQSxNQUFNaFcsT0FBTyxHQUFHb1csd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUM1Q2EsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllclcsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBRWUsZ0VBQUMsR0FBR3NXLElBQUosS0FBYTtBQUN4QkMseURBQVM7QUFDVCxTQUFPdFAscURBQU8sQ0FBQyxHQUFHcVAsSUFBSixDQUFkO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICAgIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbiAgICBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gICAgaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcclxuICAgIGltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xyXG4gIFxyXG4gICAgY29uc3QgTm9kZUJpcmQgPSAoe0NvbXBvbmVudH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7tirjsnITthLA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIE5vZGVCaXJkLnByb3B0eXBlcyA9IHtcclxuICAgICAgICBDb21wb25lbnQgOlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG4gICAgIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgICAgICBwb3N0LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lUmVkdWNlcihzdGF0ZSxhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlciIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXHJcbi8vIGltcG9ydCBmYWtlciBmcm9tICdmYWtlcidcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6W10sXHJcbiAgICBzaW5nbGVQb3N0OiBudWxsLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuXHJcbiAgICByZW1vdmVCb29rbWFya0xvYWRpbmcgOmZhbHNlLFxyXG4gICAgcmVtb3ZlQm9va21hcmtEb25lIDogZmFsc2UsXHJcbiAgICByZW1vdmVCb29rbWFya0Vycm9yIDogbnVsbCxcclxuXHJcbiAgICBhZGRCb29rbWFya0xvYWRpbmcgOmZhbHNlLFxyXG4gICAgYWRkQm9va21hcmtEb25lIDogZmFsc2UsXHJcbiAgICBhZGRCb29rbWFya0Vycm9yIDogbnVsbCxcclxuXHJcbiAgICBsaWtlUG9zdExvYWRpbmcgOmZhbHNlLFxyXG4gICAgbGlrZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yIDogbnVsbCxcclxuXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvciA6IG51bGwsXHJcblxyXG4gICByZXR3ZWV0TG9hZGluZyA6IGZhbHNlLFxyXG4gICByZXR3ZWV0RG9uZSA6IGZhbHNlLFxyXG4gICByZXR3ZWV0RXJyb3IgOiBudWxsLFxyXG4gICBcclxuICAgZWRpdFBvc3RDb250ZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICBlZGl0UG9zdENvbnRlbnREb25lIDogZmFsc2UsXHJcbiAgIGVkaXRQb3N0Q29udGVudEVycm9yIDogbnVsbCxcclxuICAgXHJcbiAgIGRlbHRlUG9zdEltYWdlTG9hZGluZyA6IGZhbHNlLFxyXG4gICBkZWx0ZVBvc3RJbWFnZURvbmUgOiBmYWxzZSxcclxuICAgZGVsdGVQb3N0SW1hZ2VFcnJvciA6IG51bGwsXHJcbiAgIFxyXG5cclxuXHJcbiAgIFxyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT5cclxuLy8gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIEltYWdlczogW3tcclxuLy8gICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuLy8gICAgIH1dLFxyXG4vLyAgICAgQ29tbWVudHM6W3tcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbi8vICAgICB9XVxyXG4gICAgXHJcbi8vIH0pKVxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgICAgVXNlcjp7XHJcbi8vICAgICAgICAgaWQ6MSxcclxuLy8gICAgICAgICBuaWNrbmFtZTon7IKs7Jqp7J6QMidcclxuLy8gICAgIH0sXHJcbi8vICAgICBJbWFnZXM6IFt7c3JjOlwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8wMS8yNC8yMC80Ny9tb3VudGFpbnMtNTk0NjUwMF8xMjgwLmpwZ1wifSxdLFxyXG4vLyAgICAgQ29tbWVudHM6IFsn64yT6riA7YWM7Iqk7Yq4J10sXHJcbi8vIH0pXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIC4uLmRhdGEsXHJcbi8vIH0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX0lNQUdFX1JFUVVFU1QgPSAnREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9JTUFHRV9TVUNDRVNTID0gJ0RFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfSU1BR0VfRkFJTFVSRSA9ICdERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBFRElUX1BPU1RfQ09OVEVOVF9SRVFVRVNUID0gJ0VESVRfUE9TVF9DT05URU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUX0NPTlRFTlRfU1VDQ0VTUyA9ICdFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEVESVRfUE9TVF9DT05URU5UX0ZBSUxVUkUgPSAnRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNUID0gJ0xPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfQk9PS01BUktTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9CT09LTUFSS1NfRkFJTFVSRSA9ICdMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSS19SRVFVRVNUID0gJ0FERF9CT09LTUFSS19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSS19TVUNDRVNTID0gJ0FERF9CT09LTUFSS19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9CT09LTUFSS19GQUlMVVJFID0gJ0FERF9CT09LTUFSS19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUktfUkVRVUVTVCA9ICdSRU1PVkVfQk9PS01BUktfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUktfU1VDQ0VTUyA9ICdSRU1PVkVfQk9PS01BUktfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQk9PS01BUktfRkFJTFVSRSA9ICdSRU1PVkVfQk9PS01BUktfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9ICBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodixpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZVBvc3RJbWFnZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX1BPU1RfSU1BR0VfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVQb3N0SW1hZ2VMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVQb3N0SW1hZ2VEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuSW1hZ2VzID0gcG9zdC5JbWFnZXMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5JbWFnZUlkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlUG9zdEltYWdlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9CT09LTUFSS19TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlQm9va21hcmtEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQm9va21hcmtlcnMgPSBwb3N0LkJvb2ttYXJrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0JPT0tNQVJLX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVCb29rbWFya0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUJvb2ttYXJrRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgRURJVF9QT1NUX0NPTlRFTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmVkaXRQb3N0Q29udGVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRURJVF9QT1NUX0NPTlRFTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gIGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDsgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lZGl0UG9zdENvbnRlbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5lZGl0UG9zdENvbnRlbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZWRpdFBvc3RDb250ZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0JPT0tNQVJLX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9CT09LTUFSS19TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZEJvb2ttYXJrTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQm9va21hcmtlcnMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLlVzZXJJZH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9CT09LTUFSS19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQm9va21hcmtMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRCb29rbWFya0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrOyAgXHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9CT09LTUFSS1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0JPT0tNQVJLU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG5cclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgIHNlYXJjaFVzZXJMaXN0OiBudWxsLFxyXG5cclxuICAgIGxvYWRVc2VyTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZE15SW5mb0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICAgIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmZvbGxvd0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgXHJcbiAgICBsb2FkRm9sbG93ZXJzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dpbmdzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuXHJcbiAgICBjaGFuZ2VOaWNrTmFtZUxvYWRpbmcgOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tOYW1lRXJyb3IgOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja05hbWVEb25lIDogZmFsc2UsXHJcblxyXG4gICAgc2VhcmNoVXNlckxvYWRpbmcgOiBmYWxzZSxcclxuICAgc2VhcmNoVXNlckRvbmUgOiBmYWxzZSxcclxuICAgc2VhcmNoVXNlckVycm9yIDogbnVsbCxcclxuXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgcmVjb21tZW5kOiBudWxsLFxyXG59XHJcbiAgICAvLyBjb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC8vICAgICAuLi5kYXRhLFxyXG4gICAgLy8gICAgIG5pY2tuYW1lOifri4nrhKTsnoQnLFxyXG4gICAgLy8gICAgIGlkOjEsXHJcbiAgICAvLyAgICAgUG9zdHM6W3tpZDogMX1dLFxyXG4gICAgLy8gICAgIEZvbGxvd2luZ3M6W3tuaWNrbmFtZTon67aA6riwJ30se25pY2tuYW1lOifrtoDquLAyJ30se25pY2tuYW1lOifrtoDquLAzJ31dLFxyXG4gICAgLy8gICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lOiAna2luZyd9LCB7bmlja25hbWU6ICdraW5nMSd9XVxyXG5cclxuICAgIC8vIH0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVDT01NRU5EX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1JFQ09NTUVORF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUNPTU1FTkRfVVNFUl9TVUNDRVNTID0gJ0xPQURfUkVDT01NRU5EX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFQ09NTUVORF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfVVNFUl9GQUlMVVJFID0gJ0xPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVNFVCA9ICdTSUdOX1VQX1JFU0VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIGRhdGEsXHJcbn0pIFxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgIGRhdGEsXHJcbn0pIFxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVjb21tZW5kID0gYWN0aW9uLmRhdGFcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICBjYXNlIExPQURfU0VBUkNIX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFVzZXJMaXN0PWFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFU0VUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YS5pZH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSBcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQge2FsbCwgZm9yaywgdGFrZSwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIGRlbGF5fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbCAoW1xyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7YWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBRERfQk9PS01BUktfRkFJTFVSRSwgQUREX0JPT0tNQVJLX1JFUVVFU1QsIEFERF9CT09LTUFSS19TVUNDRVNTLCBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFLCBERUxFVEVfUE9TVF9JTUFHRV9SRVFVRVNULCBERUxFVEVfUE9TVF9JTUFHRV9TVUNDRVNTLCBFRElUX1BPU1RfQ09OVEVOVF9GQUlMVVJFLCBFRElUX1BPU1RfQ09OVEVOVF9SRVFVRVNULCBFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTLCBnZW5lcmF0ZUR1bW15UG9zdCwgTElLRV9QT1NUX0ZBSUxVUkUsIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLCBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX0JPT0tNQVJLX0ZBSUxVUkUsIFJFTU9WRV9CT09LTUFSS19SRVFVRVNULCBSRU1PVkVfQk9PS01BUktfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVUV0VFVF9GQUlMVVJFLCBSRVRXRUVUX1JFUVVFU1QsIFJFVFdFRVRfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSwgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVVBMT0FEX0lNQUdFU19GQUlMVVJFLCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5mdW5jdGlvbiBEZWx0ZVBvc3RJbWFnZUFwaShkYXRhKSB7IC8vaGFzaHRhZy9uYW1lXHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGEucG9zdElkfS8ke2RhdGEuaW1hZ2VJZH0vaW1hZ2VkZWxldGVgLGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIERlbHRlUG9zdEltYWdlIChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoRGVsdGVQb3N0SW1hZ2VBcGksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9QT1NUX0lNQUdFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfUE9TVF9JTUFHRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBFZGl0UG9zdENvbnRlbnRBcGkoZGF0YSkgeyAvL2hhc2h0YWcvbmFtZVxyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGEucG9zdElkfS9lZGl0YCxkYXRhKVxyXG59XHJcbmZ1bmN0aW9uKiBFZGl0UG9zdENvbnRlbnQgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChFZGl0UG9zdENvbnRlbnRBcGksIGFjdGlvbi5kYXRhIClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBFRElUX1BPU1RfQ09OVEVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRURJVF9QT1NUX0NPTlRFTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FwaShkYXRhLGxhc3RJZCkgeyAvL2hhc2h0YWcvbmFtZVxyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkSGFzaHRhZycpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQXBpLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCApXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0IChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBcGksIGFjdGlvbi5kYXRhIClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQXBpKGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FwaSwgYWN0aW9uLmxhc3RJZCApXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2FkZHBvc3QnLCBkYXRhKSAvL2Zvcm1EYXRh64qUIOuwlOuhnCBkYXRh66GcIOygleydmFxyXG59XHJcbmZ1bmN0aW9uKiBhZGRQb3N0IChhY3Rpb24pe1xyXG5cclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFwaSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L3JlbW92ZWApXHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBcGksIGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vYWRkY29tbWVudGAsZGF0YSlcclxufVxyXG5mdW5jdGlvbiogYWRkQ29tbWVudCAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFwaSwgYWN0aW9uLmRhdGEpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRCb29rTWFya0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vYm9va21hcmtgKVxyXG59XHJcbmZ1bmN0aW9uKiBhZGRCb29rTWFyayAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQm9va01hcmtBcGksIGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQk9PS01BUktfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9CT09LTUFSS19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUJvb2tNYXJrQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS91bmJvb2ttYXJrYClcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlQm9va01hcmsgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUJvb2tNYXJrQXBpLCBhY3Rpb24uZGF0YSlcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0JPT0tNQVJLX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfQk9PS01BUktfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxpa2VQb3N0QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYClcclxufVxyXG5mdW5jdGlvbiogbGlrZVBvc3QgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QXBpLCBhY3Rpb24uZGF0YSlcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L3VubGlrZWApOyAvL3BhdGNoIOqyjOyLnOq4gOydmCDsnbzrtoDrtoTsnYQg7IiY7KCVXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC9pbWFnZXNgLCBkYXRhKTsgLy9wYXRjaCDqsozsi5zquIDsnZgg7J2867aA67aE7J2EIOyImOyglVxyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCxkYXRhKTsgLy9wYXRjaCDqsozsi5zquIDsnZgg7J2867aA67aE7J2EIOyImOyglVxyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRGVsdGVQb3N0SW1hZ2UoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMzAwMCwgREVMRVRFX1BPU1RfSU1BR0VfUkVRVUVTVCwgRGVsdGVQb3N0SW1hZ2UpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEVkaXRQb3N0Q29udGVudCgpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBFRElUX1BPU1RfQ09OVEVOVF9SRVFVRVNULCBFZGl0UG9zdENvbnRlbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUJvb2ttYXJrKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0JPT0tNQVJLX1JFUVVFU1QsIHJlbW92ZUJvb2tNYXJrKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRCb29rbWFyaygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9CT09LTUFSS19SRVFVRVNULCBhZGRCb29rTWFyayk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaERlbHRlUG9zdEltYWdlKSxcclxuICAgICAgICBmb3JrKHdhdGNoRWRpdFBvc3RDb250ZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlQm9va21hcmspLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRCb29rbWFyayksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7YWxsLHRocm90dGxlLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLCBGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsIExPQURfTVlfSU5GT19GQUlMVVJFLCBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfUkVDT01NRU5EX1VTRVJfRkFJTFVSRSwgTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNULCBMT0FEX1JFQ09NTUVORF9VU0VSX1NVQ0NFU1MsIExPQURfU0VBUkNIX1VTRVJfRkFJTFVSRSwgTE9BRF9TRUFSQ0hfVVNFUl9SRVFVRVNULCBMT0FEX1NFQVJDSF9VU0VSX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX0JPT0tNQVJLU19GQUlMVVJFLCBMT0FEX1VTRVJfQk9PS01BUktTX1JFUVVFU1QsIExPQURfVVNFUl9CT09LTUFSS1NfU1VDQ0VTUywgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsIExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gbG9hZEJvb2ttYXJrc0FwaShsYXN0SWQpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvYm9va21hcmtzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfSBgKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZEJvb2ttYXJrcyhhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEJvb2ttYXJrc0FwaSxhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfQk9PS01BUktTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCAoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfQk9PS01BUktTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWNvbW1lbmRVc2VyQXBpKCl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9yZWNvbW1lbmQnKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogcmVjb21tZW5kVXNlcigpIHtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVjb21tZW5kVXNlckFwaSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9SRUNPTU1FTkRfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQgKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9SRUNPTU1FTkRfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoVXNlckFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2xpc3Q/ZGF0YT0ke2RhdGEgfHwgbnVsbH1gKTsgICBcclxufSAgIFxyXG5mdW5jdGlvbiogc2VhcmNoVXNlcihhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2VhcmNoVXNlckFwaSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCAoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQXBpKGRhdGEsbGFzdElkKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7ICAgXHJcbn0gICBcclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBcGksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQgKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQXBpKCl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9sb2dpbicpO1xyXG59ICAgXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQXBpKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQgKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnbnVwQXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL3NpZ25VcCcsZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnbnVwQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCAoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BcGksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQgKHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBcGkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG5cclxufVxyXG5mdW5jdGlvbiogbG9nT3V0KCl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBcGkpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfT1VUX1NVQ0NFU1NcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrTmFtZUFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7bmlja25hbWU6IGRhdGF9KVxyXG59XHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrTmFtZShhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrTmFtZUFwaSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wYXRjaChgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKVxyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3cgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FwaSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyLyR7ZGF0YX0vdW5mb2xsb3dgKVxyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBcGksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZGZvbGxvd2Vyc0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9mb2xsb3dlcnNgKVxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkZm9sbG93ZXJzIChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkZm9sbG93ZXJzQXBpLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRmb2xsb3dpbmdzQXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC91c2VyL2ZvbGxvd2luZ3NgKVxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkZm9sbG93aW5ncyAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZGZvbGxvd2luZ3NBcGksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVmb2xsb3dlckFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YClcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlZm9sbG93ZXIgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZWZvbGxvd2VyQXBpLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkQm9va01hcmtzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX0JPT0tNQVJLU19SRVFVRVNULCBsb2FkQm9va21hcmtzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZWNvbW1lbmRVc2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRUNPTU1FTkRfVVNFUl9SRVFVRVNULCByZWNvbW1lbmRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hVc2VyKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDMwMDAsIExPQURfU0VBUkNIX1VTRVJfUkVRVUVTVCwgc2VhcmNoVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja05hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNobG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ251cCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRmb2xsb3dlcnMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRmb2xsb3dpbmdzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVmb2xsb3dlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEJvb2tNYXJrcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlY29tbWVuZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hsb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNobG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hsb2FkVXNlclBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgIF0pXHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGVsd2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGVsd2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwiaW1wb3J0IHtlbmFibGVFUzUsIHByb2R1Y2V9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgICBlbmFibGVFUzUoKTtcclxuICAgIHJldHVybiBwcm9kdWNlKC4uLmFyZ3MpO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9