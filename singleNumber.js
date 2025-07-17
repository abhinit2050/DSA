
// var singleNumber = function(nums) {
//     let obj={};
//     let singleNum;

//     for(let i=0;i<nums.length;i++){
       
//         obj[nums[i]] = obj[nums[i]] ? 2 : 1
//     }

//     for(const [key,val] of Object.entries(obj)){
//         if(val==1){
//            singleNum = Number(key);
//         }
//     }
//     return (singleNum);
// }


//more efficient method using xor
var singleNumber = function(nums) {
    let xor=0;

    for(let i=0;i<nums.length;i++){
       
       xor=xor ^ nums[i];
    }

    return xor;
}
   

let nums = [4,1,2,1,2]

let result = singleNumber(nums);

console.log(result);