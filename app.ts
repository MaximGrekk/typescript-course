type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    id: number
}

type UserWithRole = User & Role;

let user: UserWithRole = {
  name: "Max",
  age: 33,
  skills: ["front", "back"],
  id: 1
};
