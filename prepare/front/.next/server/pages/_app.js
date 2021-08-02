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
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPostRequestAction, addPostSuccessAction, addPostFailureAction, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  singlePost: null,
  imagePaths: [],
  hasMorePosts: true,
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
  retweetError: null
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
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
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

      case LOAD_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

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
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_RESET, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, loginSuccessAction, loginFailureAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
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
  me: null,
  userInfo: null
}; // const dummyUser = (data) => ({
//     ...data,
//     nickname:'닉네임',
//     id:1,
//     Posts:[{id: 1}],
//     Followings:[{nickname:'부기'},{nickname:'부기2'},{nickname:'부기3'}],
//     Followers:[{nickname: 'king'}, {nickname: 'king1'}]
// })

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
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
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

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet)]);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower)]);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3B0eXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImFkZFBvc3RTdWNjZXNzQWN0aW9uIiwiYWRkUG9zdEZhaWx1cmVBY3Rpb24iLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImVycm9yIiwidW5saWtlUG9zdHNMb2FkaW5nIiwidW5saWtlUG9zdHNEb25lIiwidW5saWtlUG9zdHNFcnJvciIsInVuc2hpZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJDb21tZW50cyIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImNoYW5nZU5pY2tOYW1lTG9hZGluZyIsImNoYW5nZU5pY2tOYW1lRXJyb3IiLCJjaGFuZ2VOaWNrTmFtZURvbmUiLCJtZSIsInVzZXJJbmZvIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9VUF9SRVNFVCIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibG9nb3V0U3VjY2Vzc0FjdGlvbiIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsIm5pY2tuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJsb2FkSGFzaHRhZ1Bvc3RzQXBpIiwibGFzdElkIiwiZ2V0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImxvYWRQb3N0QXBpIiwibG9hZFBvc3QiLCJsb2FkUG9zdHNBcGkiLCJsb2FkUG9zdHMiLCJhZGRQb3N0QXBpIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBcGkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFwaSIsInBvc3RJZCIsImxpa2VQb3N0QXBpIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaFJldHdlZXQiLCJsb2FkVXNlclBvc3RzQXBpIiwibG9hZFVzZXJQb3N0cyIsImxvYWRNeUluZm9BcGkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBcGkiLCJsb2FkVXNlciIsInNpZ251cEFwaSIsInNpZ251cCIsImxvZ0luQXBpIiwibG9nSW4iLCJsb2dPdXRBcGkiLCJsb2dPdXQiLCJjaGFuZ2VOaWNrTmFtZUFwaSIsImNoYW5nZU5pY2tOYW1lIiwiZm9sbG93QXBpIiwiZm9sbG93IiwidW5mb2xsb3dBcGkiLCJ1bmZvbGxvdyIsImxvYWRmb2xsb3dlcnNBcGkiLCJsb2FkZm9sbG93ZXJzIiwibG9hZGZvbGxvd2luZ3NBcGkiLCJsb2FkZm9sbG93aW5ncyIsInJlbW92ZWZvbGxvd2VyQXBpIiwicmVtb3ZlZm9sbG93ZXIiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hsb2FkTXlJbmZvIiwid2F0Y2hsb2FkVXNlciIsIndhdGNobG9hZFVzZXJQb3N0cyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93Iiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRlbHdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUM5QixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUM7QUFBZDtB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Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUdBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1DLG9CQUFvQixHQUFJQyxJQUFELEtBQVc7QUFDM0M1RSxNQUFJLEVBQUUrQyxnQkFEcUM7QUFFM0M2QjtBQUYyQyxDQUFYLENBQTdCO0FBSUEsTUFBTUMsb0JBQW9CLEdBQUlELElBQUQsS0FBVztBQUMzQzVFLE1BQUksRUFBRWdELGdCQURxQztBQUUzQzRCO0FBRjJDLENBQVgsQ0FBN0I7QUFJQSxNQUFNRSxvQkFBb0IsR0FBSUYsSUFBRCxLQUFXO0FBQzNDNUUsTUFBSSxFQUFFaUQ7QUFEcUMsQ0FBWCxDQUE3QjtBQUlBLE1BQU04QixVQUFVLEdBQUlILElBQUQsS0FBVztBQUNqQzVFLE1BQUksRUFBRThELG1CQUQyQjtBQUVqQ2M7QUFGaUMsQ0FBWCxDQUFuQjs7QUFPUCxNQUFNSSxPQUFPLEdBQUcsQ0FBQ2xGLEtBQUssR0FBSVcsWUFBVixFQUF3QlYsTUFBeEIsS0FBa0M7QUFDOUMsU0FBT2tGLDRDQUFPLENBQUNuRixLQUFELEVBQVFvRixLQUFELElBQVc7QUFDNUIsWUFBUW5GLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFdBQUswRSxZQUFMO0FBQ0lRLGFBQUssQ0FBQ3RFLFVBQU4sR0FBbUJzRSxLQUFLLENBQUN0RSxVQUFOLENBQWlCdUUsTUFBakIsQ0FBd0IsQ0FBQ0MsQ0FBRCxFQUFHQyxDQUFILEtBQVNBLENBQUMsS0FBS3RGLE1BQU0sQ0FBQzZFLElBQTlDLENBQW5CO0FBQ0E7O0FBRUosV0FBS25DLGlCQUFMO0FBQ0l5QyxhQUFLLENBQUNwRSxlQUFOLEdBQXdCLElBQXhCO0FBQ0FvRSxhQUFLLENBQUNuRSxZQUFOLEdBQXFCLEtBQXJCO0FBQ0FtRSxhQUFLLENBQUNsRSxhQUFOLEdBQXNCLElBQXRCO0FBQ0E7O0FBQ0osV0FBSzBCLGlCQUFMO0FBQXVCO0FBQ25Cd0MsZUFBSyxDQUFDcEUsZUFBTixHQUF3QixLQUF4QjtBQUNBb0UsZUFBSyxDQUFDbkUsWUFBTixHQUFxQixJQUFyQjtBQUNBLGdCQUFNUCxJQUFJLEdBQUcwRSxLQUFLLENBQUN4RSxTQUFOLENBQWdCNEUsSUFBaEIsQ0FBc0JGLENBQUQsSUFBT0EsQ0FBQyxDQUFDRyxFQUFGLEtBQVN4RixNQUFNLENBQUM2RSxJQUFQLENBQVlZLE1BQWpELENBQWI7QUFDQWhGLGNBQUksQ0FBQ2lGLE1BQUwsQ0FBWUMsSUFBWixDQUFpQjtBQUFDSCxjQUFFLEVBQUV4RixNQUFNLENBQUM2RSxJQUFQLENBQVllO0FBQWpCLFdBQWpCO0FBQ0E7QUFDSDs7QUFDRCxXQUFLaEQsaUJBQUw7QUFDSXVDLGFBQUssQ0FBQ3BFLGVBQU4sR0FBd0IsS0FBeEI7QUFDQW9FLGFBQUssQ0FBQ2xFLGFBQU4sR0FBc0JqQixNQUFNLENBQUM2RixLQUE3QjtBQUNBOztBQUVKLFdBQUtoRCxtQkFBTDtBQUNBc0MsYUFBSyxDQUFDVyxrQkFBTixHQUEyQixJQUEzQjtBQUNBWCxhQUFLLENBQUNZLGVBQU4sR0FBd0IsS0FBeEI7QUFDQVosYUFBSyxDQUFDYSxnQkFBTixHQUF5QixJQUF6QjtBQUNBOztBQUVBLFdBQUtsRCxtQkFBTDtBQUF5QjtBQUN6QixnQkFBTXJDLElBQUksR0FBRzBFLEtBQUssQ0FBQ3hFLFNBQU4sQ0FBZ0I0RSxJQUFoQixDQUFzQkYsQ0FBRCxJQUFPQSxDQUFDLENBQUNHLEVBQUYsS0FBU3hGLE1BQU0sQ0FBQzZFLElBQVAsQ0FBWVksTUFBakQsQ0FBYjtBQUNBaEYsY0FBSSxDQUFDaUYsTUFBTCxHQUFjakYsSUFBSSxDQUFDaUYsTUFBTCxDQUFZTixNQUFaLENBQW9CQyxDQUFELElBQU9BLENBQUMsQ0FBQ0csRUFBRixLQUFTeEYsTUFBTSxDQUFDNkUsSUFBUCxDQUFZZSxNQUEvQyxDQUFkO0FBQ0FULGVBQUssQ0FBQ1csa0JBQU4sR0FBMkIsS0FBM0I7QUFDQVgsZUFBSyxDQUFDWSxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7QUFDQzs7QUFDRCxXQUFLaEQsbUJBQUw7QUFDQW9DLGFBQUssQ0FBQ1csa0JBQU4sR0FBMkIsS0FBM0I7QUFDQVgsYUFBSyxDQUFDYSxnQkFBTixHQUF5QmhHLE1BQU0sQ0FBQzZGLEtBQWhDO0FBQ0E7O0FBRUEsV0FBSzdDLGdCQUFMO0FBQ0ltQyxhQUFLLENBQUN4RCxjQUFOLEdBQXVCLElBQXZCO0FBQ0F3RCxhQUFLLENBQUN2RCxXQUFOLEdBQW9CLEtBQXBCO0FBQ0F1RCxhQUFLLENBQUN0RCxZQUFOLEdBQXFCLElBQXJCO0FBQ0E7O0FBQ0osV0FBS29CLGdCQUFMO0FBQ0lrQyxhQUFLLENBQUN4RCxjQUFOLEdBQXVCLEtBQXZCO0FBQ0F3RCxhQUFLLENBQUN2RCxXQUFOLEdBQW9CLElBQXBCO0FBQ0F1RCxhQUFLLENBQUN4RSxTQUFOLENBQWdCc0YsT0FBaEIsQ0FBd0JqRyxNQUFNLENBQUM2RSxJQUEvQjtBQUNBTSxhQUFLLENBQUN0RSxVQUFOLEdBQW1CLEVBQW5CO0FBQ0E7O0FBQ0osV0FBS3FDLGdCQUFMO0FBQ0lpQyxhQUFLLENBQUN4RCxjQUFOLEdBQXVCLEtBQXZCO0FBQ0F3RCxhQUFLLENBQUN2RCxXQUFOLEdBQW9CLEtBQXBCO0FBQ0F1RCxhQUFLLENBQUN0RCxZQUFOLEdBQXFCN0IsTUFBTSxDQUFDNkYsS0FBNUI7QUFDQTs7QUFFSixXQUFLakMsaUJBQUw7QUFDSXVCLGFBQUssQ0FBQzlELGVBQU4sR0FBd0IsSUFBeEI7QUFDQThELGFBQUssQ0FBQzdELFlBQU4sR0FBcUIsS0FBckI7QUFDQTZELGFBQUssQ0FBQzVELGFBQU4sR0FBc0IsSUFBdEI7QUFDQTs7QUFDSixXQUFLc0MsaUJBQUw7QUFDSXNCLGFBQUssQ0FBQzlELGVBQU4sR0FBd0IsS0FBeEI7QUFDQThELGFBQUssQ0FBQzdELFlBQU4sR0FBcUIsSUFBckI7QUFDQTZELGFBQUssQ0FBQ3ZFLFVBQU4sR0FBbUJaLE1BQU0sQ0FBQzZFLElBQTFCO0FBQ0E7O0FBQ0osV0FBS2YsaUJBQUw7QUFDSXFCLGFBQUssQ0FBQzlELGVBQU4sR0FBd0IsS0FBeEI7QUFDQThELGFBQUssQ0FBQzVELGFBQU4sR0FBc0J2QixNQUFNLENBQUM2RixLQUE3QjtBQUNBOztBQUVKLFdBQUsxQyxrQkFBTDtBQUNBLFdBQUtNLDBCQUFMO0FBQ0EsV0FBS0gsdUJBQUw7QUFDSTZCLGFBQUssQ0FBQzNELGdCQUFOLEdBQXlCLElBQXpCO0FBQ0EyRCxhQUFLLENBQUMxRCxhQUFOLEdBQXNCLEtBQXRCO0FBQ0EwRCxhQUFLLENBQUN6RCxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7O0FBQ0osV0FBSzBCLGtCQUFMO0FBQ0EsV0FBS00sMEJBQUw7QUFDQSxXQUFLSCx1QkFBTDtBQUNJNEIsYUFBSyxDQUFDM0QsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQTJELGFBQUssQ0FBQzFELGFBQU4sR0FBc0IsSUFBdEI7QUFDQTBELGFBQUssQ0FBQ3hFLFNBQU4sR0FBa0J3RSxLQUFLLENBQUN4RSxTQUFOLENBQWdCdUYsTUFBaEIsQ0FBdUJsRyxNQUFNLENBQUM2RSxJQUE5QixDQUFsQjtBQUNBTSxhQUFLLENBQUNyRSxZQUFOLEdBQXFCZCxNQUFNLENBQUM2RSxJQUFQLENBQVlzQixNQUFaLEtBQXVCLEVBQTVDO0FBQ0E7O0FBQ0osV0FBSzlDLGtCQUFMO0FBQ0EsV0FBS00sMEJBQUw7QUFDQSxXQUFLSCx1QkFBTDtBQUNJMkIsYUFBSyxDQUFDM0QsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQTJELGFBQUssQ0FBQ3pELGNBQU4sR0FBdUIxQixNQUFNLENBQUM2RixLQUE5QjtBQUNBOztBQUVKLFdBQUs5QixtQkFBTDtBQUNJb0IsYUFBSyxDQUFDckQsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQXFELGFBQUssQ0FBQ3BELGNBQU4sR0FBdUIsS0FBdkI7QUFDQW9ELGFBQUssQ0FBQ25ELGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDSixXQUFLZ0MsbUJBQUw7QUFBeUI7QUFDckIsZ0JBQU12RCxJQUFJLEdBQUcwRSxLQUFLLENBQUN4RSxTQUFOLENBQWdCNEUsSUFBaEIsQ0FBc0JGLENBQUQsSUFBT0EsQ0FBQyxDQUFDRyxFQUFGLEtBQVN4RixNQUFNLENBQUM2RSxJQUFQLENBQVlZLE1BQWpELENBQWI7QUFDQWhGLGNBQUksQ0FBQzJGLFFBQUwsQ0FBY0gsT0FBZCxDQUFzQmpHLE1BQU0sQ0FBQzZFLElBQTdCO0FBQ0FNLGVBQUssQ0FBQ3JELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FxRCxlQUFLLENBQUNwRCxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7QUFDQzs7QUFDTCxXQUFLa0MsbUJBQUw7QUFDSWtCLGFBQUssQ0FBQ3JELGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FxRCxhQUFLLENBQUNuRCxlQUFOLEdBQXdCaEMsTUFBTSxDQUFDNkYsS0FBL0I7QUFDQTs7QUFFSixXQUFLM0IsbUJBQUw7QUFDQWlCLGFBQUssQ0FBQ2xELGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FrRCxhQUFLLENBQUNqRCxjQUFOLEdBQXVCLEtBQXZCO0FBQ0FpRCxhQUFLLENBQUNoRCxlQUFOLEdBQXdCLElBQXhCO0FBQ0E7O0FBQ0EsV0FBS2dDLG1CQUFMO0FBQ0lnQixhQUFLLENBQUNsRCxpQkFBTixHQUEwQixLQUExQjtBQUNBa0QsYUFBSyxDQUFDakQsY0FBTixHQUF1QixJQUF2QjtBQUNBaUQsYUFBSyxDQUFDeEUsU0FBTixHQUFrQndFLEtBQUssQ0FBQ3hFLFNBQU4sQ0FBZ0J5RSxNQUFoQixDQUF3QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNHLEVBQUYsS0FBU3hGLE1BQU0sQ0FBQzZFLElBQVAsQ0FBWVksTUFBbkQsQ0FBbEI7QUFDQTs7QUFDSixXQUFLckIsbUJBQUw7QUFDSWUsYUFBSyxDQUFDbEQsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWtELGFBQUssQ0FBQ2hELGVBQU4sR0FBd0JuQyxNQUFNLENBQUM2RixLQUEvQjtBQUNBOztBQUVKLFdBQUt4QixxQkFBTDtBQUNBYyxhQUFLLENBQUMvQyxtQkFBTixHQUE0QixJQUE1QjtBQUNBK0MsYUFBSyxDQUFDOUMsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQThDLGFBQUssQ0FBQzdDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0E7O0FBQ0EsV0FBS2dDLHFCQUFMO0FBQ0lhLGFBQUssQ0FBQ3RFLFVBQU4sR0FBbUJiLE1BQU0sQ0FBQzZFLElBQTFCO0FBQ0FNLGFBQUssQ0FBQy9DLG1CQUFOLEdBQTRCLEtBQTVCO0FBQ0ErQyxhQUFLLENBQUM5QyxnQkFBTixHQUF5QixJQUF6QjtBQUNBOztBQUNKLFdBQUtrQyxxQkFBTDtBQUNJWSxhQUFLLENBQUMvQyxtQkFBTixHQUE0QixLQUE1QjtBQUNBK0MsYUFBSyxDQUFDN0MsaUJBQU4sR0FBMEJ0QyxNQUFNLENBQUM2RixLQUFqQztBQUNBOztBQUVKLFdBQUtyQixlQUFMO0FBQ0FXLGFBQUssQ0FBQzVDLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTRDLGFBQUssQ0FBQzNDLFdBQU4sR0FBb0IsS0FBcEI7QUFDQTJDLGFBQUssQ0FBQzFDLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDQSxXQUFLZ0MsZUFBTDtBQUNJVSxhQUFLLENBQUN4RSxTQUFOLENBQWdCc0YsT0FBaEIsQ0FBd0JqRyxNQUFNLENBQUM2RSxJQUEvQjtBQUNBTSxhQUFLLENBQUM1QyxjQUFOLEdBQXVCLEtBQXZCO0FBQ0E0QyxhQUFLLENBQUMzQyxXQUFOLEdBQW9CLElBQXBCO0FBQ0E7O0FBQ0osV0FBS2tDLGVBQUw7QUFDSVMsYUFBSyxDQUFDNUMsY0FBTixHQUF1QixLQUF2QjtBQUNBNEMsYUFBSyxDQUFDMUMsWUFBTixHQUFxQnpDLE1BQU0sQ0FBQzZGLEtBQTVCO0FBQ0E7O0FBQ0o7QUFDSTtBQTVKUjtBQThKSCxHQS9KYSxDQUFkO0FBZ0tILENBaktEOztBQW1LZVosc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdlRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNdkUsWUFBWSxHQUFHO0FBQ3hCMkYsaUJBQWUsRUFBRyxLQURNO0FBRXhCQyxjQUFZLEVBQUUsS0FGVTtBQUd4QkMsZUFBYSxFQUFFLElBSFM7QUFLeEJDLG1CQUFpQixFQUFHLEtBTEk7QUFNeEJDLGdCQUFjLEVBQUUsS0FOUTtBQU94QkMsaUJBQWUsRUFBRSxJQVBPO0FBU3hCQyxlQUFhLEVBQUcsS0FUUTtBQVV4QkMsWUFBVSxFQUFFLEtBVlk7QUFXeEJDLGFBQVcsRUFBRSxJQVhXO0FBYXhCQyxjQUFZLEVBQUcsS0FiUztBQWN4QkMsV0FBUyxFQUFFLEtBZGE7QUFleEJDLFlBQVUsRUFBRSxJQWZZO0FBaUJ4QkMsZUFBYSxFQUFHLEtBakJRO0FBa0J4QkMsWUFBVSxFQUFFLEtBbEJZO0FBbUJ4QkMsYUFBVyxFQUFFLElBbkJXO0FBcUJ4QkMsaUJBQWUsRUFBRyxLQXJCTTtBQXNCeEJDLGNBQVksRUFBRSxLQXRCVTtBQXVCeEJDLGVBQWEsRUFBRSxJQXZCUztBQXlCeEJDLHNCQUFvQixFQUFHLEtBekJDO0FBMEJ4QkMsbUJBQWlCLEVBQUUsS0ExQks7QUEyQnhCQyxvQkFBa0IsRUFBRSxJQTNCSTtBQTZCeEJDLHVCQUFxQixFQUFHLEtBN0JBO0FBOEJ4QkMsb0JBQWtCLEVBQUUsS0E5Qkk7QUErQnhCQyxxQkFBbUIsRUFBRSxJQS9CRztBQWlDeEJDLHVCQUFxQixFQUFHLEtBakNBO0FBa0N4QkMsb0JBQWtCLEVBQUUsS0FsQ0k7QUFtQ3hCQyxxQkFBbUIsRUFBRSxJQW5DRztBQXFDeEJDLHVCQUFxQixFQUFHLEtBckNBO0FBc0N4QkMscUJBQW1CLEVBQUcsSUF0Q0U7QUF1Q3hCQyxvQkFBa0IsRUFBRyxLQXZDRztBQXdDeEJDLElBQUUsRUFBRSxJQXhDb0I7QUF5Q3hCQyxVQUFRLEVBQUU7QUF6Q2MsQ0FBckIsQyxDQTJDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNHLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBSTVGLElBQUQsS0FBVztBQUN6QzVFLE1BQUksRUFBRXlKLGNBRG1DO0FBRXpDN0U7QUFGeUMsQ0FBWCxDQUEzQjtBQUlBLE1BQU02RixrQkFBa0IsR0FBSTdGLElBQUQsS0FBVztBQUN6QzVFLE1BQUksRUFBRTBKLGNBRG1DO0FBRXpDOUU7QUFGeUMsQ0FBWCxDQUEzQjtBQUlBLE1BQU04RixrQkFBa0IsR0FBSTlGLElBQUQsS0FBVztBQUN6QzVFLE1BQUksRUFBRTJKLGNBRG1DO0FBRXpDL0U7QUFGeUMsQ0FBWCxDQUEzQjtBQUlBLE1BQU0rRixtQkFBbUIsR0FBSS9GLElBQUQsS0FBVztBQUM1QzVFLE1BQUksRUFBRTRKLGVBRHNDO0FBRTVDaEY7QUFGNEMsQ0FBWCxDQUE1QjtBQUtBLE1BQU1nRyxtQkFBbUIsR0FBSWhHLElBQUQsS0FBVztBQUM1QzVFLE1BQUksRUFBRTZKLGVBRHNDO0FBRTVDakY7QUFGNEMsQ0FBWCxDQUE1QjtBQUlBLE1BQU1pRyxtQkFBbUIsR0FBSWpHLElBQUQsS0FBVztBQUM1QzVFLE1BQUksRUFBRThKLGVBRHNDO0FBRTVDbEY7QUFGNEMsQ0FBWCxDQUE1Qjs7QUFNUCxNQUFNSSxPQUFPLEdBQUcsQ0FBQ2xGLEtBQUssR0FBR1csWUFBVCxFQUF1QlYsTUFBdkIsS0FBa0M7QUFDaEQsU0FBT2tGLDRDQUFPLENBQUNuRixLQUFELEVBQVNvRixLQUFELElBQVc7QUFDM0IsWUFBT25GLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFdBQUt1SSxvQkFBTDtBQUNBckQsYUFBSyxDQUFDcUIsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQXJCLGFBQUssQ0FBQ3VCLGVBQU4sR0FBd0IsSUFBeEI7QUFDQXZCLGFBQUssQ0FBQ3NCLGNBQU4sR0FBdUIsS0FBdkI7QUFDQTs7QUFFQSxXQUFLZ0Msb0JBQUw7QUFDQXRELGFBQUssQ0FBQ3FCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FyQixhQUFLLENBQUNzQixjQUFOLEdBQXVCLElBQXZCO0FBQ0F0QixhQUFLLENBQUNnRCxFQUFOLEdBQVduSSxNQUFNLENBQUM2RSxJQUFsQjtBQUNBOztBQUVBLFdBQUs2RCxvQkFBTDtBQUNBdkQsYUFBSyxDQUFDcUIsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXJCLGFBQUssQ0FBQ3VCLGVBQU4sR0FBd0IxRyxNQUFNLENBQUM2RixLQUEvQjtBQUNBOztBQUVBLFdBQUt3QyxpQkFBTDtBQUNBbEQsYUFBSyxDQUFDa0IsZUFBTixHQUF3QixJQUF4QjtBQUNBbEIsYUFBSyxDQUFDb0IsYUFBTixHQUFzQixJQUF0QjtBQUNBcEIsYUFBSyxDQUFDbUIsWUFBTixHQUFxQixLQUFyQjtBQUNBOztBQUVBLFdBQUtnQyxpQkFBTDtBQUNBbkQsYUFBSyxDQUFDa0IsZUFBTixHQUF3QixLQUF4QjtBQUNBbEIsYUFBSyxDQUFDbUIsWUFBTixHQUFxQixJQUFyQjtBQUNBbkIsYUFBSyxDQUFDaUQsUUFBTixHQUFpQnBJLE1BQU0sQ0FBQzZFLElBQXhCO0FBQ0E7O0FBRUEsV0FBSzBELGlCQUFMO0FBQ0FwRCxhQUFLLENBQUNrQixlQUFOLEdBQXdCLEtBQXhCO0FBQ0FsQixhQUFLLENBQUNvQixhQUFOLEdBQXNCdkcsTUFBTSxDQUFDNkYsS0FBN0I7QUFDQTs7QUFFQSxXQUFLOEMsY0FBTDtBQUNBeEQsYUFBSyxDQUFDOEIsYUFBTixHQUFzQixJQUF0QjtBQUNBOUIsYUFBSyxDQUFDZ0MsV0FBTixHQUFvQixJQUFwQjtBQUNBaEMsYUFBSyxDQUFDK0IsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUVBLFdBQUswQixjQUFMO0FBQ0F6RCxhQUFLLENBQUM4QixhQUFOLEdBQXNCLEtBQXRCO0FBQ0E5QixhQUFLLENBQUMrQixVQUFOLEdBQW1CLElBQW5CO0FBQ0EvQixhQUFLLENBQUNnRCxFQUFOLENBQVM0QyxVQUFULENBQW9CcEYsSUFBcEIsQ0FBeUIzRixNQUFNLENBQUM2RSxJQUFoQztBQUNBOztBQUVBLFdBQUtnRSxjQUFMO0FBQ0ExRCxhQUFLLENBQUM4QixhQUFOLEdBQXNCLEtBQXRCO0FBQ0E5QixhQUFLLENBQUNnQyxXQUFOLEdBQW9CbkgsTUFBTSxDQUFDNkYsS0FBM0I7QUFDQTs7QUFFQSxXQUFLaUQsZ0JBQUw7QUFDQTNELGFBQUssQ0FBQ2lDLGVBQU4sR0FBd0IsSUFBeEI7QUFDQWpDLGFBQUssQ0FBQ21DLGFBQU4sR0FBc0IsSUFBdEI7QUFDQW5DLGFBQUssQ0FBQ2tDLFlBQU4sR0FBcUIsS0FBckI7QUFDQTs7QUFFQSxXQUFLMEIsZ0JBQUw7QUFDQTVELGFBQUssQ0FBQ2lDLGVBQU4sR0FBd0IsS0FBeEI7QUFDQWpDLGFBQUssQ0FBQ2tDLFlBQU4sR0FBcUIsSUFBckI7QUFDQWxDLGFBQUssQ0FBQ2dELEVBQU4sQ0FBUzRDLFVBQVQsR0FBc0I1RixLQUFLLENBQUNnRCxFQUFOLENBQVM0QyxVQUFULENBQW9CM0YsTUFBcEIsQ0FBNEJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDRyxFQUFGLEtBQVN4RixNQUFNLENBQUM2RSxJQUFQLENBQVlXLEVBQXZELENBQXRCO0FBQ0E7O0FBRUEsV0FBS3dELGdCQUFMO0FBQ0E3RCxhQUFLLENBQUNpQyxlQUFOLEdBQXdCLEtBQXhCO0FBQ0FqQyxhQUFLLENBQUNtQyxhQUFOLEdBQXNCdEgsTUFBTSxDQUFDNkYsS0FBN0I7QUFDQTs7QUFFQSxXQUFLdUQsc0JBQUw7QUFDQWpFLGFBQUssQ0FBQ29DLG9CQUFOLEdBQTZCLElBQTdCO0FBQ0FwQyxhQUFLLENBQUNzQyxrQkFBTixHQUEyQixJQUEzQjtBQUNBdEMsYUFBSyxDQUFDcUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTs7QUFFQSxXQUFLNkIsc0JBQUw7QUFDQWxFLGFBQUssQ0FBQ29DLG9CQUFOLEdBQTZCLEtBQTdCO0FBQ0FwQyxhQUFLLENBQUNxQyxpQkFBTixHQUEwQixJQUExQjtBQUNBckMsYUFBSyxDQUFDZ0QsRUFBTixDQUFTNkMsU0FBVCxHQUFxQmhMLE1BQU0sQ0FBQzZFLElBQTVCO0FBQ0E7O0FBRUEsV0FBS3lFLHNCQUFMO0FBQ0FuRSxhQUFLLENBQUNvQyxvQkFBTixHQUE2QixLQUE3QjtBQUNBcEMsYUFBSyxDQUFDc0Msa0JBQU4sR0FBMkJ6SCxNQUFNLENBQUM2RixLQUFsQztBQUNBOztBQUVBLFdBQUswRCx1QkFBTDtBQUNBcEUsYUFBSyxDQUFDdUMscUJBQU4sR0FBOEIsSUFBOUI7QUFDQXZDLGFBQUssQ0FBQ3lDLG1CQUFOLEdBQTRCLElBQTVCO0FBQ0F6QyxhQUFLLENBQUN3QyxrQkFBTixHQUEyQixLQUEzQjtBQUNBOztBQUVBLFdBQUs2Qix1QkFBTDtBQUNBckUsYUFBSyxDQUFDdUMscUJBQU4sR0FBOEIsS0FBOUI7QUFDQXZDLGFBQUssQ0FBQ3dDLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0F4QyxhQUFLLENBQUNnRCxFQUFOLENBQVM0QyxVQUFULEdBQXNCL0ssTUFBTSxDQUFDNkUsSUFBN0I7QUFDQTs7QUFFQSxXQUFLNEUsdUJBQUw7QUFDQXRFLGFBQUssQ0FBQ3VDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0F2QyxhQUFLLENBQUN5QyxtQkFBTixHQUE0QjVILE1BQU0sQ0FBQzZGLEtBQW5DO0FBQ0E7O0FBRUEsV0FBS29ELHVCQUFMO0FBQ0E5RCxhQUFLLENBQUMwQyxxQkFBTixHQUE4QixJQUE5QjtBQUNBMUMsYUFBSyxDQUFDNEMsbUJBQU4sR0FBNEIsSUFBNUI7QUFDQTVDLGFBQUssQ0FBQzJDLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0E7O0FBRUEsV0FBS29CLHVCQUFMO0FBQ0EvRCxhQUFLLENBQUMwQyxxQkFBTixHQUE4QixLQUE5QjtBQUNBMUMsYUFBSyxDQUFDMkMsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTNDLGFBQUssQ0FBQ2dELEVBQU4sQ0FBUzZDLFNBQVQsR0FBcUI3RixLQUFLLENBQUNnRCxFQUFOLENBQVM2QyxTQUFULENBQW1CNUYsTUFBbkIsQ0FBMkJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDRyxFQUFGLEtBQVN4RixNQUFNLENBQUM2RSxJQUFQLENBQVllLE1BQXRELENBQXJCO0FBQ0E7O0FBRUEsV0FBS3VELHVCQUFMO0FBQ0FoRSxhQUFLLENBQUMwQyxxQkFBTixHQUE4QixLQUE5QjtBQUNBMUMsYUFBSyxDQUFDNEMsbUJBQU4sR0FBNEIvSCxNQUFNLENBQUM2RixLQUFuQztBQUNBOztBQUVBLFdBQUs2RCxjQUFMO0FBQ0F2RSxhQUFLLENBQUMyQixZQUFOLEdBQXFCLElBQXJCO0FBQ0EzQixhQUFLLENBQUM2QixVQUFOLEdBQW1CLElBQW5CO0FBQ0E3QixhQUFLLENBQUM0QixTQUFOLEdBQWtCLEtBQWxCO0FBQ0E7O0FBRUEsV0FBSzRDLGNBQUw7QUFDQXhFLGFBQUssQ0FBQzJCLFlBQU4sR0FBcUIsS0FBckI7QUFDQTNCLGFBQUssQ0FBQzRCLFNBQU4sR0FBa0IsSUFBbEI7QUFDQTVCLGFBQUssQ0FBQ2dELEVBQU4sR0FBV25JLE1BQU0sQ0FBQzZFLElBQWxCO0FBQ0E7O0FBRUEsV0FBSytFLGNBQUw7QUFDQXpFLGFBQUssQ0FBQzJCLFlBQU4sR0FBcUIsS0FBckI7QUFDQTNCLGFBQUssQ0FBQzZCLFVBQU4sR0FBbUJoSCxNQUFNLENBQUM2RixLQUExQjtBQUNBOztBQUVBLFdBQUtnRSxlQUFMO0FBQ0ExRSxhQUFLLENBQUM4RixhQUFOLEdBQXNCLElBQXRCO0FBQ0E5RixhQUFLLENBQUMrRixXQUFOLEdBQW9CLElBQXBCO0FBQ0EvRixhQUFLLENBQUNnRyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7O0FBRUEsV0FBS3JCLGVBQUw7QUFDQTNFLGFBQUssQ0FBQzhGLGFBQU4sR0FBc0IsS0FBdEI7QUFDQTlGLGFBQUssQ0FBQ2dHLFVBQU4sR0FBbUIsSUFBbkI7QUFDQWhHLGFBQUssQ0FBQ2dELEVBQU4sR0FBVyxJQUFYO0FBQ0E7O0FBRUEsV0FBSzRCLGVBQUw7QUFDQTVFLGFBQUssQ0FBQzhGLGFBQU4sR0FBc0IsS0FBdEI7QUFDQTlGLGFBQUssQ0FBQytGLFdBQU4sR0FBb0JsTCxNQUFNLENBQUM2RixLQUEzQjtBQUNBOztBQUVBLFdBQUttRSxlQUFMO0FBQ0E3RSxhQUFLLENBQUN3QixhQUFOLEdBQXNCLElBQXRCO0FBQ0F4QixhQUFLLENBQUMwQixXQUFOLEdBQW9CLElBQXBCO0FBQ0ExQixhQUFLLENBQUN5QixVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7O0FBRUEsV0FBS3FELGVBQUw7QUFDQTlFLGFBQUssQ0FBQ3dCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQXhCLGFBQUssQ0FBQ3lCLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTs7QUFFQSxXQUFLc0QsZUFBTDtBQUNBL0UsYUFBSyxDQUFDd0IsYUFBTixHQUFzQixLQUF0QjtBQUNBeEIsYUFBSyxDQUFDMEIsV0FBTixHQUFvQjdHLE1BQU0sQ0FBQzZGLEtBQTNCO0FBQ0E7O0FBRUEsV0FBS3NFLGFBQUw7QUFDQWhGLGFBQUssQ0FBQ3lCLFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFFQSxXQUFLd0QsdUJBQUw7QUFDQWpGLGFBQUssQ0FBQzZDLHFCQUFOLEdBQThCLElBQTlCO0FBQ0E3QyxhQUFLLENBQUM4QyxtQkFBTixHQUE0QixJQUE1QjtBQUNBOUMsYUFBSyxDQUFDK0Msa0JBQU4sR0FBMkIsS0FBM0I7QUFDQTs7QUFFQSxXQUFLbUMsdUJBQUw7QUFDQWxGLGFBQUssQ0FBQzZDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0E3QyxhQUFLLENBQUMrQyxrQkFBTixHQUEyQixJQUEzQjtBQUNBL0MsYUFBSyxDQUFDZ0QsRUFBTixDQUFTaUQsUUFBVCxHQUFvQnBMLE1BQU0sQ0FBQzZFLElBQVAsQ0FBWXVHLFFBQWhDO0FBQ0E7O0FBRUEsV0FBS2QsdUJBQUw7QUFDQW5GLGFBQUssQ0FBQzZDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0E3QyxhQUFLLENBQUM4QyxtQkFBTixHQUE0QmpJLE1BQU0sQ0FBQzZGLEtBQW5DO0FBQ0E7O0FBRUEsV0FBSzBFLGNBQUw7QUFDSXBGLGFBQUssQ0FBQ2dELEVBQU4sQ0FBU2tELEtBQVQsQ0FBZXBGLE9BQWYsQ0FBdUI7QUFBQ1QsWUFBRSxFQUFFeEYsTUFBTSxDQUFDNkUsSUFBUCxDQUFZVztBQUFqQixTQUF2QjtBQUNKOztBQUNBLFdBQUtnRixpQkFBTDtBQUNJckYsYUFBSyxDQUFDZ0QsRUFBTixDQUFTa0QsS0FBVCxHQUFpQmxHLEtBQUssQ0FBQ2dELEVBQU4sQ0FBU2tELEtBQVQsQ0FBZWpHLE1BQWYsQ0FBdUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDRyxFQUFGLEtBQVN4RixNQUFNLENBQUM2RSxJQUFQLENBQVlZLE1BQWxELENBQWpCO0FBQ0o7O0FBRUE7QUFBUztBQXRNYjtBQXlNSCxHQTFNVyxDQUFkO0FBMk1ELENBNU1EOztBQTZNZVIsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDOVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFxRyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsdUJBQXpCO0FBQ0FGLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUUsZUFBZixHQUFpQyxJQUFqQztBQUVBO0FBQ0E7QUFDZSxVQUFVQyxRQUFWLEdBQXFCO0FBQ2hDLFFBQU1DLDhEQUFHLENBQUUsQ0FDUEMsK0RBQUksQ0FBQ0MsNkNBQUQsQ0FERyxFQUVQRCwrREFBSSxDQUFDRSw2Q0FBRCxDQUZHLENBQUYsQ0FBVDtBQUlILEM7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQyxtQkFBVCxDQUE2QmxILElBQTdCLEVBQWtDbUgsTUFBbEMsRUFBMEM7QUFBRTtBQUN4QyxTQUFPViw0Q0FBSyxDQUFDVyxHQUFOLENBQVcsWUFBV0Msa0JBQWtCLENBQUNySCxJQUFELENBQU8sV0FBVW1ILE1BQU0sSUFBSSxDQUFFLEVBQXJFLENBQVA7QUFDSDs7QUFDRCxVQUFVRyxnQkFBVixDQUE0Qm5NLE1BQTVCLEVBQW1DO0FBQy9CLE1BQUc7QUFDREcsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNFLFVBQU1nTSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ04sbUJBQUQsRUFBc0IvTCxNQUFNLENBQUM2RSxJQUE3QixFQUFtQzdFLE1BQU0sQ0FBQ2dNLE1BQTFDLENBQXpCO0FBQ0EsVUFBTU0sOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFFeUQseUVBREE7QUFFTm1CLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZIO0FBRlAsS0FBRCxDQUFUO0FBS0gsR0FSRCxDQVFDLE9BQU0wSCxHQUFOLEVBQVU7QUFDVHBNLFdBQU8sQ0FBQzBGLEtBQVIsQ0FBYzBHLEdBQWQ7QUFDRSxVQUFNRCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUUwRCx5RUFEQTtBQUVOa0MsV0FBSyxFQUFFMEcsR0FBRyxDQUFDQyxRQUFKLENBQWEzSDtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzRILFdBQVQsQ0FBcUI1SCxJQUFyQixFQUEyQjtBQUN2QixTQUFPeUcsNENBQUssQ0FBQ1csR0FBTixDQUFXLFNBQVFwSCxJQUFLLEVBQXhCLENBQVA7QUFDSDs7QUFDRCxVQUFVNkgsUUFBVixDQUFvQjFNLE1BQXBCLEVBQTJCO0FBQ3ZCLE1BQUc7QUFDQyxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNJLFdBQUQsRUFBY3pNLE1BQU0sQ0FBQzZFLElBQXJCLENBQXpCO0FBQ0EsVUFBTXlILDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBRTRELGdFQURBO0FBRU5nQixVQUFJLEVBQUV1SCxNQUFNLENBQUN2SDtBQUZQLEtBQUQsQ0FBVDtBQUtILEdBUEQsQ0FPQyxPQUFNMEgsR0FBTixFQUFVO0FBQ1AsVUFBTUQsOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFDNkQsZ0VBREM7QUFFTitCLFdBQUssRUFBRTBHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0g7QUFGZCxLQUFELENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVM4SCxZQUFULENBQXNCWCxNQUF0QixFQUE4QjtBQUMxQixTQUFPViw0Q0FBSyxDQUFDVyxHQUFOLENBQVcsaUJBQWdCRCxNQUFNLElBQUksQ0FBRSxFQUF2QyxDQUFQO0FBQ0g7O0FBQ0QsVUFBVVksU0FBVixDQUFxQjVNLE1BQXJCLEVBQTRCO0FBQ3hCLE1BQUc7QUFDQyxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNNLFlBQUQsRUFBZTNNLE1BQU0sQ0FBQ2dNLE1BQXRCLENBQXpCO0FBQ0EsVUFBTU0sOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFFbUQsaUVBREE7QUFFTnlCLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZIO0FBRlAsS0FBRCxDQUFUO0FBS0gsR0FQRCxDQU9DLE9BQU0wSCxHQUFOLEVBQVU7QUFDUCxVQUFNRCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUNvRCxpRUFEQztBQUVOd0MsV0FBSyxFQUFFMEcsR0FBRyxDQUFDQyxRQUFKLENBQWEzSDtBQUZkLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBQ0QsU0FBU2dJLFVBQVQsQ0FBb0JoSSxJQUFwQixFQUEwQjtBQUN0QixTQUFPeUcsNENBQUssQ0FBQzdLLElBQU4sQ0FBVyxlQUFYLEVBQTRCb0UsSUFBNUIsQ0FBUCxDQURzQixDQUNtQjtBQUM1Qzs7QUFDRCxVQUFVaUksT0FBVixDQUFtQjlNLE1BQW5CLEVBQTBCO0FBRXRCLE1BQUc7QUFDSCxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNRLFVBQUQsRUFBYTdNLE1BQU0sQ0FBQzZFLElBQXBCLENBQXpCO0FBQ0ksVUFBTXlILDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBRWdELCtEQURBO0FBRU40QixVQUFJLEVBQUV1SCxNQUFNLENBQUN2SDtBQUZQLEtBQUQsQ0FBVDtBQUlBMUUsV0FBTyxDQUFDQyxHQUFSLENBQVlnTSxNQUFaO0FBQ0EsVUFBTUUsOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFFc0ssNkRBREE7QUFFTjFGLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZILElBQVAsQ0FBWVc7QUFGWixLQUFELENBQVQ7QUFJSCxHQVhELENBV0MsT0FBTStHLEdBQU4sRUFBVTtBQUNQcE0sV0FBTyxDQUFDMEYsS0FBUixDQUFjMEcsR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQ2lELCtEQURDO0FBRU4yQyxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTa0ksYUFBVCxDQUF1QmxJLElBQXZCLEVBQTZCO0FBQ3pCLFNBQU95Ryw0Q0FBSyxDQUFDMEIsTUFBTixDQUFjLFNBQVFuSSxJQUFLLFNBQTNCLENBQVA7QUFDSDs7QUFDRCxVQUFVb0ksVUFBVixDQUFzQmpOLE1BQXRCLEVBQTZCO0FBQ3pCLE1BQUc7QUFDSCxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNVLGFBQUQsRUFBZ0IvTSxNQUFNLENBQUM2RSxJQUF2QixDQUF6QjtBQUVJLFVBQU15SCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUVrRSxrRUFEQTtBQUVOVSxVQUFJLEVBQUV1SCxNQUFNLENBQUN2SDtBQUZQLEtBQUQsQ0FBVDtBQUlBLFVBQU15SCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUV1SyxnRUFEQTtBQUVOM0YsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFLSCxHQVpELENBWUMsT0FBTTBILEdBQU4sRUFBVTtBQUNQcE0sV0FBTyxDQUFDMEYsS0FBUixDQUFjMEcsR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQ21FLGtFQURDO0FBRU55QixXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTcUksYUFBVCxDQUF1QnJJLElBQXZCLEVBQTZCO0FBQ3pCLFNBQU95Ryw0Q0FBSyxDQUFDN0ssSUFBTixDQUFZLFNBQVFvRSxJQUFJLENBQUNzSSxNQUFPLGFBQWhDLEVBQTZDdEksSUFBN0MsQ0FBUDtBQUNIOztBQUNELFVBQVVHLFVBQVYsQ0FBc0JoRixNQUF0QixFQUE2QjtBQUN6QixNQUFHO0FBQ0gsVUFBTW9NLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDYSxhQUFELEVBQWdCbE4sTUFBTSxDQUFDNkUsSUFBdkIsQ0FBekI7QUFFSSxVQUFNeUgsOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFFK0Qsa0VBREE7QUFFTmEsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFLSCxHQVJELENBUUMsT0FBTTBILEdBQU4sRUFBVTtBQUNQLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQ2dFLGtFQURDO0FBRU5ZLFVBQUksRUFBRTBILEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0g7QUFGYixLQUFELENBQVQ7QUFJSDtBQUNKOztBQUNELFNBQVN1SSxXQUFULENBQXFCdkksSUFBckIsRUFBMkI7QUFDdkIsU0FBT3lHLDRDQUFLLENBQUMrQixLQUFOLENBQWEsU0FBUXhJLElBQUssT0FBMUIsQ0FBUDtBQUNIOztBQUNELFVBQVV5SSxRQUFWLENBQW9CdE4sTUFBcEIsRUFBMkI7QUFDdkIsTUFBRztBQUNILFVBQU1vTSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2UsV0FBRCxFQUFjcE4sTUFBTSxDQUFDNkUsSUFBckIsQ0FBekI7QUFFSSxVQUFNeUgsOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFFMEMsZ0VBREE7QUFFTmtDLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZIO0FBRlAsS0FBRCxDQUFUO0FBS0gsR0FSRCxDQVFDLE9BQU0wSCxHQUFOLEVBQVU7QUFDUHBNLFdBQU8sQ0FBQzBGLEtBQVIsQ0FBYzBHLEdBQWQ7QUFDQSxVQUFNRCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUUyQyxnRUFEQTtBQUVOaUMsVUFBSSxFQUFFMEgsR0FBRyxDQUFDQyxRQUFKLENBQWEzSDtBQUZiLEtBQUQsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzBJLGFBQVQsQ0FBdUIxSSxJQUF2QixFQUE2QjtBQUMzQixTQUFPeUcsNENBQUssQ0FBQzBCLE1BQU4sQ0FBYyxTQUFRbkksSUFBSyxTQUEzQixDQUFQLENBRDJCLENBQ2tCO0FBQzlDOztBQUVELFVBQVUySSxVQUFWLENBQXFCeE4sTUFBckIsRUFBNkI7QUFDM0IsTUFBSTtBQUNGLFVBQU1vTSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ2tCLGFBQUQsRUFBZ0J2TixNQUFNLENBQUM2RSxJQUF2QixDQUF6QjtBQUNBLFVBQU15SCw4REFBRyxDQUFDO0FBQ1JyTSxVQUFJLEVBQUU2QyxrRUFERTtBQUVSK0IsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBTzBILEdBQVAsRUFBWTtBQUNWcE0sV0FBTyxDQUFDMEYsS0FBUixDQUFjMEcsR0FBZDtBQUNGLFVBQU1ELDhEQUFHLENBQUM7QUFDUnJNLFVBQUksRUFBRThDLGtFQURFO0FBRVI4QyxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxTQUFTNEksZUFBVCxDQUF5QjVJLElBQXpCLEVBQStCO0FBQzdCLFNBQU95Ryw0Q0FBSyxDQUFDN0ssSUFBTixDQUFZLGNBQVosRUFBMkJvRSxJQUEzQixDQUFQLENBRDZCLENBQ1k7QUFDMUM7O0FBRUQsVUFBVTZJLFlBQVYsQ0FBdUIxTixNQUF2QixFQUErQjtBQUM3QixNQUFJO0FBQ0YsVUFBTW9NLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDb0IsZUFBRCxFQUFrQnpOLE1BQU0sQ0FBQzZFLElBQXpCLENBQXpCO0FBQ0EsVUFBTXlILDhEQUFHLENBQUM7QUFDUnJNLFVBQUksRUFBRXFFLG9FQURFO0FBRVJPLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZIO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FORCxDQU1FLE9BQU8wSCxHQUFQLEVBQVk7QUFDVnBNLFdBQU8sQ0FBQzBGLEtBQVIsQ0FBYzBHLEdBQWQ7QUFDRixVQUFNRCw4REFBRyxDQUFDO0FBQ1JyTSxVQUFJLEVBQUVzRSxvRUFERTtBQUVSc0IsV0FBSyxFQUFFMEcsR0FBRyxDQUFDQyxRQUFKLENBQWEzSDtBQUZaLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBUzhJLFVBQVQsQ0FBb0I5SSxJQUFwQixFQUEwQjtBQUN4QixTQUFPeUcsNENBQUssQ0FBQzdLLElBQU4sQ0FBWSxTQUFRb0UsSUFBSyxVQUF6QixFQUFtQ0EsSUFBbkMsQ0FBUCxDQUR3QixDQUN5QjtBQUNsRDs7QUFFRCxVQUFVK0ksT0FBVixDQUFrQjVOLE1BQWxCLEVBQTBCO0FBQ3hCLE1BQUk7QUFDRixVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNzQixVQUFELEVBQWEzTixNQUFNLENBQUM2RSxJQUFwQixDQUF6QjtBQUNBLFVBQU15SCw4REFBRyxDQUFDO0FBQ1JyTSxVQUFJLEVBQUV3RSw4REFERTtBQUVSSSxVQUFJLEVBQUV1SCxNQUFNLENBQUN2SDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPMEgsR0FBUCxFQUFZO0FBQ1ZwTSxXQUFPLENBQUMwRixLQUFSLENBQWMwRyxHQUFkO0FBQ0YsVUFBTUQsOERBQUcsQ0FBQztBQUNSck0sVUFBSSxFQUFFeUUsOERBREU7QUFFUm1CLFdBQUssRUFBRTBHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0g7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUdELFVBQVVnSixxQkFBVixHQUFrQztBQUNoQyxRQUFNQyxtRUFBUSxDQUFDLElBQUQsRUFBT3JLLHlFQUFQLEVBQW1DMEksZ0JBQW5DLENBQWQ7QUFDRDs7QUFDRCxVQUFVNEIsYUFBVixHQUEwQjtBQUN4QixRQUFNRCxtRUFBUSxDQUFDLElBQUQsRUFBT2xLLGdFQUFQLEVBQTBCOEksUUFBMUIsQ0FBZDtBQUNEOztBQUNELFVBQVVzQixjQUFWLEdBQTJCO0FBQ3pCLFFBQU1GLG1FQUFRLENBQUMsSUFBRCxFQUFPM0ssaUVBQVAsRUFBMkJ5SixTQUEzQixDQUFkO0FBQ0Q7O0FBQ0QsVUFBVXFCLFlBQVYsR0FBeUI7QUFDdkIsUUFBTUMscUVBQVUsQ0FBQ2xMLCtEQUFELEVBQW1COEosT0FBbkIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVcUIsZUFBVixHQUE0QjtBQUMxQixRQUFNRCxxRUFBVSxDQUFDaEssa0VBQUQsRUFBc0IrSSxVQUF0QixDQUFoQjtBQUNEOztBQUNELFVBQVVtQixlQUFWLEdBQTRCO0FBQzFCLFFBQU1GLHFFQUFVLENBQUNuSyxrRUFBRCxFQUFzQmlCLFVBQXRCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVXFKLGFBQVYsR0FBMEI7QUFDeEIsUUFBTUgscUVBQVUsQ0FBQ3hMLGdFQUFELEVBQW9CNEssUUFBcEIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVZ0IsZUFBVixHQUE0QjtBQUMxQixRQUFNSixxRUFBVSxDQUFDckwsa0VBQUQsRUFBc0IySyxVQUF0QixDQUFoQjtBQUNEOztBQUNELFVBQVVlLGlCQUFWLEdBQThCO0FBQzVCLFFBQU1MLHFFQUFVLENBQUM3SixvRUFBRCxFQUF3QnFKLFlBQXhCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVWMsWUFBVixHQUF5QjtBQUN2QixRQUFNTixxRUFBVSxDQUFDMUosOERBQUQsRUFBa0JvSixPQUFsQixDQUFoQjtBQUNEOztBQUVjLFVBQVU5QixRQUFWLEdBQW9CO0FBQy9CLFFBQU1ILDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2lDLHFCQUFELENBREUsRUFFTmpDLCtEQUFJLENBQUNtQyxhQUFELENBRkUsRUFHTm5DLCtEQUFJLENBQUNvQyxjQUFELENBSEUsRUFJTnBDLCtEQUFJLENBQUNxQyxZQUFELENBSkUsRUFLTnJDLCtEQUFJLENBQUN1QyxlQUFELENBTEUsRUFNTnZDLCtEQUFJLENBQUN3QyxlQUFELENBTkUsRUFPTnhDLCtEQUFJLENBQUN5QyxhQUFELENBUEUsRUFRTnpDLCtEQUFJLENBQUMwQyxlQUFELENBUkUsRUFTTjFDLCtEQUFJLENBQUMyQyxpQkFBRCxDQVRFLEVBVU4zQywrREFBSSxDQUFDNEMsWUFBRCxDQVZFLENBQUQsQ0FBVDtBQVlILEM7Ozs7Ozs7Ozs7OztBQ3BRRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMEI1SixJQUExQixFQUErQm1ILE1BQS9CLEVBQXNDO0FBQ2xDLFNBQU9WLDRDQUFLLENBQUNXLEdBQU4sQ0FBVyxTQUFRcEgsSUFBSyxpQkFBZ0JtSCxNQUFNLElBQUksQ0FBRSxFQUFwRCxDQUFQO0FBQ0g7O0FBQ0QsVUFBVTBDLGFBQVYsQ0FBd0IxTyxNQUF4QixFQUFnQztBQUM1QixNQUFHO0FBQ0gsVUFBTW9NLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDb0MsZ0JBQUQsRUFBbUJ6TyxNQUFNLENBQUM2RSxJQUExQixFQUFnQzdFLE1BQU0sQ0FBQ2dNLE1BQXZDLENBQXpCO0FBQ0ksVUFBTU0sOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFFc0Qsc0VBREE7QUFFTnNCLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZIO0FBRlAsS0FBRCxDQUFUO0FBS0gsR0FQRCxDQU9DLE9BQU0wSCxHQUFOLEVBQVU7QUFDUHBNLFdBQU8sQ0FBQzBGLEtBQVIsQ0FBYzBHLEdBQWQ7QUFDQSxVQUFNRCw4REFBRyxDQUFFO0FBQ1ByTSxVQUFJLEVBQUV1RCxzRUFEQztBQUVQcUMsV0FBSyxFQUFFMEcsR0FBRyxDQUFDQyxRQUFKLENBQWEzSDtBQUZiLEtBQUYsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBUzhKLGFBQVQsR0FBd0I7QUFDcEIsU0FBT3JELDRDQUFLLENBQUNXLEdBQU4sQ0FBVSxhQUFWLENBQVA7QUFDSDs7QUFDRCxVQUFVMkMsVUFBVixHQUF1QjtBQUNuQixNQUFHO0FBQ0gsVUFBTXhDLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDc0MsYUFBRCxDQUF6QjtBQUNJLFVBQU1yQyw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUV3SSxtRUFEQTtBQUVONUQsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFLSCxHQVBELENBT0MsT0FBTTBILEdBQU4sRUFBVTtBQUNQcE0sV0FBTyxDQUFDMEYsS0FBUixDQUFjMEcsR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUU7QUFDUHJNLFVBQUksRUFBRXlJLG1FQURDO0FBRVA3QyxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmIsS0FBRixDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTZ0ssV0FBVCxDQUFxQmhLLElBQXJCLEVBQTBCO0FBQ3RCLFNBQU95Ryw0Q0FBSyxDQUFDVyxHQUFOLENBQVcsU0FBUXBILElBQUssRUFBeEIsQ0FBUDtBQUNIOztBQUNELFVBQVVpSyxRQUFWLENBQW1COU8sTUFBbkIsRUFBMkI7QUFDdkIsTUFBRztBQUNILFVBQU1vTSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3dDLFdBQUQsRUFBYzdPLE1BQU0sQ0FBQzZFLElBQXJCLENBQXpCO0FBQ0ksVUFBTXlILDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBRXFJLGdFQURBO0FBRU56RCxVQUFJLEVBQUV1SCxNQUFNLENBQUN2SDtBQUZQLEtBQUQsQ0FBVDtBQUtILEdBUEQsQ0FPQyxPQUFNMEgsR0FBTixFQUFVO0FBQ1BwTSxXQUFPLENBQUMwRixLQUFSLENBQWMwRyxHQUFkO0FBQ0EsVUFBTUQsOERBQUcsQ0FBRTtBQUNQck0sVUFBSSxFQUFFc0ksZ0VBREM7QUFFUDFDLFdBQUssRUFBRTBHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0g7QUFGYixLQUFGLENBQVQ7QUFJSDtBQUNKOztBQUVELFNBQVNrSyxTQUFULENBQW1CbEssSUFBbkIsRUFBd0I7QUFDcEIsU0FBT3lHLDRDQUFLLENBQUM3SyxJQUFOLENBQVcsY0FBWCxFQUEwQm9FLElBQTFCLENBQVA7QUFDSDs7QUFDRCxVQUFVbUssTUFBVixDQUFpQmhQLE1BQWpCLEVBQXlCO0FBQ3JCLE1BQUc7QUFDSCxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUMwQyxTQUFELEVBQVkvTyxNQUFNLENBQUM2RSxJQUFuQixDQUF6QjtBQUNJLFVBQU15SCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUVnSyw4REFEQTtBQUVOcEYsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFLSCxHQVBELENBT0MsT0FBTTBILEdBQU4sRUFBVTtBQUNQcE0sV0FBTyxDQUFDMEYsS0FBUixDQUFjMEcsR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUU7QUFDUHJNLFVBQUksRUFBRWlLLDhEQURDO0FBRVByRSxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmIsS0FBRixDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTb0ssUUFBVCxDQUFrQnBLLElBQWxCLEVBQXVCO0FBQ25CLFNBQU95Ryw0Q0FBSyxDQUFDN0ssSUFBTixDQUFXLGFBQVgsRUFBMEJvRSxJQUExQixDQUFQO0FBQ0g7O0FBQ0QsVUFBVXFLLEtBQVYsQ0FBZ0JsUCxNQUFoQixFQUF3QjtBQUNwQixNQUFHO0FBQ0gsVUFBTW9NLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDNEMsUUFBRCxFQUFXalAsTUFBTSxDQUFDNkUsSUFBbEIsQ0FBekI7QUFDSSxVQUFNeUgsOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFFMEosNkRBREE7QUFFTjlFLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZIO0FBRlAsS0FBRCxDQUFUO0FBS0gsR0FQRCxDQU9DLE9BQU0wSCxHQUFOLEVBQVU7QUFDUHBNLFdBQU8sQ0FBQzBGLEtBQVIsQ0FBYzBHLEdBQWQ7QUFDQSxVQUFNRCw4REFBRyxDQUFFO0FBQ1ByTSxVQUFJLEVBQUUySiw2REFEQztBQUVQL0QsV0FBSyxFQUFFMEcsR0FBRyxDQUFDQyxRQUFKLENBQWEzSDtBQUZiLEtBQUYsQ0FBVDtBQUlIO0FBQ0o7O0FBRUQsU0FBU3NLLFNBQVQsR0FBcUI7QUFDYixTQUFPN0QsNENBQUssQ0FBQzdLLElBQU4sQ0FBVyxjQUFYLENBQVA7QUFFUDs7QUFDRCxVQUFVMk8sTUFBVixHQUFrQjtBQUNkLE1BQUc7QUFDQyxVQUFNL0MsK0RBQUksQ0FBQzhDLFNBQUQsQ0FBVjtBQUNBLFVBQU03Qyw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUM2Siw4REFBZUE7QUFEZCxLQUFELENBQVQ7QUFHSCxHQUxELENBS0MsT0FBTXlDLEdBQU4sRUFBVTtBQUNQcE0sV0FBTyxDQUFDMEYsS0FBUixDQUFjMEcsR0FBZDtBQUVBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQzhKLDhEQURDO0FBRU5sRSxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTd0ssaUJBQVQsQ0FBMkJ4SyxJQUEzQixFQUFnQztBQUM1QixTQUFPeUcsNENBQUssQ0FBQytCLEtBQU4sQ0FBWSxnQkFBWixFQUE4QjtBQUFDakMsWUFBUSxFQUFFdkc7QUFBWCxHQUE5QixDQUFQO0FBQ0g7O0FBQ0QsVUFBVXlLLGNBQVYsQ0FBeUJ0UCxNQUF6QixFQUFnQztBQUM1QixNQUFHO0FBQ0gsVUFBTW9NLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDZ0QsaUJBQUQsRUFBb0JyUCxNQUFNLENBQUM2RSxJQUEzQixDQUF6QjtBQUNJLFVBQU15SCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUVvSyxzRUFEQTtBQUVOeEYsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUMsT0FBTTBILEdBQU4sRUFBVTtBQUNQcE0sV0FBTyxDQUFDMEYsS0FBUixDQUFjMEcsR0FBZDtBQUNBLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBRXFLLHNFQURBO0FBRU56RSxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmQsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTMEssU0FBVCxDQUFtQjFLLElBQW5CLEVBQXlCO0FBQ3JCLFNBQU95Ryw0Q0FBSyxDQUFDK0IsS0FBTixDQUFhLFNBQVF4SSxJQUFLLFNBQTFCLENBQVA7QUFDSDs7QUFDRCxVQUFVMkssTUFBVixDQUFrQnhQLE1BQWxCLEVBQXlCO0FBQ3JCLE1BQUc7QUFDSCxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNrRCxTQUFELEVBQVl2UCxNQUFNLENBQUM2RSxJQUFuQixDQUF6QjtBQUNJLFVBQU15SCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUMySSw2REFEQztBQUVOL0QsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUMsT0FBTTBILEdBQU4sRUFBVTtBQUNQLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQzRJLDZEQURDO0FBRU5oRCxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmQsS0FBRCxDQUFUO0FBS0g7QUFDSjs7QUFFRCxTQUFTNEssV0FBVCxDQUFxQjVLLElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU95Ryw0Q0FBSyxDQUFDMEIsTUFBTixDQUFjLFNBQVFuSSxJQUFLLFdBQTNCLENBQVA7QUFDSDs7QUFDRCxVQUFVNkssUUFBVixDQUFvQjFQLE1BQXBCLEVBQTJCO0FBQ3ZCLE1BQUc7QUFDSCxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNvRCxXQUFELEVBQWN6UCxNQUFNLENBQUM2RSxJQUFyQixDQUF6QjtBQUNJLFVBQU15SCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUM4SSwrREFEQztBQUVObEUsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUMsT0FBTTBILEdBQU4sRUFBVTtBQUNQLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQytJLCtEQURDO0FBRU5uRCxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmQsS0FBRCxDQUFUO0FBS0g7QUFDSjs7QUFFRCxTQUFTOEssZ0JBQVQsQ0FBMEI5SyxJQUExQixFQUFnQztBQUM1QixTQUFPeUcsNENBQUssQ0FBQ1csR0FBTixDQUFXLGlCQUFYLENBQVA7QUFDSDs7QUFDRCxVQUFVMkQsYUFBVixDQUF5QjVQLE1BQXpCLEVBQWdDO0FBQzVCLE1BQUc7QUFDSCxVQUFNb00sTUFBTSxHQUFHLE1BQU1DLCtEQUFJLENBQUNzRCxnQkFBRCxFQUFtQjNQLE1BQU0sQ0FBQzZFLElBQTFCLENBQXpCO0FBQ0ksVUFBTXlILDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQ29KLHFFQURDO0FBRU54RSxVQUFJLEVBQUV1SCxNQUFNLENBQUN2SDtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNQyxPQUFNMEgsR0FBTixFQUFVO0FBQ1AsVUFBTUQsOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFDcUoscUVBREM7QUFFTnpELFdBQUssRUFBRTBHLEdBQUcsQ0FBQ0MsUUFBSixDQUFhM0g7QUFGZCxLQUFELENBQVQ7QUFLSDtBQUNKOztBQUVELFNBQVNnTCxpQkFBVCxDQUEyQmhMLElBQTNCLEVBQWlDO0FBQzdCLFNBQU95Ryw0Q0FBSyxDQUFDVyxHQUFOLENBQVcsa0JBQVgsQ0FBUDtBQUNIOztBQUNELFVBQVU2RCxjQUFWLENBQTBCOVAsTUFBMUIsRUFBaUM7QUFDN0IsTUFBRztBQUNILFVBQU1vTSxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ3dELGlCQUFELEVBQW9CN1AsTUFBTSxDQUFDNkUsSUFBM0IsQ0FBekI7QUFDSSxVQUFNeUgsOERBQUcsQ0FBQztBQUNOck0sVUFBSSxFQUFDdUosc0VBREM7QUFFTjNFLFVBQUksRUFBRXVILE1BQU0sQ0FBQ3ZIO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1DLE9BQU0wSCxHQUFOLEVBQVU7QUFDUCxVQUFNRCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUN3SixzRUFEQztBQUVONUQsV0FBSyxFQUFFMEcsR0FBRyxDQUFDQyxRQUFKLENBQWEzSDtBQUZkLEtBQUQsQ0FBVDtBQUtIO0FBQ0o7O0FBRUQsU0FBU2tMLGlCQUFULENBQTJCbEwsSUFBM0IsRUFBaUM7QUFDN0IsU0FBT3lHLDRDQUFLLENBQUMwQixNQUFOLENBQWMsa0JBQWlCbkksSUFBSyxFQUFwQyxDQUFQO0FBQ0g7O0FBQ0QsVUFBVW1MLGNBQVYsQ0FBMEJoUSxNQUExQixFQUFpQztBQUM3QixNQUFHO0FBQ0gsVUFBTW9NLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDMEQsaUJBQUQsRUFBb0IvUCxNQUFNLENBQUM2RSxJQUEzQixDQUF6QjtBQUNJLFVBQU15SCw4REFBRyxDQUFDO0FBQ05yTSxVQUFJLEVBQUNpSixzRUFEQztBQUVOckUsVUFBSSxFQUFFdUgsTUFBTSxDQUFDdkg7QUFGUCxLQUFELENBQVQ7QUFJSCxHQU5ELENBTUMsT0FBTTBILEdBQU4sRUFBVTtBQUNQLFVBQU1ELDhEQUFHLENBQUM7QUFDTnJNLFVBQUksRUFBQ2tKLHNFQURDO0FBRU50RCxXQUFLLEVBQUUwRyxHQUFHLENBQUNDLFFBQUosQ0FBYTNIO0FBRmQsS0FBRCxDQUFUO0FBS0g7QUFDSjs7QUFJRCxVQUFVb0wsbUJBQVYsR0FBZ0M7QUFDOUIsUUFBTS9CLHFFQUFVLENBQUM5RCxzRUFBRCxFQUEwQmtGLGNBQTFCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVVksZUFBVixHQUE0QjtBQUMxQixRQUFNaEMscUVBQVUsQ0FBQzFGLG1FQUFELEVBQXVCb0csVUFBdkIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVdUIsYUFBVixHQUEwQjtBQUN4QixRQUFNakMscUVBQVUsQ0FBQzdGLGdFQUFELEVBQW9CeUcsUUFBcEIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVc0Isa0JBQVYsR0FBK0I7QUFDN0IsUUFBTWxDLHFFQUFVLENBQUM1SyxzRUFBRCxFQUEwQm9MLGFBQTFCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVTJCLFVBQVYsR0FBdUI7QUFDckIsUUFBTW5DLHFFQUFVLENBQUN4RSw2REFBRCxFQUFpQndGLEtBQWpCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVW9CLFdBQVYsR0FBd0I7QUFDdEIsUUFBTXBDLHFFQUFVLENBQUNyRSw4REFBRCxFQUFrQnVGLE1BQWxCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVW1CLFdBQVYsR0FBd0I7QUFDdEIsUUFBTXJDLHFFQUFVLENBQUNsRSw4REFBRCxFQUFrQmdGLE1BQWxCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVXdCLFdBQVYsR0FBd0I7QUFDdEIsUUFBTXRDLHFFQUFVLENBQUN2Riw2REFBRCxFQUFpQjZHLE1BQWpCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVWlCLGFBQVYsR0FBMEI7QUFDeEIsUUFBTXZDLHFFQUFVLENBQUNwRiwrREFBRCxFQUFtQjRHLFFBQW5CLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVWdCLGtCQUFWLEdBQStCO0FBQzdCLFFBQU14QyxxRUFBVSxDQUFDOUUscUVBQUQsRUFBeUJ3RyxhQUF6QixDQUFoQjtBQUNEOztBQUNELFVBQVVlLG1CQUFWLEdBQWdDO0FBQzlCLFFBQU16QyxxRUFBVSxDQUFDM0Usc0VBQUQsRUFBMEJ1RyxjQUExQixDQUFoQjtBQUNEOztBQUNELFVBQVVjLG1CQUFWLEdBQWdDO0FBQzlCLFFBQU0xQyxxRUFBVSxDQUFDakYsc0VBQUQsRUFBMEIrRyxjQUExQixDQUFoQjtBQUNEOztBQUVjLFVBQVVuRSxRQUFWLEdBQW9CO0FBQy9CLFFBQU1GLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ3FFLG1CQUFELENBREUsRUFFTnJFLCtEQUFJLENBQUNzRSxlQUFELENBRkUsRUFHTnRFLCtEQUFJLENBQUN1RSxhQUFELENBSEUsRUFJTnZFLCtEQUFJLENBQUN3RSxrQkFBRCxDQUpFLEVBS054RSwrREFBSSxDQUFDMkUsV0FBRCxDQUxFLEVBTU4zRSwrREFBSSxDQUFDNEUsV0FBRCxDQU5FLEVBT041RSwrREFBSSxDQUFDOEUsa0JBQUQsQ0FQRSxFQVFOOUUsK0RBQUksQ0FBQytFLG1CQUFELENBUkUsRUFTTi9FLCtEQUFJLENBQUM2RSxhQUFELENBVEUsRUFVTjdFLCtEQUFJLENBQUN5RSxVQUFELENBVkUsRUFXTnpFLCtEQUFJLENBQUMwRSxXQUFELENBWEUsRUFZTjFFLCtEQUFJLENBQUNnRixtQkFBRCxDQVpFLENBQUQsQ0FBVDtBQWNILEM7Ozs7Ozs7Ozs7OztBQ3JTRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUE2QkMsSUFBRCxJQUFXaFIsTUFBRCxJQUFZO0FBQ3pFRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBLFNBQU9nUixJQUFJLENBQUNoUixNQUFELENBQVg7QUFDRCxDQUhEOztBQUlBLE1BQU1pUixjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELEVBQWlCTCxnQkFBakIsQ0FBcEI7QUFDQSxRQUFNUSxRQUFRLEdBQUcsUUFDYkMsU0FEYSxHQUViQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnZCO0FBSUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDek0saURBQUQsRUFBVW9NLFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUJsRyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPK0YsS0FBUDtBQUNELENBVkQ7O0FBWUEsTUFBTTdSLE9BQU8sR0FBR2lTLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDNUNhLE9BQUs7QUFEdUMsQ0FBakIsQ0FBN0I7QUFJZWxTLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICAgIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbiAgICBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG4gICAgaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcclxuICAgIGltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xyXG4gIFxyXG4gICAgY29uc3QgTm9kZUJpcmQgPSAoe0NvbXBvbmVudH0pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT7tirjsnITthLA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIE5vZGVCaXJkLnByb3B0eXBlcyA9IHtcclxuICAgICAgICBDb21wb25lbnQgOlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG4gICAgIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgICAgICBwb3N0LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lUmVkdWNlcihzdGF0ZSxhY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlciIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOltdLFxyXG4gICAgc2luZ2xlUG9zdDogbnVsbCxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsaWtlUG9zdExvYWRpbmcgOmZhbHNlLFxyXG4gICAgbGlrZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yIDogbnVsbCxcclxuXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RzTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lIDogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvciA6IG51bGwsXHJcblxyXG4gICByZXR3ZWV0TG9hZGluZyA6IGZhbHNlLFxyXG4gICByZXR3ZWV0RG9uZSA6IGZhbHNlLFxyXG4gICByZXR3ZWV0RXJyb3IgOiBudWxsLFxyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT5cclxuLy8gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbi8vICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIEltYWdlczogW3tcclxuLy8gICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKClcclxuLy8gICAgIH1dLFxyXG4vLyAgICAgQ29tbWVudHM6W3tcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbi8vICAgICB9XVxyXG4gICAgXHJcbi8vIH0pKVxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgICAgVXNlcjp7XHJcbi8vICAgICAgICAgaWQ6MSxcclxuLy8gICAgICAgICBuaWNrbmFtZTon7IKs7Jqp7J6QMidcclxuLy8gICAgIH0sXHJcbi8vICAgICBJbWFnZXM6IFt7c3JjOlwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMS8wMS8yNC8yMC80Ny9tb3VudGFpbnMtNTk0NjUwMF8xMjgwLmpwZ1wifSxdLFxyXG4vLyAgICAgQ29tbWVudHM6IFsn64yT6riA7YWM7Iqk7Yq4J10sXHJcbi8vIH0pXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIC4uLmRhdGEsXHJcbi8vIH0pXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9ICBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFIDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodixpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLlVzZXJJZH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7ICBcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkVXNlckxvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRNeUluZm9Mb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcblxyXG4gICAgc2lnblVwTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dJbkxvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG5cclxuICAgIGZvbGxvd0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5mb2xsb3dMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIFxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmcgOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZUZvbGxvd2VyTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcblxyXG4gICAgY2hhbmdlTmlja05hbWVMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrTmFtZUVycm9yIDogbnVsbCxcclxuICAgIGNoYW5nZU5pY2tOYW1lRG9uZSA6IGZhbHNlLFxyXG4gICAgbWU6IG51bGwsXHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxufVxyXG4gICAgLy8gY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAvLyAgICAgLi4uZGF0YSxcclxuICAgIC8vICAgICBuaWNrbmFtZTon64uJ64Sk7J6EJyxcclxuICAgIC8vICAgICBpZDoxLFxyXG4gICAgLy8gICAgIFBvc3RzOlt7aWQ6IDF9XSxcclxuICAgIC8vICAgICBGb2xsb3dpbmdzOlt7bmlja25hbWU6J+u2gOq4sCd9LHtuaWNrbmFtZTon67aA6riwMid9LHtuaWNrbmFtZTon67aA6riwMyd9XSxcclxuICAgIC8vICAgICBGb2xsb3dlcnM6W3tuaWNrbmFtZTogJ2tpbmcnfSwge25pY2tuYW1lOiAna2luZzEnfV1cclxuXHJcbiAgICAvLyB9KVxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVNFVCA9ICdTSUdOX1VQX1JFU0VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIGRhdGEsXHJcbn0pIFxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgIGRhdGEsXHJcbn0pIFxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVNFVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja05hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tOYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrTmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDogYWN0aW9uLmRhdGEuaWR9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsIGZvcmssIHRha2UsIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0J1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwgKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBkZWxheSwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgZ2VuZXJhdGVEdW1teVBvc3QsIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkUsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FwaShkYXRhLGxhc3RJZCkgeyAvL2hhc2h0YWcvbmFtZVxyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdsb2FkSGFzaHRhZycpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQXBpLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCApXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0IChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBcGksIGFjdGlvbi5kYXRhIClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQXBpKGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApXHJcbn1cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FwaSwgYWN0aW9uLmxhc3RJZCApXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRQb3N0QXBpKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9hZGRwb3N0JywgZGF0YSkgLy9mb3JtRGF0YeuKlCDrsJTroZwgZGF0YeuhnCDsoJXsnZhcclxufVxyXG5mdW5jdGlvbiogYWRkUG9zdCAoYWN0aW9uKXtcclxuXHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBcGksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZFxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9yZW1vdmVgKVxyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0IChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QXBpLCBhY3Rpb24uZGF0YSlcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2FkZGNvbW1lbnRgLGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBcGksIGFjdGlvbi5kYXRhKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBsaWtlUG9zdEFwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApXHJcbn1cclxuZnVuY3Rpb24qIGxpa2VQb3N0IChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFwaSwgYWN0aW9uLmRhdGEpXHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS91bmxpa2VgKTsgLy9wYXRjaCDqsozsi5zquIDsnZgg7J2867aA67aE7J2EIOyImOyglVxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvaW1hZ2VzYCwgZGF0YSk7IC8vcGF0Y2gg6rKM7Iuc6riA7J2YIOydvOu2gOu2hOydhCDsiJjsoJVcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGAsZGF0YSk7IC8vcGF0Y2gg6rKM7Iuc6riA7J2YIOydvOu2gOu2hOydhCDsiJjsoJVcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSgyMDAwLCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7YWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLCBGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsIExPQURfTVlfSU5GT19GQUlMVVJFLCBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsIExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FwaShkYXRhLGxhc3RJZCl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAgIFxyXG59ICAgXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQXBpLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FwaSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvbG9naW4nKTtcclxufSAgIFxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FwaSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn0gICBcclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG4gICAgICAgIHlpZWxkIHB1dCAoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ251cEFwaShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9zaWduVXAnLGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ251cEFwaSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQgKHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QXBpKCkge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxuXHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dCgpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QXBpKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX09VVF9TVUNDRVNTXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja05hbWVBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSlcclxufVxyXG5mdW5jdGlvbiogY2hhbmdlTmlja05hbWUoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja05hbWVBcGksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YClcclxufVxyXG5mdW5jdGlvbiogZm9sbG93IChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBcGksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Rk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Rk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L3VuZm9sbG93YClcclxufVxyXG5mdW5jdGlvbiogdW5mb2xsb3cgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QXBpLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRmb2xsb3dlcnNBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93ZXJzYClcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2VycyAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZGZvbGxvd2Vyc0FwaSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkZm9sbG93aW5nc0FwaShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci9mb2xsb3dpbmdzYClcclxufVxyXG5mdW5jdGlvbiogbG9hZGZvbGxvd2luZ3MgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRmb2xsb3dpbmdzQXBpLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlZm9sbG93ZXJBcGkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApXHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZWZvbGxvd2VyIChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVmb2xsb3dlckFwaSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja05hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNobG9hZFVzZXIoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaGxvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ251cCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRmb2xsb3dlcnMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRmb2xsb3dpbmdzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVmb2xsb3dlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hsb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNobG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hsb2FkVXNlclBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgIF0pXHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGVsd2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGVsd2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9