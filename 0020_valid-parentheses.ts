function isValid(s: string): boolean {
  let result = true;
  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  s.split("").forEach((item) => {
    if (BRACKETS[item]) {
      stack.push(item);
    } else {
      if (stack.length === 0 || BRACKETS[stack.pop()] !== item) {
        result = false;
        break;
      }
    }
  });

  return result;
}
