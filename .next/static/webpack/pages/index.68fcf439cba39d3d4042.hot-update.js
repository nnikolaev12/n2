webpackHotUpdate_N_E("pages/index",{

/***/ "./components/project-item.js":
/*!************************************!*\
  !*** ./components/project-item.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/itcorner/Documents/dev/n2/components/project-item.js\";\n\nfunction ProjectItem(props) {\n  var _this = this;\n\n  var images_dir = \"img/\";\n  var png = images_dir + \"projects/\" + props.data.thumbnail;\n  var webp = png.slice(0, -3) + \"webp\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-col md:flex-row mb-10\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full lg:w-1/4\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"picture\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"source\", {\n          srcSet: webp,\n          type: \"image/webp\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"source\", {\n          srcSet: png,\n          type: \"image/png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"mx-auto lg:mx-0\",\n          width: \"250\",\n          height: \"250\",\n          srcSet: png,\n          alt: props.data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full lg:w-3/4 text-center lg:text-left flex flex-col justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"uppercase text-2xl tracking-wider my-4 lg:my-0\",\n        children: props.data.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: props.data.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: props.data.tech.map(function (item) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"inline-block rounded p-2 bg-black text-green-400 italic m-4\",\n            children: item\n          }, item, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\n_c = ProjectItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectItem);\n/*\n        <div className=\"relative m-2\">\n            <picture>\n                <source srcSet={ webp } type=\"image/webp\" />\n                <source srcSet={ jpg } type=\"image/jpg\" /> \n                <img width=\"900\" height=\"900\" srcSet={ jpg } alt={ props.data.title } />\n            </picture>\n            <a className=\"bg-black bg-opacity-80 p-6 text-white uppercase tracking-wider absolute bottom-0 w-full\" href={props.data.url} title={ props.data.title }>{ props.data.title } <span className=\"text-2xl\">&#10132;</span></a>\n        </div>\n*/\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LWl0ZW0uanM/ODU3YiJdLCJuYW1lcyI6WyJQcm9qZWN0SXRlbSIsInByb3BzIiwiaW1hZ2VzX2RpciIsInByb2Nlc3MiLCJwbmciLCJkYXRhIiwidGh1bWJuYWlsIiwid2VicCIsInNsaWNlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRlY2giLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxXQUFULENBQXNCQyxLQUF0QixFQUNBO0FBQUE7O0FBQ0ksTUFBTUMsVUFBVSxHQUFHQyxNQUFuQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsVUFBVSxHQUFHLFdBQWIsR0FBMkJELEtBQUssQ0FBQ0ksSUFBTixDQUFXQyxTQUFsRDtBQUNBLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVUsQ0FBVixFQUFZLENBQUMsQ0FBYixJQUFrQixNQUEvQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQVEsZ0JBQU0sRUFBR0QsSUFBakI7QUFBd0IsY0FBSSxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGdCQUFNLEVBQUdILEdBQWpCO0FBQXVCLGNBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQWlDLGVBQUssRUFBQyxLQUF2QztBQUE2QyxnQkFBTSxFQUFDLEtBQXBEO0FBQTBELGdCQUFNLEVBQUdBLEdBQW5FO0FBQXlFLGFBQUcsRUFBR0gsS0FBSyxDQUFDSSxJQUFOLENBQVdJO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBUUk7QUFBSyxlQUFTLEVBQUMsd0VBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsZ0RBQWQ7QUFBQSxrQkFBaUVSLEtBQUssQ0FBQ0ksSUFBTixDQUFXSTtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFLUixLQUFLLENBQUNJLElBQU4sQ0FBV0s7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQSxrQkFDTVQsS0FBSyxDQUFDSSxJQUFOLENBQVdNLElBQVgsQ0FBZ0JDLEdBQWhCLENBQXFCLFVBQUNDLElBQUQ7QUFBQSw4QkFDbkI7QUFBbUIscUJBQVMsRUFBQyw2REFBN0I7QUFBQSxzQkFBNkZBO0FBQTdGLGFBQVlBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEbUI7QUFBQSxTQUFyQjtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7S0ExQlFiLFc7QUE0Qk1BLDBFQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QtaXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFByb2plY3RJdGVtKCBwcm9wcyApXG57XG4gICAgY29uc3QgaW1hZ2VzX2RpciA9IHByb2Nlc3MuZW52LmltYWdlc0RpclxuICAgIGNvbnN0IHBuZyA9IGltYWdlc19kaXIgKyBcInByb2plY3RzL1wiICsgcHJvcHMuZGF0YS50aHVtYm5haWxcbiAgICBjb25zdCB3ZWJwID0gcG5nLnNsaWNlKDAsLTMpICsgXCJ3ZWJwXCJcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtYi0xMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzRcIj5cbiAgICAgICAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmNTZXQ9eyB3ZWJwIH0gdHlwZT1cImltYWdlL3dlYnBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyY1NldD17IHBuZyB9IHR5cGU9XCJpbWFnZS9wbmdcIiAvPiBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJteC1hdXRvIGxnOm14LTBcIiB3aWR0aD1cIjI1MFwiIGhlaWdodD1cIjI1MFwiIHNyY1NldD17IHBuZyB9IGFsdD17IHByb3BzLmRhdGEudGl0bGUgfSAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTMvNCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtMnhsIHRyYWNraW5nLXdpZGVyIG15LTQgbGc6bXktMFwiPnsgcHJvcHMuZGF0YS50aXRsZSB9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57IHByb3BzLmRhdGEuZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRhdGEudGVjaC5tYXAoIChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9eyBpdGVtIH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJvdW5kZWQgcC0yIGJnLWJsYWNrIHRleHQtZ3JlZW4tNDAwIGl0YWxpYyBtLTRcIj57IGl0ZW0gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSApIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RJdGVtXG5cbi8qXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbS0yXCI+XG4gICAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgICAgICA8c291cmNlIHNyY1NldD17IHdlYnAgfSB0eXBlPVwiaW1hZ2Uvd2VicFwiIC8+XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmNTZXQ9eyBqcGcgfSB0eXBlPVwiaW1hZ2UvanBnXCIgLz4gXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjkwMFwiIGhlaWdodD1cIjkwMFwiIHNyY1NldD17IGpwZyB9IGFsdD17IHByb3BzLmRhdGEudGl0bGUgfSAvPlxuICAgICAgICAgICAgPC9waWN0dXJlPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS04MCBwLTYgdGV4dC13aGl0ZSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsXCIgaHJlZj17cHJvcHMuZGF0YS51cmx9IHRpdGxlPXsgcHJvcHMuZGF0YS50aXRsZSB9PnsgcHJvcHMuZGF0YS50aXRsZSB9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+JiMxMDEzMjs8L3NwYW4+PC9hPlxuICAgICAgICA8L2Rpdj5cbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/project-item.js\n");

/***/ })

})