/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

var Types = {};

function unwrap_fragment_assignee(u) {
  var v = u.__typename;
  switch (v) {
    case "User" :
        return {
                NAME: "User",
                VAL: u
              };
    case "WorkingGroup" :
        return {
                NAME: "WorkingGroup",
                VAL: u
              };
    default:
      return {
              NAME: "UnselectedUnionMember",
              VAL: v
            };
  }
}

function wrap_fragment_assignee(v) {
  var variant = v.NAME;
  if (variant === "User" || variant === "WorkingGroup") {
    return v.VAL;
  } else {
    return {
            __typename: v.VAL
          };
  }
}

var fragmentConverter = {"__root":{"":{"f":""},"assignee_user":{"f":""},"assignee":{"n":"","u":"fragment_assignee"},"assignee_workinggroup":{"f":""},"lastUpdated":{"n":""}}};

var fragmentConverterMap = {
  fragment_assignee: unwrap_fragment_assignee
};

function convertFragment(v) {
  return RescriptRelay.convertObj(v, fragmentConverter, fragmentConverterMap, undefined);
}

var Internal = {
  fragmentConverter: fragmentConverter,
  fragmentConverterMap: fragmentConverterMap,
  convertFragment: convertFragment
};

var Utils = {};

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SingleTicket_ticket",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "assignee",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Avatar_user"
            }
          ],
          "type": "User",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "SingleTicketWorkingGroup_workingGroup"
            }
          ],
          "type": "WorkingGroup",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subject",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastUpdated",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "trackingId",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TicketStatusBadge_ticket"
    }
  ],
  "type": "Ticket",
  "abstractKey": null
};

export {
  Types ,
  unwrap_fragment_assignee ,
  wrap_fragment_assignee ,
  Internal ,
  Utils ,
  node ,
  
}
/* RescriptRelay Not a pure module */
