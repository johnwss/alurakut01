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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/MainGrid */ \"./src/components/MainGrid.js\");\n/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Box */ \"./src/components/Box.js\");\n/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ \"./src/lib/AlurakutCommons.js\");\n/* harmony import */ var _src_components_ProfileRelationsBoxWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/ProfileRelationsBoxWrapper */ \"./src/components/ProfileRelationsBoxWrapper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jwimac/StuffLocal/aluraorkut/pages/index.js\";\n\n\n\n // const Title = styled.h1`\n//   font-size: 50px;\n//   color: ${({ theme }) => theme.colors.primary};\n// `\n\nfunction ProfileSidebar(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"https://github.com/\".concat(props.githubUser, \".png\"),\n      style: {\n        borderRadius: '8px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 3\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProfileSidebar;\n\nfunction Home() {\n  var _this = this;\n\n  var githubUser = 'johnwss';\n  var pessoas = ['juunegreiros', 'omariosouto', 'filipedeschamps', 'fialhogi'];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_3__.AlurakutMenu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 1\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"profileArea\",\n        style: {\n          gridArea: 'profileArea'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {\n          githubUser: githubUser\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"profileArea\",\n        style: {\n          gridArea: 'welcomeArea'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {\n          children: \"Bem-vindo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"profileArea\",\n        style: {\n          gridArea: 'profileRelationsArea'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelationsBoxWrapper__WEBPACK_IMPORTED_MODULE_4__.ProfileRelationsBoxWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"smallTitle\",\n            children: [\"Perfis(\", pessoas.length, \")\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 3\n          }, this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: pessoas.map(function (i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  href: \"https://github.com/\".concat(i),\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://github.com/\".concat(i, \".png\")\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 39,\n                    columnNumber: 3\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: i\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 40,\n                    columnNumber: 3\n                  }, _this)]\n                }, i, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 3\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 11\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {\n          children: \"Comunidades\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 1\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 1\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 1\n    }, this)]\n  }, void 0, true);\n}\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProfileSidebar\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJQcm9maWxlU2lkZWJhciIsInByb3BzIiwiZ2l0aHViVXNlciIsImJvcmRlclJhZGl1cyIsIkhvbWUiLCJwZXNzb2FzIiwiZ3JpZEFyZWEiLCJsZW5ndGgiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQzlCLHNCQUNJLDhEQUFDLHdEQUFEO0FBQUEsMkJBQ0Y7QUFBSyxTQUFHLCtCQUF3QkEsS0FBSyxDQUFDQyxVQUE5QixTQUFSO0FBQXVELFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFDO0FBQWQ7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtDOztLQU5RSCxjOztBQVFULFNBQVNJLElBQVQsR0FBZTtBQUFBOztBQUNiLE1BQU1GLFVBQVUsR0FBRyxTQUFuQjtBQUNBLE1BQU1HLE9BQU8sR0FBRyxDQUFDLGNBQUQsRUFBZ0IsYUFBaEIsRUFBOEIsaUJBQTlCLEVBQWdELFVBQWhELENBQWhCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDSiw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREksZUFFSiw4REFBQyw2REFBRDtBQUFBLDhCQUNBO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQUssRUFBRTtBQUFDQyxrQkFBUSxFQUFDO0FBQVYsU0FBcEM7QUFBQSwrQkFDRSw4REFBQyxjQUFEO0FBQWdCLG9CQUFVLEVBQUVKO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFLQTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE2QixhQUFLLEVBQUU7QUFBQ0ksa0JBQVEsRUFBQztBQUFWLFNBQXBDO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEEsZUFRQTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE2QixhQUFLLEVBQUU7QUFBQ0Esa0JBQVEsRUFBQztBQUFWLFNBQXBDO0FBQUEsZ0NBQ0UsOERBQUMsa0dBQUQ7QUFBQSxrQ0FDQTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLGtDQUNRRCxPQUFPLENBQUNFLE1BRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxvQkFFOEI7QUFBQSxzQkFBS0YsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFLO0FBQ3BELGtDQUFRO0FBQUEsdUNBQ1I7QUFBRyxzQkFBSSwrQkFBd0JBLENBQXhCLENBQVA7QUFBQSwwQ0FDQTtBQUFLLHVCQUFHLCtCQUF3QkEsQ0FBeEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURBLGVBRUE7QUFBQSw4QkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZBO0FBQUEsbUJBQXlDQSxDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUjtBQU1DLGFBUGtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUEsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkk7QUFBQSxrQkFERjtBQTBCRzs7TUE3QklMLEk7QUE4QlQsK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluR3JpZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0JveCc7XG5pbXBvcnQge0FsdXJha3V0TWVudX0gZnJvbSAnLi4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMnXG5pbXBvcnQgeyBQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlciB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyJztcblxuLy8gY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4vLyAgIGZvbnQtc2l6ZTogNTBweDtcbi8vICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuLy8gYFxuXG5mdW5jdGlvbiBQcm9maWxlU2lkZWJhcihwcm9wcyl7XG5yZXR1cm4oXG4gICAgPEJveD4gXG4gIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHMuZ2l0aHViVXNlcn0ucG5nYH1zdHlsZT17e2JvcmRlclJhZGl1czonOHB4J319Lz4gXG4gIDwvQm94PlxuICApXG59XG5cbmZ1bmN0aW9uIEhvbWUoKXtcbiAgY29uc3QgZ2l0aHViVXNlciA9ICdqb2hud3NzJztcbiAgY29uc3QgcGVzc29hcyA9IFsnanV1bmVncmVpcm9zJywnb21hcmlvc291dG8nLCdmaWxpcGVkZXNjaGFtcHMnLCdmaWFsaG9naSddXG4gIHJldHVybiAoXG4gICAgPD5cbjxBbHVyYWt1dE1lbnUvPlxuPE1haW5HcmlkPlxuPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlPXt7Z3JpZEFyZWE6J3Byb2ZpbGVBcmVhJ319PlxuICA8UHJvZmlsZVNpZGViYXIgZ2l0aHViVXNlcj17Z2l0aHViVXNlcn0vPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUFyZWFcIiBzdHlsZT17e2dyaWRBcmVhOid3ZWxjb21lQXJlYSd9fSA+XG4gIDxCb3ggPkJlbS12aW5kbzwvQm94PjwvZGl2PiAgXG5cbjxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUFyZWFcIiBzdHlsZT17e2dyaWRBcmVhOidwcm9maWxlUmVsYXRpb25zQXJlYSd9fSA+XG4gIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgPGgyIGNsYXNzTmFtZT1cInNtYWxsVGl0bGVcIj5cbiAgUGVyZmlzKHtwZXNzb2FzLmxlbmd0aH0pPC9oMj4gPHVsPntwZXNzb2FzLm1hcCgoaSk9PntcbiAgcmV0dXJuICg8bGk+XG4gIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpfWB9IGtleT17aX0+XG4gIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aX0ucG5nYH0vPlxuICA8c3Bhbj57aX08L3NwYW4+XG4gIDwvYT48L2xpPlxuICApXG4gIH0pfTwvdWw+XG4gIDwvUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXI+XG48Qm94PkNvbXVuaWRhZGVzPC9Cb3g+XG48L2Rpdj5cbjwvTWFpbkdyaWQ+XG48Lz4pfVxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});