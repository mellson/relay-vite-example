

import * as React from "react";

function mapIcon(icon) {
  switch (icon) {
    case /* ChartLine */0 :
        return "mdi-chart-line";
    case /* Bookmark */1 :
        return "mdi-bookmark-outline";
    case /* Diamond */2 :
        return "mdi-diamond";
    
  }
}

function EmphasizedCard(Props) {
  var title = Props.title;
  var subText = Props.subText;
  var icon = Props.icon;
  var variant = Props.variant;
  var variantAsBgClass;
  switch (variant) {
    case /* Red */0 :
        variantAsBgClass = "bg-gradient-danger";
        break;
    case /* Blue */1 :
        variantAsBgClass = "bg-gradient-info";
        break;
    case /* Green */2 :
        variantAsBgClass = "bg-gradient-success";
        break;
    
  }
  return React.createElement("div", {
              className: "card card-img-holder text-white " + variantAsBgClass
            }, React.createElement("div", {
                  className: "card-body"
                }, React.createElement("img", {
                      className: "card-img-absolute",
                      alt: "circle-image",
                      src: "/images/dashboard/circle.svg"
                    }), React.createElement("h4", {
                      className: "font-weight-normal mb-3"
                    }, title, React.createElement("i", {
                          className: "mdi mdi-24px float-right " + mapIcon(icon)
                        })), React.createElement("h2", {
                      className: "mb-5"
                    }, subText)));
}

var make = EmphasizedCard;

export {
  mapIcon ,
  make ,
  
}
/* react Not a pure module */
