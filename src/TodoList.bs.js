

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RelayRuntime from "relay-runtime";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as SingleTodo$ReasonReactExamples from "./SingleTodo.bs.js";
import * as TodoList_query_graphql$ReasonReactExamples from "./__generated__/TodoList_query_graphql.bs.js";
import * as TodoListAddTodoMutation_graphql$ReasonReactExamples from "./__generated__/TodoListAddTodoMutation_graphql.bs.js";

var getConnectionNodes = TodoList_query_graphql$ReasonReactExamples.Utils.getConnectionNodes;

function use(fRef) {
  var data = Hooks.useFragment(TodoList_query_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(TodoList_query_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(TodoList_query_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return TodoList_query_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var TodoListFragment = {
  getConnectionNodes: getConnectionNodes,
  Types: undefined,
  use: use,
  useOpt: useOpt
};

var make_addTodoItemInput = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.make_addTodoItemInput;

var makeVariables = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.makeVariables;

function commitMutation(environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, uploadables, param) {
  return RelayRuntime.commitMutation(environment, {
              mutation: TodoListAddTodoMutation_graphql$ReasonReactExamples.node,
              variables: TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertVariables(variables),
              onCompleted: (function (res, err) {
                  if (onCompleted !== undefined) {
                    return Curry._2(onCompleted, TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertResponse(res), (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              onError: (function (err) {
                  if (onError !== undefined) {
                    return Curry._1(onError, (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              optimisticResponse: optimisticResponse !== undefined ? TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertWrapRawResponse(optimisticResponse) : undefined,
              optimisticUpdater: optimisticUpdater,
              updater: updater !== undefined ? (function (store, r) {
                    return Curry._2(updater, store, TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertResponse(r));
                  }) : undefined,
              uploadables: uploadables
            });
}

function use$1(param) {
  var match = Hooks.useMutation(TodoListAddTodoMutation_graphql$ReasonReactExamples.node);
  var mutate = match[0];
  return [
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
                    return Curry._1(mutate, {
                                onError: param,
                                onCompleted: param$1 !== undefined ? (function (r, errors) {
                                      return Curry._2(param$1, TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertResponse(r), (errors == null) ? undefined : Caml_option.some(errors));
                                    }) : undefined,
                                onUnsubscribe: param$2,
                                optimisticResponse: param$3 !== undefined ? TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertWrapRawResponse(param$3) : undefined,
                                optimisticUpdater: param$4,
                                updater: param$5 !== undefined ? (function (store, r) {
                                      return Curry._2(param$5, store, TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertResponse(r));
                                    }) : undefined,
                                variables: TodoListAddTodoMutation_graphql$ReasonReactExamples.Internal.convertVariables(param$6),
                                uploadables: param$7
                              });
                  };
                }), [mutate]),
          match[1]
        ];
}

var AddTodoMutation_make_rawResponse_addTodoItem_addedTodoItemEdge_node = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.make_rawResponse_addTodoItem_addedTodoItemEdge_node;

var AddTodoMutation_make_rawResponse_addTodoItem_addedTodoItemEdge = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.make_rawResponse_addTodoItem_addedTodoItemEdge;

var AddTodoMutation_make_rawResponse_addTodoItem = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.make_rawResponse_addTodoItem;

var AddTodoMutation_make_response_addTodoItem_addedTodoItemEdge_node = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.make_response_addTodoItem_addedTodoItemEdge_node;

var AddTodoMutation_make_response_addTodoItem_addedTodoItemEdge = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.make_response_addTodoItem_addedTodoItemEdge;

var AddTodoMutation_make_response_addTodoItem = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.make_response_addTodoItem;

var AddTodoMutation_makeOptimisticResponse = TodoListAddTodoMutation_graphql$ReasonReactExamples.Utils.makeOptimisticResponse;

var AddTodoMutation = {
  make_addTodoItemInput: make_addTodoItemInput,
  makeVariables: makeVariables,
  make_rawResponse_addTodoItem_addedTodoItemEdge_node: AddTodoMutation_make_rawResponse_addTodoItem_addedTodoItemEdge_node,
  make_rawResponse_addTodoItem_addedTodoItemEdge: AddTodoMutation_make_rawResponse_addTodoItem_addedTodoItemEdge,
  make_rawResponse_addTodoItem: AddTodoMutation_make_rawResponse_addTodoItem,
  make_response_addTodoItem_addedTodoItemEdge_node: AddTodoMutation_make_response_addTodoItem_addedTodoItemEdge_node,
  make_response_addTodoItem_addedTodoItemEdge: AddTodoMutation_make_response_addTodoItem_addedTodoItemEdge,
  make_response_addTodoItem: AddTodoMutation_make_response_addTodoItem,
  makeOptimisticResponse: AddTodoMutation_makeOptimisticResponse,
  Types: undefined,
  commitMutation: commitMutation,
  use: use$1
};

function TodoList(Props) {
  var queryRef = Props.query;
  var todoListData = use(queryRef);
  var match = use$1(undefined);
  var addTodo = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setNewTodoText = match$1[1];
  var newTodoText = match$1[0];
  var tmp = newTodoText === "" ? true : false;
  return React.createElement("div", {
              className: "card"
            }, React.createElement("div", {
                  className: "card-body"
                }, React.createElement("h4", {
                      className: "card-title text-white"
                    }, "Todo"), React.createElement("form", {
                      onSubmit: (function (ev) {
                          ev.preventDefault();
                          Curry.app(addTodo, [
                                undefined,
                                (function (param, param$1) {
                                    return Curry._1(setNewTodoText, (function (param) {
                                                  return "";
                                                }));
                                  }),
                                undefined,
                                {
                                  addTodoItem: {
                                    addedTodoItemEdge: {
                                      node: {
                                        id: RelayRuntime.generateUniqueClientID(),
                                        text: newTodoText,
                                        completed: false
                                      }
                                    }
                                  }
                                },
                                undefined,
                                undefined,
                                Curry._2(makeVariables, Curry._3(make_addTodoItemInput, newTodoText, undefined, undefined), [todoListData.todosConnection.__id]),
                                undefined,
                                undefined
                              ]);
                          
                        })
                    }, React.createElement("div", {
                          className: "add-items d-flex"
                        }, React.createElement("input", {
                              className: "form-control todo-list-input",
                              placeholder: "What do you need to do today?",
                              type: "text",
                              value: newTodoText,
                              onChange: (function ($$event) {
                                  var value = $$event.currentTarget.value;
                                  return Curry._1(setNewTodoText, (function (param) {
                                                return value;
                                              }));
                                })
                            }), React.createElement("button", {
                              className: "add btn btn-gradient-primary font-weight-bold todo-list-add-btn",
                              id: "add-task",
                              disabled: tmp,
                              type: "submit"
                            }, "Add"))), React.createElement("div", {
                      className: "list-wrapper"
                    }, React.createElement("ul", {
                          className: "d-flex flex-column-reverse todo-list todo-list-custom"
                        }, Belt_Array.map(Curry._1(getConnectionNodes, todoListData.todosConnection), (function (todoItem) {
                                return React.createElement(SingleTodo$ReasonReactExamples.make, {
                                            checked: true,
                                            todoItem: todoItem.fragmentRefs,
                                            todosConnectionId: todoListData.todosConnection.__id,
                                            key: todoItem.id
                                          });
                              }))))));
}

var make = TodoList;

export {
  TodoListFragment ,
  AddTodoMutation ,
  make ,
  
}
/* react Not a pure module */
