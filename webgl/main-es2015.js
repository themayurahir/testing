(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _webgl_webgl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/webgl.component */ "./src/app/webgl/webgl.component.ts");



class AppComponent {
    constructor() {
        this.title = 'gitpages';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-webgl");
    } }, directives: [_webgl_webgl_component__WEBPACK_IMPORTED_MODULE_1__["WebglComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _webgl_webgl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/webgl.component */ "./src/app/webgl/webgl.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _webgl_webgl_component__WEBPACK_IMPORTED_MODULE_4__["WebglComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _webgl_webgl_component__WEBPACK_IMPORTED_MODULE_4__["WebglComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/webgl/webgl.component.ts":
/*!******************************************!*\
  !*** ./src/app/webgl/webgl.component.ts ***!
  \******************************************/
/*! exports provided: WebglComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebglComponent", function() { return WebglComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class WebglComponent {
    constructor(renderer2, _document) {
        this.renderer2 = renderer2;
        this._document = _document;
        this.loadScripts();
    }
    // Method to dynamically load JavaScript 
    loadScripts() {
        // This array contains all the files/CDNs 
        const dynamicScripts = [
            'assets/js/tracking/build/tracking-min.js',
            'assets/js/tracking/build/data/face-min.js',
            'assets/js/dat.gui/build/dat.gui.min.js',
            // '../../assets/three.min.js',
            'https://threejs.org/build/three.js',
            'assets/TrackballControls.js',
            // '../../assets/Tween.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/tween.js/16.3.5/Tween.min.js',
            'assets/js/stl-loader.js',
            'assets/js/loader.js?v=201805160016',
            'assets/js/stl.js',
            'assets/demo.js'
        ];
        for (let i = 0; i < dynamicScripts.length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    }
    ngOnInit() {
    }
}
WebglComponent.ɵfac = function WebglComponent_Factory(t) { return new (t || WebglComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
WebglComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebglComponent, selectors: [["app-webgl"]], decls: 30, vars: 0, consts: [["id", "spinner", 1, "spinner", 2, "display", "block"], [1, "cube1"], [1, "cube2"], [1, "demo-frame"], ["id", "demo-container", 1, "demo-container", 2, "overflow", "hidden", "position", "relative", "max-width", "100%", "max-height", "100%"], ["id", "video", "preload", "", "autoplay", "", "loop", "", "muted", ""], ["id", "canvas"], ["id", "canvas-track"], [1, "questions"], ["id", "step-0", 1, "step"], [1, "intro"], ["id", "start"], ["id", "step", "data-step-num", "0", 1, "step", 2, "display", "none"], ["data-question-id", "0", 1, "question"], ["data-answer-id", "0", 1, "answer"], [1, "prev"], [1, "next"], [1, "house"], [1, "zoomInUp"], [1, "house-name"], ["id", "house-img"], [2, "text-align", "center"], ["href", "", "id", "fb-link", "target", "_blank"], ["src", "./assets/img/fb.png", 1, "social"], ["href", "", "id", "tw-link", "target", "_blank"], ["src", "./assets/img/twitter.png", 1, "social", 2, "background", "#fff"]], template: function WebglComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "video", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start the quiz by clicking on the button below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]\u00A0{\r\n    font-family: 'Lato', sans-serif;\r\n  }\r\n\r\n  @font-face {\r\n    font-family: 'MagicSchoolOne';\r\n    src: url('/assets/font/MagicSchoolOne.ttf') format('truetype'); \r\n  }\r\n\r\n  body[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  .questions[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    margin: auto -10px;\r\n    padding: 10px 10px;\r\n      \r\n    background: linear-gradient(to bottom, rgba(59,143,239,0) 8%,rgba(59,143,239,0.17) 21%,rgba(53,137,229,0.25) 37%,rgba(2,82,142,0.65) 100%); \r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#003b8fef', endColorstr='#a602528e',GradientType=0 ); \r\n  }\r\n\r\n  video[_ngcontent-%COMP%] {\r\n    transform: scaleX(-1);\r\n  }\r\n\r\n  .step[_ngcontent-%COMP%]\u00A0{\r\n    position: relative;\r\n  }\r\n\r\n  .step[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-family: 'Lato', sans-serif;\r\n  }\r\n\r\n  .step[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-family: 'Lato', sans-serif;\r\n    max-height: 100px;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  span.prev[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 3%;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    text-shadow: 2px 2px 6px #1d1d1d;\r\n    border-radius: 50%;\r\n    padding: 0px 10px;\r\n    text-align: center;\r\n    bottom: 10%;\r\n  }\r\n\r\n  span.next[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 3%;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    text-shadow: 2px 2px 6px #1d1d1d;\r\n    border-radius: 50%;\r\n    padding: 0px 10px;\r\n    text-align: center;\r\n    bottom: 10%;\r\n  }\r\n\r\n  .step[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border: 3px solid #7eb0d8;\r\n    outline: none;\r\n    width: 70%;\r\n    font-size: 15px;\r\n    display: block;\r\n    color: #fff;\r\n    padding: 10px 10px;\r\n    margin: auto;\r\n    font-family: 'Lato';\r\n  }\r\n\r\n  .step[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    border: 3px solid #64a3d6;\r\n    outline: none;\r\n    background: #1b6fc175;\r\n  }\r\n\r\n  .house[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background: rgba(51, 51, 51, 0.30);\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    padding: 35% 0;\r\n  }\r\n\r\n  img.social[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    margin: 0px 10px;\r\n  }\r\n\r\n  .house-name[_ngcontent-%COMP%] {\r\n    font-family: 'MagicSchoolOne', sans-serif;\r\n    font-size: 4em;\r\n    margin: 5px 0;\r\n    text-align: center;\r\n    color: #5b5428;\r\n    font-weight: 100;\r\n  }\r\n\r\n  .house-name.hufflepuff[_ngcontent-%COMP%] {    \r\n    color: #f8ec6e;\r\n    text-shadow: 1px 2px 2px #282b38;\r\n  }\r\n\r\n  .house-name.ravenclaw[_ngcontent-%COMP%] {\r\n    color: #222d73;\r\n    text-shadow: 1px 2px 2px #b3cde9;\r\n  }\r\n\r\n  .house-name.slytherin[_ngcontent-%COMP%] {    \r\n    color: #2b6b58;\r\n    text-shadow: 0px 2px 2px #274e61;\r\n  }\r\n\r\n  .house-name.gryffindor[_ngcontent-%COMP%] {\r\n    color: #b42c0d;\r\n    text-shadow: 0px 2px 2px #f9e600;\r\n  }\r\n\r\n  #house-img[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n  }\r\n\r\n  .demo-container[_ngcontent-%COMP%]\u00A0{\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    width: 100%;\r\n  }\r\n\r\n  video[_ngcontent-%COMP%] { height: 100%;}\r\n\r\n  video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    -o-object-position: top;\r\n       object-position: top;\r\n    max-width: 100%;\r\n    padding: 0;\r\n    bottom: 0;\r\n    max-height: 100%;\r\n    overflow: hidden;\r\n    top: 0;\r\n    left: 0;\r\n    margin: 0;\r\n  }\r\n\r\n  #spinner[_ngcontent-%COMP%]:before {\r\n    content: \" \";\r\n    background: #c5fffc75;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n\r\n  .spinner[_ngcontent-%COMP%] {\r\n    display: none;\r\n    width: 40px;\r\n    height: 40px;\r\n    left: 45%;\r\n    top: 40%;\r\n    z-index: 3;\r\n    position: fixed;\r\n  }\r\n\r\n  .cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%] {\r\n    background-color: rgb(20, 218, 208);\r\n    width: 15px;\r\n    height: 15px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\r\n    animation: sk-cubemove 1.8s infinite ease-in-out;\r\n  }\r\n\r\n  .cube2[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: -0.9s;\r\n    animation-delay: -0.9s;\r\n  }\r\n\r\n  @-webkit-keyframes zoomInUp {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);\r\n              animation-timing-function: cubic-bezier(.55,.055,.675,.19)\r\n    }\r\n\r\n    60% {\r\n      opacity: 1;\r\n      transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);\r\n              animation-timing-function: cubic-bezier(.175,.885,.32,1)\r\n    }\r\n  }\r\n\r\n  @keyframes zoomInUp {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);\r\n              animation-timing-function: cubic-bezier(.55,.055,.675,.19)\r\n    }\r\n\r\n    60% {\r\n      opacity: 1;\r\n      transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);\r\n              animation-timing-function: cubic-bezier(.175,.885,.32,1)\r\n    }\r\n  }\r\n\r\n  .zoomInUp[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: zoomInUp;\r\n            animation-name: zoomInUp;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both\r\n  }\r\n\r\n  @-webkit-keyframes sk-cubemove {\r\n    25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\r\n    50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\r\n    75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\r\n    100% { -webkit-transform: rotate(-360deg) }\r\n  }\r\n\r\n  @keyframes sk-cubemove {\r\n    25% { \r\n      transform: translateX(42px) rotate(-90deg) scale(0.5);\r\n      -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\r\n    } 50% { \r\n      transform: translateX(42px) translateY(42px) rotate(-179deg);\r\n      -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\r\n    } 50.1% { \r\n      transform: translateX(42px) translateY(42px) rotate(-180deg);\r\n      -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\r\n    } 75% { \r\n      transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\r\n      -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\r\n    } 100% { \r\n      transform: rotate(-360deg);\r\n      -webkit-transform: rotate(-360deg);\r\n    }\r\n  }\r\n\r\n  @media screen and (max-device-width: 750px) {\r\n    video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%] {\r\n      -o-object-fit: cover;\r\n         object-fit: cover;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2ViZ2wvd2ViZ2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3Qiw4REFBOEQsRUFBRSxrREFBa0Q7RUFDcEg7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1SUFBdUksRUFDTyxhQUFhLEVBQ2IsNEJBQTRCO0lBQzFLLDBJQUEwSSxFQUFFLHFEQUFxRDtJQUNqTSx1SEFBdUgsRUFBRSxVQUFVO0VBQ3JJOztFQUVBO0lBRUUscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUEsUUFBUSxZQUFZLENBQUM7O0VBRXJCO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUFvQjtPQUFwQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsT0FBTztJQUNQLE1BQU07RUFDUjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87O0lBRVAsd0RBQXdEO0lBQ3hELGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDVixvREFBb0Q7TUFDcEQsa0VBQXlEO2NBQXpEO0lBQ0Y7O0lBRUE7TUFDRSxVQUFVO01BQ1YseURBQXlEO01BQ3pELGdFQUF1RDtjQUF2RDtJQUNGO0VBQ0Y7O0VBWkE7SUFDRTtNQUNFLFVBQVU7TUFDVixvREFBb0Q7TUFDcEQsa0VBQXlEO2NBQXpEO0lBQ0Y7O0lBRUE7TUFDRSxVQUFVO01BQ1YseURBQXlEO01BQ3pELGdFQUF1RDtjQUF2RDtJQUNGO0VBQ0Y7O0VBRUE7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUNBQXdCO1lBQXhCO0VBQ0Y7O0VBRUE7SUFDRSxNQUFNLDhEQUE4RDtJQUNwRSxNQUFNLHFFQUFxRTtJQUMzRSxNQUFNLCtFQUErRTtJQUNyRixPQUFPLG1DQUFtQztFQUM1Qzs7RUFFQTtJQUNFO01BQ0UscURBQXFEO01BQ3JELDZEQUE2RDtJQUMvRCxFQUFFO01BQ0EsNERBQTREO01BQzVELG9FQUFvRTtJQUN0RSxFQUFFO01BQ0EsNERBQTREO01BQzVELG9FQUFvRTtJQUN0RSxFQUFFO01BQ0Esc0VBQXNFO01BQ3RFLDhFQUE4RTtJQUNoRixFQUFFO01BQ0EsMEJBQTBCO01BQzFCLGtDQUFrQztJQUNwQztFQUNGOztFQUVBO0lBQ0U7TUFDRSxvQkFBaUI7U0FBakIsaUJBQWlCO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWJnbC93ZWJnbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKsKge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYWdpY1NjaG9vbE9uZSc7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250L01hZ2ljU2Nob29sT25lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTsgLyogQ2hyb21lIDQrLCBGaXJlZm94IDMuNSwgT3BlcmEgMTArLCBTYWZhcmkgM+KAlDUgKi9cclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnF1ZXN0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG8gLTEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAvKiBQZXJtYWxpbmsgLSB1c2UgdG8gZWRpdCBhbmQgc2hhcmUgdGhpcyBncmFkaWVudDogaHR0cDovL2NvbG9yemlsbGEuY29tL2dyYWRpZW50LWVkaXRvci8jM2I4ZmVmKzMwLDAyNTI4ZSsxMDAmMCsxNiwwLjI1KzM3LDAuNjUrMTAwICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNTksMTQzLDIzOSwwKSA4JSwgcmdiYSg1OSwxNDMsMjM5LDAuMTcpIDIxJSwgcmdiYSg1MywxMzcsMjI5LDAuMjUpIDM3JSwgcmdiYSgyLDgyLDE0MiwwLjY1KSAxMDAlKTsgLyogRkYzLjYtMTUgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg1OSwxNDMsMjM5LDApIDglLHJnYmEoNTksMTQzLDIzOSwwLjE3KSAyMSUscmdiYSg1MywxMzcsMjI5LDAuMjUpIDM3JSxyZ2JhKDIsODIsMTQyLDAuNjUpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg1OSwxNDMsMjM5LDApIDglLHJnYmEoNTksMTQzLDIzOSwwLjE3KSAyMSUscmdiYSg1MywxMzcsMjI5LDAuMjUpIDM3JSxyZ2JhKDIsODIsMTQyLDAuNjUpIDEwMCUpOyAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAzYjhmZWYnLCBlbmRDb2xvcnN0cj0nI2E2MDI1MjhlJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xyXG4gIH1cclxuXHJcbiAgdmlkZW8ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgfVxyXG5cclxuICAuc3RlcMKge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAgLmludHJvIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5zdGVwIC5xdWVzdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ucHJldiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4ICMxZDFkMWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gIH1cclxuXHJcbiAgc3Bhbi5uZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNnB4ICMxZDFkMWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzdlYjBkODtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgfVxyXG5cclxuICAuc3RlcCBidXR0b246YWN0aXZlIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NGEzZDY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzFiNmZjMTc1O1xyXG4gIH1cclxuICBcclxuICAuaG91c2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTEsIDUxLCA1MSwgMC4zMCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcGFkZGluZzogMzUlIDA7XHJcbiAgfVxyXG5cclxuICBpbWcuc29jaWFsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvdXNlLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYWdpY1NjaG9vbE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzViNTQyODtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgfVxyXG5cclxuICAuaG91c2UtbmFtZS5odWZmbGVwdWZmIHsgICAgXHJcbiAgICBjb2xvcjogI2Y4ZWM2ZTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IDJweCAjMjgyYjM4O1xyXG4gIH1cclxuXHJcbiAgLmhvdXNlLW5hbWUucmF2ZW5jbGF3IHtcclxuICAgIGNvbG9yOiAjMjIyZDczO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggMnB4ICNiM2NkZTk7XHJcbiAgfVxyXG5cclxuICAuaG91c2UtbmFtZS5zbHl0aGVyaW4geyAgICBcclxuICAgIGNvbG9yOiAjMmI2YjU4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggMnB4ICMyNzRlNjE7XHJcbiAgfVxyXG5cclxuICAuaG91c2UtbmFtZS5ncnlmZmluZG9yIHtcclxuICAgIGNvbG9yOiAjYjQyYzBkO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggMnB4ICNmOWU2MDA7XHJcbiAgfVxyXG5cclxuICAjaG91c2UtaW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmRlbW8tY29udGFpbmVywqB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB2aWRlbyB7IGhlaWdodDogMTAwJTt9XHJcblxyXG4gIHZpZGVvLCBjYW52YXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgI3NwaW5uZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgYmFja2dyb3VuZDogI2M1ZmZmYzc1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGVmdDogNDUlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuXHJcbiAgLmN1YmUxLCAuY3ViZTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMTgsIDIwOCk7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1jdWJlbW92ZSAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmN1YmUyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHpvb21JblVwIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDEwMDBweCwwKTtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KVxyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC56b29tSW5VcCB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogem9vbUluVXA7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aFxyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVtb3ZlIHtcclxuICAgIDI1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSkgfVxyXG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZykgfVxyXG4gICAgNzUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpIH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xyXG4gICAgMjUlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgfSA1MCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICAgIH0gNTAuMSUgeyBcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIH0gNzUlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgIH0gMTAwJSB7IFxyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NTBweCkge1xyXG4gICAgdmlkZW8sIGNhbnZhcyB7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebglComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-webgl',
                templateUrl: './webgl.component.html',
                styleUrls: ['./webgl.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\backup\gitpages\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map