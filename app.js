"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1);
function multiply(first, second) {
    if (!second)
        return first * first;
    return first * second;
}
