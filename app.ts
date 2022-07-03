function getFullName(userEntity: {
  firstname: string;
  surname: string;
}): string {
  return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
  firstname: "Maxim",
  surname: "Sergeev",
  city: "Ivanovo",
  age: 21,
  skills: {
      devops: false,
      frontend: true,
  }
};

console.log(getFullName(user));
