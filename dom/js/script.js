const addTodo = () => {
    const todoInput = document.getElementById("todoInput");
    if (todoInput.value == "") {
        alert ("please enter todolist")
        
    }else {
        console.log(todoInput.value);

        const todoList = document.getElementById("todoList");
        
        const newli= document.createElement("li");
        
        newli.innerHTML = todoInput.value;
        todoList.appendChild(newli);
        todoInput.value="";
        
    }

};




setTimeout(() => {
    


    console.log("welcome");
    

}, 3000);

console.log("Alamgir");


let arr = [ 12,13,43,15,34];
console.log(arr);

