/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

var Types = {};

var fragmentConverter = {};

function convertFragment(v) {
  return RescriptRelay.convertObj(v, fragmentConverter, undefined, undefined);
}

var Internal = {
  fragmentConverter: fragmentConverter,
  fragmentConverterMap: undefined,
  convertFragment: convertFragment
};

var Utils = {};

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TopCardsDisplayer_siteStatistics",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "weeklySales",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "weeklyOrders",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentVisitorsOnline",
      "storageKey": null
    }
  ],
  "type": "SiteStatistics",
  "abstractKey": null
};

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  
}
/* RescriptRelay Not a pure module */
