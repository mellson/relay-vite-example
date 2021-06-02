/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

function makeRefetchVariables(includeMembers, id, param) {
  return {
          includeMembers: includeMembers,
          id: id
        };
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};

var wrapResponseConverter = {"__root":{"node":{"f":"","n":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"node":{"f":"","n":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var variablesConverter = {};

function convertVariables(v) {
  return RescriptRelay.convertObj(v, variablesConverter, undefined, undefined);
}

var Internal = {
  wrapResponseConverter: wrapResponseConverter,
  wrapResponseConverterMap: undefined,
  convertWrapResponse: convertWrapResponse,
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapResponse,
  convertRawResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};

function makeVariables(includeMembers, id) {
  return {
          includeMembers: includeMembers,
          id: id
        };
}

var Utils = {
  makeVariables: makeVariables
};

var node = ((function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": false,
  "kind": "LocalArgument",
  "name": "includeMembers"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleTicketWorkingGroupRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "includeMembers",
                "variableName": "includeMembers"
              }
            ],
            "kind": "FragmentSpread",
            "name": "SingleTicketWorkingGroup_workingGroup"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SingleTicketWorkingGroupRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
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
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "fullName",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatarUrl",
                                "storageKey": null
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ab34f3c15793ee137833c416d7085617",
    "id": null,
    "metadata": {},
    "name": "SingleTicketWorkingGroupRefetchQuery",
    "operationKind": "query",
    "text": "query SingleTicketWorkingGroupRefetchQuery(\n  $includeMembers: Boolean! = false\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SingleTicketWorkingGroup_workingGroup_EL0Tc\n    id\n  }\n}\n\nfragment Avatar_user on User {\n  avatarUrl\n  fullName\n}\n\nfragment SingleTicketWorkingGroup_workingGroup_EL0Tc on WorkingGroup {\n  name\n  membersConnection @include(if: $includeMembers) {\n    edges {\n      node {\n        id\n        fullName\n        ...Avatar_user\n      }\n    }\n  }\n  id\n}\n"
  }
};
})());

var include = RescriptRelay.MakeLoadQuery({
      query: node,
      convertVariables: convertVariables
    });

var load = include.load;

var queryRefToObservable = include.queryRefToObservable;

var queryRefToPromise = include.queryRefToPromise;

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  load ,
  queryRefToObservable ,
  queryRefToPromise ,
  
}
/* node Not a pure module */
