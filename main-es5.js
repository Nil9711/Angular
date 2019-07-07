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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card mb-3\" >\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4\">\n        <img [src]=\"profileImage\" class=\"card-img\" alt=\"Profile\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Ofir Lee Hagag</h5>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n\n    <app-nav-bar></app-nav-bar>\n\n\n    <router-outlet></router-outlet>\n\n    <hr>\n    <app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<div class=\"footerFont\">\n\n    <footer class=\"page-footer font-small blue pt-4\">\n        \n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n  \n        <!-- Grid row -->\n        <div class=\"row\">\n            \n            <!-- Grid column -->\n            <div class=\"col-md-6 mt-md-0 mt-3\">\n                \n          <!-- Content -->\n          <h5 class=\"text-uppercase\">Ofir Lee Photography</h5>\n          <p>Hi, my name is Ofir and i studied Photography on Galitz, contact me!</p>\n  \n        </div>\n        <!-- Grid column -->\n        \n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n        \n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n            \n            <!-- Links -->\n            <h5 class=\"text-uppercase\">Links</h5>\n  \n          <ul class=\"list-unstyled\">\n              <li>\n                  <a href=\"https://www.facebook.com/ofir.l.hagag\">My Facebook</a>\n                </li>\n                <li>\n                    <a href=\"https://www.instagram.com/ofir_lee/\">My Instagram</a>\n                </li>\n                <hr>\n            <li>\n              <p>Contact Me On: Ofirhagag54@gmail.com</p>\n            </li>\n          </ul>\n          \n        </div>\n  \n    </div>\n      <!-- Grid row -->\n      \n    </div>\n    <!-- Footer Links -->\n  \n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Made By:\n      <a href=\"https://www.linkedin.com/in/nil-golan-46a271185/\"> Nil Golan</a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand fontOfirLee\" href=\"#\">\n        <p>Ofir Lee Photography</p>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item active\">\n                <a routerLink=\"photos\" class=\"nav-link fontOfirLee\">\n                    <p>Home</p> <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link fontOfirLee\" routerLink=\"about\"><p>About Me</p></a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photos/photos.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photos/photos.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-1-12\">\n    </div>\n  </div>\n</div> -->\n\n<div class=\"carouselWrapper\">\n\n    <ngb-carousel *ngIf=\"images\">\n      <ng-template ngbSlide>\n        <img [src]=\"images[0]\" alt=\"Random first slide\" class=\"responsive\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img [src]=\"images[1]\" alt=\"Random second slide\" class=\"responsive\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img [src]=\"images[2]\" alt=\"Random third slide\" class=\"responsive\">\n      </ng-template>\n    </ngb-carousel>\n  \n  </div>\n  \n\n<div class=\"moveBitRight\">\n  <a href=\"https://www.facebook.com/ofir.l.hagag\" class=\"fa fa-facebook\"></a>\n  <a href=\"https://www.instagram.com/ofir_lee/\" class=\"fa fa-instagram\"></a>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p,h5{\r\n    color: black;\r\n    font-family: 'Assistant', sans-serif;\r\n    font-size: 24px;\r\n\r\n}\r\n\r\n.small{\r\n    color: black;\r\n    font-size: 12px;\r\n\r\n\r\n}\r\n\r\n.card-img{\r\n    width: 100%;\r\n    max-width: 600px;\r\n    height: 100%;\r\n    max-height: 500px;\r\n}\r\n\r\n.card-text{\r\n    color: black;\r\n\r\n}\r\n\r\n.mb-3{\r\n    border: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTs7O0FBR25COztBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCxoNXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuXHJcbn1cclxuXHJcbi5zbWFsbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcblxyXG59XHJcbi5jYXJkLWltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY2FyZC10ZXh0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxufVxyXG5cclxuLm1iLTN7XHJcbiAgICBib3JkZXI6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.profileImage = 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/29025909_10216190016886510_267795651901784064_n.jpg?_nc_cat=106&_nc_oc=AQkB9GeuN0w4FRSph3RqVsokKAEnuuOzbimGSHd2d1D6_fh_ov62wWZe7ZduL0UkFxA&_nc_ht=scontent.fsdv3-1.fna&oh=0d2a1cc31a6ae63b1418a68427fc6853&oe=5DB0A15B';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OfirProj';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");










var routes = [
    { path: "photos", component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["PhotosComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: "", redirectTo: "photos", pathMatch: "full" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["PhotosComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerFont{\r\n    font-family: 'Literata', serif;\r\n    font-size: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.css":
/*!*********************************************!*\
  !*** ./src/app/photos/photos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail{\r\n    height: 300px;\r\n}\r\n\r\n.wave{\r\n    text-align: center;\r\n}\r\n\r\n.carousel{\r\n    height: 10%;\r\n}\r\n\r\n.w-100{\r\n    max-height: 450px;\r\n    padding-top: 20px;\r\n\r\n}\r\n\r\n.carousel-control-next{\r\n    right: -74px;\r\n}\r\n\r\n.responsive {\r\n    width: 100%;\r\n    height: 500px;\r\n  }\r\n\r\n.carouselWrapper{\r\n    width: 100%;\r\n    max-width: 800px;\r\n    height: auto;\r\n    align-content: center;\r\n    text-align: center;\r\n    margin: auto;\r\n  }\r\n\r\n.moveBitRight {\r\n    align-content: center;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n.carousel-indicators{\r\n    z-index: -10;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7QUFHRjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9waG90b3MvcGhvdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi53YXZle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWx7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnctMTAwe1xyXG4gICAgbWF4LWhlaWdodDogNDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHR7XHJcbiAgICByaWdodDogLTc0cHg7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbFdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICBcclxuLm1vdmVCaXRSaWdodCB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3Jze1xyXG4gICAgei1pbmRleDogLTEwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotosComponent = /** @class */ (function () {
    function PhotosComponent() {
        this.images = [
            "https://i.imgur.com/OsfHGZO.jpg",
            "https://i.imgur.com/VRSXM0Z.jpg",
            "https://i.imgur.com/9X5jDs7.jpg"
        ];
    }
    PhotosComponent.prototype.goToPhoto = function () {
    };
    PhotosComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
    };
    PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/index.js!./src/app/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/photos/photos.component.css")]
        })
    ], PhotosComponent);
    return PhotosComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nil97\OfirProj\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map