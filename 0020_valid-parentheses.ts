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
      let pair = BRACKETS[stack.pop()];
      result = pair && pair === item;
    }
  });
  return stack.length === 0 && result;
}
