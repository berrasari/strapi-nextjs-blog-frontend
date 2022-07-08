"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 8234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ posts),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Divider.js

function Divider() {
    return /*#__PURE__*/ _jsxs("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "absolute inset-0 flex items-center",
                "aria-hidden": "true",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "w-full border-t border-gray-300"
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "relative flex justify-center",
                children: /*#__PURE__*/ _jsx("span", {
                    className: "bg-white px-2 text-gray-500",
                    children: /*#__PURE__*/ _jsx("svg", {
                        className: "h-5 w-5 text-gray-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 20 20",
                        children: /*#__PURE__*/ _jsx("path", {
                            fill: "#6B7280",
                            fillRule: "evenodd",
                            d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
                            clipRule: "evenodd"
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/posts.js



function Home({ posts  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-indigo-100 h-1/3 absolute inset-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " h-1/8 sm:h-2/3"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl",
                                children: "Popupbuilder.io"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4",
                                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",
                        children: posts.data.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-center flex-col rounded-lg shadow-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "h-48 w-full object-cover",
                                            src: post.attributes.imageUrl,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex-1 bg-white p-6 flex flex-col justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-sm font-medium text-indigo-600"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "block mt-2 direction-column ",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-xl font-semibold text-gray-900 flex justify-center",
                                                                children: post.attributes.title
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "mt-3 text-base text-gray-500 flex justify-center",
                                                                children: post.attributes.content
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mt-6 flex justify-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex-shrink-0 flex justify-center"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "ml-3",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-sm font-medium text-gray-900 flex justify-center",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: post.attributes.author,
                                                                    className: "hover:underline",
                                                                    children: post.attributes.author
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "flex space-x-1 text-sm text-gray-500",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("time", {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, post.id))
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    const request = await fetch(`https://damp-scrubland-34325.herokuapp.com/api/posts/`);
    const posts = await request.json();
    return {
        props: {
            posts
        }
    };
}
/* harmony default export */ const posts = (Home);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(8234)));
module.exports = __webpack_exports__;

})();