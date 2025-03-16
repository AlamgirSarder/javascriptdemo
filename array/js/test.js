/*
    JavaScript Array Medthods

    1. sort()*            9. slice()*            17. find()*
    2. reverse()*        10. splice()*           18. findIndex()*
    3. pop()*            11. isArray()*          19. includes()*
    4. push()*           12. indexOf()*          20. some()*
    5. shift()*          13. lastIndexOf()*      21. forEach()*
    6. unshift()*        14. entries()           22. toString()*
    7. concat()*         15. every()*            23. valueOf()*
    8. join()*           16. filter()*           24. fill()*

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


let c = Array.isArray(a);
console.log(c);

let p = ["Alamgir","Asif","Sameer","Depok","Asif"];
// let q = p.indexOf("Sameer",3);
let q = p.lastIndexOf("Asif");
console.log(q);

let newp = p.includes("Asif");
console.log(newp);



// let number = [12,14,15,12,17,50];


// let adultage = number.some(check);


// function check(age){
//     return age>=18;
// }

// console.log(adultage);

let number = [30,73,50];


let adultage = number.every(check);


function check(age){
    return age>=18;
}

console.log(adultage);


// let ages = [10,30,73,50];
// let test = ages.find(checks)
// function checks(age){
//     return age>=18;
// }
// console.log(test);

// let ages = [10,30,73,50];
// let test = ages.findIndex(checks)
// function checks(age){
//     return age>=18;
// }
// console.log(test);


let ages = [10,30,73,50];

let xx = ages.filter((x)=>{
        return x >= 18;
})
console.log(xx);

xx.map((x)=>{
    console.log(x*2);
    
})

let pp = ["Alamgir","Asif","Sameer","Depok","Asif"];
console.log(pp.toString());

// let xxx = pp.valueOf();
// console.log(xxx);


// let aa = pp.fill("AAA");
// console.log(aa);
 
pp.forEach((x)=>{
    console.log(x+" Khan");
})

let nums = [ 12,13,14,15,16]
