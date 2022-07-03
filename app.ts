const skills: string[] = ["Dev", "DevOps", "Testing"];

for (const skill of skills) {
  console.log(skill.toLocaleLowerCase());
}

const res = skills.filter((s: string) => s !== "DevOps").map((s) => s + "! ").reduce((a: string, b: string) => a + b);

console.log(res);
