function isValid(s: string): boolean {
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
      return BRACKETS[stack.pop()] === item;
    }
  });
  return stack.length === 0;
}
