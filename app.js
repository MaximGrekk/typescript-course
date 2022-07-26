"use strict";
const n = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return { name: "Max" };
    }
}
const user = getUser();
if (user) {
    const userName = user.name;
}
