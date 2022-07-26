let a = 5;
let b: string = a.toString();
let e = new String(a).valueOf();
let f = new Boolean(a).valueOf();

let c = "213";
let d: number = +c;

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

const admin: IAdmin = {
  ...user,
  role: 1,
};

function userToAdmin(user: IUser): IAdmin {
  return {
    name: user.name,
    role: 1,
  };
}
