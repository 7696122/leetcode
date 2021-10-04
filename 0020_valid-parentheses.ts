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
      return stack.length === 0 || BRACKETS[stack.pop()] !== item;
    }
  });

  return result;
}
