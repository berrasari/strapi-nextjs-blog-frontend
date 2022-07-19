"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 7662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ posts),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Blog.js




function Blog({ post  }) {
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/ _jsx("img", {
                    className: "h-48 w-full object-cover",
                    src: post.attributes.coverlink,
                    alt: ""
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "flex-1 bg-white p-6 flex flex-col justify-between items-center",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "flex-1 items-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "text-sm font-medium text-indigo-600"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "block mt-2 direction-column ",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "text-xl font-semibold text-gray-900 flex justify-center",
                                        children: post.attributes.title
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "mt-3 text-base text-gray-500 flex justify-center",
                                        children: post.attributes.description
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mt-6 flex justify-center",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "flex-shrink-0 flex justify-center"
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "ml-3",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "text-sm font-medium text-gray-900 flex justify-center",
                                    children: /*#__PURE__*/ _jsx("div", {
                                        href: post.attributes.author,
                                        className: "hover:underline",
                                        children: post.attributes.author
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Blog = ((/* unused pure expression or super */ null && (Blog)));

;// CONCATENATED MODULE: ./pages/posts.js





async function getStaticProps() {
    const request = await fetch(`https://damp-scrubland-34325.herokuapp.com/api/posts/`);
    const posts = await request.json();
    return {
        props: {
            posts
        }
    };
}
function Home({ posts  }) {
    const { 0: render , 1: setRender  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setRender(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-transparent h-1/3 sm:h-2/3"
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
                                children: "From the blog"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4",
                                children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none",
                        children: posts.data.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col rounded-lg items-center shadow-lg overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/posts/" + post.attributes.slug,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        class: "transition-all duration-150 w-full px-4 py-6 ",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            class: "flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "md:flex-shrink-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: post.attributes.coverlink,
                                                        alt: "Blog Cover",
                                                        class: "object-fill w-full rounded-lg rounded-b-none md:h-56"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "flex items-center justify-between px-4 py-2 overflow-hidden",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        class: "flex flex-row items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                class: "text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                class: "text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                class: "text-xs font-medium text-gray-500 flex flex-row items-center"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                    class: "border-gray-300"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    class: "flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        class: "hover:underline",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            class: "text-2xl font-bold tracking-normal text-gray-800",
                                                            children: post.attributes.title
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                    class: "border-gray-300"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    class: "flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700",
                                                    children: post.attributes.description
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                    class: "border-gray-300"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                                                    class: "px-4 py-2 mt-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        class: "flex items-center justify-between",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            class: "flex items-center flex-1",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                class: "flex flex-col mx-2",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        href: "",
                                                                        class: "font-semibold text-gray-700 hover:underline",
                                                                        children: post.attributes.author
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        class: "text-xs text-gray-600",
                                                                        children: post.attributes.createdAt
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            }, post.id))
                    })
                ]
            })
        ]
    });
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
var __webpack_exports__ = __webpack_require__.X(0, [311,952,910,664], () => (__webpack_exec__(7662)));
module.exports = __webpack_exports__;

})();