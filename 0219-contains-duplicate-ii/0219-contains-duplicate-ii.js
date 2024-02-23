/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
      const mymap = new Map();
   for(let i =0;i<nums.length;i++){
  
    if(!mymap.has(nums[i])){
        mymap.set(nums[i],i);
        
    }else{
        let pastindex = mymap.get(nums[i]) 
        if(Math.abs(pastindex-i)<=k){
            return true;
        }
            mymap.set(nums[i], i);
        

    }
   }
        

   return false;
};