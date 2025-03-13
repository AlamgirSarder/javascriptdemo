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





