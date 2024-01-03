import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id : "heading"
    },
    "React start"
)

//this is also a react element 
const jsxHeading = <h1>Nmste react </h1> ;

var root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(heading);