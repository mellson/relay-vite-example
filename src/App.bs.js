

import * as React from "react";
import * as Main$ReasonReactExamples from "./Main.bs.js";

function App(Props) {
  return React.createElement("div", {
              className: "container-scroller"
            }, React.createElement("div", {
                  className: "container-fluid page-body-wrapper"
                }, React.createElement(React.Suspense, {
                      children: React.createElement(Main$ReasonReactExamples.make, {}),
                      fallback: React.createElement("div", undefined, "Loading...")
                    })));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
