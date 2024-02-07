"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require("./create-client"),
  createClient = _require.createClient;
var _require2 = require("./queries"),
  translatedProductsQuery = _require2.translatedProductsQuery,
  translatedCollectionsQuery = _require2.translatedCollectionsQuery;
exports.createOperations = function (options) {
  var client = createClient(options);
  function createOperation(_x) {
    return _createOperation.apply(this, arguments);
  }
  function _createOperation() {
    _createOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(operationQuery) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return client.query(operationQuery);
          case 2:
            return _context3.abrupt("return", _context3.sent);
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _createOperation.apply(this, arguments);
  }
  return {
    createTranslatedProductsOperation: function () {
      var _createTranslatedProductsOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(ids, identifiers) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return createOperation(translatedProductsQuery(ids, identifiers), "TRANSLATED_PRODUCTS");
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function createTranslatedProductsOperation(_x2, _x3) {
        return _createTranslatedProductsOperation.apply(this, arguments);
      }
      return createTranslatedProductsOperation;
    }(),
    createTranslatedCollectionsOperation: function () {
      var _createTranslatedCollectionsOperation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(ids, identifiers) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return createOperation(translatedCollectionsQuery(ids, identifiers), "TRANSLATED_COLLECTIONS");
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function createTranslatedCollectionsOperation(_x4, _x5) {
        return _createTranslatedCollectionsOperation.apply(this, arguments);
      }
      return createTranslatedCollectionsOperation;
    }()
  };
};