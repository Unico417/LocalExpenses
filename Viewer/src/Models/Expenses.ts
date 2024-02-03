import React from "react";
import ReactDOM from "react-dom/client";
import Overview from "../ReactComponents/Overview";

import Resource from "../Resource";
import { isAllTrue } from "../Utils";

export default class Expenses {
    language: string;
    domain: string;
    translate: any;
    _ready: any;

    constructor() {
        const location = document.location;
        this.language = location.pathname.split('/')[1];
        this.domain = location.origin + '/';
        this.translate = undefined;

        this._ready = {
            translate: false,
        };

        // Fetch from server
        Resource.get('json/ja.json', 'json')
            .then(x => {
                this.translate = x;
                this._ready.translate = true;
                this.checkReady();
            });
    }

    checkReady() {
        if (isAllTrue(this._ready)) this.onReady();
    }

    onReady() {
        console.debug('Application ready.');
        this.render();
    }

    render() {
        // React entry sample
        ReactDOM.createRoot(document.querySelector('#content')!)
            .render(React.createElement(Overview, { app: this }));
    }
}
