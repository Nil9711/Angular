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

module.exports = "<!-- \n<div class=\"card mb-3\" >\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4\">\n        <img [src]=\"profileImage\" class=\"card-img\" alt=\"Profile\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"card-body\">\n          <p>Hi, my name is Ofir and i studied Photography on Galitz,\n            Available for works,  \n          </p>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n\n  <div class=\"container\">\n    <div class=\"profile\">\n      <nav class=\"blue\">\n        <div class=\"nav-wrap\">\n          <i class=\"material-icons\"></i>\n          <h6>Profile</h6>\n          <i class=\"material-icons\"></i>\n        </div>\n      </nav>\n      <div class=\"jumbo\"></div>\n      <div class=\"icons\">\n        <div class=\"big-icon\"></div>\n      </div>\n      <div class=\"details\">\n        <h6>Ofir Hagag</h6>\n        <p>Photographer / Teacher</p>\n      </div>\n      <div class=\"bio\">\n        <p>Professional photographer since 2016, Available for projects and shootings! </p>\n      </div>\n      <div class=\"photos\">\n        <div id=\"first\"></div>\n        <div id=\"second\"></div>\n      </div>\n    </div>\n  </div>\n  \n  <script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script>\n  \n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/js/materialize.min.js\"></script>\n\n"

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

module.exports = "<!-- Footer -->\n<div class=\"footerFont\">\n\n  <footer class=\"page-footer font-small blue pt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-6 mt-md-0 mt-3\">\n\n          <!-- Content -->\n          <h5 class=\"text-uppercase\">Ofir Lee Photography</h5>\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n          <!-- Links -->\n          <h5 class=\"text-uppercase\">Links</h5>\n\n          <ul class=\"list-unstyled\">\n            <li>\n              <p>Contact Me On: Ofirhagag54@gmail.com</p>\n            </li>\n            <li>\n              <div style=\"margin-left:-12px;\">\n                <a href=\"https://www.facebook.com/ofir.l.hagag\" class=\"fa fa-facebook\"></a>\n                <a href=\"https://www.instagram.com/ofir_lee/\" class=\"fa fa-instagram\"></a>\n              </div>\n            </li>\n          </ul>\n\n        </div>\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Made By:\n      <a href=\"https://www.linkedin.com/in/nil-golan-46a271185/\"> Nil Golan</a>\n    </div>\n    <!-- Copyright -->\n\n\n  </footer>\n  <!-- Footer -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand fontOfirLee\" href=\"#\">\n        <p>Ofir Lee Photography</p>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\">\n                <a routerLink=\"photos\" class=\"nav-link fontOfirLee\">\n                    <p>Home</p></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link fontOfirLee\" routerLink=\"about\"><p>About Me</p></a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photos/photos.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photos/photos.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n\n  <img [src]=\"images[0]\" class=\"photos\" alt=\"...\">\n  <img [src]=\"images[1]\" class=\"photos\" alt=\"...\">\n  <img [src]=\"images[2]\" class=\"photos\" alt=\"...\">\n  <img [src]=\"images[3]\" class=\"photos\" alt=\"...\">\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* p,h5{\r\n    color: black;\r\n    font-family: 'Assistant', sans-serif;\r\n    font-size: 24px;\r\n\r\n}\r\n\r\n.small{\r\n    color: black;\r\n    font-size: 12px;\r\n\r\n\r\n}\r\n.card-img{\r\n    width: 100%;\r\n    max-width: 600px;\r\n    height: 100%;\r\n    max-height: 500px;\r\n}\r\n\r\n.card-text{\r\n    color: black;\r\n\r\n}\r\n\r\n.mb-3{\r\n    border: 0;\r\n} */\r\n\r\nhtml, body {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #eaeaea;\r\n  }\r\n\r\n.container {\r\n    margin-top: -25px;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  }\r\n\r\n.profile {\r\n    width: 320px;\r\n    background-color: #fff;\r\n  }\r\n\r\nnav {\r\n    box-shadow: none;\r\n    height: 56px;\r\n  }\r\n\r\nnav .nav-wrap {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0px 15px;\r\n  }\r\n\r\nnav .nav-wrap h6 {\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n  }\r\n\r\nnav .nav-wrap i {\r\n    cursor: pointer;\r\n  }\r\n\r\n.jumbo {\r\n    height: 130px;\r\n    background: url(https://www2.ametsoc.org/stac/assets/Image/MOUNTAIN_image/Snow-Covered%20Sierra%20Nevada%20Mountains,%20California.jpg);\r\n    background-size: cover;\r\n  }\r\n\r\n.icons {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    justify-content: space-around;\r\n  }\r\n\r\n.icons .big-icon {\r\n    width: 134px;\r\n    height: 134px;\r\n    background: url(https://i.imgur.com/8U9Byml.jpg) center center;\r\n    background-size: cover;\r\n    background-position: center;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n    margin-top: -67px;\r\n  }\r\n\r\n.icons .chat-icon {\r\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);\r\n    -webkit-box-ordinal-group: 0;\r\n            order: -1;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #F44336;\r\n    border-radius: 50%;\r\n    margin-top: -25px;\r\n  }\r\n\r\n.icons .chat-icon i {\r\n    font-size: 21px;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n.icons .add-icon {\r\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    background: #2196F3;\r\n    border-radius: 50%;\r\n    margin-top: -25px;\r\n  }\r\n\r\n.icons .add-icon i {\r\n    font-size: 26px;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n.details {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n  }\r\n\r\n.details h6 {\r\n    margin-top: 20px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n  }\r\n\r\n.details p {\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    color: #03A9F4;\r\n    margin-top: 5px;\r\n  }\r\n\r\n.bio {\r\n    text-align: center;\r\n  }\r\n\r\n.bio p {\r\n    color: #999;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    padding: 0px 20px;\r\n  }\r\n\r\n.photos {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n  }\r\n\r\n.photos #first {\r\n      margin-top: 10px;\r\n      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);\r\n      width: 150px;\r\n      height: 100px;\r\n    border-radius: 3px;\r\n    background: url(https://i.imgur.com/qvKD3af.jpg);\r\n    background-size: 105%;\r\n    background-position: 0px -10px;\r\n}\r\n\r\n.photos #second {\r\n    margin-top: 10px;\r\n    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);\r\n    width: 150px;\r\n    height: 100px;\r\n    border-radius: 3px;\r\n    background: url(https://i.imgur.com/qvKD3af.jpg);\r\n    background-size: 105%;\r\n    background-position: 0px -10px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHOztBQUVIO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix1RUFBdUU7RUFDekU7O0FBRUE7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7QUFDQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLHVJQUF1STtJQUN2SSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztBQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLDBDQUEwQztJQUMxQyw0QkFBUztZQUFULFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFDQTtJQUNFLDBDQUEwQztJQUMxQyxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtFQUNoQzs7QUFDQTtNQUNJLGdCQUFnQjtNQUNoQiwwQ0FBMEM7TUFDMUMsWUFBWTtNQUNaLGFBQWE7SUFDZixrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBQ2hELHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxxQkFBcUI7SUFDckIsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHAsaDV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ0Fzc2lzdGFudCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG59XHJcblxyXG4uc21hbGx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG5cclxufVxyXG4uY2FyZC1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi5tYi0ze1xyXG4gICAgYm9yZGVyOiAwO1xyXG59ICovXHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgbmF2IHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgfVxyXG4gIG5hdiAubmF2LXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIH1cclxuICBuYXYgLm5hdi13cmFwIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIG5hdiAubmF2LXdyYXAgaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5qdW1ibyB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3Mi5hbWV0c29jLm9yZy9zdGFjL2Fzc2V0cy9JbWFnZS9NT1VOVEFJTl9pbWFnZS9Tbm93LUNvdmVyZWQlMjBTaWVycmElMjBOZXZhZGElMjBNb3VudGFpbnMsJTIwQ2FsaWZvcm5pYS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLmljb25zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbiAgLmljb25zIC5iaWctaWNvbiB7XHJcbiAgICB3aWR0aDogMTM0cHg7XHJcbiAgICBoZWlnaHQ6IDEzNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vOFU5QnltbC5qcGcpIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjdweDtcclxuICB9XHJcbiAgLmljb25zIC5jaGF0LWljb24ge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgb3JkZXI6IC0xO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NDMzNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gIH1cclxuICAuaWNvbnMgLmNoYXQtaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmljb25zIC5hZGQtaWNvbiB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgfVxyXG4gIC5pY29ucyAuYWRkLWljb24gaSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXRhaWxzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuZGV0YWlscyBoNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmRldGFpbHMgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMwM0E5RjQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iaW8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYmlvIHAge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5waG90b3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLnBob3RvcyAjZmlyc3Qge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kuaW1ndXIuY29tL3F2S0QzYWYuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTA1JTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTBweDtcclxufVxyXG4ucGhvdG9zICNzZWNvbmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9xdktEM2FmLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwNSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTEwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.profileImage = 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/29025909_10216190016886510_267795651901784064_n.jpg?_nc_cat=106&_nc_oc=AQkB9GeuN0w4FRSph3RqVsokKAEnuuOzbimGSHd2d1D6_fh_ov62wWZe7ZduL0UkFxA&_nc_ht=scontent.fsdv3-1.fna&oh=0d2a1cc31a6ae63b1418a68427fc6853&oe=5DB0A15B';
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'OfirProj';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");










const routes = [
    { path: "photos", component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["PhotosComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: "", redirectTo: "photos", pathMatch: "full" }
];
let AppModule = class AppModule {
};
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



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerFont{\r\n    font-family: 'Literata', serif;\r\n    font-size: 10px;\r\n}\r\n#social-fb:hover {\r\n    color: #3B5998;\r\n}\r\n#social-tw:hover {\r\n    color: #4099FF;\r\n}\r\n#social-gp:hover {\r\n    color: #d34836;\r\n}\r\n#social-em:hover {\r\n    color: #f39c12;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGl0ZXJhdGEnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4jc29jaWFsLWZiOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjM0I1OTk4O1xyXG59XHJcbiNzb2NpYWwtdHc6aG92ZXIge1xyXG4gICAgY29sb3I6ICM0MDk5RkY7XHJcbn1cclxuI3NvY2lhbC1ncDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2QzNDgzNjtcclxufVxyXG4jc29jaWFsLWVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjM5YzEyO1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/photos/photos.component.css":
/*!*********************************************!*\
  !*** ./src/app/photos/photos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photos{\r\n    width: 100%;\r\n    height: 70%;\r\n    max-width: 350px;\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n    align-content: center;\r\n    margin:auto;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9waG90b3MvcGhvdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9ze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIFxyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotosComponent = class PhotosComponent {
    constructor() {
        // images = [ 
        //   "https://i.imgur.com/OsfHGZO.jpg"
        // , "https://i.imgur.com/VRSXM0Z.jpg"
        // ,"https://i.imgur.com/9X5jDs7.jpg"];
        this.images = [
            "https://i.imgur.com/iUH0nLz.jpg",
            "https://i.imgur.com/NDIeWlN.jpg",
            "https://i.imgur.com/Pxlwo5E.jpg",
            "https://i.imgur.com/WNAFehe.jpg"
        ];
    }
    goToPhoto() {
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
};
PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photos',
        template: __webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/index.js!./src/app/photos/photos.component.html"),
        styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/photos/photos.component.css")]
    })
], PhotosComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map