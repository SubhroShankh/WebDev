let str = ["hi", "hello", "bye", "!"]

function concat(str){
    let results = "";
    for(let i=0; i<str.length; i++){
        results += str[i];
    }
    return results;
}
console.log(concat(str))