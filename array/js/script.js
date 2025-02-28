//push()        //find()
//pop()         //forEach()
//shift()       //map()
//unshift()
//slice()
//splice()


let arr = [1,2,3,4,5,6,7,8];
console.log(arr);

arr.push(9);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(11);
console.log(arr);

let num = [10,20,30,40,50,60];
let newnum = num.slice(2,4);
console.log(newnum);

let names = ["alamgir","kamal","sameer","asif","ashik"];
names.splice(1,2,"new names add");
console.log(names);


let name = [10,20,25,50];
const xx = name.find((x)=>{
    if(x<20){
        console.log(x);
    }
})

// const x = name.find(item=>item>20);
// console.log(x);


let a = [10,20,30,40,50,60];

a.forEach((x)=>{
        console.log(x);
        
})



const y = [1,2,3,4,5];
let z =y.map((x)=>{
     return x*3;
})

console.log(z);

const number = [10,20,30,40,50,60];
const newNumber = number.map((eachnumber)=>{
console.log(eachnumber*2);
});