/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

var Types = {};

var wrapResponseConverter = {"__root":{"addTodoItem_addedTodoItemEdge_node_completed":{"n":""},"addTodoItem_addedTodoItemEdge_node":{"n":""},"addTodoItem":{"n":""},"addTodoItem_addedTodoItemEdge":{"n":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"addTodoItem_addedTodoItemEdge_node_completed":{"n":""},"addTodoItem_addedTodoItemEdge_node":{"n":""},"addTodoItem":{"n":""},"addTodoItem_addedTodoItemEdge":{"n":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var wrapRawResponseConverter = {"__root":{"addTodoItem_addedTodoItemEdge_node_completed":{"n":""},"addTodoItem_addedTodoItemEdge_node":{"n":""},"addTodoItem":{"n":""},"addTodoItem_addedTodoItemEdge":{"n":""}}};

function convertWrapRawResponse(v) {
  return RescriptRelay.convertObj(v, wrapRawResponseConverter, undefined, null);
}

var rawResponseConverter = {"__root":{"addTodoItem_addedTodoItemEdge_node_completed":{"n":""},"addTodoItem_addedTodoItemEdge_node":{"n":""},"addTodoItem":{"n":""},"addTodoItem_addedTodoItemEdge":{"n":""}}};

function convertRawResponse(v) {
  return RescriptRelay.convertObj(v, rawResponseConverter, undefined, undefined);
}

var variablesConverter = {"__root":{"input":{"r":"AddTodoItemInput"}},"AddTodoItemInput":{"clientMutationId":{"n":""}}};

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

function make_addTodoItemInput(text, clientMutationId, param) {
  return {
          text: text,
          clientMutationId: clientMutationId
        };
}

function makeVariables(input, connections) {
  return {
          input: input,
          connections: connections
        };
}

function make_rawResponse_addTodoItem_addedTodoItemEdge_node(id, text, completed, param) {
  return {
          id: id,
          text: text,
          completed: completed
        };
}

function make_rawResponse_addTodoItem_addedTodoItemEdge(node, param) {
  return {
          node: node
        };
}

function make_rawResponse_addTodoItem(addedTodoItemEdge, param) {
  return {
          addedTodoItemEdge: addedTodoItemEdge
        };
}

function make_response_addTodoItem_addedTodoItemEdge_node(id, text, completed, param) {
  return {
          id: id,
          text: text,
          completed: completed
        };
}

function make_response_addTodoItem_addedTodoItemEdge(node, param) {
  return {
          node: node
        };
}

function make_response_addTodoItem(addedTodoItemEdge, param) {
  return {
          addedTodoItemEdge: addedTodoItemEdge
        };
}

function makeOptimisticResponse(addTodoItem, param) {
  return {
          addTodoItem: addTodoItem
        };
}

var Utils = {
  make_addTodoItemInput: make_addTodoItemInput,
  makeVariables: makeVariables,
  make_rawResponse_addTodoItem_addedTodoItemEdge_node: make_rawResponse_addTodoItem_addedTodoItemEdge_node,
  make_rawResponse_addTodoItem_addedTodoItemEdge: make_rawResponse_addTodoItem_addedTodoItemEdge,
  make_rawResponse_addTodoItem: make_rawResponse_addTodoItem,
  make_response_addTodoItem_addedTodoItemEdge_node: make_response_addTodoItem_addedTodoItemEdge_node,
  make_response_addTodoItem_addedTodoItemEdge: make_response_addTodoItem_addedTodoItemEdge,
  make_response_addTodoItem: make_response_addTodoItem,
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
  "concreteType": "TodoItemEdge",
  "kind": "LinkedField",
  "name": "addedTodoItemEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TodoItem",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
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
          "name": "text",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "completed",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
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
    "name": "TodoListAddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddTodoItemPayload",
        "kind": "LinkedField",
        "name": "addTodoItem",
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
    "name": "TodoListAddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "AddTodoItemPayload",
        "kind": "LinkedField",
        "name": "addTodoItem",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "addedTodoItemEdge",
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
    "cacheID": "24a0ab7c7226072ae69fe6c5dcac2e97",
    "id": null,
    "metadata": {},
    "name": "TodoListAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListAddTodoMutation(\n  $input: AddTodoItemInput!\n) {\n  addTodoItem(input: $input) {\n    addedTodoItemEdge {\n      node {\n        id\n        text\n        completed\n      }\n    }\n  }\n}\n"
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
