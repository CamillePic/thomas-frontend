"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/LeafLampPage",{

/***/ "./components/LeafLamp.js":
/*!********************************!*\
  !*** ./components/LeafLamp.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/LeafLamp.module.css */ \"./styles/LeafLamp.module.css\");\n/* harmony import */ var _styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _popupInfo_LeafPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popupInfo/LeafPopup */ \"./components/popupInfo/LeafPopup.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LeafLamp() {\n    _s();\n    var images = {\n        off: \"/GL_WIDESCREEN_OFF.jpg\",\n        left: \"/GL_WIDESCREEN_LEFT.jpg\",\n        right: \"/GL_WIDESCREEN_RIGHT.jpg\",\n        middle: \"/GL_WIDESCREEN_MIDDLE.jpg\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(images.off), backgroundImage = ref[0], setBackgroundImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showImage = ref1[0], setShowImage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showPopUpA = ref2[0], setShowPopUpA = ref2[1]; // Separate state for each popup\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showPopUpB = ref3[0], setShowPopUpB = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showPopUpC = ref4[0], setShowPopUpC = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"+\"), pluslessA = ref5[0], setPluslessA = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Preload the images\n        var preloadImages = Object.values(images).map(function(src) {\n            var img = new Image();\n            img.src = src;\n            return img;\n        });\n        // After preloading, set the initial backgroundImage\n        setBackgroundImage(images.off);\n        // Show the component after the images are preloaded\n        setShowImage(true);\n    }, []);\n    var handleHotspotClickA = function() {\n        if (!showPopUpA) {\n            setShowPopUpA(true);\n            setBackgroundImage(images.left);\n            setShowPopUpB(false);\n            setShowPopUpC(false);\n            setPlusless(\"-\");\n        } else {\n            setShowPopUpA(false);\n            setBackgroundImage(images.off);\n            setPlusless(\"+\");\n        }\n    };\n    var handleHotspotClickB = function() {\n        if (!showPopUpB) {\n            setShowPopUpB(true);\n            setBackgroundImage(images.middle);\n            setShowPopUpA(false);\n            setShowPopUpC(false);\n            setPlusless(\"-\");\n        } else {\n            setShowPopUpB(false);\n            setBackgroundImage(images.off);\n            setPlusless(\"+\");\n        }\n    };\n    var handleHotspotClickC = function() {\n        if (!showPopUpC) {\n            setShowPopUpC(true);\n            setBackgroundImage(images.right);\n            setShowPopUpA(false);\n            setShowPopUpB(false);\n            setPlusless(\"-\");\n        } else {\n            setShowPopUpC(false);\n            setBackgroundImage(images.off);\n            setPlusless(\"+\");\n        }\n    };\n    var handleClosePopUp = function() {\n        setBackgroundImage(images.off);\n        setTimeout(function() {\n            setShowPopUpA(false);\n            setShowPopUpB(false);\n            setShowPopUpC(false);\n        }, 200); // Set the delay time to match the fade-out duration\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().hotspots),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            style: {\n                backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n                transition: \"background-image 0.3s ease-in-out, opacity 0.3s ease-in-out\",\n                opacity: showImage ? 1 : 0,\n                height: \"100vh\",\n                backgroundSize: \"cover\",\n                backgroundPosition: \"center\",\n                backgroundRepeat: \"no-repeat\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/GL_WIDESCREEN_OFF.jpg\",\n                    width: 1,\n                    height: 1\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 112,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/GL_WIDESCREEN_MIDDLE.jpg\",\n                    width: 1,\n                    height: 1\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 113,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/GL_WIDESCREEN_LEFT.jpg\",\n                    width: 1,\n                    height: 1\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 114,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/GL_WIDESCREEN_RIGHT.jpg\",\n                    width: 1,\n                    height: 1\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 115,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().hotspotA),\n                    onClick: handleHotspotClickA,\n                    children: plusless\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().hotspotB),\n                    onClick: handleHotspotClickB,\n                    children: plusless\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().hotspotC),\n                    onClick: handleHotspotClickC,\n                    children: plusless\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popUpA),\n                    children: showPopUpA && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popupInfo_LeafPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClose: handleClosePopUp,\n                        popupText: \"Size L (~80cm)\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popupBtn),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/LeafLampInfo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                        children: \"More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                    children: \"Buy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popUpB),\n                    children: showPopUpB && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popupInfo_LeafPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClose: handleClosePopUp,\n                        popupText: \"Size S (~20cm)\",\n                        className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popup),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popupBtn),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/LeafLampInfo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                        children: \"More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                    children: \"Buy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                    lineNumber: 146,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                            lineNumber: 142,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popUpC),\n                    children: showPopUpC && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popupInfo_LeafPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClose: handleClosePopUp,\n                        popupText: \"Size M (~50cm)\",\n                        className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popup),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popupBtn),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/LeafLampInfo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                        children: \"More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                        lineNumber: 156,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                    lineNumber: 155,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_LeafLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                    children: \"Buy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                            lineNumber: 154,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n                    lineNumber: 151,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/LeafLamp.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s(LeafLamp, \"X/Rx5L3tgvX4uwCv5IID6md5LzQ=\");\n_c = LeafLamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeafLamp);\nvar _c;\n$RefreshReg$(_c, \"LeafLamp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7d0JBQUNvRCxPQUFPLEVBQUVyQixnQkFBZ0I7d0JBQUVzQixTQUFTLEVBQUMsZ0JBQWdCO3dCQUFDbkIsU0FBUyxFQUFFbkMsMEVBQVk7a0NBQ3RGLDRFQUFDa0MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFbkMsNkVBQWU7OzhDQUMvQiw4REFBQ0Usa0RBQUk7b0NBQUNzRCxJQUFJLEVBQUMsZUFBZTs4Q0FDeEIsNEVBQUNWLFFBQU07d0NBQUNYLFNBQVMsRUFBRW5DLDhFQUFnQjtrREFBRSxNQUFJOzs7Ozs0Q0FBUzs7Ozs7d0NBQzdDOzhDQUNQLDhEQUFDOEMsUUFBTTtvQ0FBQ1gsU0FBUyxFQUFFbkMsOEVBQWdCOzhDQUFFLEtBQUc7Ozs7O3dDQUFTOzs7Ozs7Z0NBQzNDOzs7Ozs0QkFDSTs7Ozs7d0JBRVI7Ozs7OztnQkFFRjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0E5SlFHLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWdLakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xlYWZMYW1wLmpzPzdkOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGVhZkxhbXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExlYWZQb3B1cCBmcm9tIFwiLi9wb3B1cEluZm8vTGVhZlBvcHVwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuXG5mdW5jdGlvbiBMZWFmTGFtcCgpIHtcblxuICBjb25zdCBpbWFnZXMgPSB7XG4gICAgb2ZmOiBcIi9HTF9XSURFU0NSRUVOX09GRi5qcGdcIixcbiAgICBsZWZ0OiBcIi9HTF9XSURFU0NSRUVOX0xFRlQuanBnXCIsXG4gICAgcmlnaHQ6IFwiL0dMX1dJREVTQ1JFRU5fUklHSFQuanBnXCIsXG4gICAgbWlkZGxlOiBcIi9HTF9XSURFU0NSRUVOX01JRERMRS5qcGdcIixcbiAgfTtcblxuXG4gIGNvbnN0IFtiYWNrZ3JvdW5kSW1hZ2UsIHNldEJhY2tncm91bmRJbWFnZV0gPSB1c2VTdGF0ZShpbWFnZXMub2ZmKTtcbiAgY29uc3QgW3Nob3dJbWFnZSwgc2V0U2hvd0ltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dQb3BVcEEsIHNldFNob3dQb3BVcEFdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXBhcmF0ZSBzdGF0ZSBmb3IgZWFjaCBwb3B1cFxuICBjb25zdCBbc2hvd1BvcFVwQiwgc2V0U2hvd1BvcFVwQl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93UG9wVXBDLCBzZXRTaG93UG9wVXBDXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BsdXNsZXNzQSwgc2V0UGx1c2xlc3NBXSA9IHVzZVN0YXRlKCcrJyk7XG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUHJlbG9hZCB0aGUgaW1hZ2VzXG4gICAgY29uc3QgcHJlbG9hZEltYWdlcyA9IE9iamVjdC52YWx1ZXMoaW1hZ2VzKS5tYXAoKHNyYykgPT4ge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgcmV0dXJuIGltZztcbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHByZWxvYWRpbmcsIHNldCB0aGUgaW5pdGlhbCBiYWNrZ3JvdW5kSW1hZ2VcbiAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLm9mZik7XG5cbiAgICAvLyBTaG93IHRoZSBjb21wb25lbnQgYWZ0ZXIgdGhlIGltYWdlcyBhcmUgcHJlbG9hZGVkXG4gICAgc2V0U2hvd0ltYWdlKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlSG90c3BvdENsaWNrQSA9ICgpID0+IHtcbiAgICBpZiAoIXNob3dQb3BVcEEpIHtcbiAgICAgIHNldFNob3dQb3BVcEEodHJ1ZSk7XG4gICAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLmxlZnQpO1xuICAgICAgc2V0U2hvd1BvcFVwQihmYWxzZSk7XG4gICAgICBzZXRTaG93UG9wVXBDKGZhbHNlKTtcbiAgICAgIHNldFBsdXNsZXNzKCctJylcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTaG93UG9wVXBBKGZhbHNlKTtcbiAgICAgIHNldEJhY2tncm91bmRJbWFnZShpbWFnZXMub2ZmKTtcbiAgICAgIHNldFBsdXNsZXNzKCcrJylcblxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVIb3RzcG90Q2xpY2tCID0gKCkgPT4ge1xuICAgIGlmICghc2hvd1BvcFVwQikge1xuICAgICAgc2V0U2hvd1BvcFVwQih0cnVlKTtcbiAgICAgIHNldEJhY2tncm91bmRJbWFnZShpbWFnZXMubWlkZGxlKTtcbiAgICAgIHNldFNob3dQb3BVcEEoZmFsc2UpO1xuICAgICAgc2V0U2hvd1BvcFVwQyhmYWxzZSk7XG4gICAgICBzZXRQbHVzbGVzcygnLScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNob3dQb3BVcEIoZmFsc2UpO1xuICAgICAgc2V0QmFja2dyb3VuZEltYWdlKGltYWdlcy5vZmYpO1xuICAgICAgc2V0UGx1c2xlc3MoJysnKVxuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlSG90c3BvdENsaWNrQyA9ICgpID0+IHtcbiAgICBpZiAoIXNob3dQb3BVcEMpIHtcbiAgICAgIHNldFNob3dQb3BVcEModHJ1ZSk7XG4gICAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLnJpZ2h0KTtcbiAgICAgIHNldFNob3dQb3BVcEEoZmFsc2UpO1xuICAgICAgc2V0U2hvd1BvcFVwQihmYWxzZSk7XG4gICAgICBzZXRQbHVzbGVzcygnLScpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvd1BvcFVwQyhmYWxzZSk7XG4gICAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLm9mZik7XG4gICAgICBzZXRQbHVzbGVzcygnKycpXG5cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VQb3BVcCA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLm9mZik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93UG9wVXBBKGZhbHNlKTtcbiAgICAgIHNldFNob3dQb3BVcEIoZmFsc2UpO1xuICAgICAgc2V0U2hvd1BvcFVwQyhmYWxzZSk7XG4gICAgfSwgMjAwKTsgLy8gU2V0IHRoZSBkZWxheSB0aW1lIHRvIG1hdGNoIHRoZSBmYWRlLW91dCBkdXJhdGlvblxuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG90c3BvdHN9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxuICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICBvcGFjaXR5OiBzaG93SW1hZ2UgPyAxIDogMCwgLy8gQXBwbHkgb3BhY2l0eSBiYXNlZCBvbiBzaG93SW1hZ2Ugc3RhdGVcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgPE5leHRJbWFnZSBzcmM9XCIvR0xfV0lERVNDUkVFTl9PRkYuanBnXCIgICB3aWR0aD17MX0gaGVpZ2h0PXsxfSAvPlxuICAgICAgPE5leHRJbWFnZSBzcmM9XCIvR0xfV0lERVNDUkVFTl9NSURETEUuanBnXCIgIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IC8+XG4gICAgICA8TmV4dEltYWdlIHNyYz1cIi9HTF9XSURFU0NSRUVOX0xFRlQuanBnXCIgICB3aWR0aD17MX0gaGVpZ2h0PXsxfSAvPlxuICAgICAgPE5leHRJbWFnZSBzcmM9XCIvR0xfV0lERVNDUkVFTl9SSUdIVC5qcGdcIiAgd2lkdGg9ezF9IGhlaWdodD17MX0gLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmhvdHNwb3RBfSBvbkNsaWNrPXtoYW5kbGVIb3RzcG90Q2xpY2tBfT5cbiAgICAgICAge3BsdXNsZXNzfVxuXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmhvdHNwb3RCfSBvbkNsaWNrPXtoYW5kbGVIb3RzcG90Q2xpY2tCfT5cbiAgICAgICAgICB7cGx1c2xlc3N9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmhvdHNwb3RDfSBvbkNsaWNrPXtoYW5kbGVIb3RzcG90Q2xpY2tDfT5cbiAgICAgICAge3BsdXNsZXNzfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3BVcEF9PlxuICAgICAgICB7c2hvd1BvcFVwQSAmJiAoXG4gICAgICAgICAgPExlYWZQb3B1cCBvbkNsb3NlPXtoYW5kbGVDbG9zZVBvcFVwfSBwb3B1cFRleHQ9XCJTaXplIEwgKH44MGNtKVwiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBCdG59PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9MZWFmTGFtcEluZm9cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5pbnNpZGVCdG59Pk1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaW5zaWRlQnRufT5CdXk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGVhZlBvcHVwPlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3BVcEJ9PlxuICAgICAgICB7c2hvd1BvcFVwQiAmJiAoXG4gICAgICAgICAgPExlYWZQb3B1cCBvbkNsb3NlPXtoYW5kbGVDbG9zZVBvcFVwfSBwb3B1cFRleHQ9XCJTaXplIFMgKH4yMGNtKVwiIGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBCdG59PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9MZWFmTGFtcEluZm9cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5pbnNpZGVCdG59Pk1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaW5zaWRlQnRufT5CdXk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGVhZlBvcHVwPlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3BVcEN9PlxuICAgICAgICB7c2hvd1BvcFVwQyAmJiAoXG4gICAgICAgICAgPExlYWZQb3B1cCBvbkNsb3NlPXtoYW5kbGVDbG9zZVBvcFVwfSBwb3B1cFRleHQ9XCJTaXplIE0gKH41MGNtKVwiIGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBCdG59PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9MZWFmTGFtcEluZm9cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5pbnNpZGVCdG59Pk1vcmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaW5zaWRlQnRufT5CdXk8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGVhZlBvcHVwPlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWZMYW1wO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJOZXh0SW1hZ2UiLCJzdHlsZXMiLCJMZWFmUG9wdXAiLCJMaW5rIiwiTGVhZkxhbXAiLCJpbWFnZXMiLCJvZmYiLCJsZWZ0IiwicmlnaHQiLCJtaWRkbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZXRCYWNrZ3JvdW5kSW1hZ2UiLCJzaG93SW1hZ2UiLCJzZXRTaG93SW1hZ2UiLCJzaG93UG9wVXBBIiwic2V0U2hvd1BvcFVwQSIsInNob3dQb3BVcEIiLCJzZXRTaG93UG9wVXBCIiwic2hvd1BvcFVwQyIsInNldFNob3dQb3BVcEMiLCJwbHVzbGVzc0EiLCJzZXRQbHVzbGVzc0EiLCJwcmVsb2FkSW1hZ2VzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwic3JjIiwiaW1nIiwiSW1hZ2UiLCJoYW5kbGVIb3RzcG90Q2xpY2tBIiwic2V0UGx1c2xlc3MiLCJoYW5kbGVIb3RzcG90Q2xpY2tCIiwiaGFuZGxlSG90c3BvdENsaWNrQyIsImhhbmRsZUNsb3NlUG9wVXAiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaG90c3BvdHMiLCJjb250YWluZXIiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiaGVpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0Iiwid2lkdGgiLCJidXR0b24iLCJob3RzcG90QSIsIm9uQ2xpY2siLCJwbHVzbGVzcyIsImhvdHNwb3RCIiwiaG90c3BvdEMiLCJwb3BVcEEiLCJvbkNsb3NlIiwicG9wdXBUZXh0IiwicG9wdXBCdG4iLCJocmVmIiwiaW5zaWRlQnRuIiwicG9wVXBCIiwicG9wdXAiLCJwb3BVcEMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LeafLamp.js\n");

/***/ })

});