"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\rajar\\Kickstart\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Campaign = /*#__PURE__*/function (_Component) {
  (0,C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(Campaign, _Component);

  var _super = _createSuper(Campaign);

  function Campaign() {
    (0,C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, Campaign);

    return _super.apply(this, arguments);
  }

  (0,C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(Campaign, [{
    key: "rendCampaigns",
    value: function rendCampaigns() {
      var _this = this;

      var items = this.props.campaigns.map(function (item) {
        return {
          header: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: [item, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              style: {
                fontWeight: "300",
                color: "#404040",
                display: "inline",
                fontSize: "14px"
              },
              children: "\xA0\xA0(Address of Deployed Campaign"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 35
            }, _this), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
              "class": " globe icon",
              style: {
                color: "#000000",
                fontSize: "15px"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 74
            }, _this), ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 24
          }, _this),
          description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_11__.Link, {
            route: "/campaign/".concat(item),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              children: "View The Campaign"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 63
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 29
          }, _this),
          fluid: true
        };
      });
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, this);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_10__.default, {
        style: {
          marginBottom: "120px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Message, {
          info: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            style: {
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "cursive",
              textAlign: "center"
            },
            children: ["Launch your own Project or Fundraiser here\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
              "class": "big rocket icon",
              style: {
                fontSize: "30px",
                color: "#1C39BB"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 87
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: "Open Campaigns (Open Campaigns needs Contribution)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
            "class": "big archive icon",
            style: {
              marginBottom: "15px",
              fontSize: "30px",
              color: "#1C39BB"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_11__.Link, {
            route: "/campaign/new",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
                floated: "right",
                content: "Create Campaign",
                icon: "add circle",
                primary: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, this), this.rendCampaigns()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.Message, {
          info: true,
          color: "red",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            style: {
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "cursive",
              textAlign: "center",
              color: "#C41E3A"
            },
            children: ["Even a small Contribution can Help others\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
              "class": "big heart icon",
              style: {
                fontSize: "30px",
                color: "#AA0000"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 83
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var campaigns;
        return C_Users_rajar_Kickstart_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_9__.default.methods.getDeployedCampaign().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", {
                  campaigns: campaigns
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Campaign;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Campaign);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWE0NmI3NTE4MjFiY2Q3MjZiNDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNUTs7Ozs7Ozs7Ozs7OztvQ0FNYTtBQUFBOztBQUNYLFVBQU1DLEtBQUssR0FBQyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBUTtBQUN6QyxlQUFNO0FBQ0ZDLFVBQUFBLE1BQU0sZUFBQztBQUFBLHVCQUFLRCxJQUFMLG9CQUFXO0FBQUssbUJBQUssRUFBRTtBQUFDRSxnQkFBQUEsVUFBVSxFQUFDLEtBQVo7QUFBa0JDLGdCQUFBQSxLQUFLLEVBQUMsU0FBeEI7QUFBa0NDLGdCQUFBQSxPQUFPLEVBQUMsUUFBMUM7QUFBbURDLGdCQUFBQSxRQUFRLEVBQUM7QUFBNUQsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBWCx1QkFDa0Q7QUFBRyx1QkFBTSxhQUFUO0FBQXVCLG1CQUFLLEVBQUU7QUFBQ0YsZ0JBQUFBLEtBQUssRUFBQyxTQUFQO0FBQWlCRSxnQkFBQUEsUUFBUSxFQUFDO0FBQTFCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUdGQyxVQUFBQSxXQUFXLGVBQUMsOERBQUMsMENBQUQ7QUFBTSxpQkFBSyxzQkFBZU4sSUFBZixDQUFYO0FBQUEsbUNBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFY7QUFJRk8sVUFBQUEsS0FBSyxFQUFDO0FBSkosU0FBTjtBQU1ILE9BUFcsQ0FBWjtBQVFBLDBCQUFPLDhEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFWDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7OzZCQUNPO0FBQ0osMEJBQ0ksOERBQUMsd0RBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBQ1ksVUFBQUEsWUFBWSxFQUFDO0FBQWQsU0FBZjtBQUFBLGdDQUNJLDhEQUFDLHVEQUFEO0FBQVMsY0FBSSxNQUFiO0FBQUEsaUNBQ1A7QUFBRyxpQkFBSyxFQUFFO0FBQUNILGNBQUFBLFFBQVEsRUFBQyxNQUFWO0FBQ0ZILGNBQUFBLFVBQVUsRUFBQyxLQURUO0FBRUZPLGNBQUFBLFVBQVUsRUFBQyxTQUZUO0FBR0ZDLGNBQUFBLFNBQVMsRUFBQztBQUhSLGFBQVY7QUFBQSxzRkFHNkU7QUFBRyx1QkFBTSxpQkFBVDtBQUNyRSxtQkFBSyxFQUFFO0FBQUNMLGdCQUFBQSxRQUFRLEVBQUMsTUFBVjtBQUFpQkYsZ0JBQUFBLEtBQUssRUFBQztBQUF2QjtBQUQ4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUg3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBUUE7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQU0sa0JBQVQ7QUFBNEIsaUJBQUssRUFBRTtBQUFDSyxjQUFBQSxZQUFZLEVBQUMsTUFBZDtBQUFzQkgsY0FBQUEsUUFBUSxFQUFDLE1BQS9CO0FBQXNDRixjQUFBQSxLQUFLLEVBQUM7QUFBNUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJLDhEQUFDLDBDQUFEO0FBQU0saUJBQUssRUFBQyxlQUFaO0FBQUEsbUNBQ0E7QUFBQSxxQ0FDQSw4REFBQyxzREFBRDtBQUNQLHVCQUFPLEVBQUMsT0FERDtBQUVQLHVCQUFPLEVBQUMsaUJBRkQ7QUFHUCxvQkFBSSxFQUFDLFlBSEU7QUFJUCx1QkFBTztBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixFQWFGLEtBQUtRLGFBQUwsRUFiRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkEsZUF1QkgsOERBQUMsdURBQUQ7QUFBUyxjQUFJLE1BQWI7QUFBYyxlQUFLLEVBQUMsS0FBcEI7QUFBQSxpQ0FDQTtBQUFHLGlCQUFLLEVBQUU7QUFBQ04sY0FBQUEsUUFBUSxFQUFDLE1BQVY7QUFDRkgsY0FBQUEsVUFBVSxFQUFDLEtBRFQ7QUFFRk8sY0FBQUEsVUFBVSxFQUFDLFNBRlQ7QUFHRkMsY0FBQUEsU0FBUyxFQUFDLFFBSFI7QUFJSFAsY0FBQUEsS0FBSyxFQUFDO0FBSkgsYUFBVjtBQUFBLHFGQUl5RTtBQUFHLHVCQUFNLGdCQUFUO0FBQ2pFLG1CQUFLLEVBQUU7QUFBQ0UsZ0JBQUFBLFFBQVEsRUFBQyxNQUFWO0FBQWlCRixnQkFBQUEsS0FBSyxFQUFDO0FBQXZCO0FBRDBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSnpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBbUNIOzs7Ozs7Ozs7Ozt1QkFsRDJCWCxrRkFBQSxHQUFzQ3NCLElBQXRDOzs7QUFBbEJoQixnQkFBQUE7aURBQ0M7QUFBQ0Esa0JBQUFBLFNBQVMsRUFBVEE7QUFBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUpRVjs7QUF1RHZCLCtEQUFlTyxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsQnV0dG9uLE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5jbGFzcyBDYW1wYWlnbiBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ24oKS5jYWxsKCk7IFxyXG4gICAgICAgIHJldHVybiB7Y2FtcGFpZ25zfTtcclxuICAgIH1cclxuICAgIHJlbmRDYW1wYWlnbnMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcz10aGlzLnByb3BzLmNhbXBhaWducy5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGhlYWRlcjo8aDM+e2l0ZW19IDxkaXYgc3R5bGU9e3tmb250V2VpZ2h0OlwiMzAwXCIsY29sb3I6XCIjNDA0MDQwXCIsZGlzcGxheTpcImlubGluZVwiLGZvbnRTaXplOlwiMTRweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7KEFkZHJlc3Mgb2YgRGVwbG95ZWQgQ2FtcGFpZ248L2Rpdj4mbmJzcDs8aSBjbGFzcz1cIiBnbG9iZSBpY29uXCIgc3R5bGU9e3tjb2xvcjpcIiMwMDAwMDBcIixmb250U2l6ZTpcIjE1cHhcIn19PjwvaT4pPC9oMz4sXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjo8TGluayByb3V0ZT17YC9jYW1wYWlnbi8ke2l0ZW19YH0+PGE+VmlldyBUaGUgQ2FtcGFpZ248L2E+PC9MaW5rPixcclxuICAgICAgICAgICAgICAgIGZsdWlkOnRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPlxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTIwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgaW5mbz5cclxuICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OlwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgZm9udEZhbWlseTpcImN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkxhdW5jaCB5b3VyIG93biBQcm9qZWN0IG9yIEZ1bmRyYWlzZXIgaGVyZSZuYnNwOzxpIGNsYXNzPVwiYmlnIHJvY2tldCBpY29uXCIgXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIixjb2xvcjpcIiMxQzM5QkJcIix9fT48L2k+PC9wPlxyXG4gICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPk9wZW4gQ2FtcGFpZ25zIChPcGVuIENhbXBhaWducyBuZWVkcyBDb250cmlidXRpb24pPC9oMz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmlnIGFyY2hpdmUgaWNvblwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTVweFwiLCBmb250U2l6ZTpcIjMwcHhcIixjb2xvcjpcIiMxQzM5QkJcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWduL25ld1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgIGNvbnRlbnQ9J0NyZWF0ZSBDYW1wYWlnbidcclxuICAgICAgICAgaWNvbj0nYWRkIGNpcmNsZSdcclxuICAgICAgICAgcHJpbWFyeVxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8L2E+XHJcbiAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAge3RoaXMucmVuZENhbXBhaWducygpfVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPE1lc3NhZ2UgaW5mbyBjb2xvcj1cInJlZFwiID5cclxuICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OlwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgZm9udEZhbWlseTpcImN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOlwiI0M0MUUzQVwiLH19PkV2ZW4gYSBzbWFsbCBDb250cmlidXRpb24gY2FuIEhlbHAgb3RoZXJzJm5ic3A7PGkgY2xhc3M9XCJiaWcgaGVhcnQgaWNvblwiIFxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjQUEwMDAwXCIsfX0+PC9pPjwvcD5cclxuICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJNZXNzYWdlIiwiZmFjdG9yeSIsIkxheW91dCIsIkxpbmsiLCJDYW1wYWlnbiIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJpdGVtIiwiaGVhZGVyIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZGlzcGxheSIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIm1hcmdpbkJvdHRvbSIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJyZW5kQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ24iLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==