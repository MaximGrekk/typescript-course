enum StatusCode {
  SUCCESS = "s",
  IN_PROCESS = "p",
  FAILED = "f",
}

const res = {
  message: "payload is sucessfull",
  status: StatusCode.SUCCESS,
};

// 1 - sucess
// 2 - in process
// 3 - error

if (res.status === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);

function compute() {
  return 3;
}

const enum Roles {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles.ADMIN

// function test(x: { ADMIN: number }) { 

// };

// test(Roles)
