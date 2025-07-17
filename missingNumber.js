/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let total_sum = (nums.length)*(nums.length+1)/2
    let array_sum=0;

    for(let i=0;i<nums.length;i++){
        array_sum=array_sum+nums[i]
    }
    let missingNum = total_sum-array_sum;

    return missingNum;
};

let nums = [0,1]
let result = missingNumber(nums);

console.log(result);