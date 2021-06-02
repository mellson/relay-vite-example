/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

var Types = {};

var wrapResponseConverter = {"__root":{"deleteTodoItem":{"n":""},"deleteTodoItem_deletedTodoItemId":{"n":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"deleteTodoItem":{"n":""},"deleteTodoItem_deletedTodoItemId":{"n":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var wrapRawResponseConverter = {"__root":{"deleteTodoItem":{"n":""},"deleteTodoItem_deletedTodoItemId":{"n":""}}};

function convertWrapRawResponse(v) {
  return RescriptRelay.convertObj(v, wrapRawResponseConverter, undefined, null);
}

var rawResponseConverter = {"__root":{"deleteTodoItem":{"n":""},"deleteTodoItem_deletedTodoItemId":{"n":""}}};

function convertRawResponse(v) {
  return RescriptRelay.convertObj(v, rawResponseConverter, undefined, undefined);
}

var variablesConverter = {"DeleteTodoItemInput":{"clientMutationId":{"n":""}},"__root":{"input":{"r":"DeleteTodoItemInput"}}};

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
  wrapRawResponseConverter: wrapRawResponseConverter,
  wrapRawResponseConverterMap: undefined,
  convertWrapRawResponse: convertWrapRawResponse,
  rawResponseConverter: rawResponseConverter,
  rawResponseConverterMap: undefined,
  convertRawResponse: convertRawResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};

function make_deleteTodoItemInput(id, clientMutationId, param) {
  return {
          id: id,
          clientMutationId: clientMutationId
        };
}

function makeVariables(input, connections) {
  return {
          input: input,
          connections: connections
        };
}

function make_rawResponse_deleteTodoItem(deletedTodoItemId, param) {
  return {
          deletedTodoItemId: deletedTodoItemId
        };
}

function make_response_deleteTodoItem(deletedTodoItemId, param) {
  return {
          deletedTodoItemId: deletedTodoItemId
        };
}

function makeOptimisticResponse(deleteTodoItem, param) {
  return {
          deleteTodoItem: deleteTodoItem
        };
}

var Utils = {
  make_deleteTodoItemInput: make_deleteTodoItemInput,
  makeVariables: makeVariables,
  make_rawResponse_deleteTodoItem: make_rawResponse_deleteTodoItem,
  make_response_deleteTodoItem: make_response_deleteTodoItem,
  makeOptimisticResponse: makeOptimisticResponse
};

var node = ((function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedTodoItemId",
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
    "name": "SingleTodoDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTodoItemPayload",
        "kind": "LinkedField",
        "name": "deleteTodoItem",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SingleTodoDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteTodoItemPayload",
        "kind": "LinkedField",
        "name": "deleteTodoItem",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTodoItemId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d28fb164d230e5110a2b960f2fedd98f",
    "id": null,
    "metadata": {},
    "name": "SingleTodoDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation SingleTodoDeleteMutation(\n  $input: DeleteTodoItemInput!\n) {\n  deleteTodoItem(input: $input) {\n    deletedTodoItemId\n  }\n}\n"
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
