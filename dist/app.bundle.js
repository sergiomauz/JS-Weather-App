/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/dashboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/dashboard.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  font-size: 0.875rem;\\n}\\n\\n.feather {\\n  width: 16px;\\n  height: 16px;\\n  vertical-align: text-bottom;\\n}\\n\\n.sidebar {\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 100; /* Behind the navbar */\\n  padding: 48px 0 0; /* Height of navbar */\\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\\n}\\n\\n@media (max-width: 767.98px) {\\n  .sidebar {\\n    top: 5rem;\\n  }\\n}\\n\\n.sidebar-sticky {\\n  position: relative;\\n  top: 0;\\n  height: calc(100vh - 48px);\\n  padding-top: 0.5rem;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n}\\n\\n@supports ((position: -webkit-sticky) or (position: sticky)) {\\n  .sidebar-sticky {\\n    position: -webkit-sticky;\\n    position: sticky;\\n  }\\n}\\n\\n.sidebar .nav-link {\\n  font-weight: 500;\\n  color: #333;\\n}\\n\\n.sidebar .nav-link .feather {\\n  margin-right: 4px;\\n  color: #999;\\n}\\n\\n.sidebar .nav-link.active {\\n  color: #007bff;\\n}\\n\\n.sidebar .nav-link:hover .feather,\\n.sidebar .nav-link.active .feather {\\n  color: inherit;\\n}\\n\\n.sidebar-heading {\\n  font-size: 0.75rem;\\n  text-transform: uppercase;\\n}\\n\\n.navbar-brand {\\n  padding-top: 0.75rem;\\n  padding-bottom: 0.75rem;\\n  font-size: 1rem;\\n  background-color: rgba(0, 0, 0, 0.25);\\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);\\n}\\n\\n.navbar .navbar-toggler {\\n  top: 0.25rem;\\n  right: 1rem;\\n}\\n\\n.navbar .form-control {\\n  padding: 0.75rem 1rem;\\n  border-width: 0;\\n  border-radius: 0;\\n}\\n\\n.form-control-dark {\\n  color: #fff;\\n  background-color: rgba(255, 255, 255, 0.1);\\n  border-color: rgba(255, 255, 255, 0.1);\\n}\\n\\n.form-control-dark:focus {\\n  border-color: transparent;\\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/dashboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/classes/storage.js":
/*!********************************!*\
  !*** ./src/classes/storage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar storage = function () {\n  var getCities = function getCities() {\n    return JSON.parse(localStorage.getItem('cities') || '[]');\n  };\n\n  var addCity = function addCity(city) {\n    var cities = JSON.parse(localStorage.getItem('cities') || '[]');\n    var indexCity = cities.indexOf(city);\n\n    if (indexCity >= 0) {\n      cities.splice(indexCity, 1);\n    }\n\n    cities.unshift(city);\n    localStorage.setItem('cities', JSON.stringify(cities));\n  };\n\n  return {\n    addCity: addCity,\n    getCities: getCities\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (storage);\n\n//# sourceURL=webpack:///./src/classes/storage.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rendering_newelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/newelement */ \"./src/rendering/newelement.js\");\n/* harmony import */ var _rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/elementslist */ \"./src/rendering/elementslist.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ \"./src/components/sidebar.js\");\n/* harmony import */ var _classes_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/storage */ \"./src/classes/storage.js\");\n\n\n\n\n\nvar form = function () {\n  var formID = 'form-weather';\n  var formElement;\n\n  var create = function create() {\n    var buttonRequest = Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'button',\n      classes: 'btn btn-primary',\n      html: 'Request',\n      attributes: {\n        type: 'button'\n      }\n    });\n    formElement = Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tag: 'form'\n      }),\n      childs: [Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'div',\n          classes: 'form-group'\n        }),\n        childs: [Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'label',\n          attributes: {\n            \"for\": 'cityname'\n          },\n          html: 'City name:'\n        }), Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'input',\n          attributes: {\n            type: 'text',\n            id: 'cityname'\n          },\n          classes: 'form-control'\n        })]\n      }), buttonRequest]\n    });\n    buttonRequest.addEventListener('click', function () {\n      var city = formElement.querySelector(\"input[class='form-control']\");\n\n      if (city.value.length > 0) {\n        _classes_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addCity(city.value);\n        _sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadCitiesNodes(_classes_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCities());\n        city.value = '';\n      }\n    });\n    return formElement;\n  };\n\n  var get = function get() {\n    return formElement;\n  };\n\n  var getID = function getID() {\n    return formID;\n  };\n\n  return {\n    create: create,\n    get: get,\n    getID: getID\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (form);\n\n//# sourceURL=webpack:///./src/components/form.js?");

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rendering_newelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/newelement */ \"./src/rendering/newelement.js\");\n\n\nvar main = function () {\n  var mainID = 'main-container';\n  var mainElement;\n\n  var create = function create() {\n    mainElement = Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'div',\n      classes: 'col-md-9 ml-sm-auto col-lg-10 px-md-4',\n      attributes: {\n        id: mainID\n      }\n    });\n    return mainElement;\n  };\n\n  var get = function get() {\n    return mainElement;\n  };\n\n  var getID = function getID() {\n    return mainID;\n  };\n\n  return {\n    create: create,\n    get: get,\n    getID: getID\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./src/components/main.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rendering_newelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/newelement */ \"./src/rendering/newelement.js\");\n/* harmony import */ var _rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/elementslist */ \"./src/rendering/elementslist.js\");\n\n\n\nvar navbar = function () {\n  var navbarID = 'navbar-container';\n  var navbarElement;\n\n  var create = function create() {\n    navbarElement = Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tag: 'nav',\n        classes: 'navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow',\n        attributes: {\n          id: navbarID\n        }\n      }),\n      childs: [Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'a',\n          classes: 'navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-center',\n          attributes: {\n            href: '#'\n          }\n        }),\n        childs: [Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'span',\n          classes: 'logo',\n          html: 'Marvelous Weather'\n        })]\n      })]\n    });\n    return navbarElement;\n  };\n\n  var get = function get() {\n    return navbarElement;\n  };\n\n  var getID = function getID() {\n    return navbarID;\n  };\n\n  return {\n    create: create,\n    get: get,\n    getID: getID\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n//# sourceURL=webpack:///./src/components/navbar.js?");

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rendering_newelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/newelement */ \"./src/rendering/newelement.js\");\n/* harmony import */ var _rendering_nestedelements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/nestedelements */ \"./src/rendering/nestedelements.js\");\n/* harmony import */ var _rendering_elementslist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rendering/elementslist */ \"./src/rendering/elementslist.js\");\n\n\n\n\nvar sidebar = function () {\n  var sidebarElement;\n  var sidebarID = 'sidebar-menu';\n  var citiesnodesID = 'cities-nodes';\n  var citiesNodes = Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    tag: 'ul',\n    classes: 'nav flex-column',\n    attributes: {\n      id: \"\".concat(citiesnodesID)\n    }\n  });\n\n  var createCityNode = function createCityNode(city) {\n    var liNode = Object(_rendering_nestedelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'li',\n      classes: 'nav-item'\n    }), Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'a',\n      classes: 'nav-link',\n      html: \"\".concat(city),\n      attributes: {\n        href: '#'\n      }\n    }));\n    liNode.addEventListener('click', function () {\n      return liNode.querySelector(\"a[class = 'nav-link']\").innerHTML;\n    });\n    return liNode;\n  };\n\n  var loadCitiesNodes = function loadCitiesNodes(cities) {\n    citiesNodes.innerHTML = '';\n    (cities || []).forEach(function (city) {\n      citiesNodes.appendChild(createCityNode(city));\n    });\n    return citiesNodes;\n  };\n\n  var create = function create(cities) {\n    loadCitiesNodes(cities);\n    sidebarElement = Object(_rendering_nestedelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'nav',\n      classes: 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse',\n      attributes: {\n        id: sidebarID\n      }\n    }), Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tag: 'div',\n        classes: 'sidebar-sticky'\n      }),\n      childs: [Object(_rendering_nestedelements__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tag: 'div',\n        classes: 'd-flex justify-content-center py-3'\n      }), Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tag: 'button',\n        classes: 'btn btn-danger',\n        html: '<i class=\"fas fa-times\"></i> Clear log'\n      })), citiesNodes]\n    }));\n    return sidebarElement;\n  };\n\n  var get = function get() {\n    return sidebarElement;\n  };\n\n  var getID = function getID() {\n    return sidebarID;\n  };\n\n  return {\n    create: create,\n    loadCitiesNodes: loadCitiesNodes,\n    get: get,\n    getID: getID\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sidebar);\n\n//# sourceURL=webpack:///./src/components/sidebar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/dashboard.css */ \"./src/styles/dashboard.css\");\n/* harmony import */ var _styles_dashboard_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_dashboard_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/layout */ \"./src/pages/layout.js\");\n/* harmony import */ var _pages_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/weather */ \"./src/pages/weather.js\");\n\n\n\ndocument.body.appendChild(_pages_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create());\n_pages_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadPage(_pages_weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rendering_newelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/newelement */ \"./src/rendering/newelement.js\");\n/* harmony import */ var _rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/elementslist */ \"./src/rendering/elementslist.js\");\n/* harmony import */ var _rendering_newmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rendering/newmap */ \"./src/rendering/newmap.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form */ \"./src/components/form.js\");\n\n\n\n\n\nvar Home = function () {\n  var home = Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'div'\n    }),\n    childs: [Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'div',\n      classes: 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom',\n      html: '<h1 class=\"h2\">Weather App</h1>'\n    }), Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tag: 'div',\n        classes: 'row'\n      }),\n      childs: [Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'div',\n          classes: 'col-12 col-lg-6'\n        }),\n        childs: [_components_form__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create()]\n      }), Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'div',\n          classes: 'col-12 col-lg-6 d-flex justify-content-center'\n        }),\n        childs: [Object(_rendering_newmap__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n          latitude: '-18.01',\n          longitude: '-70.25'\n        })]\n      })]\n    })]\n  });\n  return home;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/layout.js":
/*!*****************************!*\
  !*** ./src/pages/layout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/storage */ \"./src/classes/storage.js\");\n/* harmony import */ var _rendering_newelement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/newelement */ \"./src/rendering/newelement.js\");\n/* harmony import */ var _rendering_nestedelements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rendering/nestedelements */ \"./src/rendering/nestedelements.js\");\n/* harmony import */ var _rendering_elementslist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rendering/elementslist */ \"./src/rendering/elementslist.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/navbar */ \"./src/components/navbar.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sidebar */ \"./src/components/sidebar.js\");\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/main */ \"./src/components/main.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ \"./src/pages/home.js\");\n\n\n\n\n\n\n\n\n\nvar layout = function () {\n  var contentID = 'content';\n  var layoutElement;\n  var navbarElement;\n  var sidebarElement;\n  var mainElement;\n\n  var loadPage = function loadPage(page) {\n    if (layoutElement !== undefined) {\n      var main = layoutElement.querySelector(\"div[id='\".concat(_components_main__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getID(), \"']\"));\n      main.innerHTML = '';\n      main.appendChild(page);\n    }\n  };\n\n  var create = function create(page) {\n    navbarElement = _components_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create();\n    sidebarElement = _components_sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create(_classes_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCities());\n    mainElement = _components_main__WEBPACK_IMPORTED_MODULE_6__[\"default\"].create();\n    layoutElement = Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      tag: 'div',\n      attributes: {\n        id: contentID\n      }\n    });\n    layoutElement.appendChild(navbarElement);\n    layoutElement.appendChild(Object(_rendering_nestedelements__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      tag: 'main',\n      classes: 'container-fluid'\n    }), Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n      container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        tag: 'div',\n        classes: 'row'\n      }),\n      childs: [sidebarElement, mainElement]\n    })));\n    if (page === undefined) page = _home__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n    loadPage(page);\n    return layoutElement;\n  };\n\n  var get = function get() {\n    return layoutElement;\n  };\n\n  return {\n    create: create,\n    get: get,\n    loadPage: loadPage\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\n\n//# sourceURL=webpack:///./src/pages/layout.js?");

/***/ }),

/***/ "./src/pages/weather.js":
/*!******************************!*\
  !*** ./src/pages/weather.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rendering_newelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rendering/newelement */ \"./src/rendering/newelement.js\");\n/* harmony import */ var _rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rendering/elementslist */ \"./src/rendering/elementslist.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form */ \"./src/components/form.js\");\n\n\n\n\nvar weather = function () {\n  var weather = Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'div'\n    }),\n    childs: [Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      tag: 'div',\n      classes: 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom',\n      html: '<h1 class=\"h2\">Weather App</h1>'\n    }), Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        tag: 'div',\n        classes: 'row justify-content-center'\n      }),\n      childs: [Object(_rendering_elementslist__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        container: Object(_rendering_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          tag: 'div',\n          classes: 'col-12 col-lg-6'\n        }),\n        childs: [_components_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create()]\n      })]\n    })]\n  });\n  return weather;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n//# sourceURL=webpack:///./src/pages/weather.js?");

/***/ }),

/***/ "./src/rendering/elementslist.js":
/*!***************************************!*\
  !*** ./src/rendering/elementslist.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar elementsList = function elementsList(params) {\n  var container = params.container,\n      childs = params.childs;\n  childs.forEach(function (element) {\n    container.appendChild(element);\n  });\n  return container;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (elementsList);\n\n//# sourceURL=webpack:///./src/rendering/elementslist.js?");

/***/ }),

/***/ "./src/rendering/nestedelements.js":
/*!*****************************************!*\
  !*** ./src/rendering/nestedelements.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar NestedElements = function NestedElements() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  for (var i = 1; i < args.length; i += 1) {\n    args[i - 1].appendChild(args[i]);\n  }\n\n  if (args.length > 0) {\n    return args[0];\n  }\n\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NestedElements);\n\n//# sourceURL=webpack:///./src/rendering/nestedelements.js?");

/***/ }),

/***/ "./src/rendering/newelement.js":
/*!*************************************!*\
  !*** ./src/rendering/newelement.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar newElement = function newElement(params) {\n  var tag = params.tag,\n      classes = params.classes,\n      html = params.html,\n      click = params.click,\n      attributes = params.attributes;\n  var element;\n\n  if (tag !== undefined) {\n    element = document.createElement(tag);\n  }\n\n  if (classes !== undefined) {\n    var _element$classList;\n\n    (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes.split(' ')));\n  }\n\n  if (html !== undefined) {\n    element.innerHTML = html;\n  }\n\n  if (click !== undefined) {\n    element.addEventListener('click', function () {\n      click();\n    });\n  }\n\n  if (attributes !== undefined) {\n    Object.keys(attributes).forEach(function (attribute) {\n      element.setAttribute(attribute, attributes[attribute]);\n    });\n  }\n\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newElement);\n\n//# sourceURL=webpack:///./src/rendering/newelement.js?");

/***/ }),

/***/ "./src/rendering/newmap.js":
/*!*********************************!*\
  !*** ./src/rendering/newmap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newelement */ \"./src/rendering/newelement.js\");\n\n\nvar newMap = function newMap(params) {\n  var latitude = params.latitude,\n      longitude = params.longitude;\n  var element = Object(_newelement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    tag: 'iframe',\n    attributes: {\n      \"class\": 'iframe',\n      src: \"https://maps.google.com/?ll=\".concat(latitude, \",\").concat(longitude, \"&z=13&output=embed\"),\n      height: '500',\n      width: '100%',\n      frameborder: '0',\n      style: 'border: 0'\n    }\n  });\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newMap);\n\n//# sourceURL=webpack:///./src/rendering/newmap.js?");

/***/ }),

/***/ "./src/styles/dashboard.css":
/*!**********************************!*\
  !*** ./src/styles/dashboard.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./dashboard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/dashboard.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/dashboard.css?");

/***/ })

/******/ });