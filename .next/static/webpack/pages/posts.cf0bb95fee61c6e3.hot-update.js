"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetStaticProps\": function() { return /* binding */ GetStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_berra_Desktop_STRAPI_APP_REACT_BLOG_strapi_nextjs_blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_berra_Desktop_STRAPI_APP_REACT_BLOG_strapi_nextjs_blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_berra_Desktop_STRAPI_APP_REACT_BLOG_strapi_nextjs_blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Blog */ \"./components/Blog.js\");\n\n\n\n\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"bg-indigo-100 h-1/3 absolute inset-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \" h-1/8 sm:h-2/3\"\n                }, void 0, false, {\n                    fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                    lineNumber: 8,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"relative max-w-7xl mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl\",\n                                children: \"Popupbuilder.io\"\n                            }, void 0, false, {\n                                fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                                lineNumber: 12,\n                                columnNumber: 6\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4\",\n                                children: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                                lineNumber: 13,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                        lineNumber: 11,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none\",\n                        children: posts.data.map(function(post) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center flex-col rounded-lg shadow-lg overflow-hidden\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Blog__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    post: post\n                                }, void 0, false, {\n                                    fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 8\n                                }, _this)\n                            }, post.id, false, {\n                                fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                                lineNumber: 20,\n                                columnNumber: 6\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/posts.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this);\n}\n_c = Home;\nfunction GetStaticProps() {\n    return _GetStaticProps.apply(this, arguments);\n}\nfunction _GetStaticProps() {\n    _GetStaticProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_berra_Desktop_STRAPI_APP_REACT_BLOG_strapi_nextjs_blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var request, posts;\n        return _Users_berra_Desktop_STRAPI_APP_REACT_BLOG_strapi_nextjs_blog_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://damp-scrubland-34325.herokuapp.com/api/posts/\");\n                case 2:\n                    request = _ctx.sent;\n                    _ctx.next = 5;\n                    return request.json();\n                case 5:\n                    posts = _ctx.sent;\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            posts: posts\n                        }\n                    });\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _GetStaticProps.apply(this, arguments);\n}\n_c1 = GetStaticProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"GetStaticProps\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUFxQztBQUVyQyxTQUFTQyxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFFcEIscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDRFQUE0RTs7MEJBQzFGLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzBCQUNwRCw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlCQUFrQjs7Ozs7d0JBQUc7Ozs7O29CQUMvQjswQkFDTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7a0NBQzFDLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsYUFBYTs7MENBQzNCLDhEQUFDQyxJQUFFO2dDQUFDRCxTQUFTLEVBQUMsa0VBQWtFOzBDQUFDLGlCQUFlOzs7OztvQ0FBSzswQ0FDckcsOERBQUNFLEdBQUM7Z0NBQUNGLFNBQVMsRUFBQyxzREFBc0Q7MENBQUMsd0dBRXBFOzs7OztvQ0FBSTs7Ozs7OzRCQUNDO2tDQUNOLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZ0VBQWdFO2tDQUM3RUYsS0FBSyxDQUFDSyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO2lEQUVyQiw4REFBQ04sS0FBRztnQ0FBZUMsU0FBUyxFQUFDLG1FQUFtRTswQ0FFOUYsNEVBQUNKLHdEQUFJO29DQUFDUyxJQUFJLEVBQUVBLElBQUk7Ozs7O3lDQUFJOytCQUZaQSxJQUFJLENBQUNDLEVBQUU7Ozs7cUNBS1Y7eUJBR04sQ0FDQTs7Ozs7NEJBRUk7Ozs7OztvQkFDRDs7Ozs7O1lBQ0QsQ0FDTjtDQUNEO0FBaENRVCxLQUFBQSxJQUFJO0FBa0NOLFNBQWVVLGNBQWM7V0FBZEEsZUFBYztDQVNuQztTQVRxQkEsZUFBYztJQUFkQSxlQUFjLEdBQTdCLHlSQUFnQztZQUNoQ0MsT0FBTyxFQUNQVixLQUFLOzs7OzsyQkFEV1csS0FBSyxDQUFFLHVEQUFxRCxDQUFFOztvQkFBOUVELE9BQU8sWUFBdUU7OzJCQUNoRUEsT0FBTyxDQUFDRSxJQUFJLEVBQUU7O29CQUE1QlosS0FBSyxZQUF1QjtpREFDM0I7d0JBQ05hLEtBQUssRUFBRTs0QkFDTmIsS0FBSyxFQUFMQSxLQUFLO3lCQUNMO3FCQUVEOzs7Ozs7S0FDRDtXQVRxQlMsZUFBYzs7QUFBZEEsTUFBQUEsY0FBYztBQVdwQywrREFBZVYsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy5qcz81M2ZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZydcblxuZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH0pIHtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctdHJhbnNwYXJlbnQgcHQtMTYgcGItMjAgcHgtNCBzbTpweC02IGxnOnB0LTI0IGxnOnBiLTI4IGxnOnB4LThcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTEwMCBoLTEvMyBhYnNvbHV0ZSBpbnNldC0wXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiICBoLTEvOCBzbTpoLTIvM1wiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXctN3hsIG14LWF1dG9cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsXCI+UG9wdXBidWlsZGVyLmlvPC9oMj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0zIG1heC13LTJ4bCBteC1hdXRvIHRleHQteGwgdGV4dC1ncmF5LTUwMCBzbTptdC00XCI+XG5cdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gSXBzYSBsaWJlcm8gbGFib3JlIG5hdHVzIGF0cXVlLCBkdWNpbXVzIHNlZC5cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTEyIG1heC13LWxnIG14LWF1dG8gZ3JpZCBnYXAtNSBsZzpncmlkLWNvbHMtMyBsZzptYXgtdy1ub25lXCI+XG5cdFx0XHRcdFx0e3Bvc3RzLmRhdGEubWFwKChwb3N0KSA9PiAoXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8ZGl2IGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCByb3VuZGVkLWxnIHNoYWRvdy1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cblxuXHRcdFx0XHRcdFx0XHQ8QmxvZyBwb3N0PXtwb3N0fSAvPlxuXG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KX1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZXRTdGF0aWNQcm9wcygpIHtcblx0Y29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL2RhbXAtc2NydWJsYW5kLTM0MzI1Lmhlcm9rdWFwcC5jb20vYXBpL3Bvc3RzL2ApO1xuXHRjb25zdCBwb3N0cyA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRwb3N0cyxcblx0XHR9LFxuXHRcdFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsiQmxvZyIsIkhvbWUiLCJwb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImRhdGEiLCJtYXAiLCJwb3N0IiwiaWQiLCJHZXRTdGF0aWNQcm9wcyIsInJlcXVlc3QiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.js\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_async_to_generator.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_async_to_generator.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _asyncToGenerator; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fYXN5bmNfdG9fZ2VuZXJhdG9yLm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX2FzeW5jX3RvX2dlbmVyYXRvci5tanM/ZTU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_async_to_generator.mjs\n"));

/***/ })

});