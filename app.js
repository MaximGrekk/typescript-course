"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "s";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "payload is sucessfull",
    status: StatusCode.SUCCESS,
};
// 1 - sucess
// 2 - in process
// 3 - error
if (res.status === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
function compute() {
    return 3;
}
const res2 = 1 /* Roles.ADMIN */;
// function test(x: { ADMIN: number }) { 
// };
// test(Roles)
