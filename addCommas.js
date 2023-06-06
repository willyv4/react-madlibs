function addCommas(num) {
  let count = 0;
  let answer = [];

  const nums = num.toString().split("");

  nums.includes(".")
    ? (startingPoint = nums.indexOf(".") - 1)
    : (startingPoint = nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i <= startingPoint) count++;
    answer.unshift(nums[i]);

    if (count === 3 && nums[i] !== "-") {
      answer.unshift(",");
      count = 0;
    }
  }

  return answer.join("");
}

module.exports = addCommas;
