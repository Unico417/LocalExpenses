import React from "react";
import ReactDOM from "react-dom/client";
import Sample from "./sample";


function onDocumentLoad() {
    // React entry sample
    ReactDOM.createRoot(document.querySelector('#main')!)
        .render(React.createElement(Sample, {}));
}

window.addEventListener('load', onDocumentLoad);

