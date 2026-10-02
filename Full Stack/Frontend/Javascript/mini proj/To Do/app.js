// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis =document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });
// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });
// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }



const addBtn = document.querySelector("#addBtn");
const taskEnter = document.querySelector("#taskEnter");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", function (){
    let items = document.createElement("li");
    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList = "delete";
    items.innerText = taskEnter.value;
    items.append(del);
    ul.appendChild(items);
    taskEnter.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par.innerText);
//         par.remove();
//     })
// }
