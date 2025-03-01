//String Methods
/*
    1. length
    2. charAt()
    3. at()
    4. charCodeAt()
    5. slice();
    6. substring()
    7. toLowerCase()
    8. toUpperCase()



*/


let names = "Alamgir";
let len = names.length;
console.log(len);

let  text = "Hello Word";
let char  = text.charCodeAt(0);
console.log(char);


 names = "Alamgir";
 len = names.slice(2,5);
console.log(len);

 names = "Alamgir";
 len = names.slice(2);
console.log(len);


names = "Alamgir";
len = names.substring(2,5);
console.log(len);

names = "Alamgir";
len = names.toLowerCase();
console.log(len);

names = "Alamgir";
len = names.toUpperCase();
console.log(len);