

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RelayRuntime from "relay-runtime";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as RelayEnv$ReasonReactExamples from "./RelayEnv.bs.js";
import * as SingleTodo_todoItem_graphql$ReasonReactExamples from "./__generated__/SingleTodo_todoItem_graphql.bs.js";
import * as SingleTodoDeleteMutation_graphql$ReasonReactExamples from "./__generated__/SingleTodoDeleteMutation_graphql.bs.js";
import * as SingleTodoUpdateMutation_graphql$ReasonReactExamples from "./__generated__/SingleTodoUpdateMutation_graphql.bs.js";

function use(fRef) {
  var data = Hooks.useFragment(SingleTodo_todoItem_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(SingleTodo_todoItem_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(SingleTodo_todoItem_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return SingleTodo_todoItem_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var TodoFragment = {
  Types: undefined,
  use: use,
  useOpt: useOpt
};

function commitMutation(environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, uploadables, param) {
  return RelayRuntime.commitMutation(environment, {
              mutation: SingleTodoDeleteMutation_graphql$ReasonReactExamples.node,
              variables: SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertVariables(variables),
              onCompleted: (function (res, err) {
                  if (onCompleted !== undefined) {
                    return Curry._2(onCompleted, SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertResponse(res), (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              onError: (function (err) {
                  if (onError !== undefined) {
                    return Curry._1(onError, (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              optimisticResponse: optimisticResponse !== undefined ? SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertWrapRawResponse(optimisticResponse) : undefined,
              optimisticUpdater: optimisticUpdater,
              updater: updater !== undefined ? (function (store, r) {
                    return Curry._2(updater, store, SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertResponse(r));
                  }) : undefined,
              uploadables: uploadables
            });
}

function use$1(param) {
  var match = Hooks.useMutation(SingleTodoDeleteMutation_graphql$ReasonReactExamples.node);
  var mutate = match[0];
  return [
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
                    return Curry._1(mutate, {
                                onError: param,
                                onCompleted: param$1 !== undefined ? (function (r, errors) {
                                      return Curry._2(param$1, SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertResponse(r), (errors == null) ? undefined : Caml_option.some(errors));
                                    }) : undefined,
                                onUnsubscribe: param$2,
                                optimisticResponse: param$3 !== undefined ? SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertWrapRawResponse(param$3) : undefined,
                                optimisticUpdater: param$4,
                                updater: param$5 !== undefined ? (function (store, r) {
                                      return Curry._2(param$5, store, SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertResponse(r));
                                    }) : undefined,
                                variables: SingleTodoDeleteMutation_graphql$ReasonReactExamples.Internal.convertVariables(param$6),
                                uploadables: param$7
                              });
                  };
                }), [mutate]),
          match[1]
        ];
}

var DeleteMutation_make_deleteTodoItemInput = SingleTodoDeleteMutation_graphql$ReasonReactExamples.Utils.make_deleteTodoItemInput;

var DeleteMutation_makeVariables = SingleTodoDeleteMutation_graphql$ReasonReactExamples.Utils.makeVariables;

var DeleteMutation_make_rawResponse_deleteTodoItem = SingleTodoDeleteMutation_graphql$ReasonReactExamples.Utils.make_rawResponse_deleteTodoItem;

var DeleteMutation_make_response_deleteTodoItem = SingleTodoDeleteMutation_graphql$ReasonReactExamples.Utils.make_response_deleteTodoItem;

var DeleteMutation_makeOptimisticResponse = SingleTodoDeleteMutation_graphql$ReasonReactExamples.Utils.makeOptimisticResponse;

var DeleteMutation = {
  make_deleteTodoItemInput: DeleteMutation_make_deleteTodoItemInput,
  makeVariables: DeleteMutation_makeVariables,
  make_rawResponse_deleteTodoItem: DeleteMutation_make_rawResponse_deleteTodoItem,
  make_response_deleteTodoItem: DeleteMutation_make_response_deleteTodoItem,
  makeOptimisticResponse: DeleteMutation_makeOptimisticResponse,
  Types: undefined,
  commitMutation: commitMutation,
  use: use$1
};

function commitMutation$1(environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, uploadables, param) {
  return RelayRuntime.commitMutation(environment, {
              mutation: SingleTodoUpdateMutation_graphql$ReasonReactExamples.node,
              variables: SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertVariables(variables),
              onCompleted: (function (res, err) {
                  if (onCompleted !== undefined) {
                    return Curry._2(onCompleted, SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertResponse(res), (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              onError: (function (err) {
                  if (onError !== undefined) {
                    return Curry._1(onError, (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              optimisticResponse: optimisticResponse !== undefined ? SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertWrapRawResponse(optimisticResponse) : undefined,
              optimisticUpdater: optimisticUpdater,
              updater: updater !== undefined ? (function (store, r) {
                    return Curry._2(updater, store, SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertResponse(r));
                  }) : undefined,
              uploadables: uploadables
            });
}

function use$2(param) {
  var match = Hooks.useMutation(SingleTodoUpdateMutation_graphql$ReasonReactExamples.node);
  var mutate = match[0];
  return [
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
                    return Curry._1(mutate, {
                                onError: param,
                                onCompleted: param$1 !== undefined ? (function (r, errors) {
                                      return Curry._2(param$1, SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertResponse(r), (errors == null) ? undefined : Caml_option.some(errors));
                                    }) : undefined,
                                onUnsubscribe: param$2,
                                optimisticResponse: param$3 !== undefined ? SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertWrapRawResponse(param$3) : undefined,
                                optimisticUpdater: param$4,
                                updater: param$5 !== undefined ? (function (store, r) {
                                      return Curry._2(param$5, store, SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertResponse(r));
                                    }) : undefined,
                                variables: SingleTodoUpdateMutation_graphql$ReasonReactExamples.Internal.convertVariables(param$6),
                                uploadables: param$7
                              });
                  };
                }), [mutate]),
          match[1]
        ];
}

var UpdateMutation_make_updateTodoItemInput = SingleTodoUpdateMutation_graphql$ReasonReactExamples.Utils.make_updateTodoItemInput;

var UpdateMutation_makeVariables = SingleTodoUpdateMutation_graphql$ReasonReactExamples.Utils.makeVariables;

var UpdateMutation_make_response_updateTodoItem_updatedTodoItem = SingleTodoUpdateMutation_graphql$ReasonReactExamples.Utils.make_response_updateTodoItem_updatedTodoItem;

var UpdateMutation_make_response_updateTodoItem = SingleTodoUpdateMutation_graphql$ReasonReactExamples.Utils.make_response_updateTodoItem;

var UpdateMutation_makeOptimisticResponse = SingleTodoUpdateMutation_graphql$ReasonReactExamples.Utils.makeOptimisticResponse;

var UpdateMutation = {
  make_updateTodoItemInput: UpdateMutation_make_updateTodoItemInput,
  makeVariables: UpdateMutation_makeVariables,
  make_response_updateTodoItem_updatedTodoItem: UpdateMutation_make_response_updateTodoItem_updatedTodoItem,
  make_response_updateTodoItem: UpdateMutation_make_response_updateTodoItem,
  makeOptimisticResponse: UpdateMutation_makeOptimisticResponse,
  Types: undefined,
  commitMutation: commitMutation$1,
  use: use$2
};

function SingleTodo(Props) {
  var checked = Props.checked;
  var todoItemRef = Props.todoItem;
  var todosConnectionId = Props.todosConnectionId;
  var todoItem = use(todoItemRef);
  var match = todoItem.completed;
  return React.createElement("li", {
              className: match !== undefined && match ? "completed" : ""
            }, React.createElement("div", {
                  className: "form-check"
                }, React.createElement("label", {
                      className: "form-check-label"
                    }, React.createElement("input", {
                          className: "checkbox",
                          checked: checked,
                          type: "checkbox",
                          onChange: (function (param) {
                              var completed = !Belt_Option.getWithDefault(todoItem.completed, false);
                              commitMutation$1(RelayEnv$ReasonReactExamples.environment, {
                                    input: {
                                      id: todoItem.id,
                                      text: todoItem.text,
                                      completed: completed,
                                      clientMutationId: undefined
                                    }
                                  }, undefined, {
                                    updateTodoItem: {
                                      updatedTodoItem: {
                                        id: todoItem.id,
                                        text: todoItem.text,
                                        completed: completed
                                      }
                                    }
                                  }, undefined, undefined, undefined, undefined, undefined);
                              
                            })
                        }), todoItem.text)), React.createElement("i", {
                  className: "remove mdi mdi-close-circle-outline",
                  role: "button",
                  onClick: (function (param) {
                      commitMutation(RelayEnv$ReasonReactExamples.environment, {
                            input: {
                              id: todoItem.id,
                              clientMutationId: undefined
                            },
                            connections: [todosConnectionId]
                          }, undefined, {
                            deleteTodoItem: {
                              deletedTodoItemId: todoItem.id
                            }
                          }, undefined, undefined, undefined, undefined, undefined);
                      
                    })
                }));
}

var make = SingleTodo;

export {
  TodoFragment ,
  DeleteMutation ,
  UpdateMutation ,
  make ,
  
}
/* react Not a pure module */
