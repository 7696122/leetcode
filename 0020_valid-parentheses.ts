function isValid(s: string): boolean {
  // let Invalid = new Error("Invalid");
  const stack = [];

  const BRACKETS = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  s.split("").some((item) => {
    if (BRACKETS[item]) {
      stack.push(item);
    } else {
      if (stack.length === 0 || BRACKETS[stack.pop()] !== item) {
        throw Invalid;
      }
    }
  });
  // try {
  //   s.split("").forEach((item) => {
  //     if (BRACKETS[item]) {
  //       stack.push(item);
  //     } else {
  //       if (stack.length === 0 || BRACKETS[stack.pop()] !== item) {
  //         throw Invalid;
  //       }
  //     }
  //   });
  //   return stack.length === 0;
  // } catch (e) {
  //   return false;
  // }
}
