function isValid(s: string): boolean {
  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  s.split("").forEach((item) => {
    if (item in BRACKETS) {
      stack.push(item);
    }
  });

  return stack.length === 0;
}
