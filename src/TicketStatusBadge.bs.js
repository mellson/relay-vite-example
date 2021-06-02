

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as TicketStatusBadge_ticket_graphql$ReasonReactExamples from "./__generated__/TicketStatusBadge_ticket_graphql.bs.js";

function use(fRef) {
  var data = Hooks.useFragment(TicketStatusBadge_ticket_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(TicketStatusBadge_ticket_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(TicketStatusBadge_ticket_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return TicketStatusBadge_ticket_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var Fragment = {
  Types: undefined,
  use: use,
  useOpt: useOpt
};

function TicketStatusBadge(Props) {
  var ticketRef = Props.ticket;
  var match = use(ticketRef).status;
  if (match === "Progress") {
    return React.createElement("label", {
                className: "badge badge-gradient-warning"
              }, "PROGRESS");
  } else if (match === "Rejected") {
    return React.createElement("label", {
                className: "badge badge-gradient-danger"
              }, "REJECTED");
  } else if (match === "OnHold") {
    return React.createElement("label", {
                className: "badge badge-gradient-info"
              }, "ON HOLD");
  } else if (match === "Done") {
    return React.createElement("label", {
                className: "badge badge-gradient-success"
              }, "DONE");
  } else {
    return null;
  }
}

var make = TicketStatusBadge;

export {
  Fragment ,
  make ,
  
}
/* react Not a pure module */
