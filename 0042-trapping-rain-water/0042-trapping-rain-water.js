/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length
let area = 0
let mini = 0;
let leftmax = height[0]
let rightmax = height[n - 1]
let L = 1
let R = n - 2
let wa= 0
if (n > 2) {
    while (L <= R) {
       if (leftmax < rightmax) {
            if (height[L] > leftmax) {
                leftmax = height[L]
            } else {
                wa += leftmax - height[L]
                L++
            }
        } else {
            if (height[R] > rightmax) {
                rightmax = height[R]
            } else {
                wa += rightmax - height[R]
                R--

            }

        }
        }
    return wa
}
else{
    return false
}
};