interface User {
  name: string;
  age: number;
  skills: string[];
  log: (id: number) => string;
}

type User2 =  {
    name: string;
    age: number;
    skills: string[];
    log: (id: number) => string;
  }

  
// interface UserWithRole extends User {
//   roleId: number;
// }

interface Role {
  roleId: number;
}

interface UserWithRole extends User, Role {
  created_at: Date;
}

let user: UserWithRole = {
  name: "Max",
  age: 33,
  skills: ["front", "back"],
  roleId: 1,
  created_at: new Date(),
  log(id) {
    return "";
  },
};

interface UserDic {
    [index: number] : User
}

type UserDic2 = {
    [index: number] : User
}

type UserDic3 = Record<number, User>