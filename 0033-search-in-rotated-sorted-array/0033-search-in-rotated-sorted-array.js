/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let low = 0;
    let height = nums.length - 1
    while (low <= height) {
        let mid = Math.floor((low + height) / 2);
        if (nums[mid] == target) {
            return mid
        }
        if (nums[low] <= nums[mid]) {

          if(nums[low]<=target && target<=nums[mid]){
            height = mid-1
          }else{
            low = mid+1;
          }
        } else {
          if(nums[mid]<=target && target<=nums[height]){
            low = mid+1;
        }else{
            height = mid -1;
            
          }
        }
    }
    return -1
};