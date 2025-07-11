let num =12421;
let num_copy=num;

//Method1 - this method converts number to string
// let num_copy=num;
// let newNum='';
// const numLength = (num.toString().length);

// for(let i=0;i<numLength;i++){

//     let lastDigit = num%10;

//    newNum = newNum+lastDigit;
//     num = Math.floor(num/10);
   
// }

// if(newNum.toString() == num_copy.toString()){
//     console.log("It is a palindrome!")
// } else {
//     console.log("It is not a palindrome!");
    
// }


//Method2 - this method does not convert number into string

let rev=0;

while(num>0){
    rev = 10*rev + (num%10);
    num=Math.floor(num/10);
}


if(num_copy===rev){
    console.log("It is a palindrome!")
 } else {
     console.log("It is not a palindrome!");
    
 }

