/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

var Types = {};

var responseConverter = {"__root":{"siteStatisticsUpdated":{"n":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var variablesConverter = {};

function convertVariables(v) {
  return RescriptRelay.convertObj(v, variablesConverter, undefined, undefined);
}

var Internal = {
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  convertRawResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};

var Utils = {};

var node = ((function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentVisitorsOnline",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TopCardsDisplayer_currentVisitorsOnline_Subscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SiteStatistics",
        "kind": "LinkedField",
        "name": "siteStatisticsUpdated",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TopCardsDisplayer_currentVisitorsOnline_Subscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SiteStatistics",
        "kind": "LinkedField",
        "name": "siteStatisticsUpdated",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "baa20f0ef1a4dd4e353ad6c271c455bc",
    "id": null,
    "metadata": {},
    "name": "TopCardsDisplayer_currentVisitorsOnline_Subscription",
    "operationKind": "subscription",
    "text": "subscription TopCardsDisplayer_currentVisitorsOnline_Subscription {\n  siteStatisticsUpdated {\n    currentVisitorsOnline\n    id\n  }\n}\n"
  }
};
})());

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  
}
/* node Not a pure module */
