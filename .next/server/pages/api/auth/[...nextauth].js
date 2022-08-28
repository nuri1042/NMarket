"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  })],\n  secret: process.env.JWT_SECRET\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZUUscURBQVEsQ0FBQztBQUN0QkUsRUFBQUEsU0FBUyxFQUFFLENBQ1RELGlFQUFjLENBQUM7QUFDYkUsSUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRFQ7QUFFYkMsSUFBQUEsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGYixHQUFELENBREwsQ0FEVztBQVF0QkMsRUFBQUEsTUFBTSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUs7QUFSRSxDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbWFya2V0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz85OTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aENyZWRlbnRpYWwgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcblxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXG59KTtcbiJdLCJuYW1lcyI6WyJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();