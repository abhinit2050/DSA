var findMaxConsecutiveOnes = function(nums) {
    
    let maxCount = 0;
    let x=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            x++;
            if(x>maxCount){
                maxCount=x;
            } 
        } else {
            x=0;
        }
    }

    if(x==nums.length){
        maxCount = x;
    }

    return maxCount;
};

let nums = [1,1,0,1,1,1]

console.log(findMaxConsecutiveOnes(nums));