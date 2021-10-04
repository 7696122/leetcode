function romanToInt(s: string): number {
  const ROMAN_NUMERALS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  s.split("").forEach((item, i, arr) => {
    const prev = ROMAN_NUMERALS[arr[i - 1]];
    const curr = ROMAN_NUMERALS[item];

    if (i === 0) {
      result += curr;
    } else {
      if (curr <= prev) {
        result += curr;
      } else if (curr > prev) {
        result = result - prev + (curr - prev);
      }
    }
  });
  return result;
}
