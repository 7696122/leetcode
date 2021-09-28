/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverseX = Math.abs(x).toString().split("").reverse().join("");
  reverseX *= Math.sign(x);
  if (reverseX < Math.pow(2, 31) * -1 || reverseX > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return reverseX;
  }
};
