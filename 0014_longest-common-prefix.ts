function longestCommonPrefix(strs: string[]): string {
  let prefix = strs.reduce((acc, str) => (str.length < acc.length ? str : acc));

  strs.forEach((str) => {
    str.slice(0, prefix.length);
    while (str.slice(0, prefix.length) !== prefix) {
      prefix = prefix.slice(0, -1);
    }
  });

  return prefix;
}
