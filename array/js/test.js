/*
    JavaScript Array Medthods

    1. sort()*            9. slice()              17. find()
    2. reverse()*        10. splice()            18. findIndex()
    3. pop()*            11. isArray()           19. includes()
    4. push()*           12. indexOf()           20. some()
    5. shift()*          13. lastIndexOf()       21. forEach()
    6. unshift()*        14. entries()           22. toString()
    7. concat()*         15. every()             23. valueOf()
    8. join()*           16. filter              23. fill()

*/


let arr = [2,4,1,5,56,7,8,3,9,];
let newarr = arr.sort((a,b)=>{
return a-b;
});
console.log(newarr);
console.log(arr);
arr.reverse();
console.log(arr);


let num = [1,2,3,4,5,6,7];
num.pop();
console.log(num);
num.push(7);
console.log(num);


num.shift();
console.log(num);

num.unshift(1);
console.log(num);



let x = ["Alamgir","Asift","Sameer"];
let y = x.concat("Dhaka","Khulna");
console.log(y);



let a = ["Alamgir","Asif","Sameer","Depok"];
let res = a.join(" ");
console.log(res);

console.log(a);

let newa= a.slice(1,3);
console.log(newa);
console.log(a);

a.splice(1,2,"Dhaka","Khulna");
console.log(a);

