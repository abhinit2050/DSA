
var reverseString = function(s) {

    let len = s.length-1
        for(let i=0;i<len/2;i++){
            let x;
            x = s[i];
            s[i] = s[len-i];
            s[len-i] = x

        }

        return s;
};

str = ["h","e","l","l","o"];

let res = reverseString(str);
console.log(res);