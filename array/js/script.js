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

