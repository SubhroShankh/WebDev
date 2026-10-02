// // // // // // let btn = document.querySelector('button');
// // // // // // console.dir(btn);

// // // // // // // btn.onclick = function(){
// // // // // // //     console.log("button was clicked");
// // // // // // // }

// // // // // // function sayHello(){
// // // // // //     alert("Hello!");
// // // // // // }

// // // // // // btn.onclick = sayHello;

// // // // // let btns = document.querySelectorAll("button");

// // // // // for(btn of btns){
// // // // //     btn.onmouseenter = function(){
// // // // //         console.log("you enetred a button")
// // // // //     };
// // // // //     btn.onclick = sayHello;
    
// // // // // }

// // // // // function sayHello(){
// // // // //     alert("Hello!");
// // // // // }

// // // // let btns = document.querySelectorAll("button");

// // // // for(btn of btns){
// // // //     // btn.addEventListener("click", sayHello);
// // // //     // btn.addEventListener("click", sayName);
// // // //     btn.addEventListener("dblclick", function(){
// // // //         console.log("you doubled click me");
// // // //     })
// // // // }

// // // // function sayHello(){
// // // //     alert('Hello');
// // // // }

// // // // function sayName(){
// // // //     alert("subhh");
// // // // }

// // // // let btn = document.querySelector("button");

// // // // btn.addEventListener("click", function(event) {
// // // //     console.log(event)
// // // //     console.log("button clicked")

// // // // });

// // // // let inp = document.querySelector("input");
// // // // inp.addEventListener("keydown", function (){
// // // //     console.log("key was pressed");
// // // // })

// // // // let form = document.querySelector("form");
// // // // form.addEventListener("submit", function(event) {
// // // //     event.preventDefault();

// // // //     let inp = document.querySelector("input");
// // // //     console.dir(inp);
// // // //     console.log(inp.value);
// // // // });

// // // // let form = document.querySelector("form");
// // // // form.addEventListener("submit", function(event){
// // // //     event.preventDefault();
// // // // });

// // // // let user = document.querySelector("#user");
// // // // user.addEventListener("change" , function() {
// // // //     console.log("input changed");
// // // //     console.log("final value is =", this.value);
// // // // });
// // // // user.addEventListener("input", function(){
// // // //     console.log("input changed");
// // // //     console.log("final value is =", this.value)
// // // // })

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo(){
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("blue", 1000);
    } catch (err) {
        console.log("error found");
        console.log(err)
    }
    
    let a = 5;
    console.log(a);
    console.log("new number is: ", a+3);
}


// // // colorChange("red", 1000, () => {
// // //     colorChange("orange", 1000, () => {
// // //         colorChange("green", 1000, () => {
// // //             colorChange("yellow", 1000, () => {
// // //                 colorChange("blue", 1000);
// // //             });
// // //         });
// // //     });
// // // });


// // // function saveToDB(data, success, failure){
// // //     let internetSpeed = Math.floor(Math.random() * 10) + 1;
// // //     if(internetSpeed > 4){
// // //         success();
// // //     }else{
// // //         failure();
// // //     }
// // // }

// // // saveToDB("subhro shankh",
// // //     () => {
// // //         console.log("success: data was saved");
// // //         saveToDB("Hello world",
// // //             () => {
// // //                 console.log("success2: data2 was saved");
// // //                 saveToDB("pewDIpI",
// // //                     () => {
// // //                         console.log("success3: data3 was send");
// // //                     },
// // //                     () => {
// // //                         console.log("failure3: weak connection");
// // //                     }
// // //                 )
// // //             },
// // //             () => {
// // //                 console.log("failure2: weak connection");
// // //             }
// // //         )
// // //     },
// // //     () => {
// // //         console.log("failure: weak connection")
// // //     }
// // // )

// // function savetoDb(data){
// //     return new Promise((resolve, reject) => {
// //         let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //         if(internetSpeed > 4){
// //             success("success : data was saved");
// //         } else {
// //             failure("failure : weak connection");
// //         }
// //     });
// // }

// // let request = savetoDb("ninja arshi"); // req is a promise object
// // request.then(() => {
// //     console.log("promise was resolved")
// //     console.log(request);
// // })
// // .catch(() => {
// //     console.log("promise was rejected")
// //     console.log(request);
// // })



// async function geet() {
//     throw "weak connection";
//     return "hello!";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("promise was rejected with error : ", err);
// })

// let demo = async () => {
//     return 5;
// }

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         },1000)
//     })
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }