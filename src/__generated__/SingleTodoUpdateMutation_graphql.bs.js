/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

var Types = {};

var wrapResponseConverter = {"__root":{"updateTodoItem_updatedTodoItem_completed":{"n":""},"updateTodoItem_updatedTodoItem":{"n":""},"updateTodoItem":{"n":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"updateTodoItem_updatedTodoItem_completed":{"n":""},"updateTodoItem_updatedTodoItem":{"n":""},"updateTodoItem":{"n":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var variablesConverter = {"UpdateTodoItemInput":{"clientMutationId":{"n":""}},"__root":{"input":{"r":"UpdateTodoItemInput"}}};

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

function make_updateTodoItemInput(id, text, completed, clientMutationId, param) {
  return {
          id: id,
          text: text,
          completed: completed,
          clientMutationId: clientMutationId
        };
}

function makeVariables(input) {
  return {
          input: input
        };
}

function make_response_updateTodoItem_updatedTodoItem(id, text, completed, param) {
  return {
          id: id,
          text: text,
          completed: completed
        };
}

function make_response_updateTodoItem(updatedTodoItem, param) {
  return {
          updatedTodoItem: updatedTodoItem
        };
}

function makeOptimisticResponse(updateTodoItem, param) {
  return {
          updateTodoItem: updateTodoItem
        };
}

var Utils = {
  make_updateTodoItemInput: make_updateTodoItemInput,
  makeVariables: makeVariables,
  make_response_updateTodoItem_updatedTodoItem: make_response_updateTodoItem_updatedTodoItem,
  make_response_updateTodoItem: make_response_updateTodoItem,
  makeOptimisticResponse: makeOptimisticResponse
};

var node = ((function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateTodoItemPayload",
    "kind": "LinkedField",
    "name": "updateTodoItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "updatedTodoItem",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleTodoUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SingleTodoUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8481abbb88754162a4bd7301d1150105",
    "id": null,
    "metadata": {},
    "name": "SingleTodoUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation SingleTodoUpdateMutation(\n  $input: UpdateTodoItemInput!\n) {\n  updateTodoItem(input: $input) {\n    updatedTodoItem {\n      id\n      text\n      completed\n    }\n  }\n}\n"
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
