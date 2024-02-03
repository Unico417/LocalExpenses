import Expenses from "./Models/Expenses";


function onDocumentLoad() {
    window.app = new Expenses();
}

window.addEventListener('load', onDocumentLoad);

