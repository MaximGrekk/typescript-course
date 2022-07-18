interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
    name: 'Maxim',
    age: 21,
}

type ID = string | number;

interface IDI {
    ID: ID
}