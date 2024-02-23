/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0
    let maxi = nums[0];
    // console.log(nums.length);
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        maxi = Math.max(maxi, sum);
        if (sum < 0) {
            sum = 0
        }
    }
    return maxi;
    
};