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
      if (BRACKETS[stack.pop()] !== item) return false;
    }
  });

  return result;
}
