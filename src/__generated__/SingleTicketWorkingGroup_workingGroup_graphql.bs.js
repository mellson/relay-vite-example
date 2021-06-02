/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as SingleTicketWorkingGroupRefetchQuery_graphql$ReasonReactExamples from "./SingleTicketWorkingGroupRefetchQuery_graphql.bs.js";

var Types = {};

var fragmentConverter = {"__root":{"membersConnection_edges":{"n":"","na":""},"membersConnection":{"n":""},"membersConnection_edges_node":{"f":"","n":""}}};

function convertFragment(v) {
  return RescriptRelay.convertObj(v, fragmentConverter, undefined, undefined);
}

var Internal = {
  fragmentConverter: fragmentConverter,
  fragmentConverterMap: undefined,
  convertFragment: convertFragment
};

var Utils = {};

function makeNode(node_SingleTicketWorkingGroupRefetchQuery) {
  return ((function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "includeMembers"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": node_SingleTicketWorkingGroupRefetchQuery,
      "identifierField": "id"
    }
  },
  "name": "SingleTicketWorkingGroup_workingGroup",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "condition": "includeMembers",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserConnection",
          "kind": "LinkedField",
          "name": "membersConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "UserEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "User",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "fullName",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "Avatar_user"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "WorkingGroup",
  "abstractKey": null
};
})());
}

var node = makeNode(SingleTicketWorkingGroupRefetchQuery_graphql$ReasonReactExamples.node);

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  
}
/* node Not a pure module */
