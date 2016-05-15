webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var browser_1 = __webpack_require__(1);
	var app_component_1 = __webpack_require__(229);
	__webpack_require__(232);
	browser_1.bootstrap(app_component_1.AppComponent);


/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var textarea_component_1 = __webpack_require__(230);
	var regexInput_component_1 = __webpack_require__(231);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.regexString = '';
	    }
	    AppComponent.prototype.newRegexInput = function (newRegex) {
	        this.regexString = newRegex;
	    };
	    __decorate([
	        core_1.ViewChild(textarea_component_1.SourceTextarea), 
	        __metadata('design:type', textarea_component_1.SourceTextarea)
	    ], AppComponent.prototype, "sourceTextArea", void 0);
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'regex-app',
	            directives: [textarea_component_1.SourceTextarea, regexInput_component_1.RegexInput],
	            template: "\n    <div id=\"main-container\">\n      <regex-input (regexString)=\"newRegexInput($event)\"></regex-input>\n      <source-textarea [regexString]=\"regexString\"></source-textarea>\n    </div>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var SourceBackdrop = (function () {
	    function SourceBackdrop() {
	        this.data = '';
	    }
	    SourceBackdrop.prototype.set = function (data) {
	        this.data = data;
	    };
	    SourceBackdrop = __decorate([
	        core_1.Component({
	            selector: 'source-backdrop',
	            template: "\n  <div class=\"backdrop\">\n    <div class=\"highlights\" [innerHtml]=\"data\">\n    </div>\n  </div>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SourceBackdrop);
	    return SourceBackdrop;
	}());
	var SourceTextarea = (function () {
	    function SourceTextarea() {
	        this.regexString = '';
	        this.textToMatchTo = '';
	    }
	    SourceTextarea.prototype.ngOnChanges = function (changes) {
	        this.evaluate();
	    };
	    SourceTextarea.prototype.evaluate = function () {
	        try {
	            var data = this.textToMatchTo.replace(/\n$/g, '\n\n')
	                .replace(new RegExp(this.regexString, 'g'), '<mark>$&</mark>');
	            if (this.sourceBackdrop != null) {
	                this.sourceBackdrop.set(data);
	            }
	        }
	        catch (e) {
	            this.sourceBackdrop.set(this.textToMatchTo);
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], SourceTextarea.prototype, "regexString", void 0);
	    __decorate([
	        core_1.ViewChild(SourceBackdrop), 
	        __metadata('design:type', SourceBackdrop)
	    ], SourceTextarea.prototype, "sourceBackdrop", void 0);
	    SourceTextarea = __decorate([
	        core_1.Component({
	            selector: 'source-textarea',
	            directives: [SourceBackdrop],
	            template: "\n    <div id=\"data\">\n      <source-backdrop></source-backdrop>\n      <textarea [(ngModel)]=textToMatchTo (keyup)=\"evaluate()\" placeholder=\"text-to-match-to-here\"></textarea>\n    </div>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SourceTextarea);
	    return SourceTextarea;
	}());
	exports.SourceTextarea = SourceTextarea;


/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(24);
	var RegexInput = (function () {
	    function RegexInput() {
	        this.regexString = new core_1.EventEmitter();
	    }
	    RegexInput.prototype.handleChange = function (e, regex) {
	        this.regexString.next(regex.value);
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], RegexInput.prototype, "regexString", void 0);
	    RegexInput = __decorate([
	        core_1.Component({
	            selector: 'regex-input',
	            template: "\n    <div id=\"regex-input\">\n      <input #regexstring (keyup)=\"handleChange($event, regexstring)\" size=\"40\" placeholder=\"regex\" value=\"\"/>\n    </div>\n"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RegexInput);
	    return RegexInput;
	}());
	exports.RegexInput = RegexInput;


/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(233);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(235)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(234)();
	// imports


	// module
	exports.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n  background-color: #EDE5BE;\n}\na {\n  color: #D34A52;\n}\n#main-header {\n  margin: 0;\n  font-family: monospace;\n  background-color: #D34A52;\n  color: #143F50;\n}\n#main-header h1 {\n  text-align: right;\n  padding-right: 10px;\n}\n#cheatsheet {\n  margin-top: 310px;\n  padding-top: 10px;\n  padding-left: 10px;\n  font-family: sans-serif;\n  font-size: 80%;\n  color: #143F50;\n}\n#cheatsheet h2 {\n  margin-top: 0px;\n}\n#cheatsheet .panel {\n  float: left;\n  margin-right: 1em;\n}\n#cheatsheet .header {\n  text-decoration: underline;\n  margin-top: 5px;\n  font-size: 120%;\n}\n#cheatsheet .item {\n  font-weight: bold;\n}\n#cheatsheet .indent {\n  margin-left: 1em;\n}\n#main-container {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n#main-container #regex-input {\n  margin-bottom: 1em;\n}\n#main-container #regex-input input {\n  width: 100%;\n  font-size: 20pt;\n  font-family: Arial;\n  background-color: #eeeeef;\n}\n#main-container #data {\n  display: block;\n  margin: 0 auto;\n  transform: translateZ(0);\n  -webkit-text-size-adjust: none;\n}\n#main-container #data .backdrop {\n  width: 100%;\n  height: 300px;\n  position: absolute;\n  letter-spacing: 1px;\n  z-index: 1;\n  background-color: #eeeeef;\n  overflow: auto;\n  pointer-events: none;\n  transition: transform 1s;\n}\n#main-container #data textarea {\n  width: 100%;\n  height: 300px;\n  position: absolute;\n  padding: 10px;\n  font: 20px/28px 'Open Sans', sans-serif;\n  letter-spacing: 1px;\n  display: block;\n  z-index: 2;\n  margin: 0;\n  border-radius: 0;\n  color: #444;\n  background-color: transparent;\n  overflow: auto;\n  resize: none;\n  transition: transform 1s;\n}\n#main-container #data .highlights {\n  padding: 11px;\n  font: 20px/28px 'Open Sans', sans-serif;\n  letter-spacing: 1px;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n#main-container #data mark {\n  border-radius: 8px;\n  background-color: #D34A52;\n}\n.pull-right {\n  float: right;\n}\n#footer {\n  background-color: #4A6973;\n  color: #eeeeef;\n  font-family: monospace;\n  font-size: 60%;\n  width: 100%;\n  height: 20;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n#footer a {\n  color: #EDE5BE;\n}\n", ""]);

	// exports


/***/ },

/***/ 234:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});