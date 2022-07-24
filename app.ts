function logId(id: number | string): void {
  console.log(id);
}

const a = logId(1);

function multiply(first: number, second?: number) {
  if (!second) return first * first;
  return first * second;
}

type voidFunction = () => void;

const f1: voidFunction = () => {};

const f2: voidFunction = () => {
  return true;
};

const b = f2();

const skills = ["devops, js"];

const user = {
  s: ["s"],
};

skills.forEach((skill) => user.s.push(skill));
