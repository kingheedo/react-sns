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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1zst":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__("aPCy");

// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/LoginForm.js









const FormLabel = external_styled_components_default()(external_react_bootstrap_["Form"].Label).withConfig({
  displayName: "LoginForm__FormLabel",
  componentId: "sc-k4bay5-0"
})(["padding:10px;"]);

const LoginForm = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [email, onChangeEmail] = Object(useInput["a" /* default */])('');
  const [password, onChangePassword] = Object(useInput["a" /* default */])('');
  const {
    logInLoading,
    logInError
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  Object(external_react_["useEffect"])(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  const onSubmitHandler = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch(Object(user["Q" /* loginRequestAction */])({
      email,
      password
    }));
  }, [email, password]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"], {
      onSubmit: onSubmitHandler,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
        as: external_react_bootstrap_["Row"],
        controlId: "formHorizontalEmail",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FormLabel, {
          column: true,
          sm: 2,
          children: "Email"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          sm: 10,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
            style: {
              marginLeft: '10px'
            },
            type: "email",
            placeholder: "Email",
            value: email,
            onChange: onChangeEmail,
            required: true
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
        as: external_react_bootstrap_["Row"],
        controlId: "formHorizontalPassword",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FormLabel, {
          column: true,
          sm: 2,
          children: "Password"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
          sm: 10,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
            style: {
              marginLeft: '10px'
            },
            type: "password",
            placeholder: "Password",
            value: password,
            onChange: onChangePassword,
            required: true
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Group, {
        as: external_react_bootstrap_["Row"],
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
          sm: {
            span: 10,
            offset: 2
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
            disabled: logInLoading,
            variant: "primary",
            type: "submit",
            children: logInLoading ? 'Loading…' : '로그인'
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/signup",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
              variant: "outline-primary",
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_LoginForm = (LoginForm);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/UserProfile.js









const CardLinkWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__CardLinkWrapper",
  componentId: "sc-b71tg5-0"
})(["padding-top:15px;border-top:1px solid rgba(0,0,0,0.125);display:flex !important"]);
const LogoutButton = external_styled_components_default()(external_react_bootstrap_["Button"]).withConfig({
  displayName: "UserProfile__LogoutButton",
  componentId: "sc-b71tg5-1"
})(["margin-bottom:15px;"]);
const ProfileCard = external_styled_components_default()(external_react_bootstrap_["Card"]).withConfig({
  displayName: "UserProfile__ProfileCard",
  componentId: "sc-b71tg5-2"
})(["width:26rem;flex-direction:row;@media screen and (max-width:991px){width:20rem;}"]);
const CardBody = external_styled_components_default()(external_react_bootstrap_["Card"].Body).withConfig({
  displayName: "UserProfile__CardBody",
  componentId: "sc-b71tg5-3"
})(["padding:1.0rem;"]);
const CardLink = external_styled_components_default()(external_react_bootstrap_["Card"].Link).withConfig({
  displayName: "UserProfile__CardLink",
  componentId: "sc-b71tg5-4"
})(["padding:0;display:flex;text-align:center;"]);

const UserProfile = () => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const logoutHandler = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch(Object(user["R" /* logoutRequestAction */])());
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProfileCard, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardBody, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/user/${me.id}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Title, {
            children: me.nickname
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoutButton, {
        onClick: logoutHandler,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          float: 'right',
          marginTop: '15px'
        },
        children: ["Joined ", external_moment_default()(me.createdAt).format('MMMM YYYY')]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardLinkWrapper, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/user/${me.id}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardLink, {
              href: "#",
              children: ["\uAC8C\uC2DC\uBB3C ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), me.Posts.length]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardLink, {
              href: "#",
              children: ["\uD314\uB85C\uC6B0 ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), me.Followings.length]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardLink, {
              href: "#",
              children: ["\uD314\uB85C\uC6CC ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), me.Followers.length]
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var components_UserProfile = (UserProfile);
// EXTERNAL MODULE: ./components/PostForm.js
var PostForm = __webpack_require__("ecW4");

// CONCATENATED MODULE: ./components/RecommendFollowButton.js






const RecommendFollowButton = ({
  recommendUser
}) => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const isFollowing = me && me.Followings.find(v => v.id === recommendUser.id);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onClickButton = Object(external_react_["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: user["N" /* UNFOLLOW_REQUEST */],
        data: recommendUser.id
      });
    } else {
      dispatch({
        type: user["f" /* FOLLOW_REQUEST */],
        data: recommendUser.id
      });
    }
  }, [isFollowing, recommendUser]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
    style: {
      position: 'absolute',
      zIndex: '10',
      right: '1rem',
      top: '1.6rem'
    },
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  });
};

/* harmony default export */ var components_RecommendFollowButton = (RecommendFollowButton);
// CONCATENATED MODULE: ./components/Recommend.js







const ListGroupItem = external_styled_components_default()(external_react_bootstrap_["ListGroup"].Item).withConfig({
  displayName: "Recommend__ListGroupItem",
  componentId: "sc-18j2ceu-0"
})(["margin:0 !important;padding:2rem;"]);
const ListItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Recommend__ListItemWrapper",
  componentId: "sc-18j2ceu-1"
})(["position:relative;z-index:9;"]);

const Recommend = ({
  recommend
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["ListGroup"], {
      style: {
        width: '20rem',
        top: '21rem',
        position: 'fixed',
        zIndex: '7'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["ListGroup"].Item, {
        children: "Who to follow"
      }), recommend && recommend.map((v, i) =>
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      Object(jsx_runtime_["jsxs"])(ListItemWrapper, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListGroupItem, {
          action: true,
          href: `/user/${v.id}`,
          children: v.nickname
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          style: {
            margin: 0
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_RecommendFollowButton, {
            recommendUser: v
          })
        })]
      }, i))]
    })
  });
};

/* harmony default export */ var components_Recommend = (Recommend);
// CONCATENATED MODULE: ./components/AppLayout.js













const Global = Object(external_styled_components_["createGlobalStyle"])([".container-true{margin:2rem !important;}a{margin:5px !important;}.list-group-item-action{margin:0 !important;}"]);
const ButtonGroupWrapper = external_styled_components_default()(external_react_bootstrap_["ButtonGroup"]).withConfig({
  displayName: "AppLayout__ButtonGroupWrapper",
  componentId: "sc-1x6xxdo-0"
})(["display:flex;position:fixed;top:7rem;a{margin:0 !important;padding-right:14rem;text-decoration:none;};Button{text-align:left;};h3{color:#0a58ca;};@media screen and (max-width:767px){position:static;};"]);
const TwitterIcon = external_styled_components_default.a.h3.withConfig({
  displayName: "AppLayout__TwitterIcon",
  componentId: "sc-1x6xxdo-1"
})(["cursor:pointer;margin-bottom:10px;font-size:3rem;position:fixed;@media screen and (max-width:767px){position:static;};"]);
const SearchList = external_styled_components_default()(external_react_bootstrap_["ListGroup"]).withConfig({
  displayName: "AppLayout__SearchList",
  componentId: "sc-1x6xxdo-2"
})(["position:fixed;top:3.19rem;z-index:9;width:29%;border-left:1px solid #e9ecef;background-color:#ffffff;border-right:1px solid #e9ecef;"]);
const CircleButton = external_styled_components_default()(external_react_bootstrap_["Button"]).withConfig({
  displayName: "AppLayout__CircleButton",
  componentId: "sc-1x6xxdo-3"
})(["margin-top:50px;border-radius:9999px;text-align:center !important;display:block;height:64px;width:270px;font-size:1.5rem;}"]);
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AppLayout__SearchWrapper",
  componentId: "sc-1x6xxdo-4"
})(["position:fixed;width:20vw;"]);
const SearchForm = external_styled_components_default()(external_react_bootstrap_["FormControl"]).withConfig({
  displayName: "AppLayout__SearchForm",
  componentId: "sc-1x6xxdo-5"
})(["display:inline-block;padding-left:30px;width:100% !important;}"]);
const SearchIcon = external_styled_components_default()(external_react_bootstrap_icons_["Search"]).withConfig({
  displayName: "AppLayout__SearchIcon",
  componentId: "sc-1x6xxdo-6"
})(["position:absolute;top:9px;left:5px;width:20px;height:20px;padding-left:5px;"]);
const DeleteSearchContent = external_styled_components_default()(external_react_bootstrap_["CloseButton"]).withConfig({
  displayName: "AppLayout__DeleteSearchContent",
  componentId: "sc-1x6xxdo-7"
})(["position:absolute;right:1.5rem;top:0.25rem;"]);
const DropdownDivider = external_styled_components_default()(external_react_bootstrap_["Dropdown"].Divider).withConfig({
  displayName: "AppLayout__DropdownDivider",
  componentId: "sc-1x6xxdo-8"
})(["margin:0;"]);
const UserInfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AppLayout__UserInfoWrapper",
  componentId: "sc-1x6xxdo-9"
})(["top:5rem;position:fixed;@media screen and (max-width:992px){position:fixed;top:31rem;left:4rem;};@media screen and (max-width:840px){position:fixed;left:3rem;};@media screen and (max-width:767px){position:relative;top:5rem;left:0;};"]);
const Col1 = external_styled_components_default()(external_react_bootstrap_["Col"]).withConfig({
  displayName: "AppLayout__Col1",
  componentId: "sc-1x6xxdo-10"
})(["padding-left:12rem;border-right:1px solid #DCDCDC;position:relative;@media screen and (max-width:1456px){position:static;padding-left:0;display:flex;flex-direction:column;align-items:center;border-right:1px solid #DCDCDC;},"]);
const Col2 = external_styled_components_default()(external_react_bootstrap_["Col"]).withConfig({
  displayName: "AppLayout__Col2",
  componentId: "sc-1x6xxdo-11"
})(["border-right:1px solid #DCDCDC;@media screen and (max-width:1456px){position:relative;};@media screen and (max-width:767px){top:5rem;};"]);

const AppLayout = ({
  children
}) => {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const handleModalForm = Object(external_react_["useCallback"])(() => {
    setShow(prev => !prev);
  }, [show]);
  const {
    me,
    recommend,
    searchUserList,
    searchUserLoading,
    searchUserDone
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    addPostLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const {
    0: searchContent,
    1: setsearchContent
  } = Object(external_react_["useState"])('');
  const {
    0: searchHashtag,
    1: setsearchHashtag
  } = Object(external_react_["useState"])('');
  const {
    0: searchControl,
    1: setSearchControl
  } = Object(external_react_["useState"])(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    if (me && me.Followers.length >= 1 && me.Followings.length >= 1) {
      dispatch({
        type: user["r" /* LOAD_RECOMMEND_USER_REQUEST */]
      });
    }
  }, [me]);
  Object(external_react_["useEffect"])(() => {
    if (searchContent.startsWith('#')) {
      setsearchHashtag(searchContent.slice(1));
    }

    if (searchContent) {
      dispatch({
        type: user["u" /* LOAD_SEARCH_USER_REQUEST */],
        data: searchContent
      });
    }
  }, [searchContent]);
  Object(external_react_["useEffect"])(() => {
    if (searchUserLoading) {
      setSearchControl(true);
    }
  }, [searchUserLoading]);
  Object(external_react_["useEffect"])(() => {
    if (addPostLoading) {
      if (show) {
        setShow(prev => !prev);
      }
    }
  }, [addPostLoading]);
  Object(external_react_["useEffect"])(() => {
    if (searchUserDone) {
      setSearchControl(false);
    }
  }, [searchUserDone]);
  const onChangeSearchUserInput = Object(external_react_["useCallback"])(e => {
    setsearchContent(e.target.value);
  }, [searchContent]);
  const DeleteSearch = Object(external_react_["useCallback"])(() => {
    setsearchContent('');
    dispatch({
      type: user["u" /* LOAD_SEARCH_USER_REQUEST */],
      data: null
    });
  }, []); // const FindUser = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     searchUserList?.map((v) => {
  //       if (searchContent && searchContent === v.nickname) {
  //         Router.push(`/user/${v.id}`);
  //         setsearchContent('');
  //       }
  //     });
  //     if (searchHashtag) {
  //       Router.push(`/hashtag/${searchHashtag}`);
  //       setsearchContent('');
  //     }
  //   },
  //   [searchHashtag, searchUserList, searchContent],
  // );

  const SelectListItem = Object(external_react_["useCallback"])(() => {
    setsearchContent('');
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Global, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
      fluid: "true",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
        xs: 1,
        md: 2,
        lg: 3,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Col1, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TwitterIcon, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["Twitter"], {
                style: {
                  color: '#0a58ca'
                }
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonGroupWrapper, {
            vertical: true,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["HouseDoor"], {
                    style: {
                      marginRight: '1rem'
                    }
                  }), "Home"]
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/bookmarks",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["Bookmark"], {
                    style: {
                      marginRight: '1rem'
                    }
                  }), "Bookmark"]
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/profile",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["Person"], {
                    style: {
                      marginRight: '1rem'
                    }
                  }), "Profile"]
                })
              })
            }), !me && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
              variant: true,
              size: "lg",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/signup",
                children: "\uD68C\uC6D0\uAC00\uC785"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CircleButton, {
                variant: "primary",
                onClick: handleModalForm,
                children: "Tweet"
              })
            }), me ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Modal"], {
              size: "lg",
              show: show,
              onHide: handleModalForm,
              animation: false,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Header, {
                closeButton: true,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Title, {
                  children: ' '
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Body, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PostForm["a" /* default */], {})
              })]
            }) : null]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Col2, {
          children: children
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"], {
            inline: true,
            style: {
              position: 'relative',
              zIndex: '10'
            },
            onSubmit: FindUser,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(SearchWrapper, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchIcon, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchForm, {
                value: searchContent,
                onChange: onChangeSearchUserInput,
                type: "text",
                placeholder: "Search User or Hashtag",
                className: "mr-sm-2"
              }), searchContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])(DeleteSearchContent, {
                onClick: DeleteSearch
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchList, {
              children: searchContent && searchUserList && searchUserList.map((v, i) =>
              /*#__PURE__*/
              // eslint-disable-next-line react/no-array-index-key
              Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Dropdown"], {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Dropdown"].Item, {
                  disabled: searchControl,
                  onSelect: SelectListItem,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: `/user/${v.id}`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      style: {
                        display: 'block',
                        textDecoration: 'none'
                      },
                      children: v.nickname
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownDivider, {})]
              }, i))
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(UserInfoWrapper, {
            children: me ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_UserProfile, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_LoginForm, {})
          }), me && recommend ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Recommend, {
            recommend: recommend
          }) : null]
        })]
      })
    })]
  });
};

/* harmony default export */ var components_AppLayout = __webpack_exports__["a"] = (AppLayout);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "3WeD":
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

/***/ "3zrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((initialValue = null) => {
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

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

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js





const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: user["P" /* default */],
          post: post["X" /* default */]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/user.js





function loadBookmarksApi(lastId) {
  return external_axios_default.a.get(`/user/bookmarks?lastId=${lastId || 0} `);
}

function* loadBookmarks(action) {
  try {
    const result = yield Object(effects_["call"])(loadBookmarksApi, action.lastId);
    yield Object(effects_["put"])({
      type: post["D" /* LOAD_USER_BOOKMARKS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["B" /* LOAD_USER_BOOKMARKS_FAILURE */],
      error: err.response.data
    });
  }
}

function recommendUserApi() {
  return external_axios_default.a.get('/user/recommend');
}

function* recommendUser() {
  try {
    const result = yield Object(effects_["call"])(recommendUserApi);
    yield Object(effects_["put"])({
      type: user["s" /* LOAD_RECOMMEND_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["q" /* LOAD_RECOMMEND_USER_FAILURE */],
      error: err.response.data
    });
  }
}

function searchUserApi(data) {
  return external_axios_default.a.get(`/user/list?data=${data || null}`);
}

function* searchUser(action) {
  try {
    const result = yield Object(effects_["call"])(searchUserApi, action.data);
    yield Object(effects_["put"])({
      type: user["v" /* LOAD_SEARCH_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["t" /* LOAD_SEARCH_USER_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserPostsApi(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsApi, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["G" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["E" /* LOAD_USER_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadMyInfoApi() {
  return external_axios_default.a.get('/user/login');
}

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoApi);
    yield Object(effects_["put"])({
      type: user["p" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["n" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }
}

function loadUserApi(data) {
  return external_axios_default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserApi, action.data);
    yield Object(effects_["put"])({
      type: user["y" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["w" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }
}

function signupApi(data) {
  return external_axios_default.a.post('/user/signUp', data);
}

function* signup(action) {
  try {
    const result = yield Object(effects_["call"])(signupApi, action.data);
    yield Object(effects_["put"])({
      type: user["L" /* SIGN_UP_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["J" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }
}

function logInApi(data) {
  return external_axios_default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInApi, action.data);
    yield Object(effects_["put"])({
      type: user["B" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["z" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}

function logOutApi() {
  return external_axios_default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutApi);
    yield Object(effects_["put"])({
      type: user["E" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["C" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }
}

function changeNickNameApi(data) {
  return external_axios_default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickName(action) {
  try {
    const result = yield Object(effects_["call"])(changeNickNameApi, action.data);
    yield Object(effects_["put"])({
      type: user["d" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["b" /* CHANGE_NICKNAME_FAILURE */],
      error: err.response.data
    });
  }
}

function followApi(data) {
  return external_axios_default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(effects_["call"])(followApi, action.data);
    yield Object(effects_["put"])({
      type: user["g" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["e" /* FOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function unfollowApi(data) {
  return external_axios_default.a.delete(`/user/${data}/unfollow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(effects_["call"])(unfollowApi, action.data);
    yield Object(effects_["put"])({
      type: user["O" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["M" /* UNFOLLOW_FAILURE */],
      error: err.response.data
    });
  }
}

function loadfollowersApi(data) {
  return external_axios_default.a.get('/user/followers');
}

function* loadfollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadfollowersApi, action.data);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadfollowingsApi(data) {
  return external_axios_default.a.get('/user/followings');
}

function* loadfollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadfollowingsApi, action.data);
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_FOLLOWINGS_FAILURE */],
      error: err.response.data
    });
  }
}

function removefollowerApi(data) {
  return external_axios_default.a.delete(`/user/follower/${data}`);
}

function* removefollower(action) {
  try {
    const result = yield Object(effects_["call"])(removefollowerApi, action.data);
    yield Object(effects_["put"])({
      type: user["H" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["F" /* REMOVE_FOLLOWER_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchLoadBookMarks() {
  yield Object(effects_["takeLatest"])(post["C" /* LOAD_USER_BOOKMARKS_REQUEST */], loadBookmarks);
}

function* watchRecommendUser() {
  yield Object(effects_["takeLatest"])(user["r" /* LOAD_RECOMMEND_USER_REQUEST */], recommendUser);
}

function* watchSearchUser() {
  yield Object(effects_["throttle"])(3000, user["u" /* LOAD_SEARCH_USER_REQUEST */], searchUser);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(user["c" /* CHANGE_NICKNAME_REQUEST */], changeNickName);
}

function* watchloadMyInfo() {
  yield Object(effects_["takeLatest"])(user["o" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* watchloadUser() {
  yield Object(effects_["takeLatest"])(user["x" /* LOAD_USER_REQUEST */], loadUser);
}

function* watchloadUserPosts() {
  yield Object(effects_["takeLatest"])(post["F" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["A" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["D" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["K" /* SIGN_UP_REQUEST */], signup);
}

function* watchFollow() {
  yield Object(effects_["takeLatest"])(user["f" /* FOLLOW_REQUEST */], follow);
}

function* watchUnFollow() {
  yield Object(effects_["takeLatest"])(user["N" /* UNFOLLOW_REQUEST */], unfollow);
}

function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadfollowers);
}

function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(user["l" /* LOAD_FOLLOWINGS_REQUEST */], loadfollowings);
}

function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(user["G" /* REMOVE_FOLLOWER_REQUEST */], removefollower);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadBookMarks), Object(effects_["fork"])(watchRecommendUser), Object(effects_["fork"])(watchSearchUser), Object(effects_["fork"])(watchChangeNickname), Object(effects_["fork"])(watchloadMyInfo), Object(effects_["fork"])(watchloadUser), Object(effects_["fork"])(watchloadUserPosts), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchUnFollow), Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchRemoveFollower)]);
}
// CONCATENATED MODULE: ./sagas/post.js





function DeltePostImageApi(data) {
  return external_axios_default.a.delete(`/post/${data.postId}/image/${data.imageId}`, data);
}

function* DeltePostImage(action) {
  try {
    const result = yield Object(effects_["call"])(DeltePostImageApi, action.data);
    yield Object(effects_["put"])({
      type: post["l" /* DELETE_POST_IMAGE_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["j" /* DELETE_POST_IMAGE_FAILURE */],
      error: err.response.data
    });
  }
}

function EditPostContentApi(data) {
  return external_axios_default.a.patch(`/post/${data.postId}/edit`, data);
}

function* EditPostContent(action) {
  try {
    const result = yield Object(effects_["call"])(EditPostContentApi, action.data);
    yield Object(effects_["put"])({
      type: post["o" /* EDIT_POST_CONTENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["m" /* EDIT_POST_CONTENT_FAILURE */],
      error: err.response.data
    });
  }
}

function loadHashtagPostsApi(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsApi, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostApi(data) {
  return external_axios_default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostApi, action.data);
    yield Object(effects_["put"])({
      type: post["A" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["y" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function loadPostsApi(lastId) {
  return external_axios_default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsApi, action.lastId);
    yield Object(effects_["put"])({
      type: post["x" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["v" /* LOAD_POSTS_FAILURE */],
      error: err.response.data
    });
  }
}

function addPostApi(data) {
  return external_axios_default.a.post('/post/addpost', data);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostApi, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["g" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function removePostApi(data) {
  return external_axios_default.a.delete(`/post/${data}/remove`);
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostApi, action.data);
    yield Object(effects_["put"])({
      type: post["N" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["I" /* REMOVE_POST_OF_ME */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["L" /* REMOVE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function addCommentApi(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentApi, action.data);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: post["d" /* ADD_COMMENT_FAILURE */],
      data: err.response.data
    });
  }
}

function addBookMarkApi(data) {
  return external_axios_default.a.patch(`/post/${data}/bookmark`);
}

function* addBookMark(action) {
  try {
    const result = yield Object(effects_["call"])(addBookMarkApi, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_BOOKMARK_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_BOOKMARK_FAILURE */],
      data: err.response.data
    });
  }
}

function removeBookMarkApi(data) {
  return external_axios_default.a.patch(`/post/${data}/unbookmark`);
}

function* removeBookMark(action) {
  try {
    const result = yield Object(effects_["call"])(removeBookMarkApi, action.data);
    yield Object(effects_["put"])({
      type: post["J" /* REMOVE_BOOKMARK_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["H" /* REMOVE_BOOKMARK_FAILURE */],
      data: err.response.data
    });
  }
}

function likePostApi(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostApi, action.data);
    yield Object(effects_["put"])({
      type: post["r" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["p" /* LIKE_POST_FAILURE */],
      data: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/unlike`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["T" /* UNLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["R" /* UNLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["W" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["U" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }
}

function retweetAPI(data) {
  return external_axios_default.a.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    yield Object(effects_["put"])({
      type: post["Q" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["O" /* RETWEET_FAILURE */],
      error: err.response.data
    });
  }
}

function* watchDeltePostImage() {
  yield Object(effects_["throttle"])(3000, post["k" /* DELETE_POST_IMAGE_REQUEST */], DeltePostImage);
}

function* watchEditPostContent() {
  yield Object(effects_["throttle"])(2000, post["n" /* EDIT_POST_CONTENT_REQUEST */], EditPostContent);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["throttle"])(2000, post["t" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* watchRemoveBookmark() {
  yield Object(effects_["takeLatest"])(post["I" /* REMOVE_BOOKMARK_REQUEST */], removeBookMark);
}

function* watchAddBookmark() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_BOOKMARK_REQUEST */], addBookMark);
}

function* watchLoadPost() {
  yield Object(effects_["throttle"])(2000, post["z" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchLoadPosts() {
  yield Object(effects_["throttle"])(2000, post["w" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["h" /* ADD_POST_REQUEST */], addPost);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["M" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["q" /* LIKE_POST_REQUEST */], likePost);
}

function* watchUnLikePost() {
  yield Object(effects_["takeLatest"])(post["S" /* UNLIKE_POST_REQUEST */], unlikePost);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["V" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["P" /* RETWEET_REQUEST */], retweet);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchDeltePostImage), Object(effects_["fork"])(watchEditPostContent), Object(effects_["fork"])(watchRemoveBookmark), Object(effects_["fork"])(watchAddBookmark), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnLikePost), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchRetweet)]);
}
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://localhost:3065';
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(userSaga), Object(effects_["fork"])(postSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_RECOMMEND_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_RECOMMEND_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_RECOMMEND_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_SEARCH_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_SEARCH_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_SEARCH_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SIGN_UP_FAILURE; });
/* unused harmony export SIGN_UP_RESET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return loginRequestAction; });
/* unused harmony export loginSuccessAction */
/* unused harmony export loginFailureAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return logoutRequestAction; });
/* unused harmony export logoutSuccessAction */
/* unused harmony export logoutFailureAction */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

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
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
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

/* harmony default export */ __webpack_exports__["P"] = (reducer);

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1fKG");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1zst");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kduo");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ecW4");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("p+NB");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LAVF");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("AQn3");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













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
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[/* LOAD_POSTS_REQUEST */ "w"],
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    children: [me && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      me: me
    }), mainPosts.map(post => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      post: post
    }, post.id))]
  });
};

const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__[/* LOAD_MY_INFO_REQUEST */ "o"]
  });
  context.store.dispatch({
    type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__[/* LOAD_POSTS_REQUEST */ "w"]
  });
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_2__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "aPCy":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap-icons");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

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
    if (false) {}
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
  if (false) {}

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

/***/ "dZ6Y":
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

/***/ "ecW4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IZS3");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("p+NB");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3zrx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const PostForm = () => {
  const {
    addPostDone,
    imagePaths
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const imageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const [text, onChangeText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('');
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* ADD_POST_REQUEST */ "h"],
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* UPLOAD_IMAGES_REQUEST */ "V"],
      data: imageFormData
    });
  }, []);
  const onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => () => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__[/* REMOVE_IMAGE */ "K"],
      data: index
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSumbitUpload,
    encType: "multipart/form-data",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", {
            children: "Home"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
          as: "textarea",
          rows: 3,
          value: text,
          onChange: onChangeText
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].File.Input, {
          type: "file",
          name: "image",
          ref: imageUpload,
          onChange: onChangeImages,
          multiple: true,
          hidden: true
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          style: {
            marginTop: '1rem'
          },
          onClick: onClickImageUpload,
          children: "\uC774\uBBF8\uC9C0\uC5C5\uB85C\uB4DC"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          style: {
            float: 'right',
            marginTop: '1rem'
          },
          type: "submit",
          children: "\uAC8C\uC2DC"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      style: {
        display: 'flex',
        marginTop: '20px'
      },
      children: imagePaths.map((v, i) =>
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
        style: {
          marginRight: '5px'
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
          src: `http://localhost:3065/${v}`,
          alt: v,
          style: {
            width: '220px'
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            onClick: onRemoveImage(i),
            children: "\uC81C\uAC70"
          })
        })]
      }, i))
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (PostForm);

/***/ }),

/***/ "elyg":
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

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

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

    if (false) {}

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
          if (false) {}

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

      if (false) {}

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
    if (false) {}

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

      if (false) {}

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


    if (false) {}

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

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

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

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
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

var _formatUrl = __webpack_require__("6D7l");
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

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

/***/ "ionj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ "kduo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-bootstrap-icons"
var external_react_bootstrap_icons_ = __webpack_require__("aPCy");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./reducers/post.js
var reducers_post = __webpack_require__("p+NB");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// CONCATENATED MODULE: ./components/CommentForm.js










const CommentForm = ({
  post
}) => {
  const me = Object(external_react_redux_["useSelector"])(state => state.user.me);
  const id = Object(external_react_redux_["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    addCommentLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [commentText, OnChangeCommentText, setCommentText] = Object(useInput["a" /* default */])('');
  const {
    addCommentDone
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  Object(external_react_["useEffect"])(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  const onSubmitComment = Object(external_react_["useCallback"])(e => {
    e.preventDefault();

    if (!(me && me.id)) {
      router_default.a.push('/signup');
    }

    if (!me) {
      return null;
    }

    dispatch({
      type: reducers_post["e" /* ADD_COMMENT_REQUEST */],
      data: {
        content: commentText,
        postId: post.id,
        userId: id
      }
    });
  }, [me, commentText, me && me.id]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"], {
      onSubmit: onSubmitComment,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
        style: {
          position: 'relative'
        },
        controlId: "exampleForm.ControlTextarea1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Label, {
          srOnly: true,
          children: "Example textarea"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
          as: "textarea",
          rows: 3,
          value: commentText,
          onChange: OnChangeCommentText
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
        disabled: addCommentLoading || !commentText,
        style: {
          position: 'absolute',
          right: 0
        },
        variant: "primary",
        type: "submit",
        children: addCommentLoading ? 'Loading…' : '게시'
      })]
    })
  });
};

/* harmony default export */ var components_CommentForm = (CommentForm);
// CONCATENATED MODULE: ./components/PostCardContent.js
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/no-array-index-key */




const PostCardContent = ({
  postContent
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
  children: postContent.split(/(#[^\s#]+)/g).map((v, i) => {
    if (v.match(/(#[^\s#]+)/)) {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/hashtag/${v.slice(1)}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: v
        })
      }, i);
    }

    return v;
  })
});

/* harmony default export */ var components_PostCardContent = (PostCardContent);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/ImagesZoom/style.js


const Overlay = external_styled_components_default.a.div.withConfig({
  displayName: "style__Overlay",
  componentId: "sc-1a96i70-0"
})(["position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0;"]);
const Header = external_styled_components_default.a.header.withConfig({
  displayName: "style__Header",
  componentId: "sc-1a96i70-1"
})(["header:44px;background:white;position:relative;padding:0 0 1px;text-align:center;&h1{margin:0;font-size:17px;color:#333;line-height:44px;};"]);
const SlickWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "style__SlickWrapper",
  componentId: "sc-1a96i70-2"
})(["height:calc(100% - 44px);background:#090909;"]);
const ImgWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "style__ImgWrapper",
  componentId: "sc-1a96i70-3"
})(["padding:32px;text-align:center;&img{margin:0 auto;max-height:750px;}"]);
const Indicator = external_styled_components_default.a.div.withConfig({
  displayName: "style__Indicator",
  componentId: "sc-1a96i70-4"
})(["text-align:center;& > div{width:75px;hegith:30px;line-height:30px;border-radius:15px;background:#313131;display:inline-block;text-align:center;color:white;font-size:15px;}"]);
const CloseBtn = external_styled_components_default()(external_react_bootstrap_icons_["X"]).withConfig({
  displayName: "style__CloseBtn",
  componentId: "sc-1a96i70-5"
})(["position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer;font-size:4rem;color:black;"]);
const Global = Object(external_styled_components_["createGlobalStyle"])([".slick-slide{display:inline-block}.card{transform:none !important;}"]);
// CONCATENATED MODULE: ./components/ImagesZoom/index.js






const ImagesZoom = ({
  images,
  onClose
}) => {
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(external_react_["useState"])(0);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Overlay, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Global, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseBtn, {
        onClick: onClose,
        children: "X"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SlickWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, {
          initialSlide: 0,
          beforeChange: slide => setCurrentSlide(slide),
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImgWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              style: {
                width: '30rem'
              },
              src: `http://localhost:3065/${v.src}`,
              alt: v.src
            })
          }, v.src))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Indicator, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var components_ImagesZoom = (ImagesZoom);
// CONCATENATED MODULE: ./components/PostImages.js










const PostImages = ({
  images,
  header,
  postid
}) => {
  const {
    0: showImagesZoom,
    1: setShowImagesZoom
  } = Object(external_react_["useState"])(false);
  const {
    0: selectImage1,
    1: setSelectImage1
  } = Object(external_react_["useState"])(false);
  const {
    0: selectImage2,
    1: setSelectImage2
  } = Object(external_react_["useState"])(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    deletePostImageLoading
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const onZoom = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    setShowImagesZoom(true);
  }, []);
  const onClose = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    setShowImagesZoom(false);
  }, []);
  const onDeleteImage = Object(external_react_["useCallback"])((imageid, postid) => () => {
    dispatch({
      type: reducers_post["k" /* DELETE_POST_IMAGE_REQUEST */],
      data: {
        imageId: imageid,
        postId: postid
      }
    });
  }, []);
  const handleDeleteImage = Object(external_react_["useCallback"])(e => {
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
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [header === '수정' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
          id: images[0].id,
          onClick: handleDeleteImage,
          style: {
            width: '100%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`
        }), selectImage1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["XSquareFill"], {
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
        })]
      }), header === '메인이미지' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
          style: {
            width: '100%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`,
          onClick: onZoom
        }), showImagesZoom && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImagesZoom, {
          images: images,
          onClose: onClose
        })]
      })]
    });
  }

  if (images.length === 2) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [header === '수정' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
          id: images[0].id,
          onClick: handleDeleteImage,
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
          id: images[1].id,
          onClick: handleDeleteImage,
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[1].src,
          src: `http://localhost:3065/${images[1].src}`
        }), selectImage1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["XSquareFill"], {
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
        }), selectImage2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["XSquareFill"], {
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
        })]
      }), header === '메인이미지' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[0].src,
          src: `http://localhost:3065/${images[0].src}`,
          onClick: onZoom
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
          style: {
            width: '50%'
          },
          variant: "top",
          alt: images[1].src,
          src: `http://localhost:3065/${images[1].src}`,
          onClick: onZoom
        }), showImagesZoom && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImagesZoom, {
          images: images,
          onClose: onClose
        })]
      })]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [header === '수정' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
        id: images[0].id,
        onClick: handleDeleteImage,
        style: {
          width: '100%'
        },
        variant: "top",
        alt: images[0].src,
        src: `http://localhost:3065/${images[0].src}`
      }), selectImage1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["XSquareFill"], {
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
      })]
    }), header === '메인이미지' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Img, {
        style: {
          width: '100%'
        },
        variant: "top",
        alt: images[0].src,
        src: `http://localhost:3065/${images[0].src}`,
        onClick: onZoom
      }), showImagesZoom && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ImagesZoom, {
        images: images,
        onClose: onClose
      })]
    })]
  });
};

/* harmony default export */ var components_PostImages = (PostImages);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./components/FollowButton.js






const FollowButton = ({
  post
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(v => v.id === post.User.id);
  const onClickButton = Object(external_react_["useCallback"])(() => {
    if (isFollowing) {
      dispatch({
        type: user["N" /* UNFOLLOW_REQUEST */],
        data: post.User.id
      });
    } else {
      dispatch({
        type: user["f" /* FOLLOW_REQUEST */],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
    onClick: onClickButton,
    style: {
      float: 'right'
    },
    variant: "outline-primary",
    children: isFollowing ? '언팔로우' : '팔로우'
  });
};

/* harmony default export */ var components_FollowButton = (FollowButton);
// CONCATENATED MODULE: ./components/EditPostContent.js
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable max-len */











const EditPostContent = ({
  post,
  show,
  handleModalForm
}) => {
  const [text, onChangeText] = Object(useInput["a" /* default */])(post === null || post === void 0 ? void 0 : post.content);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onSubmitEdit = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    handleModalForm();
    dispatch({
      type: reducers_post["n" /* EDIT_POST_CONTENT_REQUEST */],
      data: {
        postId: post.id,
        contentText: text
      }
    });
  }, [post.id, text]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Modal"], {
      show: show,
      onHide: handleModalForm,
      "aria-labelledby": "Edit Content",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Header, {
        closeButton: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Modal"].Title, {
          id: "eEdit Content",
          children: "Edit Content"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Modal"].Body, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"], {
          style: {
            border: 0,
            width: '100%',
            display: 'inline-block',
            margin: '0.05rem'
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              position: 'relative'
            },
            children: post.Images[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostImages, {
              header: "\uC218\uC815",
              postid: post.id,
              images: post.Images
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              padding: '24px'
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Title, {
              style: {
                marginBottom: '2rem'
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: `/user/${post.User.id}`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: post.User.nickname
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"].Text, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["FormControl"], {
                as: "textarea",
                rows: 3,
                value: text,
                onChange: onChangeText
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
          onClick: onSubmitEdit,
          style: {
            float: 'right'
          },
          variant: "primary",
          children: "\uC218\uC815"
        })]
      })]
    })
  });
};

/* harmony default export */ var components_EditPostContent = (EditPostContent);
// CONCATENATED MODULE: ./components/PostCard.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/prop-types */

/* eslint-disable max-len */
















external_moment_default.a.locale('ko');
const CommentList = external_styled_components_default()(external_react_bootstrap_["ListGroup"]).withConfig({
  displayName: "PostCard__CommentList",
  componentId: "sc-10lmnn1-0"
})(["a{text-decoration:none;color:#212529;font-weight:500;},p{margin-top:0.3rem}"]);
const CommentListItem = external_styled_components_default()(external_react_bootstrap_["ListGroup"].Item).withConfig({
  displayName: "PostCard__CommentListItem",
  componentId: "sc-10lmnn1-1"
})(["display:flex;margin-top:1rem;"]);
const MoreButton = external_styled_components_default()(external_react_bootstrap_["Tooltip"]).withConfig({
  displayName: "PostCard__MoreButton",
  componentId: "sc-10lmnn1-2"
})([".tooltip-inner{border:1px solid #f0f0f1;background-color:#f0f0f1;},.arrow::before{border-top-color:#f0f0f1;},"]);

const PostCard = ({
  post
}) => {
  const {
    0: commentOpen,
    1: setCommentOpen
  } = Object(external_react_["useState"])(false);
  const id = Object(external_react_redux_["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    retweetError
  } = Object(external_react_redux_["useSelector"])(state => state.post);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const headerStyle = Object(external_react_["useMemo"])(() => ({
    backgroundColor: 'rgba(0,0,0,0)'
  }), []);
  const ulStyle = Object(external_react_["useMemo"])(() => ({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    borderTop: '1px solid #f0f0f0'
  }), []);
  const liStyle = Object(external_react_["useMemo"])(() => ({
    width: '25%',
    borderRight: '1px solid #f0f0f0',
    float: 'left',
    textAlign: 'center',
    margin: '12px 0'
  }), []);
  const spanStyle = Object(external_react_["useMemo"])(() => ({
    lineHeight: '14px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px'
  }), []);
  const BookmarkStyle = Object(external_react_["useMemo"])(() => ({
    fontSize: '1.5rem',
    float: 'right',
    cursor: 'pointer'
  }), []);
  const onRetweet = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: reducers_post["P" /* RETWEET_REQUEST */],
      data: post.id
    });
  }, [id]);
  const onUnLike = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: reducers_post["S" /* UNLIKE_POST_REQUEST */],
      data: post.id
    });
  }, [id]);
  const onLike = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: reducers_post["q" /* LIKE_POST_REQUEST */],
      data: post.id
    });
  }, [id]);
  const OnToggleComment = Object(external_react_["useCallback"])(() => {
    setCommentOpen(prev => !prev);
  }, []);
  const onPostDelete = Object(external_react_["useCallback"])(e => {
    e.preventDefault();

    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: reducers_post["M" /* REMOVE_POST_REQUEST */],
      data: post.id
    });
  }, [post.id]);
  const OnBookmark = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: reducers_post["b" /* ADD_BOOKMARK_REQUEST */],
      data: post.id
    });
  }, [id]);
  const OnUnBookmark = Object(external_react_["useCallback"])(() => {
    if (!id) {
      return alert('로그인 후 이용하실 수 있습니다.');
    }

    dispatch({
      type: reducers_post["I" /* REMOVE_BOOKMARK_REQUEST */],
      data: post.id
    });
  }, [id]);
  const handleModalForm = Object(external_react_["useCallback"])(e => {
    setShow(show => !show);
  }, [show]);

  const renderTooltip = props =>
  /*#__PURE__*/
  // eslint-disable-next-line react/jsx-props-no-spreading
  Object(jsx_runtime_["jsxs"])(MoreButton, _objectSpread(_objectSpread({
    id: "button-tooltip"
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [id && post.User.id === id && !post.Retweet && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
        variant: "warning",
        onClick: handleModalForm,
        children: "\uC218\uC815"
      }), id && post.User.id === id && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
        variant: "danger",
        onClick: onPostDelete,
        children: "\uC0AD\uC81C"
      })]
    }), id && post.User.id !== id && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
      variant: "danger",
      children: "\uC2E0\uACE0"
    })]
  }));

  const like = post.Likers.find(v => v.id === id);
  const bookmark = post.Bookmarkers.find(v => v.id === id);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      margin: '100px 0 20px'
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"], {
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"].Header, {
        style: headerStyle,
        children: [post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null, id && post.User.id === id ? null : /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_FollowButton, {
          post: post
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"].Body, {
        style: {
          padding: 0
        },
        children: [post.RetweetId && post.Retweet ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"], {
          style: {
            border: 0,
            width: '100%',
            display: 'inline-block',
            margin: '0.05rem'
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              display: 'flex'
            },
            children: post.Retweet.Images[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostImages, {
              postid: post.id,
              header: "\uBA54\uC778\uC774\uBBF8\uC9C0",
              images: post.Retweet.Images
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              width: '100%',
              padding: '24px'
            },
            children: [bookmark ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["BookmarkFill"], {
              style: BookmarkStyle,
              onClick: OnUnBookmark
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["Bookmark"], {
              style: BookmarkStyle,
              onClick: OnBookmark
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Title, {
              style: {
                marginBottom: '2rem'
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: `/user/${post.Retweet.User.id}`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: post.Retweet.User.nickname
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"].Text, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  float: 'right'
                },
                children: external_moment_default()(post.createdAt).fromNow()
              }), post.Likers.length >= 1 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
                style: {
                  fontWeight: '600'
                },
                children: ["\uC88B\uC544\uC694 ", post.Likers.length, "\uAC1C"]
              }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostCardContent, {
                postContent: post.Retweet.content
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: {
                  marginTop: '1rem',
                  display: 'flex'
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                  children: post.Comments[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: `/user/${post.Comments[0].User.id}`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      style: {
                        textDecoration: 'none',
                        color: '#212529'
                      },
                      children: post.Comments[0].User.nickname
                    })
                  })
                }), "\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  style: {
                    lineHeight: '1.2'
                  },
                  children: post.Comments[0] && post.Comments[0].content
                })]
              })]
            })]
          })]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"], {
          style: {
            border: 0,
            width: '100%',
            display: 'inline-block',
            margin: '0.05rem'
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            style: {
              display: 'flex'
            },
            children: post.Images[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostImages, {
              postid: post.id,
              header: "\uBA54\uC778\uC774\uBBF8\uC9C0",
              images: post.Images
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            style: {
              padding: '24px'
            },
            children: [bookmark ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["BookmarkFill"], {
              style: BookmarkStyle,
              onClick: OnUnBookmark
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["Bookmark"], {
              style: BookmarkStyle,
              onClick: OnBookmark
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Card"].Title, {
              style: {
                marginBottom: '2rem'
              },
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: `/user/${post.User.id}`,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  children: post.User.nickname
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Card"].Text, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                style: {
                  float: 'right'
                },
                children: external_moment_default()(post.createdAt).fromNow()
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: post.Likers.length >= 1 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h6", {
                  style: {
                    fontWeight: '600'
                  },
                  children: ["\uC88B\uC544\uC694 ", post.Likers.length, "\uAC1C"]
                }) : null
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_PostCardContent, {
                postContent: post.content
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                style: {
                  marginTop: '1rem',
                  display: 'flex'
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                  children: post.Comments[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: `/user/${post.Comments[0].User.id}`,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      style: {
                        textDecoration: 'none',
                        color: '#212529'
                      },
                      children: post.Comments[0].User.nickname
                    })
                  })
                }), "\xA0", /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  style: {
                    lineHeight: '1.2'
                  },
                  children: post.Comments[0] && post.Comments[0].content
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          style: ulStyle,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: spanStyle,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["Share"], {
                style: {
                  width: '100%'
                },
                onClick: onRetweet
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: spanStyle,
              children: like ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["HeartFill"], {
                style: {
                  width: '100%',
                  color: '#dc3545'
                },
                onClick: onUnLike
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["Heart"], {
                style: {
                  width: '100%'
                },
                onClick: onLike
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: spanStyle,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["ChatDots"], {
                style: {
                  width: '100%'
                },
                onClick: OnToggleComment
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            style: liStyle,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: spanStyle,
              children: show ? null : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["OverlayTrigger"], {
                placement: "top",
                overlay: renderTooltip,
                delay: {
                  show: 250,
                  hide: 400
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_icons_["ThreeDots"], {
                  style: {
                    width: '100%'
                  }
                })
              })
            })
          })]
        })]
      })]
    }), commentOpen && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        width: '33rem'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_CommentForm, {
        post: post
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
        children: [post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CommentList, {
        variant: "flush",
        children: post.Comments[0] && post.Comments.map(v => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CommentListItem, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: `/user/${v.User.id}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: v.UserId && v.User.nickname
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: v.content
          })]
        }))
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_EditPostContent, {
      post: post,
      show: show,
      handleModalForm: handleModalForm
    })]
  });
};

/* harmony default export */ var components_PostCard = __webpack_exports__["a"] = (PostCard);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DELETE_POST_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DELETE_POST_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DELETE_POST_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return EDIT_POST_CONTENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return EDIT_POST_CONTENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return EDIT_POST_CONTENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return LOAD_USER_BOOKMARKS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return LOAD_USER_BOOKMARKS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LOAD_USER_BOOKMARKS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_BOOKMARK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_BOOKMARK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BOOKMARK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return REMOVE_BOOKMARK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return REMOVE_BOOKMARK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return REMOVE_BOOKMARK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return REMOVE_IMAGE; });
/* unused harmony export addPostRequestAction */
/* unused harmony export addPostSuccessAction */
/* unused harmony export addPostFailureAction */
/* unused harmony export addComment */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

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
  return Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
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

/* harmony default export */ __webpack_exports__["X"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });