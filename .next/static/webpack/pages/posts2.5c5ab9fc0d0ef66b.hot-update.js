"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts2",{

/***/ "./pages/posts2.js":
/*!*************************!*\
  !*** ./pages/posts2.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Blog */ \"./components/Blog.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), render = ref[0], setRender = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setRender(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: posts.data.map(function(post) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center flex-col rounded-lg shadow-lg overflow-hidden\",\n                children: [\n                    \"+\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/posts/\" + post.attributes.slug,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-48 w-full object-cover\",\n                                    src: post.attributes.coverlink,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts2.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 3\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xl font-semibold text-gray-900 flex justify-center\",\n                                    children: post.attributes.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts2.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 3\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-3 text-base text-gray-500 flex justify-center\",\n                                    children: post.attributes.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts2.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 9\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts2.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts2.js\",\n                        lineNumber: 32,\n                        columnNumber: 1\n                    }, _this),\n                    \"+\"\n                ]\n            }, post.id, true, {\n                fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts2.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts2.js\",\n        lineNumber: 27,\n        columnNumber: 4\n    }, this);\n}\n_s(Home, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0czIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUNmO0FBQ1E7O0FBYXJDLFNBQVNLLElBQUksQ0FBQyxLQUFTLEVBQUc7UUFBWixLQUFPLEdBQVAsS0FBUyxDQUFQQyxLQUFLOzs7SUFDcEIsSUFBNEJMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENNLE1BQU0sR0FBZU4sR0FBZSxHQUE5QixFQUFFTyxTQUFTLEdBQUlQLEdBQWUsR0FBbkI7SUFFdEJDLGdEQUFTLENBQUMsV0FBTTtRQUNiTSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUdBLDhEQUFDQyxLQUFHO2tCQUNGSCxLQUFLLENBQUNJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUk7aUNBRXJCLDhEQUFDSCxLQUFHO2dCQUFlSSxTQUFTLEVBQUMsbUVBQW1FOztvQkFBQyxHQUVyRztrQ0FBQSw4REFBQ1Ysa0RBQUk7d0JBQUNXLElBQUksRUFBRSxTQUFTLEdBQUdGLElBQUksQ0FBQ0csVUFBVSxDQUFDQyxJQUFJO2tDQUNwQyw0RUFBQ0MsR0FBQzs7OENBRVIsOERBQUNDLEtBQUc7b0NBQUVMLFNBQVMsRUFBQywwQkFBMEI7b0NBQUNNLEdBQUcsRUFBRVAsSUFBSSxDQUFDRyxVQUFVLENBQUNLLFNBQVM7b0NBQUVDLEdBQUcsRUFBQyxFQUFFOzs7Ozt5Q0FBRzs4Q0FDcEYsOERBQUNaLEtBQUc7b0NBQUNJLFNBQVMsRUFBQyx5REFBeUQ7OENBQUVELElBQUksQ0FBQ0csVUFBVSxDQUFDTyxLQUFLOzs7Ozt5Q0FBTzs4Q0FDaEcsOERBQUNiLEtBQUc7b0NBQUNJLFNBQVMsRUFBQyxrREFBa0Q7OENBQUVELElBQUksQ0FBQ0csVUFBVSxDQUFDUSxXQUFXOzs7Ozt5Q0FBTzs7Ozs7O2lDQUV2Rzs7Ozs7NkJBQ0c7b0JBQUEsR0FHSjs7ZUFiU1gsSUFBSSxDQUFDWSxFQUFFOzs7O3FCQWFWO1NBR04sQ0FDQTs7Ozs7WUFFSSxDQUVSO0NBRUE7R0FwQ1FuQixJQUFJO0FBQUpBLEtBQUFBLElBQUk7O0FBc0NiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzMi5qcz9iNzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEJsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nJ1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblx0Y29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2RhbXAtc2NydWJsYW5kLTM0MzI1Lmhlcm9rdWFwcC5jb20vYXBpL3Bvc3RzL2ApO1xuXHRjb25zdCBwb3N0cyA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRwb3N0cyxcblx0XHR9LFxuXHRcdFxuXHR9XG59XG5mdW5jdGlvbiBIb21lKHsgcG9zdHMgfSkgIHtcblx0Y29uc3QgW3JlbmRlciwgc2V0UmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIFxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldFJlbmRlcih0cnVlKTtcbiAgIH0sIFtdKTtcblxuICAgcmV0dXJuIChcblx0XG5cdFx0XHRcblx0XHRcdDxkaXYgPlxuXHRcdFx0XHR7cG9zdHMuZGF0YS5tYXAoKHBvc3QpID0+IChcblx0XHRcdFx0XHRcblx0XHRcdFx0PGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgcm91bmRlZC1sZyBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4rXG48TGluayBocmVmPXtcIi9wb3N0cy9cIiArIHBvc3QuYXR0cmlidXRlcy5zbHVnfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgICBcblx0XHQ8aW1nICBjbGFzc05hbWU9XCJoLTQ4IHctZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9e3Bvc3QuYXR0cmlidXRlcy5jb3Zlcmxpbmt9IGFsdD1cIlwiIC8+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBmbGV4IGp1c3RpZnktY2VudGVyXCI+e3Bvc3QuYXR0cmlidXRlcy50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHRleHQtYmFzZSB0ZXh0LWdyYXktNTAwIGZsZXgganVzdGlmeS1jZW50ZXJcIj57cG9zdC5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICBcbiAgPC9hPlxuICA8L0xpbms+XG5cbitcblx0XHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdClcblx0XHRcdFx0KX1cblxuXHRcdFx0PC9kaXY+XG5cdFxuKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkJsb2ciLCJIb21lIiwicG9zdHMiLCJyZW5kZXIiLCJzZXRSZW5kZXIiLCJkaXYiLCJkYXRhIiwibWFwIiwicG9zdCIsImNsYXNzTmFtZSIsImhyZWYiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsImEiLCJpbWciLCJzcmMiLCJjb3ZlcmxpbmsiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts2.js\n"));

/***/ })

});