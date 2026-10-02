// function hello(){
//     console.log("hello")
// }
// hello();
// function nameCall(){
//     console.log("subhhh")
// }
// nameCall();

// function printName(name){
//     console.log(name);
// }
// console.log("subhh")
// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }
// console.log("name", 90)

// function printTable(num){
//     for(let i=1; i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}`)
//     }
// }
// printTable(2);


// function sum(a ,b){
//     return a+b;
// }

// console.log(sum(1,2))


// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x)
//     }

//     innerFunc();
// }
// console.log(outerFunc())


//Function Expression
// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(1,2))

//Higher Order Functions
// function multipleGreet(func, n){
//     for(let i = 1; i<=n; i++){
//         func();
//     }
// }

// let greet =function(){
//     console.log("hello")
// }
// console.log(
// multipleGreet(greet,10));


const calculator = {
    num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}