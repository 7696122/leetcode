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
      let pair = stack.pop();
      if (!!pair && BRACKETS[pair] === item) {
      } else {
        return false;
      }
    }
  });
  return stack.length === 0 && result;
}
