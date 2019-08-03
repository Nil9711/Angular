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

/***/ "./node_modules/raw-loader/index.js!./src/app/email-me/email-me.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email-me/email-me.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alignCenter\">\n\n  <mat-card>\n    <form (submit)=\"onAddEmail(postForm)\" #postForm=\"ngForm\">\n      <mat-form-field>\n        <input\n        matInput\n        type=\"text\"\n        name=\"emailAdress\"\n        ngModel\n        required\n        minlength=\"3\"\n        placeholder=\"Your Email\"\n        #emailAdress=\"ngModel\">\n        <mat-error *ngIf=\"emailAdress.invalid\">Please enter you email.</mat-error>\n      </mat-form-field>\n      <mat-form-field>\n          <input\n          matInput\n          type=\"text\"\n          name=\"name\"\n          ngModel\n          required\n          minlength=\"3\"\n          placeholder=\"Your name\"\n          #name=\"ngModel\">\n          <mat-error *ngIf=\"name.invalid\">Please enter your name.</mat-error>\n        </mat-form-field>\n    <mat-form-field>\n      <textarea\n      matInput\n      rows=\"4\"\n      name=\"content\"\n      ngModel\n      required\n      placeholder=\"Message\"\n      #message=\"ngModel\"></textarea>\n      <mat-error *ngIf=\"message.invalid\">Please enter a message.</mat-error>\n    </mat-form-field>\n    <button\n    mat-raised-button\n    color=\"accent\"\n    type=\"submit\">Send</button>\n  </form>\n</mat-card>\n\n</div>"

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

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n\n    <a class=\"navbar-brand fontOfirLee\" href=\"#\">\n        <p>Ofir Lee Photography</p>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n        <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item\">\n                <a routerLink=\"photos\" class=\"nav-link fontOfirLee\">\n                    <p>Home</p></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link fontOfirLee\" routerLink=\"about\"><p>About Me</p></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link fontOfirLee\" routerLink=\"contact\"><p>Contact Me</p></a>\n            </li>\n        </ul>\n    </div>\n</nav>"

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

module.exports = "/* p,h5{\n    color: black;\n    font-family: 'Assistant', sans-serif;\n    font-size: 24px;\n\n}\n\n.small{\n    color: black;\n    font-size: 12px;\n\n\n}\n.card-img{\n    width: 100%;\n    max-width: 600px;\n    height: 100%;\n    max-height: 500px;\n}\n\n.card-text{\n    color: black;\n\n}\n\n.mb-3{\n    border: 0;\n} */\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    background-color: #eaeaea;\n  }\n\n.container {\n    margin-top: -25px;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  }\n\n.profile {\n    width: 320px;\n    background-color: #fff;\n  }\n\nnav {\n    box-shadow: none;\n    height: 56px;\n  }\n\nnav .nav-wrap {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n    padding: 0px 15px;\n  }\n\nnav .nav-wrap h6 {\n    font-size: 18px;\n    font-weight: 300;\n  }\n\nnav .nav-wrap i {\n    cursor: pointer;\n  }\n\n.jumbo {\n    height: 130px;\n    background: url(https://www2.ametsoc.org/stac/assets/Image/MOUNTAIN_image/Snow-Covered%20Sierra%20Nevada%20Mountains,%20California.jpg);\n    background-size: cover;\n  }\n\n.icons {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n\n.icons .big-icon {\n    width: 134px;\n    height: 134px;\n    background: url(https://i.imgur.com/8U9Byml.jpg) center center;\n    background-size: cover;\n    background-position: center;\n    border-radius: 50%;\n    border: 2px solid white;\n    margin-top: -67px;\n  }\n\n.icons .chat-icon {\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);\n    order: -1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background: #F44336;\n    border-radius: 50%;\n    margin-top: -25px;\n  }\n\n.icons .chat-icon i {\n    font-size: 21px;\n    color: white;\n    cursor: pointer;\n  }\n\n.icons .add-icon {\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background: #2196F3;\n    border-radius: 50%;\n    margin-top: -25px;\n  }\n\n.icons .add-icon i {\n    font-size: 26px;\n    color: white;\n    cursor: pointer;\n  }\n\n.details {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n.details h6 {\n    margin-top: 20px;\n    font-size: 20px;\n    font-weight: 400;\n  }\n\n.details p {\n    font-size: 12px;\n    font-weight: 300;\n    color: #03A9F4;\n    margin-top: 5px;\n  }\n\n.bio {\n    text-align: center;\n  }\n\n.bio p {\n    color: #999;\n    font-size: 12px;\n    font-weight: 300;\n    padding: 0px 20px;\n  }\n\n.photos {\n    display: flex;\n    justify-content: space-between;\n  }\n\n.photos #first {\n      margin-top: 10px;\n      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);\n      width: 150px;\n      height: 100px;\n    border-radius: 3px;\n    background: url(https://i.imgur.com/qvKD3af.jpg);\n    background-size: 105%;\n    background-position: 0px -10px;\n}\n\n.photos #second {\n    margin-top: 10px;\n    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);\n    width: 150px;\n    height: 100px;\n    border-radius: 3px;\n    background: url(https://i.imgur.com/qvKD3af.jpg);\n    background-size: 105%;\n    background-position: 0px -10px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHOztBQUVIO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVFQUF1RTtFQUN6RTs7QUFFQTtJQUNFLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztBQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGFBQWE7SUFDYix1SUFBdUk7SUFDdkksc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztBQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYiw4REFBOEQ7SUFDOUQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLDBDQUEwQztJQUMxQyxTQUFTO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFDQTtJQUNFLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7QUFDQTtNQUNJLGdCQUFnQjtNQUNoQiwwQ0FBMEM7TUFDMUMsWUFBWTtNQUNaLGFBQWE7SUFDZixrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBQ2hELHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxxQkFBcUI7SUFDckIsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHAsaDV7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnQXNzaXN0YW50Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG5cbn1cblxuLnNtYWxse1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEycHg7XG5cblxufVxuLmNhcmQtaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uY2FyZC10ZXh0e1xuICAgIGNvbG9yOiBibGFjaztcblxufVxuXG4ubWItM3tcbiAgICBib3JkZXI6IDA7XG59ICovXG5cbmh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAucHJvZmlsZSB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIG5hdiB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gIH1cbiAgbmF2IC5uYXYtd3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gIH1cbiAgbmF2IC5uYXYtd3JhcCBoNiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgbmF2IC5uYXYtd3JhcCBpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5qdW1ibyB7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93d3cyLmFtZXRzb2Mub3JnL3N0YWMvYXNzZXRzL0ltYWdlL01PVU5UQUlOX2ltYWdlL1Nub3ctQ292ZXJlZCUyMFNpZXJyYSUyME5ldmFkYSUyME1vdW50YWlucywlMjBDYWxpZm9ybmlhLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgLmljb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgLmljb25zIC5iaWctaWNvbiB7XG4gICAgd2lkdGg6IDEzNHB4O1xuICAgIGhlaWdodDogMTM0cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vOFU5QnltbC5qcGcpIGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IC02N3B4O1xuICB9XG4gIC5pY29ucyAuY2hhdC1pY29uIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgb3JkZXI6IC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIH1cbiAgLmljb25zIC5jaGF0LWljb24gaSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmljb25zIC5hZGQtaWNvbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogIzIxOTZGMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIH1cbiAgLmljb25zIC5hZGQtaWNvbiBpIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLmRldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5kZXRhaWxzIGg2IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5kZXRhaWxzIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMDNBOUY0O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICBcbiAgLmJpbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5iaW8gcCB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gIH1cbiAgXG4gIC5waG90b3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5waG90b3MgI2ZpcnN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9xdktEM2FmLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDUlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAtMTBweDtcbn1cbi5waG90b3MgI3NlY29uZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kuaW1ndXIuY29tL3F2S0QzYWYuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwNSU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0xMHB4O1xuICB9XG4gICJdfQ== */"

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
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _email_me_email_me_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./email-me/email-me.component */ "./src/app/email-me/email-me.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var routes = [
    { path: 'photos', component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_7__["PhotosComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: 'contact', component: _email_me_email_me_component__WEBPACK_IMPORTED_MODULE_11__["EmailMeComponent"] },
    { path: '', redirectTo: 'photos', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_7__["PhotosComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _email_me_email_me_component__WEBPACK_IMPORTED_MODULE_11__["EmailMeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/email-me/email-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/email-me/email-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alignCenter{\n\n    text-align: center;\n\n}\n\n.marginTop{\n    margin-top: 10px;\n}\n\nbutton{\n    margin-left:15px;\n}\n\nmat-form-field {\n    margin-left:10px;\n}\n\n.nameInput{\n    max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtbWUvZW1haWwtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZW1haWwtbWUvZW1haWwtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbkNlbnRlcntcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4ubWFyZ2luVG9we1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xufVxuXG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xufVxuXG4ubmFtZUlucHV0e1xuICAgIG1heC13aWR0aDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/email-me/email-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/email-me/email-me.component.ts ***!
  \************************************************/
/*! exports provided: EmailMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailMeComponent", function() { return EmailMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/email.service */ "./src/app/shared/services/email.service.ts");



var EmailMeComponent = /** @class */ (function () {
    function EmailMeComponent(emailsService) {
        this.emailsService = emailsService;
        this.enteredTitle = '';
        this.enteredContent = '';
    }
    EmailMeComponent.prototype.onAddEmail = function (form) {
        if (form.invalid) {
            return;
        }
        this.emailsService.addEmail(form.value.name, form.value.emailAdress, form.value.message);
        form.resetForm();
    };
    EmailMeComponent.ctorParameters = function () { return [
        { type: _shared_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"] }
    ]; };
    EmailMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-me',
            template: __webpack_require__(/*! raw-loader!./email-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/email-me/email-me.component.html"),
            styles: [__webpack_require__(/*! ./email-me.component.css */ "./src/app/email-me/email-me.component.css")]
        })
    ], EmailMeComponent);
    return EmailMeComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerFont{\n    font-family: 'Literata', serif;\n    font-size: 10px;\n}\n#social-fb:hover {\n    color: #3B5998;\n}\n#social-tw:hover {\n    color: #4099FF;\n}\n#social-gp:hover {\n    color: #d34836;\n}\n#social-em:hover {\n    color: #f39c12;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyRm9udHtcbiAgICBmb250LWZhbWlseTogJ0xpdGVyYXRhJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuI3NvY2lhbC1mYjpob3ZlciB7XG4gICAgY29sb3I6ICMzQjU5OTg7XG59XG4jc29jaWFsLXR3OmhvdmVyIHtcbiAgICBjb2xvcjogIzQwOTlGRjtcbn1cbiNzb2NpYWwtZ3A6aG92ZXIge1xuICAgIGNvbG9yOiAjZDM0ODM2O1xufVxuI3NvY2lhbC1lbTpob3ZlciB7XG4gICAgY29sb3I6ICNmMzljMTI7XG59Il19 */"

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
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html")
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

module.exports = ".photos{\n    width: 100%;\n    height: 70%;\n    max-width: 350px;\n    margin-left: 10px;\n    margin-top:10px;\n}\n\n.center{\n    text-align: center;\n    align-content: center;\n    margin:auto;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9waG90b3MvcGhvdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9ze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4uY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgXG59Il19 */"

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
            'https://i.imgur.com/iUH0nLz.jpg',
            'https://i.imgur.com/NDIeWlN.jpg',
            'https://i.imgur.com/Pxlwo5E.jpg',
            'https://i.imgur.com/WNAFehe.jpg'
        ];
    }
    PhotosComponent.prototype.ngOnInit = function () {
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

/***/ "./src/app/shared/services/email.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/email.service.ts ***!
  \**************************************************/
/*! exports provided: EmailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsService", function() { return EmailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmailsService = /** @class */ (function () {
    function EmailsService(http) {
        this.http = http;
    }
    EmailsService.prototype.addEmail = function (name, emailAdress, message) {
        var email = { id: null, name: name, emailAdress: emailAdress, message: message };
        this.http
            .post('http://oedb-env.bzmcwmpmmx.us-east-2.elasticbeanstalk.com/api/emails', email)
            .subscribe(function (responseData) {
            var id = responseData.postId;
            if (id === undefined || id === null) {
                alert('failed');
            }
            alert('success');
        });
    };
    EmailsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EmailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], EmailsService);
    return EmailsService;
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

module.exports = __webpack_require__(/*! C:\Users\Nil97\Desktop\mean\frontAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map