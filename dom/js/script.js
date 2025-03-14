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



