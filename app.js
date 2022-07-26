"use strict";
function generatorError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
function rec() {
    return rec();
}
function processAction(action) {
    switch (action) {
        case "refunc":
            // ...
            break;
        case "checkout":
            // ...
            break;
        default:
            throw new Error("This action not exist");
    }
}
function isString(x) {
    if (typeof x === "string")
        return true;
    else if (typeof x === "number")
        return false;
    generatorError("text");
}
