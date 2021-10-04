function isValid(s: string): boolean {
  let Invalid = new Error("Invalid");
  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  try {
    s.split("").forEach((item) => {
      if (BRACKETS[item]) {
        stack.push(item);
      } else {
        if (stack.length === 0 || BRACKETS[stack.pop()] !== item) {
          throw Invalid;
        }
      }
    });
    return stack.length === 0;
  } catch (e) {
    // if (e !== Invalid) throw e;
    return false;
  }
}
