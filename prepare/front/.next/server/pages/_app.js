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
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\gmleh\\Desktop\\react-nodebird-self\\prepare\\front\\pages\\_app.js";









const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, undefined)]
  }, void 0, true);
};

NodeBird.proptypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird)));

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('hydrate', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, addPostRequestAction, addPostSuccessAction, addPostFailureAction, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
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
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));

const dummyPost = data => ({
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
});

const dummyComment = data => _objectSpread({
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate()
}, data);

const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
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

      case LOAD_POSTS_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.err;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.postId);
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
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_RESET, REMOVE_POST_OF_ME, loginRequestAction, loginSuccessAction, loginFailureAction, logoutRequestAction, logoutSuccessAction, logoutFailureAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
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
  me: null
}; // const dummyUser = (data) => ({
//     ...data,
//     nickname:'닉네임',
//     id:1,
//     Posts:[{id: 1}],
//     Followings:[{nickname:'부기'},{nickname:'부기2'},{nickname:'부기3'}],
//     Followers:[{nickname: 'king'}, {nickname: 'king1'}]
// })

const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
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
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data
        });
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
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
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

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
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






function loadPostsApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/loadPost', data);
}

function* loadPosts(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/addpost', data);
}

function* addPost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/addcomment', data);
}

function* removePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/addcomment', data);
}

function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
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

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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




function signupApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/signUp', data);
}

function* signup(action) {
  const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signupApi, action.data);

  try {
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
  const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInApi, action.data);

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
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
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"]
    });
  }
}

function followApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/follow');
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"]
    });
  }
}

function unfollowApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/unfollow');
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"]
    });
  }
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

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut)]);
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

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3B0eXBlcyIsIlByb3B0eXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiY29udGVudCIsImZha2VyIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJVc2VyIiwibmlja25hbWUiLCJuYW1lIiwiZmluZE5hbWUiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJkdW1teVBvc3QiLCJkYXRhIiwiZHVtbXlDb21tZW50IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdFJlcXVlc3RBY3Rpb24iLCJhZGRQb3N0U3VjY2Vzc0FjdGlvbiIsImFkZFBvc3RGYWlsdXJlQWN0aW9uIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyIiwiY29uY2F0IiwibGVuZ3RoIiwiZmluZCIsInYiLCJwb3N0SWQiLCJmaWx0ZXIiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibWUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX1JFU0VUIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibG9nb3V0U3VjY2Vzc0FjdGlvbiIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJGb2xsb3dpbmdzIiwicHVzaCIsImVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsInBvc3RTYWdhIiwibG9hZFBvc3RzQXBpIiwiZ2V0IiwibG9hZFBvc3RzIiwiZGVsYXkiLCJwdXQiLCJyZXNwb25zZSIsImFkZFBvc3RBcGkiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdEFwaSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50QXBpIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJzaWdudXBBcGkiLCJzaWdudXAiLCJyZXN1bHQiLCJjYWxsIiwibG9nSW5BcGkiLCJsb2dJbiIsImxvZ091dEFwaSIsImxvZ091dCIsImZvbGxvd0FwaSIsImZvbGxvdyIsInVuZm9sbG93QXBpIiwidW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGVsd2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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dUwsd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUM1Q2EsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUlleEwsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIiAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4gICAgaW1wb3J0IFByb3B0eXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuICAgIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbiAgICBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG4gICAgaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnXHJcbiAgICBpbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnXHJcbiAgICBjb25zdCBOb2RlQmlyZCA9ICh7Q29tcG9uZW50fSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBOb2RlQmlyZC5wcm9wdHlwZXMgPSB7XHJcbiAgICAgICAgQ29tcG9uZW50IDpQcm9wdHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoTm9kZUJpcmQpKTtcclxuICAgICIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGU9e30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2h5ZHJhdGUnLCBhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICByZXR1cm57Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlciIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJ1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJ1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOltdLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICAgIGxvYWRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+XHJcbkFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV1cclxuICAgIFxyXG59KSlcclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J+yCrOyaqeyekDInXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbe3NyYzpcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjEvMDEvMjQvMjAvNDcvbW91bnRhaW5zLTU5NDY1MDBfMTI4MC5qcGdcIn0sXSxcclxuICAgIENvbW1lbnRzOiBbJ+uMk+q4gO2FjOyKpO2KuCddLFxyXG59KVxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAuLi5kYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgZGF0YVxyXG59KVxyXG5leHBvcnQgY29uc3QgYWRkUG9zdEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSAgaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcblxyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgc2lnblVwTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgIGxvZ0luTG9hZGluZyA6IGZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBmb2xsb3dMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nIDogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG59XHJcbiAgICAvLyBjb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC8vICAgICAuLi5kYXRhLFxyXG4gICAgLy8gICAgIG5pY2tuYW1lOifri4nrhKTsnoQnLFxyXG4gICAgLy8gICAgIGlkOjEsXHJcbiAgICAvLyAgICAgUG9zdHM6W3tpZDogMX1dLFxyXG4gICAgLy8gICAgIEZvbGxvd2luZ3M6W3tuaWNrbmFtZTon67aA6riwJ30se25pY2tuYW1lOifrtoDquLAyJ30se25pY2tuYW1lOifrtoDquLAzJ31dLFxyXG4gICAgLy8gICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lOiAna2luZyd9LCB7bmlja25hbWU6ICdraW5nMSd9XVxyXG5cclxuICAgIC8vIH0pXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVNFVCA9ICdTSUdOX1VQX1JFU0VUJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgZGF0YSxcclxufSkgXHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgZGF0YSxcclxufSkgXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRGYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFU0VUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSBcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQge2FsbCwgZm9yaywgdGFrZSwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIGRlbGF5fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsIChbXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHthbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXksIHRocm90dGxlIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIGdlbmVyYXRlRHVtbXlQb3N0LCBMT0FEX1BPU1RTX0ZBSUxVUkUsIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBSRU1PVkVfUE9TVF9GQUlMVVJFLCBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnXHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FwaSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJ2FwaS9sb2FkUG9zdCcsZGF0YSlcclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3RzIChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVEdW1teVBvc3QoMTApXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkUG9zdEFwaSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJ2FwaS9hZGRwb3N0JyxkYXRhKVxyXG59XHJcbmZ1bmN0aW9uKiBhZGRQb3N0IChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QXBpKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnYXBpL2FkZGNvbW1lbnQnLGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRDb21tZW50QXBpKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnYXBpL2FkZGNvbW1lbnQnLGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7YWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEZPTExPV19GQUlMVVJFLCBGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5mdW5jdGlvbiBzaWdudXBBcGkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvc2lnblVwJyxkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogc2lnbnVwKGFjdGlvbikge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWdudXBBcGksIGFjdGlvbi5kYXRhKTtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgeWllbGQgcHV0ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQXBpKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJyxkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQXBpLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0ICh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QXBpKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpXHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dCAoKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ091dEFwaSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19PVVRfU1VDQ0VTU1xyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19PVVRfRkFJTFVSRVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FwaSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJ2FwaS9mb2xsb3cnKVxyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3cgKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkZPTExPV19GQUlMVVJFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBcGkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCdhcGkvdW5mb2xsb3cnKVxyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfRkFJTFVSRVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnbnVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIF0pXHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGVsd2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGVsd2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==