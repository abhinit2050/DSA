let num =4384565489;
let num_copy=num;

let newNum='';
const numLength = (num.toString().length);

for(let i=0;i<numLength;i++){

    let lastDigit = num%10;

   newNum = newNum+lastDigit;
    num = Math.floor(num/10);
   
}

if(newNum.toString() == num_copy.toString()){
    console.log("It is a palindrome!")
} else {
    console.log("It is not a palindrome!");
    
}