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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/movies-list/movies-list.component.ts");
/* harmony import */ var _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-search/movie-search.component */ "./src/app/movie-search/movie-search.component.ts");






var routes = [
    {
        path: 'search',
        component: _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_5__["MovieSearchComponent"]
    },
    {
        path: 'movies/:list',
        component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"]
    },
    {
        path: 'movie/detail/:movieId',
        component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"]
    },
    {
        path: '**',
        component: _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_5__["MovieSearchComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<app-menu></app-menu>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'MossyMovies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__["TextFieldModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_3__["TextFieldModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/movies-list/movies-list.component.ts");
/* harmony import */ var _movie_list_tile_movie_list_tile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-list-tile/movie-list-tile.component */ "./src/app/movie-list-tile/movie-list-tile.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movie-search/movie-search.component */ "./src/app/movie-search/movie-search.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_10__["MoviesListComponent"],
                _movie_list_tile_movie_list_tile_component__WEBPACK_IMPORTED_MODULE_11__["MovieListTileComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _movie_search_movie_search_component__WEBPACK_IMPORTED_MODULE_15__["MovieSearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["TextFieldModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_12__["AppMaterialModule"]
            ],
            providers: [
                { provide: 'ApiKey', useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey },
                { provide: 'BaseRoute', useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseRoute },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\">\n  <mat-toolbar-row>\n    <div>\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"menuDrawer.toggle()\" color=\"primary\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-sidenav-container color=\"secondary\" class=\"app-menu\" [hasBackdrop]=\"true\">\n  <mat-sidenav #menuDrawer closed mode=\"side\" role=\"navigation\">\n    <mat-list *ngFor=\"let menuItem of menuItems\">\n      <mat-list-item routerLink='../{{menuItem.Route}}'>\n        <mat-icon mat-list-icon color=\"primary\">{{menuItem.Icon}}</mat-icon>\n        <p mat-line>{{menuItem.SectionName}}</p>\n      </mat-list-item>\n      <mat-divider></mat-divider>\n    </mat-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-menu {\n  height: 100%; }\n\n.mat-list-item {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhtb3NzL0RvY3VtZW50cy9fRGV2L01vc3NNb3ZpZXMvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1lbnUge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LXRvb2xiYXIge1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuItems = [
            {
                SectionName: 'Home',
                Route: 'search',
                Icon: 'home'
            },
            {
                SectionName: 'Current Movies',
                Route: 'movies/current',
                Icon: 'new_releases'
            }
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button routerLink=\"/movies\">\n  <mat-icon>arrow_back</mat-icon>\n</button>\n\n<ng-container *ngIf=\"$movie\">\n  <mat-card class=\"movie-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"header-image\"></div>\n      <mat-card-title>{{$movie.title}}</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n      <img id=\"movie_detail-image\" mat-card-image src=\"http://image.tmdb.org/t/p/w185//{{$movie.poster_path}}\" alt=\"Movie icon\">\n\n      <p id=\"movie_detail-overview\">\n        {{$movie.overview}}\n      </p>\n    </mat-card-content>\n  </mat-card>\n\n  <ng-container *ngIf=\"$recommendedMovies\">\n    <!-- TODO: Add a call to get movies of a similar time, genre, rating -->\n  </ng-container>\n</ng-container>"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  background-image: url(\"https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg\");\n  background-size: cover; }\n\n.movie-card {\n  height: 800px; }\n\n#movie_detail-image {\n  margin: 10px;\n  margin-top: 0;\n  width: calc(20%);\n  min-width: 50px;\n  max-width: 150px;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhtb3NzL0RvY3VtZW50cy9fRGV2L01vc3NNb3ZpZXMvc3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0pBQXdKO0VBQ3hKLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy50aGVtb3ZpZWRiLm9yZy9hc3NldHMvMi92NC9sb2dvcy9wcmltYXJ5LWdyZWVuLWQ3MGVlYmUxOGE1ZWI1YjE2NmQ1YzFlZjA3OTY3MTViOGQxYTJjYmM2OThmOTZkMzExZDYyZjg5NGFlODcwODUuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubW92aWUtY2FyZCB7XG4gIGhlaWdodDogODAwcHg7XG59XG5cbiNtb3ZpZV9kZXRhaWwtaW1hZ2Uge1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHdpZHRoOiBjYWxjKDIwJSk7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/logic.service */ "./src/services/logic.service.ts");




var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, logicService) {
        this.route = route;
        this.logicService = logicService;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$movieId = this.route.snapshot.paramMap.get('movieId');
        this.logicService.getMovie(this.$movieId).subscribe(function (response) {
            _this.$movie = response;
        });
    };
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/movie-detail/movie-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_services_logic_service__WEBPACK_IMPORTED_MODULE_3__["LogicService"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movie-list-tile/movie-list-tile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/movie-list-tile/movie-list-tile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"movie-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"header-image\"></div>\n    <mat-card-title>{{movieBrief(movie.title, 10)}}</mat-card-title>\n  </mat-card-header>\n\n  <img mat-card-image src=\"{{moviePoster(movie.poster_path)}}\" alt=\"Movie icon\">\n\n  <mat-card-content>\n    <p>\n      {{movieBrief(movie.overview)}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <!-- Could just pass the movie object, but wanted to demo the other API call and routing. -->\n    <button mat-button routerLink=\"/movie/detail/{{movie.id}}\">DETAILS</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/movie-list-tile/movie-list-tile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/movie-list-tile/movie-list-tile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  background-image: url(\"https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg\");\n  background-size: cover; }\n\n.movie-card {\n  height: 520px;\n  width: 200px;\n  margin: 20px;\n  float: left; }\n\n.mat-card-image {\n  margin: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhtb3NzL0RvY3VtZW50cy9fRGV2L01vc3NNb3ZpZXMvc3JjL2FwcC9tb3ZpZS1saXN0LXRpbGUvbW92aWUtbGlzdC10aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0pBQXdKO0VBQ3hKLHNCQUFzQixFQUFBOztBQUd4QjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vdmllLWxpc3QtdGlsZS9tb3ZpZS1saXN0LXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cudGhlbW92aWVkYi5vcmcvYXNzZXRzLzIvdjQvbG9nb3MvcHJpbWFyeS1ncmVlbi1kNzBlZWJlMThhNWViNWIxNjZkNWMxZWYwNzk2NzE1YjhkMWEyY2JjNjk4Zjk2ZDMxMWQ2MmY4OTRhZTg3MDg1LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1vdmllLWNhcmQge1xuICAgIGhlaWdodDogNTIwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgICBtYXJnaW46IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/movie-list-tile/movie-list-tile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/movie-list-tile/movie-list-tile.component.ts ***!
  \**************************************************************/
/*! exports provided: MovieListTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListTileComponent", function() { return MovieListTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_models_movie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/movie.model */ "./src/models/movie.model.ts");



var MovieListTileComponent = /** @class */ (function () {
    function MovieListTileComponent() {
    }
    MovieListTileComponent.prototype.ngOnInit = function () {
    };
    MovieListTileComponent.prototype.moviePoster = function (image) {
        if (image) {
            return 'http://image.tmdb.org/t/p/w185//' + image;
        }
        // tslint:disable-next-line: max-line-length
        return 'https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg';
    };
    MovieListTileComponent.prototype.movieBrief = function (overview, maxLength) {
        if (!overview) {
            return null;
        }
        if (!maxLength) {
            maxLength = 100;
        }
        if (overview.length > maxLength) {
            return overview.substr(0, maxLength) + '...';
        }
        return overview;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_models_movie_model__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MovieListTileComponent.prototype, "movie", void 0);
    MovieListTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-tile',
            template: __webpack_require__(/*! ./movie-list-tile.component.html */ "./src/app/movie-list-tile/movie-list-tile.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-tile.component.scss */ "./src/app/movie-list-tile/movie-list-tile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieListTileComponent);
    return MovieListTileComponent;
}());



/***/ }),

/***/ "./src/app/movie-search/movie-search.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n  <mat-form-field class=\"search-form\">\n    <input class=\"search-bar\" matInput type=\"text\" placeholder=\"e.g. Mulan\" [(ngModel)]=\"searchText\"\n      (keyup.enter)=\"searchMovies()\">\n    <button mat-button *ngIf=\"searchText\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <button mat-button type=\"button\" (click)=\"searchMovies()\">\n    <mat-icon>search</mat-icon>\n  </button>\n\n  <!-- \n    I know this is an odd implementation of \"current movies\" but... time. \n    Also I know this flashes up even when returning results. Would be resolved by\n    making hasSearched an observable based on the API call.\n  -->\n  <ng-container *ngIf=\"!$movies && hasSearched\">\n    <div>\n      <p>No results returned, why don't you check out...</p>\n      <button mat-raised-button type=\"button\" routerLink=\"../movies/current\">\n        Current Movies\n      </button>\n    </div>\n  </ng-container>\n</div>\n\n<ng-container *ngIf=\"$movies\">\n  <ng-container *ngFor=\"let movie of $movies\">\n    <app-movie-list-tile [movie]=\"movie\"></app-movie-list-tile>\n  </ng-container>\n</ng-container>"

/***/ }),

/***/ "./src/app/movie-search/movie-search.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  text-align: center; }\n\n.search-form {\n  width: 30%; }\n\n.search-bar {\n  width: 50%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NlcGhtb3NzL0RvY3VtZW50cy9fRGV2L01vc3NNb3ZpZXMvc3JjL2FwcC9tb3ZpZS1zZWFyY2gvbW92aWUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vdmllLXNlYXJjaC9tb3ZpZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoLWZvcm0ge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/movie-search/movie-search.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-search/movie-search.component.ts ***!
  \********************************************************/
/*! exports provided: MovieSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSearchComponent", function() { return MovieSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/logic.service */ "./src/services/logic.service.ts");



var MovieSearchComponent = /** @class */ (function () {
    function MovieSearchComponent(logicService) {
        this.logicService = logicService;
        this.hasSearched = false;
    }
    MovieSearchComponent.prototype.ngOnInit = function () {
    };
    MovieSearchComponent.prototype.searchMovies = function () {
        var _this = this;
        this.hasSearched = true;
        if (!this.searchText) {
            return;
        }
        this.logicService.search(this.searchText).subscribe(function (response) {
            if (response && response.results.length > 0) {
                _this.$movies = response.results;
            }
            else {
                _this.$movies = null;
            }
        });
    };
    MovieSearchComponent.prototype.getCurrentMovies = function () {
        var _this = this;
        this.logicService.getCurrentMovies().subscribe(function (response) {
            _this.$movies = response.results;
        });
    };
    MovieSearchComponent.prototype.clearSearch = function () {
        this.$movies = null;
        this.searchText = null;
    };
    MovieSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-search',
            template: __webpack_require__(/*! ./movie-search.component.html */ "./src/app/movie-search/movie-search.component.html"),
            styles: [__webpack_require__(/*! ./movie-search.component.scss */ "./src/app/movie-search/movie-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_logic_service__WEBPACK_IMPORTED_MODULE_2__["LogicService"]])
    ], MovieSearchComponent);
    return MovieSearchComponent;
}());



/***/ }),

/***/ "./src/app/movies-list/movies-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"$movies\">\n  <ng-container *ngFor=\"let movie of $movies\">\n    <app-movie-list-tile [movie]=\"movie\"></app-movie-list-tile>\n  </ng-container>\n</ng-container>"

/***/ }),

/***/ "./src/app/movies-list/movies-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/movies-list/movies-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/logic.service */ "./src/services/logic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(route, logicService) {
        this.route = route;
        this.logicService = logicService;
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var movieListType = this.route.snapshot.paramMap.get('list');
        this.logicService.getMoviesByList(movieListType).subscribe(function (response) {
            _this.$movies = response.results;
        });
    };
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/movies-list/movies-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_services_logic_service__WEBPACK_IMPORTED_MODULE_2__["LogicService"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/config/movie-lists.ts":
/*!***********************************!*\
  !*** ./src/config/movie-lists.ts ***!
  \***********************************/
/*! exports provided: MovieLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieLists", function() { return MovieLists; });
var MovieLists;
(function (MovieLists) {
    MovieLists["current"] = "Current";
    MovieLists["something"] = "Something";
})(MovieLists || (MovieLists = {}));


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
    production: false,
    apiKey: '?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce',
    baseRoute: 'https://api.themoviedb.org/'
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

/***/ "./src/models/movie.model.ts":
/*!***********************************!*\
  !*** ./src/models/movie.model.ts ***!
  \***********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/services/logic.service.ts":
/*!***************************************!*\
  !*** ./src/services/logic.service.ts ***!
  \***************************************/
/*! exports provided: LogicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicService", function() { return LogicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var _config_movie_lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/movie-lists */ "./src/config/movie-lists.ts");





var LogicService = /** @class */ (function () {
    function LogicService(moviesService) {
        this.moviesService = moviesService;
    }
    LogicService.prototype.getMoviesByList = function (listType) {
        var listEnum = _config_movie_lists__WEBPACK_IMPORTED_MODULE_4__["MovieLists"][listType];
        switch (listEnum) {
            case _config_movie_lists__WEBPACK_IMPORTED_MODULE_4__["MovieLists"].current:
                return this.getCurrentMovies();
            default:
                return null;
        }
    };
    // Search for movies.
    LogicService.prototype.search = function (searchTerm) {
        searchTerm = this.hughBeGone(searchTerm);
        return this.moviesService.searchMovies(searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    // Get movies currently in the theatre.
    LogicService.prototype.getCurrentMovies = function () {
        return this.moviesService.getCurrentMovies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    // Get an individual movie.
    LogicService.prototype.getMovie = function (id) {
        return this.moviesService.getMovie(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    // Dude has no place in movies.
    LogicService.prototype.hughBeGone = function (searchTerm) {
        var hughCheck = searchTerm.toLocaleLowerCase();
        if (hughCheck.includes('hugh') && hughCheck.includes('grant')) {
            searchTerm = 'Mulan'; // thank me later => *spoilers*.... she saves China
        }
        return searchTerm;
    };
    LogicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]])
    ], LogicService);
    return LogicService;
}());



/***/ }),

/***/ "./src/services/movies.service.ts":
/*!****************************************!*\
  !*** ./src/services/movies.service.ts ***!
  \****************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MoviesService = /** @class */ (function () {
    // injecting the env values is useful if you're producing multiple modules, sharing the same values,
    // rather than just import env ts files.
    function MoviesService(http, baseRoute, apiKey) {
        this.http = http;
        this.baseRoute = baseRoute;
        this.apiKey = apiKey;
    }
    // example req: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    MoviesService.prototype.searchMovies = function (searchTerm) {
        var route = this.baseRoute + '3/search/movie' + this.apiKey + '&query=' + encodeURI(searchTerm);
        return this.http.get(route)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            throw Error('Err: ' + error);
        }));
    };
    // example req: https://api.themoviedb.org/3/movie/now_playing?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce&language=en-US&page=1
    MoviesService.prototype.getCurrentMovies = function () {
        var route = this.baseRoute + '3/movie/now_playing' + this.apiKey;
        return this.http.get(route)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            throw Error('Err: ' + error);
        }));
    };
    // example req: https://api.themoviedb.org/3/movie/550?api_key=82d8fc5e5d0be14a733eaeb4c28e23ce
    MoviesService.prototype.getMovie = function (id) {
        var route = this.baseRoute + '3/movie/' + id + this.apiKey;
        return this.http.get(route)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            throw Error('Err: ' + error);
        }));
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('BaseRoute')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('ApiKey')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, String])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josephmoss/Documents/_Dev/MossMovies/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map