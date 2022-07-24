function generatorError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

type paymentAction = "refunc" | "checkout" | "reject";

function processAction(action: paymentAction) {
  switch (action) {
    case "refunc":
      // ...
      break;
    case "checkout":
      // ...
      break;
    default:
      const _neverUse: never = action;
      throw new Error("This action not exist");
  }
}

function isString(x: string | number): boolean {
  if (typeof x === "string") return true;
  else if (typeof x === "number") return false;
  generatorError("text");
}
