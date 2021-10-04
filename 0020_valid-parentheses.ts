function isValid(s: string): boolean {
  let Invalid = new Error('Invalid');
  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  try {
    s.split("").some((item) => {
      if (BRACKETS[item]) {
        stack.push(item);
      } else {
        if(stack.length === 0 || BRACKETS[stack.pop()] !== item) {
        throw Invalid;
        }
      }
    });
  }
}
