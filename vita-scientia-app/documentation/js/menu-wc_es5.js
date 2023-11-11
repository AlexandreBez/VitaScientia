'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">\n                        <img alt=\"\" class=\"img-responsive\" data-type=\"custom-logo\" data-src=\"images/documentationlogo.png\">\n                    </a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' : 'data-bs-target="#xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"' : 'id="xs-components-links-module-AppModule-b0bb343999c0401a2e3ecbec65490c5a76866396b25cae82ed79702c1d4e115033ea8c8ade9395518e8eba42217f2ec5d6c7a62f3d969b3ab2838fe206d56a66"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomePageModule.html\" data-type=\"entity-link\" >HomePageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"' : 'data-bs-target="#xs-components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"' : 'id="xs-components-links-module-HomePageModule-a219567541a08ee6048c19930b387116df9c1e9ce7acd013175462311a3297d201366f5513091a619edf46d041b219804e109fab6217175a108937a604ce7d63"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomePageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomePageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginPageModule.html\" data-type=\"entity-link\" >LoginPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' : 'id="xs-components-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginPageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginPageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' : 'data-bs-target="#xs-injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"' : 'id="xs-injectables-links-module-LoginPageModule-39b3147dba18cbfec9945f6412f8c70d10e7585d83097a509046d493f69cbc4aabfb8eb7f3119f0dbc4b85da8bfc6c242150380f1cff5d1dbf477873322407b1"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LoginPageService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginPageService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/NotFoundModule.html\" data-type=\"entity-link\" >NotFoundModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"' : 'data-bs-target="#xs-components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"' : 'id="xs-components-links-module-NotFoundModule-3d9693cd09df0cceceddc3d083e5e7ae4a7bfd1ca02a249d45980f6e81bcd7fd945824131f95c2199d01caba8e54811a267541d0d7e72ac7650b234249d8f415"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/NotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RecoverPasswordModule.html\" data-type=\"entity-link\" >RecoverPasswordModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' : 'data-bs-target="#xs-components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' : 'id="xs-components-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/RecoverPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RecoverPasswordComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' : 'data-bs-target="#xs-injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"' : 'id="xs-injectables-links-module-RecoverPasswordModule-33aabbebc537e877ad09b817f37bf0cee5edb4cfe3b10d7161a580e106e44a229579b3664d5c80ee4f9a82654f6a10769baa7db31a173358312e06045015634c"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RecoverPasswordService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RecoverPasswordService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ResetPasswordModule.html\" data-type=\"entity-link\" >ResetPasswordModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' : 'data-bs-target="#xs-components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' : 'id="xs-components-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ResetPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ResetPasswordComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' : 'data-bs-target="#xs-injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"' : 'id="xs-injectables-links-module-ResetPasswordModule-9cee4bdaec6af42d35763e785f8df59d7a0e067ff523dbd26ec357a14b8563ff94ee41ce96b1eb10df73ae9598d6ef6db834eea2bf4330c5ef7586a40f384d99"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ResetPasswordService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ResetPasswordService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SpinnerModule.html\" data-type=\"entity-link\" >SpinnerModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"' : 'data-bs-target="#xs-components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"' : 'id="xs-components-links-module-SpinnerModule-97c6d21618b0b09fde1d2290bb6cbd3d9e20854af64a5708b0ea7e76bc45e8e427efcf9d0bc14e4baceb7ea6bd78720b41653cba114526dce34229b863ebdc0c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/SpinnerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SpinnerComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthenticatedGuard.html\" data-type=\"entity-link\" >AuthenticatedGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoginPageService.html\" data-type=\"entity-link\" >LoginPageService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RecoverPasswordService.html\" data-type=\"entity-link\" >RecoverPasswordService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ResetPasswordService.html\" data-type=\"entity-link\" >ResetPasswordService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Auth.html\" data-type=\"entity-link\" >Auth</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/UpdatePassword.html\" data-type=\"entity-link\" >UpdatePassword</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));