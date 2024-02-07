"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));
var _templateObject, _templateObject2;
var _require = require("@apollo/client"),
  gql = _require.gql;
exports.translatedProductsQuery = function (ids, identifiers) {
  return {
    query: gql(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n      query translatedThings(\n        $ids: [ID!]!\n        $identifiers: [HasMetafieldsIdentifier!]!\n      ) {\n        nodes(ids: $ids) {\n          ... on Product {\n            __typename\n            id\n            title\n            description\n            descriptionHtml\n            handle\n            productType\n            collections(first: 10) {\n              edges {\n                node {\n                  id\n                  title\n                }\n              }\n            }\n            options {\n              __typename\n              name\n              values\n            }\n            variants(first: 30) {\n              edges {\n                node {\n                  id\n                  title\n                  selectedOptions {\n                    name\n                    value\n                  }\n                }\n              }\n            }\n            metafields(identifiers: $identifiers) {\n              key\n              value\n              namespace\n            }\n          }\n        }\n      }\n    "]))),
    variables: {
      ids: ids,
      identifiers: identifiers
    }
  };
};
exports.translatedCollectionsQuery = function (ids) {
  return {
    query: gql(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n      query translatedThings($ids: [ID!]!) {\n        nodes(ids: $ids) {\n          ... on Collection {\n            __typename\n            id\n            title\n            description\n            descriptionHtml\n            handle\n          }\n        }\n      }\n    "]))),
    variables: {
      ids: ids
    }
  };
};