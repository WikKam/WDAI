function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routesComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routesComponents", function () {
      return routesComponents;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/course-details/course-details.component */
    "./src/app/components/course-details/course-details.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/course-list/course-list.component */
    "./src/app/components/course-list/course-list.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");

    var appRoutes = [{
      path: '',
      component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
      data: {
        animation: 'main'
      }
    }, {
      path: 'details/:id',
      component: _components_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_2__["CourseDetailsComponent"],
      data: {
        animation: 'isRight'
      }
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
      data: {
        animation: 'log'
      }
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
      data: {
        animation: 'reg'
      }
    }, {
      path: 'courselist',
      component: _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__["CourseListComponent"],
      data: {
        animation: 'courseList'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routesComponents = [_components_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_2__["CourseDetailsComponent"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_4__["CourseListComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _route_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route-animations */
    "./src/app/route-animations.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'wdai-project';
      }

      _createClass(AppComponent, [{
        key: "onActivate",
        value: function onActivate(event) {
          window.scroll(0, 0);
        }
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 1,
      consts: [["id", "test"], [3, "activate"], ["outlet", "outlet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "router-outlet", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_4_listener($event) {
            return ctx.onActivate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r2));
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["main[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWDt3QkFDb0I7RUFDdEI7RUFDQTs7Ozs7Ozs7Ozs7O01BWUkiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYWlue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbiAgfVxyXG4gIC8qbWFpbjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMTsgICBcclxuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHJcbiAgICB9Ki8iXX0= */"],
      data: {
        animation: [// fader,
        _route_animations__WEBPACK_IMPORTED_MODULE_1__["slider"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          animations: [// fader,
          _route_animations__WEBPACK_IMPORTED_MODULE_1__["slider"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/course-list/course-list.component */
    "./src/app/components/course-list/course-list.component.ts");
    /* harmony import */


    var _components_course_item_course_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/course-item/course-item.component */
    "./src/app/components/course-item/course-item.component.ts");
    /* harmony import */


    var _components_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/course-form/course-form.component */
    "./src/app/components/course-form/course-form.component.ts");
    /* harmony import */


    var _pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pipes/course-filter.pipe */
    "./src/app/pipes/course-filter.pipe.ts");
    /* harmony import */


    var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/search-form/search-form.component */
    "./src/app/components/search-form/search-form.component.ts");
    /* harmony import */


    var _components_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/course-details/course-details.component */
    "./src/app/components/course-details/course-details.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_sign_menu_sign_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/sign-menu/sign-menu.component */
    "./src/app/components/sign-menu/sign-menu.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/welcome/welcome.component */
    "./src/app/components/welcome/welcome.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/landing/landing.component */
    "./src/app/components/landing/landing.component.ts");
    /* harmony import */


    var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/loader/loader.component */
    "./src/app/components/loader/loader.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_5__["CourseListComponent"], _components_course_item_course_item_component__WEBPACK_IMPORTED_MODULE_6__["CourseItemComponent"], _components_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_7__["CourseFormComponent"], _pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["CourseFilterPipe"], _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__["SearchFormComponent"], _components_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_10__["CourseDetailsComponent"], _components_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_10__["CourseDetailsComponent"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_5__["CourseListComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _components_sign_menu_sign_menu_component__WEBPACK_IMPORTED_MODULE_18__["SignMenuComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"], _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_22__["WelcomeComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"]],
        exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_course_list_course_list_component__WEBPACK_IMPORTED_MODULE_5__["CourseListComponent"], _components_course_item_course_item_component__WEBPACK_IMPORTED_MODULE_6__["CourseItemComponent"], _components_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_7__["CourseFormComponent"], _pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["CourseFilterPipe"], _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_9__["SearchFormComponent"], _components_course_details_course_details_component__WEBPACK_IMPORTED_MODULE_10__["CourseDetailsComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routesComponents"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _components_sign_menu_sign_menu_component__WEBPACK_IMPORTED_MODULE_18__["SignMenuComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"], _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_22__["WelcomeComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          entryComponents: [_components_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_7__["CourseFormComponent"]],
          exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/course-details/course-details.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/course-details/course-details.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CourseDetailsComponent */

  /***/
  function srcAppComponentsCourseDetailsCourseDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseDetailsComponent", function () {
      return CourseDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/db.service */
    "./src/app/services/db.service.ts");

    var CourseDetailsComponent =
    /*#__PURE__*/
    function () {
      function CourseDetailsComponent(route, courseService, loginService, dbService) {
        _classCallCheck(this, CourseDetailsComponent);

        this.route = route;
        this.courseService = courseService;
        this.loginService = loginService;
        this.dbService = dbService;
        this.hidden = true;
        this.amountOfRates = 0;
        this.courses = [];
      }

      _createClass(CourseDetailsComponent, [{
        key: "changeRating",
        value: function changeRating(rate) {
          if (this.details.ratedBy.includes(this.username)) {
            alert("Już oceniłeś ten kurs!");
            return;
          }

          if (this.details.enrolledUsers.includes(this.username)) {
            rate = parseInt(rate);
            this.details.rating = (this.details.rating * this.details.amountOfRates + rate) / ++this.details.amountOfRates;
            this.details.ratedBy += this.username;
            this.dbService.updateRatingData(this.details);
          } else if (!this.username || this.username == "") {
            alert("Nie jestes zalogowany!");
          } else {
            alert("Nie jesteś zapisany na ten kurs!");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dbService.getData('/Kursy').subscribe(function (courses) {
            var id = _this.route.snapshot.paramMap.get('id');

            _this.courses = courses;

            _this.courses.filter(function (course) {
              return course;
            }).forEach(function (course) {
              if (course.id.toString() == id) _this.details = course;
            });
          });
          this.loginService.getUserName().subscribe(function (username) {
            return _this.username = username;
          });
        }
      }, {
        key: "signUpUserOnCourse",
        value: function signUpUserOnCourse() {
          if (this.details.enrolledUsers.includes(this.username)) {
            alert('jestes juz zapisany!');
            return;
          }

          if (!this.username) {
            alert('nie jesteś zalogowany!');
            return;
          }

          this.dbService.updateCourseMembers(this.details, this.username);
          this.details.enrolledUsers += ",".concat(this.username);
          alert("Zapisałeś się na kurs!");
        }
      }]);

      return CourseDetailsComponent;
    }();

    CourseDetailsComponent.ɵfac = function CourseDetailsComponent_Factory(t) {
      return new (t || CourseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]));
    };

    CourseDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseDetailsComponent,
      selectors: [["app-course-details"]],
      inputs: {
        details: "details"
      },
      decls: 27,
      vars: 7,
      consts: [[1, "main"], [1, "name"], [1, "elem"], [1, "form-row", "mt-3", "mb-3"], ["type", "number", "placeholder", "Rate course", 1, "f"], ["rate", ""], [1, "b", 3, "click"], [1, "b", "enroll", 3, "click"]],
      template: function CourseDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailsComponent_Template_button_click_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return ctx.changeRating(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailsComponent_Template_button_click_24_listener($event) {
            return ctx.signUpUserOnCourse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enroll!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ECTS: ", ctx.details == null ? null : ctx.details.ECTS, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", ctx.details == null ? null : ctx.details.rating.toFixed(2), " / 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Semester: ", ctx.details == null ? null : ctx.details.semester, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Maximum number of students: ", ctx.details == null ? null : ctx.details.maxStudentsNo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Semester: ", ctx.details == null ? null : ctx.details.semester, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.description);
        }
      },
      styles: [".hiddenInfo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    text-align:center;\r\n}\r\n#input[_ngcontent-%COMP%]{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    margin-top:100em;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    background:inherit;\r\n}\r\n.main[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    margin-left: 5%;\r\n}\r\n.elem[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin:auto;\r\n    padding:2%;\r\n    border-bottom: 1px solid #FB3640;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n display: inline;\r\n margin-left: 2em;  \r\n}\r\n.enroll[_ngcontent-%COMP%]{\r\n    margin-left: 0;\r\n}\r\n.f[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtZGV0YWlscy9jb3Vyc2UtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQVk7SUFBWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLWRldGFpbHMvY291cnNlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGlkZGVuSW5mbyBwLCAuaW5mbyBwIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiNpbnB1dHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbi10b3A6MTAwZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOmluaGVyaXQ7XHJcbn1cclxuLm1haW57XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uZWxlbXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nOjIlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGQjM2NDA7XHJcbn1cclxuYnV0dG9ue1xyXG4gZGlzcGxheTogaW5saW5lO1xyXG4gbWFyZ2luLWxlZnQ6IDJlbTsgIFxyXG59XHJcbi5lbnJvbGx7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG4uZntcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course-details',
          templateUrl: './course-details.component.html',
          styleUrls: ['./course-details.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }];
      }, {
        details: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/course-form/course-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/course-form/course-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CourseFormComponent */

  /***/
  function srcAppComponentsCourseFormCourseFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseFormComponent", function () {
      return CourseFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/course.service */
    "./src/app/services/course.service.ts");

    var CourseFormComponent =
    /*#__PURE__*/
    function () {
      function CourseFormComponent(dialogRef, service) {
        _classCallCheck(this, CourseFormComponent);

        this.dialogRef = dialogRef;
        this.service = service;
        this.addCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.courseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          ECTS: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          semester: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          maxStudentsNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(CourseFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var course = this.courseForm.value;
          this.service.onCourseAdded(course);
          this.dialogRef.close();
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.dialogRef.close();
        }
      }]);

      return CourseFormComponent;
    }();

    CourseFormComponent.ɵfac = function CourseFormComponent_Factory(t) {
      return new (t || CourseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]));
    };

    CourseFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseFormComponent,
      selectors: [["app-course-form"]],
      outputs: {
        addCourse: "addCourse"
      },
      decls: 33,
      vars: 2,
      consts: [[1, "d-flex", "justify-content-center", "bg-primary", "p-2", "rounded", 2, "color", "white", "display", "block", "margin", "auto"], [3, "formGroup", "ngSubmit"], [3, "click"], [1, "form-group", "submit"], [1, "submit"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["type", "text", "formControlName", "ECTS", 1, "form-control"], ["type", "text", "formControlName", "semester", 1, "form-control"], ["type", "text", "formControlName", "maxStudentsNo", 1, "form-control"], ["type", "text", "formControlName", "icon", 1, "form-control"], ["type", "text", "formControlName", "description", 1, "form-control"], ["type", "submit", 1, "btn", "btn-light", "submit", 3, "disabled"]],
      template: function CourseFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CourseFormComponent_Template_form_ngSubmit_1_listener($event) {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseFormComponent_Template_a_click_2_listener($event) {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add new course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ECTS: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Semester: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Max student no: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " icon: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.courseForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.courseForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["form[_ngcontent-%COMP%]{\r\n    width:100%;\r\n}\r\n.submit[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    text-align: right;\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtZm9ybS9jb3Vyc2UtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtZm9ybS9jb3Vyc2UtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course-form',
          templateUrl: './course-form.component.html',
          styleUrls: ['./course-form.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: src_app_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]
        }];
      }, {
        addCourse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/course-item/course-item.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/course-item/course-item.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CourseItemComponent */

  /***/
  function srcAppComponentsCourseItemCourseItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseItemComponent", function () {
      return CourseItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CourseItemComponent =
    /*#__PURE__*/
    function () {
      function CourseItemComponent(courseService, router) {
        _classCallCheck(this, CourseItemComponent);

        this.courseService = courseService;
        this.router = router;
        this.deleteCourse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hidden = true;
      }

      _createClass(CourseItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setClass",
        value: function setClass() {
          var cssClass = {
            //course: true,
            'color1': this.isEven,
            //'text-white': this.isEven,
            'color2': !this.isEven
          };
          return cssClass;
        }
      }, {
        key: "onDelete",
        value: function onDelete(course) {
          this.deleteCourse.emit(course);
        }
      }, {
        key: "onSelect",
        value: function onSelect(course) {
          this.router.navigate(['/details', course.id, course]);
        }
      }]);

      return CourseItemComponent;
    }();

    CourseItemComponent.ɵfac = function CourseItemComponent_Factory(t) {
      return new (t || CourseItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    CourseItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseItemComponent,
      selectors: [["app-course-item"]],
      inputs: {
        course: "course",
        isEven: "isEven"
      },
      outputs: {
        deleteCourse: "deleteCourse"
      },
      decls: 11,
      vars: 3,
      consts: [[1, "item", 3, "ngClass"], ["id", "item3"], ["id", "del", 1, "btn", 3, "click"], [3, "src"], [1, "fter"], ["id", "details", 1, "b", 3, "click"]],
      template: function CourseItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseItemComponent_Template_button_click_2_listener($event) {
            return ctx.onDelete(ctx.course);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseItemComponent_Template_button_click_8_listener($event) {
            return ctx.onSelect(ctx.course);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.course.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.course.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["img[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    display: block;\r\n    margin: auto;\r\n    padding-bottom: 1em;\r\n}\r\n.item[_ngcontent-%COMP%]{\r\n    background-color: #ebeded;\r\n    -webkit-column-break-inside: avoid;\r\n       -moz-column-break-inside: avoid;\r\n            break-inside: avoid;\r\n    margin-bottom: 1em;\r\n    box-shadow: 0 5px 15px rgba(0,0,0,0.20);\r\n    -webkit-transition: ease-in 0.3s;\r\n    transition: ease-in 0.3s;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.fter[_ngcontent-%COMP%]{\r\n    background-color: #247BA0;\r\n    color:whitesmoke;\r\n    padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtaXRlbS9jb3Vyc2UtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRGRTtBQUNGO0lBQ0ksU0FBUztJQUNULGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0NBQW1CO09BQW5CLCtCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxnQ0FBd0I7SUFBeEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBOzs7OztFQUtFO0FBQ0Y7O0VBRUUiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1pdGVtL2NvdXJzZS1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNpdGVte1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MxN0M3NDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgbWluLWhlaWdodDozMDBweDtcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgcGFkZGluZzowO1xyXG59XHJcbmRpdntcclxuICAgIHBhZGRpbmctYm90dG9tOjUlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6YXV0bztcclxufVxyXG4jZGVse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDo4OS41JTtcclxuICAgIHRvcDo1JTtcclxuICAgIGJhY2tncm91bmQ6IGZpcmVicmljaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OjUlO1xyXG4gICAgd2lkdGg6MTAlO1xyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn1cclxuYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG59XHJcbiNjb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG4jaXRlbTEsICNpdGVtMiwgI2l0ZW0ze1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgICBcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQwMHB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICB3aWR0aDphdXRvO1xyXG4gICAgfVxyXG59XHJcbmF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2RldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4jaXRlbTJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2l0ZW0xe1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6ODg1cHgpe1xyXG4gICAgI2l0ZW17XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgbWFyZ2luLXRvcDo1JTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbG9yMXtcclxuICAgIGJhY2tncm91bmQ6ICM2MDVGNUU7XHJcbn1cclxuLmNvbG9yMntcclxuICAgIGJhY2tncm91bmQ6ICMyNDdCQTA7XHJcbn1cclxuXHJcbi5ie1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkIzNjQwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcclxufVxyXG4ud3JhcHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMTdDNzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIFxyXG59Ki9cclxuaW1ne1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcbi5pdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWRlZDtcclxuICAgIGJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwwLDAsMC4yMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuM3M7XHJcbn1cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ3QkEwO1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4vKi5ie1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkIzNjQwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Ki9cclxuLyouaXRlbTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxZW0pO1xyXG59Ki9cclxuXHJcbiAgIl19 */"],
      data: {
        animation: []
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course-item',
          templateUrl: './course-item.component.html',
          styleUrls: ['./course-item.component.css'],
          animations: []
        }]
      }], function () {
        return [{
          type: src_app_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        course: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isEven: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteCourse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/course-list/course-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/course-list/course-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CourseListComponent */

  /***/
  function srcAppComponentsCourseListCourseListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseListComponent", function () {
      return CourseListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../pipes/course-filter.pipe */
    "./src/app/pipes/course-filter.pipe.ts");
    /* harmony import */


    var src_app_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/course.service */
    "./src/app/services/course.service.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/db.service */
    "./src/app/services/db.service.ts");
    /* harmony import */


    var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../search-form/search-form.component */
    "./src/app/components/search-form/search-form.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _course_item_course_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../course-item/course-item.component */
    "./src/app/components/course-item/course-item.component.ts");

    function CourseListComponent_app_course_item_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-course-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCourse", function CourseListComponent_app_course_item_3_Template_app_course_item_deleteCourse_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.deleteCourse($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("course", course_r4)("isEven", ctx_r3.filtered().indexOf(course_r4) % 2);
      }
    }

    var CourseListComponent =
    /*#__PURE__*/
    function () {
      function CourseListComponent(courseService, searchPipe, loginService, dbService) {
        _classCallCheck(this, CourseListComponent);

        this.courseService = courseService;
        this.searchPipe = searchPipe;
        this.loginService = loginService;
        this.dbService = dbService;
        this.highestID = 5;
        this.loaded = false;
      }

      _createClass(CourseListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.dbService.getData('Kursy').subscribe(function (courses) {
            _this2.courses = courses;

            _this2.courseService.updateCourses(_this2.courses);

            _this2.loaded = true;
          });
          this.dbService.getData('maxID').subscribe(function (max) {
            return _this2.highestID = max[0];
          });
          this.courseService.change.subscribe(function (course) {
            alert('poszlo!');

            _this2.addCourse(course);
          });
        }
      }, {
        key: "filtered",
        value: function filtered() {
          return this.searchPipe.transform(this.courses, this.searchParams);
        }
      }, {
        key: "deleteCourse",
        value: function deleteCourse(course) {
          this.courses = this.courses.filter(function (t) {
            return t.id !== course.id;
          });
          this.dbService.deleteData(course);
        }
      }, {
        key: "addCourse",
        value: function addCourse(course) {
          this.highestID++;
          var correctCourse = Object.assign(Object.assign({}, course), {
            id: this.highestID,
            rating: 0,
            enrolledUsers: "",
            amountOfRates: 0,
            ratedBy: ""
          });
          this.courses.push(correctCourse);
          this.dbService.addData(correctCourse);
          this.dbService.updateMaxID(this.highestID);
        }
      }, {
        key: "addSearchParams",
        value: function addSearchParams(searchParam) {
          this.searchParams = searchParam;
        }
      }]);

      return CourseListComponent;
    }();

    CourseListComponent.ɵfac = function CourseListComponent_Factory(t) {
      return new (t || CourseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["CourseFilterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]));
    };

    CourseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseListComponent,
      selectors: [["app-course-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["CourseFilterPipe"]])],
      decls: 4,
      vars: 1,
      consts: [["id", "main"], [3, "addSearchParams"], ["id", "courseList", 1, "grid-container"], [3, "course", "isEven", "deleteCourse", 4, "ngFor", "ngForOf"], [3, "course", "isEven", "deleteCourse"]],
      template: function CourseListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-search-form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addSearchParams", function CourseListComponent_Template_app_search_form_addSearchParams_1_listener($event) {
            return ctx.addSearchParams($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseListComponent_app_course_item_3_Template, 1, 2, "app-course-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtered());
        }
      },
      directives: [_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _course_item_course_item_component__WEBPACK_IMPORTED_MODULE_7__["CourseItemComponent"]],
      styles: [".grid-container[_ngcontent-%COMP%]{\r\n    padding: 1em;\r\n    -webkit-column-count: 4;\r\n       -moz-column-count: 4;\r\n            column-count: 4;\r\n    -webkit-column-width: 23%;\r\n       -moz-column-width: 23%;\r\n            column-width: 23%;\r\n    -webkit-column-gap: 1em;\r\n       -moz-column-gap: 1em;\r\n            column-gap: 1em;\r\n}\r\n@media(max-width: 800px){\r\n    .grid-container[_ngcontent-%COMP%]{\r\n        -webkit-column-count: 3;\r\n           -moz-column-count: 3;\r\n                column-count: 3;\r\n    }\r\n}\r\n@media(max-width: 600px){\r\n    .grid-container[_ngcontent-%COMP%]{\r\n        -webkit-column-count: 2;\r\n           -moz-column-count: 2;\r\n                column-count: 2;\r\n    }\r\n}\r\n@media(max-width: 400px){\r\n    .grid-container[_ngcontent-%COMP%]{\r\n        -webkit-column-count: 1;\r\n           -moz-column-count: 1;\r\n                column-count: 1;\r\n    }\r\n}\r\n#conurseList[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    justify-content: space-around;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbGlzdC9jb3Vyc2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1DRTtBQUNGO0lBQ0ksWUFBWTtJQUNaLHVCQUFlO09BQWYsb0JBQWU7WUFBZixlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsdUJBQWU7T0FBZixvQkFBZTtZQUFmLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksdUJBQWU7V0FBZixvQkFBZTtnQkFBZixlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksdUJBQWU7V0FBZixvQkFBZTtnQkFBZixlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksdUJBQWU7V0FBZixvQkFBZTtnQkFBZixlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1saXN0L2NvdXJzZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5he1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ncmlkLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzElIDMxJSAzMSU7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZ3JpZC1nYXA6MnJlbTtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBtaW4taGVpZ2h0OjcwMHB4O1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6MTI1MHB4KXtcclxuICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ5JSA0OSU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo4ODVweCl7XHJcbiAgICAuZ3JpZC1jb250YWluZXJ7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgfVxyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxufVxyXG4uY29udHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIG1hcmdpbjo1JTtcclxufSovXHJcbi5ncmlkLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGNvbHVtbi1jb3VudDogNDtcclxuICAgIGNvbHVtbi13aWR0aDogMjMlO1xyXG4gICAgY29sdW1uLWdhcDogMWVtO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgIC5ncmlkLWNvbnRhaW5lcntcclxuICAgICAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLmdyaWQtY29udGFpbmVye1xyXG4gICAgICAgIGNvbHVtbi1jb3VudDogMjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgICAuZ3JpZC1jb250YWluZXJ7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiAxO1xyXG4gICAgfVxyXG59XHJcbiNjb251cnNlTGlzdHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course-list',
          templateUrl: './course-list.component.html',
          styleUrls: ['./course-list.component.css'],
          providers: [_pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["CourseFilterPipe"]]
        }]
      }], function () {
        return [{
          type: src_app_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]
        }, {
          type: _pipes_course_filter_pipe__WEBPACK_IMPORTED_MODULE_1__["CourseFilterPipe"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/landing/landing.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/landing/landing.component.ts ***!
    \*********************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppComponentsLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LandingComponent =
    /*#__PURE__*/
    function () {
      function LandingComponent(router, ref) {
        _classCallCheck(this, LandingComponent);

        this.router = router;
        this.ref = ref;
        this.isLoaded = 'none';
      }

      _createClass(LandingComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.isLoaded = 'loaded';
          this.ref.detectChanges();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          this.router.navigate(['/courselist']);
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 7,
      vars: 1,
      consts: [["id", "bg"], ["id", "inner"], [1, "flex-container"], [1, "b", 3, "click"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All courses from Computer Science at IET in one place ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_4_listener($event) {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@load", ctx.isLoaded);
        }
      },
      styles: ["#inner[_ngcontent-%COMP%]{\r\n     \r\n      text-align: center;\r\n      font-size: xx-large;\r\n      position: relative;\r\n      line-height: 200%;\r\n      padding-top: 15%;\r\n      margin: 2%;\r\n  }\r\n  .flex-container[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    font-size: x-large;\r\n  }\r\n  .flex-item[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n  }\r\n  a[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  .bloc[_ngcontent-%COMP%]{\r\n    width:100px;\r\n    height: 100px;\r\n   position: absolute;\r\n    z-index: -1;\r\n  }\r\n  #block1[_ngcontent-%COMP%]{\r\n    \r\n    top: 500px;\r\n    left:50px;\r\n    background-color: lightcoral;\r\n  }\r\n  #block2[_ngcontent-%COMP%]{\r\n    top:400px;\r\n    left:50px;\r\n    background-color: limegreen;\r\n  }\r\n  #block3[_ngcontent-%COMP%]{\r\n    top:500px;\r\n    left:150px;\r\n    background-color: mediumturquoise;\r\n  }\r\n  #block4[_ngcontent-%COMP%]{\r\n    bottom: 500px;\r\n    right: 50px;\r\n    background-color: lightcoral;\r\n  }\r\n  #block5[_ngcontent-%COMP%]{\r\n    \r\n      bottom:400px;\r\n      right:50px;\r\n      background-color: limegreen;\r\n    \r\n  }\r\n  #block6[_ngcontent-%COMP%]{\r\n    bottom:500px;\r\n    right:150px;\r\n    background-color: mediumturquoise;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTs7TUFFSSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLFVBQVU7RUFDZDtFQUNBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtHQUNkLGtCQUFrQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTs7SUFFRSxVQUFVO0lBQ1YsU0FBUztJQUNULDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLDRCQUE0QjtFQUM5QjtFQUNBOztNQUVJLFlBQVk7TUFDWixVQUFVO01BQ1YsMkJBQTJCOztFQUUvQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQ0FBaUM7RUFDbkMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAjaW5uZXJ7XHJcbiAgICAgXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjAwJTtcclxuICAgICAgcGFkZGluZy10b3A6IDE1JTtcclxuICAgICAgbWFyZ2luOiAyJTtcclxuICB9XHJcbiAgLmZsZXgtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICAuZmxleC1pdGVte1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgLmJsb2N7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAjYmxvY2sxe1xyXG4gICAgXHJcbiAgICB0b3A6IDUwMHB4O1xyXG4gICAgbGVmdDo1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICB9XHJcbiAgI2Jsb2NrMntcclxuICAgIHRvcDo0MDBweDtcclxuICAgIGxlZnQ6NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcclxuICB9XHJcbiAgI2Jsb2NrM3tcclxuICAgIHRvcDo1MDBweDtcclxuICAgIGxlZnQ6MTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW10dXJxdW9pc2U7XHJcbiAgfVxyXG4gICNibG9jazR7XHJcbiAgICBib3R0b206IDUwMHB4O1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIH1cclxuICAjYmxvY2s1e1xyXG4gICAgXHJcbiAgICAgIGJvdHRvbTo0MDBweDtcclxuICAgICAgcmlnaHQ6NTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xyXG4gICAgXHJcbiAgfVxyXG4gICNibG9jazZ7XHJcbiAgICBib3R0b206NTAwcHg7XHJcbiAgICByaWdodDoxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXR1cnF1b2lzZTtcclxuICB9XHJcbiAgIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('load', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(15px)',
          opacity: 0.1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('topLoad', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(-200%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('botLoad', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(200%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('load', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(15px)',
            opacity: 0.1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0)',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('topLoad', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-200%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('botLoad', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('none', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(200%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('none => loaded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms'))])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/loader/loader.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/loader/loader.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getStyle",
        value: function getStyle() {
          var style = {
            'width.px': this.width ? this.width : "",
            'height.px': this.height ? this.height : ""
          };
          return style;
        }
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      inputs: {
        width: "width",
        height: "height"
      },
      decls: 1,
      vars: 1,
      consts: [[1, "skelt-load", "loader", 3, "ngStyle"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getStyle());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
      styles: [".loader[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width:200px;\r\n    height:20px;\r\n    overflow: hidden;\r\n    border-radius: 4px;\r\n    margin-bottom: 4px;\r\n    background-color: rgb(235,235,235);\r\n}\r\n.loader[_ngcontent-%COMP%]::after{\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: -webkit-gradient(linear,left top, right top,from(transparent),color-stop(rgba(255,255,255,.4)),to(transparent));\r\n    background: linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);\r\n    -webkit-animation: loading 1s infinite;\r\n            animation: loading 1s infinite;\r\n}\r\n@-webkit-keyframes loading{\r\n    100%{\r\n        -webkit-transform:translateX(100%);\r\n                transform:translateX(100%);\r\n    }\r\n}\r\n@keyframes loading{\r\n    100%{\r\n        -webkit-transform:translateX(100%);\r\n                transform:translateX(100%);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkhBQStFO0lBQS9FLCtFQUErRTtJQUMvRSxzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSTtRQUNJLGtDQUEwQjtnQkFBMUIsMEJBQTBCO0lBQzlCO0FBQ0o7QUFKQTtJQUNJO1FBQ0ksa0NBQTBCO2dCQUExQiwwQkFBMEI7SUFDOUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwyMzUsMjM1KTtcclxufVxyXG4ubG9hZGVyOjphZnRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LHJnYmEoMjU1LDI1NSwyNTUsLjQpLHRyYW5zcGFyZW50KTtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZyAxcyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRpbmd7XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader',
          template: "\n    <div [ngStyle] = \"getStyle()\" class = \"skelt-load loader\"></div>\n  ",
          styleUrls: ['./loader.component.css']
        }]
      }], function () {
        return [];
      }, {
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, router, loginServ) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.loginServ = loginServ;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signInUser",
        value: function signInUser(email, password) {
          var _this3 = this;

          //this.auth.auth.setPersistence(firebase.auth().Auth.Persistence.LOCAL);
          return this.auth.auth.signInWithEmailAndPassword(email, password).then(function (result) {
            localStorage.setItem('user', JSON.stringify(result));

            _this3.loginServ.setIsSomeoneLogged(true);

            _this3.loginServ.setUserName(_this3.auth.auth.currentUser.email);

            _this3.loginServ.signIn();
          }).catch(function (error) {
            return console.log(error.message);
          });
        }
      }, {
        key: "onLoginButtonPressed",
        value: function onLoginButtonPressed() {
          var _this4 = this;

          this.signInUser(this.loginForm.value.email, this.loginForm.value.password).then(function () {
            return _this4.router.navigate(['courselist']);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 13,
      vars: 1,
      consts: [[1, "bar", "d-flex", "justify-content-center", "p-2", "rounded", 2, "color", "white", "width", "25%", "display", "block", "margin", "auto", "margin-top", "10%"], [1, "mt-1", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "glyphicon", "glyphicon-user"], [1, "text-center"], ["placeholder", "Enter your email", "type", "text", "formControlName", "email", 1, "form-control"], ["placeholder", "Enter your password", "type", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "d-block", "b", "mx-auto"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener($event) {
            return ctx.onLoginButtonPressed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["#top[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin: auto;\r\n}\r\n.bar[_ngcontent-%COMP%]{\r\n    background-color: #247BA0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3B7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0N0JBMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _course_form_course_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../course-form/course-form.component */
    "./src/app/components/course-form/course-form.component.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sign_menu_sign_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sign-menu/sign-menu.component */
    "./src/app/components/sign-menu/sign-menu.component.ts");

    function NavbarComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_7_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.onClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(dialog, logService) {
        _classCallCheck(this, NavbarComponent);

        this.dialog = dialog;
        this.logService = logService;
        this.disp = document.getElementById("navbarSupportedContent");
        this.isSomeoneLoggedIn = false;
        this.isExpanded = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.logService.change.subscribe(function (loggedIn) {
            return _this5.isSomeoneLoggedIn = loggedIn;
          });
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.position = {
            'top': '50px'
          };
          dialogConfig.hasBackdrop = true;
          this.dialog.open(_course_form_course_form_component__WEBPACK_IMPORTED_MODULE_2__["CourseFormComponent"], dialogConfig);
        }
      }, {
        key: "onExpand",
        value: function onExpand() {
          var disp = document.getElementById("navbarSupportedContent");

          if (!this.isExpanded) {
            disp.style.display = "initial";
            this.isExpanded = true;
          } else {
            disp.style.display = "none";
            this.isExpanded = false;
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 9,
      vars: 1,
      consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"], [1, "shine", "navbar-brand", "mr-auto"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", " nav-link", 3, "click", 4, "ngIf"], [1, "nav-link", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CourseWiki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener($event) {
            return ctx.onExpand();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 2, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-sign-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSomeoneLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _sign_menu_sign_menu_component__WEBPACK_IMPORTED_MODULE_5__["SignMenuComponent"]],
      styles: ["li[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n#navbarSupportedContent[_ngcontent-%COMP%]{\r\n    -webkit-transition-duration:  2s;\r\n            transition-duration:  2s;\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n    background-color:#0A2463;\r\n    color: whitesmoke;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbmF2YmFyU3VwcG9ydGVkQ29udGVudHtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICAycztcclxufVxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMEEyNDYzO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(auth, router) {
        _classCallCheck(this, RegisterComponent);

        this.auth = auth;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signUpUser",
        value: function signUpUser(email, password) {
          return this.auth.auth.createUserWithEmailAndPassword(email, password).then().catch(function (error) {
            return window.alert(error.message);
          });
        }
      }, {
        key: "onRegisterButtonPressed",
        value: function onRegisterButtonPressed() {
          var _this6 = this;

          console.log('a');
          this.signUpUser(this.registerForm.value.email, this.registerForm.value.password).then(function () {
            return _this6.router.navigate(['courselist']);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 13,
      vars: 1,
      consts: [[1, "d-flex", "bar", "justify-content-center", "p-2", "rounded", 2, "color", "white", "width", "25%", "display", "block", "margin", "auto", "margin-top", "10%"], [1, "mt-1", 3, "formGroup", "ngSubmit"], [1, "form-group"], [1, "text-center"], [1, "far", "fa-angry", "fa-2x"], ["placeholder", "Enter your email", "type", "text", "formControlName", "email", 1, "form-control"], ["placeholder", "Enter your password", "type", "password", "formControlName", "password", 1, "form-control"], ["type", "submit", 1, "b", "mx-auto"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener($event) {
            return ctx.onRegisterButtonPressed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".bar[_ngcontent-%COMP%]{\r\n    background-color: #247BA0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDdCQTA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search-form/search-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/search-form/search-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchFormComponent */

  /***/
  function srcAppComponentsSearchFormSearchFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function () {
      return SearchFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SearchFormComponent =
    /*#__PURE__*/
    function () {
      function SearchFormComponent() {
        _classCallCheck(this, SearchFormComponent);

        this.addSearchParams = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          ECTS: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          semester: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          maxStudentsNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
      }

      _createClass(SearchFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onKeyUp",
        value: function onKeyUp() {
          var searchParams = this.searchForm.value;
          this.sP = searchParams;
          this.addSearchParams.emit(searchParams);
        }
      }]);

      return SearchFormComponent;
    }();

    SearchFormComponent.ɵfac = function SearchFormComponent_Factory(t) {
      return new (t || SearchFormComponent)();
    };

    SearchFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchFormComponent,
      selectors: [["app-search-form"]],
      outputs: {
        addSearchParams: "addSearchParams"
      },
      decls: 14,
      vars: 1,
      consts: [[1, "bar", "d-flex", "justify-content-center", "rounded", "mt-5"], [3, "formGroup", "keyup"], [1, "form-group"], [1, "text-center"], [1, "form-row"], [1, "col"], ["type", "text", "formControlName", "name", "placeholder", "Name", 1, "form-control"], ["type", "text", "formControlName", "ECTS", "placeholder", "ECTS", 1, "form-control"], ["type", "text", "formControlName", "semester", "placeholder", "Semester", 1, "form-control"], ["type", "text", "formControlName", "maxStudentsNo", "placeholder", "Capacity", 1, "form-control"]],
      template: function SearchFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchFormComponent_Template_form_keyup_1_listener($event) {
            return ctx.onKeyUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".bar[_ngcontent-%COMP%]{\r\n    background-color: #ebeded;\r\n    color: black;\r\n    margin-top: 10em;\r\n    padding: 2em 0 ;\r\n    box-shadow: 0 5px 5px rgba(0,0,0,0.20);\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: x-large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmVkZWQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xyXG4gICAgcGFkZGluZzogMmVtIDAgO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4yMCk7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-form',
          templateUrl: './search-form.component.html',
          styleUrls: ['./search-form.component.css']
        }]
      }], function () {
        return [];
      }, {
        addSearchParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sign-menu/sign-menu.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/sign-menu/sign-menu.component.ts ***!
    \*************************************************************/

  /*! exports provided: SignMenuComponent */

  /***/
  function srcAppComponentsSignMenuSignMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignMenuComponent", function () {
      return SignMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignMenuComponent_ul_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignMenuComponent_ul_0_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Logged user: ", ctx_r7.loggedUser, "");
      }
    }

    function SignMenuComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignMenuComponent_ng_template_1_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onLoginClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignMenuComponent_ng_template_1_Template_a_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onRegisterClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignMenuComponent =
    /*#__PURE__*/
    function () {
      function SignMenuComponent(logService, router) {
        _classCallCheck(this, SignMenuComponent);

        this.logService = logService;
        this.router = router;
        this.isSomeoneLogged = false;
      }

      _createClass(SignMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.update();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.logService.signOut(); // console.log("czemutoniedziala")
        }
      }, {
        key: "update",
        value: function update() {
          var _this7 = this;

          this.logService.username.subscribe(function (change) {
            return _this7.loggedUser = change;
          });
          this.logService.change.subscribe(function (change) {
            return _this7.isSomeoneLogged = change;
          });
        }
      }, {
        key: "onLoginClick",
        value: function onLoginClick() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "onRegisterClick",
        value: function onRegisterClick() {
          this.router.navigate(['/register']);
        }
      }]);

      return SignMenuComponent;
    }();

    SignMenuComponent.ɵfac = function SignMenuComponent_Factory(t) {
      return new (t || SignMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SignMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignMenuComponent,
      selectors: [["app-sign-menu"]],
      decls: 3,
      vars: 2,
      consts: [["class", "navbar-nav ml-auto", 4, "ngIf", "ngIfElse"], ["loginAndRegister", ""], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["id", "logout", 1, "nav-link", 3, "click"], ["id", "loggedUser", 1, "nav-link"], ["id", "login", 1, "nav-link", 3, "click"], ["id", "register", 1, "nav-link", 3, "click"]],
      template: function SignMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignMenuComponent_ul_0_Template, 7, 1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignMenuComponent_ng_template_1_Template, 7, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSomeoneLogged)("ngIfElse", _r8);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["a[_ngcontent-%COMP%]{\r\n    color:white;\r\n    cursor: pointer;\r\n    \r\n    \r\n\r\n}\r\na[_ngcontent-%COMP%]:hover{\r\n    background-position: -120% 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLW1lbnUvc2lnbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmOzs7Ozs7Ozs7Ozs2QkFXeUI7SUFDekIsaUNBQWlDOztBQUVyQztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduLW1lbnUvc2lnbi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAtNzVkZWcsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgMCxcclxuICAgICAgICB0cmFuc3BhcmVudCA1JSxcclxuICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDAuNSkgNSUsXHJcbiAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwwLjUpIDEwJSxcclxuICAgICAgICB0cmFuc3BhcmVudCAxMCUsXHJcbiAgICAgICAgdHJhbnNwYXJlbnQgMTAwJVxyXG4gICAgKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLypiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7Ki9cclxuICAgIC8qLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7Ki9cclxuXHJcbn1cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjAlIDA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-menu',
          templateUrl: './sign-menu.component.html',
          styleUrls: ['./sign-menu.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/welcome/welcome.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/welcome/welcome.component.ts ***!
    \*********************************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppComponentsWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)();
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 1,
      vars: 0,
      consts: [[1, "welcome"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: [".welcome[_ngcontent-%COMP%]{\r\n    display:block;\r\n    margin:auto;\r\n    background-image: url('bgpic1.jpg');\r\n    height:300px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUNBQTZEO0lBQzdELFlBQVk7SUFDWiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWV7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcGljdHVyZXMvYmdwaWMxLmpwZ1wiKSA7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICAvKmJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOyovXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/course-filter.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/course-filter.pipe.ts ***!
    \*********************************************/

  /*! exports provided: CourseFilterPipe */

  /***/
  function srcAppPipesCourseFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseFilterPipe", function () {
      return CourseFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CourseFilterPipe =
    /*#__PURE__*/
    function () {
      function CourseFilterPipe() {
        _classCallCheck(this, CourseFilterPipe);
      }

      _createClass(CourseFilterPipe, [{
        key: "transform",
        value: function transform(courses,
        /*...args: any[]*/
        parameters) {
          if (!courses) {
            return [];
          }

          var filteredCourses = _toConsumableArray(courses);

          if (!parameters) {
            return filteredCourses;
          }

          if (parameters.name) {
            filteredCourses = filteredCourses.filter(function (course) {
              return course.name.includes(parameters.name);
            });
          }

          if (parameters.ECTS) {
            filteredCourses = filteredCourses.filter(function (course) {
              return course.ECTS == parameters.ECTS;
            });
          }

          if (parameters.maxStudentsNo) {
            filteredCourses = filteredCourses.filter(function (course) {
              return course.maxStudentsNo == parameters.maxStudentsNo;
            });
          }

          if (parameters.semester) {
            filteredCourses = filteredCourses.filter(function (course) {
              return course.semester == parameters.semester;
            });
          }

          return filteredCourses;
        }
      }]);

      return CourseFilterPipe;
    }();

    CourseFilterPipe.ɵfac = function CourseFilterPipe_Factory(t) {
      return new (t || CourseFilterPipe)();
    };

    CourseFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "courseFilter",
      type: CourseFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'courseFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/route-animations.ts":
  /*!*************************************!*\
    !*** ./src/app/route-animations.ts ***!
    \*************************************/

  /*! exports provided: fader, slider */

  /***/
  function srcAppRouteAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fader", function () {
      return fader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slider", function () {
      return slider;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('main => *', fadeTo()), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> isRight', fadeTo())]);

    function fadeTo() {
      return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transform: 'translateX(100%)'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transform: 'translateX(0)'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        //opacity: 0,
        transform: 'translateX(-100%)'
      }))])
      /*query(':enter',[
          animate('700ms ease', style({
              opacity: 1,
              transform: 'translateX(0)'
          }))
      ])*/
      ,,])];
    }

    var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('main => courseList, :enter', slide(100, 'X')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('courseList => isRight, :enter', slide(100, 'X')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => courseList, :enter', slide(-100, 'X')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('courseList => main, :enter', slide(-100, 'X')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => log, * => reg, :enter', slide(-100, 'Y')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('log => *, reg => *, :enter', slide(100, 'Y')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('log => reg, :enter', slide(100, 'X'))]);

    function slide(val, axis) {
      return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        width: '100%'
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: "translate".concat(axis, "(").concat(val, "vw)")
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: "translate".concat(axis, "(0vw)")
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: "translate".concat(axis, "(").concat(-val, "vw)")
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: "translate".concat(axis, "(0)")
      }))], {
        optional: true
      })])];
    }
    /***/

  },

  /***/
  "./src/app/services/course.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/course.service.ts ***!
    \********************************************/

  /*! exports provided: CourseService */

  /***/
  function srcAppServicesCourseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseService", function () {
      return CourseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CourseService =
    /*#__PURE__*/
    function () {
      function CourseService() {
        _classCallCheck(this, CourseService);

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CourseService, [{
        key: "updateCourses",
        value: function updateCourses(courses) {
          this.courses = courses;
        }
      }, {
        key: "onCourseAdded",
        value: function onCourseAdded(course) {
          this.change.emit(course);
        }
      }]);

      return CourseService;
    }();

    CourseService.ɵfac = function CourseService_Factory(t) {
      return new (t || CourseService)();
    };

    CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CourseService,
      factory: CourseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/db.service.ts":
  /*!****************************************!*\
    !*** ./src/app/services/db.service.ts ***!
    \****************************************/

  /*! exports provided: DbService */

  /***/
  function srcAppServicesDbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbService", function () {
      return DbService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");

    var DbService =
    /*#__PURE__*/
    function () {
      function DbService(db) {
        _classCallCheck(this, DbService);

        this.db = db;
        this.data = this.db.list('/Kursy');
      }

      _createClass(DbService, [{
        key: "addData",
        value: function addData(course) {
          this.db.object('Kursy/' + course.id).set(course);
        }
      }, {
        key: "deleteData",
        value: function deleteData(course) {
          this.db.object('/Kursy/' + course.id).remove();
        }
      }, {
        key: "getData",
        value: function getData(listPath) {
          return this.db.list(listPath).valueChanges();
        }
      }, {
        key: "updateRatingData",
        value: function updateRatingData(course) {
          this.db.object('Kursy/' + course.id).update({
            rating: course.rating,
            amountOfRates: course.amountOfRates,
            ratedBy: course.ratedBy
          });
        }
      }, {
        key: "updateCourseMembers",
        value: function updateCourseMembers(course, member) {
          var _this8 = this;

          this.getData('Kursy/' + course.id).subscribe(function (c) {
            var updatedList = c[2] + ",".concat(member);

            _this8.db.object('Kursy/' + course.id).update({
              enrolledUsers: updatedList
            });
          });
        }
      }, {
        key: "updateMaxID",
        value: function updateMaxID(max) {
          this.db.object('maxID').update({
            maxID: max
          });
        }
      }]);

      return DbService;
    }();

    DbService.ɵfac = function DbService_Factory(t) {
      return new (t || DbService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
    };

    DbService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DbService,
      factory: DbService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginService =
    /*#__PURE__*/
    function () {
      function LoginService(auth, router) {
        _classCallCheck(this, LoginService);

        this.auth = auth;
        this.router = router;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LoginService, [{
        key: "signOut",
        value: function signOut() {
          var _this9 = this;

          return this.auth.auth.signOut().then(function () {
            localStorage.removeItem('user');

            _this9.setIsSomeoneLogged(false);

            _this9.setUserName('');

            _this9.change.emit(_this9.isSomeoneLogged);
          });
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.userName);
        }
      }, {
        key: "setUserName",
        value: function setUserName(userName) {
          this.userName = userName;
        }
      }, {
        key: "getIsSomeoneLogged",
        value: function getIsSomeoneLogged() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.isSomeoneLogged);
        }
      }, {
        key: "setIsSomeoneLogged",
        value: function setIsSomeoneLogged(isSomeoneLogged) {
          this.isSomeoneLogged = isSomeoneLogged;
        }
      }, {
        key: "signIn",
        value: function signIn() {
          this.change.emit(this.isSomeoneLogged);
          this.username.emit(this.userName);
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        username: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyB6ndmCnHJXr3cOknYWD7a4s8W6iwWpGAs",
        authDomain: "wdai-1751d.firebaseapp.com",
        databaseURL: "https://wdai-1751d.firebaseio.com",
        projectId: "wdai-1751d",
        storageBucket: "wdai-1751d.appspot.com",
        messagingSenderId: "869230921817",
        appId: "1:869230921817:web:f8cea9101babda3b3a0948",
        measurementId: "G-KV3DLL00PQ"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\wkami\Desktop\WDAI zad Angular\wdai-project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map