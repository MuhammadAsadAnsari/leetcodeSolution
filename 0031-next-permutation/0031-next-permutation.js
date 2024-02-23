/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const reverseAndJoin = function (nums, startIndex) {

    let start = startIndex;
    let end = nums.length - 1;

    while (start < end) {
        // Swap elements at start and end indices
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        // Move indices towards the center
        start++;
        end--;
    }


    return nums;
}
var nextPermutation = function(nums) {
    let index = -1
    let n = nums.length
    for(i=n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            
            index = i;
            break;
        }
    }
    if (index==-1) {
        nums.reverse();
        return nums;
    }
    for(let j =n-1;j>=index;j--){
        if (nums[j]>nums[index]) {
            let temp = nums[j]
            nums[j] = nums[index]
            nums[index] = temp
            break
        }
    }
   return reverseAndJoin(nums,index+1)
};
