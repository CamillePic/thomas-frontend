"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/BranchLampPage",{

/***/ "./components/BranchLamp.js":
/*!**********************************!*\
  !*** ./components/BranchLamp.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/BranchLamp.module.css */ \"./styles/BranchLamp.module.css\");\n/* harmony import */ var _styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _popupInfo_LeafPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popupInfo/LeafPopup */ \"./components/popupInfo/LeafPopup.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction BranchLamp() {\n    _s();\n    var images = {\n        off: \"/BL_WIDESCREEN_OFF.jpg\",\n        on: \"/BL_WIDESCREEN_ON.jpg\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(images.off), backgroundImage = ref[0], setBackgroundImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showImage = ref1[0], setShowImage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showPopUpA = ref2[0], setShowPopUpA = ref2[1]; // Separate state for each popup\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"+\"), pluslessA = ref3[0], setPluslessA = ref3[1];\n    var handleHotspotClickA = function() {\n        if (!showPopUpA) {\n            setShowPopUpA(true);\n            setBackgroundImage(images.on);\n            setPluslessA;\n        } else {\n            setShowPopUpA(false);\n            setBackgroundImage(images.off);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Preload the images\n        var preloadImages = Object.values(images).map(function(src) {\n            var img = new Image();\n            img.src = src;\n            return img;\n        });\n        // After preloading, set the initial backgroundImage\n        setBackgroundImage(images.off);\n        // Show the component after the images are preloaded\n        setShowImage(true);\n    }, []);\n    var handleClosePopUp = function() {\n        setBackgroundImage(images.off);\n        setTimeout(function() {\n            setShowPopUpA(false);\n        }, 200); // Set the delay time to match the fade-out duration\n    };\n    BranchLamp.category = \"objects\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            style: {\n                backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n                transition: \"background-image 0.3s ease-in-out, opacity 0.3s ease-in-out\",\n                opacity: showImage ? 1 : 0,\n                height: \"100vh\",\n                backgroundSize: \"cover\",\n                backgroundPosition: \"center\",\n                backgroundRepeat: \"no-repeat\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().hotspotA),\n                    onClick: handleHotspotClickA\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popUpA),\n                    children: showPopUpA && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popupInfo_LeafPopup__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClose: handleClosePopUp,\n                        popupText: \"Branch Lamp\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().popupBtn),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/BranchLampInfo\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                        children: \"More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_BranchLamp_module_css__WEBPACK_IMPORTED_MODULE_5___default().insideBtn),\n                                    children: \"Buy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/camillepicard/Documents/Thomas/frontend/components/BranchLamp.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(BranchLamp, \"vL9BkzespUl8Tjn0ZkChtnc7eh4=\");\n_c = BranchLamp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BranchLamp);\nvar _c;\n$RefreshReg$(_c, \"BranchLamp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBTTtvQkFDTFQsU0FBUyxFQUFFM0IsK0VBQWU7b0JBQzFCc0MsT0FBTyxFQUFFdkIsbUJBQW1COzs7Ozt3QkFDcEI7OEJBRVYsOERBQUNXLEtBQUc7b0JBQUNDLFNBQVMsRUFBRTNCLDZFQUFhOzhCQUMxQlcsVUFBVSxrQkFDVCw4REFBQ1YsNERBQVM7d0JBQUN1QyxPQUFPLEVBQUVqQixnQkFBZ0I7d0JBQUVrQixTQUFTLEVBQUMsYUFBYTtrQ0FDM0QsNEVBQUNmLEtBQUc7NEJBQUNDLFNBQVMsRUFBRTNCLCtFQUFlOzs4Q0FDN0IsOERBQUNFLGtEQUFJO29DQUFDeUMsSUFBSSxFQUFDLGlCQUFpQjs4Q0FDMUIsNEVBQUNQLFFBQU07d0NBQUNULFNBQVMsRUFBRTNCLGdGQUFnQjtrREFBRSxNQUFJOzs7Ozs0Q0FBUzs7Ozs7d0NBQzdDOzhDQUNQLDhEQUFDb0MsUUFBTTtvQ0FBQ1QsU0FBUyxFQUFFM0IsZ0ZBQWdCOzhDQUFFLEtBQUc7Ozs7O3dDQUFTOzs7Ozs7Z0NBQzdDOzs7Ozs0QkFDSTs7Ozs7d0JBRVY7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FsRlFHLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQW9GbkIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JyYW5jaExhbXAuanM/NTdlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0JyYW5jaExhbXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExlYWZQb3B1cCBmcm9tIFwiLi9wb3B1cEluZm8vTGVhZlBvcHVwXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEJyYW5jaExhbXAoKSB7XG4gIGNvbnN0IGltYWdlcyA9IHtcbiAgICBvZmY6IFwiL0JMX1dJREVTQ1JFRU5fT0ZGLmpwZ1wiLFxuICAgIG9uOiBcIi9CTF9XSURFU0NSRUVOX09OLmpwZ1wiLFxuICB9O1xuXG4gIGNvbnN0IFtiYWNrZ3JvdW5kSW1hZ2UsIHNldEJhY2tncm91bmRJbWFnZV0gPSB1c2VTdGF0ZShpbWFnZXMub2ZmKTtcbiAgY29uc3QgW3Nob3dJbWFnZSwgc2V0U2hvd0ltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dQb3BVcEEsIHNldFNob3dQb3BVcEFdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTZXBhcmF0ZSBzdGF0ZSBmb3IgZWFjaCBwb3B1cFxuICBjb25zdCBbcGx1c2xlc3NBLCBzZXRQbHVzbGVzc0FdID0gdXNlU3RhdGUoJysnKTtcblxuXG4gIGNvbnN0IGhhbmRsZUhvdHNwb3RDbGlja0EgPSAoKSA9PiB7XG4gICAgaWYgKCFzaG93UG9wVXBBKSB7XG4gICAgICBzZXRTaG93UG9wVXBBKHRydWUpO1xuICAgICAgc2V0QmFja2dyb3VuZEltYWdlKGltYWdlcy5vbik7XG4gICAgICBzZXRQbHVzbGVzc0FcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvd1BvcFVwQShmYWxzZSk7XG4gICAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLm9mZik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUHJlbG9hZCB0aGUgaW1hZ2VzXG4gICAgY29uc3QgcHJlbG9hZEltYWdlcyA9IE9iamVjdC52YWx1ZXMoaW1hZ2VzKS5tYXAoKHNyYykgPT4ge1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgcmV0dXJuIGltZztcbiAgICB9KTtcblxuICAgIC8vIEFmdGVyIHByZWxvYWRpbmcsIHNldCB0aGUgaW5pdGlhbCBiYWNrZ3JvdW5kSW1hZ2VcbiAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLm9mZik7XG5cbiAgICAvLyBTaG93IHRoZSBjb21wb25lbnQgYWZ0ZXIgdGhlIGltYWdlcyBhcmUgcHJlbG9hZGVkXG4gICAgc2V0U2hvd0ltYWdlKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VQb3BVcCA9ICgpID0+IHtcbiAgICBzZXRCYWNrZ3JvdW5kSW1hZ2UoaW1hZ2VzLm9mZik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93UG9wVXBBKGZhbHNlKTtcbiAgICB9LCAyMDApOyAvLyBTZXQgdGhlIGRlbGF5IHRpbWUgdG8gbWF0Y2ggdGhlIGZhZGUtb3V0IGR1cmF0aW9uXG4gIH07XG5cbiAgQnJhbmNoTGFtcC5jYXRlZ29yeSA9IFwib2JqZWN0c1wiO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxuICAgICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dCwgb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgb3BhY2l0eTogc2hvd0ltYWdlID8gMSA6IDAsIC8vIEFwcGx5IG9wYWNpdHkgYmFzZWQgb24gc2hvd0ltYWdlIHN0YXRlXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhvdHNwb3RBfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUhvdHNwb3RDbGlja0F9XG4gICAgICAgID48L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcFVwQX0+XG4gICAgICAgICAge3Nob3dQb3BVcEEgJiYgKFxuICAgICAgICAgICAgPExlYWZQb3B1cCBvbkNsb3NlPXtoYW5kbGVDbG9zZVBvcFVwfSBwb3B1cFRleHQ9XCJCcmFuY2ggTGFtcFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwQnRufT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0JyYW5jaExhbXBJbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmluc2lkZUJ0bn0+TW9yZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmluc2lkZUJ0bn0+QnV5PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MZWFmUG9wdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJhbmNoTGFtcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmV4dEltYWdlIiwic3R5bGVzIiwiTGVhZlBvcHVwIiwiTGluayIsIkJyYW5jaExhbXAiLCJpbWFnZXMiLCJvZmYiLCJvbiIsImJhY2tncm91bmRJbWFnZSIsInNldEJhY2tncm91bmRJbWFnZSIsInNob3dJbWFnZSIsInNldFNob3dJbWFnZSIsInNob3dQb3BVcEEiLCJzZXRTaG93UG9wVXBBIiwicGx1c2xlc3NBIiwic2V0UGx1c2xlc3NBIiwiaGFuZGxlSG90c3BvdENsaWNrQSIsInByZWxvYWRJbWFnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJzcmMiLCJpbWciLCJJbWFnZSIsImhhbmRsZUNsb3NlUG9wVXAiLCJzZXRUaW1lb3V0IiwiY2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiaGVpZ2h0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYnV0dG9uIiwiaG90c3BvdEEiLCJvbkNsaWNrIiwicG9wVXBBIiwib25DbG9zZSIsInBvcHVwVGV4dCIsInBvcHVwQnRuIiwiaHJlZiIsImluc2lkZUJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BranchLamp.js\n");

/***/ })

});