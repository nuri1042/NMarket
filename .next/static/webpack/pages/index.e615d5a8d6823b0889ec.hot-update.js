"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainBanner */ \"./components/MainBanner.js\");\n/* harmony import */ var _components_SubBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SubBanner */ \"./components/SubBanner.js\");\n/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ItemList */ \"./components/ItemList.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kimnuri/Desktop/Nuri/Front/market/NMarket/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  var API = \"http://localhost:3000/api/getProductInfo\"; // postman에 mock server 를 생성 후 상품 데이터를 받아옴\n  // useEffect(() => {\n  //   axios\n  //     .get(\n  //       \"https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products\"\n  //     )\n  //     .then((result) => {\n  //       setProduct(result.data.products);\n  //     })\n  //     .catch((err) => {\n  //       console.error(\"error 발생 : \", err);\n  //     });\n  // }, []);\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default().get(API).then(function (res) {\n      setProduct(res.data);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    product: product,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"NMarket\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      id: \"body\",\n      style: {\n        height: \"100vh\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        id: \"banner\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_MainBanner__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 27\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_SubBanner__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ItemList__WEBPACK_IMPORTED_MODULE_6__.default, {\n        product: product\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"DwAZUasqmv76dZQcUVyN5saSLPo=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxTQUFTUyxJQUFULEdBQWdCO0FBQUE7O0FBQ2Qsa0JBQThCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQSxNQUFPUyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLE1BQU1DLEdBQUcsR0FBRywwQ0FBWixDQUZjLENBSWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkRyxJQUFBQSxnREFBQSxDQUFVTyxHQUFWLEVBQWVFLElBQWYsQ0FBb0IsVUFBQ0MsR0FBRCxFQUFTO0FBQzNCSixNQUFBQSxVQUFVLENBQUNJLEdBQUcsQ0FBQ0MsSUFBTCxDQUFWO0FBQ0QsS0FGRDtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDRSw4REFBQywwREFBRDtBQUFXLFdBQU8sRUFBRU4sT0FBcEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sZUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssUUFBRSxFQUFDLE1BQVI7QUFBZSxXQUFLLEVBQUU7QUFBRU8sUUFBQUEsTUFBTSxFQUFFO0FBQVYsT0FBdEI7QUFBQSw4QkFDRTtBQUFLLFVBQUUsRUFBQyxRQUFSO0FBQUEsK0JBQWtCLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMseURBQUQ7QUFBVSxlQUFPLEVBQUVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQXBDUUQ7O0tBQUFBO0FBc0NULCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBNYWluQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5CYW5uZXJcIjtcbmltcG9ydCBTdWJCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3ViQmFubmVyXCI7XG5pbXBvcnQgSXRlbUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvSXRlbUxpc3RcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0UHJvZHVjdEluZm9cIjtcblxuICAvLyBwb3N0bWFu7JeQIG1vY2sgc2VydmVyIOulvCDsg53shLEg7ZuEIOyDge2SiCDrjbDsnbTthLDrpbwg67Cb7JWE7Ji0XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgYXhpb3NcbiAgLy8gICAgIC5nZXQoXG4gIC8vICAgICAgIFwiaHR0cHM6Ly9kZWU4Yzc2Yi1lYzI1LTRmNDQtYjlmYi1hZjA2OWNhMjVmOTgubW9jay5wc3Rtbi5pby9wcm9kdWN0c1wiXG4gIC8vICAgICApXG4gIC8vICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gIC8vICAgICAgIHNldFByb2R1Y3QocmVzdWx0LmRhdGEucHJvZHVjdHMpO1xuICAvLyAgICAgfSlcbiAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciDrsJzsg50gOiBcIiwgZXJyKTtcbiAgLy8gICAgIH0pO1xuICAvLyB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KEFQSSkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRQcm9kdWN0KHJlcy5kYXRhKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcExheW91dCBwcm9kdWN0PXtwcm9kdWN0fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8dGl0bGU+Tk1hcmtldDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPVwiYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgICA8ZGl2IGlkPVwiYmFubmVyXCI+ezxNYWluQmFubmVyIC8+fTwvZGl2PlxuICAgICAgICA8U3ViQmFubmVyIC8+XG4gICAgICAgIDxJdGVtTGlzdCBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9BcHBMYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFwcExheW91dCIsIkhlYWQiLCJheGlvcyIsIk1haW5CYW5uZXIiLCJTdWJCYW5uZXIiLCJJdGVtTGlzdCIsIkhvbWUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsIkFQSSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});