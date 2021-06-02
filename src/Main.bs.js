

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as $$Promise from "reason-promise/src/js/promise.bs.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as RelayRuntime from "relay-runtime";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as Header$ReasonReactExamples from "./Header.bs.js";
import * as TodoList$ReasonReactExamples from "./TodoList.bs.js";
import * as RecentTickets$ReasonReactExamples from "./RecentTickets.bs.js";
import * as MainQuery_graphql$ReasonReactExamples from "./__generated__/MainQuery_graphql.bs.js";
import * as TopCardsDisplayer$ReasonReactExamples from "./TopCardsDisplayer.bs.js";

function use(variables, fetchPolicy, fetchKey, networkCacheConfig, param) {
  var data = Hooks.useLazyLoadQuery(MainQuery_graphql$ReasonReactExamples.node, RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(MainQuery_graphql$ReasonReactExamples.Internal.convertVariables(variables)), {
        fetchKey: fetchKey,
        fetchPolicy: RescriptRelay.mapFetchPolicy(fetchPolicy),
        networkCacheConfig: networkCacheConfig
      });
  return RescriptRelay_Internal.internal_useConvertedValue(MainQuery_graphql$ReasonReactExamples.Internal.convertResponse, data);
}

function useLoader(param) {
  var match = Hooks.useQueryLoader(MainQuery_graphql$ReasonReactExamples.node);
  var loadQueryFn = match[1];
  var loadQuery = React.useMemo((function () {
          return function (param, param$1, param$2, param$3) {
            return Curry._2(loadQueryFn, MainQuery_graphql$ReasonReactExamples.Internal.convertVariables(param), {
                        fetchPolicy: param$1,
                        networkCacheConfig: param$2
                      });
          };
        }), [loadQueryFn]);
  return [
          Caml_option.nullable_to_opt(match[0]),
          loadQuery,
          match[2]
        ];
}

function $$fetch(environment, variables, onResult, networkCacheConfig, fetchPolicy, param) {
  Hooks.fetchQuery(environment, MainQuery_graphql$ReasonReactExamples.node, MainQuery_graphql$ReasonReactExamples.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).subscribe({
        next: (function (res) {
            return Curry._1(onResult, {
                        TAG: /* Ok */0,
                        _0: MainQuery_graphql$ReasonReactExamples.Internal.convertResponse(res)
                      });
          }),
        error: (function (err) {
            return Curry._1(onResult, {
                        TAG: /* Error */1,
                        _0: err
                      });
          })
      });
  
}

function fetchPromised(environment, variables, networkCacheConfig, fetchPolicy, param) {
  return $$Promise.map(Hooks.fetchQuery(environment, MainQuery_graphql$ReasonReactExamples.node, MainQuery_graphql$ReasonReactExamples.Internal.convertVariables(variables), {
                    networkCacheConfig: networkCacheConfig,
                    fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
                  }).toPromise(), (function (res) {
                return MainQuery_graphql$ReasonReactExamples.Internal.convertResponse(res);
              }));
}

function usePreloaded(queryRef, param) {
  var data = Hooks.usePreloadedQuery(MainQuery_graphql$ReasonReactExamples.node, queryRef);
  return RescriptRelay_Internal.internal_useConvertedValue(MainQuery_graphql$ReasonReactExamples.Internal.convertResponse, data);
}

function retain(environment, variables) {
  var operationDescriptor = RelayRuntime.createOperationDescriptor(MainQuery_graphql$ReasonReactExamples.node, MainQuery_graphql$ReasonReactExamples.Internal.convertVariables(variables));
  return environment.retain(operationDescriptor);
}

var Query = {
  Types: undefined,
  use: use,
  useLoader: useLoader,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  usePreloaded: usePreloaded,
  retain: retain
};

function Main(Props) {
  var query = use(undefined, undefined, undefined, undefined, undefined);
  return React.createElement("div", {
              className: "main-panel"
            }, React.createElement("div", {
                  className: "content-wrapper"
                }, React.createElement(Header$ReasonReactExamples.make, {}), React.createElement(TopCardsDisplayer$ReasonReactExamples.make, {
                      siteStatistics: query.siteStatistics.fragmentRefs
                    }), React.createElement("div", {
                      className: "row"
                    }, React.createElement("div", {
                          className: "col-8 grid-margin"
                        }, React.createElement(RecentTickets$ReasonReactExamples.make, {
                              query: query.fragmentRefs
                            })), React.createElement("div", {
                          className: "col-4 grid-margin"
                        }, React.createElement(TodoList$ReasonReactExamples.make, {
                              query: query.fragmentRefs
                            })))));
}

var make = Main;

export {
  Query ,
  make ,
  
}
/* react Not a pure module */
