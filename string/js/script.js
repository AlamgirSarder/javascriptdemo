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
    9. concat()
    10. trim()
    11. padStart()
    12. padEnd()
    13. toString()
    14. repeat()
    15. replace()
    16. split()
    17. indexOf()



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

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ",text2);
console.log(text3);


names = "               Alamgir sarder         ";
len = names.trim();
console.log(len);

names = "Al";
len = names.padStart(4,"X");
console.log(len);

names = "Alamgir Sarder";
len = names.repeat(4);
console.log(len);

names = "Alamgir Sarder";
len = names.replace("Sarder","Kahn");
console.log(len);

// names = "my name is Alamgir Sarder";
// len = names.split(" ");
// console.log(len);

// names = "my name is Alamgir Sarder";
// len = names.split(",");
// console.log(len);


names = "my name is Alamgir Sarder";
len = names.split(' ').join("-");
console.log(len);
