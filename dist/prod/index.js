(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("react-hot-loader"), require("lodash"), require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/objectSpread"), require("topcoder-react-utils"), require("moment"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/defineProperty"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "react-hot-loader", "lodash", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectSpread", "topcoder-react-utils", "moment", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/defineProperty", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["navigation-component"] = factory(require("react"), require("prop-types"), require("react-hot-loader"), require("lodash"), require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/objectSpread"), require("topcoder-react-utils"), require("moment"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/inherits"), require("@babel/runtime/helpers/defineProperty"), require("react-dom"));
	else
		root["navigation-component"] = factory(root["react"], root["prop-types"], root["react-hot-loader"], root["lodash"], root["@babel/runtime/helpers/slicedToArray"], root["@babel/runtime/helpers/objectSpread"], root["topcoder-react-utils"], root["moment"], root["@babel/runtime/helpers/classCallCheck"], root["@babel/runtime/helpers/createClass"], root["@babel/runtime/helpers/possibleConstructorReturn"], root["@babel/runtime/helpers/getPrototypeOf"], root["@babel/runtime/helpers/inherits"], root["@babel/runtime/helpers/defineProperty"], root["react-dom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__30__, __WEBPACK_EXTERNAL_MODULE__36__, __WEBPACK_EXTERNAL_MODULE__66__, __WEBPACK_EXTERNAL_MODULE__67__, __WEBPACK_EXTERNAL_MODULE__68__, __WEBPACK_EXTERNAL_MODULE__69__, __WEBPACK_EXTERNAL_MODULE__70__, __WEBPACK_EXTERNAL_MODULE__75__, __WEBPACK_EXTERNAL_MODULE__80__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(97);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(100);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(107);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(88);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-700.eot";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-regular.eot";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/barlow-condensed-v3-latin-600.eot";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(89);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-700.woff";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-700.ttf";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-700.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-regular.woff";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-regular.ttf";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/roboto-v19-latin-regular.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/barlow-condensed-v3-latin-600.woff2";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/barlow-condensed-v3-latin-600.woff";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/barlow-condensed-v3-latin-600.ttf";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/barlow-condensed-v3-latin-600.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__30__;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(92);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(98);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(105);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(104);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(108);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__36__;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(101);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/e-remove.svg";

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();





var IconBell = function IconBell(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "icon-bell"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M10 14c0 1.1-.9 2-2 2s-2-.9-2-2h4zm5-3c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1s.4-1 1-1h.5C2.2 10.3 3 9.3 3 8V5c0-2.8 2.2-5 5-5s5 2.2 5 5v3c0 1.3.8 2.3 1.5 3h.5z",
    id: "a"
  })));
};

IconBell.defaultProps = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};


var NotificationButton = function NotificationButton(_ref) {
  var className = _ref.className,
      state = _ref.state,
      onClick = _ref.onClick,
      notificationsPopupOpen = _ref.notificationsPopupOpen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.notificationButton, _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a[state], notificationsPopupOpen && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.isNotificationsPopupOpen, className),
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconBell, null));
};

NotificationButton.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['none', 'new', 'seen']),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  notificationsPopupOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
var _default = NotificationButton;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotificationButton, "NotificationButton", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationButton\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationButton\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();





var IconAvatar = function IconAvatar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Group"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: "#F1F0F0",
    width: "30",
    height: "30",
    rx: "15"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    mask: "url(#mask-2)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.897 24.14a6.952 6.952 0 0 1 6.952 6.953V33H7.945v-1.907a6.952 6.952 0 0 1 6.952-6.952z",
    fill: "#FFF",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M21.278 32.396v-3.222c0-2.446-1.876-4.429-4.19-4.429h-4.382c-2.314 0-4.19 1.983-4.19 4.43v3.221h12.762zm-8.572-8.255h4.381c2.63 0 4.762 2.254 4.762 5.033V33H7.945v-3.826c0-2.78 2.131-5.033 4.761-5.033z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.516 21.926h4.952v3.45a2.476 2.476 0 1 1-4.952 0v-3.45z",
    fill: "#F8DAC5",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.087 25.235c0 1.112.853 2.013 1.905 2.013s1.905-.901 1.905-2.013V22.53h-3.81v2.705zm-.571-3.309h4.952v3.309c0 1.445-1.108 2.617-2.476 2.617-1.367 0-2.476-1.172-2.476-2.617v-3.309zM9.087 12.765v1.007c-.578 0-1.047.496-1.047 1.107 0 .612.469 1.108 1.047 1.108v1.006c-1.104 0-2-.946-2-2.114 0-1.167.896-2.114 2-2.114zM20.905 12.765v1.007c.578 0 1.047.496 1.047 1.107 0 .612-.469 1.108-1.047 1.108v1.006c1.104 0 2-.946 2-2.114 0-1.167-.896-2.114-2-2.114z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.524 8.235l3.238-2.416L15 5.416l3.238.403 3.238 2.416v9.832a6.476 6.476 0 0 1-12.952 0V8.235z",
    fill: "#F8DAC5",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.278 18.407v.499c1.334 0 2.5-.722 3.128-1.798a5.395 5.395 0 0 1 1.062.027v.563c0 1.295-.34 2.507-.931 3.54-1.135 1.981-3.194 3.306-5.545 3.306s-4.41-1.325-5.544-3.307a7.108 7.108 0 0 1-.932-3.539v-.596a5.404 5.404 0 0 1 .582 0c.099 1.014.91 1.804 1.894 1.804h1.714v-.144c.215.22.413.456.592.709a8.895 8.895 0 0 1 3.05-.059c.271-.373.584-.71.93-1.005z",
    fill: "#5D5D66",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.8 19.78l-.204.28-.33-.05a8.371 8.371 0 0 0-2.865.055l-.348.067-.212-.299a5.319 5.319 0 0 0-.249-.323h-1.6a2.416 2.416 0 0 1-1.837-.862c.117.81.382 1.58.781 2.277 1.064 1.857 2.965 3.015 5.056 3.015s3.993-1.158 5.056-3.015a6.422 6.422 0 0 0 .781-2.277 2.416 2.416 0 0 1-1.837.862h-1.98a5.315 5.315 0 0 0-.212.27zm-7.998-2.082c.089 0 .178.002.266.007l.02-.396v-.206l-.559.061c.018.186.055.365.107.537.055-.002.11-.003.166-.003zm12.538.03a2.74 2.74 0 0 0 .116-.573l-.182-.02h-.377v.563c.148.004.296.014.443.03zm-10.348 1.178h1.714v-.144c.215.22.413.456.592.709a8.895 8.895 0 0 1 3.05-.059c.271-.373.584-.71.93-1.005v.499h1.714c.988 0 1.8-.794 1.895-1.811.197.003.39.016.581.04v.563c0 1.295-.34 2.507-.931 3.54-1.135 1.981-3.194 3.306-5.545 3.306s-4.41-1.325-5.544-3.307a7.108 7.108 0 0 1-.932-3.539v-.596a5.404 5.404 0 0 1 .582 0c.099 1.014.91 1.804 1.894 1.804z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.468 17.698c0 3.225 2.473 5.839 5.524 5.839 3.05 0 5.524-2.614 5.524-5.839V8.757l-2.637-1.968-2.887-.36-2.886.36-2.638 1.968v8.941zm-.952-9.463l3.238-2.416 3.238-.403 3.238.403 3.238 2.416v9.463c0 3.78-2.9 6.846-6.476 6.846-3.577 0-6.476-3.065-6.476-6.846V8.235z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.325 21.11v-.237c0-1.198.919-2.168 2.052-2.168h1.611c1.133 0 2.052.97 2.052 2.168v.245",
    fill: "#5D5D66",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.234 20.517c.072-1.288 1.023-2.316 2.196-2.316h1.505c1.173 0 2.125 1.028 2.196 2.316h-.573c-.069-.962-.773-1.712-1.623-1.712H14.43c-.85 0-1.554.75-1.623 1.712h-.573z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.524 10.047c0-1.356-1.015-2.462-2.286-2.515a2.324 2.324 0 0 0-1.898.87 2.281 2.281 0 0 1-2.68 0 2.324 2.324 0 0 0-1.898-.87c-1.27.053-2.286 1.159-2.286 2.515v4.63h-.571c-1.348 0-1.52-3.13-1.524-3.22C7.191 6.382 10.477 3 15 3s7.81 3.383 7.619 8.456c-.053 1.422-.262 2.82-1.524 2.82h-.571v-4.229z",
    fill: "#37373D",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M22.048 11.432c.174-4.64-2.762-7.828-7.048-7.828s-7.222 3.188-7.048 7.828c.003.072.019.27.046.488.043.351.106.7.19 1.017.201.752.47 1.137.717 1.137v-4.027c0-1.677 1.254-3.053 2.834-3.118l.118-.003c.84 0 1.625.374 2.18 1.016a1.728 1.728 0 0 0 1.927 0 2.876 2.876 0 0 1 2.297-1.013c1.58.065 2.834 1.44 2.834 3.118v3.624c.635 0 .893-.626.953-2.239zm-1.524-1.385c0-1.356-1.015-2.462-2.286-2.515a2.324 2.324 0 0 0-1.898.87 2.281 2.281 0 0 1-2.68 0 2.324 2.324 0 0 0-1.898-.87c-1.27.053-2.286 1.159-2.286 2.515v4.63h-.571c-1.348 0-1.52-3.13-1.524-3.22C7.191 6.382 10.477 3 15 3s7.81 3.383 7.619 8.456c-.053 1.422-.262 2.82-1.524 2.82h-.571v-4.229z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11 12.06a.294.294 0 0 1-.286-.302c0-.166.128-.302.286-.302h2.286c.158 0 .285.136.285.302a.294.294 0 0 1-.285.302H11zM16.905 12.06a.294.294 0 0 1-.286-.302c0-.166.128-.302.286-.302h2.285c.158 0 .286.136.286.302a.294.294 0 0 1-.286.302h-2.285zM13.85 17.225a.31.31 0 0 1 .131-.403.279.279 0 0 1 .382.139c.119.258.401.435.724.435a.79.79 0 0 0 .722-.43c.07-.15.242-.21.383-.135a.31.31 0 0 1 .128.405c-.22.465-.7.764-1.233.764-.537 0-1.02-.304-1.238-.775zM13.542 19.987a.31.31 0 0 1-.144-.399.28.28 0 0 1 .377-.152c.405.19.853.291 1.318.291.461 0 .906-.099 1.308-.286a.28.28 0 0 1 .376.154.309.309 0 0 1-.146.398 3.631 3.631 0 0 1-1.538.338 3.63 3.63 0 0 1-1.55-.344zM14.706 21.322a.294.294 0 0 1-.285-.302c0-.167.128-.302.285-.302h.762c.158 0 .286.135.286.302a.294.294 0 0 1-.286.302h-.762zM16.802 13.067v-.604h3.81v.604zM9.183 13.067v-.604h3.81v.604zM13.85 13.47v-.604h2.095v.604z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.387 12.463h2.748v1.646a2.381 2.381 0 0 1-2.381 2.38h-.367a2.013 2.013 0 1 1 0-4.027zM9.85 12.463h2.748a2.013 2.013 0 1 1 0 4.027h-.368a2.381 2.381 0 0 1-2.38-2.381v-1.646z",
    fillOpacity: ".3",
    fill: "#FFF",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.325 13.067c-.21 0-.38.18-.38.403v2.013c0 .223.17.403.38.403h2.858c.21 0 .38-.18.38-.403v-2.416h-3.238zm0-.604h3.81v3.02c0 .556-.426 1.007-.952 1.007h-2.858c-.526 0-.952-.45-.952-1.007V13.47c0-.556.426-1.007.952-1.007zM10.42 15.483c0 .223.171.403.382.403h2.857c.21 0 .38-.18.38-.403V13.47a.392.392 0 0 0-.38-.403H10.42v2.416zm-.57-3.02h3.809c.526 0 .952.45.952 1.007v2.013c0 .556-.426 1.007-.952 1.007h-2.857c-.526 0-.953-.45-.953-1.007v-3.02z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.14 14.687a.303.303 0 0 1-.215.362.286.286 0 0 1-.342-.226c-.03-.133-.18-.246-.37-.246-.191 0-.342.113-.371.247a.286.286 0 0 1-.343.226.303.303 0 0 1-.214-.362c.092-.422.483-.715.927-.715.444 0 .835.293.927.714zM18.663 14.687a.303.303 0 0 1-.214.362.286.286 0 0 1-.343-.226c-.029-.133-.18-.246-.37-.246s-.341.113-.37.247a.286.286 0 0 1-.343.226.303.303 0 0 1-.214-.362c.092-.422.483-.715.927-.715.444 0 .835.293.927.714z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.36 30.44a4.747 4.747 0 0 0-.308-.793c.478-.123.803-.052.87.23.052.222-.051.586-.274.985-.039.07-.083.109-.131.123a11.407 11.407 0 0 0-.157-.544zm-1.26-.484l-.081.052a3.465 3.465 0 0 0-.888-.429c.268-.384.589-.606.888-.606.33 0 .628.199.89.606a3.465 3.465 0 0 0-.808.377zm-1.115-.308c-.218.375-.434 1.006-.458 1.339-.051-.012-.098-.052-.139-.125-.223-.4-.326-.763-.273-.985.067-.282.392-.353.87-.23zm1.16.393c.242-.151.633-.327.822-.371.015.025.03.054.047.085.066.132.138.312.211.53a11.02 11.02 0 0 1 .21.7.314.314 0 0 1-.09-.039.576.576 0 0 1-.094-.073c-.585-.536-.623-.569-.825-.693a1.33 1.33 0 0 0-.288-.136l.006-.003zm-1.54.944c.026-.323.251-.966.467-1.314.21.05.563.215.816.371-.227.07-.437.226-.747.518l-.174.164c-.064.06-.117.108-.168.15a.529.529 0 0 1-.195.11z",
    fill: "#262628"
  }))));
};

IconAvatar.defaultProps = {
  width: "30",
  height: "30",
  viewBox: "0 0 30 30",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconArrowSmalldown = function IconArrowSmalldown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "arrow-small-down"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M8 11.4L2.6 6 4 4.6l4 4 4-4L13.4 6z",
    transform: "translate(-2 -4)",
    id: "a"
  }));
};

IconArrowSmalldown.defaultProps = {
  width: "12",
  height: "8",
  viewBox: "0 0 12 8",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconArrowSmallup = function IconArrowSmallup(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "arrow-small-up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "rotate(180 7 6)",
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M8 11.4L2.6 6 4 4.6l4 4 4-4L13.4 6z",
    id: "a"
  }));
};

IconArrowSmallup.defaultProps = {
  width: "12",
  height: "8",
  viewBox: "0 0 12 8",
  xmlns: "http://www.w3.org/2000/svg"
};



var UserInfo = function UserInfo(_ref) {
  var profile = _ref.profile,
      onClick = _ref.onClick,
      open = _ref.open,
      newNotifications = _ref.newNotifications;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.userInfoContainer,
    role: "button",
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatarContainer, newNotifications && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.newNotifications)
  }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(profile) || lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(profile.photoURL) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconAvatar, {
    width: "60",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['avatar']
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
    src: profile.photoURL,
    alt: "avatar"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.handleContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.handle
  }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(profile) ? '' : profile.handle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dropdownIcon
  }, open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconArrowSmallup, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconArrowSmalldown, null))));
};

UserInfo.propTypes = {
  profile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  newNotifications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
var _default = UserInfo;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserInfo, "UserInfo", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\UserInfo\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\UserInfo\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(90);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(96);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(106);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/flat-icon-checked.svg";

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);






(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();







var IconAvatar = function IconAvatar(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, "Group"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("rect", {
    fill: "#F1F0F0",
    width: "30",
    height: "30",
    rx: "15"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
    mask: "url(#mask-2)"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M14.897 24.14a6.952 6.952 0 0 1 6.952 6.953V33H7.945v-1.907a6.952 6.952 0 0 1 6.952-6.952z",
    fill: "#FFF",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M21.278 32.396v-3.222c0-2.446-1.876-4.429-4.19-4.429h-4.382c-2.314 0-4.19 1.983-4.19 4.43v3.221h12.762zm-8.572-8.255h4.381c2.63 0 4.762 2.254 4.762 5.033V33H7.945v-3.826c0-2.78 2.131-5.033 4.761-5.033z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M12.516 21.926h4.952v3.45a2.476 2.476 0 1 1-4.952 0v-3.45z",
    fill: "#F8DAC5",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M13.087 25.235c0 1.112.853 2.013 1.905 2.013s1.905-.901 1.905-2.013V22.53h-3.81v2.705zm-.571-3.309h4.952v3.309c0 1.445-1.108 2.617-2.476 2.617-1.367 0-2.476-1.172-2.476-2.617v-3.309zM9.087 12.765v1.007c-.578 0-1.047.496-1.047 1.107 0 .612.469 1.108 1.047 1.108v1.006c-1.104 0-2-.946-2-2.114 0-1.167.896-2.114 2-2.114zM20.905 12.765v1.007c.578 0 1.047.496 1.047 1.107 0 .612-.469 1.108-1.047 1.108v1.006c1.104 0 2-.946 2-2.114 0-1.167-.896-2.114-2-2.114z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M8.524 8.235l3.238-2.416L15 5.416l3.238.403 3.238 2.416v9.832a6.476 6.476 0 0 1-12.952 0V8.235z",
    fill: "#F8DAC5",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M17.278 18.407v.499c1.334 0 2.5-.722 3.128-1.798a5.395 5.395 0 0 1 1.062.027v.563c0 1.295-.34 2.507-.931 3.54-1.135 1.981-3.194 3.306-5.545 3.306s-4.41-1.325-5.544-3.307a7.108 7.108 0 0 1-.932-3.539v-.596a5.404 5.404 0 0 1 .582 0c.099 1.014.91 1.804 1.894 1.804h1.714v-.144c.215.22.413.456.592.709a8.895 8.895 0 0 1 3.05-.059c.271-.373.584-.71.93-1.005z",
    fill: "#5D5D66",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M16.8 19.78l-.204.28-.33-.05a8.371 8.371 0 0 0-2.865.055l-.348.067-.212-.299a5.319 5.319 0 0 0-.249-.323h-1.6a2.416 2.416 0 0 1-1.837-.862c.117.81.382 1.58.781 2.277 1.064 1.857 2.965 3.015 5.056 3.015s3.993-1.158 5.056-3.015a6.422 6.422 0 0 0 .781-2.277 2.416 2.416 0 0 1-1.837.862h-1.98a5.315 5.315 0 0 0-.212.27zm-7.998-2.082c.089 0 .178.002.266.007l.02-.396v-.206l-.559.061c.018.186.055.365.107.537.055-.002.11-.003.166-.003zm12.538.03a2.74 2.74 0 0 0 .116-.573l-.182-.02h-.377v.563c.148.004.296.014.443.03zm-10.348 1.178h1.714v-.144c.215.22.413.456.592.709a8.895 8.895 0 0 1 3.05-.059c.271-.373.584-.71.93-1.005v.499h1.714c.988 0 1.8-.794 1.895-1.811.197.003.39.016.581.04v.563c0 1.295-.34 2.507-.931 3.54-1.135 1.981-3.194 3.306-5.545 3.306s-4.41-1.325-5.544-3.307a7.108 7.108 0 0 1-.932-3.539v-.596a5.404 5.404 0 0 1 .582 0c.099 1.014.91 1.804 1.894 1.804z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M9.468 17.698c0 3.225 2.473 5.839 5.524 5.839 3.05 0 5.524-2.614 5.524-5.839V8.757l-2.637-1.968-2.887-.36-2.886.36-2.638 1.968v8.941zm-.952-9.463l3.238-2.416 3.238-.403 3.238.403 3.238 2.416v9.463c0 3.78-2.9 6.846-6.476 6.846-3.577 0-6.476-3.065-6.476-6.846V8.235z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M12.325 21.11v-.237c0-1.198.919-2.168 2.052-2.168h1.611c1.133 0 2.052.97 2.052 2.168v.245",
    fill: "#5D5D66",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M12.234 20.517c.072-1.288 1.023-2.316 2.196-2.316h1.505c1.173 0 2.125 1.028 2.196 2.316h-.573c-.069-.962-.773-1.712-1.623-1.712H14.43c-.85 0-1.554.75-1.623 1.712h-.573z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M20.524 10.047c0-1.356-1.015-2.462-2.286-2.515a2.324 2.324 0 0 0-1.898.87 2.281 2.281 0 0 1-2.68 0 2.324 2.324 0 0 0-1.898-.87c-1.27.053-2.286 1.159-2.286 2.515v4.63h-.571c-1.348 0-1.52-3.13-1.524-3.22C7.191 6.382 10.477 3 15 3s7.81 3.383 7.619 8.456c-.053 1.422-.262 2.82-1.524 2.82h-.571v-4.229z",
    fill: "#37373D",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M22.048 11.432c.174-4.64-2.762-7.828-7.048-7.828s-7.222 3.188-7.048 7.828c.003.072.019.27.046.488.043.351.106.7.19 1.017.201.752.47 1.137.717 1.137v-4.027c0-1.677 1.254-3.053 2.834-3.118l.118-.003c.84 0 1.625.374 2.18 1.016a1.728 1.728 0 0 0 1.927 0 2.876 2.876 0 0 1 2.297-1.013c1.58.065 2.834 1.44 2.834 3.118v3.624c.635 0 .893-.626.953-2.239zm-1.524-1.385c0-1.356-1.015-2.462-2.286-2.515a2.324 2.324 0 0 0-1.898.87 2.281 2.281 0 0 1-2.68 0 2.324 2.324 0 0 0-1.898-.87c-1.27.053-2.286 1.159-2.286 2.515v4.63h-.571c-1.348 0-1.52-3.13-1.524-3.22C7.191 6.382 10.477 3 15 3s7.81 3.383 7.619 8.456c-.053 1.422-.262 2.82-1.524 2.82h-.571v-4.229z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M11 12.06a.294.294 0 0 1-.286-.302c0-.166.128-.302.286-.302h2.286c.158 0 .285.136.285.302a.294.294 0 0 1-.285.302H11zM16.905 12.06a.294.294 0 0 1-.286-.302c0-.166.128-.302.286-.302h2.285c.158 0 .286.136.286.302a.294.294 0 0 1-.286.302h-2.285zM13.85 17.225a.31.31 0 0 1 .131-.403.279.279 0 0 1 .382.139c.119.258.401.435.724.435a.79.79 0 0 0 .722-.43c.07-.15.242-.21.383-.135a.31.31 0 0 1 .128.405c-.22.465-.7.764-1.233.764-.537 0-1.02-.304-1.238-.775zM13.542 19.987a.31.31 0 0 1-.144-.399.28.28 0 0 1 .377-.152c.405.19.853.291 1.318.291.461 0 .906-.099 1.308-.286a.28.28 0 0 1 .376.154.309.309 0 0 1-.146.398 3.631 3.631 0 0 1-1.538.338 3.63 3.63 0 0 1-1.55-.344zM14.706 21.322a.294.294 0 0 1-.285-.302c0-.167.128-.302.285-.302h.762c.158 0 .286.135.286.302a.294.294 0 0 1-.286.302h-.762zM16.802 13.067v-.604h3.81v.604zM9.183 13.067v-.604h3.81v.604zM13.85 13.47v-.604h2.095v.604z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M17.387 12.463h2.748v1.646a2.381 2.381 0 0 1-2.381 2.38h-.367a2.013 2.013 0 1 1 0-4.027zM9.85 12.463h2.748a2.013 2.013 0 1 1 0 4.027h-.368a2.381 2.381 0 0 1-2.38-2.381v-1.646z",
    fillOpacity: ".3",
    fill: "#FFF",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M16.325 13.067c-.21 0-.38.18-.38.403v2.013c0 .223.17.403.38.403h2.858c.21 0 .38-.18.38-.403v-2.416h-3.238zm0-.604h3.81v3.02c0 .556-.426 1.007-.952 1.007h-2.858c-.526 0-.952-.45-.952-1.007V13.47c0-.556.426-1.007.952-1.007zM10.42 15.483c0 .223.171.403.382.403h2.857c.21 0 .38-.18.38-.403V13.47a.392.392 0 0 0-.38-.403H10.42v2.416zm-.57-3.02h3.809c.526 0 .952.45.952 1.007v2.013c0 .556-.426 1.007-.952 1.007h-2.857c-.526 0-.953-.45-.953-1.007v-3.02z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M13.14 14.687a.303.303 0 0 1-.215.362.286.286 0 0 1-.342-.226c-.03-.133-.18-.246-.37-.246-.191 0-.342.113-.371.247a.286.286 0 0 1-.343.226.303.303 0 0 1-.214-.362c.092-.422.483-.715.927-.715.444 0 .835.293.927.714zM18.663 14.687a.303.303 0 0 1-.214.362.286.286 0 0 1-.343-.226c-.029-.133-.18-.246-.37-.246s-.341.113-.37.247a.286.286 0 0 1-.343.226.303.303 0 0 1-.214-.362c.092-.422.483-.715.927-.715.444 0 .835.293.927.714z",
    fill: "#262628",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M16.36 30.44a4.747 4.747 0 0 0-.308-.793c.478-.123.803-.052.87.23.052.222-.051.586-.274.985-.039.07-.083.109-.131.123a11.407 11.407 0 0 0-.157-.544zm-1.26-.484l-.081.052a3.465 3.465 0 0 0-.888-.429c.268-.384.589-.606.888-.606.33 0 .628.199.89.606a3.465 3.465 0 0 0-.808.377zm-1.115-.308c-.218.375-.434 1.006-.458 1.339-.051-.012-.098-.052-.139-.125-.223-.4-.326-.763-.273-.985.067-.282.392-.353.87-.23zm1.16.393c.242-.151.633-.327.822-.371.015.025.03.054.047.085.066.132.138.312.211.53a11.02 11.02 0 0 1 .21.7.314.314 0 0 1-.09-.039.576.576 0 0 1-.094-.073c-.585-.536-.623-.569-.825-.693a1.33 1.33 0 0 0-.288-.136l.006-.003zm-1.54.944c.026-.323.251-.966.467-1.314.21.05.563.215.816.371-.227.07-.437.226-.747.518l-.174.164c-.064.06-.117.108-.168.15a.529.529 0 0 1-.195.11z",
    fill: "#262628"
  }))));
};

IconAvatar.defaultProps = {
  width: "30",
  height: "30",
  viewBox: "0 0 30 30",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconCloseDark = function IconCloseDark(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, "e-remove"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M15.7.3c-.4-.4-1-.4-1.4 0L8 6.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L6.6 8 .3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L8 9.4l6.3 6.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L9.4 8l6.3-6.3c.4-.4.4-1 0-1.4z",
    fill: "#2A2A2A",
    fillRule: "nonzero"
  }));
};

IconCloseDark.defaultProps = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconSwitchBusiness = function IconSwitchBusiness(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, "swap-horizontal"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
    fill: "#FFF",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
    d: "M5 3V0L0 4l5 4V5h8a1 1 0 0 0 0-2H5zM11 11H3a1 1 0 0 0 0 2h8v3l5-4-5-4v3z"
  })));
};

IconSwitchBusiness.defaultProps = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

 // The roles of managers/copilots/admins.

var MANAGE_ROLES = ['administrator', 'admin', 'copilot', 'connect copilot', 'manager', 'global manager', 'client manager', 'connect manager'];

var hasAccess = function hasAccess(roles) {
  if (!roles) {
    return false;
  }

  return roles.some(function (v) {
    return MANAGE_ROLES.indexOf(v.toLowerCase()) !== -1;
  });
};

var AccountMenu =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AccountMenu, _React$Component);

  function AccountMenu() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AccountMenu);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AccountMenu).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AccountMenu, [{
    key: "renderLink",
    value: function renderLink(menu, i) {
      var onClose = this.props.onClose;
      var to = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(menu.link) ? menu.href : menu.link;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: to,
        key: "item-".concat(i),
        onClick: onClose
      }, menu.title);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          onClose = _this$props.onClose,
          open = _this$props.open,
          menu = _this$props.menu,
          switchText = _this$props.switchText,
          onSwitch = _this$props.onSwitch,
          profile = _this$props.profile;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['user-info-popup'], open && _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.open)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.backdrop,
        onClick: onClose
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) ? '/' : "/members/".concat(profile.handle)
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['header']
      }, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) || lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile.photoURL) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconAvatar, {
        width: "60",
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['avatar']
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: profile.photoURL,
        width: "60",
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['avatar'],
        alt: "avatar"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['handle-container']
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['handle']
      }, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) ? '' : profile.handle), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['email']
      }, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) ? '' : profile.email)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['header'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['header-mobile'])
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['left-content']
      }, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) || lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile.photoURL) ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconAvatar, {
        width: "60",
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['avatar']
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: profile.photoURL,
        width: "60",
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['avatar'],
        alt: "avatar"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['handle-container']
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['handle']
      }, "@", lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) ? '' : profile.handle), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['description']
      }, lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) ? '' : "Member since ".concat(moment__WEBPACK_IMPORTED_MODULE_11___default()(profile.createdAt).format('MMMM, YYYY'))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        role: "button",
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['icon-close'],
        onClick: onClose
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconCloseDark, null))), !lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(profile) && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        role: "button",
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['switch-to-business-container'],
        onClick: onSwitch
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IconSwitchBusiness, {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['switch-icon']
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: hasAccess(profile.roles) ? lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isEmpty(switchText.href) ? switchText.link : switchText.href : 'http://www.topcoder.com',
        onClick: onClose
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a['switch-to-busniness']
      }, switchText.title))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.menu
      }, menu.map(function (item, i) {
        return item.separator ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.separator,
          key: "separator-".concat(i)
        }) : _this.renderLink(item, i);
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AccountMenu;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

AccountMenu.defaultProps = {
  numNotifications: 35
};
AccountMenu.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
  switchText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape(),
  onSwitch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape()
};
var _default = AccountMenu;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MANAGE_ROLES, "MANAGE_ROLES", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\AccountMenu\\index.js");
  reactHotLoader.register(hasAccess, "hasAccess", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\AccountMenu\\index.js");
  reactHotLoader.register(AccountMenu, "AccountMenu", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\AccountMenu\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\AccountMenu\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();






var CheckBox = function CheckBox(_ref) {
  var checked = _ref.checked,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['checkbox'],
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['check-icon'], checked && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['checked'])
  }));
};

CheckBox.propTypes = {
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = CheckBox;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CheckBox, "CheckBox", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\CheckBox\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\CheckBox\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();





var ChosenArrow = function ChosenArrow(_ref) {
  var show = _ref.show,
      x = _ref.x;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.chosenArrow,
    style: {
      transform: "translateX(calc(".concat(x, "px - 50%))")
    },
    hidden: !show
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "40px",
    height: "10px",
    viewBox: "0 0 40 10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Desktop-navigation-specification",
    transform: "translate(-229.000000, -1000.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M244,1003.53788 L246.138913,1001.25575 C247.682763,999.608539 250.215252,999.577876 251.795386,1001.18726 C251.81754,1001.20983 251.839442,1001.23266 251.861087,1001.25575 L254,1003.53788 C257.197411,1006.94936 260.579378,1009 266.154646,1009 L269,1009 L269,1010 L229,1010 L229,1009 L231.845354,1009 C237.420622,1009 240.802589,1006.94936 244,1003.53788 Z",
    id: "Path-3"
  })))));
};

ChosenArrow.propTypes = {
  /** Show or hide the arrow */
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** The x position of the arrow. Generally this will be the center of the target */
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
var _default = ChosenArrow;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChosenArrow, "ChosenArrow", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\ChosenArrow\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\ChosenArrow\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();






var optionLabel = function optionLabel(value, options) {
  var opt = options.find(function (x) {
    return x.value === value;
  });
  return opt && opt.label;
};

var DropdownBox = function DropdownBox(_ref) {
  var open = _ref.open,
      onClick = _ref.onClick,
      onClose = _ref.onClose,
      checked = _ref.checked,
      value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange;

  var handleClick = function handleClick(e) {
    return !e.defaultPrevented && onClick();
  };

  var handleClose = function handleClose(e) {
    e.preventDefault();
    onClose();
  };

  var createHandleChange = function createHandleChange(value) {
    return function (e) {
      e.preventDefault();
      onClose();
      onChange(value);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['dropdown-box'], checked && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['checked'], open && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['open']),
    onClick: handleClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['backdrop'],
    onClick: handleClose
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['selected-label']
  }, optionLabel(value, options), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['dropdown-arrow']
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['options']
  }, options.map(function (opt) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['option-li'], opt.value === value && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['active']),
      key: opt.value,
      onClick: createHandleChange(opt.value)
    }, opt.label);
  })));
};

DropdownBox.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = DropdownBox;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(optionLabel, "optionLabel", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\DropdownBox\\index.js");
  reactHotLoader.register(DropdownBox, "DropdownBox", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\DropdownBox\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\DropdownBox\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();





var IconSelect = function IconSelect(_ref) {
  var show = _ref.show,
      x = _ref.x;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.iconSelect,
    style: {
      transform: "translateX(calc(".concat(x, "px - 50%))")
    },
    hidden: !show
  });
};

IconSelect.propTypes = {
  /** Show or hide the icon */
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** The x position of the arrow. Generally this will be the center of the target */
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
var _default = IconSelect;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IconSelect, "IconSelect", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\IconSelect\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\IconSelect\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EmptyNotifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var _NotificationList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();








var NotificationsPopup = function NotificationsPopup(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      emptyTitle = _ref.emptyTitle,
      emptyText = _ref.emptyText,
      notifications = _ref.notifications;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['notifications-panel'], open && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.open)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.backdrop,
    onClick: onClose
  }), notifications && notifications.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotificationList__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    notifications: notifications,
    onClose: onClose
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmptyNotifications__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    emptyTitle: emptyTitle,
    emptyText: emptyText,
    onClose: onClose
  }));
};

NotificationsPopup.defaultProps = {
  emptyTitle: 'Good job! You’re all caught up',
  emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Join challenges and check your notification settings if you don\u2019t receive notifications. We\u2019re actively adding new notifications. Read our ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blueLink
  }, "blog post"), " for more info")
};
NotificationsPopup.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  emptyTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  emptyText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Array of Notifications, each with properties:
   *
   *   - content {string|node}
   *   - category {array}
   *   - tags {array}
   *   - timestamp {number}
  */
  notifications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
var _default = NotificationsPopup;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotificationsPopup, "NotificationsPopup", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();






var SwitchBox = function SwitchBox(_ref) {
  var checked = _ref.checked,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['switch-box'], checked && _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['checked']),
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['label-on']
  }, "on"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['dot']
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['label-off']
  }, "off"));
};

SwitchBox.propTypes = {
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = SwitchBox;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwitchBox, "SwitchBox", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\SwitchBox\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\SwitchBox\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(95);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(103);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-bell-red.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/right-arrow.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/flat-icon-opposite-arrows.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-bell.svg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bell-big.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/delete-small.svg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/group.svg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/left-arrow.svg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-settings-gear.svg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bell-black.svg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-email.svg";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__66__;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__67__;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__68__;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__69__;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__70__;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(91);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(93);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();






var EmptyNotifications = function EmptyNotifications(_ref) {
  var onClose = _ref.onClose,
      emptyTitle = _ref.emptyTitle,
      emptyText = _ref.emptyText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['noti-header']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['notification-back-btn'],
    role: "button",
    onClick: onClose
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['left-noti']
  }, "Notifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.rights
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['white-link'],
    role: "button"
  }, "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['btn-setting'],
    role: "button"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['noti-body'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.center)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icons, _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['icon-bell'])
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.titles
  }, emptyTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.txt, _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['center-txt'])
  }, emptyText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['noti-footer']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btn, _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a['btn-blue']),
    role: "button"
  }, "Notification Settings")));
};

EmptyNotifications.defaultProps = {
  emptyTitle: 'Good job! You’re all caught up',
  emptyText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Join challenges and check your notification settings if you don\u2019t receive notifications. We\u2019re actively adding new notifications. Read our ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blueLink
  }, "blog post"), " for more info")
};
EmptyNotifications.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  emptyTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  emptyText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
var _default = EmptyNotifications;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmptyNotifications, "EmptyNotifications", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\EmptyNotifications.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\EmptyNotifications.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();








var LightBar = function LightBar(_ref) {
  var title = _ref.title,
      onDismiss = _ref.onDismiss;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['light-bar']
  }, title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['green-link'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['mobile-only'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dismissSection),
    onClick: onDismiss
  }, "Dismiss All"));
};

LightBar.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var Category = function Category(_ref2) {
  var title = _ref2.title,
      onDismiss = _ref2.onDismiss;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['grey-bar']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['copyicon-title']
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['right-remove'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dismissCategory),
    onClick: onDismiss
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['btn-close']
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['black-txt']
  }, "Dismiss notification")));
};

Category.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var Item = function Item(_ref3) {
  var item = _ref3.item,
      onDismiss = _ref3.onDismiss;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['items']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: item.href,
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['item-content']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['txt']
  }, item.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['bottom-info']
  }, item.tags && item.tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['blue-squre'],
      key: tag
    }, tag);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['time-txt']
  }, moment__WEBPACK_IMPORTED_MODULE_4___default()(item.timestamp).fromNow())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['right-remove'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dismissItem),
    onClick: onDismiss
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['btn-close']
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['black-txt']
  }, "Dismiss notification"))));
};

Item.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var NotificationList = function NotificationList(_ref4) {
  var notifications = _ref4.notifications,
      _onDismiss = _ref4.onDismiss,
      onSettings = _ref4.onSettings,
      onClose = _ref4.onClose;

  var categories = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.uniq((notifications || []).map(function (noti) {
    return noti.category;
  }).filter(function (x) {
    return x;
  })).sort(function (a, b) {
    return a.localeCompare(b);
  });

  var newest = notifications.filter(function (x) {
    return x.timestamp > moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'day').valueOf();
  });
  var earlier = notifications.filter(function (x) {
    return x.timestamp < moment__WEBPACK_IMPORTED_MODULE_4___default()().subtract(1, 'day').valueOf();
  });
  var sections = [{
    title: 'New',
    list: newest
  }, {
    title: 'Earlier',
    list: earlier
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['noti-header']
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['notification-back-btn'],
    role: "button",
    onClick: onClose
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['left-noti']
  }, "Notifications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.rights
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['white-link'],
    onClick: function onClick() {
      return _onDismiss(notifications);
    }
  }, "Dismiss All"), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.point
  }), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['white-link'],
    onClick: onSettings
  }, "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['btn-setting']
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['noti-body']
  }, sections.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: section.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LightBar, {
      title: section.title,
      onDismiss: function onDismiss() {
        return _onDismiss(section.list);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['lightblue-section']
    }, section.list.filter(function (x) {
      return !x.category;
    }).map(function (item, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
        item: item,
        key: "noti-".concat(i),
        onDismiss: function onDismiss() {
          return _onDismiss([item]);
        }
      });
    })), categories.map(function (category) {
      var items = section.list.filter(function (x) {
        return x.category === category;
      });
      if (!items.length) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['greybar-section'],
        key: category
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
        title: "".concat(category, " (").concat(items.length, ")"),
        onDismiss: function onDismiss() {
          return _onDismiss(items);
        }
      }), items.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
          item: item,
          key: "noti-".concat(i),
          onDismiss: function onDismiss() {
            return _onDismiss([item]);
          }
        });
      }));
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a['end-message'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.center)
  }, "You have no more notifications")));
};

NotificationList.defaultProps = {
  notifications: [],
  onDismiss: function onDismiss() {
    return null;
  }
};
NotificationList.propTypes = {
  /**
   * Array of Notifications, each with properties:
   *
   *   - content {string|node}
   *   - href {string} href for the item's wrapper anchor
   *   - category {array}
   *   - tags {array}
   *   - timestamp {number}
  */
  notifications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,

  /**
   * Called with array of items to be dismissed.
   *
   * @param items {array} Items to be dismissed
   */
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** Called on Settings button click */
  onSettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = NotificationList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LightBar, "LightBar", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\NotificationList.js");
  reactHotLoader.register(Category, "Category", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\NotificationList.js");
  reactHotLoader.register(Item, "Item", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\NotificationList.js");
  reactHotLoader.register(NotificationList, "NotificationList", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\NotificationList.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationsPopup\\NotificationList.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__75__;

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();





var IconClose = function IconClose(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "e-remove"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.7.3c-.4-.4-1-.4-1.4 0L8 6.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L6.6 8 .3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L8 9.4l6.3 6.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L9.4 8l6.3-6.3c.4-.4.4-1 0-1.4z",
    fill: "#FFF",
    fillRule: "nonzero"
  }));
};

IconClose.defaultProps = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconMenu = function IconMenu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "menu-8"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#FFF",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23 9H1c-.6 0-1-.4-1-1s.4-1 1-1h22c.6 0 1 .4 1 1s-.4 1-1 1zM23 2H1c-.6 0-1-.4-1-1s.4-1 1-1h22c.6 0 1 .4 1 1s-.4 1-1 1zM23 16H1c-.6 0-1-.4-1-1s.4-1 1-1h22c.6 0 1 .4 1 1s-.4 1-1 1z"
  })));
};

IconMenu.defaultProps = {
  width: "24",
  height: "16",
  viewBox: "0 0 24 16",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconMagnifyingGlass = function IconMagnifyingGlass(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "ico-magnifying_glass"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.383 1.807c2.938 0 5.328 2.406 5.328 5.362 0 2.957-2.39 5.362-5.328 5.362S2.054 10.126 2.054 7.17c0-2.956 2.391-5.362 5.33-5.362M11.677 12.9a7.092 7.092 0 0 1-4.295 1.44C3.44 14.34.242 11.13.242 7.17S3.439 0 7.383 0s7.142 3.21 7.142 7.17a7.157 7.157 0 0 1-1.435 4.312l4.524 4.542-1.417 1.411-4.519-4.536z",
    fill: "#979797",
    fillRule: "evenodd"
  }));
};

IconMagnifyingGlass.defaultProps = {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  xmlns: "http://www.w3.org/2000/svg"
};


var MobileNav = function MobileNav(_ref) {
  var showLeftMenu = _ref.showLeftMenu,
      onClickLeftMenu = _ref.onClickLeftMenu,
      logo = _ref.logo,
      rightMenu = _ref.rightMenu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mobileNav
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.leftMenuContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuBtn,
    onClick: onClickLeftMenu
  }, showLeftMenu ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconClose, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconMenu, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, logo), rightMenu && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rightMenu
  }, rightMenu)), showLeftMenu && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.search
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconMagnifyingGlass, {
    className: _MobileNav_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.icon
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onKeyPress: function onKeyPress(event) {
      if (event.key === 'Enter') {
        window.location = "".concat(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_3__["config"].URL.BASE, "/search/members?q=").concat(encodeURIComponent(event.target.value));
      }
    },
    placeholder: "Find members by username or skill",
    "aria-label": "Find members by username or skill"
  })));
};

MobileNav.propTypes = {
  showLeftMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClickLeftMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  logo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  rightMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
var _default = MobileNav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MobileNav, "MobileNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\MobileNav.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\MobileNav.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();





var IconArrowSmalldown = function IconArrowSmalldown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "arrow-small-down"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M8 11.4L2.6 6 4 4.6l4 4 4-4L13.4 6z",
    transform: "translate(-2 -4)",
    id: "a"
  }));
};

IconArrowSmalldown.defaultProps = {
  width: "12",
  height: "8",
  viewBox: "0 0 12 8",
  xmlns: "http://www.w3.org/2000/svg"
};

var IconArrowSmallup = function IconArrowSmallup(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "arrow-small-up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "rotate(180 7 6)",
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M8 11.4L2.6 6 4 4.6l4 4 4-4L13.4 6z",
    id: "a"
  }));
};

IconArrowSmallup.defaultProps = {
  width: "12",
  height: "8",
  viewBox: "0 0 12 8",
  xmlns: "http://www.w3.org/2000/svg"
};


var MobileSubNav = function MobileSubNav(_ref) {
  var open = _ref.open,
      menu = _ref.menu,
      isSecondaryMenu = _ref.isSecondaryMenu,
      activeChildId = _ref.activeChildId,
      onClick = _ref.onClick,
      createHandleClickItem = _ref.createHandleClickItem;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileSubNav, open && _MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileSubNavOpen)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileSubNavMask
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileSubNavHeader,
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, menu.title), open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconArrowSmallup, null), !open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconArrowSmalldown, null)), open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileSubNavContent
  }, (isSecondaryMenu ? menu.secondaryMenu : menu.subMenu) && (isSecondaryMenu ? menu.secondaryMenu : menu.subMenu).map(function (level3, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileSubNavChild, level3.id === activeChildId && _MobileSubNav_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.mobileSubNavChildOpen),
      href: level3.href,
      key: "level3-".concat(i),
      onClick: createHandleClickItem(level3.id)
    }, level3.title);
  })));
};

MobileSubNav.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isSecondaryMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  activeChildId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  createHandleClickItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = MobileSubNav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MobileSubNav, "MobileSubNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\MobileSubNav.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\MobileSubNav.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();






var MobileMenu = function MobileMenu(_ref) {
  var menu = _ref.menu,
      activeChildId = _ref.activeChildId,
      createHandleClickItem = _ref.createHandleClickItem;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.secondaryNavMobile
  }, menu.subMenu && menu.subMenu.map(function (level2, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.secondaryNavMobileItem, level2.id === activeChildId && _MobileMenu_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.secondaryNavMobileItemOpen),
      href: level2.href,
      key: "level2-".concat(i),
      onClick: createHandleClickItem(level2.id)
    }, level2.title);
  }));
};

MobileMenu.propTypes = {
  menu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  activeChildId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  createHandleClickItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = MobileMenu;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MobileMenu, "MobileMenu", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\MobileMenu.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\MobileMenu.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var _ChosenArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _NotificationButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_7__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();







var IconArrowSmalldown = function IconArrowSmalldown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "arrow-small-down"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFF",
    fillRule: "nonzero",
    d: "M8 11.4L2.6 6 4 4.6l4 4 4-4L13.4 6z",
    transform: "translate(-2 -4)",
    id: "a"
  }));
};

IconArrowSmalldown.defaultProps = {
  width: "12",
  height: "8",
  viewBox: "0 0 12 8",
  xmlns: "http://www.w3.org/2000/svg"
};

var MagnifyingGlass = function MagnifyingGlass(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "ico-magnifying_glass"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.383 1.807c2.938 0 5.328 2.406 5.328 5.362 0 2.957-2.39 5.362-5.328 5.362S2.054 10.126 2.054 7.17c0-2.956 2.391-5.362 5.33-5.362M11.677 12.9a7.092 7.092 0 0 1-4.295 1.44C3.44 14.34.242 11.13.242 7.17S3.439 0 7.383 0s7.142 3.21 7.142 7.17a7.157 7.157 0 0 1-1.435 4.312l4.524 4.542-1.417 1.411-4.519-4.536z",
    fill: "#979797",
    fillRule: "evenodd"
  }));
};

MagnifyingGlass.defaultProps = {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  xmlns: "http://www.w3.org/2000/svg"
};



var BASE_URL = topcoder_react_utils__WEBPACK_IMPORTED_MODULE_7__["config"].URL.BASE;

var PrimaryNav = function PrimaryNav(_ref) {
  var collapsed = _ref.collapsed,
      showLeftMenu = _ref.showLeftMenu,
      logo = _ref.logo,
      menu = _ref.menu,
      rightMenu = _ref.rightMenu,
      moreMenu = _ref.moreMenu,
      openMore = _ref.openMore,
      onCloseMore = _ref.onCloseMore,
      moreId = _ref.moreId,
      activeLevel1Id = _ref.activeLevel1Id,
      activeLevel2Id = _ref.activeLevel2Id,
      onClickLogo = _ref.onClickLogo,
      onRightMenuResize = _ref.onRightMenuResize,
      createHandleClickLevel1 = _ref.createHandleClickLevel1,
      createHandleClickLevel2 = _ref.createHandleClickLevel2,
      handleClickMore = _ref.handleClickMore,
      createHandleClickMoreItem = _ref.createHandleClickMoreItem,
      createSetRef = _ref.createSetRef,
      showChosenArrow = _ref.showChosenArrow,
      chosenArrowX = _ref.chosenArrowX,
      searchOpened = _ref.searchOpened,
      toggleSearchOpen = _ref.toggleSearchOpen;

  var filterNotInMore = function filterNotInMore(menu) {
    return !(moreMenu || []).find(function (x) {
      return x.id === menu.id;
    });
  };

  var activeTrigger = {
    bottom: 50 // The main nav head bottom Y

  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryNavContainer, showLeftMenu && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryNavContainerOpen)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryNav,
    ref: createSetRef('primaryNav')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tcLogo, collapsed && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tcLogoPush),
    onClick: onClickLogo,
    href: "/"
  }, logo), menu.map(function (level1, i) {
    return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel1Separator,
      key: "separator-".concat(i)
    }),
    /* Level 1 menu item */
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel1, !activeLevel2Id && level1.id === activeLevel1Id && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel1Open, level1.mobileOnly && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mobileOnly),
      href: level1.href,
      key: "level1-".concat(i),
      onClick: createHandleClickLevel1(level1.id, true),
      ref: createSetRef(level1.id)
    }, level1.title),
    /* Level 2 menu */
    level1.subMenu && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel2Container, level1.id === activeLevel1Id && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel2ContainerOpen),
      key: "level2-".concat(i, "-container"),
      ref: createSetRef("level2Container".concat(i))
    }, level1.subMenu.filter(filterNotInMore).map(function (level2, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel2, level2.id === activeLevel2Id && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel2Open),
        href: level2.href,
        key: "level2-".concat(i),
        onClick: createHandleClickLevel2(level2.id, true),
        ref: createSetRef(level2.id)
      }, level2.title);
    }), level1.id === activeLevel1Id && moreMenu && moreMenu.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.moreBtnContainer, openMore && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.moreOpen)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.backdrop,
      onClick: onCloseMore
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel2, _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.moreBtn),
      onClick: handleClickMore,
      ref: createSetRef(moreId)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.moreBtnMask
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "More"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconArrowSmalldown, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.moreContentContainer
    }, moreMenu.map(function (menu, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel2, menu.id === activeLevel2Id && _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel2Open),
        href: menu.href,
        key: "more-item-".concat(i),
        onClick: createHandleClickMoreItem(menu.id)
      }, menu.title);
    }))))];
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChosenArrow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showChosenArrow,
    x: chosenArrowX
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryNavRight
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_resize_detector__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    handleWidth: true,
    onResize: onRightMenuResize
  }), rightMenu && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.primaryLevel1
  }, rightMenu), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-label": "Find members by username or skill",
    role: "button",
    tabIndex: 0,
    "data-menu": "search",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchIcon, {
      opened: searchOpened
    }),
    onFocus: function onFocus() {
      return toggleSearchOpen(true);
    },
    onBlur: function onBlur(event) {
      if (event.pageY < activeTrigger.bottom) {
        toggleSearchOpen(false);
      }
    },
    onMouseEnter: function onMouseEnter(event) {
      return toggleSearchOpen(true);
    },
    onMouseLeave: function onMouseLeave(event) {
      console.log("".concat(event.clientX, " - ").concat(event.clientY));

      if (event.pageY < activeTrigger.bottom) {
        toggleSearchOpen(false);
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (searchOpened) {
        toggleSearchOpen(false);
      } else {
        toggleSearchOpen(true);
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MagnifyingGlass, null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    role: "search",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PrimaryNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchField, {
      opened: searchOpened,
      closed: !searchOpened
    }),
    onMouseLeave: function onMouseLeave(event) {
      toggleSearchOpen(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: createSetRef('searchInputBox'),
    onKeyPress: function onKeyPress(event) {
      if (event.key === 'Enter') {
        window.location = "".concat(BASE_URL, "/search/members?q=").concat(encodeURIComponent(event.target.value));
      }
    },
    onBlur: function onBlur() {
      return toggleSearchOpen(false);
    },
    "aria-label": "Find members by username or skill",
    placeholder: "Find members by username or skill"
  })));
};

PrimaryNav.propTypes = {
  collapsed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showLeftMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  logo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  rightMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  moreMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  openMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onCloseMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  moreId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  activeLevel1Id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  activeLevel2Id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onClickLogo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onRightMenuResize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  createHandleClickLevel1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  createHandleClickLevel2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleClickMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  createHandleClickMoreItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  createSetRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showChosenArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  chosenArrowX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  searchOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  toggleSearchOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = PrimaryNav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BASE_URL, "BASE_URL", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\PrimaryNav.js");
  reactHotLoader.register(PrimaryNav, "PrimaryNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\PrimaryNav.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\PrimaryNav.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__80__;

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)))

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)))

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IconSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var topcoder_react_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);
/* harmony import */ var _SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();









var SubNav = function SubNav(_ref) {
  var open = _ref.open,
      menu = _ref.menu,
      isSecondaryMenu = _ref.isSecondaryMenu,
      activeChildId = _ref.activeChildId,
      showIndicator = _ref.showIndicator,
      indicatorX = _ref.indicatorX,
      createHandleClickItem = _ref.createHandleClickItem,
      createSetRef = _ref.createSetRef;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.secondaryNav, open && _SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.secondaryNavOpen)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.secondaryNavLinkContainer
  }, menu && (isSecondaryMenu ? menu.secondaryMenu : menu.subMenu) && (isSecondaryMenu ? menu.secondaryMenu : menu.subMenu).map(function (level3, i) {
    var to = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(level3.link) ? level3.href : level3.link;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(topcoder_react_utils__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.secondaryNavItem, level3.id === activeChildId && _SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.secondaryNavItemOpen),
      key: "level3-".concat(i),
      to: to,
      onClick: createHandleClickItem(level3.id)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      ref: createSetRef(level3.id)
    }, level3.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_SubNav_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.indicator)
    }));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_IconSelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: showIndicator,
    x: indicatorX
  })));
};

SubNav.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  isSecondaryMenu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  activeChildId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  showIndicator: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  indicatorX: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  createHandleClickItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  createSetRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
var _default = SubNav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubNav, "SubNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\SubNav.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\SubNav.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/raf-schd/dist/raf-schd.esm.js
var index = (function (fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(undefined, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  var resultFn = wrapperFn;

  return resultFn;
});

/* harmony default export */ var raf_schd_esm = (index);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ var lodash_es_isObject = (isObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(82);

// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

/* harmony default export */ var lodash_es_now = (now);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (_Symbol_Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isSymbol.js



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (lodash_es_isObjectLike(value) && _baseGetTag(value) == symbolTag);
}

/* harmony default export */ var lodash_es_isSymbol = (isSymbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/toNumber.js



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (lodash_es_isSymbol(value)) {
    return NAN;
  }
  if (lodash_es_isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = lodash_es_isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ var lodash_es_toNumber = (toNumber);

// CONCATENATED MODULE: ./node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if (lodash_es_isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }

  function debounced() {
    var time = lodash_es_now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ var lodash_es_debounce = (debounce);

// CONCATENATED MODULE: ./node_modules/lodash-es/throttle.js



/** Error message constants. */
var throttle_FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(throttle_FUNC_ERROR_TEXT);
  }
  if (lodash_es_isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return lodash_es_debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ var lodash_es_throttle = (throttle);

// CONCATENATED MODULE: ./node_modules/react-resize-detector/lib/esm/lib/utils.js


var listHandle = {
  debounce: lodash_es_debounce,
  throttle: lodash_es_throttle
};
var getHandle = function getHandle(type) {
  return listHandle[type];
};
var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};
var isSSR = function isSSR() {
  return typeof window === 'undefined';
};
var isDOMElement = function isDOMElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
};
// CONCATENATED MODULE: ./node_modules/react-resize-detector/lib/esm/components/ChildWrapper.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ChildWrapper =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ChildWrapper, _PureComponent);

  function ChildWrapper() {
    _classCallCheck(this, ChildWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChildWrapper).apply(this, arguments));
  }

  _createClass(ChildWrapper, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line react/prop-types
      return this.props.children;
    }
  }]);

  return ChildWrapper;
}(external_react_["PureComponent"]);

/* harmony default export */ var components_ChildWrapper = (ChildWrapper);
// CONCATENATED MODULE: ./node_modules/react-resize-detector/lib/esm/components/ResizeDetector.js
function ResizeDetector_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ResizeDetector_typeof = function _typeof(obj) { return typeof obj; }; } else { ResizeDetector_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ResizeDetector_typeof(obj); }

function ResizeDetector_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ResizeDetector_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ResizeDetector_createClass(Constructor, protoProps, staticProps) { if (protoProps) ResizeDetector_defineProperties(Constructor.prototype, protoProps); if (staticProps) ResizeDetector_defineProperties(Constructor, staticProps); return Constructor; }

function ResizeDetector_possibleConstructorReturn(self, call) { if (call && (ResizeDetector_typeof(call) === "object" || typeof call === "function")) { return call; } return ResizeDetector_assertThisInitialized(self); }

function ResizeDetector_getPrototypeOf(o) { ResizeDetector_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ResizeDetector_getPrototypeOf(o); }

function ResizeDetector_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ResizeDetector_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ResizeDetector_setPrototypeOf(subClass, superClass); }

function ResizeDetector_setPrototypeOf(o, p) { ResizeDetector_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ResizeDetector_setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var ResizeDetector_ResizeDetector =
/*#__PURE__*/
function (_PureComponent) {
  ResizeDetector_inherits(ResizeDetector, _PureComponent);

  function ResizeDetector(props) {
    var _this;

    ResizeDetector_classCallCheck(this, ResizeDetector);

    _this = ResizeDetector_possibleConstructorReturn(this, ResizeDetector_getPrototypeOf(ResizeDetector).call(this, props));

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "cancelHandler", function () {
      if (_this.resizeHandler && _this.resizeHandler.cancel) {
        // cancel debounced handler
        _this.resizeHandler.cancel();

        _this.resizeHandler = null;
      }
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "rafClean", function () {
      if (_this.raf && _this.raf.cancel) {
        _this.raf.cancel();

        _this.raf = null;
      }
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "toggleObserver", function (type) {
      var element = _this.getElement();

      if (!element || !_this.resizeObserver[type]) return;

      _this.resizeObserver[type](element);
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "getElement", function () {
      var _this$props = _this.props,
          querySelector = _this$props.querySelector,
          targetDomEl = _this$props.targetDomEl;
      if (isSSR()) return undefined;
      if (querySelector) return document.querySelector(querySelector);
      if (targetDomEl && isDOMElement(targetDomEl)) return targetDomEl; // eslint-disable-next-line react/no-find-dom-node

      var currentElement = _this.element && Object(external_react_dom_["findDOMNode"])(_this.element);
      if (!currentElement) return undefined;
      return currentElement.parentElement;
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "createUpdater", function () {
      _this.rafClean();

      _this.raf = raf_schd_esm(function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        var onResize = _this.props.onResize;

        if (isFunction(onResize)) {
          onResize(width, height);
        }

        _this.setState({
          width: width,
          height: height
        });
      });
      return _this.raf;
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "createResizeHandler", function (entries) {
      var _this$state = _this.state,
          widthCurrent = _this$state.width,
          heightCurrent = _this$state.height;
      var _this$props2 = _this.props,
          handleWidth = _this$props2.handleWidth,
          handleHeight = _this$props2.handleHeight;
      if (!handleWidth && !handleHeight) return;

      var updater = _this.createUpdater();

      entries.forEach(function (entry) {
        var _ref2 = entry && entry.contentRect || {},
            width = _ref2.width,
            height = _ref2.height;

        var isWidthChanged = handleWidth && widthCurrent !== width;
        var isHeightChanged = handleHeight && heightCurrent !== height;
        var isSizeChanged = isWidthChanged || isHeightChanged;
        var shouldSetSize = !_this.skipOnMount && isSizeChanged && !isSSR();

        if (shouldSetSize) {
          updater({
            width: width,
            height: height
          });
        }

        _this.skipOnMount = false;
      });
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "onRef", function (el) {
      _this.element = el;
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "getRenderType", function () {
      var _this$props3 = _this.props,
          render = _this$props3.render,
          children = _this$props3.children;

      if (isFunction(render)) {
        return 'renderProp';
      }

      if (isFunction(children)) {
        return 'childFunction';
      }

      if (Object(external_react_["isValidElement"])(children)) {
        return 'child';
      }

      if (Array.isArray(children)) {
        return 'childArray';
      }

      return 'parent';
    });

    _defineProperty(ResizeDetector_assertThisInitialized(_this), "getTargetComponent", function () {
      var _this$props4 = _this.props,
          render = _this$props4.render,
          children = _this$props4.children,
          nodeType = _this$props4.nodeType;
      var _this$state2 = _this.state,
          width = _this$state2.width,
          height = _this$state2.height;
      var childProps = {
        width: width,
        height: height
      };

      var renderType = _this.getRenderType();

      switch (renderType) {
        case 'renderProp':
          return Object(external_react_["cloneElement"])(render(childProps), {
            key: 'resize-detector'
          });

        case 'childFunction':
          return Object(external_react_["cloneElement"])(children(childProps));

        case 'child':
          return Object(external_react_["cloneElement"])(children, childProps);

        case 'childArray':
          return children.map(function (el) {
            return !!el && Object(external_react_["cloneElement"])(el, childProps);
          });

        default:
          return Object(external_react_["createElement"])(nodeType);
      }
    });

    var skipOnMount = props.skipOnMount,
        refreshMode = props.refreshMode,
        refreshRate = props.refreshRate,
        refreshOptions = props.refreshOptions;
    _this.state = {
      width: undefined,
      height: undefined
    };
    _this.skipOnMount = skipOnMount;
    _this.raf = null;
    _this.element = null;
    _this.unmounted = false;
    var handle = getHandle(refreshMode);
    _this.resizeHandler = handle ? handle(_this.createResizeHandler, refreshRate, refreshOptions) : _this.createResizeHandler;
    _this.resizeObserver = new ResizeObserver_es["a" /* default */](_this.resizeHandler);
    return _this;
  }

  ResizeDetector_createClass(ResizeDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleObserver('observe');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleObserver('unobserve');
      this.rafClean();
      this.cancelHandler();
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(components_ChildWrapper, {
        ref: this.onRef
      }, this.getTargetComponent());
    }
  }]);

  return ResizeDetector;
}(external_react_["PureComponent"]);

ResizeDetector_ResizeDetector.propTypes = {
  handleWidth: external_prop_types_["bool"],
  handleHeight: external_prop_types_["bool"],
  skipOnMount: external_prop_types_["bool"],
  refreshRate: external_prop_types_["number"],
  refreshMode: external_prop_types_["string"],
  refreshOptions: Object(external_prop_types_["shape"])({
    leading: external_prop_types_["bool"],
    trailing: external_prop_types_["bool"]
  }),
  querySelector: external_prop_types_["string"],
  targetDomEl: external_prop_types_["any"],
  // eslint-disable-line react/forbid-prop-types
  onResize: external_prop_types_["func"],
  render: external_prop_types_["func"],
  children: external_prop_types_["any"],
  // eslint-disable-line react/forbid-prop-types
  nodeType: external_prop_types_["node"]
};
ResizeDetector_ResizeDetector.defaultProps = {
  handleWidth: false,
  handleHeight: false,
  skipOnMount: false,
  refreshRate: 1000,
  refreshMode: undefined,
  refreshOptions: undefined,
  querySelector: null,
  targetDomEl: null,
  onResize: null,
  render: undefined,
  children: null,
  nodeType: 'div'
};
/* harmony default export */ var components_ResizeDetector = (ResizeDetector_ResizeDetector);
// CONCATENATED MODULE: ./node_modules/react-resize-detector/lib/esm/index.js



/* harmony default export */ var esm = __webpack_exports__["a"] = (components_ResizeDetector);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();

var AccountMenu = __webpack_require__(45)["default"];

var CheckBox = __webpack_require__(46)["default"];

var ChosenArrow = __webpack_require__(47)["default"];

var DropdownBox = __webpack_require__(48)["default"];

var IconSelect = __webpack_require__(49)["default"];

var LoginNav = __webpack_require__(94)["default"];

var NotificationButton = __webpack_require__(39)["default"];

var NotificationSettings = __webpack_require__(99)["default"];

var NotificationsPopup = __webpack_require__(50)["default"];

var SwitchBox = __webpack_require__(51)["default"];

var TopNav = __webpack_require__(102)["default"];

var UserInfo = __webpack_require__(40)["default"];

__webpack_require__(109);

module.exports = {
  AccountMenu: AccountMenu,
  CheckBox: CheckBox,
  ChosenArrow: ChosenArrow,
  DropdownBox: DropdownBox,
  IconSelect: IconSelect,
  LoginNav: LoginNav,
  NotificationButton: NotificationButton,
  NotificationSettings: NotificationSettings,
  NotificationsPopup: NotificationsPopup,
  SwitchBox: SwitchBox,
  TopNav: TopNav,
  UserInfo: UserInfo
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AccountMenu, "AccountMenu", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(CheckBox, "CheckBox", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(ChosenArrow, "ChosenArrow", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(DropdownBox, "DropdownBox", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(IconSelect, "IconSelect", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(LoginNav, "LoginNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(NotificationButton, "NotificationButton", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(NotificationSettings, "NotificationSettings", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(NotificationsPopup, "NotificationsPopup", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(SwitchBox, "SwitchBox", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(TopNav, "TopNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
  reactHotLoader.register(UserInfo, "UserInfo", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(87)(module)))

/***/ }),
/* 86 */,
/* 87 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(54));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(55));

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._3Yrr8BSysj0rX_n27afX1v {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._39pyudu_xKObZW6pdJuvzE {\n    display: none; } }\n\n._1DBEhWVAp80KcvisVjxeoJ {\n  position: absolute;\n  right: 0;\n  top: 40px;\n  color: #2A2A2B;\n  border-radius: 10px;\n  box-shadow: 0 5px 35px 5px rgba(21, 21, 22, 0.1), 0 10px 14px 0 rgba(21, 21, 22, 0.3);\n  width: 288px;\n  background: #FFFFFF;\n  border-radius: 6px;\n  overflow: hidden;\n  z-index: 1;\n  display: none; }\n  ._1DBEhWVAp80KcvisVjxeoJ .J7AZ7AoZpMiqcGkk5EiPI {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1; }\n  ._1DBEhWVAp80KcvisVjxeoJ._13ZRWXhKBcHUN13XpzxXsP {\n    display: block; }\n  ._1DBEhWVAp80KcvisVjxeoJ a {\n    color: #2A2A2B; }\n  ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B {\n    padding: 0 20px;\n    display: none;\n    align-items: center; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B:not(.aglP2X7ywZf438_Bb1dtR) {\n      background: #137D60;\n      color: #FFFFFF;\n      height: 90px; }\n      @media (min-width: 769px) {\n        ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B:not(.aglP2X7ywZf438_Bb1dtR) {\n          display: flex; } }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._1wFEBuiGu2rmAiS_Agpkj0 {\n      display: flex;\n      flex-direction: column; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._3Y2gUUZLS01E2DBwAmL5AC {\n      font-size: 16px;\n      line-height: 20px; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._3MNC9RVKZqkHXDT4LawW2U {\n      font-size: 12px;\n      line-height: 14px;\n      margin-top: 4px; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B .SLZdcUmntH_Gz43MlKy_e {\n      margin-right: 10px;\n      border-radius: 50%; }\n  ._1DBEhWVAp80KcvisVjxeoJ ._2eGTkF96fLsq65vhLrHCwO {\n    background: #2A2A2B;\n    height: 50px;\n    display: flex;\n    align-items: center; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._2eGTkF96fLsq65vhLrHCwO ._2mlsFz0e2JplFFCaXj8NGz {\n      margin: 0 10px 0 22px; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._2eGTkF96fLsq65vhLrHCwO a {\n      color: #FFFFFF;\n      font-size: 14px;\n      line-height: 30px; }\n  @media (min-width: 769px) {\n    ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd {\n      padding: 15px 0 25px 0; } }\n  @media (min-width: 769px) {\n    ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1uKKtJz3R1OJadiIC1Dhzj {\n      display: none; } }\n  ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    margin: -5px 0;\n    padding: 0 20px;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 30px; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a:hover {\n      background: #F4F4F4; }\n  ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1W9uvJn9LnD8xfxtrvZOi8 {\n    background: #E0E0E0;\n    height: 1px;\n    width: 100%;\n    margin: 10px;\n    height: 1px;\n    width: calc(100% - 40px);\n    align-self: center;\n    display: block; }\n    @media (min-width: 769px) {\n      ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1W9uvJn9LnD8xfxtrvZOi8._39pyudu_xKObZW6pdJuvzE {\n        display: none; } }\n\n@media (max-width: 768px) {\n  ._1DBEhWVAp80KcvisVjxeoJ {\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    overflow-y: auto;\n    background: #FFFFFF;\n    display: none;\n    z-index: 10;\n    top: 0;\n    display: none;\n    flex-direction: column;\n    border-radius: 0; }\n    ._1DBEhWVAp80KcvisVjxeoJ._13ZRWXhKBcHUN13XpzxXsP {\n      display: flex; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B {\n      padding: 7px 0 5px 17px;\n      display: none;\n      justify-content: space-between;\n      align-items: center; }\n      ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B.aglP2X7ywZf438_Bb1dtR {\n        display: flex; }\n      ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._2GIRHsafrrsIqKD2lAgAXU {\n        display: flex;\n        align-items: center;\n        margin-bottom: 2px; }\n        ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._2GIRHsafrrsIqKD2lAgAXU img {\n          border: 3px solid #C0C0C0;\n          border-radius: 33px;\n          margin-right: 17px; }\n        ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._2GIRHsafrrsIqKD2lAgAXU ._1wFEBuiGu2rmAiS_Agpkj0 {\n          display: flex;\n          flex-direction: column;\n          padding-top: 15px; }\n        ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._2GIRHsafrrsIqKD2lAgAXU ._3Y2gUUZLS01E2DBwAmL5AC {\n          font-family: 'Roboto';\n          font-weight: 700;\n          font-size: 20px; }\n        ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._2GIRHsafrrsIqKD2lAgAXU .U68y4Y2wNYKEkEoINGHp5 {\n          font-family: 'Roboto';\n          font-weight: 400;\n          font-size: 12px;\n          color: #404041; }\n      ._1DBEhWVAp80KcvisVjxeoJ ._3-ni4BP9S3pMtBmuWTdD-B ._3c5H0OfZrcQpn4rG8MAh-8 {\n        width: 50px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n    ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd {\n      display: flex;\n      flex-direction: column;\n      margin-top: 15px; }\n      ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1W9uvJn9LnD8xfxtrvZOi8 {\n        background: #E0E0E0;\n        width: calc(100% - 46px);\n        margin: 15px 0;\n        height: 1px;\n        align-self: center;\n        padding: 0 20px; }\n      ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a,\n      ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1uKKtJz3R1OJadiIC1Dhzj {\n        color: #2A2A2B;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        margin: 5px 0;\n        padding: 0 20px; }\n        ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a:hover,\n        ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1uKKtJz3R1OJadiIC1Dhzj:hover {\n          background: #F4F4F4; }\n        ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a._1uKKtJz3R1OJadiIC1Dhzj,\n        ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1uKKtJz3R1OJadiIC1Dhzj._1uKKtJz3R1OJadiIC1Dhzj {\n          display: flex;\n          justify-content: space-between; }\n          ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a._1uKKtJz3R1OJadiIC1Dhzj ._2LjGSqSat-Ui6-yUgv4xxg ._2SJSsuwf42CFIJW_MO_h6M,\n          ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1uKKtJz3R1OJadiIC1Dhzj._1uKKtJz3R1OJadiIC1Dhzj ._2LjGSqSat-Ui6-yUgv4xxg ._2SJSsuwf42CFIJW_MO_h6M {\n            font-size: 18px;\n            font-family: 'Roboto';\n            font-weight: 700;\n            background: url(" + ___CSS_LOADER_URL___18___ + ") left center no-repeat;\n            background-size: 16px;\n            padding-left: 28px;\n            text-align: left; }\n          ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a._1uKKtJz3R1OJadiIC1Dhzj ._2LjGSqSat-Ui6-yUgv4xxg ._1-ZXl0prjSGlB_Vf0WA85o,\n          ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1uKKtJz3R1OJadiIC1Dhzj._1uKKtJz3R1OJadiIC1Dhzj ._2LjGSqSat-Ui6-yUgv4xxg ._1-ZXl0prjSGlB_Vf0WA85o {\n            font-size: 14px;\n            color: #EF476F; }\n          ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd a._1uKKtJz3R1OJadiIC1Dhzj ._3MZGOFybb6E3PbTPTEBAIy,\n          ._1DBEhWVAp80KcvisVjxeoJ ._3XpyrYezAnF-8HlgAaQPVd ._1uKKtJz3R1OJadiIC1Dhzj._1uKKtJz3R1OJadiIC1Dhzj ._3MZGOFybb6E3PbTPTEBAIy {\n            background: url(" + ___CSS_LOADER_URL___19___ + ") left center no-repeat;\n            background-size: 10px;\n            width: 10px;\n            height: 16px; } }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "_3Yrr8BSysj0rX_n27afX1v",
	"hide-not-mobile": "_39pyudu_xKObZW6pdJuvzE",
	"user-info-popup": "_1DBEhWVAp80KcvisVjxeoJ",
	"backdrop": "J7AZ7AoZpMiqcGkk5EiPI",
	"open": "_13ZRWXhKBcHUN13XpzxXsP",
	"header": "_3-ni4BP9S3pMtBmuWTdD-B",
	"header-mobile": "aglP2X7ywZf438_Bb1dtR",
	"handle-container": "_1wFEBuiGu2rmAiS_Agpkj0",
	"handle": "_3Y2gUUZLS01E2DBwAmL5AC",
	"email": "_3MNC9RVKZqkHXDT4LawW2U",
	"avatar": "SLZdcUmntH_Gz43MlKy_e",
	"switch-to-business-container": "_2eGTkF96fLsq65vhLrHCwO",
	"switch-icon": "_2mlsFz0e2JplFFCaXj8NGz",
	"menu": "_3XpyrYezAnF-8HlgAaQPVd",
	"notification-mobile": "_1uKKtJz3R1OJadiIC1Dhzj",
	"separator": "_1W9uvJn9LnD8xfxtrvZOi8",
	"left-content": "_2GIRHsafrrsIqKD2lAgAXU",
	"description": "U68y4Y2wNYKEkEoINGHp5",
	"icon-close": "_3c5H0OfZrcQpn4rG8MAh-8",
	"left-notifi": "_2LjGSqSat-Ui6-yUgv4xxg",
	"title": "_2SJSsuwf42CFIJW_MO_h6M",
	"red-number": "_1-ZXl0prjSGlB_Vf0WA85o",
	"notification-right-arrow": "_3MZGOFybb6E3PbTPTEBAIy"
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(38));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(44));

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n._3LEfLC6roEXF3q2QmOTHWd {\n  flex: 0 0 15%;\n  display: flex;\n  justify-content: center;\n  margin-top: 12px; }\n  ._3LEfLC6roEXF3q2QmOTHWd .ErMZbUbOq4Ie7FRyaUAjO {\n    background: url(" + ___CSS_LOADER_URL___0___ + ") left center no-repeat;\n    background-size: 7px;\n    width: 12px;\n    height: 7px;\n    cursor: pointer; }\n    ._3LEfLC6roEXF3q2QmOTHWd .ErMZbUbOq4Ie7FRyaUAjO._2KuT4gPTbUDZGJ9I9iH_Hx {\n      background: url(" + ___CSS_LOADER_URL___1___ + ") left center no-repeat;\n      background-size: 10px;\n      width: 9px;\n      height: 7px;\n      margin-left: -5px; }\n", ""]);

// Exports
exports.locals = {
	"checkbox": "_3LEfLC6roEXF3q2QmOTHWd",
	"check-icon": "ErMZbUbOq4Ie7FRyaUAjO",
	"checked": "_2KuT4gPTbUDZGJ9I9iH_Hx"
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n._3kEL1CuXIbYxx0bdhqtbUt {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  z-index: 1;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22);\n  transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22); }\n  ._3kEL1CuXIbYxx0bdhqtbUt svg {\n    display: block; }\n    .theme-light ._3kEL1CuXIbYxx0bdhqtbUt svg {\n      fill: #FBFBFB; }\n    .theme-dark ._3kEL1CuXIbYxx0bdhqtbUt svg {\n      fill: #636363; }\n", ""]);

// Exports
exports.locals = {
	"chosenArrow": "_3kEL1CuXIbYxx0bdhqtbUt"
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(56));

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  .FiI0R2zOapkwMus631VUJ {\n    display: none; } }\n\n@media (min-width: 769px) {\n  .GFH-u2tHEY5bELZr9-mgn {\n    display: none; } }\n\n._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f {\n  background-color: #C0C0C0;\n  border-radius: 15px;\n  width: 148px;\n  height: 30px;\n  position: relative;\n  cursor: pointer; }\n  ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f ._1Qp_Ah8FxL6gqzhkr1zO-b {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1; }\n  ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f.uNJnEhKjeOi08aYFNGcBr {\n    background-color: #AAAAAB;\n    box-shadow: inset 0 1px 3px 0 #808080; }\n    ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f.uNJnEhKjeOi08aYFNGcBr ._1UrYH5pnd2F3BMjqpCcA-c {\n      display: block; }\n  ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f:hover {\n    background-color: none;\n    background-image: linear-gradient(180deg, #C0C0C0 0%, #A8A8A9 100%); }\n  ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18BWxHVraQeHlJob7KOP7s {\n    background-color: #0681FF; }\n    ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18BWxHVraQeHlJob7KOP7s.uNJnEhKjeOi08aYFNGcBr {\n      background-color: #006DEA;\n      box-shadow: inset 0 1px 3px 0 #404041; }\n    ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18BWxHVraQeHlJob7KOP7s:hover {\n      background-color: none;\n      background-image: linear-gradient(180deg, #0681FF 0%, #006CE7 100%);\n      box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.5); }\n  ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f ._2notQ2VhrCNXWXIVhMk_dR {\n    color: #FFFFFF;\n    font-family: 'Roboto';\n    font-weight: 700;\n    font-size: 13px;\n    line-height: 30px;\n    margin-left: 17px;\n    cursor: pointer; }\n    ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f ._2notQ2VhrCNXWXIVhMk_dR ._1Q2X7m7bpTVHzaWex05wh4 {\n      background: url(" + ___CSS_LOADER_URL___18___ + ") left center no-repeat;\n      background-size: 14px;\n      width: 14px;\n      height: 14px;\n      display: block;\n      position: absolute;\n      right: 13px;\n      top: 9px;\n      transform: rotateZ(90deg); }\n  ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f ._1UrYH5pnd2F3BMjqpCcA-c {\n    display: none;\n    background-color: #FFFFFF;\n    border-radius: 6px;\n    box-shadow: 0 5px 35px 5px rgba(21, 21, 22, 0.1), 0 10px 14px 0 rgba(21, 21, 22, 0.3);\n    padding: 5px 5px;\n    position: absolute;\n    width: 138px;\n    z-index: 100; }\n    ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f ._1UrYH5pnd2F3BMjqpCcA-c li {\n      color: #151516;\n      font-family: 'Roboto';\n      font-weight: 400;\n      font-size: 13px;\n      line-height: 30px;\n      padding-top: 0;\n      min-height: initial;\n      padding-bottom: initial;\n      box-shadow: none;\n      align-items: start;\n      cursor: pointer; }\n      ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f ._1UrYH5pnd2F3BMjqpCcA-c li._2m37YSsT85HbU1quxZkX0J {\n        font-weight: 700;\n        background-color: #FAFAFB; }\n      ._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f._18FKlvA7Q96dhDsc31hj-f ._1UrYH5pnd2F3BMjqpCcA-c li:hover {\n        background-color: #F4F9FF; }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "FiI0R2zOapkwMus631VUJ",
	"hide-not-mobile": "GFH-u2tHEY5bELZr9-mgn",
	"dropdown-box": "_18FKlvA7Q96dhDsc31hj-f",
	"backdrop": "_1Qp_Ah8FxL6gqzhkr1zO-b",
	"open": "uNJnEhKjeOi08aYFNGcBr",
	"options": "_1UrYH5pnd2F3BMjqpCcA-c",
	"checked": "_18BWxHVraQeHlJob7KOP7s",
	"selected-label": "_2notQ2VhrCNXWXIVhMk_dR",
	"dropdown-arrow": "_1Q2X7m7bpTVHzaWex05wh4",
	"active": "_2m37YSsT85HbU1quxZkX0J"
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n.XfmzOwZf6y97UzMGl8VN1 {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  width: 15px;\n  height: 3px;\n  border-radius: 1.5px;\n  background: #43D7B0;\n  -webkit-transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  -webkit-transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22);\n  transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22); }\n", ""]);

// Exports
exports.locals = {
	"iconSelect": "XfmzOwZf6y97UzMGl8VN1"
};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NotificationButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _NotificationsPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
/* harmony import */ var _AccountMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);


(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();









var LoginNav = function LoginNav(_ref) {
  var loggedIn = _ref.loggedIn,
      notificationButtonState = _ref.notificationButtonState,
      notifications = _ref.notifications,
      accountMenu = _ref.accountMenu,
      switchText = _ref.switchText,
      onSwitch = _ref.onSwitch,
      onMenuOpen = _ref.onMenuOpen,
      showNotification = _ref.showNotification,
      profile = _ref.profile,
      authURLs = _ref.authURLs;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      openNotifications = _useState2[0],
      setOpenNotifications = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      openAccountMenu = _useState4[0],
      setOpenAccountMenu = _useState4[1];

  var handleClickNotifications = function handleClickNotifications() {
    return setOpenNotifications(function (x) {
      return !x;
    });
  };

  var handleClickUserInfo = function handleClickUserInfo() {
    if (!openAccountMenu) {
      onMenuOpen(); // prevent body from scrolling on handheld devices

      if (window.innerWidth <= 768) {
        document.body.style.position = 'fixed';
      }
    }

    setOpenAccountMenu(function (x) {
      return !x;
    });
  };

  var renderLoginPanel = function renderLoginPanel() {
    if (showNotification) {
      return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NotificationButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.notificationButton,
        state: notificationButtonState,
        notificationsPopupOpen: openNotifications,
        onClick: handleClickNotifications,
        key: "notification-button"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
        profile: profile,
        newNotifications: notificationButtonState === 'new',
        onClick: handleClickUserInfo,
        open: openAccountMenu,
        key: "user-info"
      })];
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      profile: profile,
      newNotifications: notificationButtonState === 'new',
      onClick: handleClickUserInfo,
      open: openAccountMenu,
      key: "user-info"
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.loginContainer
  }, loggedIn ? renderLoginPanel() : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: authURLs.href,
    onClick: function onClick(event) {
      var retUrl = encodeURIComponent(window.location.href);
      window.location = authURLs.location.replace('%S', retUrl);
      event.preventDefault();
    }
  }, "LOGIN"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NotificationsPopup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: openNotifications,
    notifications: notifications,
    onClose: function onClose() {
      return setOpenNotifications(false);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    profile: profile,
    open: openAccountMenu,
    menu: accountMenu,
    switchText: switchText,
    numNotifications: (notifications || []).length,
    onClickNotifications: handleClickNotifications,
    onSwitch: onSwitch,
    onClose: function onClose() {
      setOpenAccountMenu(false);
      document.body.style.position = '';
    }
  }));
};

LoginNav.propTypes = {
  loggedIn: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  notificationButtonState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  notifications: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  accountMenu: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  onSwitch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMenuOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape(),
  switchText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape(),
  authURLs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape()
};
var _default = LoginNav;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginNav, "LoginNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\LoginNav\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\LoginNav\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  .TLi8zlACFsu05s9-S0KD6 {\n    display: none; } }\n\n@media (min-width: 769px) {\n  .XioWN-AAeGkJnsjIq4V5z {\n    display: none; } }\n\n._1lZDYTI4twm2tPiSSYmH7j {\n  position: relative;\n  display: flex;\n  align-items: center; }\n  @media (max-width: 768px) {\n    ._1lZDYTI4twm2tPiSSYmH7j .FoUSAd5lNc93mRCKoyl8k {\n      display: none; } }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "TLi8zlACFsu05s9-S0KD6",
	"hide-not-mobile": "XioWN-AAeGkJnsjIq4V5z",
	"loginContainer": "_1lZDYTI4twm2tPiSSYmH7j",
	"notificationButton": "FoUSAd5lNc93mRCKoyl8k"
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n._2Ii9wrSzf3Okhwg8qclKNK {\n  position: relative;\n  padding: 10px;\n  background: transparent;\n  border: none; }\n  ._2Ii9wrSzf3Okhwg8qclKNK img {\n    display: block; }\n  ._2Ii9wrSzf3Okhwg8qclKNK.q_nxMe059lniB16rnd5Tn {\n    opacity: 0.5; }\n  ._2Ii9wrSzf3Okhwg8qclKNK._3xZrCGzwx7RuauWwYHwENh {\n    line-height: 36px; }\n    ._2Ii9wrSzf3Okhwg8qclKNK._3xZrCGzwx7RuauWwYHwENh:hover {\n      background-color: rgba(85, 85, 85, 0.4);\n      border-radius: 50%; }\n  ._2Ii9wrSzf3Okhwg8qclKNK._3xZrCGzwx7RuauWwYHwENh::after {\n    content: \"\";\n    width: 6px;\n    height: 6px;\n    position: absolute;\n    top: 6px;\n    right: 5px;\n    background: #EF476F;\n    border-radius: 6px;\n    display: block; }\n  ._2Ii9wrSzf3Okhwg8qclKNK._3xZrCGzwx7RuauWwYHwENh._1fEPa0UNfOfqQP46l2DmfT {\n    background-color: rgba(85, 85, 85, 0.4);\n    border-radius: 50%; }\n  ._2Ii9wrSzf3Okhwg8qclKNK:focus {\n    outline: none; }\n", ""]);

// Exports
exports.locals = {
	"notificationButton": "_2Ii9wrSzf3Okhwg8qclKNK",
	"none": "q_nxMe059lniB16rnd5Tn",
	"new": "_3xZrCGzwx7RuauWwYHwENh",
	"isNotificationsPopupOpen": "_1fEPa0UNfOfqQP46l2DmfT"
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(57));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(58));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(38));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(59));
var ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(60));
var ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(61));
var ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(62));

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n._3uzpwBKEA-MbCkI9aIMOp7 {\n  width: 100% !important;\n  height: 100% !important;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.dqp77tD8W2ETuOAfmPKrb {\n  position: relative; }\n\n._10uxAesUyb2uI6gmKN7J6z {\n  display: none !important; }\n\n._3jhWQHRm5iNa8aHKufZPJM {\n  display: none; }\n\n._3DFOkrCgDMnvjCqabi6xXD {\n  display: block; }\n\n._3zI77bcsXMPehS4g_swO9f {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  ._3zI77bcsXMPehS4g_swO9f.njaE6s5GBKM1QWGa3X0N1 {\n    align-items: flex-start; }\n\n._3_kpxJWCILsR8Tg-9uKzXZ {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* btn */\n._2oHjajwzyk-5gR6VkemMLi {\n  font-size: 18px;\n  font-weight: normal;\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  position: relative;\n  text-transform: none;\n  font-weight: bold;\n  display: inline-block; }\n  ._2oHjajwzyk-5gR6VkemMLi.tTm4NWRWu70QFI-vy6lfh, ._2oHjajwzyk-5gR6VkemMLi:active, ._2oHjajwzyk-5gR6VkemMLi:focus {\n    box-shadow: none;\n    outline: 0; }\n\n/* .btn-blue */\n.iFKI2Ov4qa7QzgTzmFOtv,\n.iFKI2Ov4qa7QzgTzmFOtv:hover,\n.iFKI2Ov4qa7QzgTzmFOtv:focus {\n  cursor: pointer;\n  height: 30px;\n  color: #FFFFFF;\n  line-height: 30px;\n  border-radius: 15px;\n  padding: 1px 18px;\n  font-size: 14px;\n  font-family: 'Roboto';\n  font-weight: 700; }\n\n.iFKI2Ov4qa7QzgTzmFOtv:hover {\n  opacity: 0.75; }\n\n.iFKI2Ov4qa7QzgTzmFOtv {\n  background-color: #2C95D7; }\n  .iFKI2Ov4qa7QzgTzmFOtv._2SKHVaubAgUcwsNX6eYUJk, .iFKI2Ov4qa7QzgTzmFOtv:disabled, .iFKI2Ov4qa7QzgTzmFOtv[disabled] {\n    pointer-events: none; }\n\n/* .btn-gray */\n._2qrP7i56V22adC8xa8ezas,\n._2qrP7i56V22adC8xa8ezas:hover,\n._2qrP7i56V22adC8xa8ezas:focus {\n  cursor: pointer;\n  height: 30px;\n  color: #FFFFFF;\n  line-height: 30px;\n  border-radius: 4px;\n  padding: 1px 18px;\n  font-size: 13px;\n  background-color: #AAAAAB;\n  font-family: 'Roboto';\n  font-weight: 400; }\n\n._2qrP7i56V22adC8xa8ezas:hover {\n  opacity: 0.75; }\n\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._1KRwHAl5IRhFceiZQ7zk5B {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._1NDEgCD5MJCfPAwdP9B9P {\n    display: none; } }\n\n._2bDaoAmFShmqVrbIpK298u {\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 5px 35px 5px rgba(21, 21, 22, 0.1), 0 10px 14px 0 rgba(21, 21, 22, 0.3);\n  width: 480px;\n  height: auto;\n  position: absolute;\n  right: 10px;\n  top: 40px;\n  display: none;\n  z-index: 100;\n  cursor: default; }\n  ._2bDaoAmFShmqVrbIpK298u [role=\"button\"] {\n    cursor: pointer; }\n  ._2bDaoAmFShmqVrbIpK298u._212HUD_1uAlLuuyrAeehri {\n    display: flex; }\n  ._2bDaoAmFShmqVrbIpK298u ._1WVxyW6Rc0m3600-JdYsfL {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1; }\n  ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 {\n    background-color: #0AB88A;\n    border-radius: 10px 10px 0 0;\n    padding: 10px 20px 10px;\n    height: 30px;\n    position: sticky;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    @media (min-width: 769px) {\n      ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._2P7pWG81MDfkRVy8vpNIHg {\n        display: none; } }\n    ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._1sAHEAFDeoX_ZTuPXeKmPq {\n      background: url(" + ___CSS_LOADER_URL___18___ + ") left center no-repeat;\n      background-size: 16px;\n      padding-left: 26px;\n      color: #FFFFFF;\n      font-size: 16px;\n      font-family: 'Roboto';\n      font-weight: 700;\n      text-align: left; }\n    @media (max-width: 768px) {\n      ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._2r9o0ga7lUDfvlv0Jy9p0h {\n        display: none; } }\n    ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._2r9o0ga7lUDfvlv0Jy9p0h .gG-EY-ujRac3C3XNmxXsW {\n      color: #FFFFFF;\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 12px;\n      font-family: 'Roboto';\n      font-weight: 700;\n      text-align: right; }\n      ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._2r9o0ga7lUDfvlv0Jy9p0h .gG-EY-ujRac3C3XNmxXsW:hover {\n        opacity: 0.75; }\n    ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._2r9o0ga7lUDfvlv0Jy9p0h ._3FpWnCPiOuQJLQsSr57gf7 {\n      width: 3px;\n      height: 3px;\n      background-color: #FFFFFF;\n      border-radius: 100%;\n      display: inline-block;\n      vertical-align: middle; }\n    @media (min-width: 769px) {\n      ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._358oM7AujstXlvHcnoYHy3 {\n        display: none; } }\n  ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN {\n    max-height: 378px;\n    overflow: scroll; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN._1Bc2hR___vzLOqf-KCSQ8j {\n      text-align: center; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._3PX9-2AtdZY9sGhVyChc1t {\n      background: url(" + ___CSS_LOADER_URL___19___ + ") center center no-repeat;\n      background-size: 73px 80px;\n      width: 73px;\n      height: 80px;\n      margin: 50px 0 10px; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._3KTfOxCvh_KBa3DFMUvWe2 {\n      color: #2A2A2B;\n      font-size: 30px;\n      font-family: 'Barlow Condensed';\n      font-weight: 600;\n      line-height: 40px;\n      margin: 23px 0 -8px 0; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._3zu5BfIWJ71Fd4J1DqWfkN {\n      margin: 0;\n      color: #2A2A2B;\n      font-size: 14px;\n      font-family: 'Roboto';\n      font-weight: 400;\n      line-height: 20px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._3zu5BfIWJ71Fd4J1DqWfkN._1wodp8ZcZPls60OS2tJ98H {\n        text-align: center;\n        padding: 19px 60px 12px 60px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._3zu5BfIWJ71Fd4J1DqWfkN .RZWo4BWfGuakP2wY9mMG1 {\n        color: #0596dc;\n        font-size: 14px; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._31SfJMmwFiAncZnGzrr985 {\n      background-color: #B5E9DB;\n      height: 28px;\n      color: #229174;\n      font-size: 14px;\n      font-family: 'Roboto';\n      font-weight: 700;\n      line-height: 28px;\n      padding-left: 20px;\n      margin-top: -2px;\n      position: sticky;\n      position: -webkit-sticky;\n      top: 0;\n      z-index: 2;\n      padding-right: 20px;\n      padding-top: 2px; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._3pSfnLAttSYTLgZyBO-I6F:last-child ._1x6dqFZ-IL6wFdtTotlnCn ._2TVvw7BG7N7OELifFSI4Ru {\n      border-bottom: 0; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._2U6_rtw03hfHM93vyb4eBM,\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._3pSfnLAttSYTLgZyBO-I6F {\n      margin-top: -2px;\n      background-color: #FFFFFF;\n      padding-top: 5px; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 {\n      position: absolute;\n      right: 1px;\n      top: 50%;\n      margin-top: -10px;\n      z-index: 666;\n      display: none; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 ._2HHwQfzOvSt5DilSiYDF1R {\n        display: block;\n        background: url(" + ___CSS_LOADER_URL___20___ + ") center center no-repeat;\n        background-size: 10px;\n        width: 20px;\n        height: 20px; }\n        ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 ._2HHwQfzOvSt5DilSiYDF1R:hover {\n          background: url(" + ___CSS_LOADER_URL___21___ + ") center center no-repeat; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 ._7uhH3BTWyzWMLsM_8WzgF {\n        position: absolute;\n        top: -28px;\n        left: -76px;\n        background-color: #2A2A2B;\n        border-radius: 2px;\n        padding: 6px 0;\n        color: #FFFFFF;\n        font-size: 11px;\n        font-family: 'Roboto';\n        font-weight: 400;\n        line-height: 13px;\n        text-align: center;\n        min-width: 110px;\n        display: none; }\n        ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 ._7uhH3BTWyzWMLsM_8WzgF:after {\n          content: '';\n          display: block;\n          position: absolute;\n          bottom: -5px;\n          left: calc(50% + 30px);\n          margin-left: -3px;\n          width: 0;\n          height: 0;\n          border-left: 4px solid transparent;\n          border-right: 4px solid transparent;\n          border-top: 5px solid #2A2A2B; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0:hover ._7uhH3BTWyzWMLsM_8WzgF {\n        display: block; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn {\n      padding: 0 30px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn:hover {\n        background-color: #FBFBFB; }\n        ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn:hover .yHh07r7iWc4GuTRcs4pX0 {\n          display: block; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn ._2TVvw7BG7N7OELifFSI4Ru {\n        display: block;\n        padding: 10px 0;\n        border-bottom: 1px solid #E0E0E0;\n        position: relative;\n        cursor: pointer; }\n        ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn ._2TVvw7BG7N7OELifFSI4Ru ._3zu5BfIWJ71Fd4J1DqWfkN {\n          padding-right: 30px; }\n        @media (max-width: 768px) {\n          ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn ._2TVvw7BG7N7OELifFSI4Ru ._14yTDJk6l1sYTGFTef-Ym_ {\n            display: none; } }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn ._14BY8-HwlYHKowDEAHswcb {\n        margin-top: 5px;\n        line-height: 20px;\n        font-size: 12px; }\n        ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn ._14BY8-HwlYHKowDEAHswcb ._2ZUCs8P9S0HpqiCqTvFQdz {\n          padding: 0px 10px;\n          display: inline-block;\n          margin-right: 6px;\n          background-color: #50ADE8;\n          border-radius: 5px;\n          color: #FFFFFF;\n          font-family: 'Roboto';\n          font-weight: 400;\n          line-height: 20px; }\n        ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn ._14BY8-HwlYHKowDEAHswcb ._32hmK9ADRmBSTzMopKTqjl {\n          display: inline-block;\n          vertical-align: middle;\n          color: #AAA;\n          font-size: 12px;\n          font-family: 'Roboto';\n          font-weight: 400;\n          line-height: 20px; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._2H2C7O_dp6KwFeSAwq8AeX {\n      background-color: #F4F4F4;\n      height: 50px;\n      padding-left: 20px;\n      margin-top: -4px;\n      z-index: 1;\n      position: relative;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._2H2C7O_dp6KwFeSAwq8AeX ._2aUK1rWbfvxWFNltLlvdq2 {\n        padding-left: 26px;\n        background: url(" + ___CSS_LOADER_URL___22___ + ") left center no-repeat;\n        background-size: 15px;\n        color: #2A2A2B;\n        font-size: 14px;\n        font-family: 'Roboto';\n        font-weight: 700;\n        width: calc(100% - 70px);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._2H2C7O_dp6KwFeSAwq8AeX .yHh07r7iWc4GuTRcs4pX0 {\n        right: 20px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._2H2C7O_dp6KwFeSAwq8AeX:hover .yHh07r7iWc4GuTRcs4pX0 {\n        display: block; }\n  ._2bDaoAmFShmqVrbIpK298u ._4_Xr0xGB9gg5Xbx30yOpI {\n    text-align: center;\n    padding: 15px 0 45px 0; }\n  ._2bDaoAmFShmqVrbIpK298u ._203n6NLK0TpwNfE1LM3U_ {\n    background-color: #FBFBFB;\n    border-radius: 0 0 10px 10px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    color: #7F7F7F;\n    font-size: 12px;\n    font-family: 'Roboto';\n    font-weight: 400;\n    line-height: 40px;\n    justify-content: center;\n    position: relative;\n    z-index: 10;\n    margin-top: -3px; }\n\n._2bDaoAmFShmqVrbIpK298u {\n  max-height: 70vh;\n  flex-direction: column; }\n  ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN {\n    flex: 1;\n    max-height: none; }\n\n@media (max-width: 768px) {\n  ._2bDaoAmFShmqVrbIpK298u {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    box-shadow: none;\n    border-radius: 0;\n    display: none;\n    top: 0;\n    right: 0;\n    overflow-y: auto; }\n    ._2bDaoAmFShmqVrbIpK298u._212HUD_1uAlLuuyrAeehri {\n      display: flex; }\n    ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 {\n      height: 40px;\n      border-radius: 0;\n      padding-left: 10px;\n      padding-right: 10px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._2P7pWG81MDfkRVy8vpNIHg {\n        width: 50px;\n        height: 50px;\n        background: url(" + ___CSS_LOADER_URL___23___ + ") center center no-repeat;\n        margin-left: -8px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._358oM7AujstXlvHcnoYHy3 {\n        width: 50px;\n        height: 50px;\n        background: url(" + ___CSS_LOADER_URL___24___ + ") center center no-repeat; }\n      ._2bDaoAmFShmqVrbIpK298u ._1RFb2SmIhhRopMZePb4MU5 ._1sAHEAFDeoX_ZTuPXeKmPq {\n        margin-left: 0;\n        padding-left: 0;\n        background: none; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN._1Bc2hR___vzLOqf-KCSQ8j ._3zu5BfIWJ71Fd4J1DqWfkN {\n      padding: 19px 20px 12px 21px; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn {\n      padding: 0 10px 0 20px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._1x6dqFZ-IL6wFdtTotlnCn ._2TVvw7BG7N7OELifFSI4Ru ._3zu5BfIWJ71Fd4J1DqWfkN {\n        padding-right: 0; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 {\n      right: 5px; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 ._7uhH3BTWyzWMLsM_8WzgF {\n        left: -90px; }\n        ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0 ._7uhH3BTWyzWMLsM_8WzgF:after {\n          left: 90%; }\n      ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN .yHh07r7iWc4GuTRcs4pX0:hover ._7uhH3BTWyzWMLsM_8WzgF {\n        display: none; }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._2H2C7O_dp6KwFeSAwq8AeX ._2aUK1rWbfvxWFNltLlvdq2 {\n      padding-left: 25px;\n      width: calc(100% - 50px); }\n    ._2bDaoAmFShmqVrbIpK298u ._1clear-wT4PIr6Ij0oX6aN ._2H2C7O_dp6KwFeSAwq8AeX .yHh07r7iWc4GuTRcs4pX0 {\n      right: 15px; }\n    ._2bDaoAmFShmqVrbIpK298u ._31SfJMmwFiAncZnGzrr985 {\n      display: flex;\n      justify-content: space-between; }\n      ._2bDaoAmFShmqVrbIpK298u ._31SfJMmwFiAncZnGzrr985 .xfaifYntjgl4Dxspu_eFs {\n        color: #229174;\n        font-size: 14px;\n        font-family: 'Roboto';\n        font-weight: 700;\n        line-height: 30px;\n        text-align: left; } }\n", ""]);

// Exports
exports.locals = {
	"wrap-all": "_3uzpwBKEA-MbCkI9aIMOp7",
	"relative": "dqp77tD8W2ETuOAfmPKrb",
	"hide": "_10uxAesUyb2uI6gmKN7J6z",
	"desktop-hide": "_3jhWQHRm5iNa8aHKufZPJM",
	"desktop-show": "_3DFOkrCgDMnvjCqabi6xXD",
	"flex-grid": "_3zI77bcsXMPehS4g_swO9f",
	"item-start": "njaE6s5GBKM1QWGa3X0N1",
	"icons": "_3_kpxJWCILsR8Tg-9uKzXZ",
	"btn": "_2oHjajwzyk-5gR6VkemMLi",
	"active": "tTm4NWRWu70QFI-vy6lfh",
	"btn-blue": "iFKI2Ov4qa7QzgTzmFOtv",
	"disabled": "_2SKHVaubAgUcwsNX6eYUJk",
	"btn-gray": "_2qrP7i56V22adC8xa8ezas",
	"mobile-only": "_1KRwHAl5IRhFceiZQ7zk5B",
	"hide-not-mobile": "_1NDEgCD5MJCfPAwdP9B9P",
	"notifications-panel": "_2bDaoAmFShmqVrbIpK298u",
	"open": "_212HUD_1uAlLuuyrAeehri",
	"backdrop": "_1WVxyW6Rc0m3600-JdYsfL",
	"noti-header": "_1RFb2SmIhhRopMZePb4MU5",
	"notification-back-btn": "_2P7pWG81MDfkRVy8vpNIHg",
	"left-noti": "_1sAHEAFDeoX_ZTuPXeKmPq",
	"rights": "_2r9o0ga7lUDfvlv0Jy9p0h",
	"white-link": "gG-EY-ujRac3C3XNmxXsW",
	"point": "_3FpWnCPiOuQJLQsSr57gf7",
	"btn-setting": "_358oM7AujstXlvHcnoYHy3",
	"noti-body": "_1clear-wT4PIr6Ij0oX6aN",
	"center": "_1Bc2hR___vzLOqf-KCSQ8j",
	"icon-bell": "_3PX9-2AtdZY9sGhVyChc1t",
	"titles": "_3KTfOxCvh_KBa3DFMUvWe2",
	"txt": "_3zu5BfIWJ71Fd4J1DqWfkN",
	"center-txt": "_1wodp8ZcZPls60OS2tJ98H",
	"blue-link": "RZWo4BWfGuakP2wY9mMG1",
	"light-bar": "_31SfJMmwFiAncZnGzrr985",
	"greybar-section": "_3pSfnLAttSYTLgZyBO-I6F",
	"items": "_1x6dqFZ-IL6wFdtTotlnCn",
	"item-content": "_2TVvw7BG7N7OELifFSI4Ru",
	"lightblue-section": "_2U6_rtw03hfHM93vyb4eBM",
	"right-remove": "yHh07r7iWc4GuTRcs4pX0",
	"btn-close": "_2HHwQfzOvSt5DilSiYDF1R",
	"black-txt": "_7uhH3BTWyzWMLsM_8WzgF",
	"dismissItem": "_14yTDJk6l1sYTGFTef-Ym_",
	"bottom-info": "_14BY8-HwlYHKowDEAHswcb",
	"blue-squre": "_2ZUCs8P9S0HpqiCqTvFQdz",
	"time-txt": "_32hmK9ADRmBSTzMopKTqjl",
	"grey-bar": "_2H2C7O_dp6KwFeSAwq8AeX",
	"copyicon-title": "_2aUK1rWbfvxWFNltLlvdq2",
	"noti-footer": "_4_Xr0xGB9gg5Xbx30yOpI",
	"end-message": "_203n6NLK0TpwNfE1LM3U_",
	"green-link": "xfaifYntjgl4Dxspu_eFs"
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._3-S7ERzJfyhbHGt11EIpER {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._3rust1gttUzFUo5G6HwRBj {\n    display: none; } }\n\n.fKMH2imvVlyWN-E_J8Ytr {\n  margin-left: 33px;\n  border-radius: 15px;\n  display: flex;\n  align-items: center; }\n  .fKMH2imvVlyWN-E_J8Ytr ._3jYcrF2UXpM0DaUW7v2N9H {\n    position: relative; }\n    .fKMH2imvVlyWN-E_J8Ytr ._3jYcrF2UXpM0DaUW7v2N9H ._1rDJnekJrLVLis92R02FDc {\n      width: 30px;\n      height: 30px;\n      display: block;\n      border-radius: 50%; }\n    .fKMH2imvVlyWN-E_J8Ytr ._3jYcrF2UXpM0DaUW7v2N9H._3CZecOq_pMX8Ybp7wq0VXm::after {\n      content: \"\";\n      width: 7px;\n      height: 7px;\n      position: absolute;\n      top: -4px;\n      right: -6px;\n      background: #EF476F;\n      border-radius: 6px;\n      display: block; }\n      @media (min-width: 769px) {\n        .fKMH2imvVlyWN-E_J8Ytr ._3jYcrF2UXpM0DaUW7v2N9H._3CZecOq_pMX8Ybp7wq0VXm::after {\n          display: none; } }\n  .fKMH2imvVlyWN-E_J8Ytr .DXaKhI0KdO_AMvRrJA1Uz {\n    display: flex;\n    align-items: center; }\n    .fKMH2imvVlyWN-E_J8Ytr .DXaKhI0KdO_AMvRrJA1Uz ._12SkNHB6uAcn3Nr5m87Dv3 {\n      display: block;\n      font-size: 14px;\n      font-weight: 700;\n      line-height: 30px;\n      margin-left: 5px;\n      white-space: nowrap; }\n      @media (max-width: 768px) {\n        .fKMH2imvVlyWN-E_J8Ytr .DXaKhI0KdO_AMvRrJA1Uz ._12SkNHB6uAcn3Nr5m87Dv3 {\n          display: none; } }\n    .fKMH2imvVlyWN-E_J8Ytr .DXaKhI0KdO_AMvRrJA1Uz ._26tWpkJqj0GnCfpp5X_XT3 {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 16px;\n      height: 16px;\n      margin-left: 12px; }\n      .fKMH2imvVlyWN-E_J8Ytr .DXaKhI0KdO_AMvRrJA1Uz ._26tWpkJqj0GnCfpp5X_XT3 img {\n        transition: all 0.5s; }\n  @media (min-width: 769px) {\n    .fKMH2imvVlyWN-E_J8Ytr:hover, .fKMH2imvVlyWN-E_J8Ytr._1C66unEGOCwLzLHeXB7Zxb {\n      background-color: rgba(85, 85, 85, 0.4); } }\n  .fKMH2imvVlyWN-E_J8Ytr:hover .DXaKhI0KdO_AMvRrJA1Uz ._12SkNHB6uAcn3Nr5m87Dv3, .fKMH2imvVlyWN-E_J8Ytr._1C66unEGOCwLzLHeXB7Zxb .DXaKhI0KdO_AMvRrJA1Uz ._12SkNHB6uAcn3Nr5m87Dv3 {\n    display: block; }\n    @media (max-width: 768px) {\n      .fKMH2imvVlyWN-E_J8Ytr:hover .DXaKhI0KdO_AMvRrJA1Uz ._12SkNHB6uAcn3Nr5m87Dv3, .fKMH2imvVlyWN-E_J8Ytr._1C66unEGOCwLzLHeXB7Zxb .DXaKhI0KdO_AMvRrJA1Uz ._12SkNHB6uAcn3Nr5m87Dv3 {\n        display: none; } }\n  .fKMH2imvVlyWN-E_J8Ytr._1C66unEGOCwLzLHeXB7Zxb .DXaKhI0KdO_AMvRrJA1Uz ._26tWpkJqj0GnCfpp5X_XT3 {\n    transform: rotate(180deg); }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "_3-S7ERzJfyhbHGt11EIpER",
	"hide-not-mobile": "_3rust1gttUzFUo5G6HwRBj",
	"userInfoContainer": "fKMH2imvVlyWN-E_J8Ytr",
	"avatarContainer": "_3jYcrF2UXpM0DaUW7v2N9H",
	"avatar": "_1rDJnekJrLVLis92R02FDc",
	"newNotifications": "_3CZecOq_pMX8Ybp7wq0VXm",
	"handleContainer": "DXaKhI0KdO_AMvRrJA1Uz",
	"handle": "_12SkNHB6uAcn3Nr5m87Dv3",
	"dropdownIcon": "_26tWpkJqj0GnCfpp5X_XT3",
	"isUserPopupOpen": "_1C66unEGOCwLzLHeXB7Zxb"
};

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var _SwitchBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51);
/* harmony import */ var _DropdownBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48);




(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();










var ItemControl = function ItemControl(_ref) {
  var control = _ref.control,
      name = _ref.name,
      value = _ref.value,
      options = _ref.options,
      _onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  return control === 'checkbox' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CheckBox__WEBPACK_IMPORTED_MODULE_8__["default"], {
    checked: value,
    onClick: function onClick() {
      return _onChange(name, !value);
    }
  }) : control === 'switch' ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SwitchBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    checked: value,
    onClick: function onClick() {
      return _onChange(name, !value);
    }
  }) : control === 'dropdown' && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_DropdownBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
    open: dropdownOpen,
    onClick: function onClick() {
      return setDropdownOpen(function (x) {
        return !x;
      });
    },
    onClose: function onClose() {
      return setDropdownOpen(false);
    },
    checked: value !== options[0].value,
    value: value,
    options: options,
    onChange: function onChange(value) {
      return _onChange(name, value);
    }
  });
};

ItemControl.propTypes = {
  control: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
  /**
   * Render option controls.
   *
   * @param item {item} The option object
   * @param onChange {function} Called with name (eg. website) and the new value
   */

};

var Item = function Item(_ref2) {
  var item = _ref2.item,
      onChange = _ref2.onChange;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['list-item']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['left']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['title']
  }, item.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['description']
  }, item.description)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['website']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ItemControl, {
    control: item.websiteControl,
    name: "website",
    value: item.website,
    options: item.websiteOptions,
    onChange: onChange
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['as-email']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ItemControl, {
    control: item.emailControl,
    name: "email",
    value: item.email,
    options: item.emailOptions,
    onChange: onChange
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['description-mobile']
  }, item.description));
};

Item.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

var NotificationSettings = function NotificationSettings(_ref3) {
  var open = _ref3.open,
      settings = _ref3.settings,
      theme = _ref3.theme,
      onChange = _ref3.onChange,
      onClose = _ref3.onClose,
      onSave = _ref3.onSave;
  var settingsWithId = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return settings.map(function (x, i) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, x, {
        id: x.id || i
      });
    });
  }, [settings]);
  var categories = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return lodash__WEBPACK_IMPORTED_MODULE_6___default.a.uniq(settingsWithId.map(function (x) {
      return x.category;
    })).map(function (category) {
      return {
        category: category,
        settings: settingsWithId.filter(function (x) {
          return x.category === category;
        })
      };
    });
  }, [settingsWithId]);

  var createHandleChangeItem = function createHandleChangeItem(item) {
    return function (name, value) {
      var _settings = settingsWithId.map(function (x) {
        x = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, x);

        if (x.id === item.id) {
          x[name] = value;
        }

        delete x.id;
        return x;
      });

      item = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, item, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
      delete item.id;
      onChange(_settings, item, name);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['settings-dialog'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['theme-wrapper'], "theme-".concat(theme), open && _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.open)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['header-nav-ui']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['settings-nav']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['tc-logo'],
    src: "../../assets/images/tc-logo.svg",
    alt: "logo"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['title']
  }, "Topcoder Settings"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    role: "button",
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['close-btn'],
    onClick: onClose
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "../../assets/images/icon-close.svg",
    alt: "close"
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['settings-panel']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['title']
  }, "Notifications"), categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['panel-content'],
      key: category.category
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['section-title']
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['left']
    }, category.category), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['website']
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("em", null, "Website"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['as-email']
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("em", null, "As email")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['section-list']
    }, category.settings.map(function (item, i) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Item, {
        item: item,
        key: "item-".concat(i),
        onChange: createHandleChangeItem(item)
      });
    })));
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['bottom-btn']
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    role: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['btn'], _styles_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a['btn-gray']),
    onClick: onSave
  }, "Save settings"))));
};

NotificationSettings.defaultProps = {
  theme: 'light',
  settings: [{
    category: 'Project notifications',
    title: 'New posts and replies',
    description: "Get a notification any time somebody posts on your project. This will make sure you can stay up-to-date with what's happening on your project.",
    websiteControl: 'checkbox',
    website: true,
    emailControl: 'dropdown',
    email: 'immediately',
    emailOptions: [{
      value: 'off',
      label: 'Off'
    }, {
      value: 'immediately',
      label: 'Immediately'
    }, {
      value: 'daily',
      label: 'Daily'
    }, {
      value: 'everyOtherDay',
      label: 'Every other day'
    }]
  }]
};
NotificationSettings.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Array of options object, each with properties:
   *
   *   - id (optional)
   *   - title {string} Option title
   *   - description {string} Option description
   *   - category {string} Option category. Eg. Project notifications
   *   - websiteControl {string(checkbox|switch|dropdown)} Type of control for website
   *   - website {bool|string} Website value
   *   - websiteOptions {array({ value, label })} Website options for dropdown
   *   - emailControl {string(checkbox|switch|dropdown)} Type of control for email
   *   - email {bool|string} Email value
   *   - emailOptions {array({ value, label })} Email options for dropdown
  */
  settings: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Called when changing settings.
   *
   * @param settings {array} The updated settings
   * @param option {object} The specific settings item that changed
   * @param name {object} The value that changed. Eg. website
   *
  */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /** Called when save button is clicked */
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
var _default = NotificationSettings;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ItemControl, "ItemControl", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationSettings\\index.js");
  reactHotLoader.register(Item, "Item", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationSettings\\index.js");
  reactHotLoader.register(NotificationSettings, "NotificationSettings", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationSettings\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\NotificationSettings\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(63));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(64));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(38));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(44));

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n.eC-XVUOCrLjhmXzHI0vGN {\n  width: 100% !important;\n  height: 100% !important;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n._2xo4uOqkSud82iwvYR3qf1 {\n  position: relative; }\n\n.NlrYxlXgGI3rEqT6M42Jv {\n  display: none !important; }\n\n._3NH1eX76zUIIqougfg1Ymw {\n  display: none; }\n\n._1Z1quIuGPzfYvCkDntIYlb {\n  display: block; }\n\n._1Symr618U2KCrSqSCdIyBj {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  ._1Symr618U2KCrSqSCdIyBj._3xTu4q4J8091vIF0lc5dKR {\n    align-items: flex-start; }\n\n._1bAM9uOkMIPyCzX36IH7ee {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* btn */\n._1jDYKAzHkTnCcpR9MltfnI {\n  font-size: 18px;\n  font-weight: normal;\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  position: relative;\n  text-transform: none;\n  font-weight: bold;\n  display: inline-block; }\n  ._1jDYKAzHkTnCcpR9MltfnI._3dMiiVxCKHoTFlWF5H874_, ._1jDYKAzHkTnCcpR9MltfnI:active, ._1jDYKAzHkTnCcpR9MltfnI:focus {\n    box-shadow: none;\n    outline: 0; }\n\n/* .btn-blue */\n._2DSryVrhvXvqpJW0x0lUDT,\n._2DSryVrhvXvqpJW0x0lUDT:hover,\n._2DSryVrhvXvqpJW0x0lUDT:focus {\n  cursor: pointer;\n  height: 30px;\n  color: #FFFFFF;\n  line-height: 30px;\n  border-radius: 15px;\n  padding: 1px 18px;\n  font-size: 14px;\n  font-family: 'Roboto';\n  font-weight: 700; }\n\n._2DSryVrhvXvqpJW0x0lUDT:hover {\n  opacity: 0.75; }\n\n._2DSryVrhvXvqpJW0x0lUDT {\n  background-color: #2C95D7; }\n  ._2DSryVrhvXvqpJW0x0lUDT._1MHUFM2yNbOKoVGNISgS3w, ._2DSryVrhvXvqpJW0x0lUDT:disabled, ._2DSryVrhvXvqpJW0x0lUDT[disabled] {\n    pointer-events: none; }\n\n/* .btn-gray */\n._--arUl_Dy5b5W86b7LUv,\n._--arUl_Dy5b5W86b7LUv:hover,\n._--arUl_Dy5b5W86b7LUv:focus {\n  cursor: pointer;\n  height: 30px;\n  color: #FFFFFF;\n  line-height: 30px;\n  border-radius: 4px;\n  padding: 1px 18px;\n  font-size: 13px;\n  background-color: #AAAAAB;\n  font-family: 'Roboto';\n  font-weight: 400; }\n\n._--arUl_Dy5b5W86b7LUv:hover {\n  opacity: 0.75; }\n\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._1P9-Bk4ixH89d314mDbLCU {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._17ggnmpagGsicRppyh_P8y {\n    display: none; } }\n\n.WAgkW-bDfiYQsjyNB9Xxt {\n  display: none;\n  background-color: #D4D4D4;\n  overflow: auto;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10; }\n  .WAgkW-bDfiYQsjyNB9Xxt._2v9qkCIvI9h57uZ3T5YH5A {\n    display: block; }\n  .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm {\n    font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n    color: #2A2A2B;\n    position: relative;\n    display: flex;\n    flex-direction: column; }\n    .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm ._2I1SE4gNRECztNNjaAzJ6V {\n      background: #2A2A2B;\n      color: #FFFFFF;\n      height: 60px;\n      position: relative;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center; }\n      .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm ._2I1SE4gNRECztNNjaAzJ6V ._3W_w2YG6HjC9SwP0OlxpFK {\n        margin: 0 30px;\n        justify-self: flex-start;\n        cursor: pointer; }\n      .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm ._2I1SE4gNRECztNNjaAzJ6V a,\n      .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm ._2I1SE4gNRECztNNjaAzJ6V ._2Gvn15ZFPAnE0Wrne00JHX {\n        color: #EDEDF2;\n        font-size: 20px; }\n      .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm ._2I1SE4gNRECztNNjaAzJ6V ._2Wgs3HQby4L8y36XV5D1st {\n        background-color: #808080;\n        border-radius: 29px;\n        width: 30px;\n        height: 30px;\n        margin-right: 25px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer; }\n        @media (max-width: 900px) {\n          .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm ._2I1SE4gNRECztNNjaAzJ6V ._2Wgs3HQby4L8y36XV5D1st {\n            background-color: initial; } }\n        .WAgkW-bDfiYQsjyNB9Xxt ._1W_n_GGLCGjv3fpeGOjSCm ._2I1SE4gNRECztNNjaAzJ6V ._2Wgs3HQby4L8y36XV5D1st img {\n          transform: scale(0.9); }\n  .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr {\n    background-color: #FFFFFF;\n    border-radius: 6px;\n    box-shadow: 0 1px 1px 0 #D5D5D5;\n    width: 720px;\n    margin: 26px auto 26px auto;\n    font-family: 'Roboto';\n    font-weight: 400;\n    padding: 30px 20px; }\n    .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._2Gvn15ZFPAnE0Wrne00JHX {\n      color: #151516;\n      font-size: 28px;\n      font-weight: 300;\n      line-height: 35px;\n      text-align: center;\n      margin-bottom: 20px; }\n    .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe {\n      margin-bottom: 60px; }\n      .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp {\n        background-color: #EBEBEB;\n        border-radius: 4px 4px 0 0;\n        height: 50px;\n        padding: 0 10px;\n        display: flex;\n        align-items: center; }\n        .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp ._2LCm86m8fj5yohjyk2QfRe {\n          color: #151516;\n          font-family: 'Roboto';\n          font-weight: 700;\n          font-size: 15px;\n          line-height: 30px;\n          flex: 0 0 63%; }\n        .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div {\n          color: #151516;\n          font-family: 'Roboto';\n          font-weight: 400;\n          font-size: 13px;\n          line-height: 35px; }\n          .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div._3ALt3PpcD58-qbvFCZ1OLM {\n            flex: 0 0 15%;\n            display: flex;\n            justify-content: center; }\n            .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div._3ALt3PpcD58-qbvFCZ1OLM span {\n              background: url(" + ___CSS_LOADER_URL___18___ + ") left center no-repeat;\n              background-size: 17px;\n              padding-left: 22px; }\n              .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div._3ALt3PpcD58-qbvFCZ1OLM span em {\n                font-style: normal; }\n          .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div.L64aYEiYaYSywXfE0ZIWo {\n            flex: 0 0 22%;\n            display: flex;\n            justify-content: center; }\n            .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div.L64aYEiYaYSywXfE0ZIWo span {\n              background: url(" + ___CSS_LOADER_URL___19___ + ") left center no-repeat;\n              background-size: 17px;\n              padding-left: 22px; }\n              .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div.L64aYEiYaYSywXfE0ZIWo span em {\n                font-style: normal; }\n      .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a {\n        padding-left: 0;\n        margin-top: 0; }\n        .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li {\n          min-height: 50px;\n          padding: 0 10px;\n          box-shadow: 0 1px 0 0 #E0E0E0;\n          padding-bottom: 10px;\n          padding-top: 10px;\n          display: block; }\n          .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li:hover {\n            background-color: #FAFAFB; }\n          .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV {\n            display: flex;\n            align-items: center; }\n            .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV ._2LCm86m8fj5yohjyk2QfRe {\n              flex: 0 0 63%; }\n              .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV ._2LCm86m8fj5yohjyk2QfRe ._2Gvn15ZFPAnE0Wrne00JHX {\n                color: #151516;\n                font-family: 'Roboto';\n                font-weight: 400;\n                font-size: 15px;\n                line-height: 30px;\n                text-align: left;\n                margin-bottom: auto; }\n              .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV ._2LCm86m8fj5yohjyk2QfRe .BUaRF4hgRCYEJJifVxI5x {\n                color: #808080;\n                font-family: 'Roboto';\n                font-weight: 400;\n                font-size: 12px;\n                line-height: 20px;\n                margin-right: 40px; }\n            .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div {\n              color: #151516;\n              font-family: 'Roboto';\n              font-weight: 400;\n              font-size: 13px;\n              line-height: 30px; }\n              .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div._3ALt3PpcD58-qbvFCZ1OLM {\n                flex: 0 0 15%;\n                display: flex;\n                justify-content: center;\n                margin-top: 12px; }\n                .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div._3ALt3PpcD58-qbvFCZ1OLM ._3t0QeK5ghczPa8HZOx-jB6 {\n                  background: url(" + ___CSS_LOADER_URL___20___ + ") left center no-repeat;\n                  background-size: 7px;\n                  width: 12px;\n                  height: 7px;\n                  cursor: pointer; }\n                  .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div._3ALt3PpcD58-qbvFCZ1OLM ._3t0QeK5ghczPa8HZOx-jB6._3-B38j7UutmsO-K5ttodXB {\n                    background: url(" + ___CSS_LOADER_URL___21___ + ") left center no-repeat;\n                    background-size: 10px;\n                    width: 9px;\n                    height: 7px;\n                    margin-left: -5px; }\n              .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div.L64aYEiYaYSywXfE0ZIWo {\n                flex: 0 0 22%;\n                display: flex;\n                justify-content: center;\n                margin-top: 12px; }\n                .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div.L64aYEiYaYSywXfE0ZIWo ._3t0QeK5ghczPa8HZOx-jB6 {\n                  background: url(" + ___CSS_LOADER_URL___20___ + ") left center no-repeat;\n                  background-size: 7px;\n                  width: 12px;\n                  height: 10px; }\n                  .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div.L64aYEiYaYSywXfE0ZIWo ._3t0QeK5ghczPa8HZOx-jB6._3-B38j7UutmsO-K5ttodXB {\n                    background: url(" + ___CSS_LOADER_URL___21___ + ") left center no-repeat;\n                    background-size: 10px;\n                    width: 9px;\n                    height: 7px;\n                    cursor: pointer;\n                    margin-left: -5px; }\n          .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._2tbVwtm8ZbPpSmBqAKlR6z {\n            display: none; }\n    .WAgkW-bDfiYQsjyNB9Xxt ._3N-14AJ4MmXRhhDwqkWGAr ._3bl253IZy8-oMDwdXOyrus {\n      text-align: center; }\n\n@media (max-width: 768px) {\n  ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr {\n    margin-top: 0;\n    margin-bottom: 0;\n    border-radius: 0;\n    width: 100%;\n    padding: 12px 0 32px 0; }\n    ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr > ._2Gvn15ZFPAnE0Wrne00JHX {\n      display: none; }\n    ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp ._2LCm86m8fj5yohjyk2QfRe {\n      flex: 0 0 45%; }\n    ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div._3ALt3PpcD58-qbvFCZ1OLM {\n      flex: 0 0 10%; }\n      ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div._3ALt3PpcD58-qbvFCZ1OLM span {\n        padding-left: 0;\n        width: 22px;\n        height: 22px; }\n        ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div._3ALt3PpcD58-qbvFCZ1OLM span em {\n          display: none; }\n    ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div.L64aYEiYaYSywXfE0ZIWo {\n      flex: 0 0 45%; }\n      ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div.L64aYEiYaYSywXfE0ZIWo span {\n        padding-left: 0;\n        width: 22px;\n        height: 22px; }\n        ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3C90LDZ6cYBmFV1XPg2GDp div.L64aYEiYaYSywXfE0ZIWo span em {\n          display: none; }\n    ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a {\n      padding-left: 0; }\n      ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV ._2LCm86m8fj5yohjyk2QfRe {\n        flex: 0 0 45%;\n        align-self: flex-start;\n        padding-top: 5px; }\n        ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV ._2LCm86m8fj5yohjyk2QfRe ._2Gvn15ZFPAnE0Wrne00JHX {\n          line-height: 20px; }\n        ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV ._2LCm86m8fj5yohjyk2QfRe .BUaRF4hgRCYEJJifVxI5x {\n          display: none; }\n      ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div._3ALt3PpcD58-qbvFCZ1OLM {\n        flex: 0 0 10%;\n        align-self: flex-start;\n        margin-top: 0; }\n      ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div.L64aYEiYaYSywXfE0ZIWo {\n        flex: 0 0 45%;\n        align-self: flex-start;\n        margin-top: 0; }\n        ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div.L64aYEiYaYSywXfE0ZIWo ._3t0QeK5ghczPa8HZOx-jB6 {\n          margin-top: 12px; }\n          ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div.L64aYEiYaYSywXfE0ZIWo ._3t0QeK5ghczPa8HZOx-jB6._3-B38j7UutmsO-K5ttodXB {\n            margin-top: 13px; }\n        ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._3nXiD0KUnXINwk4FYwwoIV div.L64aYEiYaYSywXfE0ZIWo ._1FOQUwg-2XS6hvLZP1WRAX {\n          margin-top: 2px; }\n      ._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr._3N-14AJ4MmXRhhDwqkWGAr ._1gulSyfqud0UjtTcdoSOAe ._3tp6rAbLKoZcIUAaPiTb5a li ._2tbVwtm8ZbPpSmBqAKlR6z {\n        display: block;\n        color: #808080;\n        font-family: 'Roboto';\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 20px;\n        margin-top: 10px; } }\n", ""]);

// Exports
exports.locals = {
	"wrap-all": "eC-XVUOCrLjhmXzHI0vGN",
	"relative": "_2xo4uOqkSud82iwvYR3qf1",
	"hide": "NlrYxlXgGI3rEqT6M42Jv",
	"desktop-hide": "_3NH1eX76zUIIqougfg1Ymw",
	"desktop-show": "_1Z1quIuGPzfYvCkDntIYlb",
	"flex-grid": "_1Symr618U2KCrSqSCdIyBj",
	"item-start": "_3xTu4q4J8091vIF0lc5dKR",
	"icons": "_1bAM9uOkMIPyCzX36IH7ee",
	"btn": "_1jDYKAzHkTnCcpR9MltfnI",
	"active": "_3dMiiVxCKHoTFlWF5H874_",
	"btn-blue": "_2DSryVrhvXvqpJW0x0lUDT",
	"disabled": "_1MHUFM2yNbOKoVGNISgS3w",
	"btn-gray": "_--arUl_Dy5b5W86b7LUv",
	"mobile-only": "_1P9-Bk4ixH89d314mDbLCU",
	"hide-not-mobile": "_17ggnmpagGsicRppyh_P8y",
	"settings-dialog": "WAgkW-bDfiYQsjyNB9Xxt",
	"open": "_2v9qkCIvI9h57uZ3T5YH5A",
	"header-nav-ui": "_1W_n_GGLCGjv3fpeGOjSCm",
	"settings-nav": "_2I1SE4gNRECztNNjaAzJ6V",
	"tc-logo": "_3W_w2YG6HjC9SwP0OlxpFK",
	"title": "_2Gvn15ZFPAnE0Wrne00JHX",
	"close-btn": "_2Wgs3HQby4L8y36XV5D1st",
	"settings-panel": "_3N-14AJ4MmXRhhDwqkWGAr",
	"panel-content": "_1gulSyfqud0UjtTcdoSOAe",
	"section-title": "_3C90LDZ6cYBmFV1XPg2GDp",
	"left": "_2LCm86m8fj5yohjyk2QfRe",
	"website": "_3ALt3PpcD58-qbvFCZ1OLM",
	"as-email": "L64aYEiYaYSywXfE0ZIWo",
	"section-list": "_3tp6rAbLKoZcIUAaPiTb5a",
	"list-item": "_3nXiD0KUnXINwk4FYwwoIV",
	"description": "BUaRF4hgRCYEJJifVxI5x",
	"check-icon": "_3t0QeK5ghczPa8HZOx-jB6",
	"checked": "_3-B38j7UutmsO-K5ttodXB",
	"description-mobile": "_2tbVwtm8ZbPpSmBqAKlR6z",
	"bottom-btn": "_3bl253IZy8-oMDwdXOyrus",
	"switch-box": "_1FOQUwg-2XS6hvLZP1WRAX"
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n._3iN6GG9R7O17fAeKetBoaH {\n  background-color: #C0C0C0;\n  border-radius: 14px;\n  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  width: 48px;\n  height: 25px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer; }\n  ._3iN6GG9R7O17fAeKetBoaH:hover {\n    opacity: 0.75; }\n  ._3iN6GG9R7O17fAeKetBoaH ._1Ms7yTjX__D9mbI3JGfMse,\n  ._3iN6GG9R7O17fAeKetBoaH ._2odfs98GPxgLxdtl1Y8riF {\n    color: #FAFAFB;\n    font-family: 'Roboto';\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 14px;\n    line-height: 26px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column; }\n  ._3iN6GG9R7O17fAeKetBoaH ._1Ms7yTjX__D9mbI3JGfMse {\n    margin-left: 7px;\n    display: none; }\n  ._3iN6GG9R7O17fAeKetBoaH ._2odfs98GPxgLxdtl1Y8riF {\n    margin-right: 7px; }\n  ._3iN6GG9R7O17fAeKetBoaH .oHo2PeH7-1KAmOjR6b2KG {\n    background-color: #FFFFFF;\n    border-radius: 100%;\n    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.35);\n    width: 17px;\n    height: 17px;\n    margin-top: 4px;\n    margin-left: 4px;\n    margin-right: 4px; }\n  ._3iN6GG9R7O17fAeKetBoaH._3UTM5pJ7_T3ekWDh5HwQRZ {\n    background-color: #0681FF; }\n    ._3iN6GG9R7O17fAeKetBoaH._3UTM5pJ7_T3ekWDh5HwQRZ ._1Ms7yTjX__D9mbI3JGfMse {\n      display: block; }\n    ._3iN6GG9R7O17fAeKetBoaH._3UTM5pJ7_T3ekWDh5HwQRZ ._2odfs98GPxgLxdtl1Y8riF {\n      display: none; }\n", ""]);

// Exports
exports.locals = {
	"switch-box": "_3iN6GG9R7O17fAeKetBoaH",
	"label-on": "_1Ms7yTjX__D9mbI3JGfMse",
	"label-off": "_2odfs98GPxgLxdtl1Y8riF",
	"dot": "oHo2PeH7-1KAmOjR6b2KG",
	"checked": "_3UTM5pJ7_T3ekWDh5HwQRZ"
};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76);
/* harmony import */ var _MobileSubNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77);
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78);
/* harmony import */ var _PrimaryNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79);
/* harmony import */ var _SubNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83);



(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).enterModule;
  enterModule && enterModule(module);
})();











var moreId = 'more';
var id = 1;
var idForSecondary = 1000;

var initMenuId = function initMenuId(menu, profileHandle, loggedIn) {
  id = 1;
  menu = menu.map(function (level1) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, level1, {
      id: level1.id || id++,
      subMenu: level1.subMenu && level1.subMenu.map(function (level2) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, level2, {
          id: level2.id || id++,
          subMenu: level2.subMenu && level2.subMenu.map(function (level3) {
            return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, level3, {
              id: level3.id || id++
            });
          })
        });
      }),
      secondaryMenu: loggedIn && profileHandle ? level1.secondaryMenuForLoggedInUser : level1.secondaryMenuForGuest
    });
  });
  menu = menu.map(function (level1) {
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, level1, {
      secondaryMenu: level1.secondaryMenu && level1.secondaryMenu.map(function (levelsec) {
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, levelsec, {
          id: levelsec.id || idForSecondary++,
          // set user profile link
          href: levelsec.id !== 'myprofile' ? levelsec.href || '#' : profileHandle ? "/members/".concat(profileHandle) : '/'
        });
      })
    });
  });
  return menu;
};
/**
 * TopNav is the main navigation component.
 */


var TopNav = function TopNav(_ref) {
  var _menu = _ref.menu,
      rightMenu = _ref.rightMenu,
      logo = _ref.logo,
      theme = _ref.theme,
      currentLevel1Id = _ref.currentLevel1Id,
      onChangeLevel1Id = _ref.onChangeLevel1Id,
      path = _ref.path,
      setOpenMore = _ref.setOpenMore,
      openMore = _ref.openMore,
      loggedIn = _ref.loggedIn,
      profileHandle = _ref.profileHandle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    refs: {},
    slide: {}
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 1),
      cache = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      collapsed = _useState4[0],
      setCollapsed = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      activeLevel1Id = _useState6[0],
      setActiveLevel1Id = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      activeLevel2Id = _useState8[0],
      setActiveLevel2Id = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState9, 2),
      activeLevel3Id = _useState10[0],
      setActiveLevel3Id = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState11, 2),
      showLevel3 = _useState12[0],
      setShowLevel3 = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState13, 2),
      forceHideLevel3 = _useState14[0],
      setforceHideLevel3 = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState15, 2),
      searchOpened = _useState16[0],
      setSearchOpened = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState17, 2),
      showChosenArrow = _useState18[0],
      setShowChosenArrow = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState19, 2),
      chosenArrowX = _useState20[0],
      setChosenArrowX = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState21, 2),
      chosenArrowTick = _useState22[0],
      setChosenArrowTick = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState24 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState23, 2),
      showIconSelect = _useState24[0],
      setShowIconSelect = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState26 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState25, 2),
      iconSelectX = _useState26[0],
      setIconSelectX = _useState26[1];

  var menuWithId = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return initMenuId(_menu, profileHandle, loggedIn);
  }, [_menu, profileHandle, loggedIn]);

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(menuWithId),
      _useState28 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState27, 2),
      leftNav = _useState28[0],
      setLeftNav = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState30 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState29, 2),
      showLeftMenu = _useState30[0],
      setShowLeftMenu = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState32 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState31, 2),
      showMobileSubMenu = _useState32[0],
      setShowMobileSubMenu = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState34 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState33, 2),
      moreMenu = _useState34[0],
      setMoreMenu = _useState34[1];

  var regenerateMoreMenu = function regenerateMoreMenu() {
    return setMoreMenu([]);
  };

  var createSetRef = function createSetRef(id) {
    return function (el) {
      cache.refs[id] = el;
    };
  };

  var findLevel1Menu = function findLevel1Menu(level1Id) {
    return leftNav.find(function (level1) {
      return level1.id === level1Id;
    });
  };

  var findLevel2Menu = function findLevel2Menu(level1Id, level2Id) {
    var menu1 = findLevel1Menu(level1Id);
    return menu1 && menu1.subMenu && menu1.subMenu.find(function (level2) {
      return level2.id === level2Id;
    });
  };

  var activeMenu1 = findLevel1Menu(activeLevel1Id);
  var activeMenu2 = findLevel2Menu(activeLevel1Id, activeLevel2Id);
  var startSlide = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setLeftNav(function (leftNav) {
      return leftNav.map(function (menu) {
        if (!cache.refs[menu.id]) return menu;
        cache.slide[menu.id] = true;
        var el = cache.refs[menu.id];
        var rect = el.getBoundingClientRect();
        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, menu, {
          initialX: rect.x
        });
      });
    });
  }, [cache.refs, cache.slide]);
  var getMenuCenter = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (menuId) {
    var el = cache.refs[menuId];
    var rect = el.getBoundingClientRect();
    return rect.x + rect.width / 2;
  }, [cache.refs]);
  var setChosenArrowPos = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (menuId) {
    setChosenArrowX(getMenuCenter(menuId));
  }, [setChosenArrowX, getMenuCenter]);

  var setIconSelectPos = function setIconSelectPos(menuId) {
    // wait for menuId element to get positioned in its place
    setTimeout(function () {
      setIconSelectX(getMenuCenter(menuId));
    }, 0);
  };

  var handleClickLogo = function handleClickLogo() {};

  var expandMenu = function expandMenu(menuId, menu2Id) {
    if (!menuId) return;
    createHandleClickLevel1(menuId, false)();
    setTimeout(function () {
      if (menu2Id) createHandleClickLevel2(menu2Id, false)();else setShowChosenArrow(false)();
    }, 0);
  };

  var createHandleClickLevel1 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (menuId, isClick) {
    return function () {
      if (!menuId) return;
      setOpenMore(false);
      setCollapsed(false);
      setActiveLevel1Id(menuId);
      onChangeLevel1Id(menuId);
      setActiveLevel2Id(); // isClick means that its clicked by user. !isClick is when we click programmatically

      setShowLevel3(true);
      if (isClick) setforceHideLevel3(false);
      startSlide();
      setTimeout(function () {
        // wait for sliding to end before showing arrow for the first time
        setShowChosenArrow(true);
      }, collapsed ? 250 : 0); // trigger the execution of useLayoutEffect below, this is necessary because
      // the other dependencies don't change

      setChosenArrowTick(function (x) {
        return x + 1;
      });
    };
  }, [collapsed, onChangeLevel1Id, startSlide]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (currentLevel1Id !== activeLevel1Id) {
      !collapsed && currentLevel1Id && createHandleClickLevel1(currentLevel1Id, false)();
    }
  }, [currentLevel1Id, activeLevel1Id, createHandleClickLevel1]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    // get final menu pos before it slide. Do this before sliding start, or
    // we'll get incorrect pos
    activeLevel1Id && setChosenArrowPos(activeLevel1Id);
  }, [activeLevel1Id, setChosenArrowPos, chosenArrowTick, showLeftMenu]);

  var createHandleClickLevel2 = function createHandleClickLevel2(menuId, isClick) {
    return function () {
      setOpenMore(false);
      setActiveLevel2Id(menuId);
      setShowLevel3(true);
      if (isClick) setforceHideLevel3(false);
      setChosenArrowPos(menuId);
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // update level3 select icon, show it only if current menu is as same as menu address in url
    var _getMenuIdsFromPath = getMenuIdsFromPath(menuWithId, path),
        m1 = _getMenuIdsFromPath.m1,
        m2 = _getMenuIdsFromPath.m2,
        m3 = _getMenuIdsFromPath.m3;

    if (m3) {
      // show level 3 icon if active menu menuLevel2 is as same as url
      // or if level2 menu (in both menu and url) is null, and active menu level1 is as same as url
      if (m2 === activeLevel2Id || !m2 && !activeLevel2Id && m1 === activeLevel1Id) {
        setActiveLevel3Id(m3);
        setIconSelectPos(m3);
        setShowIconSelect(true);
      } else {
        setShowIconSelect(false);
      }
    }
  }, [activeLevel1Id, activeLevel2Id, path]);

  var createHandleClickLevel3 = function createHandleClickLevel3(menuId) {
    return function () {
      setActiveLevel3Id(menuId);
      setIconSelectPos(menuId);
    };
  };

  var handleClickMore = function handleClickMore() {
    return setOpenMore(function (x) {
      return !x;
    });
  };

  var handleCloseMore = function handleCloseMore() {
    return setOpenMore(false);
  };

  var handleSearchPanel = function handleSearchPanel(x) {
    setSearchOpened(x);
    cache.refs.searchInputBox.value = '';
  };

  var createHandleClickMoreItem = function createHandleClickMoreItem(menuId) {
    return function () {
      setOpenMore(false);
      setActiveLevel2Id(menuId);
      setShowLevel3(true);
      setforceHideLevel3(false);
      setChosenArrowPos(moreId); // let the level 3 menu mounted first for sliding indicator to work

      setTimeout(function () {
        var menu = findLevel2Menu(activeLevel1Id, menuId);

        if (menu && menu.subMenu) {
          // select first level 3 item
          setActiveLevel3Id(menu.subMenu[0].id); // this requires the item element to be mounted first

          setIconSelectPos(menu.subMenu[0].id);
        }
      });
      !showIconSelect && setTimeout(function () {
        return setShowIconSelect(true);
      }, 300);
    };
  };

  var handleClickLeftMenu = function handleClickLeftMenu() {
    return setShowLeftMenu(function (x) {
      return !x;
    });
  };

  var createHandleClickLevel2Mobile = function createHandleClickLevel2Mobile(menuId) {
    return function () {
      setShowLeftMenu(false);
      setActiveLevel2Id(menuId);
    };
  };

  var createHandleClickLevel3Mobile = function createHandleClickLevel3Mobile(menuId) {
    return function () {
      setActiveLevel3Id(menuId);
      setShowMobileSubMenu(false);
    };
  };

  var handleClickSubMenu = function handleClickSubMenu() {
    return setShowMobileSubMenu(function (x) {
      return !x;
    });
  };

  var setOverflow = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (set) {
    cache.refs.primaryNav.style.overflow = set ? 'hidden' : '';
    var containers = Object.keys(cache.refs).filter(function (key) {
      return key.startsWith('level2Container');
    }).map(function (key) {
      return cache.refs[key];
    });
    containers.forEach(function (el) {
      el.style.overflow = set ? 'hidden' : '';
    });
  }, [cache.refs]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var doSlide = function doSlide() {
      leftNav.forEach(function (menu) {
        if (!cache.slide[menu.id] || !cache.refs[menu.id]) return;
        cache.slide[menu.id] = false;
        var el = cache.refs[menu.id];
        var rect = el.getBoundingClientRect();
        var relativeX = menu.initialX - rect.x;
        el.style.transform = "translateX(".concat(relativeX, "px)");
        setTimeout(function () {
          el.style.transition = 'transform 250ms ease-out';
          el.style.transform = "translateX(0px)";
          setTimeout(function () {
            el.style.transition = '';
            el.style.transform = '';
          }, 250);
        });
      });
    }; // set overflow first to have correct final position


    setOverflow(true);
    doSlide(); // overflow must not be set, otherwise popups won't show

    setOverflow(false);
  }, [cache.slide, cache.refs, leftNav, setOverflow]);

  var handleRightMenuResize = function handleRightMenuResize() {
    regenerateMoreMenu();
  }; // trigger more menu generation on level 1 item change


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setMoreMenu([]);
  }, [activeMenu1]); // show/hide level 2 more menu

  var generateMoreMenu = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    // only proceed if more menu is empty
    if (moreMenu && moreMenu.length) return;
    if (!activeMenu1 || !activeMenu1.subMenu) return;

    var generateMenu = function generateMenu() {
      var newMoreMenu = [];
      var prect;

      for (var i = activeMenu1.subMenu.length - 1; i >= 0; i--) {
        var menu = activeMenu1.subMenu[i];
        var menuEl = cache.refs[menu.id];
        if (!menuEl) return;
        var rect = menuEl.getBoundingClientRect();

        if (!prect) {
          prect = menuEl.parentElement.getBoundingClientRect();
        } // add the item if it's overflowing


        if (rect.right > prect.right) {
          newMoreMenu.unshift(menu);
        } else if (newMoreMenu.length && prect.right - rect.right < 100) {
          // make sure we have space for the 'more' menu
          newMoreMenu.unshift(menu);
        } else {
          break;
        }
      }

      newMoreMenu.length && setMoreMenu(newMoreMenu);
    };

    setOverflow(true);
    generateMenu();
    setOverflow(false);
  }, [activeMenu1, cache.refs, moreMenu, setOverflow]); // generate more menu before paint

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    generateMoreMenu();
  }, [generateMoreMenu]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // trigger more menu generation on resize
    var onResize = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.debounce(function () {
      regenerateMoreMenu([]); // tick to update menu (reposition arrow)

      setChosenArrowTick(function (x) {
        return x + 1;
      });
    }, 100);

    window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  }, []);

  var getMenuIdsFromPath = function getMenuIdsFromPath(menuWithId_, path_) {
    var found = {
      m1: null,
      m2: null,
      m3: null // If haven't a path just return

    };
    if (!path_) return found;
    menuWithId_.forEach(function (level1) {
      if (level1.href && path_.indexOf(level1.href) > -1) found = {
        m1: level1.id,
        m2: null
      };
      level1.subMenu && level1.subMenu.forEach(function (level2) {
        if (level2.href && path_.indexOf(level2.href) > -1) found = {
          m1: level1.id,
          m2: level2.id
        };
        level2.subMenu && level2.subMenu.forEach(function (level3) {
          if (level3.href && path_.indexOf(level3.href) > -1) {
            if (found.m3) {
              if (level3.href === path_) found = {
                m1: level1.id,
                m2: level2.id,
                m3: level3.id
              };
            } else {
              found = {
                m1: level1.id,
                m2: level2.id,
                m3: level3.id
              };
            }

            if (!activeLevel3Id && level3.collapsed) setforceHideLevel3(true);
          }
        });
      });
      level1.secondaryMenu && level1.secondaryMenu.forEach(function (level3) {
        if (level3.href) {
          // Check if path have parameters
          var href = level3.href.indexOf('?') > -1 ? level3.href.split('?')[0] : level3.href;
          if (path_.indexOf(href) > -1) found = {
            m1: level1.id,
            m3: level3.id
          };
        }
      });
    });
    return found;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!path || !menuWithId[0]) return;
    setLeftNav(menuWithId); // always expand menu on challenge list page and challenge details page
    // also in challenge details page, level 3 menu shouldnt be visible    if (!path || !menuWithId[0]) return

    var _getMenuIdsFromPath2 = getMenuIdsFromPath(menuWithId, path),
        m1 = _getMenuIdsFromPath2.m1,
        m2 = _getMenuIdsFromPath2.m2;

    var forceM2 = null;

    if (path.indexOf('/challenges') > -1) {
      // If All Challenge page
      if (path.match(/challenges\/[0-9]+/)) {
        // If Challenge Details page
        setforceHideLevel3(true);
        forceM2 = getMenuIdsFromPath(menuWithId, '/challenges').m2;
      }
    } else if (path.indexOf('/my-dashboard') > -1 || path.indexOf('/members/' + profileHandle) > -1) {
      // If My Dashboard and My Profile page
      setShowLevel3(true);
    } else if (path.indexOf('/community/learn') > -1 || path.indexOf('/thrive/tracks') > -1) {
      // Show 3rd level menu to Community [ Overview - How It Works ]
      forceM2 = getMenuIdsFromPath(menuWithId, '/community').m2;
    } else if (!m2) {
      setShowLevel3(false);
      setforceHideLevel3(true);
    } // expand first Level1Menu(like work/business) on login / logout.


    setTimeout(function () {
      expandMenu(m1 || 'community', m2 || forceM2);
    });
  }, [path, loggedIn, profileHandle]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.themeWrapper, "theme-".concat(theme))
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerNavUi
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MobileNav__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    showLeftMenu: showLeftMenu,
    logo: logo,
    rightMenu: rightMenu,
    onClickLeftMenu: handleClickLeftMenu
  }), !showLeftMenu && (activeMenu2 || activeMenu1) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MobileSubNav__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    open: showMobileSubMenu,
    menu: activeMenu2 || activeMenu1,
    isSecondaryMenu: !activeMenu2,
    activeChildId: activeLevel3Id,
    onClick: handleClickSubMenu,
    createHandleClickItem: createHandleClickLevel3Mobile
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PrimaryNav__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    collapsed: collapsed,
    showLeftMenu: showLeftMenu,
    logo: logo,
    menu: leftNav,
    rightMenu: rightMenu,
    moreMenu: moreMenu,
    openMore: openMore,
    onCloseMore: handleCloseMore,
    moreId: moreId,
    activeLevel1Id: activeLevel1Id,
    activeLevel2Id: activeLevel2Id,
    onClickLogo: handleClickLogo,
    onRightMenuResize: handleRightMenuResize,
    createHandleClickLevel1: createHandleClickLevel1,
    createHandleClickLevel2: createHandleClickLevel2,
    handleClickMore: handleClickMore,
    createHandleClickMoreItem: createHandleClickMoreItem,
    createSetRef: createSetRef,
    showChosenArrow: showChosenArrow,
    chosenArrowX: chosenArrowX,
    searchOpened: searchOpened,
    toggleSearchOpen: handleSearchPanel
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SubNav__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    open: forceHideLevel3 ? false : showLevel3,
    menu: activeMenu2 || activeMenu1,
    isSecondaryMenu: !activeMenu2,
    activeChildId: activeLevel3Id,
    showIndicator: showIconSelect,
    indicatorX: iconSelectX,
    createHandleClickItem: createHandleClickLevel3,
    createSetRef: createSetRef
  }), showLeftMenu && activeMenu1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MobileMenu__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    menu: activeMenu1,
    activeChildId: activeLevel2Id,
    createHandleClickItem: createHandleClickLevel2Mobile
  })));
};

TopNav.defaultProps = {
  theme: 'light',
  onChangeLevel1Id: function onChangeLevel1Id() {
    return null;
  }
};
TopNav.propTypes = {
  /**
   * Array of menu objects, each with properties:
   *
   *   - title {string|element} The title
   *   - href {string} The href for wrapper anchor
   *   - subMenu {array} Children menu
   */
  menu: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  rightMenu: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  logo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /** light|dark etc */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  currentLevel1Id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  onChangeLevel1Id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  setOpenMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  openMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  loggedIn: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  profileHandle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
var _default = TopNav;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(moreId, "moreId", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\index.js");
  reactHotLoader.register(id, "id", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\index.js");
  reactHotLoader.register(idForSecondary, "idForSecondary", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\index.js");
  reactHotLoader.register(initMenuId, "initMenuId", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\index.js");
  reactHotLoader.register(TopNav, "TopNav", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Namchee\\Desktop\\ProIF\\navigation-component\\src\\components\\TopNav\\index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(2)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n.SLwlRzv2b8FicEx4vbP0x {\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  color: #2A2A2B;\n  position: relative; }\n  .SLwlRzv2b8FicEx4vbP0x a {\n    text-decoration: none; }\n", ""]);

// Exports
exports.locals = {
	"headerNavUi": "SLwlRzv2b8FicEx4vbP0x"
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._2CrPaxU700CNjSaHqSs4El {\n    display: none; } }\n\n@media (min-width: 769px) {\n  .DhsJqfKHix2ZvO5KpShtm {\n    display: none; } }\n\n.C0Avcqx93-GrYR5SPlLlb {\n  height: 60px;\n  background: #2A2A2B;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  align-items: center; }\n  @media (min-width: 769px) {\n    .C0Avcqx93-GrYR5SPlLlb {\n      display: none; } }\n  .C0Avcqx93-GrYR5SPlLlb ._3kl0wsG1Cq8cFSytbmGQtu {\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    left: 0;\n    top: 0; }\n    .C0Avcqx93-GrYR5SPlLlb ._3kl0wsG1Cq8cFSytbmGQtu ._3hmILlaUHT2n29YtTy1Rk1 {\n      background-color: transparent;\n      border: none;\n      padding: 0;\n      cursor: pointer; }\n      .C0Avcqx93-GrYR5SPlLlb ._3kl0wsG1Cq8cFSytbmGQtu ._3hmILlaUHT2n29YtTy1Rk1:focus {\n        outline: none; }\n      .C0Avcqx93-GrYR5SPlLlb ._3kl0wsG1Cq8cFSytbmGQtu ._3hmILlaUHT2n29YtTy1Rk1 img {\n        display: block; }\n  .C0Avcqx93-GrYR5SPlLlb ._1b1mrG1Ri9bAohJFwwPgTD {\n    font-family: 'Roboto';\n    font-weight: 700;\n    cursor: pointer;\n    color: #FFFFFF;\n    font-size: 16px;\n    line-height: 30px;\n    padding-right: 20px;\n    position: absolute;\n    right: 0; }\n\n._1x3yCnfohAbeftdkwOUSCz {\n  left: 18px;\n  position: absolute;\n  top: 16px; }\n  @media (min-width: 769px) {\n    ._1x3yCnfohAbeftdkwOUSCz {\n      display: none; } }\n\n._2gtHUbJhCv6Da5pkn9UzBV {\n  padding: 6px 12px 0;\n  position: relative; }\n  @media (min-width: 769px) {\n    ._2gtHUbJhCv6Da5pkn9UzBV {\n      display: none; } }\n  ._2gtHUbJhCv6Da5pkn9UzBV input {\n    background: none;\n    border: 1px solid #7F7F7F;\n    box-shadow: none;\n    color: #FFFFFF;\n    font: 16px \"Roboto\", Helvetica, Arial, sans-serif !important;\n    height: 32px;\n    outline: none;\n    padding-left: 30px !important; }\n    ._2gtHUbJhCv6Da5pkn9UzBV input::placeholder {\n      color: #7F7F7F; }\n    ._2gtHUbJhCv6Da5pkn9UzBV input:hover {\n      border: 1px solid #7F7F7F; }\n    ._2gtHUbJhCv6Da5pkn9UzBV input:focus {\n      border: 1px solid #0596dc; }\n  ._2gtHUbJhCv6Da5pkn9UzBV input:active,\n  ._2gtHUbJhCv6Da5pkn9UzBV input:focus,\n  ._2gtHUbJhCv6Da5pkn9UzBV input:hover {\n    box-shadow: none;\n    outline: none; }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "_2CrPaxU700CNjSaHqSs4El",
	"hide-not-mobile": "DhsJqfKHix2ZvO5KpShtm",
	"mobileNav": "C0Avcqx93-GrYR5SPlLlb",
	"leftMenuContainer": "_3kl0wsG1Cq8cFSytbmGQtu",
	"menuBtn": "_3hmILlaUHT2n29YtTy1Rk1",
	"rightMenu": "_1b1mrG1Ri9bAohJFwwPgTD",
	"icon": "_1x3yCnfohAbeftdkwOUSCz",
	"search": "_2gtHUbJhCv6Da5pkn9UzBV"
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._2NYoCOm257hoVrru5r_nl_ {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._2da-dNVd3gmk52j2eeXNiB {\n    display: none; } }\n\n.hOuBbW_rRrqTQNE2yX0U0 {\n  width: 100%;\n  height: 60px;\n  left: 0;\n  top: 60px;\n  z-index: 1; }\n  @media (min-width: 769px) {\n    .hOuBbW_rRrqTQNE2yX0U0 {\n      display: none; } }\n  .hOuBbW_rRrqTQNE2yX0U0 ._3-kA2UFoGsUFDu0UPt8kj7 {\n    z-index: -1;\n    background: #2A2A2B;\n    opacity: 0.8;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    display: none; }\n    ._2jL9yEll0DYK_TRUWo_ovR .hOuBbW_rRrqTQNE2yX0U0 ._3-kA2UFoGsUFDu0UPt8kj7 {\n      display: block; }\n  .hOuBbW_rRrqTQNE2yX0U0 .NfQcGJQtbQeFU1YGz1HnX {\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    background: #264346;\n    width: 100%;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer; }\n    .hOuBbW_rRrqTQNE2yX0U0 .NfQcGJQtbQeFU1YGz1HnX:focus {\n      outline: none; }\n    .hOuBbW_rRrqTQNE2yX0U0 .NfQcGJQtbQeFU1YGz1HnX span {\n      font-family: 'Roboto';\n      font-weight: 400;\n      color: #FFFFFF;\n      font-size: 28px;\n      line-height: 40px; }\n    .hOuBbW_rRrqTQNE2yX0U0 .NfQcGJQtbQeFU1YGz1HnX svg {\n      margin-left: 5px; }\n    .hOuBbW_rRrqTQNE2yX0U0 .NfQcGJQtbQeFU1YGz1HnX img {\n      margin-left: 8px; }\n  .hOuBbW_rRrqTQNE2yX0U0 ._2nYpKu9QByZ0NWfxANd8ld {\n    display: flex;\n    flex-direction: column;\n    padding: 15px 20px;\n    background: #264346;\n    border-top: 1px solid #1F7E8A;\n    width: 100%;\n    z-index: 999;\n    position: absolute; }\n    .hOuBbW_rRrqTQNE2yX0U0 ._2nYpKu9QByZ0NWfxANd8ld .MGLhxdV4f_pnHZOuoeaXO {\n      color: #FFFFFF;\n      font-size: 18px;\n      line-height: 40px;\n      height: 40px;\n      margin: 5px 0;\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n      .hOuBbW_rRrqTQNE2yX0U0 ._2nYpKu9QByZ0NWfxANd8ld .MGLhxdV4f_pnHZOuoeaXO._368J3UvBv86TM6dh3awQYd {\n        font-family: 'Roboto';\n        font-weight: 700;\n        pointer-events: none;\n        cursor: default; }\n        .hOuBbW_rRrqTQNE2yX0U0 ._2nYpKu9QByZ0NWfxANd8ld .MGLhxdV4f_pnHZOuoeaXO._368J3UvBv86TM6dh3awQYd::before {\n          content: \"\";\n          height: 30px;\n          width: 3px;\n          border-radius: 1.5px;\n          background: #FFFFFF;\n          display: inline-block;\n          margin-right: 10px; }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "_2NYoCOm257hoVrru5r_nl_",
	"hide-not-mobile": "_2da-dNVd3gmk52j2eeXNiB",
	"mobileSubNav": "hOuBbW_rRrqTQNE2yX0U0",
	"mobileSubNavMask": "_3-kA2UFoGsUFDu0UPt8kj7",
	"mobileSubNavOpen": "_2jL9yEll0DYK_TRUWo_ovR",
	"mobileSubNavHeader": "NfQcGJQtbQeFU1YGz1HnX",
	"mobileSubNavContent": "_2nYpKu9QByZ0NWfxANd8ld",
	"mobileSubNavChild": "MGLhxdV4f_pnHZOuoeaXO",
	"mobileSubNavChildOpen": "_368J3UvBv86TM6dh3awQYd"
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* colors */\n/* Grayscale colors. */\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._2YwPStPoDEjIb-PbIGNtsb {\n    display: none; } }\n\n@media (min-width: 769px) {\n  .RAtQ7LjJWDfIoiWEpF2mA {\n    display: none; } }\n\n.JxBIkbv7v_sJK1N_vMeFs {\n  display: flex;\n  flex-direction: column;\n  padding: 15px 20px;\n  z-index: 1; }\n  .theme-light .JxBIkbv7v_sJK1N_vMeFs {\n    background: #FBFBFB; }\n  .theme-dark .JxBIkbv7v_sJK1N_vMeFs {\n    background: #636363; }\n  .JxBIkbv7v_sJK1N_vMeFs ._3ntC2KHyW7xczldMyA7yqc {\n    font-size: 18px;\n    line-height: 40px;\n    height: 40px;\n    margin: 5px 0;\n    display: flex;\n    align-items: center;\n    cursor: pointer; }\n    .theme-light .JxBIkbv7v_sJK1N_vMeFs ._3ntC2KHyW7xczldMyA7yqc {\n      color: #2A2A2B; }\n    .theme-dark .JxBIkbv7v_sJK1N_vMeFs ._3ntC2KHyW7xczldMyA7yqc {\n      color: #FFFFFF; }\n    .JxBIkbv7v_sJK1N_vMeFs ._3ntC2KHyW7xczldMyA7yqc._1rt8mOYntrOZdAPjpl_QKa {\n      font-family: 'Roboto';\n      font-weight: 700;\n      pointer-events: none;\n      cursor: default; }\n      .JxBIkbv7v_sJK1N_vMeFs ._3ntC2KHyW7xczldMyA7yqc._1rt8mOYntrOZdAPjpl_QKa::before {\n        content: \"\";\n        height: 30px;\n        width: 3px;\n        border-radius: 1.5px;\n        background: #43D7B0;\n        display: inline-block;\n        margin-right: 10px; }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "_2YwPStPoDEjIb-PbIGNtsb",
	"hide-not-mobile": "RAtQ7LjJWDfIoiWEpF2mA",
	"secondaryNavMobile": "JxBIkbv7v_sJK1N_vMeFs",
	"secondaryNavMobileItem": "_3ntC2KHyW7xczldMyA7yqc",
	"secondaryNavMobileItemOpen": "_1rt8mOYntrOZdAPjpl_QKa"
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* colors */\n/* Grayscale colors. */\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  ._1VRR6kMd5HPNbGhUoVw6sa {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._1ZIW4j3_J2yPrkaA0N5M5H {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._1_OJYKtAV_VRTWF41K-8_A {\n    display: none; } }\n\n.w9y3kbj2HBlraVU5kjCay {\n  display: flex; }\n  @media (max-width: 768px) {\n    .w9y3kbj2HBlraVU5kjCay {\n      display: none; } }\n  .w9y3kbj2HBlraVU5kjCay.Zc4bxo2xl4cRudOT9lbVz {\n    display: flex; }\n\n._3OclGxtDScIS3kJx3-Eskw {\n  background: #2A2A2B;\n  color: #FFFFFF;\n  height: 80px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  z-index: 1;\n  flex-grow: 1; }\n  ._3EpSSlLUWcH3CJRZGDXyWu ._3OclGxtDScIS3kJx3-Eskw {\n    overflow: hidden; }\n  @media (max-width: 768px) {\n    ._3OclGxtDScIS3kJx3-Eskw {\n      height: 60px;\n      justify-content: space-around; } }\n\n._3ALxQJpmTtNjkYXZNPxUye {\n  background: #2A2A2B;\n  color: #FFFFFF;\n  height: 80px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  z-index: 1; }\n  @media (max-width: 768px) {\n    ._3ALxQJpmTtNjkYXZNPxUye {\n      display: none; } }\n  ._3ALxQJpmTtNjkYXZNPxUye ._19afvNiE3ExyOixLsg7p9e {\n    margin-right: 20px; }\n\n._25qoGMAMp5tpACmrEhPjJc {\n  margin: 0 50px 0 30px;\n  cursor: pointer; }\n  @media (max-width: 768px) {\n    ._25qoGMAMp5tpACmrEhPjJc {\n      display: none; } }\n  ._25qoGMAMp5tpACmrEhPjJc.PsKz54w3mhOmlfDfYi8V4 {\n    margin-right: auto; }\n  ._25qoGMAMp5tpACmrEhPjJc > * {\n    display: block; }\n\n._32rjY2HOvXZBZUSwC_a4jx {\n  display: block;\n  height: 30px;\n  width: 1px;\n  background: #555555; }\n  @media (min-width: 769px) {\n    ._32rjY2HOvXZBZUSwC_a4jx {\n      display: none; } }\n  ._32rjY2HOvXZBZUSwC_a4jx:first-of-type {\n    display: none; }\n\n._19afvNiE3ExyOixLsg7p9e {\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 30px;\n  margin: 0 30px;\n  padding-right: 5px;\n  position: relative;\n  cursor: pointer; }\n  @media (max-width: 900px) {\n    ._19afvNiE3ExyOixLsg7p9e {\n      margin: 0 20px; } }\n  ._19afvNiE3ExyOixLsg7p9e::before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    left: -30px;\n    top: 0;\n    width: 1px;\n    height: 100%;\n    background: #555555; }\n    @media (max-width: 768px) {\n      ._19afvNiE3ExyOixLsg7p9e::before {\n        display: none; } }\n  ._19afvNiE3ExyOixLsg7p9e._27UQXipCc_Te8TwvfzIi8f {\n    color: #43D7B0; }\n\n._34GhMfx3zSO-nsw2icmQCB {\n  white-space: nowrap;\n  width: 0;\n  opacity: 0;\n  overflow: hidden; }\n  ._34GhMfx3zSO-nsw2icmQCB._1-_eh1GEkSm1Ie2hcIHrLt {\n    display: flex;\n    overflow: unset;\n    margin-right: auto;\n    width: auto;\n    opacity: 1;\n    transition: opacity 400ms ease-in 100ms; }\n    @media (max-width: 768px) {\n      ._34GhMfx3zSO-nsw2icmQCB._1-_eh1GEkSm1Ie2hcIHrLt {\n        display: none; } }\n  ._3EpSSlLUWcH3CJRZGDXyWu ._34GhMfx3zSO-nsw2icmQCB {\n    overflow: hidden; }\n\n._1YF68FTa0xYVBFerysFlRt {\n  font-family: 'Roboto';\n  font-weight: 700;\n  margin-left: 30px;\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  display: flex;\n  position: relative;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-content: flex-start;\n  cursor: pointer; }\n  ._1YF68FTa0xYVBFerysFlRt:first-child {\n    margin-left: 0; }\n  ._1YF68FTa0xYVBFerysFlRt._1POQKSuLHxuhqKjgCytFNW {\n    color: #43D7B0; }\n\n.ISBVAVTXPThf-IcdFVa9z {\n  position: relative; }\n  .ISBVAVTXPThf-IcdFVa9z ._1UEQjA-hNZmulAk-7kHhj2 {\n    background-color: transparent;\n    border: none;\n    padding: 0;\n    position: relative;\n    color: #FFFFFF;\n    margin-left: 20px;\n    width: 74px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .ISBVAVTXPThf-IcdFVa9z ._1UEQjA-hNZmulAk-7kHhj2:focus {\n      outline: none; }\n    .ISBVAVTXPThf-IcdFVa9z ._1UEQjA-hNZmulAk-7kHhj2 ._3EHcZKrNC-kRxRB0inP_X- {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0; }\n    .ISBVAVTXPThf-IcdFVa9z ._1UEQjA-hNZmulAk-7kHhj2 img {\n      margin-left: 8px; }\n  .ISBVAVTXPThf-IcdFVa9z ._3eb96Zkyw2BKU4_9QkalKG {\n    position: absolute;\n    top: 30px;\n    left: 10px;\n    background: #2A2A2B;\n    min-width: 110px;\n    padding: 20px;\n    border-radius: 5px;\n    display: none;\n    flex-direction: column;\n    z-index: 2; }\n    .ISBVAVTXPThf-IcdFVa9z ._3eb96Zkyw2BKU4_9QkalKG a {\n      margin: 10px 0 0;\n      text-align: left;\n      font-weight: 700;\n      font-size: 14px;\n      line-height: 30px;\n      white-space: nowrap; }\n      .ISBVAVTXPThf-IcdFVa9z ._3eb96Zkyw2BKU4_9QkalKG a:first-child {\n        margin: 0; }\n  .ISBVAVTXPThf-IcdFVa9z._3bttaLkKXVIrWu75WOLFpZ .vl4waOECcJkR7W07RZ46P {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1; }\n  .ISBVAVTXPThf-IcdFVa9z._3bttaLkKXVIrWu75WOLFpZ ._3eb96Zkyw2BKU4_9QkalKG {\n    display: flex; }\n  .ISBVAVTXPThf-IcdFVa9z._3bttaLkKXVIrWu75WOLFpZ ._3EHcZKrNC-kRxRB0inP_X- {\n    background-color: #555555;\n    border-radius: 15px;\n    opacity: 0.4;\n    z-index: 0; }\n  .ISBVAVTXPThf-IcdFVa9z._3bttaLkKXVIrWu75WOLFpZ img {\n    -moz-transform: scale(-1, -1);\n    -o-transform: scale(-1, -1);\n    -webkit-transform: scale(-1, -1);\n    transform: scale(-1, -1); }\n\n._1y954HiCL69kCUV5ji4vqm {\n  cursor: pointer;\n  display: inline-block;\n  height: 32px;\n  margin: 11px 20px 11px 0px;\n  padding-left: 12px;\n  position: relative;\n  border-left: 1px solid #7F7F7F;\n  width: 36px; }\n  ._1y954HiCL69kCUV5ji4vqm svg {\n    height: 18px;\n    margin-top: 7px;\n    width: 18px; }\n    ._1y954HiCL69kCUV5ji4vqm svg path {\n      fill: #FFFFFF; }\n  ._1y954HiCL69kCUV5ji4vqm.opened path {\n    fill: #43D7B0; }\n  ._1y954HiCL69kCUV5ji4vqm.opened::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 6px 5px 0;\n    border-color: #43D7B0 transparent transparent transparent;\n    position: absolute;\n    left: 60%;\n    bottom: -3px;\n    margin-left: -6px;\n    background-color: transparent; }\n\n._1A5zHMkLXwCq7ngfPscgI9 {\n  background: #151516;\n  height: 0;\n  margin-top: -10px;\n  opacity: 0.98;\n  overflow: hidden;\n  padding: 0 48px;\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  transition: all 0.25s ease-in-out;\n  z-index: 10; }\n  ._1A5zHMkLXwCq7ngfPscgI9.opened {\n    height: 128px;\n    padding: 48px;\n    transition: all 0.25s ease-in-out; }\n  ._1A5zHMkLXwCq7ngfPscgI9.closed {\n    display: none; }\n  ._1A5zHMkLXwCq7ngfPscgI9 input,\n  ._1A5zHMkLXwCq7ngfPscgI9 input:active,\n  ._1A5zHMkLXwCq7ngfPscgI9 input:focus,\n  ._1A5zHMkLXwCq7ngfPscgI9 input:hover {\n    border: none;\n    border-bottom: 1px solid #FFFFFF;\n    box-shadow: none;\n    font-size: 22px;\n    outline: none;\n    padding-bottom: 3px; }\n    ._1A5zHMkLXwCq7ngfPscgI9 input::placeholder,\n    ._1A5zHMkLXwCq7ngfPscgI9 input:active::placeholder,\n    ._1A5zHMkLXwCq7ngfPscgI9 input:focus::placeholder,\n    ._1A5zHMkLXwCq7ngfPscgI9 input:hover::placeholder {\n      color: #C0C0C0; }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "_1VRR6kMd5HPNbGhUoVw6sa",
	"hide-not-mobile": "_1ZIW4j3_J2yPrkaA0N5M5H",
	"mobileOnly": "_1_OJYKtAV_VRTWF41K-8_A",
	"primaryNavContainer": "w9y3kbj2HBlraVU5kjCay",
	"primaryNavContainerOpen": "Zc4bxo2xl4cRudOT9lbVz",
	"primaryNav": "_3OclGxtDScIS3kJx3-Eskw",
	"moreInit": "_3EpSSlLUWcH3CJRZGDXyWu",
	"primaryNavRight": "_3ALxQJpmTtNjkYXZNPxUye",
	"primaryLevel1": "_19afvNiE3ExyOixLsg7p9e",
	"tcLogo": "_25qoGMAMp5tpACmrEhPjJc",
	"tcLogoPush": "PsKz54w3mhOmlfDfYi8V4",
	"primaryLevel1Separator": "_32rjY2HOvXZBZUSwC_a4jx",
	"primaryLevel1Open": "_27UQXipCc_Te8TwvfzIi8f",
	"primaryLevel2Container": "_34GhMfx3zSO-nsw2icmQCB",
	"primaryLevel2ContainerOpen": "_1-_eh1GEkSm1Ie2hcIHrLt",
	"primaryLevel2": "_1YF68FTa0xYVBFerysFlRt",
	"primaryLevel2Open": "_1POQKSuLHxuhqKjgCytFNW",
	"moreBtnContainer": "ISBVAVTXPThf-IcdFVa9z",
	"moreBtn": "_1UEQjA-hNZmulAk-7kHhj2",
	"moreBtnMask": "_3EHcZKrNC-kRxRB0inP_X-",
	"moreContentContainer": "_3eb96Zkyw2BKU4_9QkalKG",
	"moreOpen": "_3bttaLkKXVIrWu75WOLFpZ",
	"backdrop": "vl4waOECcJkR7W07RZ46P",
	"searchIcon": "_1y954HiCL69kCUV5ji4vqm",
	"searchField": "_1A5zHMkLXwCq7ngfPscgI9"
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");

// Module
exports.push([module.i, "/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* colors */\n/* Grayscale colors. */\n/* colors */\n/* Grayscale colors. */\n@media (min-width: 769px) {\n  .j3BbFQV19TZ2N5Mbc293Q {\n    display: none; } }\n\n@media (min-width: 769px) {\n  ._2hTZPXAUViaj3OKdZ8A4ZG {\n    display: none; } }\n\n._78wgiv2HyCMYL0GFSZd4S {\n  display: none;\n  justify-content: stretch;\n  align-items: center;\n  font-size: 13px;\n  position: relative;\n  z-index: 0;\n  height: 60px;\n  transition: transform 250ms linear;\n  transform: translateY(-60px); }\n  @media (max-width: 768px) {\n    ._78wgiv2HyCMYL0GFSZd4S {\n      display: none !important; } }\n  .theme-light ._78wgiv2HyCMYL0GFSZd4S {\n    background: #FBFBFB;\n    color: #2A2A2B; }\n  .theme-dark ._78wgiv2HyCMYL0GFSZd4S {\n    background: #636363;\n    color: #FFFFFF; }\n  ._78wgiv2HyCMYL0GFSZd4S._2WB6MWJIFPmL_7oRkVDu-f {\n    display: flex;\n    transform: translateY(0px); }\n  ._78wgiv2HyCMYL0GFSZd4S a {\n    margin: 0 15px; }\n    .theme-light ._78wgiv2HyCMYL0GFSZd4S a {\n      color: #2A2A2B; }\n    .theme-dark ._78wgiv2HyCMYL0GFSZd4S a {\n      color: #FFFFFF; }\n  ._78wgiv2HyCMYL0GFSZd4S ._2S1p2zjbfectEyMXeUEyEd {\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    height: 30px; }\n    ._78wgiv2HyCMYL0GFSZd4S ._2S1p2zjbfectEyMXeUEyEd ._1n5D3MtzUT3DNhLzIT22lJ {\n      cursor: pointer;\n      height: 100%;\n      display: flex;\n      position: relative;\n      flex-direction: column;\n      -webkit-justify-content: center;\n      justify-content: center; }\n      ._78wgiv2HyCMYL0GFSZd4S ._2S1p2zjbfectEyMXeUEyEd ._1n5D3MtzUT3DNhLzIT22lJ ._2I4YpNYoj3kDD8DnmILHSU {\n        display: none;\n        bottom: -1px;\n        width: 15px;\n        height: 3px;\n        border-radius: 1.5px;\n        background: #D4D4D4;\n        left: 50%;\n        transform: translate(-50%, -50%); }\n      ._78wgiv2HyCMYL0GFSZd4S ._2S1p2zjbfectEyMXeUEyEd ._1n5D3MtzUT3DNhLzIT22lJ:hover ._2I4YpNYoj3kDD8DnmILHSU {\n        display: inline-block;\n        position: absolute; }\n      ._78wgiv2HyCMYL0GFSZd4S ._2S1p2zjbfectEyMXeUEyEd ._1n5D3MtzUT3DNhLzIT22lJ._1deOinna8cx2l3cOfJNqku {\n        font-family: 'Roboto';\n        font-weight: 700;\n        pointer-events: none;\n        cursor: default; }\n", ""]);

// Exports
exports.locals = {
	"mobile-only": "j3BbFQV19TZ2N5Mbc293Q",
	"hide-not-mobile": "_2hTZPXAUViaj3OKdZ8A4ZG",
	"secondaryNav": "_78wgiv2HyCMYL0GFSZd4S",
	"secondaryNavOpen": "_2WB6MWJIFPmL_7oRkVDu-f",
	"secondaryNavLinkContainer": "_2S1p2zjbfectEyMXeUEyEd",
	"secondaryNavItem": "_1n5D3MtzUT3DNhLzIT22lJ",
	"indicator": "_2I4YpNYoj3kDD8DnmILHSU",
	"secondaryNavItemOpen": "_1deOinna8cx2l3cOfJNqku"
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(110);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Imports
var urlEscape = __webpack_require__(16);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(10) + "?#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(17));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(18));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(19));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(20) + "#Roboto");
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(11));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(11) + "?#iefix");
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(21));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(22));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(24) + "#Roboto");
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(12));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(12) + "?#iefix");
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(25));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(26));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(27));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(28) + "#Roboto");
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(57));
var ___CSS_LOADER_URL___19___ = urlEscape(__webpack_require__(58));
var ___CSS_LOADER_URL___20___ = urlEscape(__webpack_require__(38));
var ___CSS_LOADER_URL___21___ = urlEscape(__webpack_require__(59));
var ___CSS_LOADER_URL___22___ = urlEscape(__webpack_require__(60));
var ___CSS_LOADER_URL___23___ = urlEscape(__webpack_require__(54));
var ___CSS_LOADER_URL___24___ = urlEscape(__webpack_require__(55));
var ___CSS_LOADER_URL___25___ = urlEscape(__webpack_require__(63));
var ___CSS_LOADER_URL___26___ = urlEscape(__webpack_require__(64));
var ___CSS_LOADER_URL___27___ = urlEscape(__webpack_require__(44));
var ___CSS_LOADER_URL___28___ = urlEscape(__webpack_require__(56));
var ___CSS_LOADER_URL___29___ = urlEscape(__webpack_require__(61));
var ___CSS_LOADER_URL___30___ = urlEscape(__webpack_require__(62));

// Module
exports.push([module.i, ".flex {\n  display: flex; }\n  .flex.column {\n    flex-direction: column; }\n  .flex.center {\n    justify-content: center; }\n  .flex.space-between {\n    justify-content: space-between; }\n  .flex.middle {\n    -webkit-align-items: center;\n    align-items: center; }\n\n/* colors */\n/* Grayscale colors. */\n/* colors */\n/* Grayscale colors. */\n/* Roboto fonts */\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 700;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Roboto\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n@font-face {\n  font-family: \"Barlow Condensed\";\n  font-weight: 600;\n  font-style: normal;\n  src: url(" + ___CSS_LOADER_URL___12___ + ");\n  /* IE9 Compat Modes */\n  src: local(\"Barlow Condensed SemiBold\"), local(\"BarlowCondensed-SemiBold\"), url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\");\n  /* Legacy iOS */ }\n\n.wrap-all {\n  width: 100% !important;\n  height: 100% !important;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.relative {\n  position: relative; }\n\n.hide {\n  display: none !important; }\n\n.desktop-hide {\n  display: none; }\n\n.desktop-show {\n  display: block; }\n\n.flex-grid {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .flex-grid.item-start {\n    align-items: flex-start; }\n\n.icons {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* btn */\n.btn {\n  font-size: 18px;\n  font-weight: normal;\n  text-decoration: none;\n  border: none;\n  box-shadow: none;\n  position: relative;\n  text-transform: none;\n  font-weight: bold;\n  display: inline-block; }\n  .btn.active, .btn:active, .btn:focus {\n    box-shadow: none;\n    outline: 0; }\n\n/* .btn-blue */\n.btn-blue,\n.btn-blue:hover,\n.btn-blue:focus {\n  cursor: pointer;\n  height: 30px;\n  color: #FFFFFF;\n  line-height: 30px;\n  border-radius: 15px;\n  padding: 1px 18px;\n  font-size: 14px;\n  font-family: 'Roboto';\n  font-weight: 700; }\n\n.btn-blue:hover {\n  opacity: 0.75; }\n\n.btn-blue {\n  background-color: #2C95D7; }\n  .btn-blue.disabled, .btn-blue:disabled, .btn-blue[disabled] {\n    pointer-events: none; }\n\n/* .btn-gray */\n.btn-gray,\n.btn-gray:hover,\n.btn-gray:focus {\n  cursor: pointer;\n  height: 30px;\n  color: #FFFFFF;\n  line-height: 30px;\n  border-radius: 4px;\n  padding: 1px 18px;\n  font-size: 13px;\n  background-color: #AAAAAB;\n  font-family: 'Roboto';\n  font-weight: 400; }\n\n.btn-gray:hover {\n  opacity: 0.75; }\n\n/* colors */\n/* Grayscale colors. */\n.header-nav-ui {\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  color: #2A2A2B;\n  position: relative; }\n  .header-nav-ui a {\n    text-decoration: none !important; }\n  .header-nav-ui .more-btn-container .more-btn {\n    margin-left: 20px !important;\n    width: 74px;\n    height: 30px;\n    justify-content: center !important; }\n    .header-nav-ui .more-btn-container .more-btn > .dropdown-icon {\n      margin-left: 8px; }\n  .header-nav-ui .more-btn-container .more-content-container {\n    position: absolute;\n    top: 30px;\n    left: 10px;\n    background: #2A2A2B;\n    min-width: 110px;\n    padding: 20px;\n    border-radius: 5px;\n    display: none;\n    z-index: 1; }\n    .header-nav-ui .more-btn-container .more-content-container a {\n      color: #FFFFFF;\n      margin: 10px 0 0;\n      text-align: left;\n      font-weight: 700;\n      font-size: 14px;\n      line-height: 30px;\n      white-space: nowrap; }\n      .header-nav-ui .more-btn-container .more-content-container a:first-child {\n        margin: 0; }\n  .header-nav-ui .more-btn-container.isOpen .more-content-container {\n    display: flex; }\n  .header-nav-ui .more-btn-container.isOpen .more-btn * {\n    z-index: 1; }\n  .header-nav-ui .more-btn-container.isOpen .more-btn .mask {\n    background-color: #555555;\n    border-radius: 15px;\n    opacity: 0.4;\n    z-index: 0; }\n  .header-nav-ui .more-btn-container.isOpen .more-btn .dropdown-icon {\n    -moz-transform: scale(-1, -1);\n    -o-transform: scale(-1, -1);\n    -webkit-transform: scale(-1, -1);\n    transform: scale(-1, -1); }\n  .header-nav-ui .primary-nav {\n    background: #2A2A2B;\n    color: #FFFFFF;\n    height: 80px;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    z-index: 1; }\n    .header-nav-ui .primary-nav a {\n      color: #FFFFFF; }\n    .header-nav-ui .primary-nav .tc-logo {\n      margin: 0 30px;\n      justify-self: flex-start;\n      margin-right: auto;\n      cursor: pointer; }\n    .header-nav-ui .primary-nav .primary-level-1-separator {\n      display: none; }\n    .header-nav-ui .primary-nav .primary-level-1 {\n      font-family: 'Roboto';\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 30px;\n      margin: 0 30px;\n      padding-right: 5px;\n      position: relative; }\n      .header-nav-ui .primary-nav .primary-level-1.more-menu {\n        display: none; }\n      .header-nav-ui .primary-nav .primary-level-1.isOpen {\n        color: #43D7B0;\n        justify-self: flex-start; }\n        .header-nav-ui .primary-nav .primary-level-1.isOpen.isOpenSubmenu {\n          color: #FFFFFF; }\n      .header-nav-ui .primary-nav .primary-level-1::before {\n        content: \"\";\n        position: absolute;\n        display: block;\n        left: -30px;\n        top: 0;\n        width: 1px;\n        height: 100%;\n        background: #555555; }\n      .header-nav-ui .primary-nav .primary-level-1.login-container {\n        margin-right: 20px;\n        position: relative; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container {\n          margin-left: 33px;\n          border-radius: 15px; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container .handle-container .handle {\n            display: block;\n            font-size: 14px;\n            font-weight: 700;\n            line-height: 30px;\n            margin-left: 5px; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container .handle-container .drowdown-icon {\n            width: 16px;\n            height: 16px;\n            margin: 0 5px; }\n            .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container .handle-container .drowdown-icon .dropdown-icon {\n              transition: all 0.5s; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container:hover, .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container.isUserPopupOpen {\n            background-color: rgba(85, 85, 85, 0.4); }\n            .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container:hover .handle-container .handle, .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container.isUserPopupOpen .handle-container .handle {\n              display: block; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container.isUserPopupOpen .handle-container .dropdown-icon {\n            transform: rotate(180deg); }\n          .header-nav-ui .primary-nav .primary-level-1.login-container > .user-info-container .avatar {\n            width: 30px;\n            height: 30px;\n            display: inline-block; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup {\n          position: absolute;\n          right: 0;\n          top: 40px;\n          color: #2A2A2B;\n          border-radius: 10px;\n          box-shadow: 0 5px 35px 5px rgba(21, 21, 22, 0.1), 0 10px 14px 0 rgba(21, 21, 22, 0.3);\n          width: 288px;\n          background: #FFFFFF;\n          border-radius: 6px;\n          overflow: hidden;\n          z-index: 1; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup a {\n            color: #2A2A2B; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .header {\n            background: #0AB88A;\n            height: 90px;\n            padding: 0 20px;\n            color: #FFFFFF; }\n            .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .header .handle {\n              font-size: 16px;\n              line-height: 20px; }\n            .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .header .email {\n              font-size: 12px;\n              line-height: 14px;\n              margin-top: 4px; }\n            .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .header .avatar {\n              margin-right: 10px; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .switch-to-business-container {\n            background: #2A2A2B;\n            color: #FFFFFF;\n            font-size: 14px;\n            line-height: 30px;\n            height: 50px; }\n            .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .switch-to-business-container .switch-icon {\n              margin: 0 10px 0 22px; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .menu {\n            padding: 15px 0 25px 0; }\n            .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .menu a {\n              height: 50px;\n              display: flex;\n              align-items: center;\n              margin: -5px 0;\n              padding: 0 20px;\n              font-size: 14px;\n              font-weight: 400;\n              line-height: 30px; }\n              .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .menu a:hover {\n                background: #F4F4F4; }\n            .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-popup .menu .separator {\n              background: #E0E0E0;\n              height: 1px;\n              width: 100%;\n              margin: 10px;\n              height: 1px;\n              width: calc(100% - 40px);\n              align-self: center; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .notification-icon {\n          position: relative;\n          padding: 10px; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .notification-icon::after {\n            content: \"\";\n            width: 6px;\n            height: 6px;\n            position: absolute;\n            top: 8px;\n            right: 5px;\n            background: #EF476F;\n            border-radius: 6px;\n            display: block; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup.isNotificationsPopupOpen .new-notification {\n          background-color: rgba(85, 85, 85, 0.4);\n          border-radius: 50%; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup.isNotificationsPopupOpen .notifications-panel {\n          display: flex; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .no-notification .notification-icon {\n          opacity: 0.5; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .no-notification .notification-icon::after {\n            display: none; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .new-notification {\n          line-height: 36px; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .new-notification:hover {\n            background-color: rgba(85, 85, 85, 0.4);\n            border-radius: 50%; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .all-seen-notification .notification-icon::after {\n          display: none; }\n        .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .dropdown-notification {\n          border-radius: 15px;\n          width: 30px;\n          height: 30px;\n          background-color: rgba(85, 85, 85, 0.4);\n          display: flex;\n          justify-content: center; }\n          .header-nav-ui .primary-nav .primary-level-1.login-container .notification-popup .dropdown-notification .notification-icon::after {\n            display: none; }\n    .header-nav-ui .primary-nav .primary-level-2-container {\n      display: none;\n      margin: 0 auto 0 0; }\n      .header-nav-ui .primary-nav .primary-level-2-container.isOpen {\n        display: flex; }\n      .header-nav-ui .primary-nav .primary-level-2-container .primary-level-2 {\n        font-family: 'Roboto';\n        font-weight: 700;\n        margin-left: 30px;\n        font-size: 14px;\n        line-height: 30px;\n        text-align: center;\n        display: flex;\n        position: relative;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-content: flex-start; }\n        .header-nav-ui .primary-nav .primary-level-2-container .primary-level-2:first-child {\n          margin-left: 0; }\n        .header-nav-ui .primary-nav .primary-level-2-container .primary-level-2:nth-child(2) {\n          margin-left: 0; }\n        .header-nav-ui .primary-nav .primary-level-2-container .primary-level-2.isOpen {\n          color: #43D7B0; }\n    .header-nav-ui .primary-nav .more-btn-container .more-content-container a.isOpen {\n      color: #43D7B0; }\n  .header-nav-ui .notifications-panel,\n  .header-nav-ui .mobile-notifications-panel {\n    background-color: #FFFFFF;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 0 5px 35px 5px rgba(21, 21, 22, 0.1), 0 10px 14px 0 rgba(21, 21, 22, 0.3);\n    width: 480px;\n    height: auto;\n    position: absolute;\n    right: 10px;\n    top: 40px;\n    display: none;\n    z-index: 100; }\n    .header-nav-ui .notifications-panel .noti-header,\n    .header-nav-ui .mobile-notifications-panel .noti-header {\n      background-color: #0AB88A;\n      border-radius: 10px 10px 0 0;\n      padding: 10px 20px 10px;\n      height: 30px;\n      position: sticky;\n      top: 0; }\n      .header-nav-ui .notifications-panel .noti-header .left-noti,\n      .header-nav-ui .mobile-notifications-panel .noti-header .left-noti {\n        background: url(" + ___CSS_LOADER_URL___18___ + ") left center no-repeat;\n        background-size: 16px;\n        padding-left: 26px;\n        color: #FFFFFF;\n        font-size: 16px;\n        font-family: 'Roboto';\n        font-weight: 700;\n        text-align: left; }\n      .header-nav-ui .notifications-panel .noti-header .rights .white-link,\n      .header-nav-ui .mobile-notifications-panel .noti-header .rights .white-link {\n        color: #FFFFFF;\n        display: inline-block;\n        vertical-align: middle;\n        font-size: 12px;\n        font-family: 'Roboto';\n        font-weight: 700;\n        text-align: right; }\n        .header-nav-ui .notifications-panel .noti-header .rights .white-link:hover,\n        .header-nav-ui .mobile-notifications-panel .noti-header .rights .white-link:hover {\n          opacity: 0.75; }\n      .header-nav-ui .notifications-panel .noti-header .rights .point,\n      .header-nav-ui .mobile-notifications-panel .noti-header .rights .point {\n        width: 3px;\n        height: 3px;\n        background-color: #FFFFFF;\n        border-radius: 100%;\n        display: inline-block;\n        vertical-align: middle; }\n    .header-nav-ui .notifications-panel .noti-body,\n    .header-nav-ui .mobile-notifications-panel .noti-body {\n      max-height: 378px;\n      overflow: scroll; }\n      .header-nav-ui .notifications-panel .noti-body .icon-bell,\n      .header-nav-ui .mobile-notifications-panel .noti-body .icon-bell {\n        background: url(" + ___CSS_LOADER_URL___19___ + ") center center no-repeat;\n        background-size: 73px 80px;\n        width: 73px;\n        height: 80px;\n        margin: 50px 0 10px; }\n      .header-nav-ui .notifications-panel .noti-body.center,\n      .header-nav-ui .mobile-notifications-panel .noti-body.center {\n        text-align: center; }\n        .header-nav-ui .notifications-panel .noti-body.center .titles,\n        .header-nav-ui .mobile-notifications-panel .noti-body.center .titles {\n          color: #2A2A2B;\n          font-size: 30px;\n          font-family: 'Barlow Condensed';\n          font-weight: 600;\n          line-height: 40px;\n          margin: 23px 0 -8px 0; }\n        .header-nav-ui .notifications-panel .noti-body.center .txt,\n        .header-nav-ui .mobile-notifications-panel .noti-body.center .txt {\n          text-align: center;\n          padding: 19px 60px 12px 60px; }\n      .header-nav-ui .notifications-panel .noti-body .txt,\n      .header-nav-ui .mobile-notifications-panel .noti-body .txt {\n        margin: 0;\n        color: #2A2A2B;\n        font-size: 14px;\n        font-family: 'Roboto';\n        font-weight: 400;\n        line-height: 20px; }\n        .header-nav-ui .notifications-panel .noti-body .txt .blue-link,\n        .header-nav-ui .mobile-notifications-panel .noti-body .txt .blue-link {\n          color: #0596dc;\n          font-size: 14px; }\n      .header-nav-ui .notifications-panel .noti-body .light-bar,\n      .header-nav-ui .mobile-notifications-panel .noti-body .light-bar {\n        background-color: #B5E9DB;\n        height: 28px;\n        color: #229174;\n        font-size: 14px;\n        font-family: 'Roboto';\n        font-weight: 700;\n        line-height: 28px;\n        padding-left: 20px;\n        margin-top: -2px;\n        position: sticky;\n        position: -webkit-sticky;\n        top: 0;\n        z-index: 2;\n        padding-right: 20px;\n        padding-top: 2px; }\n      .header-nav-ui .notifications-panel .noti-body .greybar-section:last-child .items .item-content,\n      .header-nav-ui .mobile-notifications-panel .noti-body .greybar-section:last-child .items .item-content {\n        border-bottom: 0; }\n      .header-nav-ui .notifications-panel .noti-body .lightblue-section,\n      .header-nav-ui .notifications-panel .noti-body .greybar-section,\n      .header-nav-ui .mobile-notifications-panel .noti-body .lightblue-section,\n      .header-nav-ui .mobile-notifications-panel .noti-body .greybar-section {\n        margin-top: -2px;\n        background-color: #FFFFFF;\n        padding-top: 5px; }\n      .header-nav-ui .notifications-panel .noti-body .right-remove,\n      .header-nav-ui .mobile-notifications-panel .noti-body .right-remove {\n        position: absolute;\n        right: 1px;\n        top: 50%;\n        margin-top: -10px;\n        z-index: 666;\n        display: none; }\n        .header-nav-ui .notifications-panel .noti-body .right-remove .btn-close,\n        .header-nav-ui .mobile-notifications-panel .noti-body .right-remove .btn-close {\n          display: block;\n          background: url(" + ___CSS_LOADER_URL___20___ + ") center center no-repeat;\n          background-size: 10px;\n          width: 20px;\n          height: 20px; }\n          .header-nav-ui .notifications-panel .noti-body .right-remove .btn-close:hover,\n          .header-nav-ui .mobile-notifications-panel .noti-body .right-remove .btn-close:hover {\n            background: url(" + ___CSS_LOADER_URL___21___ + ") center center no-repeat; }\n        .header-nav-ui .notifications-panel .noti-body .right-remove .black-txt,\n        .header-nav-ui .mobile-notifications-panel .noti-body .right-remove .black-txt {\n          position: absolute;\n          top: -28px;\n          left: -76px;\n          background-color: #2A2A2B;\n          border-radius: 2px;\n          padding: 6px 0;\n          color: #FFFFFF;\n          font-size: 11px;\n          font-family: 'Roboto';\n          font-weight: 400;\n          line-height: 13px;\n          text-align: center;\n          min-width: 110px;\n          display: none; }\n          .header-nav-ui .notifications-panel .noti-body .right-remove .black-txt:after,\n          .header-nav-ui .mobile-notifications-panel .noti-body .right-remove .black-txt:after {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: -5px;\n            left: calc(50% + 30px);\n            margin-left: -3px;\n            width: 0;\n            height: 0;\n            border-left: 4px solid transparent;\n            border-right: 4px solid transparent;\n            border-top: 5px solid #2A2A2B; }\n        .header-nav-ui .notifications-panel .noti-body .right-remove:hover .black-txt,\n        .header-nav-ui .mobile-notifications-panel .noti-body .right-remove:hover .black-txt {\n          display: block; }\n      .header-nav-ui .notifications-panel .noti-body .items,\n      .header-nav-ui .mobile-notifications-panel .noti-body .items {\n        padding: 0 30px; }\n        .header-nav-ui .notifications-panel .noti-body .items:hover,\n        .header-nav-ui .mobile-notifications-panel .noti-body .items:hover {\n          background-color: #FBFBFB; }\n          .header-nav-ui .notifications-panel .noti-body .items:hover .right-remove,\n          .header-nav-ui .mobile-notifications-panel .noti-body .items:hover .right-remove {\n            display: block; }\n        .header-nav-ui .notifications-panel .noti-body .items .item-content,\n        .header-nav-ui .mobile-notifications-panel .noti-body .items .item-content {\n          display: block;\n          padding: 10px 0;\n          border-bottom: 1px solid #E0E0E0;\n          position: relative; }\n          .header-nav-ui .notifications-panel .noti-body .items .item-content .txt,\n          .header-nav-ui .mobile-notifications-panel .noti-body .items .item-content .txt {\n            padding-right: 30px; }\n        .header-nav-ui .notifications-panel .noti-body .items .bottom-info,\n        .header-nav-ui .mobile-notifications-panel .noti-body .items .bottom-info {\n          margin-top: 5px;\n          line-height: 20px;\n          font-size: 12px; }\n          .header-nav-ui .notifications-panel .noti-body .items .bottom-info .blue-squre,\n          .header-nav-ui .mobile-notifications-panel .noti-body .items .bottom-info .blue-squre {\n            padding: 0px 10px;\n            display: inline-block;\n            margin-right: 6px;\n            background-color: #50ADE8;\n            border-radius: 5px;\n            color: #FFFFFF;\n            font-family: 'Roboto';\n            font-weight: 400;\n            line-height: 20px; }\n          .header-nav-ui .notifications-panel .noti-body .items .bottom-info .time-txt,\n          .header-nav-ui .mobile-notifications-panel .noti-body .items .bottom-info .time-txt {\n            display: inline-block;\n            vertical-align: middle;\n            color: #AAA;\n            font-size: 12px;\n            font-family: 'Roboto';\n            font-weight: 400;\n            line-height: 20px; }\n      .header-nav-ui .notifications-panel .noti-body .grey-bar,\n      .header-nav-ui .mobile-notifications-panel .noti-body .grey-bar {\n        background-color: #F4F4F4;\n        height: 50px;\n        padding-left: 20px;\n        margin-top: -4px;\n        z-index: 1;\n        position: relative; }\n        .header-nav-ui .notifications-panel .noti-body .grey-bar .copyicon-title,\n        .header-nav-ui .mobile-notifications-panel .noti-body .grey-bar .copyicon-title {\n          padding-left: 26px;\n          background: url(" + ___CSS_LOADER_URL___22___ + ") left center no-repeat;\n          background-size: 15px;\n          color: #2A2A2B;\n          font-size: 14px;\n          font-family: 'Roboto';\n          font-weight: 700;\n          width: calc(100% - 70px);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n        .header-nav-ui .notifications-panel .noti-body .grey-bar .right-remove,\n        .header-nav-ui .mobile-notifications-panel .noti-body .grey-bar .right-remove {\n          right: 20px; }\n        .header-nav-ui .notifications-panel .noti-body .grey-bar:hover .right-remove,\n        .header-nav-ui .mobile-notifications-panel .noti-body .grey-bar:hover .right-remove {\n          display: block; }\n    .header-nav-ui .notifications-panel .noti-footer,\n    .header-nav-ui .mobile-notifications-panel .noti-footer {\n      text-align: center;\n      padding: 15px 0 45px 0; }\n    .header-nav-ui .notifications-panel .end-message,\n    .header-nav-ui .mobile-notifications-panel .end-message {\n      background-color: #FBFBFB;\n      border-radius: 0 0 10px 10px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      color: #7F7F7F;\n      font-size: 12px;\n      font-family: 'Roboto';\n      font-weight: 400;\n      line-height: 40px;\n      justify-content: center;\n      position: relative;\n      z-index: 10;\n      margin-top: -3px; }\n  .header-nav-ui .notifications-panel {\n    max-height: 70vh;\n    flex-direction: column; }\n    .header-nav-ui .notifications-panel .noti-body {\n      flex: 1;\n      max-height: none; }\n  .header-nav-ui .icon-chosen-arrow {\n    position: absolute;\n    display: none;\n    bottom: -1px;\n    left: 0;\n    transform: translate3d(166.5px, 0px, 0px); }\n    .header-nav-ui .icon-chosen-arrow svg {\n      display: block; }\n      :global .theme-light :local .header-nav-ui .icon-chosen-arrow svg {\n        fill: #FBFBFB; }\n      :global .theme-dark :local .header-nav-ui .icon-chosen-arrow svg {\n        fill: #636363; }\n    .header-nav-ui .icon-chosen-arrow.isAnimation {\n      -webkit-transition: -webkit-transform 0.5s;\n      transition: transform 0.5s;\n      -webkit-transition-timing-function: cubic-bezier(1, 0.01, 0, 1);\n      -webkit-transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22);\n      transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22); }\n  .header-nav-ui .secondary-nav {\n    font-size: 13px;\n    position: relative;\n    z-index: 0; }\n    :global .theme-light :local .header-nav-ui .secondary-nav {\n      background: #FBFBFB;\n      color: #2A2A2B; }\n    :global .theme-dark :local .header-nav-ui .secondary-nav {\n      background: #636363;\n      color: #FFFFFF; }\n    .header-nav-ui .secondary-nav a {\n      margin: 0 15px; }\n      :global .theme-light :local .header-nav-ui .secondary-nav a {\n        color: #2A2A2B; }\n      :global .theme-dark :local .header-nav-ui .secondary-nav a {\n        color: #FFFFFF; }\n    .header-nav-ui .secondary-nav .secondary-nav-link-container {\n      position: relative;\n      height: 30px; }\n      .header-nav-ui .secondary-nav .secondary-nav-link-container > a {\n        position: relative; }\n        .header-nav-ui .secondary-nav .secondary-nav-link-container > a.isOpen {\n          font-family: 'Roboto';\n          font-weight: 700; }\n      .header-nav-ui .secondary-nav .secondary-nav-link-container .icon-select {\n        position: absolute;\n        bottom: -1px;\n        left: 0;\n        transform: translate3d(34.5px, 0px, 0px);\n        width: 15px;\n        height: 3px;\n        border-radius: 1.5px;\n        background: #43D7B0; }\n        .header-nav-ui .secondary-nav .secondary-nav-link-container .icon-select.isAnimation {\n          -webkit-transition: -webkit-transform 0.5s;\n          transition: transform 0.5s;\n          -webkit-transition-timing-function: cubic-bezier(1, 0.01, 0, 1);\n          -webkit-transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22);\n          transition-timing-function: cubic-bezier(1, 0.01, 0, 1.22); }\n    :global .theme-light :local .header-nav-ui .secondary-nav .more-btn-container .more-content-container {\n      background: #FBFBFB; }\n    :global .theme-dark :local .header-nav-ui .secondary-nav .more-btn-container .more-content-container {\n      background: #636363; }\n    .header-nav-ui .secondary-nav .more-btn-container .more-content-container a {\n      font-family: 'Roboto';\n      font-weight: 400; }\n      :global .theme-light :local .header-nav-ui .secondary-nav .more-btn-container .more-content-container a {\n        color: #2A2A2B; }\n      :global .theme-dark :local .header-nav-ui .secondary-nav .more-btn-container .more-content-container a {\n        color: #FFFFFF; }\n      .header-nav-ui .secondary-nav .more-btn-container .more-content-container a.isOpen {\n        font-family: 'Roboto';\n        font-weight: 700; }\n    :global .theme-light :local .header-nav-ui .secondary-nav .more-btn-container .more-btn .icon-light {\n      display: block; }\n    :global .theme-dark :local .header-nav-ui .secondary-nav .more-btn-container .more-btn .icon-light {\n      display: none; }\n    :global .theme-light :local .header-nav-ui .secondary-nav .more-btn-container .more-btn .icon-dark {\n      display: none; }\n    :global .theme-dark :local .header-nav-ui .secondary-nav .more-btn-container .more-btn .icon-dark {\n      display: block; }\n    .header-nav-ui .secondary-nav .more-btn-container.isOpen .more-btn .mask {\n      background-color: #E9E9E9; }\n      :global .theme-light :local .header-nav-ui .secondary-nav .more-btn-container.isOpen .more-btn .mask {\n        display: 1; }\n      :global .theme-dark :local .header-nav-ui .secondary-nav .more-btn-container.isOpen .more-btn .mask {\n        display: 0.4; }\n  .header-nav-ui .mobile-nav {\n    height: 60px;\n    background: #2A2A2B;\n    padding: 0 20px 0 0;\n    display: none; }\n    .header-nav-ui .mobile-nav .left-menu-container {\n      width: 60px;\n      height: 60px; }\n    .header-nav-ui .mobile-nav .drowdown-icon {\n      margin-left: 12px; }\n    .header-nav-ui .mobile-nav .avatar-container {\n      position: relative; }\n      .header-nav-ui .mobile-nav .avatar-container::after {\n        content: \"\";\n        width: 7px;\n        height: 7px;\n        position: absolute;\n        top: -4px;\n        right: -6px;\n        background: #EF476F;\n        border-radius: 6px;\n        display: block; }\n      .header-nav-ui .mobile-nav .avatar-container .avatar {\n        width: 30px;\n        height: 30px;\n        display: inline-block; }\n    .header-nav-ui .mobile-nav span {\n      font-family: 'Roboto';\n      font-weight: 700;\n      color: #FFFFFF;\n      font-size: 16px;\n      line-height: 30px; }\n  .header-nav-ui .mobile-nav-sub-menu {\n    position: absolute;\n    width: 100%;\n    top: 60px;\n    z-index: 1;\n    display: none; }\n    .header-nav-ui .mobile-nav-sub-menu .mask {\n      z-index: -1;\n      background: #2A2A2B;\n      opacity: 0.8;\n      display: none; }\n    .header-nav-ui .mobile-nav-sub-menu .header {\n      background: #264346;\n      height: 60px; }\n      .header-nav-ui .mobile-nav-sub-menu .header .drowdown-icon-container {\n        margin-left: 8px; }\n      .header-nav-ui .mobile-nav-sub-menu .header span {\n        font-family: 'Barlow Condensed';\n        font-weight: 600;\n        color: #FFFFFF;\n        font-size: 28px;\n        line-height: 40px; }\n    .header-nav-ui .mobile-nav-sub-menu .menu {\n      padding: 15px 20px;\n      background: #264346;\n      border-top: 1px solid #1F7E8A;\n      display: none; }\n      .header-nav-ui .mobile-nav-sub-menu .menu a {\n        color: #FFFFFF;\n        font-size: 18px;\n        line-height: 40px;\n        height: 40px;\n        margin: 5px 0;\n        display: flex;\n        align-items: center; }\n        .header-nav-ui .mobile-nav-sub-menu .menu a.isOpen {\n          font-family: 'Roboto';\n          font-weight: 700; }\n          .header-nav-ui .mobile-nav-sub-menu .menu a.isOpen::before {\n            content: \"\";\n            height: 30px;\n            width: 3px;\n            border-radius: 1.5px;\n            background: #FFFFFF;\n            display: inline-block;\n            margin-right: 10px; }\n    .header-nav-ui .mobile-nav-sub-menu .mobile-notifications-panel {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 100; }\n    .header-nav-ui .mobile-nav-sub-menu.isOpen:not(.isEmpty) {\n      height: calc(100vh - 60px); }\n      .header-nav-ui .mobile-nav-sub-menu.isOpen:not(.isEmpty) .menu,\n      .header-nav-ui .mobile-nav-sub-menu.isOpen:not(.isEmpty) .mask {\n        display: flex; }\n      .header-nav-ui .mobile-nav-sub-menu.isOpen:not(.isEmpty) .drowdown-icon-container {\n        -moz-transform: scale(-1, -1);\n        -o-transform: scale(-1, -1);\n        -webkit-transform: scale(-1, -1);\n        transform: scale(-1, -1); }\n  .header-nav-ui .secondary-nav-mobile {\n    position: absolute;\n    top: 120px;\n    width: 100%;\n    height: calc(100vh - 120px);\n    z-index: 1;\n    display: none; }\n    :global .theme-light :local .header-nav-ui .secondary-nav-mobile {\n      background: #FBFBFB; }\n    :global .theme-dark :local .header-nav-ui .secondary-nav-mobile {\n      background: #636363; }\n    .header-nav-ui .secondary-nav-mobile .menu {\n      padding: 15px 20px; }\n      .header-nav-ui .secondary-nav-mobile .menu a {\n        font-size: 18px;\n        line-height: 40px;\n        height: 40px;\n        margin: 5px 0;\n        display: flex;\n        align-items: center; }\n        :global .theme-light :local .header-nav-ui .secondary-nav-mobile .menu a {\n          color: #2A2A2B; }\n        :global .theme-dark :local .header-nav-ui .secondary-nav-mobile .menu a {\n          color: #FFFFFF; }\n        .header-nav-ui .secondary-nav-mobile .menu a.isOpen {\n          font-family: 'Roboto';\n          font-weight: 700; }\n          .header-nav-ui .secondary-nav-mobile .menu a.isOpen::before {\n            content: \"\";\n            height: 30px;\n            width: 3px;\n            border-radius: 1.5px;\n            background: #43D7B0;\n            display: inline-block;\n            margin-right: 10px; }\n    .header-nav-ui .secondary-nav-mobile .footer {\n      background: #F4F4F4;\n      min-height: 70px; }\n      .header-nav-ui .secondary-nav-mobile .footer span {\n        font-size: 12px;\n        color: #7F7F7F;\n        text-align: center;\n        line-height: 20px; }\n  .header-nav-ui .user-info-popup,\n  .header-nav-ui .login-container {\n    display: none; }\n    .header-nav-ui .user-info-popup.isOpen,\n    .header-nav-ui .login-container.isOpen {\n      display: flex; }\n  .header-nav-ui.isLoggedIn .login-container {\n    display: flex; }\n    .header-nav-ui.isLoggedIn .login-container.isOpen .dropdown-icon {\n      -moz-transform: scale(-1, -1);\n      -o-transform: scale(-1, -1);\n      -webkit-transform: scale(-1, -1);\n      transform: scale(-1, -1); }\n  .header-nav-ui.isLoggedIn .login-btn {\n    display: none; }\n  .header-nav-ui .user-info-popup.user-info-popup-mobile {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    overflow-y: auto;\n    background: #FFFFFF;\n    display: none;\n    z-index: 1;\n    top: 0; }\n    .header-nav-ui .user-info-popup.user-info-popup-mobile .header {\n      padding: 7px 0 5px 17px; }\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .header .left-content img {\n        border: 3px solid #C0C0C0;\n        border-radius: 33px;\n        margin-right: 17px; }\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .header .left-content .handle {\n        font-family: 'Roboto';\n        font-weight: 700;\n        font-size: 20px; }\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .header .left-content .description {\n        font-size: 12; }\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .header .icon-close {\n        width: 50px;\n        height: 50px; }\n    .header-nav-ui .user-info-popup.user-info-popup-mobile .menu .separator {\n      background: #E0E0E0;\n      width: calc(100% - 80px);\n      margin: 15px 0;\n      height: 1px;\n      align-self: center;\n      padding: 0 20px; }\n    .header-nav-ui .user-info-popup.user-info-popup-mobile .menu a,\n    .header-nav-ui .user-info-popup.user-info-popup-mobile .menu .notification-mobile {\n      color: #2A2A2B;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      margin: 5px 0;\n      padding: 0 20px; }\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .menu a:hover,\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .menu .notification-mobile:hover {\n        background: #F4F4F4; }\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .menu a.notification-mobile,\n      .header-nav-ui .user-info-popup.user-info-popup-mobile .menu .notification-mobile.notification-mobile {\n        display: flex;\n        justify-content: space-between; }\n        .header-nav-ui .user-info-popup.user-info-popup-mobile .menu a.notification-mobile .left-notifi .title,\n        .header-nav-ui .user-info-popup.user-info-popup-mobile .menu .notification-mobile.notification-mobile .left-notifi .title {\n          font-size: 18px;\n          font-family: 'Roboto';\n          font-weight: 700;\n          background: url(" + ___CSS_LOADER_URL___23___ + ") left center no-repeat;\n          background-size: 16px;\n          padding-left: 28px;\n          text-align: left; }\n        .header-nav-ui .user-info-popup.user-info-popup-mobile .menu a.notification-mobile .left-notifi .red-number,\n        .header-nav-ui .user-info-popup.user-info-popup-mobile .menu .notification-mobile.notification-mobile .left-notifi .red-number {\n          font-size: 14px;\n          color: #EF476F; }\n        .header-nav-ui .user-info-popup.user-info-popup-mobile .menu a.notification-mobile .notification-right-arrow,\n        .header-nav-ui .user-info-popup.user-info-popup-mobile .menu .notification-mobile.notification-mobile .notification-right-arrow {\n          background: url(" + ___CSS_LOADER_URL___24___ + ") left center no-repeat;\n          background-size: 10px;\n          width: 10px;\n          height: 16px; }\n  .header-nav-ui .settings-nav {\n    background: #2A2A2B;\n    color: #FFFFFF;\n    height: 60px;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .header-nav-ui .settings-nav .tc-logo {\n      margin: 0 30px;\n      justify-self: flex-start;\n      cursor: pointer; }\n    .header-nav-ui .settings-nav a,\n    .header-nav-ui .settings-nav .title {\n      color: #EDEDF2;\n      font-size: 20px; }\n    .header-nav-ui .settings-nav .close-btn {\n      background-color: #808080;\n      border-radius: 29px;\n      width: 30px;\n      height: 30px;\n      margin-right: 25px; }\n      .header-nav-ui .settings-nav .close-btn img {\n        transform: scale(0.9); }\n\n.settings-panel {\n  background-color: #FFFFFF;\n  border-radius: 6px;\n  box-shadow: 0 1px 1px 0 #D5D5D5;\n  width: 720px;\n  margin: 26px auto 26px auto;\n  font-family: 'Roboto';\n  font-weight: 400;\n  padding: 30px 20px; }\n  .settings-panel .title {\n    color: #151516;\n    font-size: 28px;\n    font-weight: 300;\n    line-height: 35px;\n    text-align: center;\n    margin-bottom: 20px; }\n  .settings-panel .panel-content {\n    margin-bottom: 60px; }\n    .settings-panel .panel-content .section-title {\n      background-color: #EBEBEB;\n      border-radius: 4px 4px 0 0;\n      height: 50px;\n      padding: 0 10px;\n      display: flex;\n      align-items: center; }\n      .settings-panel .panel-content .section-title .left {\n        color: #151516;\n        font-family: 'Roboto';\n        font-weight: 700;\n        font-size: 15px;\n        line-height: 30px;\n        flex: 0 0 63%; }\n      .settings-panel .panel-content .section-title div {\n        color: #151516;\n        font-family: 'Roboto';\n        font-weight: 400;\n        font-size: 13px;\n        line-height: 35px; }\n        .settings-panel .panel-content .section-title div.website {\n          flex: 0 0 15%;\n          display: flex;\n          justify-content: center; }\n          .settings-panel .panel-content .section-title div.website span {\n            background: url(" + ___CSS_LOADER_URL___25___ + ") left center no-repeat;\n            background-size: 17px;\n            padding-left: 22px; }\n            .settings-panel .panel-content .section-title div.website span em {\n              font-style: normal; }\n        .settings-panel .panel-content .section-title div.as-email {\n          flex: 0 0 22%;\n          display: flex;\n          justify-content: center; }\n          .settings-panel .panel-content .section-title div.as-email span {\n            background: url(" + ___CSS_LOADER_URL___26___ + ") left center no-repeat;\n            background-size: 17px;\n            padding-left: 22px; }\n            .settings-panel .panel-content .section-title div.as-email span em {\n              font-style: normal; }\n    .settings-panel .panel-content .section-list {\n      padding-left: 0;\n      margin-top: 0; }\n      .settings-panel .panel-content .section-list li {\n        min-height: 50px;\n        padding: 0 10px;\n        box-shadow: 0 1px 0 0 #E0E0E0;\n        padding-bottom: 10px;\n        padding-top: 10px;\n        display: block; }\n        .settings-panel .panel-content .section-list li:hover {\n          background-color: #FAFAFB; }\n        .settings-panel .panel-content .section-list li .list-item {\n          display: flex;\n          align-items: center; }\n          .settings-panel .panel-content .section-list li .list-item .left {\n            flex: 0 0 63%; }\n            .settings-panel .panel-content .section-list li .list-item .left .title {\n              color: #151516;\n              font-family: 'Roboto';\n              font-weight: 400;\n              font-size: 15px;\n              line-height: 30px;\n              text-align: left;\n              margin-bottom: auto; }\n            .settings-panel .panel-content .section-list li .list-item .left .description {\n              color: #808080;\n              font-family: 'Roboto';\n              font-weight: 400;\n              font-size: 12px;\n              line-height: 20px;\n              margin-right: 40px; }\n          .settings-panel .panel-content .section-list li .list-item div {\n            color: #151516;\n            font-family: 'Roboto';\n            font-weight: 400;\n            font-size: 13px;\n            line-height: 30px; }\n            .settings-panel .panel-content .section-list li .list-item div.website {\n              flex: 0 0 15%;\n              display: flex;\n              justify-content: center;\n              margin-top: 12px; }\n              .settings-panel .panel-content .section-list li .list-item div.website .check-icon {\n                background: url(" + ___CSS_LOADER_URL___20___ + ") left center no-repeat;\n                background-size: 7px;\n                width: 12px;\n                height: 7px;\n                cursor: pointer; }\n                .settings-panel .panel-content .section-list li .list-item div.website .check-icon.checked {\n                  background: url(" + ___CSS_LOADER_URL___27___ + ") left center no-repeat;\n                  background-size: 10px;\n                  width: 9px;\n                  height: 7px;\n                  margin-left: -5px; }\n            .settings-panel .panel-content .section-list li .list-item div.as-email {\n              flex: 0 0 22%;\n              display: flex;\n              justify-content: center;\n              margin-top: 12px; }\n              .settings-panel .panel-content .section-list li .list-item div.as-email .check-icon {\n                background: url(" + ___CSS_LOADER_URL___20___ + ") left center no-repeat;\n                background-size: 7px;\n                width: 12px;\n                height: 10px; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .check-icon.checked {\n                  background: url(" + ___CSS_LOADER_URL___27___ + ") left center no-repeat;\n                  background-size: 10px;\n                  width: 9px;\n                  height: 7px;\n                  cursor: pointer;\n                  margin-left: -5px; }\n              .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box {\n                background-color: #C0C0C0;\n                border-radius: 15px;\n                width: 148px;\n                height: 30px;\n                position: relative;\n                cursor: pointer; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box.open {\n                  background-color: #AAAAAB;\n                  box-shadow: inset 0 1px 3px 0 #808080; }\n                  .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box.open .options {\n                    display: block; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box:hover {\n                  background-color: none;\n                  background-image: linear-gradient(180deg, #C0C0C0 0%, #A8A8A9 100%); }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box.checked {\n                  background-color: #0681FF; }\n                  .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box.checked.open {\n                    background-color: #006DEA;\n                    box-shadow: inset 0 1px 3px 0 #404041; }\n                  .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box.checked:hover {\n                    background-color: none;\n                    background-image: linear-gradient(180deg, #0681FF 0%, #006CE7 100%);\n                    box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.5); }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box .selected-label {\n                  color: #FFFFFF;\n                  font-family: 'Roboto';\n                  font-weight: 700;\n                  font-size: 13px;\n                  line-height: 30px;\n                  margin-left: 17px;\n                  cursor: pointer; }\n                  .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box .selected-label .dropdown-arrow {\n                    background: url(" + ___CSS_LOADER_URL___28___ + ") left center no-repeat;\n                    background-size: 14px;\n                    width: 14px;\n                    height: 14px;\n                    display: block;\n                    position: absolute;\n                    right: 13px;\n                    top: 9px;\n                    transform: rotateZ(90deg); }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box .options {\n                  display: none;\n                  background-color: #FFFFFF;\n                  border-radius: 6px;\n                  box-shadow: 0 5px 35px 5px rgba(21, 21, 22, 0.1), 0 10px 14px 0 rgba(21, 21, 22, 0.3);\n                  padding: 5px 5px;\n                  position: absolute;\n                  width: 138px;\n                  z-index: 100; }\n                  .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box .options li {\n                    color: #151516;\n                    font-family: 'Roboto';\n                    font-weight: 400;\n                    font-size: 13px;\n                    line-height: 30px;\n                    padding-top: 0;\n                    min-height: initial;\n                    padding-bottom: initial;\n                    box-shadow: none;\n                    align-items: start;\n                    cursor: pointer; }\n                    .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box .options li.active {\n                      font-weight: 700;\n                      background-color: #FAFAFB; }\n                    .settings-panel .panel-content .section-list li .list-item div.as-email .dropdown-box .options li:hover {\n                      background-color: #F4F9FF; }\n              .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box {\n                background-color: #C0C0C0;\n                border-radius: 14px;\n                box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n                width: 48px;\n                height: 25px;\n                display: flex;\n                justify-content: space-between;\n                cursor: pointer; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box:hover {\n                  opacity: 0.75; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box .label-on,\n                .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box .label-off {\n                  color: #FAFAFB;\n                  font-family: 'Roboto';\n                  font-weight: 400;\n                  font-size: 12px;\n                  line-height: 14px;\n                  line-height: 26px;\n                  display: flex;\n                  justify-content: center;\n                  flex-direction: column; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box .label-on {\n                  margin-left: 7px;\n                  display: none; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box .label-off {\n                  margin-right: 7px; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box .dot {\n                  background-color: #FFFFFF;\n                  border-radius: 100%;\n                  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.35);\n                  width: 17px;\n                  height: 17px;\n                  margin-top: 4px;\n                  margin-left: 4px;\n                  margin-right: 4px; }\n                .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box.checked {\n                  background-color: #0681FF; }\n                  .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box.checked .label-on {\n                    display: block; }\n                  .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box.checked .label-off {\n                    display: none; }\n        .settings-panel .panel-content .section-list li .description-mobile {\n          display: none; }\n  .settings-panel .bottom-btn {\n    text-align: center; }\n\n@media (max-width: 900px) {\n  .header-nav-ui .primary-nav .primary-level-1 {\n    margin: 0 20px; }\n    .header-nav-ui .primary-nav .primary-level-1::before {\n      left: -20px; }\n  .header-nav-ui .primary-nav .primary-level-2-container .primary-level-2 {\n    margin-left: 20px; }\n  .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-container {\n    background: none; }\n    .header-nav-ui .primary-nav .primary-level-1.login-container .user-info-container .handle {\n      display: none; }\n  .header-nav-ui .secondary-nav a {\n    margin: 0 10px; }\n  .header-nav-ui .more-btn-container .more-btn {\n    margin-left: 10px !important; }\n  .header-nav-ui .settings-nav .close-btn {\n    background-color: initial; } }\n\n@media (max-width: 768px) {\n  .header-nav-ui .user-info-popup,\n  .header-nav-ui .login-container {\n    display: none; }\n    .header-nav-ui .user-info-popup.isOpen,\n    .header-nav-ui .login-container.isOpen {\n      display: flex; }\n  .header-nav-ui .primary-nav {\n    height: 60px;\n    justify-content: space-around;\n    display: none; }\n    .header-nav-ui .primary-nav .primary-level-2-container,\n    .header-nav-ui .primary-nav .primary-level-2-container.isOpen,\n    .header-nav-ui .primary-nav .tc-logo {\n      display: none; }\n    .header-nav-ui .primary-nav .primary-level-1-separator {\n      display: block;\n      height: 30px;\n      width: 1px;\n      background: #555555; }\n    .header-nav-ui .primary-nav .primary-level-1::before {\n      content: none; }\n    .header-nav-ui .primary-nav .primary-level-1.login-btn, .header-nav-ui .primary-nav .primary-level-1.login-container,\n    .header-nav-ui .primary-nav .primary-level-1 .user-info-popup {\n      display: none; }\n    .header-nav-ui .primary-nav .primary-level-1.more-menu {\n      display: flex; }\n    .header-nav-ui .primary-nav .primary-level-1.isOpen.isOpenSubmenu {\n      color: #43D7B0; }\n  .header-nav-ui .mobile-notifications-panel {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    box-shadow: none;\n    border-radius: 0;\n    display: block;\n    top: 0;\n    right: 0;\n    overflow-y: auto; }\n    .header-nav-ui .mobile-notifications-panel .noti-header {\n      height: 40px;\n      border-radius: 0;\n      padding-left: 10px;\n      padding-right: 10px; }\n      .header-nav-ui .mobile-notifications-panel .noti-header .notification-back-btn {\n        width: 50px;\n        height: 50px;\n        background: url(" + ___CSS_LOADER_URL___29___ + ") center center no-repeat;\n        margin-left: -8px; }\n      .header-nav-ui .mobile-notifications-panel .noti-header .btn-setting {\n        width: 50px;\n        height: 50px;\n        background: url(" + ___CSS_LOADER_URL___30___ + ") center center no-repeat; }\n      .header-nav-ui .mobile-notifications-panel .noti-header .left-noti {\n        margin-left: 0;\n        padding-left: 0;\n        background: none; }\n    .header-nav-ui .mobile-notifications-panel .noti-body.center .txt {\n      padding: 19px 20px 12px 21px; }\n    .header-nav-ui .mobile-notifications-panel .noti-body .items {\n      padding: 0 10px 0 20px; }\n      .header-nav-ui .mobile-notifications-panel .noti-body .items .item-content .txt {\n        padding-right: 0; }\n    .header-nav-ui .mobile-notifications-panel .noti-body .right-remove {\n      right: 5px; }\n      .header-nav-ui .mobile-notifications-panel .noti-body .right-remove .black-txt {\n        left: -90px; }\n        .header-nav-ui .mobile-notifications-panel .noti-body .right-remove .black-txt:after {\n          left: 90%; }\n      .header-nav-ui .mobile-notifications-panel .noti-body .right-remove:hover .black-txt {\n        display: none; }\n    .header-nav-ui .mobile-notifications-panel .noti-body .grey-bar .copyicon-title {\n      padding-left: 25px;\n      width: calc(100% - 50px); }\n    .header-nav-ui .mobile-notifications-panel .noti-body .grey-bar .right-remove {\n      right: 15px; }\n    .header-nav-ui .mobile-notifications-panel .light-bar {\n      display: flex;\n      justify-content: space-between; }\n      .header-nav-ui .mobile-notifications-panel .light-bar .green-link {\n        color: #229174;\n        font-size: 14px;\n        font-family: 'Roboto';\n        font-weight: 700;\n        line-height: 30px;\n        text-align: left; }\n  .header-nav-ui .secondary-nav {\n    display: none; }\n  .header-nav-ui .mobile-nav {\n    display: flex; }\n    .header-nav-ui .mobile-nav .close-btn {\n      display: none; }\n  .header-nav-ui .mobile-nav-sub-menu {\n    display: block; }\n    .header-nav-ui .mobile-nav-sub-menu.isNothing {\n      display: none; }\n  .header-nav-ui.isOpenSecondaryNavMobile .primary-nav,\n  .header-nav-ui.isOpenSecondaryNavMobile .secondary-nav-mobile {\n    display: flex; }\n  .header-nav-ui.isOpenSecondaryNavMobile .mobile-nav .menu-btn {\n    display: none; }\n  .header-nav-ui.isOpenSecondaryNavMobile .mobile-nav .close-btn {\n    display: flex; }\n  .header-nav-ui.isOpenSecondaryNavMobile .mobile-nav-sub-menu {\n    display: none; }\n  .settings-panel {\n    margin-top: 0;\n    margin-bottom: 0;\n    border-radius: 0;\n    width: 100%;\n    padding: 12px 0 32px 0; }\n    .settings-panel > .title {\n      display: none; }\n    .settings-panel .panel-content .section-title .left {\n      flex: 0 0 45%; }\n    .settings-panel .panel-content .section-title div.website {\n      flex: 0 0 10%; }\n      .settings-panel .panel-content .section-title div.website span {\n        padding-left: 0;\n        width: 22px;\n        height: 22px; }\n        .settings-panel .panel-content .section-title div.website span em {\n          display: none; }\n    .settings-panel .panel-content .section-title div.as-email {\n      flex: 0 0 45%; }\n      .settings-panel .panel-content .section-title div.as-email span {\n        padding-left: 0;\n        width: 22px;\n        height: 22px; }\n        .settings-panel .panel-content .section-title div.as-email span em {\n          display: none; }\n    .settings-panel .panel-content .section-list {\n      padding-left: 0; }\n      .settings-panel .panel-content .section-list li .list-item .left {\n        flex: 0 0 45%;\n        align-self: flex-start;\n        padding-top: 5px; }\n        .settings-panel .panel-content .section-list li .list-item .left .title {\n          line-height: 20px; }\n        .settings-panel .panel-content .section-list li .list-item .left .description {\n          display: none; }\n      .settings-panel .panel-content .section-list li .list-item div.website {\n        flex: 0 0 10%;\n        align-self: flex-start; }\n      .settings-panel .panel-content .section-list li .list-item div.as-email {\n        flex: 0 0 45%;\n        align-self: flex-start;\n        margin-top: 0; }\n        .settings-panel .panel-content .section-list li .list-item div.as-email .check-icon {\n          margin-top: 12px; }\n          .settings-panel .panel-content .section-list li .list-item div.as-email .check-icon.checked {\n            margin-top: 13px; }\n        .settings-panel .panel-content .section-list li .list-item div.as-email .switch-box {\n          margin-top: 2px; }\n      .settings-panel .panel-content .section-list li .description-mobile {\n        display: block;\n        color: #808080;\n        font-family: 'Roboto';\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 20px;\n        margin-top: 10px; }\n  .mobile-hide {\n    display: none; }\n  .mobile-show {\n    display: block; } }\n\n.avatar {\n  border-radius: 100%; }\n\n.opacity-0 {\n  opacity: 0; }\n\n.fade-opacity-in {\n  transition: opacity 400ms ease-in 100ms;\n  opacity: 1; }\n", ""]);



/***/ })
/******/ ]);
});