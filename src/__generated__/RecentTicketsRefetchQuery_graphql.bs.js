/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

function makeRefetchVariables(after, first, param) {
  return {
          after: after,
          first: first
        };
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};

var wrapResponseConverter = {"__root":{"":{"f":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"":{"f":""}}};

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

function makeVariables(after, first) {
  return {
          after: after,
          first: first
        };
}

var Utils = {
  makeVariables: makeVariables
};

var node = ((function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 2,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecentTicketsRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "RecentTickets_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecentTicketsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TicketConnection",
        "kind": "LinkedField",
        "name": "ticketsConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TicketEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Ticket",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "assignee",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "avatarUrl",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          }
                        ],
                        "type": "User",
                        "abstractKey": null
                      },
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
                          (v2/*: any*/)
                        ],
                        "type": "WorkingGroup",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
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
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "dbId",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RecentTickets_ticketsConnection",
        "kind": "LinkedHandle",
        "name": "ticketsConnection"
      }
    ]
  },
  "params": {
    "cacheID": "f1587652ca0eb7dba3ec45d79698549a",
    "id": null,
    "metadata": {},
    "name": "RecentTicketsRefetchQuery",
    "operationKind": "query",
    "text": "query RecentTicketsRefetchQuery(\n  $after: String! = \"\"\n  $first: Int! = 2\n) {\n  ...RecentTickets_query_2HEEH6\n}\n\nfragment Avatar_user on User {\n  avatarUrl\n  fullName\n}\n\nfragment RecentTickets_query_2HEEH6 on Query {\n  ticketsConnection(first: $first, after: $after) {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        ...SingleTicket_ticket\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment SingleTicketWorkingGroup_workingGroup on WorkingGroup {\n  name\n  id\n}\n\nfragment SingleTicket_ticket on Ticket {\n  assignee {\n    __typename\n    ... on User {\n      ...Avatar_user\n    }\n    ... on WorkingGroup {\n      ...SingleTicketWorkingGroup_workingGroup\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  id\n  subject\n  lastUpdated\n  trackingId\n  ...TicketStatusBadge_ticket\n}\n\nfragment TicketStatusBadge_ticket on Ticket {\n  status\n  dbId\n}\n"
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
