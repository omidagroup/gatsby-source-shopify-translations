"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _require = require("./operations"),
  createOperations = _require.createOperations;
var SHOPIFY_PRODUCT = "ShopifyProduct";
var SHOPIFY_COLLECTION = "ShopifyCollection";
var SHOPIFY_TRANSLATED_PRODUCT = "ShopifyTranslatedProduct";
var SHOPIFY_TRANSLATED_COLLECTION = "ShopifyTranslatedCollection";
exports.resources = [{
  id: "Product",
  nodeType: SHOPIFY_PRODUCT,
  translationsNodeType: SHOPIFY_TRANSLATED_PRODUCT,
  getOperation: function getOperation(pluginOptions, lang) {
    var _createOperations = createOperations((0, _extends2.default)({}, pluginOptions, {
        language: lang
      })),
      createTranslatedProductsOperation = _createOperations.createTranslatedProductsOperation;
    return createTranslatedProductsOperation;
  }
}, {
  id: "Collection",
  nodeType: SHOPIFY_COLLECTION,
  translationsNodeType: SHOPIFY_TRANSLATED_COLLECTION,
  getOperation: function getOperation(pluginOptions, lang) {
    var _createOperations2 = createOperations((0, _extends2.default)({}, pluginOptions, {
        language: lang
      })),
      createTranslatedCollectionsOperation = _createOperations2.createTranslatedCollectionsOperation;
    return createTranslatedCollectionsOperation;
  }
}];