function isValid(s: string): boolean {
  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  s.split("").forEach((item) => {
    if (!stack.includes(item)) {
      stack.push(item);
    } else {
      BRACKETS[item];
    }
  });

  return stack.length === 0;
}
