
let removeDuplicates = function(nums) {
    let x=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[x]){
            x=x+1;
            nums[x] = nums[i]
        }
    }

    return x+1;
};

let arr = [-1,0,2,2,447,450,450,1000]
let k =  removeDuplicates(arr);
console.log(k);