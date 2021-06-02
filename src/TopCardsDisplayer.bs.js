

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as RelayRuntime from "relay-runtime";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as EmphasizedCard$ReasonReactExamples from "./EmphasizedCard.bs.js";
import * as TopCardsDisplayer_siteStatistics_graphql$ReasonReactExamples from "./__generated__/TopCardsDisplayer_siteStatistics_graphql.bs.js";
import * as TopCardsDisplayer_currentVisitorsOnline_Subscription_graphql$ReasonReactExamples from "./__generated__/TopCardsDisplayer_currentVisitorsOnline_Subscription_graphql.bs.js";

function use(fRef) {
  var data = Hooks.useFragment(TopCardsDisplayer_siteStatistics_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(TopCardsDisplayer_siteStatistics_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(TopCardsDisplayer_siteStatistics_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return TopCardsDisplayer_siteStatistics_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var SiteStatisticsFragment = {
  Types: undefined,
  use: use,
  useOpt: useOpt
};

function subscribe(environment, variables, onCompleted, onError, onNext, updater, param) {
  var tmp = {
    subscription: TopCardsDisplayer_currentVisitorsOnline_Subscription_graphql$ReasonReactExamples.node,
    variables: TopCardsDisplayer_currentVisitorsOnline_Subscription_graphql$ReasonReactExamples.Internal.convertVariables(variables)
  };
  if (onCompleted !== undefined) {
    tmp.onCompleted = Caml_option.valFromOption(onCompleted);
  }
  if (onError !== undefined) {
    tmp.onError = Caml_option.valFromOption(onError);
  }
  var tmp$1 = onNext !== undefined ? (function (r) {
        return Curry._1(onNext, TopCardsDisplayer_currentVisitorsOnline_Subscription_graphql$ReasonReactExamples.Internal.convertResponse(r));
      }) : undefined;
  if (tmp$1 !== undefined) {
    tmp.onNext = Caml_option.valFromOption(tmp$1);
  }
  var tmp$2 = updater !== undefined ? (function (store, r) {
        return Curry._2(updater, store, TopCardsDisplayer_currentVisitorsOnline_Subscription_graphql$ReasonReactExamples.Internal.convertResponse(r));
      }) : undefined;
  if (tmp$2 !== undefined) {
    tmp.updater = Caml_option.valFromOption(tmp$2);
  }
  return RelayRuntime.requestSubscription(environment, tmp);
}

var CurrentVisitorsSubscription = {
  Types: undefined,
  subscribe: subscribe
};

function TopCardsDisplayer(Props) {
  var siteStatisticsRef = Props.siteStatistics;
  var siteStatistics = use(siteStatisticsRef);
  var environment = RescriptRelay.useEnvironmentFromContext(undefined);
  React.useEffect((function () {
          var subscription = subscribe(environment, undefined, undefined, undefined, (function (response) {
                  var siteStatisticsUpdated = response.siteStatisticsUpdated;
                  if (siteStatisticsUpdated !== undefined) {
                    console.log("Subscription response - current visitors online: ", siteStatisticsUpdated.currentVisitorsOnline);
                    return ;
                  }
                  
                }), undefined, undefined);
          return (function (param) {
                    subscription.dispose();
                    
                  });
        }), []);
  return React.createElement("div", {
              className: "row"
            }, React.createElement("div", {
                  className: "col-md-4 stretch-card grid-margin"
                }, React.createElement(EmphasizedCard$ReasonReactExamples.make, {
                      title: "Weekly Sales",
                      subText: "$ " + siteStatistics.weeklySales.toString(),
                      icon: /* ChartLine */0,
                      variant: /* Red */0
                    })), React.createElement("div", {
                  className: "col-md-4 stretch-card grid-margin"
                }, React.createElement(EmphasizedCard$ReasonReactExamples.make, {
                      title: "Weekly Orders",
                      subText: String(siteStatistics.weeklyOrders),
                      icon: /* Bookmark */1,
                      variant: /* Blue */1
                    })), React.createElement("div", {
                  className: "col-md-4 stretch-card grid-margin"
                }, React.createElement(EmphasizedCard$ReasonReactExamples.make, {
                      title: "Current Visitors Online",
                      subText: String(siteStatistics.currentVisitorsOnline),
                      icon: /* Diamond */2,
                      variant: /* Green */2
                    })));
}

var make = TopCardsDisplayer;

export {
  SiteStatisticsFragment ,
  CurrentVisitorsSubscription ,
  make ,
  
}
/* react Not a pure module */
