let inputBar = document.querySelector("#input-text");
let addButton = document.querySelector("#add-button");
let taskContainer = document.querySelector("#task-list")


addButton.addEventListener("click",function(e){
   
    let inputValue=inputBar.value
        if(inputValue != ""){

            let element = document.createElement('li');
            element.innerHTML=`<p>${inputValue}</p> <span  class="material-symbols-outlined delete">
            delete_forever
            </span>`
            taskContainer.appendChild(element);

            inputBar.value="";
        }else{
            alert("Please fill the Task bar")
        }
})
let deleteButton=document.querySelectorAll(".delete");
deleteButton.addEventListener("click",function(e){
    console.log(e);
})