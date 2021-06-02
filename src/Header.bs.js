

import * as React from "react";

function Header(Props) {
  return React.createElement("div", {
              className: "page-header"
            }, React.createElement("h3", {
                  className: "page-title"
                }, React.createElement("span", {
                      className: "page-title-icon bg-gradient-primary text-white mr-2"
                    }, React.createElement("i", {
                          className: "mdi mdi-home"
                        })), "Dashboard"));
}

var make = Header;

export {
  make ,
  
}
/* react Not a pure module */
