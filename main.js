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
/* harmony import */ var _containers_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/home-layout/home-layout.component */ "./src/app/containers/home-layout/home-layout.component.ts");
/* harmony import */ var _containers_contact_layout_contact_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/contact-layout/contact-layout.component */ "./src/app/containers/contact-layout/contact-layout.component.ts");
/* harmony import */ var _containers_portfolio_layout_portfolio_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/portfolio-layout/portfolio-layout.component */ "./src/app/containers/portfolio-layout/portfolio-layout.component.ts");
/* harmony import */ var _containers_services_layout_services_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/services-layout/services-layout.component */ "./src/app/containers/services-layout/services-layout.component.ts");
/* harmony import */ var _containers_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/blog-layout/blog-layout.component */ "./src/app/containers/blog-layout/blog-layout.component.ts");








var routes = [
    { path: 'home', component: _containers_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_3__["HomeLayoutComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contacto', component: _containers_contact_layout_contact_layout_component__WEBPACK_IMPORTED_MODULE_4__["ContactLayoutComponent"] },
    { path: 'faqs', component: _containers_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_7__["BlogLayoutComponent"] },
    { path: 'servicios', component: _containers_services_layout_services_layout_component__WEBPACK_IMPORTED_MODULE_6__["ServicesLayoutComponent"] },
    { path: 'obras', component: _containers_portfolio_layout_portfolio_layout_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioLayoutComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t\t<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\">\n\t\t\t<div class=\"navigation\">\n\t\t\t\t<div class=\"container\">\t\t\t\t\t\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse.collapse\">\n\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<div class=\"navbar-brand\">\n\t\t\t\t\t\t\t<a href=\"index.html\"><h1><span>EJC</span> Proyectos</h1></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"navbar-collapse collapse\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"menu\">\n\t\t\t\t\t\t\t<ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/home\" routerLinkActive=\"active\">Inicio</a></li>\n\t\t\t\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/servicios\" routerLinkActive=\"active\">Servicios</a></li>\n\t\t\t\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/obras\" routerLinkActive=\"active\">Obras</a></li>\n\t\t\t\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/faqs\" routerLinkActive=\"active\">Preguntas frecuentes</a></li>\n\t\t\t\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/contacto\" routerLinkActive=\"active\">Contacto</a></li>\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</nav>\t\t\n\t</header>\n<router-outlet></router-outlet>\n<footer>\n\t\t<div class=\"footer\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"col-md-4 wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.2s\">\n\t\t\t\t\t<h2>ECJ</h2>\n\t\t\t\t\t<p>Habría que agregar una descripción acá</p>\n\t\t\t\t\t\n\t\t\t\t\t<ul class=\"social-network\">\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.facebook.com/EJC-Proyectos-102909481119160/\" data-placement=\"top\" title=\"Facebook\">\n              <i class=\"fab fa-facebook-square fa-1x\"></i></a></li>\n\t\t\t\t\t\t<li><a target=\"_blank\" href=\"https://www.instagram.com/proyectosejc/?hl=es\" data-placement=\"top\" title=\"Instagram\">\n              <i class=\"fab fa-instagram fa-1x\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-md-4 wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.4s\">\n\t\t\t\t\t<!-- <h3>RECENT POSTS</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Awesome Design with Overviews</li><hr>\n\t\t\t\t\t\t<li>Great Design with Features </li><hr>\n\t\t\t\t\t\t<li>Limitless functions & Works </li><hr>\n\t\t\t\t\t\t<li>Multi is simple and clean design</li>\n\t\t\t\t\t</ul> -->\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-md-4 wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<h3>INFO DE CONTACTO</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><i class=\"fa fa-home fa-2x\"></i> Ruta Interbalnearia Km. 47 Las Toscas - Canelones</li><hr>\n\t\t\t\t\t\t<li><i class=\"fa fa-phone fa-2x\"></i>098 906 651 - 43724329</li><hr>\n\t\t\t\t\t\t<li><i class=\"fa fa-envelope fa-2x\"></i> ventas@proyectosejc.com</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"sub-footer\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t&copy; 2019 <a target=\"_blank\" href=\"http://bootstraptaste.com/\" title=\"Free Twitter Bootstrap WordPress Themes and HTML templates\">EJC</a>. All Rights Reserved.\n\t\t\t\t\t</div>\n                    <!-- \n                        All links in the footer should remain intact. \n                        Licenseing information is available at: http://bootstraptaste.com/license/\n                        You can buy this theme without footer links online at: http://bootstraptaste.com/buy/?theme=Multi\n                    -->\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<ul class=\"pull-right\">\n\t\t\t\t\t\t\t<li><a routerLink=\"/home\">Inicio</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/servicios\">Servicios</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/obras\">Obras</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/faqs\">Preguntas Frecuentes</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"/contacto\">Contacto</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t<a href=\"#home\" class=\"scrollup\"><i class=\"fa fa-angle-up fa-3x\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n\n"

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
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    AppComponent.prototype.loadScripts = function () {
        var dynamicScripts = [
            'assets/js/jquery-2.1.1.min.js',
            'assets/js/bootstrap.min.js',
            'assets/js/wow.min.js',
            'assets/js/fancybox/jquery.fancybox.pack.js',
            'assets/js/jquery.easing.1.3.js',
            'assets/js/jquery.bxslider.min.js',
            'assets/js/jquery.prettyPhoto.js',
            'assets/js/jquery.isotope.min.js',
            'assets/js/functions.js'
        ];
        for (var i = 0; i < dynamicScripts.length; i++) {
            var node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/home-layout/home-layout.component */ "./src/app/containers/home-layout/home-layout.component.ts");
/* harmony import */ var _containers_contact_layout_contact_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/contact-layout/contact-layout.component */ "./src/app/containers/contact-layout/contact-layout.component.ts");
/* harmony import */ var _containers_portfolio_layout_portfolio_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/portfolio-layout/portfolio-layout.component */ "./src/app/containers/portfolio-layout/portfolio-layout.component.ts");
/* harmony import */ var _containers_services_layout_services_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/services-layout/services-layout.component */ "./src/app/containers/services-layout/services-layout.component.ts");
/* harmony import */ var _containers_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/blog-layout/blog-layout.component */ "./src/app/containers/blog-layout/blog-layout.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _containers_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_5__["HomeLayoutComponent"],
                _containers_contact_layout_contact_layout_component__WEBPACK_IMPORTED_MODULE_6__["ContactLayoutComponent"],
                _containers_portfolio_layout_portfolio_layout_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioLayoutComponent"],
                _containers_services_layout_services_layout_component__WEBPACK_IMPORTED_MODULE_8__["ServicesLayoutComponent"],
                _containers_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_9__["BlogLayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/containers/blog-layout/blog-layout.component.css":
/*!******************************************************************!*\
  !*** ./src/app/containers/blog-layout/blog-layout.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYmxvZy1sYXlvdXQvYmxvZy1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/containers/blog-layout/blog-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/containers/blog-layout/blog-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"blog\" class=\"container\">\n    <div class=\"text-center\">\n        <div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n            <h2>FAQs</h2>                   \n        </div>\n        <div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n            <p>7 Pasos básicos y sencillos para comprar un producto de Alcubo</p>\n        </div>\n    </div>\n\n    <div class=\"blog\">\n        <div class=\"row\">\n             <div class=\"col-md-10\">\n                <div class=\"blog-item\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-10 col-sm-2 text-center\">\n                         </div>      \n                        <div class=\"col-xs-10 col-sm-10 blog-content\">\n                            <div id=\"accordion\">\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"text-align: center;\" id=\"headingOne\">\n                                  <h5 class=\"mb-0\">\n                                    <button class=\"btn btn-link\" style=\"color: #ED502E;\"data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                      Paso 1\n                                    </button>\n                                  </h5>\n                                </div>\n                                <div id=\"collapseOne\" class=\"collapse in\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                  <div class=\"card-body\">\n                                    <p>Se contacta con el vendedor. (Emilio de León – 098 906 651 – 4372 4329)\n                                        <br>Pide una entrevista informativa en las oficinas de EJC Proyectos\n                                        <br>1º entrevista, el cliente solicita:\n                                        <br>- información general del producto.\n                                        <br>- Información puntual del producto que necesita.\n                                        <br>- Costos, tiempo de ejecución y de entrega.\n                                        <br>- Normativa municipal, aportes a BPS etc.\n                                        <br><br>1º entrevista, el cliente proporciona:\n                                        <br> - que está necesitando, comodidades, tipo de terminaciones, m2 etc.\n                                        <br>- la mayor información posible del lugar a ejecutar el proyecto. (padrón,\n                                        manzana, solar. Localidad, retiros, dimensiones en m2, plano del mismo,orientación, etc.\n                                    </p>\n                                    </div>\n                                </div>\n                              </div>\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"text-align: center;\" id=\"headingTwo\">\n                                  <h5 class=\"mb-0\">\n                                    <button class=\"btn btn-link collapsed\" style=\"color: #ED502E;\"data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                      Paso 2\n                                    </button>\n                                  </h5>\n                                </div>\n                                <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                                  <div class=\"card-body\" style=\"text-align: center;\">\n                                    <p>EJC Proyectos envía por mail proyecto primario PDF o DWG y formulario con los costos.</p>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"text-align: center;\" id=\"headingThree\">\n                                  <h5 class=\"mb-0\">\n                                    <button class=\"btn btn-link collapsed\" style=\"color: #ED502E;\"style=\"color: #ED502E;\"data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                      Paso 3 (*)\n                                    </button>\n                                  </h5>\n                                </div>\n                                <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                                  <div class=\"card-body\" style=\"text-align: center;\">\n                                    \n                                    <p>2º entrevista in situ:\n                                        <br>Viabilidad del proyecto.\n                                        <br>EJC Proyectos visita el lugar y evalúa la viabilidad del proyecto, se verifica tamaño del terreno, retiros,\n                                        orientación, nivel a la calle, accesibilidad etc.\n                                        <br>Después de la visita, si es pertinente se ajustan detalles básicos del proyecto y se mandan nuevamente por\n                                        mail con los costos y posible fecha de entrega.\n                                    </p>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"text-align: center;\" id=\"headingFour\">\n                                  <h5 class=\"mb-0\">\n                                    <button class=\"btn btn-link collapsed\" style=\"color: #ED502E;\"data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                                      Paso 4\n                                    </button>\n                                  </h5>\n                                </div>\n                                <div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordion\">\n                                  <div class=\"card-body\" style=\"text-align: center;\">\n                                    <p>Se seña el proyecto con el 30 % del importe final del presupuesto primario, en ese mismo             momento se\n                                    agenda una fecha de entrega final.\n                                    </p>\n                                    </div>\n                                </div>\n                              </div>\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"text-align: center;\" id=\"headingFive\">\n                                  <h5 class=\"mb-0\">\n                                    <button class=\"btn btn-link collapsed\" style=\"color: #ED502E;\"data-toggle=\"collapse\" data-target=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n                                      Paso 5\n                                    </button>\n                                  </h5>\n                                </div>\n                                <div id=\"collapseFive\" class=\"collapse\" aria-labelledby=\"headingFive\" data-parent=\"#accordion\">\n                                  <div class=\"card-body\">\n                                        <p>Dependiendo del tamaño del proyecto, Ej. 48 m2 entre 30 y 45 días antes de la fecha de entrega estipulada\n                                        se coordina la tercera entrevista (en nuestra oficina)\n                                        <br><b>3º entrevista en oficinas de EJC:</b>\n                                        <br>-Se ajustan detalles finales de terminación, revestimientos, etc.\n                                        <br>-Es la última instancia de cambios, correcciones de planos, o modificaciones en el formulario de costos.\n                                        <br>-En los casos que el cliente proporciona equipamiento Ej: mobiliario cocina, baño, revestimientos etc.\n                                        <br>Estos artículos se tienen que dejar en la empresa en ésta tercera entrevista.\n                                        <br>-Se deposita la segunda entrega. Que es del 40 % del importe final del formulario actualizado de costos. </p>\n                                    </div>\n                                </div>\n                              </div>\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"text-align: center;\" id=\"headingSix\">\n                                  <h5 class=\"mb-0\">\n                                    <button class=\"btn btn-link collapsed\" style=\"color: #ED502E;\"data-toggle=\"collapse\" data-target=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\">\n                                      Paso 6\n                                    </button>\n                                  </h5>\n                                </div>\n                                <div id=\"collapseSix\" class=\"collapse\" aria-labelledby=\"headingSix\" data-parent=\"#accordion\">\n                                  <div class=\"card-body\" style=\"text-align: center;\">\n                                    <p><b>EJC</b> envía por mail proyecto final PDF, DWG, formulario final con los costos donde figuran las dos\n                                    Entregas anteriormente mencionadas. De esta forma el cliente tiene toda información actualizada y clara.</p>\n                                    </div>\n                                </div>\n                              </div>\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"text-align: center;\" id=\"headingSeven\">\n                                  <h5 class=\"mb-0\">\n                                    <button class=\"btn btn-link collapsed\" style=\"color: #ED502E;\"data-toggle=\"collapse\" data-target=\"#collapseSeven\" aria-expanded=\"false\" aria-controls=\"collapseSeven\">\n                                      Paso 7\n                                    </button>\n                                  </h5>\n                                </div>\n                                <div id=\"collapseSeven\" class=\"collapse\" aria-labelledby=\"headingSeven\" data-parent=\"#accordion\">\n                                  <div class=\"card-body\" style=\"text-align: center;\">\n                                    <p>En la fecha de entrega estipulada, el cliente recibe las llaves, verifica que sea lo pactado en el formulario, expresa su conformidad y deposita el saldo final (30 %)\n                                    </p>\n                                    </div>\n                                </div>\n                              </div>\n                            </div>\n                        </div>\n                    </div>    \n                </div><!--/.blog-item-->\n                    \n                <div class=\"blog-item\">\n                    <div class=\"row\">\n                         <div class=\"col-sm-2 text-center\">\n                            <!-- <div class=\"entry-meta\"> \n                                <span id=\"publish_date\">05  APR</span>\n                                <span><i class=\"fa fa-user\"></i> <a href=\"#\">John Doe</a></span>\n                                <span><i class=\"fa fa-comment\"></i> <a href=\"#\">2 Comments</a></span>\n                                <span><i class=\"fa fa-heart\"></i><a href=\"#\">56 Likes</a></span>\n                            </div> -->\n                        </div>\n                        <div class=\"col-sm-10 blog-content\">\n                            <h4>(*)En el paso 3 en caso de que el proyecto se ejecute con toda la normativa municipal y de BPS, se  pone en contacto también con el Arquitecto a cargo de la gestoría, firma etc.</h4>\n                        </div>\n                    </div>    \n                </div><!--/.blog-item-->\n            </div><!--/.col-md-8-->\n\n            \n        </div><!--/.row-->\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/containers/blog-layout/blog-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/blog-layout/blog-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLayoutComponent", function() { return BlogLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var BlogLayoutComponent = /** @class */ (function () {
    function BlogLayoutComponent() {
    }
    BlogLayoutComponent.prototype.ngAfterViewInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    BlogLayoutComponent.prototype.ngOnInit = function () {
    };
    BlogLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-layout',
            template: __webpack_require__(/*! ./blog-layout.component.html */ "./src/app/containers/blog-layout/blog-layout.component.html"),
            styles: [__webpack_require__(/*! ./blog-layout.component.css */ "./src/app/containers/blog-layout/blog-layout.component.css")]
        })
    ], BlogLayoutComponent);
    return BlogLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/contact-layout/contact-layout.component.css":
/*!************************************************************************!*\
  !*** ./src/app/containers/contact-layout/contact-layout.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvY29udGFjdC1sYXlvdXQvY29udGFjdC1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/containers/contact-layout/contact-layout.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/containers/contact-layout/contact-layout.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n\t<div class=\"contact\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<h2>Contáctenos</h2>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<p>Rellenar con alguna descripcion</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"map\">\t\t\t\t\n\t\t\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1638.8452600668363!2d-55.748102287115714!3d-34.763387996627706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959ff67d31b85dff%3A0x8e244318664ef911!2sAlCubo%20Construcciones%20Modulares!5e0!3m2!1ses-419!2ses!4v1572725890512!5m2!1ses-419!2ses\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"contact-info\">\n\t\t\t<div class=\"col-md-5\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><i class=\"fa fa-home fa-1x\"></i> Ruta Interbalnearia Km. 47 Las Toscas - Canelones</li>\n\t\t\t\t\t<li><i class=\"fa fa-phone fa-1x\"></i> 098 906 651 - 43724329</li>\n\t\t\t\t\t<li><i class=\"fa fa-envelope fa-1x\"></i> ventas@proyectosejc.com</li>\n\t\t\t\t\t<li><i class=\"fab fa-facebook-square fa-1x\"></i><a target=\"_blank\" href=\"https://www.facebook.com/EJC-Proyectos-102909481119160/\">  @proyectosejc</a></li>\n\t\t\t\t\t<li><i class=\"fab fa-instagram fa-1x\"></i> <a target=\"_blank\" href=\"https://www.instagram.com/proyectosejc/?hl=es\">  @proyectosejc</a></li>\n\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"contact-form\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputName\" placeholder=\"Nombre\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputPhone\" placeholder=\"Teléfono\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"container\">\n\t\t\t<div class=\"col-lg-12\">\t\t\t\t\n\t\t\t\t<textarea class=\"form-control\" rows=\"5\"></textarea>\t\t\t\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<button type=\"submit\" name=\"submit\" class=\"btn btn-primary btn-lg\" required=\"required\">Enviar mensaje</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n"

/***/ }),

/***/ "./src/app/containers/contact-layout/contact-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/contact-layout/contact-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactLayoutComponent", function() { return ContactLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var ContactLayoutComponent = /** @class */ (function () {
    function ContactLayoutComponent() {
    }
    ContactLayoutComponent.prototype.ngAfterViewInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    ContactLayoutComponent.prototype.ngOnInit = function () {
    };
    ContactLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-layout',
            template: __webpack_require__(/*! ./contact-layout.component.html */ "./src/app/containers/contact-layout/contact-layout.component.html"),
            styles: [__webpack_require__(/*! ./contact-layout.component.css */ "./src/app/containers/contact-layout/contact-layout.component.css")]
        })
    ], ContactLayoutComponent);
    return ContactLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/home-layout/home-layout.component.css":
/*!******************************************************************!*\
  !*** ./src/app/containers/home-layout/home-layout.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/containers/home-layout/home-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/containers/home-layout/home-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"slider\">\n\t\t<div class=\"img-responsive\">\n\t\t\t<ul class=\"bxslider\">\n        <li><img src=\"assets/images/slider/1.png\" alt=\"\" style=\"\n    width: 1480px; height: 432px ;\"/></li>\n\t\t\t\t<li><img src=\"assets/images/slider/4.JPG\" alt=\"\" style=\"\n    width: 1480px; height: 432px ;\"/></li>\n<!--\t\t\t\t<li><img src=\"assets/images/slider/3.jpg\" alt=\"\"/></li>\t\t\t-->\n\t\t\t</ul>\n\t\t</div>\t\n    </div>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"text-center\">\n\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t<h3>El proceso de compra</h3>\n\t\t\t</div>\n\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t<h2>(Reducido en 4 grandes pasos)</h2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t\t<div class=\"box\">\n\t\t\t<div class=\"wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.4s\">\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<i class=\"fas fa-ruler-combined fa-3x\"></i>\n\t\t\t\t\t<h4>Creative Solutions</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.8s\">\n\t\t\t\t<div class=\"col-sm-3\">\n          <i class=\"fas fa-pencil-alt fa-3x\"></i>\n\t\t\t\t\t<h4>Creative Solutions</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"1.2s\">\n\t\t\t\t<div class=\"col-sm-3\">\n          <i class=\"fas fa-drafting-compass fa-3x\"></i>\n\t\t\t\t\t<h4>Creative Solutions</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"1.6s\">\n\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t<i class=\"fa fa-check fa-3x\"></i>\n\t\t\t\t\t<h4>Creative Solutions</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n\t<div class=\"features\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<h2>Descripción breve de la empresa</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<p>Bras urna felis accumsan at ultrde cesid posuere masa socis nautoque<br>\n\t\t\t\t\tpenat bus maecenas ultrices sed ipsum lorem\n\t\t\t\t\tdolor sit amet sed ipsum consectetur<br></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"container\">\n\t\t<div class=\"col-lg-6 wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"0.5s\">\n\t\t\t<img src=\"assets/images/6.JPG\" class=\"img-responsive\" >\n\t\t</div>\n\t\t\n\t\t<div class=\"col-lg-6 wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.5s\">\n\t\t\t<img src=\"assets/images/5.JPG\" class=\"img-responsive\" >\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"main-feature\">\n<!--\t\t<div class=\"container\">-->\n<!--\t\t\t<div class=\"col-md-4 wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">-->\n<!--\t\t\t\t<div class=\"media\">-->\n<!--\t\t\t\t\t<div class=\"media-left\">\t\t\t\t\t-->\n<!--\t\t\t\t\t\t<i class=\"fa fa-rocket fa-3x\"></i>-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t\t-->\n<!--\t\t\t\t\t<div class=\"media-body\">-->\n<!--\t\t\t\t\t\t<h4 class=\"media-heading\">SEO Optimized</h4>-->\n<!--\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd Lorem ipsum dolor sit ame onsectea dipe.</p>-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t</div>-->\n<!--\t\t\t</div>-->\n<!--\t\t\t-->\n<!--\t\t\t<div class=\"col-md-4 wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">-->\n<!--\t\t\t\t<div class=\"media\">-->\n<!--\t\t\t\t\t<div class=\"media-left\">\t\t\t\t\t-->\n<!--\t\t\t\t\t\t<i class=\"fa fa-camera fa-3x\"></i>-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t\t-->\n<!--\t\t\t\t\t<div class=\"media-body\">-->\n<!--\t\t\t\t\t\t<h4 class=\"media-heading\">Easy to Install</h4>-->\n<!--\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd Lorem ipsum dolor sit ame onsectea dipe.</p>-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t</div>-->\n<!--\t\t\t</div>-->\n<!--\t\t\t-->\n<!--\t\t\t<div class=\"col-md-4 wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.9s\">-->\n<!--\t\t\t\t<div class=\"media\">-->\n<!--\t\t\t\t\t<div class=\"media-left\">\t\t\t\t\t-->\n<!--\t\t\t\t\t\t<i class=\"fa fa-heart-o fa-3x\"></i>-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t\t-->\n<!--\t\t\t\t\t<div class=\"media-body\">-->\n<!--\t\t\t\t\t\t<h4 class=\"media-heading\">Unlimited Possibilities</h4>-->\n<!--\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd Lorem ipsum dolor sit ame onsectea dipe.</p>-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t</div>-->\n<!--\t\t\t</div>-->\n<!--\t\t</div>-->\n\t\t\n\t\t<div class=\"text-center\">\n\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t<h2>Más información de nuestros servicios </h2>\n\t\t\t</div>\n\t\t\t<div class=\"wow bounceInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t<p>Integer orci enim varius vel accumsan vel porttitor tellus. Vivamus odio. Donec metus libero semper</p>\n\t\t\t</div>\n\n\t\t\t<button type=\"button\" class=\"btn btn-default\">Más info</button>\n\t\t</div>\t\n\t\t\n\t</div>\n\t\n\t<div class=\"about-us\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<h3>Quienes sómos?</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<h2>O podría ser: Los comentarios de nuestros compradores</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/about/man4.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/about/man2.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/about/man3.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/about/man4.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/containers/home-layout/home-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containers/home-layout/home-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var HomeLayoutComponent = /** @class */ (function () {
    function HomeLayoutComponent() {
    }
    HomeLayoutComponent.prototype.ngAfterViewInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
        this.initializeBxslider();
    };
    HomeLayoutComponent.prototype.initializeBxslider = function () {
        $(".bxslider").bxSlider({
            auto: true
        });
    };
    HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__(/*! ./home-layout.component.html */ "./src/app/containers/home-layout/home-layout.component.html"),
            styles: [__webpack_require__(/*! ./home-layout.component.css */ "./src/app/containers/home-layout/home-layout.component.css")]
        })
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/portfolio-layout/portfolio-layout.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/containers/portfolio-layout/portfolio-layout.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcG9ydGZvbGlvLWxheW91dC9wb3J0Zm9saW8tbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/portfolio-layout/portfolio-layout.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/portfolio-layout/portfolio-layout.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\">\n    <div class=\"container\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"text-center\">\n\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t<h2>Obras</h2>\n\t\t\t</div>\n\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t<p>Se puede agregar una descripción de cada obra</p>\n\t\t\t</div>\n\t\t</div>\n\t\n\n\t\t<ul class=\"portfolio-filter text-center\">\n\t\t\t<li><a [ngClass]=\"{'active': homeNumber === 1}\" class=\"btn btn-default\" (click)=\"changeImages(1)\" data-filter=\"*\">Casa 1</a></li>\n\t\t\t<li><a [ngClass]=\"{'active': homeNumber === 2}\" class=\"btn btn-default\" (click)=\"changeImages(2)\" data-filter=\"*\">Casa 2</a></li>\n\t\t\t<li><a [ngClass]=\"{'active': homeNumber === 3}\" class=\"btn btn-default\" (click)=\"changeImages(3)\" data-filter=\"*\">Casa 3</a></li>\n\t\t</ul><!--/#portfolio-filter-->\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"portfolio-items\">\n\t\t\t\t<div class=\"portfolio-item apps col-xs-12 col-sm-4 col-md-3\" *ngFor=\"let imagePath of images\">\n\t\t\t\t\t<div class=\"recent-work-wrap\">\n\t\t\t\t\t\t<img class=\"img-responsive\" [src]=\"'assets/images/portfolio/casa'+homeNumber+'/'+imagePath+'.JPG'\"  title=\"Titulo de img\" alt=\"Alt de imagenS\">\n\t\t\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t\t\t<div class=\"recent-work-inner\">\n\t\t\t\t\t\t\t\t<h3><a href=\"#\">Business theme</a></h3>\n\t\t\t\t\t\t\t\t<p>There are many variations of passages of Lorem Ipsum available, but the majority</p>\n\t\t\t\t\t\t\t\t<a title=\"Titulo de la imagen\" class=\"preview\" href=\"{{'assets/images/portfolio/casa'+homeNumber+'/'+imagePath+'.JPG'}}\" rel=\"prettyPhoto[imagePath]\"><i class=\"fa fa-eye\"></i> View</a>\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!--/.portfolio-item-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    </div>\n</section><!--/#portfolio-item-->\t\t\n"

/***/ }),

/***/ "./src/app/containers/portfolio-layout/portfolio-layout.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/containers/portfolio-layout/portfolio-layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: PortfolioLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioLayoutComponent", function() { return PortfolioLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var PortfolioLayoutComponent = /** @class */ (function () {
    function PortfolioLayoutComponent(ref) {
        this.ref = ref;
        this.images = [];
    }
    PortfolioLayoutComponent.prototype.ngOnInit = function () {
        this.homeNumber = 1;
        this.images = ["1", "2", "3", "4", "5", "6", "7", "8"];
    };
    PortfolioLayoutComponent.prototype.ngAfterViewInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
        this.initializePrettyPhoto();
        // $("area[rel^='prettyPhoto']").prettyPhoto();
    };
    PortfolioLayoutComponent.prototype.initializePrettyPhoto = function () {
        $("a[rel^='prettyPhoto']").prettyPhoto({
            autoplay_slideshow: false,
            show_title: true,
            default_width: 800,
            default_height: 600,
            theme: "pp_default",
            overlay_gallery: false,
            social_tools: false
        });
    };
    PortfolioLayoutComponent.prototype.changeImages = function (houseIndex) {
        console.log(houseIndex);
        this.homeNumber = houseIndex;
        this.ref.detectChanges();
    };
    PortfolioLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-portfolio-layout",
            template: __webpack_require__(/*! ./portfolio-layout.component.html */ "./src/app/containers/portfolio-layout/portfolio-layout.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./portfolio-layout.component.css */ "./src/app/containers/portfolio-layout/portfolio-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PortfolioLayoutComponent);
    return PortfolioLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/services-layout/services-layout.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/containers/services-layout/services-layout.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvc2VydmljZXMtbGF5b3V0L3NlcnZpY2VzLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/containers/services-layout/services-layout.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/containers/services-layout/services-layout.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"services-box\">\n\t\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t\t<h2>Nuestros servicios</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\t\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"wow fadeInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t\t\t<i class=\"fa fa-rocket fa-3x\"></i>\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t\t\t<h4>Aptitud 1</h4>\n\t\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"wow fadeInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.9s\">\n\t\t\t\t\t\t\t<i class=\"fa fa-cogs fa-3x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"0.9s\">\n\t\t\t\t\t\t\t<h4>Aptitud 2</h4>\n\t\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t<div class=\"wow fadeInDown\" data-wow-offset=\"0\" data-wow-delay=\"1.5s\">\n\t\t\t\t\t\t\t<i class=\"fa fa-eye fa-3x\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"wow fadeInUp\" data-wow-offset=\"0\" data-wow-delay=\"1.5s\">\n\t\t\t\t\t\t\t<h4>Aptitud 3</h4>\n\t\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<h2>Nuestro Equipo</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\t\n\t\t\t\t\t<p>Bras urna felis accumsan at ultrde cesid posuere masa socis nautoque penat bus maecenas ultrices sed ipsum lorem<br>\n\t\t\t\t\tdolor sit amet sed ipsum consectetur adipisicing elit sed do eiusmod tempor incididunt.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/services/1.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/services/1.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/services/1.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"assets/images/services/1.jpg\" alt=\"\" >\n\t\t\t\t\t\t<h3>John Doe</h3>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing eil sed deiusmod tempor</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"skills\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\n\t\t\t\t\t<h2>Nuestras habilidades</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wow bounceInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br>tempor incididunt ut labore et dolore magna aliqua.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"skill\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"text-center\">\n\t\t\t\t<div class=\"col-md-6 wow fadeInRight\" data-wow-offset=\"0\" data-wow-delay=\"0.3s\">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"progress-wrap\">\n\t\t\t\t\t\t<h4>Graphic Design</h4>\n\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t  <div class=\"progress-bar  color1\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%\">\n\t\t\t\t\t\t\t<span class=\"bar-width\">85%</span>\n\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"progress-wrap\">\n\t\t\t\t\t\t<h4>HTML</h4>\n\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t  <div class=\"progress-bar color2\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 95%\">\n\t\t\t\t\t\t   <span class=\"bar-width\">95%</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"progress-wrap\">\n\t\t\t\t\t\t<h4>CSS</h4>\n\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t  <div class=\"progress-bar color3\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n\t\t\t\t\t\t\t<span class=\"bar-width\">80%</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"progress-wrap\">\n\t\t\t\t\t\t<h4>Wordpress</h4>\n\t\t\t\t\t\t<div class=\"progress\">\n\t\t\t\t\t\t  <div class=\"progress-bar color4\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%\">\n\t\t\t\t\t\t\t<span class=\"bar-width\">90%</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div><!--/.col-sm-6-->\n\t\t\t\n\t\t\t<div class=\"services-skill\">\t\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<div class=\"col-md-6 wow fadeInLeft\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\">\n\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-left\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<img src=\"assets/images/services/2.png\" alt=\"\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Bobbh DOE</h4>\n\t\t\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd Lorem ipsum dolor sit ame onsectea dipe.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-left\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<img src=\"assets/images/services/3.png\" alt=\"\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">John Doe</h4>\n\t\t\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd Lorem ipsum dolor sit ame onsectea dipe.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-left\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t<img src=\"assets/images/services/4.png\" alt=\"\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<h4 class=\"media-heading\">Hendrick</h4>\n\t\t\t\t\t\t\t\t<p>Cras urna felis accumsan at ultricesid posuere masa um socisd natoque penatibus magnisd Lorem ipsum dolor sit ame onsectea dipe.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\t\n\n\n"

/***/ }),

/***/ "./src/app/containers/services-layout/services-layout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/containers/services-layout/services-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesLayoutComponent", function() { return ServicesLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var ServicesLayoutComponent = /** @class */ (function () {
    function ServicesLayoutComponent() {
    }
    ServicesLayoutComponent.prototype.ngAfterViewInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    ServicesLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services-layout',
            template: __webpack_require__(/*! ./services-layout.component.html */ "./src/app/containers/services-layout/services-layout.component.html"),
            styles: [__webpack_require__(/*! ./services-layout.component.css */ "./src/app/containers/services-layout/services-layout.component.css")]
        })
    ], ServicesLayoutComponent);
    return ServicesLayoutComponent;
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

module.exports = __webpack_require__(/*! /Users/maurocaruso/proyectos/angular/ecjProyectos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map