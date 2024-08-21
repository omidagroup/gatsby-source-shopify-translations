"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.LocalizedLink = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _react = _interopRequireWildcard(require("react"));
var _gatsby = require("gatsby");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../helpers");
var _useLocalization2 = require("../hooks/useLocalization");
var _excluded = ["to", "lang"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var LocalizedLink = exports.LocalizedLink = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var to = _ref.to,
    lang = _ref.lang,
    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var _useLocalization = (0, _useLocalization2.useLocalization)(),
    defaultLang = _useLocalization.defaultLang,
    prefixDefault = _useLocalization.prefixDefault,
    language = _useLocalization.language;
  var linkLocale = lang || language;
  return /*#__PURE__*/_react.default.createElement(_gatsby.Link, (0, _extends2.default)({}, props, {
    ref: ref,
    to: (0, _helpers.localizedPath)({
      defaultLang: defaultLang,
      prefixDefault: prefixDefault,
      locale: linkLocale,
      path: to
    })
  }));
});
LocalizedLink.propTypes = {
  to: _propTypes.default.string.isRequired,
  lang: _propTypes.default.string
};