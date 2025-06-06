// Array Methods
/*
    1. pop()
    2. push()
    3. shift()
    4. unshift()
    5. splice()
    6. slice()
    7. sort()
    8. reverse()
    9. copyWithin()
    10. toString()
    11. join()
    12. concat()

    13. array.forEach()
    14. map()
    15. filter()
    16. indexOf()
    17. find()
    18. reduce()






*/

let arr = [12,34,61,1,56,78,800,90,26,,100,30,80];
let max = arr[0];

for(let i = 1; i<=arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);


let names = ["Alamgir","Asif","Deopk"];
console.log(names);

names.pop();
console.log(names);

names.push("Sameer");
console.log(names);

names.shift();
console.log(names);

names.unshift("Alamgir","Kazi");
console.log(names);

names.splice(2,0,"Akash","Kamal","Raju");
console.log(names);

names.splice(4,1);
console.log(names);


let newnames =names.slice(1,3);
console.log(newnames);//original array not change

names.sort();
console.log(names);

names.reverse();
console.log(names);

//number sorting

let numbers = [2,5,12,50,3,25,1,49];
numbers.sort((x,y)=>{
    return x-y;
});
console.log(numbers);


let x = [1,2,3,4,5,6,7,8,9];
x.copyWithin(4,0,3);
console.log(x);


let fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits);

console.log(fruits.toString());
console.log(fruits.join(" * "));


let country1 = ["America","Japan"];
let country2 = ["India","Korea","Japan"];
let totalcountry = country1.concat(country2);
console.log(totalcountry);


let array = [23,53,25,252,1200,233,23,42,800];
let maxx = Math.max.apply(null,array);
console.log(maxx);


//Array Iteration

let nnumber = [23,45,12,42,24,21];
nnumber.forEach((x)=>{
    console.log(x);
})


let student = [{
    name: "Alamgir",
    age: 25,
    address:{
        district: "Savar",
        division: "Dhaka"
    }
},
{name: "Kamal",
    age: 50,
},
{
    name: "Sameer",
    age:60
}
]

student.map((item)=>{
    console.log(item.name);
    
})

 nnumber = [23,2,45,124,6,7,11,9,42,24,21];
nnumber.filter((x)=>{
   if(x<10){
    console.log(x);
    
   }
})


nnumber = [23,2,45,124,6,7,11,9,42,24,21];

console.log(nnumber.indexOf(23)+1);



nnumber = [1,2,3,4,5];

// let res = nnumber.reduce((x,y) => x+y,sum);
let res = nnumber.reduce((x,y) =>{
    return x + y;
},2);

console.log(res);






let m = [23,43,53,23,88,1,2,4,3];
// console.log(m.sort());
let q = m.toSorted((a,b)=>{
        return a-b;
})

console.log(q);

console.log(m);







// const asif = "Asif Kamal Raju";
// const newasif = asif.split(" ").join("-");
// console.log(newasif);



const asif = "Asif-Kamal-Raju";
const newasif = asif.split("-").join(" ");
console.log(newasif);

const show = ()=> {
    console.log();
    
}