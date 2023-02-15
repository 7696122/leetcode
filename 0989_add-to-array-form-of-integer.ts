function addToArrayForm(num: number[], k: number): number[] {
    return (BigInt(num.join('')) + BigInt(k)).toString().split('').map(Number);
};
