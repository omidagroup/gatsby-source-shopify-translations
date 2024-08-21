"use strict";

function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function isDefaultLang(locale, defaultLang) {
  return locale === defaultLang;
}
function localizedPath(_ref) {
  var defaultLang = _ref.defaultLang,
    prefixDefault = _ref.prefixDefault,
    locale = _ref.locale,
    path = _ref.path;
  // The default language isn't prefixed
  if (isDefaultLang(locale, defaultLang) && !prefixDefault) {
    return path;
  }
  var _path$split = path.split("/"),
    base = _path$split[1];

  // If for whatever reason we receive an already localized path
  // (e.g. if the path was made with location.pathname)
  // just return it as-is.
  if (base === locale) {
    return path;
  }

  // If it's another language, prefix with the locale
  return "/" + locale + path;
}
function getLanguages(_ref2) {
  var locales = _ref2.locales,
    localeStr = _ref2.localeStr;
  // If "localeStr" is not defined, return the list of locales from the i18n config file
  if (!localeStr) {
    return locales;
  }
  var langs = [];
  var _loop = function _loop() {
    var code = _step.value;
    var lang = locales.find(function (lang) {
      return lang.code === code;
    });
    if (!lang) {
      throw new Error("Invalid localed provided: " + code + ". See your i18n config file for a list of available locales.");
    }
    langs.push(lang);
  };
  for (var _iterator = _createForOfIteratorHelperLoose(localeStr), _step; !(_step = _iterator()).done;) {
    _loop();
  }
  return langs;
}
function getDefaultLanguage(_ref3) {
  var locales = _ref3.locales,
    defaultLang = _ref3.defaultLang;
  return locales.find(function (locale) {
    return locale.code === defaultLang;
  });
}
module.exports = {
  localizedPath: localizedPath,
  getLanguages: getLanguages,
  getDefaultLanguage: getDefaultLanguage
};