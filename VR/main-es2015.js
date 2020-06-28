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
/* harmony import */ var _gltf_gltf_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gltf/gltf.component */ "./src/app/gltf/gltf.component.ts");



class AppComponent {
    constructor() {
        this.title = 'VRtest';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-gltf");
    } }, directives: [_gltf_gltf_component__WEBPACK_IMPORTED_MODULE_1__["GltfComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _videojs_viewer_videojs_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videojs-viewer/videojs-viewer.component */ "./src/app/videojs-viewer/videojs-viewer.component.ts");
/* harmony import */ var _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./face-filter/face-filter.component */ "./src/app/face-filter/face-filter.component.ts");
/* harmony import */ var _gltf_gltf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gltf/gltf.component */ "./src/app/gltf/gltf.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _videojs_viewer_videojs_viewer_component__WEBPACK_IMPORTED_MODULE_4__["VideojsViewerComponent"],
        _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_5__["FaceFilterComponent"],
        _gltf_gltf_component__WEBPACK_IMPORTED_MODULE_6__["GltfComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _videojs_viewer_videojs_viewer_component__WEBPACK_IMPORTED_MODULE_4__["VideojsViewerComponent"],
                    _face_filter_face_filter_component__WEBPACK_IMPORTED_MODULE_5__["FaceFilterComponent"],
                    _gltf_gltf_component__WEBPACK_IMPORTED_MODULE_6__["GltfComponent"]
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

/***/ "./src/app/face-filter/face-filter.component.ts":
/*!******************************************************!*\
  !*** ./src/app/face-filter/face-filter.component.ts ***!
  \******************************************************/
/*! exports provided: FaceFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceFilterComponent", function() { return FaceFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var facefilter_helpers_JeelizThreejsHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! facefilter/helpers/JeelizThreejsHelper.js */ "./node_modules/facefilter/helpers/JeelizThreejsHelper.js");
/* harmony import */ var facefilter_helpers_JeelizThreejsHelper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(facefilter_helpers_JeelizThreejsHelper_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_stl_loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/js/stl-loader.js */ "./src/assets/js/stl-loader.js");
/* harmony import */ var _assets_js_stl_loader_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_stl_loader_js__WEBPACK_IMPORTED_MODULE_2__);

// import * as THREE from '../../assets/js/three.min.js';
// import 'facefilter/helpers/JeelizResizer.js';
// import * as JeelizResizer from 'facefilter/helpers/JeelizResizer.js'
// import {JEEFACEFILTERAPI}  from '../../assets/js/jeelizFaceFilterES6.js'



class FaceFilterComponent {
    constructor() {
        this.detect_callback = (isDetected) => {
            if (isDetected) {
                console.log('INFO in detect_callback() : DETECTED');
            }
            else {
                console.log('INFO in detect_callback() : LOST');
            }
        };
        this.init_faceFilter = (videoSettings) => {
            console.log("Inside init_faceFilter");
            JEEFACEFILTERAPI.init({
                canvasId: 'jeeFaceFilterCanvas',
                NNCpath: '../../assets/js/NNC/',
                videoSettings: videoSettings,
                callbackReady: (errCode, spec) => {
                    if (errCode) {
                        console.log('AN ERROR HAPPENED. SORRY BRO :( . ERR =', errCode);
                        return;
                    }
                    console.log('INFO : JEEFACEFILTERAPI IS READY');
                    this.init_threeScene(spec);
                },
                // called at each render iteration (drawing loop)
                callbackTrack: (detectState) => {
                    THREE.JeelizHelper.render(detectState, this.THREECAMERA);
                } // end callbackTrack()
            }); // end JEEFACEFILTERAPI.init call
        };
    }
    init_threeScene(spec) {
        console.log('inside init_threeScene');
        console.log('THREE.JeelizHelper:', THREE.JeelizHelper);
        const threeStuffs = THREE.JeelizHelper.init(spec, this.detect_callback);
        // Create the JSONLoader for our hat:
        const loader = new THREE.BufferGeometryLoader();
        // const loader = new THREE.STLLoader();
        // Load our cool hat:
        loader.load('assets/js/models/luffys_hat.json', (geometry, materials) => {
            // we create our Hat mesh
            const mat = new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load("assets/js/models/Texture.jpg")
            });
            // const mat = new THREE.MeshPhongMaterial({
            //   color: 0x4C4C4C, ambient: 0x4C4C4C, specular: 0x030303, shading: THREE.SmoothShading
            // });
            const hatMesh = new THREE.Mesh(geometry, mat);
            hatMesh.scale.multiplyScalar(1.2);
            hatMesh.rotation.set(0, -40, 0);
            hatMesh.position.set(0.0, 0.6, 0.0);
            hatMesh.frustumCulled = false;
            hatMesh.side = THREE.DoubleSide;
            threeStuffs.faceObject.add(hatMesh);
        }
        // (geometry) => {
        //   const mat = new THREE.MeshPhongMaterial({
        //     color: 0x4C4C4C, ambient: 0x4C4C4C, specular: 0x030303, shading: THREE.SmoothShading
        //   });
        //   geometry.computeVertexNormals();
        //   const hatMesh = new THREE.Mesh(geometry, mat);
        //   hatMesh.rotation.x = -50 * Math.PI / 180;
        //   hatMesh.rotation.z = 0;
        //   hatMesh.rotation.y = 0;
        //   hatMesh.position.x = 1000;
        //   // hatMesh.side = THREE.DoubleSide;
        //   THREE.AnimationClip.CreateFromMorphTargetSequence( 'facialExpressions', geometry.morphTargets, 3 );
        //   threeStuffs.faceObject.add(hatMesh);
        // }
        );
        // CREATE LIGHT
        const ambientLight = new THREE.AmbientLight(0XFFFFFF, 0.8);
        threeStuffs.scene.add(ambientLight);
        // CREATE THE CAMERA
        // old fashioned way: with a fixed FoV:
        //const aspecRatio = spec.canvasElement.width / spec.canvasElement.height;
        //THREECAMERA = new THREE.PerspectiveCamera(SETTINGS.cameraFOV, aspecRatio, 0.1, 100);
        // New hype and lazy way, the helper guess a plausible FoV depending on the hardware:
        this.THREECAMERA = THREE.JeelizHelper.create_camera();
    } // end init_threeScene()
    main() {
        JeelizResizer.size_canvas({
            canvasId: 'jeeFaceFilterCanvas',
            callback: (isError, bestVideoSettings) => {
                console.log('Best:', this);
                this.init_faceFilter(bestVideoSettings);
            }
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.main();
    }
}
FaceFilterComponent.ɵfac = function FaceFilterComponent_Factory(t) { return new (t || FaceFilterComponent)(); };
FaceFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaceFilterComponent, selectors: [["app-face-filter"]], decls: 1, vars: 0, consts: [["width", "600", "height", "600", "id", "jeeFaceFilterCanvas"]], template: function FaceFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
    } }, styles: ["video[_ngcontent-%COMP%] {\r\n    transform: scaleX(-1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFjZS1maWx0ZXIvZmFjZS1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2ZhY2UtZmlsdGVyL2ZhY2UtZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ2aWRlbyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaceFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-face-filter',
                templateUrl: './face-filter.component.html',
                styleUrls: ['./face-filter.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gltf/gltf.component.ts":
/*!****************************************!*\
  !*** ./src/app/gltf/gltf.component.ts ***!
  \****************************************/
/*! exports provided: GltfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GltfComponent", function() { return GltfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class GltfComponent {
    constructor(renderer2, _document) {
        this.renderer2 = renderer2;
        this._document = _document;
        this.loadScripts();
    }
    // Method to dynamically load JavaScript 
    loadScripts() {
        // This array contains all the files/CDNs 
        const dynamicScripts = [
            'assets/js/webgl.js',
            'assets/js/jeelizFaceFilterES6.js',
            'assets/js/stl/three.js',
            // 'https://threejs.org/build/three.js',
            'assets/js/stl/STLLoader.js',
            'assets/js/JeelizResizer.js',
            'assets/js/JeelizThreejsHelper.js',
            'assets/js/demo.js',
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
GltfComponent.ɵfac = function GltfComponent_Factory(t) { return new (t || GltfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
GltfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GltfComponent, selectors: [["app-gltf"]], decls: 19, vars: 0, consts: [["id", "jeeFaceFilterCanvas", 1, "videoRotate"], [1, "questions"], ["id", "step-0", 1, "step"], [1, "intro"], ["id", "start"], ["id", "step", "data-step-num", "0", 1, "step", 2, "display", "none"], ["data-question-id", "0", 1, "question"], ["data-answer-id", "0", 1, "answer"], [1, "prev"], [1, "next"], [1, "house"], [1, "zoomInUp"], [1, "house-name"], ["id", "house-img"]], template: function GltfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start the quiz by clicking on the button below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".questions[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    margin: auto -10px;\r\n    padding: 10px 10px;\r\n      \r\n    background: linear-gradient(to bottom, rgba(59,143,239,0) 8%,rgba(59,143,239,0.17) 21%,rgba(53,137,229,0.25) 37%,rgba(2,82,142,0.65) 100%); \r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#003b8fef', endColorstr='#a602528e',GradientType=0 ); \r\n  }\r\n  .videoRotate[_ngcontent-%COMP%] {\r\n    transform: scaleX(-1);\r\n  }\r\n  .step[_ngcontent-%COMP%]\u00A0{\r\n    position: relative;\r\n  }\r\n  .step[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-family: 'Lato', sans-serif;\r\n  }\r\n  .step[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-family: 'Lato', sans-serif;\r\n    max-height: 100px;\r\n    overflow-y: auto;\r\n  }\r\n  span.prev[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 3%;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    text-shadow: 2px 2px 6px #1d1d1d;\r\n    border-radius: 50%;\r\n    padding: 0px 10px;\r\n    text-align: center;\r\n    bottom: 10%;\r\n  }\r\n  span.next[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 3%;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    text-shadow: 2px 2px 6px #1d1d1d;\r\n    border-radius: 50%;\r\n    padding: 0px 10px;\r\n    text-align: center;\r\n    bottom: 10%;\r\n  }\r\n  .step[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    border: 3px solid #7eb0d8;\r\n    outline: none;\r\n    width: 70%;\r\n    font-size: 15px;\r\n    display: block;\r\n    color: #fff;\r\n    padding: 10px 10px;\r\n    margin: auto;\r\n    font-family: 'Lato';\r\n  }\r\n  .step[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\r\n    border: 3px solid #64a3d6;\r\n    outline: none;\r\n    background: #1b6fc175;\r\n  }\r\n  .house[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    background: rgba(51, 51, 51, 0.30);\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    padding: 35% 0;\r\n  }\r\n  img.social[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    margin: 0px 10px;\r\n  }\r\n  .house-name[_ngcontent-%COMP%] {\r\n    font-family: 'MagicSchoolOne', sans-serif;\r\n    font-size: 4em;\r\n    margin: 5px 0;\r\n    text-align: center;\r\n    color: #5b5428;\r\n    font-weight: 100;\r\n  }\r\n  .house-name.hufflepuff[_ngcontent-%COMP%] {    \r\n    color: #f8ec6e;\r\n    text-shadow: 1px 2px 2px #282b38;\r\n  }\r\n  .house-name.ravenclaw[_ngcontent-%COMP%] {\r\n    color: #222d73;\r\n    text-shadow: 1px 2px 2px #b3cde9;\r\n  }\r\n  .house-name.slytherin[_ngcontent-%COMP%] {    \r\n    color: #2b6b58;\r\n    text-shadow: 0px 2px 2px #274e61;\r\n  }\r\n  .house-name.gryffindor[_ngcontent-%COMP%] {\r\n    color: #b42c0d;\r\n    text-shadow: 0px 2px 2px #f9e600;\r\n  }\r\n  #house-img[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    display: block;\r\n  }\r\n  .demo-container[_ngcontent-%COMP%]\u00A0{\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    width: 100%;\r\n  }\r\n  video[_ngcontent-%COMP%] { height: 100%;}\r\n  video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    -o-object-position: top;\r\n       object-position: top;\r\n    max-width: 100%;\r\n    padding: 0;\r\n    bottom: 0;\r\n    max-height: 100%;\r\n    overflow: hidden;\r\n    top: 0;\r\n    left: 0;\r\n    margin: 0;\r\n  }\r\n  #spinner[_ngcontent-%COMP%]:before {\r\n    content: \" \";\r\n    background: #c5fffc75;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n  }\r\n  .spinner[_ngcontent-%COMP%] {\r\n    display: none;\r\n    width: 40px;\r\n    height: 40px;\r\n    left: 45%;\r\n    top: 40%;\r\n    z-index: 3;\r\n    position: fixed;\r\n  }\r\n  .cube1[_ngcontent-%COMP%], .cube2[_ngcontent-%COMP%] {\r\n    background-color: rgb(20, 218, 208);\r\n    width: 15px;\r\n    height: 15px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\r\n    animation: sk-cubemove 1.8s infinite ease-in-out;\r\n  }\r\n  .cube2[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: -0.9s;\r\n    animation-delay: -0.9s;\r\n  }\r\n  @-webkit-keyframes zoomInUp {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);\r\n              animation-timing-function: cubic-bezier(.55,.055,.675,.19)\r\n    }\r\n\r\n    60% {\r\n      opacity: 1;\r\n      transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);\r\n              animation-timing-function: cubic-bezier(.175,.885,.32,1)\r\n    }\r\n  }\r\n  @keyframes zoomInUp {\r\n    0% {\r\n      opacity: 0;\r\n      transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);\r\n              animation-timing-function: cubic-bezier(.55,.055,.675,.19)\r\n    }\r\n\r\n    60% {\r\n      opacity: 1;\r\n      transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);\r\n      -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);\r\n              animation-timing-function: cubic-bezier(.175,.885,.32,1)\r\n    }\r\n  }\r\n  .zoomInUp[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: zoomInUp;\r\n            animation-name: zoomInUp;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both\r\n  }\r\n  @-webkit-keyframes sk-cubemove {\r\n    25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\r\n    50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\r\n    75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\r\n    100% { -webkit-transform: rotate(-360deg) }\r\n  }\r\n  @keyframes sk-cubemove {\r\n    25% { \r\n      transform: translateX(42px) rotate(-90deg) scale(0.5);\r\n      -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\r\n    } 50% { \r\n      transform: translateX(42px) translateY(42px) rotate(-179deg);\r\n      -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\r\n    } 50.1% { \r\n      transform: translateX(42px) translateY(42px) rotate(-180deg);\r\n      -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\r\n    } 75% { \r\n      transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\r\n      -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\r\n    } 100% { \r\n      transform: rotate(-360deg);\r\n      -webkit-transform: rotate(-360deg);\r\n    }\r\n  }\r\n  @media screen and (max-device-width: 750px) {\r\n    video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%] {\r\n      -o-object-fit: cover;\r\n         object-fit: cover;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2x0Zi9nbHRmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztzSEFNc0g7RUFDcEgsS0FBSztFQUVMOztLQUVHO0VBRUg7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1SUFBdUksRUFDTyxhQUFhLEVBQ2IsNEJBQTRCO0lBQzFLLDBJQUEwSSxFQUFFLHFEQUFxRDtJQUNqTSx1SEFBdUgsRUFBRSxVQUFVO0VBQ3JJO0VBRUE7SUFFRSxxQkFBcUI7RUFDdkI7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsK0JBQStCO0VBQ2pDO0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixlQUFlO0lBQ2YsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7SUFDUixjQUFjO0VBQ2hCO0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLHlDQUF5QztJQUN6QyxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDO0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDO0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDO0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDO0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztFQUNoQjtFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0VBRUEsUUFBUSxZQUFZLENBQUM7RUFFckI7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQW9CO09BQXBCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztFQUNYO0VBRUE7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0VBQ1I7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7RUFDakI7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTzs7SUFFUCx3REFBd0Q7SUFDeEQsZ0RBQWdEO0VBQ2xEO0VBRUE7SUFDRSw4QkFBOEI7SUFDOUIsc0JBQXNCO0VBQ3hCO0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDVixvREFBb0Q7TUFDcEQsa0VBQXlEO2NBQXpEO0lBQ0Y7O0lBRUE7TUFDRSxVQUFVO01BQ1YseURBQXlEO01BQ3pELGdFQUF1RDtjQUF2RDtJQUNGO0VBQ0Y7RUFaQTtJQUNFO01BQ0UsVUFBVTtNQUNWLG9EQUFvRDtNQUNwRCxrRUFBeUQ7Y0FBekQ7SUFDRjs7SUFFQTtNQUNFLFVBQVU7TUFDVix5REFBeUQ7TUFDekQsZ0VBQXVEO2NBQXZEO0lBQ0Y7RUFDRjtFQUVBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlDQUF3QjtZQUF4QjtFQUNGO0VBRUE7SUFDRSxNQUFNLDhEQUE4RDtJQUNwRSxNQUFNLHFFQUFxRTtJQUMzRSxNQUFNLCtFQUErRTtJQUNyRixPQUFPLG1DQUFtQztFQUM1QztFQUVBO0lBQ0U7TUFDRSxxREFBcUQ7TUFDckQsNkRBQTZEO0lBQy9ELEVBQUU7TUFDQSw0REFBNEQ7TUFDNUQsb0VBQW9FO0lBQ3RFLEVBQUU7TUFDQSw0REFBNEQ7TUFDNUQsb0VBQW9FO0lBQ3RFLEVBQUU7TUFDQSxzRUFBc0U7TUFDdEUsOEVBQThFO0lBQ2hGLEVBQUU7TUFDQSwwQkFBMEI7TUFDMUIsa0NBQWtDO0lBQ3BDO0VBQ0Y7RUFFQTtJQUNFO01BQ0Usb0JBQWlCO1NBQWpCLGlCQUFpQjtJQUNuQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2x0Zi9nbHRmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqwqB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hZ2ljU2Nob29sT25lJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnQvTWFnaWNTY2hvb2xPbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpOyAvKiBDaHJvbWUgNCssIEZpcmVmb3ggMy41LCBPcGVyYSAxMCssIFNhZmFyaSAz4oCUNSAqL1xyXG4gIC8qfSAqL1xyXG5cclxuICAvKiBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9ICovXHJcblxyXG4gIC5xdWVzdGlvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvIC0xMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzNiOGZlZiszMCwwMjUyOGUrMTAwJjArMTYsMC4yNSszNywwLjY1KzEwMCAqL1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDU5LDE0MywyMzksMCkgOCUsIHJnYmEoNTksMTQzLDIzOSwwLjE3KSAyMSUsIHJnYmEoNTMsMTM3LDIyOSwwLjI1KSAzNyUsIHJnYmEoMiw4MiwxNDIsMC42NSkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNTksMTQzLDIzOSwwKSA4JSxyZ2JhKDU5LDE0MywyMzksMC4xNykgMjElLHJnYmEoNTMsMTM3LDIyOSwwLjI1KSAzNyUscmdiYSgyLDgyLDE0MiwwLjY1KSAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoNTksMTQzLDIzOSwwKSA4JSxyZ2JhKDU5LDE0MywyMzksMC4xNykgMjElLHJnYmEoNTMsMTM3LDIyOSwwLjI1KSAzNyUscmdiYSgyLDgyLDE0MiwwLjY1KSAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwM2I4ZmVmJywgZW5kQ29sb3JzdHI9JyNhNjAyNTI4ZScsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cclxuICB9XHJcblxyXG4gIC52aWRlb1JvdGF0ZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICB9XHJcblxyXG4gIC5zdGVwwqB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuc3RlcCAuaW50cm8ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLnN0ZXAgLnF1ZXN0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgc3Bhbi5wcmV2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggIzFkMWQxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuICBzcGFuLm5leHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDMlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggIzFkMWQxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuICAuc3RlcCBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjN2ViMGQ4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICB9XHJcblxyXG4gIC5zdGVwIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzY0YTNkNjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWI2ZmMxNzU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3VzZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MSwgNTEsIDUxLCAwLjMwKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAzNSUgMDtcclxuICB9XHJcblxyXG4gIGltZy5zb2NpYWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaG91c2UtbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01hZ2ljU2Nob29sT25lJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNWI1NDI4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB9XHJcblxyXG4gIC5ob3VzZS1uYW1lLmh1ZmZsZXB1ZmYgeyAgICBcclxuICAgIGNvbG9yOiAjZjhlYzZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggMnB4ICMyODJiMzg7XHJcbiAgfVxyXG5cclxuICAuaG91c2UtbmFtZS5yYXZlbmNsYXcge1xyXG4gICAgY29sb3I6ICMyMjJkNzM7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAycHggI2IzY2RlOTtcclxuICB9XHJcblxyXG4gIC5ob3VzZS1uYW1lLnNseXRoZXJpbiB7ICAgIFxyXG4gICAgY29sb3I6ICMyYjZiNTg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCAycHggIzI3NGU2MTtcclxuICB9XHJcblxyXG4gIC5ob3VzZS1uYW1lLmdyeWZmaW5kb3Ige1xyXG4gICAgY29sb3I6ICNiNDJjMGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDJweCAycHggI2Y5ZTYwMDtcclxuICB9XHJcblxyXG4gICNob3VzZS1pbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuZGVtby1jb250YWluZXLCoHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHZpZGVvIHsgaGVpZ2h0OiAxMDAlO31cclxuXHJcbiAgdmlkZW8sIGNhbnZhcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAjc3Bpbm5lcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzVmZmZjNzU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAuY3ViZTEsIC5jdWJlMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAsIDIxOCwgMjA4KTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVtb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNrLWN1YmVtb3ZlIDEuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuY3ViZTIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgem9vbUluVXAge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMTAwMHB4LDApO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpXHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnpvb21JblVwIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5VcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoXHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZW1vdmUge1xyXG4gICAgMjUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KSB9XHJcbiAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKSB9XHJcbiAgICA3NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSkgfVxyXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZykgfVxyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBzay1jdWJlbW92ZSB7XHJcbiAgICAyNSUgeyBcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XHJcbiAgICB9IDUwJSB7IFxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE3OWRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xNzlkZWcpO1xyXG4gICAgfSA1MC4xJSB7IFxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpO1xyXG4gICAgfSA3NSUgeyBcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgfSAxMDAlIHsgXHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc1MHB4KSB7XHJcbiAgICB2aWRlbywgY2FudmFzIHtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GltfComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gltf',
                templateUrl: './gltf.component.html',
                styleUrls: ['./gltf.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/videojs-viewer/videojs-viewer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/videojs-viewer/videojs-viewer.component.ts ***!
  \************************************************************/
/*! exports provided: VideojsViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojsViewerComponent", function() { return VideojsViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var videojs_vr_dist_videojs_vr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! videojs-vr/dist/videojs-vr.js */ "./node_modules/videojs-vr/dist/videojs-vr.js");
/* harmony import */ var videojs_vr_dist_videojs_vr_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(videojs_vr_dist_videojs_vr_js__WEBPACK_IMPORTED_MODULE_2__);




const _c0 = ["my_video"];
class VideojsViewerComponent {
    constructor() {
        // video.js configuration
        this.config = {
            controls: false,
            autoplay: true,
            fluid: false,
            loop: false,
            width: 640,
            height: 440
        };
    }
    ngOnInit() {
        console.log('URL:', this.url);
    }
    // using ngAfterViewInit so that videojs element
    // after the component template itself has been rendered
    ngAfterViewInit() {
        // setup the player
        this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.element.nativeElement, this.config, () => {
            console.log('Using video.js ' + video_js__WEBPACK_IMPORTED_MODULE_1__["default"].VERSION);
            this.player.src(this.url);
            this.player.vr({ projection: 'EAC' });
        });
        // error handling
        this.player.on('error', (error) => {
            console.warn(error);
        });
    }
}
VideojsViewerComponent.ɵfac = function VideojsViewerComponent_Factory(t) { return new (t || VideojsViewerComponent)(); };
VideojsViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideojsViewerComponent, selectors: [["app-videojs-viewer"]], viewQuery: function VideojsViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
    } }, inputs: { url: "url" }, decls: 3, vars: 0, consts: [[1, "video-view"], ["controls", "", "preload", "auto", "crossorigin", "use-credentials", 1, "video-js", "vjs-default-skin"], ["my_video", ""]], template: function VideojsViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".video-view[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9qcy12aWV3ZXIvdmlkZW9qcy12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC92aWRlb2pzLXZpZXdlci92aWRlb2pzLXZpZXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvLXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideojsViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videojs-viewer',
                templateUrl: './videojs-viewer.component.html',
                styleUrls: ['./videojs-viewer.component.css']
            }]
    }], function () { return []; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], element: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['my_video']
        }] }); })();


/***/ }),

/***/ "./src/assets/js/stl-loader.js":
/*!*************************************!*\
  !*** ./src/assets/js/stl-loader.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author aleeper / http://adamleeper.com/
 * @author mrdoob / http://mrdoob.com/
 * @author gero3 / https://github.com/gero3
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.
 *
 * Supports both binary and ASCII encoded files, with automatic detection of type.
 *
 * The loader returns a non-indexed buffer geometry.
 *
 * Limitations:
 *  Binary decoding supports "Magics" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).
 *  There is perhaps some question as to how valid it is to always assume little-endian-ness.
 *  ASCII decoding assumes file is UTF-8.
 *
 * Usage:
 *  var loader = new THREE.STLLoader();
 *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
 *    scene.add( new THREE.Mesh( geometry ) );
 *  });
 *
 * For binary STLs geometry might contain colors for vertices. To use it:
 *  // use the same code to load STL as above
 *  if (geometry.hasColors) {
 *    material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
 *  } else { .... }
 *  var mesh = new THREE.Mesh( geometry, material );
 */


THREE.STLLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

};

THREE.STLLoader.prototype = {

	constructor: THREE.STLLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var loader = new THREE.FileLoader( scope.manager );
		loader.setResponseType( 'arraybuffer' );
		loader.load( url, function ( text ) {

			try {

				onLoad( scope.parse( text ) );

			} catch ( exception ) {

				if ( onError ) {

					onError( exception );

				}

			}

		}, onProgress, onError );

	},

	parse: function ( data ) {

		function isBinary( data ) {

			var expect, face_size, n_faces, reader;
			reader = new DataView( data );
			face_size = ( 32 / 8 * 3 ) + ( ( 32 / 8 * 3 ) * 3 ) + ( 16 / 8 );
			n_faces = reader.getUint32( 80, true );
			expect = 80 + ( 32 / 8 ) + ( n_faces * face_size );

			if ( expect === reader.byteLength ) {

				return true;

			}

			// An ASCII STL data must begin with 'solid ' as the first six bytes.
			// However, ASCII STLs lacking the SPACE after the 'd' are known to be
			// plentiful.  So, check the first 5 bytes for 'solid'.

			// US-ASCII ordinal values for 's', 'o', 'l', 'i', 'd'

			var solid = [ 115, 111, 108, 105, 100 ];

			for ( var i = 0; i < 5; i ++ ) {

				// If solid[ i ] does not match the i-th byte, then it is not an
				// ASCII STL; hence, it is binary and return true.

				if ( solid[ i ] != reader.getUint8( i, false ) ) return true;

 			}

			// First 5 bytes read "solid"; declare it to be an ASCII STL

			return false;

		}

		function parseBinary( data ) {

			var reader = new DataView( data );
			var faces = reader.getUint32( 80, true );

			var r, g, b, hasColors = false, colors;
			var defaultR, defaultG, defaultB, alpha;

			// process STL header
			// check for default color in header ("COLOR=rgba" sequence).

			for ( var index = 0; index < 80 - 10; index ++ ) {

				if ( ( reader.getUint32( index, false ) == 0x434F4C4F /*COLO*/ ) &&
					( reader.getUint8( index + 4 ) == 0x52 /*'R'*/ ) &&
					( reader.getUint8( index + 5 ) == 0x3D /*'='*/ ) ) {

					hasColors = true;
					colors = [];

					defaultR = reader.getUint8( index + 6 ) / 255;
					defaultG = reader.getUint8( index + 7 ) / 255;
					defaultB = reader.getUint8( index + 8 ) / 255;
					alpha = reader.getUint8( index + 9 ) / 255;

				}

			}

			var dataOffset = 84;
			var faceLength = 12 * 4 + 2;

			var geometry = new THREE.BufferGeometry();

			var vertices = [];
			var normals = [];

			for ( var face = 0; face < faces; face ++ ) {

				var start = dataOffset + face * faceLength;
				var normalX = reader.getFloat32( start, true );
				var normalY = reader.getFloat32( start + 4, true );
				var normalZ = reader.getFloat32( start + 8, true );

				if ( hasColors ) {

					var packedColor = reader.getUint16( start + 48, true );

					if ( ( packedColor & 0x8000 ) === 0 ) {

						// facet has its own unique color

						r = ( packedColor & 0x1F ) / 31;
						g = ( ( packedColor >> 5 ) & 0x1F ) / 31;
						b = ( ( packedColor >> 10 ) & 0x1F ) / 31;

					} else {

						r = defaultR;
						g = defaultG;
						b = defaultB;

					}

				}

				for ( var i = 1; i <= 3; i ++ ) {

					var vertexstart = start + i * 12;

					vertices.push( reader.getFloat32( vertexstart, true ) );
					vertices.push( reader.getFloat32( vertexstart + 4, true ) );
					vertices.push( reader.getFloat32( vertexstart + 8, true ) );

					normals.push( normalX, normalY, normalZ );

					if ( hasColors ) {

						colors.push( r, g, b );

					}

				}

			}

			geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );
			geometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( normals ), 3 ) );

			if ( hasColors ) {

				geometry.addAttribute( 'color', new THREE.BufferAttribute( new Float32Array( colors ), 3 ) );
				geometry.hasColors = true;
				geometry.alpha = alpha;

			}

			return geometry;

		}

		function parseASCII( data ) {

			var geometry = new THREE.BufferGeometry();
			var patternFace = /facet([\s\S]*?)endfacet/g;
			var faceCounter = 0;

			var patternFloat = /[\s]+([+-]?(?:\d+.\d+|\d+.|\d+|.\d+)(?:[eE][+-]?\d+)?)/.source;
			var patternVertex = new RegExp( 'vertex' + patternFloat + patternFloat + patternFloat, 'g' );
			var patternNormal = new RegExp( 'normal' + patternFloat + patternFloat + patternFloat, 'g' );

			var vertices = [];
			var normals = [];

			var normal = new THREE.Vector3();

			var result;

			while ( ( result = patternFace.exec( data ) ) !== null ) {

				var vertexCountPerFace = 0;
				var normalCountPerFace = 0;

				var text = result[ 0 ];

				while ( ( result = patternNormal.exec( text ) ) !== null ) {

					normal.x = parseFloat( result[ 1 ] );
					normal.y = parseFloat( result[ 2 ] );
					normal.z = parseFloat( result[ 3 ] );
					normalCountPerFace ++;

				}

				while ( ( result = patternVertex.exec( text ) ) !== null ) {

					vertices.push( parseFloat( result[ 1 ] ), parseFloat( result[ 2 ] ), parseFloat( result[ 3 ] ) );
					normals.push( normal.x, normal.y, normal.z );
					vertexCountPerFace ++;

				}

				// every face have to own ONE valid normal

				if ( normalCountPerFace !== 1 ) {

					console.error( 'THREE.STLLoader: Something isn\'t right with the normal of face number ' + faceCounter );

				}

				// each face have to own THREE valid vertices

				if ( vertexCountPerFace !== 3 ) {

					console.error( 'THREE.STLLoader: Something isn\'t right with the vertices of face number ' + faceCounter );

				}

				faceCounter ++;

			}

			geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
			geometry.addAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ) );

			return geometry;

		}

		function ensureString( buffer ) {

			if ( typeof buffer !== 'string' ) {

				return THREE.LoaderUtils.decodeText( new Uint8Array( buffer ) );

			}

			return buffer;

		}

		function ensureBinary( buffer ) {

			if ( typeof buffer === 'string' ) {

				var array_buffer = new Uint8Array( buffer.length );
				for ( var i = 0; i < buffer.length; i ++ ) {

					array_buffer[ i ] = buffer.charCodeAt( i ) & 0xff; // implicitly assumes little-endian

				}
				return array_buffer.buffer || array_buffer;

			} else {

				return buffer;

			}

		}

		// start

		var binData = ensureBinary( data );

		return isBinary( binData ) ? parseBinary( binData ) : parseASCII( ensureString( data ) );

	}

};

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

module.exports = __webpack_require__(/*! E:\backup\VRtest\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map