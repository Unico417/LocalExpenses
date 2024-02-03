import React from "react";
import ReactDOM from "react-dom/client";
import Sample from "./sample";
import Expenses from "./Models/Expenses";


function onDocumentLoad() {
    const expenses = new Expenses();
    window.expenses = expenses;

    // React entry sample
    ReactDOM.createRoot(document.querySelector('#main')!)
        .render(React.createElement(Sample, {}));
}

window.addEventListener('load', onDocumentLoad);

