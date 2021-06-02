

import * as React from "react";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as ReactExperimental from "rescript-relay/src/ReactExperimental.bs.js";
import * as App$ReasonReactExamples from "./App.bs.js";
import * as RelayEnv$ReasonReactExamples from "./RelayEnv.bs.js";

ReactExperimental.renderConcurrentRootAtElementWithId(React.createElement(RescriptRelay.Context.Provider.make, {
          environment: RelayEnv$ReasonReactExamples.environment,
          children: React.createElement(App$ReasonReactExamples.make, {})
        }), "app");

export {
  
}
/*  Not a pure module */
