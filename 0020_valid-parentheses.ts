function isValid(s: string): boolean {
  let result = false;

  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  s.split("").forEach((item) => {
    stack.includes(item) || stack.push(item);
  });

  return result;
}
