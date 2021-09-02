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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
            style: {
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "cursive",
              textAlign: "center",
              color: "#E52B50"
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
              columnNumber: 82
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          style: {
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "cursive",
            color: "#E52B50",
            textAlign: "center",
            marginTop: "20px"
          },
          children: [" Even a small Contribution can Help others\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
            "class": "big heart icon",
            style: {
              fontSize: "30px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 77
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjgyMTM2ZWIwZTE1MzNiNWIyY2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNUTs7Ozs7Ozs7Ozs7OztvQ0FNYTtBQUFBOztBQUNYLFVBQU1DLEtBQUssR0FBQyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLElBQUQsRUFBUTtBQUN6QyxlQUFNO0FBQ0ZDLFVBQUFBLE1BQU0sZUFBQztBQUFBLHVCQUFLRCxJQUFMLG9CQUFXO0FBQUssbUJBQUssRUFBRTtBQUFDRSxnQkFBQUEsVUFBVSxFQUFDLEtBQVo7QUFBa0JDLGdCQUFBQSxLQUFLLEVBQUMsU0FBeEI7QUFBa0NDLGdCQUFBQSxPQUFPLEVBQUMsUUFBMUM7QUFBbURDLGdCQUFBQSxRQUFRLEVBQUM7QUFBNUQsZUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBWCx1QkFDa0Q7QUFBRyx1QkFBTSxhQUFUO0FBQXVCLG1CQUFLLEVBQUU7QUFBQ0YsZ0JBQUFBLEtBQUssRUFBQyxTQUFQO0FBQWlCRSxnQkFBQUEsUUFBUSxFQUFDO0FBQTFCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETDtBQUdGQyxVQUFBQSxXQUFXLGVBQUMsOERBQUMsMENBQUQ7QUFBTSxpQkFBSyxzQkFBZU4sSUFBZixDQUFYO0FBQUEsbUNBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFY7QUFJRk8sVUFBQUEsS0FBSyxFQUFDO0FBSkosU0FBTjtBQU1ILE9BUFcsQ0FBWjtBQVFBLDBCQUFPLDhEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFWDtBQUFuQjtBQUFBO0FB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RUFKUVY7O0FBOER2QiwrREFBZU8sUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLEJ1dHRvbixNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcclxuY2xhc3MgQ2FtcGFpZ24gZXh0ZW5kcyBDb21wb25lbnRcclxue1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWduKCkuY2FsbCgpOyBcclxuICAgICAgICByZXR1cm4ge2NhbXBhaWduc307XHJcbiAgICB9XHJcbiAgICByZW5kQ2FtcGFpZ25zKCl7XHJcbiAgICAgICAgY29uc3QgaXRlbXM9dGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6PGgzPntpdGVtfSA8ZGl2IHN0eWxlPXt7Zm9udFdlaWdodDpcIjMwMFwiLGNvbG9yOlwiIzQwNDA0MFwiLGRpc3BsYXk6XCJpbmxpbmVcIixmb250U2l6ZTpcIjE0cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyhBZGRyZXNzIG9mIERlcGxveWVkIENhbXBhaWduPC9kaXY+Jm5ic3A7PGkgY2xhc3M9XCIgZ2xvYmUgaWNvblwiIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDAwXCIsZm9udFNpemU6XCIxNXB4XCJ9fT48L2k+KTwvaDM+LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246PExpbmsgcm91dGU9e2AvY2FtcGFpZ24vJHtpdGVtfWB9PjxhPlZpZXcgVGhlIENhbXBhaWduPC9hPjwvTGluaz4sXHJcbiAgICAgICAgICAgICAgICBmbHVpZDp0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9Lz5cclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGluZm8+XHJcbiAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgZm9udFdlaWdodDpcIjYwMFwiLFxyXG4gICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6XCJjdXJzaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5MYXVuY2ggeW91ciBvd24gUHJvamVjdCBvciBGdW5kcmFpc2VyIGhlcmUmbmJzcDs8aSBjbGFzcz1cImJpZyByb2NrZXQgaWNvblwiIFxyXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjMUMzOUJCXCIsfX0+PC9pPjwvcD5cclxuICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWducyAoT3BlbiBDYW1wYWlnbnMgbmVlZHMgQ29udHJpYnV0aW9uKTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpZyBhcmNoaXZlIGljb25cIiBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjE1cHhcIiwgZm9udFNpemU6XCIzMHB4XCIsY29sb3I6XCIjMUMzOUJCXCJ9fT48L2k+XHJcbiAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbi9uZXdcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICBjb250ZW50PSdDcmVhdGUgQ2FtcGFpZ24nXHJcbiAgICAgICAgIGljb249J2FkZCBjaXJjbGUnXHJcbiAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPC9hPlxyXG4gICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgIHt0aGlzLnJlbmRDYW1wYWlnbnMoKX1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxNZXNzYWdlIGluZm8gY29sb3I9XCJyZWRcIj5cclxuICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTpcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OlwiNjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgZm9udEZhbWlseTpcImN1cnNpdmVcIixcclxuICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOlwiI0U1MkI1MFwifX0+RXZlbiBhIHNtYWxsIENvbnRyaWJ1dGlvbiBjYW4gSGVscCBvdGhlcnMmbmJzcDs8aSBjbGFzcz1cImJpZyBoZWFydCBpY29uXCIgXHJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTpcIjMwcHhcIixjb2xvcjpcIiNBQTAwMDBcIix9fT48L2k+PC9wPlxyXG4gICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6XCIxNnB4XCIsXHJcbiAgICAgICAgIGZvbnRXZWlnaHQ6XCI2MDBcIixcclxuICAgICAgICAgZm9udEZhbWlseTpcImN1cnNpdmVcIixcclxuICAgICAgICAgY29sb3I6XCIjRTUyQjUwXCIsXHJcbiAgICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gICAgICAgICBtYXJnaW5Ub3A6XCIyMHB4XCJ9fT4gRXZlbiBhIHNtYWxsIENvbnRyaWJ1dGlvbiBjYW4gSGVscCBvdGhlcnMmbmJzcDs8aSBjbGFzcz1cImJpZyBoZWFydCBpY29uXCIgc3R5bGU9XHJcbiAgICAgICAgIHt7Zm9udFNpemU6XCIzMHB4XCJ9fT48L2k+PC9kaXY+XHJcbiAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbjsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiTWVzc2FnZSIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ24iLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaXRlbSIsImhlYWRlciIsImZvbnRXZWlnaHQiLCJjb2xvciIsImRpc3BsYXkiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJmb250RmFtaWx5IiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwicmVuZENhbXBhaWducyIsIm1hcmdpblRvcCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWduIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=