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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/MainGrid */ \"./src/components/MainGrid.js\");\n/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Box */ \"./src/components/Box.js\");\n/* harmony import */ var _src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lib/AlurakutCommons */ \"./src/lib/AlurakutCommons.js\");\n/* harmony import */ var _src_components_ProfileRelationsBoxWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/ProfileRelationsBoxWrapper */ \"./src/components/ProfileRelationsBoxWrapper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jwimac/StuffLocal/aluraorkut/pages/index.js\";\n\n\n\n // const Title = styled.h1`\n//   font-size: 50px;\n//   color: ${({ theme }) => theme.colors.primary};\n// `\n\nfunction ProfileSidebar(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"https://github.com/\".concat(props.githubUser, \".png\"),\n      style: {\n        borderRadius: '8px'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 3\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ProfileSidebar;\n\nfunction Home() {\n  var _this = this;\n\n  var githubUser = 'johnwss';\n  var pessoas = ['juunegreiros', 'gabrieluizramos', 'ramosht', 'omariosouto', 'filipedeschamps', 'fialhogi'];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_AlurakutCommons__WEBPACK_IMPORTED_MODULE_3__.AlurakutMenu, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 1\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"profileArea\",\n        style: {\n          gridArea: 'profileArea'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSidebar, {\n          githubUser: githubUser\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"profileArea\",\n        style: {\n          gridArea: 'welcomeArea'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {\n          children: \"Bem-vindo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 3\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"profileArea\",\n        style: {\n          gridArea: 'profileRelationsArea'\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelationsBoxWrapper__WEBPACK_IMPORTED_MODULE_4__.ProfileRelationsBoxWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"smallTitle\",\n            children: [\"Perfis(\", pessoas.length, \")\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 3\n          }, this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: pessoas.map(function (i) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                  href: \"https://github.com/\".concat(i),\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://github.com/\".concat(i, \".png\")\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 39,\n                    columnNumber: 3\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: i\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 40,\n                    columnNumber: 3\n                  }, _this)]\n                }, i, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 3\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 11\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 3\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {\n          children: \"Comunidades\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 1\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 1\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 1\n    }, this)]\n  }, void 0, true);\n}\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProfileSidebar\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJQcm9maWxlU2lkZWJhciIsInByb3BzIiwiZ2l0aHViVXNlciIsImJvcmRlclJhZGl1cyIsIkhvbWUiLCJwZXNzb2FzIiwiZ3JpZEFyZWEiLCJsZW5ndGgiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQzlCLHNCQUNJLDhEQUFDLHdEQUFEO0FBQUEsMkJBQ0Y7QUFBSyxTQUFHLCtCQUF3QkEsS0FBSyxDQUFDQyxVQUE5QixTQUFSO0FBQXVELFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFDO0FBQWQ7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtDOztLQU5RSCxjOztBQVFULFNBQVNJLElBQVQsR0FBZTtBQUFBOztBQUNiLE1BQU1GLFVBQVUsR0FBRyxTQUFuQjtBQUNBLE1BQU1HLE9BQU8sR0FBRyxDQUFDLGNBQUQsRUFBZ0IsaUJBQWhCLEVBQWtDLFNBQWxDLEVBQTRDLGFBQTVDLEVBQTBELGlCQUExRCxFQUE0RSxVQUE1RSxDQUFoQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0osOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGVBRUosOERBQUMsNkRBQUQ7QUFBQSw4QkFDQTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE2QixhQUFLLEVBQUU7QUFBQ0Msa0JBQVEsRUFBQztBQUFWLFNBQXBDO0FBQUEsK0JBQ0UsOERBQUMsY0FBRDtBQUFnQixvQkFBVSxFQUFFSjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0E7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBSyxFQUFFO0FBQUNJLGtCQUFRLEVBQUM7QUFBVixTQUFwQztBQUFBLCtCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBUUE7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBSyxFQUFFO0FBQUNBLGtCQUFRLEVBQUM7QUFBVixTQUFwQztBQUFBLGdDQUNFLDhEQUFDLGtHQUFEO0FBQUEsa0NBQ0E7QUFBSSxxQkFBUyxFQUFDLFlBQWQ7QUFBQSxrQ0FDUUQsT0FBTyxDQUFDRSxNQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsb0JBRThCO0FBQUEsc0JBQUtGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLENBQUQsRUFBSztBQUNwRCxrQ0FBUTtBQUFBLHVDQUNSO0FBQUcsc0JBQUksK0JBQXdCQSxDQUF4QixDQUFQO0FBQUEsMENBQ0E7QUFBSyx1QkFBRywrQkFBd0JBLENBQXhCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQSxlQUVBO0FBQUEsOEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGQTtBQUFBLG1CQUF5Q0EsQ0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVI7QUFNQyxhQVBrQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVlBLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZJO0FBQUEsa0JBREY7QUEwQkc7O01BN0JJTCxJO0FBOEJULCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpbkdyaWQnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Cb3gnO1xuaW1wb3J0IHtBbHVyYWt1dE1lbnV9IGZyb20gJy4uL3NyYy9saWIvQWx1cmFrdXRDb21tb25zJ1xuaW1wb3J0IHsgUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXIgfSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcic7XG5cbi8vIGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuLy8gICBmb250LXNpemU6IDUwcHg7XG4vLyAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbi8vIGBcblxuZnVuY3Rpb24gUHJvZmlsZVNpZGViYXIocHJvcHMpe1xucmV0dXJuKFxuICAgIDxCb3g+IFxuICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3BzLmdpdGh1YlVzZXJ9LnBuZ2B9c3R5bGU9e3tib3JkZXJSYWRpdXM6JzhweCd9fS8+IFxuICA8L0JveD5cbiAgKVxufVxuXG5mdW5jdGlvbiBIb21lKCl7XG4gIGNvbnN0IGdpdGh1YlVzZXIgPSAnam9obndzcyc7XG4gIGNvbnN0IHBlc3NvYXMgPSBbJ2p1dW5lZ3JlaXJvcycsJ2dhYnJpZWx1aXpyYW1vcycsJ3JhbW9zaHQnLCdvbWFyaW9zb3V0bycsJ2ZpbGlwZWRlc2NoYW1wcycsJ2ZpYWxob2dpJ11cbiAgcmV0dXJuIChcbiAgICA8PlxuPEFsdXJha3V0TWVudS8+XG48TWFpbkdyaWQ+XG48ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVBcmVhXCIgc3R5bGU9e3tncmlkQXJlYToncHJvZmlsZUFyZWEnfX0+XG4gIDxQcm9maWxlU2lkZWJhciBnaXRodWJVc2VyPXtnaXRodWJVc2VyfS8+XG48L2Rpdj5cblxuPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlPXt7Z3JpZEFyZWE6J3dlbGNvbWVBcmVhJ319ID5cbiAgPEJveCA+QmVtLXZpbmRvPC9Cb3g+PC9kaXY+ICBcblxuPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQXJlYVwiIHN0eWxlPXt7Z3JpZEFyZWE6J3Byb2ZpbGVSZWxhdGlvbnNBcmVhJ319ID5cbiAgPFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuICA8aDIgY2xhc3NOYW1lPVwic21hbGxUaXRsZVwiPlxuICBQZXJmaXMoe3Blc3NvYXMubGVuZ3RofSk8L2gyPiA8dWw+e3Blc3NvYXMubWFwKChpKT0+e1xuICByZXR1cm4gKDxsaT5cbiAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l9YH0ga2V5PXtpfT5cbiAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtpfS5wbmdgfS8+XG4gIDxzcGFuPntpfTwvc3Bhbj5cbiAgPC9hPjwvbGk+XG4gIClcbiAgfSl9PC91bD5cbiAgPC9Qcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbjxCb3g+Q29tdW5pZGFkZXM8L0JveD5cbjwvZGl2PlxuPC9NYWluR3JpZD5cbjwvPil9XG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});