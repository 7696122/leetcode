function isValid(s: string): boolean {
  let result = false;
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
}
