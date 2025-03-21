const input = document.querySelector(".input");
const btn = document.querySelector(".btn");


btn.addEventListener("click",()=>{
    const newinput = input.value;
    if(newinput == ""){
        console.log("empty");
    }else{
        console.log("Not Empty");
    }   
})

for(let i = 1; i<=10; i++){
    console.log(i);
    
}


const btns = document.createElement("button");
console.log(btgns);


const add = (x) =>{
    return x * 3;
}

let result = add(5);
console.log(result);
