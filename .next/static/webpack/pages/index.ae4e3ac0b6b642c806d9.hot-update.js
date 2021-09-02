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
          style: {
            marginBottom: "120px"
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWU0ZTNhYzBiNmI2NDJjODA2ZDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNUTs7Ozs7Ozs7Ozs7OztvQ0FNYTtBQUFBOztBQUNYLFVBQU1DLEtBQUssR0FBQyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBUTtBQUN6QyxlQUFNO0FBQ0ZDLFVBQUFBLE1BQU0sZUFBQztBQUFBLHVCQUFLRCxJQUFMLG9CQUFXO0FBQUssbUJBQUssRUFBRTtBQUFDRSxnQkFBQUEsVUFBVSxFQUFDLEtBQVo7QUFBa0JDLGdCQUFBQSxLQUFLLEVBQUMsU0FBeEI7QUFBa0NDLGdCQUFBQSxPQUFPLEVBQUMsUUFBMUM7QUFBbURDLGdCQUFBQSxRQUFRLEVBQUM7QUFBNUQsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBWCx1QkFDa0Q7QUFBRyx1QkFBTSxhQUFUO0FBQXVCLG1CQUFLLEVBQUU7QUFBQ0YsZ0JBQUFBLEtBQUssRUFBQyxTQUFQO0FBQWlCRSxnQkFBQUEsUUFBUSxFQUFDO0FBQTFCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUdGQyxVQUFBQSxXQUFXLGVBQUMsOERBQUMsMENBQUQ7QUFBTSxpQkFBSyxzQkFBZU4sSUFBZixDQUFYO0FBQUEsbUNBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFY7QUFJRk8sVUFBQUEsS0FBSyxFQUFDO0FBSkosU0FBTjtBQU1ILE9BUFcsQ0FBWjtBQVFBLDBCQUFPLDhEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFWDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDSDs7OzZCQUNPO0FBQ0osMEJBQ0ksOERBQUMsd0RBQUQ7QUFBQSxnQ0FDSSw4REFBQyx1REFBRDtBQUFTLGNBQUksTUFBYjtBQUFBLGlDQUNQO0FBQUcsaUJBQUssRUFBRTtBQUFDUyxjQUFBQSxRQUFRLEVBQUMsTUFBVjtBQUNGSCxjQUFBQSxVQUFVLEVBQUMsS0FEVDtBQUVGTSxjQUFBQSxVQUFVLEVBQUMsU0FGVDtBQUdGQyxjQUFBQSxTQUFTLEVBQUM7QUFIUixhQUFWO0FBQUEsc0ZBRzZFO0FBQUcsdUJBQU0saUJBQVQ7QUFDckUsbUJBQUssRUFBRTtBQUFDSixnQkFBQUEsUUFBUSxFQUFDLE1BQVY7QUFBaUJGLGdCQUFBQSxLQUFLLEVBQUM7QUFBdkI7QUFEOEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVFBO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFNLGtCQUFUO0FBQTRCLGlCQUFLLEVBQUU7QUFBQ08sY0FBQUEsWUFBWSxFQUFDLE1BQWQ7QUFBc0JMLGNBQUFBLFFBQVEsRUFBQyxNQUEvQjtBQUFzQ0YsY0FBQUEsS0FBSyxFQUFDO0FBQTVDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSSw4REFBQywwQ0FBRDtBQUFNLGlCQUFLLEVBQUMsZUFBWjtBQUFBLG1DQUNBO0FBQUEscUNBQ0EsOERBQUMsc0RBQUQ7QUFDUCx1QkFBTyxFQUFDLE9BREQ7QUFFUCx1QkFBTyxFQUFDLGlCQUZEO0FBR1Asb0JBQUksRUFBQyxZQUhFO0FBSVAsdUJBQU87QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosRUFhRixLQUFLUSxhQUFMLEVBYkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJBLGVBdUJILDhEQUFDLHVEQUFEO0FBQVMsY0FBSSxNQUFiO0FBQWMsZUFBSyxFQUFDLEtBQXBCO0FBQTBCLGVBQUssRUFBRTtBQUFDRCxZQUFBQSxZQUFZLEVBQUM7QUFBZCxXQUFqQztBQUFBLGlDQUNBO0FBQUcsaUJBQUssRUFBRTtBQUFDTCxjQUFBQSxRQUFRLEVBQUMsTUFBVjtBQUNGSCxjQUFBQSxVQUFVLEVBQUMsS0FEVDtBQUVGTSxjQUFBQSxVQUFVLEVBQUMsU0FGVDtBQUdGQyxjQUFBQSxTQUFTLEVBQUMsUUFIUjtBQUlITixjQUFBQSxLQUFLLEVBQUM7QUFKSCxhQUFWO0FBQUEscUZBSXlFO0FBQUcsdUJBQU0sZ0JBQVQ7QUFDakUsbUJBQUssRUFBRTtBQUFDRSxnQkFBQUEsUUFBUSxFQUFDLE1BQVY7QUFBaUJGLGdCQUFBQSxLQUFLLEVBQUM7QUFBdkI7QUFEMEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Qkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFtQ0g7Ozs7Ozs7Ozs7O3VCQWxEMkJYLGtGQUFBLEdBQXNDc0IsSUFBdEM7OztBQUFsQmhCLGdCQUFBQTtpREFDQztBQUFDQSxrQkFBQUEsU0FBUyxFQUFUQTtBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSlFWOztBQXVEdkIsK0RBQWVPLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCxCdXR0b24sTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XHJcbmNsYXNzIENhbXBhaWduIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbigpLmNhbGwoKTsgXHJcbiAgICAgICAgcmV0dXJuIHtjYW1wYWlnbnN9O1xyXG4gICAgfVxyXG4gICAgcmVuZENhbXBhaWducygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zPXRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcCgoaXRlbSk9PntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOjxoMz57aXRlbX0gPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6XCIzMDBcIixjb2xvcjpcIiM0MDQwNDBcIixkaXNwbGF5OlwiaW5saW5lXCIsZm9udFNpemU6XCIxNHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDsoQWRkcmVzcyBvZiBEZXBsb3llZCBDYW1wYWlnbjwvZGl2PiZuYnNwOzxpIGNsYXNzPVwiIGdsb2JlIGljb25cIiBzdHlsZT17e2NvbG9yOlwiIzAwMDAwMFwiLGZvbnRTaXplOlwiMTVweFwifX0+PC9pPik8L2gzPixcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOjxMaW5rIHJvdXRlPXtgL2NhbXBhaWduLyR7aXRlbX1gfT48YT5WaWV3IFRoZSBDYW1wYWlnbjwvYT48L0xpbms+LFxyXG4gICAgICAgICAgICAgICAgZmx1aWQ6dHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfS8+XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBpbmZvPlxyXG4gICAgICAgICA8cCBzdHlsZT17e2ZvbnRTaXplOlwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6XCI2MDBcIixcclxuICAgICAgICAgICAgICAgICBmb250RmFtaWx5OlwiY3Vyc2l2ZVwiLFxyXG4gICAgICAgICAgICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwifX0+TGF1bmNoIHlvdXIgb3duIFByb2plY3Qgb3IgRnVuZHJhaXNlciBoZXJlJm5ic3A7PGkgY2xhc3M9XCJiaWcgcm9ja2V0IGljb25cIiBcclxuICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLGNvbG9yOlwiIzFDMzlCQlwiLH19PjwvaT48L3A+XHJcbiAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnMgKE9wZW4gQ2FtcGFpZ25zIG5lZWRzIENvbnRyaWJ1dGlvbik8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaWcgYXJjaGl2ZSBpY29uXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxNXB4XCIsIGZvbnRTaXplOlwiMzBweFwiLGNvbG9yOlwiIzFDMzlCQlwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ24vbmV3XCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcclxuICAgICAgICAgY29udGVudD0nQ3JlYXRlIENhbXBhaWduJ1xyXG4gICAgICAgICBpY29uPSdhZGQgY2lyY2xlJ1xyXG4gICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvYT5cclxuICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICB7dGhpcy5yZW5kQ2FtcGFpZ25zKCl9XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8TWVzc2FnZSBpbmZvIGNvbG9yPVwicmVkXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxMjBweFwifX0+XHJcbiAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgZm9udFdlaWdodDpcIjYwMFwiLFxyXG4gICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6XCJjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjpcIiNDNDFFM0FcIix9fT5FdmVuIGEgc21hbGwgQ29udHJpYnV0aW9uIGNhbiBIZWxwIG90aGVycyZuYnNwOzxpIGNsYXNzPVwiYmlnIGhlYXJ0IGljb25cIiBcclxuICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOlwiMzBweFwiLGNvbG9yOlwiI0FBMDAwMFwiLH19PjwvaT48L3A+XHJcbiAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTWVzc2FnZSIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ24iLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaXRlbSIsImhlYWRlciIsImZvbnRXZWlnaHQiLCJjb2xvciIsImRpc3BsYXkiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJmb250RmFtaWx5IiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwicmVuZENhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWduIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=