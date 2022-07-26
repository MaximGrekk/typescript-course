interface IUser {
  name: string;
  email: string;
  login: string;
}

const user = {
  name: "Dima",
  email: "lagransh@gmail.com",
  login: "lagransh",
} as IUser;

interface IAdmin {
  name: string;
  role: number;
}

function logId(id: string | number): void {
  if (isString(id)) console.log("It is string");
  else console.log("It is number");
}

function isString(x: string | number): x is string {
  return typeof x === "string";
}

function isAdmin(user: IUser | IAdmin): user is IAdmin {
  return "role" in user;
}

function setRole(user: IUser | IAdmin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("User in not Admin");
  }
}
