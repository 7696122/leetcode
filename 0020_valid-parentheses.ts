function isValid(s: string): boolean {
  let result = false;

  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  s.forEach((item) => {
    stack.push(item);
  });

  return result;
}
