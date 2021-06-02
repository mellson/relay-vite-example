

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as SingleTicketWorkingGroupRefetchQuery_graphql$ReasonReactExamples from "./__generated__/SingleTicketWorkingGroupRefetchQuery_graphql.bs.js";
import * as SingleTicketWorkingGroup_workingGroup_graphql$ReasonReactExamples from "./__generated__/SingleTicketWorkingGroup_workingGroup_graphql.bs.js";

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
  var match = Hooks.useRefetchableFragment(SingleTicketWorkingGroup_workingGroup_graphql$ReasonReactExamples.node, fRef);
  var refetchFn = match[1];
  var data = RescriptRelay_Internal.internal_useConvertedValue(SingleTicketWorkingGroup_workingGroup_graphql$ReasonReactExamples.Internal.convertFragment, match[0]);
  return [
          data,
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return Curry._2(refetchFn, RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(SingleTicketWorkingGroupRefetchQuery_graphql$ReasonReactExamples.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [refetchFn])
        ];
}

function use(fRef) {
  var data = Hooks.useFragment(SingleTicketWorkingGroup_workingGroup_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(SingleTicketWorkingGroup_workingGroup_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(SingleTicketWorkingGroup_workingGroup_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return SingleTicketWorkingGroup_workingGroup_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var makeRefetchVariables = SingleTicketWorkingGroupRefetchQuery_graphql$ReasonReactExamples.Types.makeRefetchVariables;

var WorkingGroupFragment = {
  Types: undefined,
  internal_makeRefetchableFnOpts: internal_makeRefetchableFnOpts,
  useRefetchable: useRefetchable,
  use: use,
  useOpt: useOpt,
  makeRefetchVariables: makeRefetchVariables
};

function SingleTicketWorkingGroup(Props) {
  var wgRef = Props.workingGroup;
  var match = useRefetchable(wgRef);
  var refetch = match[1];
  var workingGroup = match[0];
  var match$1 = React.unstable_useTransition();
  var startTransition = match$1[0];
  var membersConnection = workingGroup.membersConnection;
  var tmp;
  if (membersConnection !== undefined) {
    var edges = membersConnection.edges;
    tmp = edges !== undefined ? Belt_Array.map(Belt_Array.keepMap(edges, (function (edge) {
                  if (edge === undefined) {
                    return ;
                  }
                  var node = edge.node;
                  if (node !== undefined) {
                    return node;
                  }
                  
                })), (function (member) {
              return React.createElement("div", {
                          key: member.id
                        }, React.createElement("em", undefined, member.fullName));
            })) : null;
  } else {
    tmp = React.createElement("button", {
          type: "button",
          onClick: (function (param) {
              return Curry._1(startTransition, (function (param) {
                            Curry._4(refetch, Curry._3(makeRefetchVariables, true, undefined, undefined), undefined, undefined, undefined);
                            
                          }));
            })
        }, match$1[1] ? "Loading..." : "See members");
  }
  return React.createElement("div", undefined, React.createElement("strong", undefined, workingGroup.name), React.createElement("div", undefined, tmp));
}

var make = SingleTicketWorkingGroup;

export {
  WorkingGroupFragment ,
  make ,
  
}
/* react Not a pure module */
