// Array Methods

let arr = [12,34,61,1,56,78,800,90,26,,100,30,80];
let max = arr[0];

for(let i = 1; i<=arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);
