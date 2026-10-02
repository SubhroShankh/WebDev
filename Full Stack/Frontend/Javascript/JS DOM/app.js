// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i]);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"))

// console.dir(document.querySelectorAll("div a"))


// let links = document.querySelectorAll(".box a");
// for(let i=0; i<links.length; i++){
//     links[i].style.color = "yellow";
// }


let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);
para1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerHTML = "I'm a blue h3";
document.querySelector('body').append(h3);
h3.classList.add("blue");

let div = document.createElement('div');
document.querySelector('body').append(div);
div.classList.add("clr");

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
div.append(h1);

let para2 = document.createElement('div');
para2.innerHTML = "ME Too";
div.append(para2);

