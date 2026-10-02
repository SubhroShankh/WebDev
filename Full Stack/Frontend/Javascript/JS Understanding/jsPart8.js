// console.log("subhh")

// let arr = [1,2,3,4,5];
// arr.forEach(function(el){
//     console.log(el)
// });

// let num = [1, 2, 3, 4];

// let double = num.map(function(el){
//     console.log(el*2);
//     return el*2;
// });

// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// let ans = nums.filter((el) => {
//     return el%2 ==0;
// });

// console.log([2, 4 ,6].every((el) => el%2 == 0))

// let nums = [1, 2, 3,4];
// let finalVal = nums.reduce((res, el) => res+el);
// console.log(finalVal)

// function sum(a, b=2){
//     return a+b;
// }
// console.log(sum(4)); // 6
// console.log(sum(4 ,9)); // 13


// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
// console.log(Math.min(...nums))

// function sum(...args){
//     //arguments
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us: ", args[i]);
//     }
// }
// sum(1, 2, 3, 4, 5, 6);

// let names = ["tony", "bruce", "peter", "steve"];
// // let winner = names[0];
// // let runnerup = names[1];
// // let secondRunnerup = names[2];

// let [winner, runnerup, ...others] = names;

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "subhh@224",
    password: "abcd",
};

let {username, password} = student;

