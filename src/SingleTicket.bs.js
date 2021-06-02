

import * as React from "react";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as Avatar$ReasonReactExamples from "./Avatar.bs.js";
import * as Loading$ReasonReactExamples from "./Loading.bs.js";
import * as TicketStatusBadge$ReasonReactExamples from "./TicketStatusBadge.bs.js";
import * as SingleTicketWorkingGroup$ReasonReactExamples from "./SingleTicketWorkingGroup.bs.js";
import * as SingleTicket_ticket_graphql$ReasonReactExamples from "./__generated__/SingleTicket_ticket_graphql.bs.js";

function use(fRef) {
  var data = Hooks.useFragment(SingleTicket_ticket_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(SingleTicket_ticket_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(SingleTicket_ticket_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return SingleTicket_ticket_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var TicketFragment = {
  Types: undefined,
  use: use,
  useOpt: useOpt
};

function SingleTicket(Props) {
  var ticketRef = Props.ticket;
  var ticket = use(ticketRef);
  var assignee = ticket.assignee;
  var tmp;
  if (assignee !== undefined) {
    var variant = assignee.NAME;
    tmp = variant === "WorkingGroup" ? React.createElement(React.Suspense, {
            children: React.createElement(SingleTicketWorkingGroup$ReasonReactExamples.make, {
                  workingGroup: assignee.VAL.fragmentRefs
                }),
            fallback: React.createElement(Loading$ReasonReactExamples.make, {})
          }) : (
        variant === "User" ? React.createElement(Avatar$ReasonReactExamples.make, {
                user: assignee.VAL.fragmentRefs
              }) : React.createElement("span", undefined, "-")
      );
  } else {
    tmp = React.createElement("em", undefined, "Unassigned");
  }
  return React.createElement("tr", undefined, React.createElement("td", undefined, tmp), React.createElement("td", undefined, ticket.subject), React.createElement("td", undefined, React.createElement(TicketStatusBadge$ReasonReactExamples.make, {
                      ticket: ticket.fragmentRefs
                    })), React.createElement("td", undefined, Belt_Option.getWithDefault(ticket.lastUpdated, "-")), React.createElement("td", undefined, ticket.trackingId));
}

var make = SingleTicket;

export {
  TicketFragment ,
  make ,
  
}
/* react Not a pure module */
