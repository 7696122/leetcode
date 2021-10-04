function isValid(s: string): boolean {
  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  s.split("").some((item) => {
    if (BRACKETS[item]) {
      stack.push(item);
    } else {
      return stack.length === 0 || BRACKETS[stack.pop()] !== item;
    }
  });
  return stack.length === 0;
}
