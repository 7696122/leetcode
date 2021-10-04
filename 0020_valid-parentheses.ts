function isValid(s: string): boolean {
  let result = false;

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

  return result.length === 0;
}
