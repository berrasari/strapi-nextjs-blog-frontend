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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home({ posts  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Recent Posts\"\n            }, void 0, false, {\n                fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, this),\n            posts.data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Title : \",\n                                post.attributes.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/index.js\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \"Author : \",\n                                post.attributes.author\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/index.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Content : \",\n                                post.attributes.content\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/index.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, posts.id, true, {\n                    fileName: \"/Users/berra/Desktop/STRAPI-APP-REACT-BLOG/strapi-nextjs-blog-frontend/pages/index.js\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this)),\n            \";\"\n        ]\n    }, void 0, true);\n}\nasync function getServerSideProps() {\n    const request = await fetch(`https://damp-scrubland-34325.herokuapp.com/api/posts/`);\n    const posts = await request.json();\n    return {\n        props: {\n            posts\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFBQSxTQUFTQSxJQUFJLENBQUMsRUFBQ0MsS0FBSyxHQUFDLEVBQUU7SUFDdEIscUJBQ0M7OzBCQUVFLDhEQUFDQyxJQUFFOzBCQUFDLGNBQVk7Ozs7O29CQUFLO1lBQ2hCRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxJQUFJLGlCQUNsQiw4REFBQ0MsS0FBRzs7c0NBQ0YsOERBQUNDLElBQUU7O2dDQUFDLFVBQVE7Z0NBQUNGLElBQUksQ0FBQ0csVUFBVSxDQUFDQyxLQUFLOzs7Ozs7Z0NBQU07c0NBQ3hDLDhEQUFDQyxJQUFFOztnQ0FBQyxXQUFTO2dDQUFDTCxJQUFJLENBQUNHLFVBQVUsQ0FBQ0csTUFBTTs7Ozs7O2dDQUFNO3NDQUMxQyw4REFBQ0wsS0FBRzs7Z0NBQUMsWUFBVTtnQ0FBQ0QsSUFBSSxDQUFDRyxVQUFVLENBQUNJLE9BQU87Ozs7OztnQ0FBTzs7bUJBSHRDWCxLQUFLLENBQUNZLEVBQUU7Ozs7d0JBSVosQ0FDTjtZQUFDLEdBTVQ7O29CQUFHLENBQ0g7Q0FDRDtBQUVNLGVBQWVDLGtCQUFrQixHQUFHO0lBQzFDLE1BQU1DLE9BQU8sR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0lBQ3BGLE1BQU1mLEtBQUssR0FBRyxNQUFNYyxPQUFPLENBQUNFLElBQUksRUFBRTtJQUNsQyxPQUFPO1FBQ05DLEtBQUssRUFBRTtZQUNOakIsS0FBSztTQUNMO0tBQ0Q7Q0FDRDtBQUVELGlFQUFlRCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gSG9tZSh7cG9zdHN9KSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdFxuXHRcdFx0XHQ8aDE+UmVjZW50IFBvc3RzPC9oMT5cbiAgICAgICAge3Bvc3RzLmRhdGEubWFwKHBvc3QgPT4oXG4gICAgICAgICAgPGRpdiBrZXk9e3Bvc3RzLmlkfT5cbiAgICAgICAgICAgIDxoMj5UaXRsZSA6IHtwb3N0LmF0dHJpYnV0ZXMudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxoMz5BdXRob3IgOiB7cG9zdC5hdHRyaWJ1dGVzLmF1dGhvcn08L2gzPlxuICAgICAgICAgICAgPGRpdj5Db250ZW50IDoge3Bvc3QuYXR0cmlidXRlcy5jb250ZW50fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX07XG5cdFx0XHRcdFxuXHRcdFx0ICBcblxuXHRcdFx0XG5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuXHRjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZGFtcC1zY3J1YmxhbmQtMzQzMjUuaGVyb2t1YXBwLmNvbS9hcGkvcG9zdHMvYCk7XG5cdGNvbnN0IHBvc3RzID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBvc3RzLFxuXHRcdH0sXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJIb21lIiwicG9zdHMiLCJoMSIsImRhdGEiLCJtYXAiLCJwb3N0IiwiZGl2IiwiaDIiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJoMyIsImF1dGhvciIsImNvbnRlbnQiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcXVlc3QiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();