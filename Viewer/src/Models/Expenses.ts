import Resource from "../Resource";

export default class Expenses {
    language: string;
    domain: string;
    translate: any;

    constructor() {
        const location = document.location;
        this.language = location.pathname.split('/')[1];
        this.domain = location.origin + '/';
        this.translate = undefined;

        // Fetch from server
        Resource.get('json/ja.json', 'json').then(x => this.translate = x);
    }
}
