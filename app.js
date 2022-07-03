"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: "Maxim",
    surname: "Sergeev",
    city: "Ivanovo",
    age: 21,
};
console.log(getFullName(user));
