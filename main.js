/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat/static/Montserrat-SemiBold.ttf */ \"./src/fonts/Montserrat/static/Montserrat-SemiBold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Bold.ttf */ \"./src/fonts/Roboto/Roboto-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Regular.ttf */ \"./src/fonts/Roboto/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Custom font */\n@font-face {\n    font-family: 'logo';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'title';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');\n}\n\n@font-face {\n    font-family: 'text';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');\n}\n\n\n/* Reset CSS */\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Smooth scroll behavior */\nhtml {\n    scroll-behavior: smooth;\n}\ndiv.nav{\n    display:flex;\n    align-items: center;\n    width:100%;\n    padding:1rem;\n    background-color: rgba(194, 199, 201, 0.418);\n    color: white;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    margin-bottom: 4rem;\n}\n\n.header{\n    font-size: 1.5rem;\n    font-family: 'logo';\n}\n\nform{\n    display: flex;\n    margin-left: auto;\n    margin-right: 4rem;\n}\n\ninput[name=\"city\"]{\n    width:150%;\n    height: 30px;\n    font-size: 1rem;\n    font-family: 'text';\n    margin-right: 1rem;\n    border-radius: 8px;\n    border:0;\n    padding: 0 0.5rem; \n}\nbutton[type=\"submit\"]{\n    border:0;\n    background-color: rgba(199, 186, 186, 0.699);\n    width: 150px;\n    height: 30px;\n    border-radius: 8px;\n    font-family: 'text';\n}\n#degree{\n    border-radius: 8px;\n    border:0;\n    padding: 0 0.5rem; \n    height: 30px;\n    width:60px;\n    font-size: 1rem;\n    font-family: 'text';\n    background-color: rgba(199, 186, 186, 0.699);\n}\n\nbutton[type=\"submit\"]:hover, #degree:hover{\n    background-color: rgb(114, 111, 111);\n    cursor: pointer;\n}\n\n.infoContainer{\n    display:flex;\n    font-family: text;\n    color:white;\n    max-width: 75%;\n    margin: auto;\n    justify-content: space-around;\n    background-color: rgba(113, 118, 119, 0.582);\n    border-radius: 8px;\n    margin-bottom: 3rem;\n}\n\n.mainInfo{\n    padding:2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-size: 1.25rem;\n    margin-right: 0.5rem;\n}\n.mainInfo > *{\n    margin-bottom: 1rem;\n}\n\n.sideInfo{\n    padding:2rem;\n    font-size: 1.25rem;\n    text-align: left;\n    border-radius: 8px;\n}\n.sideInfo > *{\n    margin-bottom: 4rem;\n}\n\n.forecastContainer{\n    display:flex;\n    font-family: text;\n    color:white;\n    max-width: 75%;\n    margin: auto;\n    justify-content: space-around;\n    background-color: rgba(113, 118, 119, 0.582);\n    border-radius: 8px;\n}\n.forecastContainer > *{\n    padding:2rem;\n    border-radius: 8px;\n    text-align: center;\n    font-size: 1.25rem;\n    margin-right: 0.5rem;\n}\n\n.forecastContainer > * > *{\n    margin-bottom: 1rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/displayData.js":
/*!***********************************!*\
  !*** ./src/assets/displayData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayData)\n/* harmony export */ });\n/* harmony import */ var _images_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../images/sunny.jpg */ \"./src/images/sunny.jpg\");\n/* harmony import */ var _images_cloudy_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/cloudy.gif */ \"./src/images/cloudy.gif\");\n/* harmony import */ var _images_partlycloudy_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/partlycloudy.gif */ \"./src/images/partlycloudy.gif\");\n/* harmony import */ var _images_rainy_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/rainy.gif */ \"./src/images/rainy.gif\");\n/* harmony import */ var _images_clear_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../images/clear.jpg */ \"./src/images/clear.jpg\");\n\n\n\n \n\n\nfunction displayData(info, celsius) {\n    const content = document.querySelector(\".content\");\n    const infoContainer = document.createElement('div');\n\n    // Main info display\n    const mainInfo = document.createElement(\"div\");\n    const location = document.createElement('p');\n    const time = document.createElement('p');\n    const currentText = document.createElement('p');\n    const currentIcon = document.createElement('img');\n    const currentTemp = document.createElement('p');\n    const maxTemp = document.createElement('p');\n    const minTemp = document.createElement('p');\n    const feelsLikeTemp = document.createElement('p');\n\n    const sideInfo = document.createElement(\"div\");\n    const windSpeed = document.createElement('p');\n    const humidity = document.createElement('p');\n    const rainChance = document.createElement('p');\n    const UVIndex = document.createElement('p');\n\n    location.textContent = `${info.location.city}, ${info.location.country}`;\n    time.textContent = `${info.location.localTime}`;\n    currentText.textContent = `${info.currentInfo.conditionText}`;\n    currentIcon.src = `${info.currentInfo.conditionIcon}`;\n    if(celsius){\n        currentTemp.textContent = `${info.currentInfo.currentTemp} °C`;\n        maxTemp.innerHTML = `Max: ${info.currentInfo.maxTemp} °C`;\n        minTemp.textContent = `Min: ${info.currentInfo.minTemp} °C`;\n        feelsLikeTemp.textContent = `Feels Like: ${info.currentInfo.currentFeelsLikeTemp} °C`;\n    }else{\n        currentTemp.textContent = `${Math.round(info.currentInfo.currentTemp * 9 / 5 + 32 )} °F`;\n        maxTemp.textContent = `Max: ${Math.round(info.currentInfo.maxTemp * 9 / 5 + 32)} °F`;\n        minTemp.textContent = `Min: ${Math.round(info.currentInfo.minTemp * 9 / 5 + 32)} °F`;\n        feelsLikeTemp.textContent = `Feels Like: ${Math.round(info.currentInfo.currentFeelsLikeTemp * 9 / 5 + 32)} °F`;\n    }\n\n    windSpeed.textContent = `Wind speed: ${info.moreInfo.windSpeed} km/h`;\n    humidity.textContent = `Humidity: ${info.moreInfo.humidity}%`;\n    rainChance.textContent = `Rain Chance: ${info.moreInfo.rainChance}%`;\n    UVIndex.textContent = `UV Index: ${info.moreInfo.UVIndex}`;\n\n    mainInfo.appendChild(location);\n    mainInfo.appendChild(time);\n    mainInfo.appendChild(currentText);\n    mainInfo.appendChild(currentIcon);\n    mainInfo.appendChild(currentTemp);\n    mainInfo.appendChild(maxTemp);\n    mainInfo.appendChild(minTemp);\n    mainInfo.appendChild(feelsLikeTemp);\n    mainInfo.classList.add(\"mainInfo\");\n\n    sideInfo.append(windSpeed);\n    sideInfo.append(humidity);\n    sideInfo.append(rainChance);\n    sideInfo.append(UVIndex);\n    sideInfo.classList.add(\"sideInfo\");\n\n    infoContainer.appendChild(mainInfo);\n    infoContainer.appendChild(sideInfo);\n    infoContainer.classList.add(\"infoContainer\");\n\n    content.appendChild(infoContainer);\n\n    const conditionText = info.currentInfo.conditionText.toLowerCase().trim();\n    setBackgroundImage(conditionText);\n\n    const forecastContainer = forecastDisplay(info,celsius);\n    content.appendChild(forecastContainer);\n}\n\nfunction setBackgroundImage(text){\n    const body = document.querySelector(\"body\");\n    let backgroundImage;\n\n    switch (text) {\n        case 'sunny':\n            backgroundImage = _images_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__;\n            break;\n        case 'cloudy':\n            backgroundImage = _images_cloudy_gif__WEBPACK_IMPORTED_MODULE_1__;\n            break;\n        case 'partly cloudy':\n            backgroundImage = _images_partlycloudy_gif__WEBPACK_IMPORTED_MODULE_2__;\n            break;\n        case 'light rain':\n            backgroundImage = _images_rainy_gif__WEBPACK_IMPORTED_MODULE_3__;\n            break;\n        case 'clear':\n            backgroundImage = _images_clear_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    }\n\n    body.style.backgroundImage = `url(${backgroundImage})`;\n}\n\nfunction forecastDisplay(info, celsius){\n    const forecastContainer = document.createElement('div');\n    info.forecastInfo.forEach( (element) => {\n        const forecast = document.createElement(\"div\");\n        const date = document.createElement('p');\n        const minTemp = document.createElement('p');\n        const maxTemp = document.createElement('p');\n        const rainChance = document.createElement('p');\n        const icon = document.createElement('img');\n        date.textContent = `${element.date}`;\n        icon.src = `${element.icon}`;\n        rainChance.textContent = `Rain chance: ${element.rainChance}%`;\n\n        if(celsius == true){\n            maxTemp.textContent = `Max: ${element.maxTemp} °C`;\n            minTemp.textContent = `Min: ${element.minTemp} °C`;\n        }else{\n            maxTemp.textContent = `Max: ${Math.round(element.maxTemp * 9 / 5 + 32)} °F`;\n            minTemp.textContent = `Min: ${Math.round(element.minTemp * 9 / 5 + 32)} °F`;\n        }\n\n\n        forecast.appendChild(date);\n        forecast.appendChild(icon);\n        forecast.appendChild(rainChance);\n        forecast.appendChild(maxTemp);\n        forecast.appendChild(minTemp);\n\n        forecastContainer.appendChild(forecast);\n        forecastContainer.classList.add(\"forecastContainer\");\n    });\n    return forecastContainer;\n}\n\n//# sourceURL=webpack://to-do-list/./src/assets/displayData.js?");

/***/ }),

/***/ "./src/assets/processData.js":
/*!***********************************!*\
  !*** ./src/assets/processData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ processWeatherData)\n/* harmony export */ });\nfunction processWeatherData(data){\n    const forecast = data.forecast.forecastday;\n    const location = {\n        city: data.location.name,\n        region: data.location.region,\n        country: data.location.country,\n        localTime: forecast[0].date,\n    }\n    const currentInfo = {\n        conditionText : data.current.condition.text,\n        conditionIcon : data.current.condition.icon,\n        currentTemp: data.current.temp_c,\n        minTemp: forecast[0].day.mintemp_c,\n        maxTemp: forecast[0].day.maxtemp_c,\n        currentFeelsLikeTemp : data.current.feelslike_c,\n    }\n    const moreInfo = {\n        windSpeed: data.current.wind_kph,\n        humidity: data.current.humidity,\n        rainChance: forecast[0].day.daily_chance_of_rain,\n        UVIndex: data.current.uv,\n    }\n    const forecastInfo = []\n    forecast.forEach( element => \n        forecastInfo.push({\n            date: element.date,\n            maxTemp: element.day.maxtemp_c,\n            minTemp: element.day.mintemp_c,\n            rainChance: element.day.daily_chance_of_rain,\n            icon: element.day.condition.icon, \n        }));\n    return {location, currentInfo, moreInfo, forecastInfo};\n     }\n\n//# sourceURL=webpack://to-do-list/./src/assets/processData.js?");

/***/ }),

/***/ "./src/assets/weatherData.js":
/*!***********************************!*\
  !*** ./src/assets/weatherData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getWeatherData(location) {\n    const API_KEY = \"79dbe30447fb4d528f6191646242905\";\n  try {\n    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`, { mode: \"cors\" });\n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error(\"Can't get info\", error);\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/assets/weatherData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/weatherData */ \"./src/assets/weatherData.js\");\n/* harmony import */ var _assets_processData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/processData */ \"./src/assets/processData.js\");\n/* harmony import */ var _images_sunny_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sunny.jpg */ \"./src/images/sunny.jpg\");\n/* harmony import */ var _assets_displayData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/displayData */ \"./src/assets/displayData.js\");\n\n\n\n\n\n\nlet celsius = true;\nconst degree = document.querySelector('#degree')\nconst body = document.querySelector(\"body\");\nconst content = document.querySelector(\".content\");\nconst span = document.querySelector(\"span\");\nconst submit = document.querySelector(\"button[type=submit]\");\nconst input = document.querySelector(\"input\");\n\nbody.style.backgroundImage = `url(${_images_sunny_jpg__WEBPACK_IMPORTED_MODULE_3__})`;\nbody.style.backgroundSize = '100% auto';  \n\n\n\nsubmit.addEventListener(\"click\", (event) =>{\n    event.preventDefault();\n    const city = input.value.trim();\n    if(city){\n        const data =  (0,_assets_weatherData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(city);\n    data.then((data) => {\n        const processedData = (0,_assets_processData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n        content.innerHTML = '';\n        span.textContent = \"\";\n        (0,_assets_displayData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(processedData,celsius);\n    }).catch((error) => {\n        console.error('Error processing weather data:', error);\n        span.textContent = \"Cannot find the city\";\n    });\n    }else{\n        span.textContent = \"Please enter a city name\";\n    }\n    \n})\n\ndegree.addEventListener(\"click\", () => {\n    celsius = !celsius;\n    degree.textContent = ' ';\n    if(celsius){\n        degree.textContent = \"°C\";\n        \n    }else{\n        degree.textContent = \"°F\";\n    }\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Montserrat/static/Montserrat-SemiBold.ttf":
/*!*************************************************************!*\
  !*** ./src/fonts/Montserrat/static/Montserrat-SemiBold.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Montserrat-SemiBold.ttf\";\n\n//# sourceURL=webpack://to-do-list/./src/fonts/Montserrat/static/Montserrat-SemiBold.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Roboto-Bold.ttf\";\n\n//# sourceURL=webpack://to-do-list/./src/fonts/Roboto/Roboto-Bold.ttf?");

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Roboto-Regular.ttf\";\n\n//# sourceURL=webpack://to-do-list/./src/fonts/Roboto/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/images/clear.jpg":
/*!******************************!*\
  !*** ./src/images/clear.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cc18a49241a0f1910e8.jpg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/clear.jpg?");

/***/ }),

/***/ "./src/images/cloudy.gif":
/*!*******************************!*\
  !*** ./src/images/cloudy.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e58083ca94d96ecf58f.gif\";\n\n//# sourceURL=webpack://to-do-list/./src/images/cloudy.gif?");

/***/ }),

/***/ "./src/images/partlycloudy.gif":
/*!*************************************!*\
  !*** ./src/images/partlycloudy.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8181a86e7cec2fddf8d9.gif\";\n\n//# sourceURL=webpack://to-do-list/./src/images/partlycloudy.gif?");

/***/ }),

/***/ "./src/images/rainy.gif":
/*!******************************!*\
  !*** ./src/images/rainy.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf6f6f060e53f41db79c.gif\";\n\n//# sourceURL=webpack://to-do-list/./src/images/rainy.gif?");

/***/ }),

/***/ "./src/images/sunny.jpg":
/*!******************************!*\
  !*** ./src/images/sunny.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d56930dea7c131f1ecf1.jpg\";\n\n//# sourceURL=webpack://to-do-list/./src/images/sunny.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;