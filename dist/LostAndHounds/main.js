(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <meta name = \"viewport\" content = \"width = device-width, initial-scale = 1\">\n  <link rel = \"stylesheet\" href = \"https://fonts.googleapis.com/icon?family=Material+Icons\">\n</head>\n<body>\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet> <!-- makes router work -->\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9DOlxcVXNlcnNcXGNvb2xfXFxEb2N1bWVudHNcXExvc3RBbmRIb3VuZHNcXHNyYy9hcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LostAndHounds';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _guards_auth_guardLogged__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guardLogged */ "./src/app/guards/auth.guardLogged.ts");
/* harmony import */ var _guards_auth_guardNotLogged__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guardNotLogged */ "./src/app/guards/auth.guardNotLogged.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//modules





 //google maps

//components






 //have to import services
//services
 //have to import services


//guards


var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], canActivate: [_guards_auth_guardNotLogged__WEBPACK_IMPORTED_MODULE_18__["AuthGuardNotLogged"]] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], canActivate: [_guards_auth_guardNotLogged__WEBPACK_IMPORTED_MODULE_18__["AuthGuardNotLogged"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_guards_auth_guardLogged__WEBPACK_IMPORTED_MODULE_17__["AuthGuardLogged"]] },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"], canActivate: [_guards_auth_guardLogged__WEBPACK_IMPORTED_MODULE_17__["AuthGuardLogged"]] } //will lead to /register page with register component EX: Localhost:4200/register. Protect route by adding canActivate
]; //make a routes object for our different routes
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAYeGHZBYZ0dQT_NIdjGJKrl6Mm8TbO2D4'
                })
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_map_service__WEBPACK_IMPORTED_MODULE_16__["MapService"], _guards_auth_guardLogged__WEBPACK_IMPORTED_MODULE_17__["AuthGuardLogged"], _guards_auth_guardNotLogged__WEBPACK_IMPORTED_MODULE_18__["AuthGuardNotLogged"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"innerBody\">\n  <div class=\"head\">\n    <h1>Lost your pet?</h1>\n    <h5>We can help you with your search.</h5>\n    <br/>\n    <hr>\n    <br/>\n  </div>\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <span class=\"bigText\">LostAndHounds allows you to...</span>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s3\">\n      </div>\n      <div class=\"col s3\">\n        LostAndHounds allows you to...\n      </div>\n      <div class=\"col s3\">\n        LostAndHounds allows you to...\n      </div>\n      <div class=\"col s3\">\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#innerBody {\n  width: 100%;\n  height: 100%;\n  color: silver;\n  text-align: center; }\n\nh1, h5 {\n  text-align: center;\n  margin: 10px; }\n\nhr {\n  border-color: limegreen;\n  width: 10%; }\n\nspan.bigText {\n  font-size: 200%; }\n\nspan.smallerText {\n  font-size: 150%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvQzpcXFVzZXJzXFxjb29sX1xcRG9jdW1lbnRzXFxMb3N0QW5kSG91bmRzXFxzcmMvYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLHVCQUF1QjtFQUN2QixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbm5lckJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogc2lsdmVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEsIGg1IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyLWNvbG9yOiBsaW1lZ3JlZW47XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuc3Bhbi5iaWdUZXh0IHtcclxuICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuXHJcbnNwYW4uc21hbGxlclRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"col s12\" (submit)=\"onLoginSubmit()\">\n    <div class=\"row\"> <!-- tabs -->\n      <div class=\"col s12\">\n        <ul class=\"tabs\">\n          <li class=\"tab col s6\"><a [routerLink]=\"['/login']\" class=\"active\">Login</a></li>\n          <li class=\"tab col s6\"><a [routerLink]=\"['/register']\">Sign up</a></li>\n        </ul>\n      </div>\n    </div> <!-- tab end -->\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s12\">\n          <input placeholder=\"Username\" id=\"username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s12\">\n          <input placeholder=\"Password\" id=\"password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s3\"></div>\n        <div id=\"errorText\" class=\"col s6\" #error></div>\n        <div class=\"col s3\"></div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s2\"></div>\n\n        <button class=\"btn waves-effect waves-light col s3\" type=\"reset\" name=\"action\">\n          Clear Form\n        </button>\n\n        <div class=\"col s2\"></div>\n\n        <button class=\"btn waves-effect waves-light col s3\" type=\"submit\" name=\"action\">\n          Submit\n        </button>\n\n        <div class=\"col s2\"></div>\n      </div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerContainer {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.container {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  position: absolute;\n  min-width: 300px;\n  max-width: 500px; }\n\n.tab {\n  border: 1px pink solid; }\n\nform {\n  border: 1px solid pink; }\n\nbutton {\n  background-color: pink; }\n\nbutton:hover {\n  background-color: hotpink; }\n\nbutton:focus {\n  background-color: pink; }\n\n.active {\n  font-weight: bold; }\n\n#errorText {\n  color: red;\n  display: none; }\n\n/*.container {\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  width: 35%;\r\n}\r\n\r\n.tab {\r\n  border: 1px pink solid;\r\n}\r\n\r\nform {\r\n  border: 1px solid pink;\r\n}\r\n\r\nbutton {\r\n  background-color: pink;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: hotpink;\r\n}\r\n\r\n.active {\r\n  font-weight: bold;\r\n}\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL0M6XFxVc2Vyc1xcY29vbF9cXERvY3VtZW50c1xcTG9zdEFuZEhvdW5kc1xcc3JjL2FwcFxcc3R5bGluZ3NcXF9sb2dpbnJlZ2lzdGVyLnNjc3MiLCJhcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGNvb2xfXFxEb2N1bWVudHNcXExvc3RBbmRIb3VuZHNcXHNyYy9hcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FDcENuQjtFQUNFLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDMkRDIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgYm9yZGVyOiAxcHggcGluayBzb2xpZDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcGluaztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGluZ3MvbG9naW5yZWdpc3Rlcic7XHJcblxyXG4jZXJyb3JUZXh0IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qLmNvbnRhaW5lciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBib3JkZXI6IDFweCBwaW5rIHNvbGlkO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuKi9cclxuIiwiLm91dGVyQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5jb250YWluZXIge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7IH1cblxuLnRhYiB7XG4gIGJvcmRlcjogMXB4IHBpbmsgc29saWQ7IH1cblxuZm9ybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHBpbms7IH1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rOyB9XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cblxuLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbiNlcnJvclRleHQge1xuICBjb2xvcjogcmVkO1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi8qLmNvbnRhaW5lciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBib3JkZXI6IDFweCBwaW5rIHNvbGlkO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authservice.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authservice.storeUserData(data.token, data.user);
                _this.router.navigate(['/profile']);
            }
            else {
                _this.errorText.nativeElement.innerText = data.msg;
                _this.errorText.nativeElement.style.display = "block";
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('error'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "errorText", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"placeMarker($event)\">\n  <agm-marker *ngFor=\"let marker of markers\" [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [animation]=\"marker.animate\" (markerClick)=\"markerClicked(marker)\">\n\n  </agm-marker>\n\n</agm-map>\n\n<div class=\"sidebar\" #infoFormContainer>\n  <form (submit)=\"onInfoSubmit()\" #infoForm>\n    <button type=\"button\" id=\"close\" (click)=\"closeSide()\">X</button>\n    <br/><br/>\n    Pet name: <input type=\"text\" [(ngModel)]=\"petName\" name=\"petName\">\n    Name: <input type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n    Phone number: <input type=\"tel\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"\">\n    <div class=\"errorMesssage\" #validatePhoneMessage>Please enter a valid phone number.</div>\n    Email address: <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"\">\n    <div class=\"errorMesssage\" #validateEmailMessage>Please enter a valid email address.</div>\n    Description: <textarea [(ngModel)]=\"description\" name=\"description\"></textarea>\n    <button type=\"submit\" name=\"action\">Submit</button>\n  </form>\n</div>\n\n<div class=\"sidebar\" #infoFormContainerDisplay>\n  <button type=\"button\" id=\"close\" (click)=\"closeSideDisplay()\">X</button>\n  <br/><br/>\n  Pet name: <input type=\"text\" [(ngModel)]=\"petNameDisplay\" name=\"petNameDisplay\" readonly>\n  Name: <input type=\"text\" [(ngModel)]=\"nameDisplay\" name=\"nameDisplay\" readonly>\n  Phone number: <input type=\"tel\" [(ngModel)]=\"phoneDisplay\" name=\"phoneDisplay\" readonly>\n  Email address: <input type=\"email\" [(ngModel)]=\"emailDisplay\" name=\"emailDisplay\" readonly>\n  Description: <textarea [(ngModel)]=\"descriptionDisplay\" name=\"descriptionDisplay\" readonly></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  width: 100%;\n  height: calc(100% - 64px); }\n\n.sidebar {\n  display: none;\n  width: 400px;\n  height: calc(100% - 64px);\n  position: absolute;\n  background-color: white;\n  bottom: 0;\n  left: 0;\n  text-align: center; }\n\ntextarea {\n  resize: none;\n  height: 100px; }\n\n.sidebar {\n  border: 1px solid lime;\n  background-color: black;\n  color: white; }\n\n.sidebar button {\n  border: 0px;\n  color: white;\n  background-color: black;\n  border: 1px solid lime;\n  padding: 5px 10px;\n  border-radius: 5px;\n  transition: background-color 0.5s;\n  -webkit-transition: background-color 0.5s; }\n\n.sidebar button:hover {\n  background-color: grey;\n  cursor: pointer; }\n\n.sidebar * {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL21haW4vQzpcXFVzZXJzXFxjb29sX1xcRG9jdW1lbnRzXFxMb3N0QW5kSG91bmRzXFxzcmMvYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUpnQyxFQUFBOztBQU9sQztFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBVmdDO0VBV2hDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMseUNBQXlDLEVBQUE7O0FBRzNDO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlaWdodE1pbnVzTmF2OiBjYWxjKDEwMCUgLSA2NHB4KTtcclxuXHJcbmFnbS1tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogJGhlaWdodE1pbnVzTmF2Ly9leGFjdCBoZWlnaHQgb2YgbXkgbmF2IGJhclxyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0TWludXNOYXY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGltZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpbWU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcclxufVxyXG5cclxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXIgKiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(renderer, mapservice, validateService) {
        this.renderer = renderer;
        this.mapservice = mapservice;
        this.validateService = validateService;
        this.markers = [];
        this.lat = 50; //default if user doesn't allow geo
        this.lng = 50;
        this.popNotSubmit = false; //used for toggling which markers should be shown
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        //Covers people jumping straight to this link
        document.querySelectorAll("nav .nav-wrapper")[0].style.backgroundColor = "black";
        this.validatePhoneMessage.nativeElement.style.display = "none";
        this.validateEmailMessage.nativeElement.style.display = "none";
        this.validatePhoneMessage.nativeElement.style.color = "red";
        this.validateEmailMessage.nativeElement.style.color = "red";
        //checks if geolocation supported
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition.bind(this)); //binds this so that callback accesses component variable rather than callback variable
        }
        else {
            console.log("Geolocation not supported.");
        }
        //function used to get all markers and set the returned markers to the marker variable
        this.getMarkers();
    };
    // set center of map if user allows geolocation
    MainComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
    };
    //everytime map is clicked, add a marker
    MainComponent.prototype.placeMarker = function (e) {
        if (this.markers && this.popNotSubmit) {
            console.log(this.popNotSubmit);
            this.markers.pop();
        }
        this.markers.push({
            lat: e.coords.lat,
            lng: e.coords.lng,
            animate: 'DROP'
        });
        this.formContainer.nativeElement.style.display = "block"; //show container for form
        this.formContainerDisplay.nativeElement.style.display = "none"; //hide display form if showing
        this.form.nativeElement.reset(); //reset form
        this.popNotSubmit = true;
    };
    MainComponent.prototype.closeSide = function () {
        this.form.nativeElement.reset();
        this.formContainer.nativeElement.style.display = "none";
        if (this.popNotSubmit) {
            this.markers.pop();
        }
        this.popNotSubmit = false;
    };
    MainComponent.prototype.onInfoSubmit = function () {
        var _this = this;
        if (!this.validateService.validatePhone(this.phone)) {
            this.validatePhoneMessage.nativeElement.style.display = "block";
        }
        else {
            this.validatePhoneMessage.nativeElement.style.display = "none";
        }
        if (!this.validateService.validateEmail(this.email)) {
            this.validateEmailMessage.nativeElement.style.display = "block";
        }
        else {
            this.validateEmailMessage.nativeElement.style.display = "none";
        }
        if (!this.validateService.validateEmail(this.email) || !this.validateService.validatePhone(this.phone))
            return;
        var newMarker = {
            petName: this.petName,
            fullName: this.name,
            phone: this.phone,
            email: this.email,
            description: this.description,
            lat: this.markers[this.markers.length - 1].lat,
            lng: this.markers[this.markers.length - 1].lng
        };
        this.mapservice.addMarkerToDB(newMarker).subscribe(function (data) {
            if (data.success) {
                _this.form.nativeElement.reset();
                _this.formContainer.nativeElement.style.display = "none";
            }
            _this.popNotSubmit = false;
        });
    };
    MainComponent.prototype.getMarkers = function () {
        var _this = this;
        this.mapservice.getAllMarkers().subscribe(function (data) {
            if (data.success) {
                _this.markers = data.markers;
                _this.markers.forEach(function (m) {
                    m.animate = 'DROP';
                });
            }
        });
    };
    MainComponent.prototype.markerClicked = function (specificMarker) {
        var _this = this;
        var searchMarker = {
            ID: specificMarker._id
        };
        this.formContainerDisplay.nativeElement.style.display = "block";
        this.mapservice.getSpecificMarker(searchMarker).subscribe(function (data) {
            if (data.success) {
                _this.petNameDisplay = data.markers.petName;
                _this.nameDisplay = data.markers.fullName;
                _this.phoneDisplay = data.markers.phone;
                _this.emailDisplay = data.markers.email;
                _this.descriptionDisplay = data.markers.description;
            }
        });
        this.closeSide();
    };
    MainComponent.prototype.closeSideDisplay = function () {
        this.formContainerDisplay.nativeElement.style.display = "none";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infoFormContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "formContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infoFormContainerDisplay'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "formContainerDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infoForm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('validatePhoneMessage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "validatePhoneMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('validateEmailMessage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MainComponent.prototype, "validateEmailMessage", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _services_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\" #navwrap>\n    <a [routerLink]=\"['/']\" (click)=\"changeBackground($event)\">{{title}}</a>\n    <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/login']\" *ngIf=\"!authservice.loggedIn()\" (click)=\"changeBackground($event)\">Login</a></li> <!-- goes to login route -->\n      <li><a [routerLink]=\"['/main']\" *ngIf=\"authservice.loggedIn()\" (click)=\"changeBackground($event)\">Map</a></li> <!-- goes to map route -->\n      <li><a [routerLink]=\"['/profile']\" *ngIf=\"authservice.loggedIn()\" (click)=\"changeBackground($event)\">Profile</a></li> <!-- goes to profile route -->\n      <li><a href=\"#\" (click)=\"onLogout()\" *ngIf=\"authservice.loggedIn()\" (click)=\"changeBackground($event)\">Logout</a></li> <!-- logout -->\n      <li><a [routerLink]=\"['/register']\" *ngIf=\"!authservice.loggedIn()\" (click)=\"changeBackground($event)\">Sign Up</a></li> <!-- go to register route -->\n    </ul>\n\n  </div>\n</nav>\n\n<ul class=\"sidenav\" id=\"mobile-demo\">\n  <li><a class=\"sidenav-close\" [routerLink]=\"['/login']\" *ngIf=\"!authservice.loggedIn()\">Login</a></li> <!-- goes to login route -->\n  <li><a class=\"sidenav-close\" [routerLink]=\"['/map']\" *ngIf=\"authservice.loggedIn()\">Map</a></li>\n  <li><a class=\"sidenav-close\" [routerLink]=\"['/profile']\" *ngIf=\"authservice.loggedIn()\">Profile</a></li> <!-- goes to profile route -->\n  <li><a class=\"sidenav-close\" href=\"#\" (click)=\"onLogout()\" *ngIf=\"authservice.loggedIn()\">Logout</a></li> <!-- logout -->\n  <li><a class=\"sidenav-close\" [routerLink]=\"['/register']\" *ngIf=\"!authservice.loggedIn()\">Sign Up</a></li> <!-- go to register route -->\n</ul>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #fafafa;\n  box-shadow: 0 1px 5px limegreen !important;\n  height: 64px; }\n\nnav .nav-wrapper {\n  transition: background-color 0.5s ease-in-out;\n  -webkit-transition: background-color 0.5s ease-in-out; }\n\nnav a {\n  color: limegreen; }\n\nnav ul a {\n  color: limegreen; }\n\nnav ul a:hover {\n  background-color: #e1e1e1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXGNvb2xfXFxEb2N1bWVudHNcXExvc3RBbmRIb3VuZHNcXHNyYy9hcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDBDQUEwQztFQUMxQyxZQUFZLEVBQUE7O0FBR2Q7RUFFSSw2Q0FBNkM7RUFDN0MscURBQXFELEVBQUE7O0FBSXpEO0VBRUksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBR00sZ0JBQWdCLEVBQUE7O0FBSHRCO0VBTU0seUJBQWtDLEVBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBib3gtc2hhZG93OiAwIDFweCA1cHggbGltZWdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIC5uYXYtd3JhcHBlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogbGltZWdyZWVuO1xyXG4gIH1cclxufVxyXG5cclxubmF2IHtcclxuICB1bCB7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IGxpbWVncmVlbjtcclxuICAgIH1cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LDIyNSwyMjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
        this.title = 'LostAndHounds';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = materialize_css__WEBPACK_IMPORTED_MODULE_3__["Sidenav"].init(elems, {});
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authservice.logout();
        console.log("Logged out.");
        this.router.navigate(['']);
        return false;
    };
    NavbarComponent.prototype.changeBackground = function (e) {
        if (e.target.innerHTML == "Map") {
            this.navbar.nativeElement.style.backgroundColor = "black";
        }
        else {
            this.navbar.nativeElement.style.backgroundColor = "#fafafa";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navwrap'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavbarComponent.prototype, "navbar", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">First name: {{user.firstName}}</h2>\n  <h2 class=\"page-header\">Last name: {{user.lastName}}</h2>\n  <h2 class=\"page-header\">Email: {{user.email}}</h2>\n  <h2 class=\"page-header\">Username: {{user.username}}</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outerContainer\">\n<div class=\"container\">\n  <form class=\"col s12\" (submit)=\"onRegisterSubmit()\">\n    <div class=\"row\"> <!-- tabs -->\n      <div class=\"col s12\">\n        <ul class=\"tabs\">\n          <li class=\"tab col s6\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li class=\"tab col s6\"><a [routerLink]=\"['/register']\" [routerLinkActive]=\"['active']\">Sign up</a></li>\n        </ul>\n      </div>\n    </div> <!-- tab end -->\n\n    <div class=\"row\"> <!-- first and last name -->\n      <div class=\"col s12\">\n        <div class=\"col s6\">\n          <input placeholder=\"First Name\" id=\"first_name\" type=\"text\" class=\"validate\" [(ngModel)]=\"firstName\" name=\"firstName\">\n        </div>\n        <div class=\"col s6\">\n          <input placeholder=\"Last Name\" id=\"last_name\" type=\"text\" class=\"validate\" [(ngModel)]=\"lastName\" name=\"lastName\">\n        </div>\n      </div>\n    </div> <!-- first and last end -->\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s6\"> <!-- username & pass -->\n          <input placeholder=\"Username\" id=\"new_username\" type=\"text\" class=\"validate\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"col s6\">\n          <input placeholder=\"Password\" id=\"new_password\" type=\"password\" class=\"validate\" [(ngModel)]=\"password\" name=\"password\">\n        </div> <!-- username & password end -->\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s6\"> <!-- email-->\n          <input placeholder=\"Email (IE. x@x.com)\" id=\"email_address\" type=\"text\" class=\"validate\" [(ngModel)]=\"email\" (ngModelChange)=\"compareEmails()\" name=\"email\">\n        </div>\n        <div class=\"col s6\">\n          <input placeholder=\"Re-enter Email (IE. x@x.com)\" id=\"confirm_email_address\" type=\"text\" class=\"validate\" [(ngModel)]=\"confirmEmail\" (ngModelChange)=\"compareEmails()\" name=\"confirmEmail\">\n        </div> <!-- email end -->\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s3\"></div>\n        <div id=\"errorText\" class=\"col s6\" #error></div>\n        <div class=\"col s3\"></div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"col s2\"></div>\n\n        <button class=\"btn waves-effect waves-light col s3\" type=\"reset\" name=\"action\">\n          Clear Form\n        </button>\n\n        <div class=\"col s2\"></div>\n\n        <button class=\"btn waves-effect waves-light col s3\" type=\"submit\" name=\"action\">\n          Submit\n        </button>\n\n        <div class=\"col s2\"></div>\n      </div>\n    </div>\n\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerContainer {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.container {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  position: absolute;\n  min-width: 300px;\n  max-width: 500px; }\n\n.tab {\n  border: 1px pink solid; }\n\nform {\n  border: 1px solid pink; }\n\nbutton {\n  background-color: pink; }\n\nbutton:hover {\n  background-color: hotpink; }\n\nbutton:focus {\n  background-color: pink; }\n\n.active {\n  font-weight: bold; }\n\n#errorText {\n  color: red;\n  display: none; }\n\n/*.container {\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  width: 35%;\r\n}\r\n\r\n.tab {\r\n  border: 1px pink solid;\r\n}\r\n\r\nform {\r\n  border: 1px solid pink;\r\n}\r\n\r\nbutton {\r\n  background-color: pink;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: hotpink;\r\n}\r\n\r\n.active {\r\n  font-weight: bold;\r\n}\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcY29vbF9cXERvY3VtZW50c1xcTG9zdEFuZEhvdW5kc1xcc3JjL2FwcFxcc3R5bGluZ3NcXF9sb2dpbnJlZ2lzdGVyLnNjc3MiLCJhcHAvY29tcG9uZW50cy9yZWdpc3Rlci9DOlxcVXNlcnNcXGNvb2xfXFxEb2N1bWVudHNcXExvc3RBbmRIb3VuZHNcXHNyYy9hcHBcXGNvbXBvbmVudHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsImFwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyx3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FDcENuQjtFQUNFLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBR2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDMkRDIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyQ29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgYm9yZGVyOiAxcHggcGluayBzb2xpZDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcGluaztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XHJcbn1cclxuXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGluZ3MvbG9naW5yZWdpc3Rlcic7XHJcblxyXG4jZXJyb3JUZXh0IHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qLmNvbnRhaW5lciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBib3JkZXI6IDFweCBwaW5rIHNvbGlkO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuKi9cclxuIiwiLm91dGVyQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5jb250YWluZXIge1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7IH1cblxuLnRhYiB7XG4gIGJvcmRlcjogMXB4IHBpbmsgc29saWQ7IH1cblxuZm9ybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHBpbms7IH1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rOyB9XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cblxuLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbiNlcnJvclRleHQge1xuICBjb2xvcjogcmVkO1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi8qLmNvbnRhaW5lciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzUlO1xyXG59XHJcblxyXG4udGFiIHtcclxuICBib3JkZXI6IDFweCBwaW5rIHNvbGlkO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBwaW5rO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authservice, router) {
        this.validateService = validateService;
        this.authservice = authservice;
        this.router = router;
    } //need to inject everytime you use a service
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.compareEmails = function () {
        if (this.email !== this.confirmEmail) {
            this.error.nativeElement.innerText = "Please make sure that the two emails entered match.";
            this.error.nativeElement.style.display = "block";
        }
        else {
            this.error.nativeElement.style.display = "none";
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            password: this.password,
            email: this.email,
        };
        if (this.validateService.validateRegister(user)) {
            this.error.nativeElement.innerText = "Please fill in all the fields.";
            this.error.nativeElement.style.display = "block";
            return false;
        }
        if (!this.validateService.validateEmail(this.email) || !this.validateService.validateEmail(this.confirmEmail)) {
            this.error.nativeElement.innerText = "Please enter a valid email in both fields.";
            this.error.nativeElement.style.display = "block";
            return false;
        }
        this.authservice.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log("You are now registered.");
                _this.router.navigate(['/login']);
            }
            else {
                _this.error.nativeElement.innerText = data.msg;
                _this.error.nativeElement.style.display = "block";
                _this.router.navigate(['/register']);
            }
        }); //calls our backend register route. Uses subscribe because we made the return value an observable (continuous stream of data until data received)
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('error'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "error", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guardLogged.ts":
/*!********************************************!*\
  !*** ./src/app/guards/auth.guardLogged.ts ***!
  \********************************************/
/*! exports provided: AuthGuardLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardLogged", function() { return AuthGuardLogged; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
  USE THIS AS AUTHGUARD IF LOGGED IN
**/
var AuthGuardLogged = /** @class */ (function () {
    function AuthGuardLogged(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    AuthGuardLogged.prototype.canActivate = function () {
        if (this.authservice.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuardLogged = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])() //says that class can be injected
        ,
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardLogged);
    return AuthGuardLogged;
}());



/***/ }),

/***/ "./src/app/guards/auth.guardNotLogged.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/auth.guardNotLogged.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardNotLogged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardNotLogged", function() { return AuthGuardNotLogged; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
  USE THIS AS AUTHGUARD IF NOT LOGGED IN
**/
var AuthGuardNotLogged = /** @class */ (function () {
    function AuthGuardNotLogged(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    AuthGuardNotLogged.prototype.canActivate = function () {
        if (this.authservice.loggedIn()) {
            this.router.navigate(['/main']);
        }
        else {
            return true;
        }
    };
    AuthGuardNotLogged = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])() //says that class can be injected
        ,
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardNotLogged);
    return AuthGuardNotLogged;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    } //inject
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json'); //add a content type json which is what will be returned
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
        else {
            return this.http.post('http://localhost:8080/users/register', user, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json'); //add a content type json which is what will be returned
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return this.http.post('users/auth', user, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
        else {
            return this.http.post('http://localhost:8080/users/auth', user, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken); //send req with the token
        headers.append('Content-Type', 'application/json'); //add a content type json which is what will be returned
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
        else {
            return this.http.get('http://localhost:8080/users/profile', { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); //angular auto looks for token so we just use that
        localStorage.setItem('user', JSON.stringify(user)); //localstorage can only store string (no objects) so we will JSON.parse back when we need it
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapService = /** @class */ (function () {
    function MapService(http, authservice) {
        this.http = http;
        this.authservice = authservice;
    }
    //used to add markers to db
    MapService.prototype.addMarkerToDB = function (marker) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json'); //add a content type json which is what will be returned
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return this.http.post('markers/addMarker', marker, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
        else {
            return this.http.post('http://localhost:8080/markers/addMarker', marker, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
    };
    MapService.prototype.getAllMarkers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.authToken = localStorage.getItem('token');
        headers.append('Authorization', this.authToken); //send req with the token
        headers.append('Content-Type', 'application/json'); //add a content type json which is what will be returned
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return this.http.get('markers/getMarkers', { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
        else {
            return this.http.get('http://localhost:8080/markers/getMarkers', { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
    };
    MapService.prototype.getSpecificMarker = function (searchMarker) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.authToken = localStorage.getItem('token');
        headers.append('Authorization', this.authToken); //send req with the token
        headers.append('Content-Type', 'application/json'); //add a content type json which is what will be returned
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return this.http.post('markers/getSpecificMarker', searchMarker, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
        else {
            return this.http.post('http://localhost:8080/markers/getSpecificMarker', searchMarker, { headers: headers }).map(function (res) { return res.json(); }); //send user to backend
        }
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.firstName == undefined || user.lastName == undefined || user.username == undefined || user.password == undefined || user.email == undefined || user.firstName == "" || user.lastName == "" || user.username == "" || user.password == "" || user.email == "") {
            return true; //fields not filled in
        }
        else {
            return false; //all fields filled in
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validatePhone = function (phone) {
        var re = /^d{10}$/;
        return re.test(phone);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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

module.exports = __webpack_require__(/*! C:\Users\cool_\Documents\LostAndHounds\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map