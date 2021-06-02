

import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as Avatar_user_graphql$ReasonReactExamples from "./__generated__/Avatar_user_graphql.bs.js";

function use(fRef) {
  var data = Hooks.useFragment(Avatar_user_graphql$ReasonReactExamples.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(Avatar_user_graphql$ReasonReactExamples.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(Avatar_user_graphql$ReasonReactExamples.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return Avatar_user_graphql$ReasonReactExamples.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var Fragment = {
  Types: undefined,
  use: use,
  useOpt: useOpt
};

function Avatar(Props) {
  var userRef = Props.user;
  var user = use(userRef);
  var avatarUrl = user.avatarUrl;
  return React.createElement(React.Fragment, undefined, avatarUrl !== undefined ? React.createElement("img", {
                    className: "mr-2",
                    alt: "image",
                    src: avatarUrl
                  }) : null, user.fullName);
}

var make = Avatar;

export {
  Fragment ,
  make ,
  
}
/* react Not a pure module */
