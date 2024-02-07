"use strict";

exports.__esModule = true;
exports.useLocalization = void 0;
var _react = require("react");
var _defaultOptions = require("../utils/default-options");
var _context = require("../context");
var _helpers = require("../helpers");
var useLocalization = function useLocalization() {
  var _useContext = (0, _react.useContext)(_context.LocaleContext),
    language = _useContext.language,
    defaultLang = _useContext.defaultLang;
  var config = (0, _defaultOptions.withDefaults)();
  return {
    language: language,
    defaultLang: defaultLang,
    prefixDefault: config.prefixDefault,
    localizedPath: _helpers.localizedPath
  };
};
exports.useLocalization = useLocalization;