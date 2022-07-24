let input: unknown;

input = 3;
input = ["da", "adad"];

function run(i: unknown) {
  if (typeof i === "number") {
    i++;
  } else {
    i;
  }
}

run(input);

async function getData() {
  try {
    fetch("");
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

async function getDataForce() {
  try {
    fetch("");
  } catch (error) {
    const e = error as Error;
  }
}

type U1 = unknown | null; // union

type I1 = unknown & string; // intersection
