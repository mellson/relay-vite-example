/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

function makeRefetchVariables(param) {
  
}

var Types = {
  makeRefetchVariables: makeRefetchVariables
};

var wrapResponseConverter = {"__root":{"":{"f":""},"siteStatistics":{"f":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"":{"f":""},"siteStatistics":{"f":""}}};

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

var Utils = {};

var node = ((function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "kind": "Literal",
  "name": "after",
  "value": ""
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 2
  }
],
v3 = {
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v6 = [
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SiteStatistics",
        "kind": "LinkedField",
        "name": "siteStatistics",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TopCardsDisplayer_siteStatistics"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RecentTickets_query"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SiteStatistics",
        "kind": "LinkedField",
        "name": "siteStatistics",
        "plural": false,
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
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "TicketConnection",
        "kind": "LinkedField",
        "name": "ticketsConnection",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "assignee",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                          (v0/*: any*/)
                        ],
                        "type": "WorkingGroup",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v0/*: any*/)
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
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "ticketsConnection(after:\"\",first:2)"
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RecentTickets_ticketsConnection",
        "kind": "LinkedHandle",
        "name": "ticketsConnection"
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "TodoItemConnection",
        "kind": "LinkedField",
        "name": "todosConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodoItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TodoItem",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "text",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "completed",
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "ClientExtension",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__id",
                "storageKey": null
              }
            ]
          }
        ],
        "storageKey": "todosConnection(after:\"\",first:10)"
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "TodoList_query_todosConnection",
        "kind": "LinkedHandle",
        "name": "todosConnection"
      }
    ]
  },
  "params": {
    "cacheID": "52c43a418e212aedb46ba7a83bf163c0",
    "id": null,
    "metadata": {},
    "name": "MainQuery",
    "operationKind": "query",
    "text": "query MainQuery {\n  siteStatistics {\n    ...TopCardsDisplayer_siteStatistics\n    id\n  }\n  ...RecentTickets_query\n  ...TodoList_query\n}\n\nfragment Avatar_user on User {\n  avatarUrl\n  fullName\n}\n\nfragment RecentTickets_query on Query {\n  ticketsConnection(first: 2, after: \"\") {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        ...SingleTicket_ticket\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment SingleTicketWorkingGroup_workingGroup on WorkingGroup {\n  name\n  id\n}\n\nfragment SingleTicket_ticket on Ticket {\n  assignee {\n    __typename\n    ... on User {\n      ...Avatar_user\n    }\n    ... on WorkingGroup {\n      ...SingleTicketWorkingGroup_workingGroup\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  id\n  subject\n  lastUpdated\n  trackingId\n  ...TicketStatusBadge_ticket\n}\n\nfragment SingleTodo_todoItem on TodoItem {\n  id\n  text\n  completed\n}\n\nfragment TicketStatusBadge_ticket on Ticket {\n  status\n  dbId\n}\n\nfragment TodoList_query on Query {\n  todosConnection(first: 10, after: \"\") {\n    edges {\n      node {\n        id\n        ...SingleTodo_todoItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TopCardsDisplayer_siteStatistics on SiteStatistics {\n  weeklySales\n  weeklyOrders\n  currentVisitorsOnline\n}\n"
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
