function isObject(x: any): boolean {
    return x !== null && typeof x === 'object';
}

function isAllTrue(x: any): boolean {
    let result = true;

    if (Array.isArray(x)) {
        for (const value of x) {
            result = !!(result && value);
        }
    } else if (isObject(x)) {
        for (const value of Object.keys(x)) {
            result = !!(result && value);
        }
    }
    return result;
}

export { isObject, isAllTrue };
