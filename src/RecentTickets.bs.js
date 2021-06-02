

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as SingleTicket$ReasonReactExamples from "./SingleTicket.bs.js";
import * as RecentTickets_query_graphql$ReasonReactExamples from "./__generated__/RecentTickets_query_graphql.bs.js";
import * as RecentTicketsRefetchQuery_graphql$ReasonReactExamples from "./__generated__/RecentTicketsRefetchQuery_graphql.bs.js";

var getConnectionNodes = RecentTickets_query_graphql$ReasonReactExamples.Utils.getConnectionNodes;

function internal_makeRefetchableFnOpts(fetchPolicy, onComplete, param) {
  var tmp = {};
  var tmp$1 = RescriptRelay.mapFetchPolicy(fetchPolicy);
  if (tmp$1 !== undefined) {
    tmp.fetchPolicy = Caml_option.valFromOption(tmp$1);
  }
  var tmp$2 = RescriptRelay_Internal.internal_nullableToOptionalExnHandler(onComplete);
  if (tmp$2 !== undefined) {
    tmp.onComplete = Caml_option.valFromOption(tmp$2);
  }
  return tmp;
}

function useRefetchable(fRef) {
  var match = Hooks.useRefetchableFragment(RecentTickets_query_graphql$ReasonReactExamples.node, fRef);
  var refetchFn = match[1];
  var data = RescriptRelay_Internal.internal_useConvertedValue(RecentTickets_query_graphql$ReasonReactExamples.Internal.convertFragment, match[0]);
  return [
          data,
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return Curry._2(refetchFn, RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(RecentTicketsRefetchQuery_graphql$ReasonReactExamples.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [refetchFn])
        ];
}

function use(fRef) {
  var data = Hooks.useFragment(RecentTickets_query_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(RecentTickets_query_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(RecentTickets_query_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return RecentTickets_query_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

function usePagination(fr) {
  var p = Hooks.usePaginationFragment(RecentTickets_query_graphql$ReasonReactExamples.node, fr);
  var data = RescriptRelay_Internal.internal_useConvertedValue(RecentTickets_query_graphql$ReasonReactExamples.Internal.convertFragment, p.data);
  return {
          data: data,
          loadNext: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadNext(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadNext]),
          loadPrevious: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadPrevious(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadPrevious]),
          hasNext: p.hasNext,
          hasPrevious: p.hasPrevious,
          isLoadingNext: p.isLoadingNext,
          isLoadingPrevious: p.isLoadingPrevious,
          refetch: React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return p.refetch(RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(RecentTicketsRefetchQuery_graphql$ReasonReactExamples.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [p.refetch])
        };
}

function useBlockingPagination(fRef) {
  var p = Hooks.useBlockingPaginationFragment(RecentTickets_query_graphql$ReasonReactExamples.node, fRef);
  var data = RescriptRelay_Internal.internal_useConvertedValue(RecentTickets_query_graphql$ReasonReactExamples.Internal.convertFragment, p.data);
  return {
          data: data,
          loadNext: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadNext(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadNext]),
          loadPrevious: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadPrevious(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadPrevious]),
          hasNext: p.hasNext,
          hasPrevious: p.hasPrevious,
          refetch: React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return p.refetch(RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(RecentTicketsRefetchQuery_graphql$ReasonReactExamples.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [p.refetch])
        };
}

var makeRefetchVariables = RecentTicketsRefetchQuery_graphql$ReasonReactExamples.Types.makeRefetchVariables;

var Fragment = {
  getConnectionNodes: getConnectionNodes,
  Types: undefined,
  internal_makeRefetchableFnOpts: internal_makeRefetchableFnOpts,
  useRefetchable: useRefetchable,
  use: use,
  useOpt: useOpt,
  usePagination: usePagination,
  useBlockingPagination: useBlockingPagination,
  makeRefetchVariables: makeRefetchVariables
};

function RecentTickets(Props) {
  var queryRef = Props.query;
  var match = usePagination(queryRef);
  var loadNext = match.loadNext;
  return React.createElement("div", {
              className: "card"
            }, React.createElement("div", {
                  className: "card-body"
                }, React.createElement("h4", {
                      className: "card-title"
                    }, "Recent Tickets"), React.createElement("div", {
                      className: "table-responsive"
                    }, React.createElement("table", {
                          className: "table"
                        }, React.createElement("thead", undefined, React.createElement("tr", undefined, React.createElement("th", undefined, "Assignee"), React.createElement("th", undefined, "Subject"), React.createElement("th", undefined, "Status"), React.createElement("th", undefined, "Last Update"), React.createElement("th", undefined, "Tracking ID"))), React.createElement("tbody", undefined, Belt_Array.map(Curry._1(getConnectionNodes, match.data.ticketsConnection), (function (ticket) {
                                    return React.createElement(SingleTicket$ReasonReactExamples.make, {
                                                ticket: ticket.fragmentRefs,
                                                key: ticket.id
                                              });
                                  })))), match.hasNext ? React.createElement("button", {
                            className: "btn btn-gradient-primary font-weight-bold",
                            id: "add-task",
                            disabled: match.isLoadingNext,
                            onClick: (function (param) {
                                Curry._3(loadNext, 2, undefined, undefined);
                                
                              })
                          }, "More") : null)));
}

var make = RecentTickets;

export {
  Fragment ,
  make ,
  
}
/* react Not a pure module */
