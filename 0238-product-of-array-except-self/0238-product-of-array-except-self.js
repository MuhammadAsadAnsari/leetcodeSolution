/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    let n = nums.length
    let product = 1;
    
    for(let i = 0;i<n; i++){
        product = product* nums[i];
        output.push(product);
    }
    product= 1;
    for(let j = n-1;j>=0;j--){
        if(j===n-1){
            output[j]= output[j-1];
        }else if(j===0){
            output[j] =product;
        }else{
            output[j]= output[j-1] * product;
        }
        product = product * nums[j];
    }
    return output
    
};