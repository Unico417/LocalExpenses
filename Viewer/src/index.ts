import React from "react";
import ReactDOM from "react-dom/client";
import Sample from "./sample";

ReactDOM.createRoot(document.querySelector('#main')!)
    .render(React.createElement(Sample, {}));
console.log('Hello World!');
