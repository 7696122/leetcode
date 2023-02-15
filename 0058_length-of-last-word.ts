function lengthOfLastWord(s: string): number {
    let words = s.trim().split(/\s+/)
    return words[words.length - 1].length
};
