let favMovie = "Avatar";

let guess = prompt("Enter your fav movie");
while((favMovie!=guess) && (guess!= "quit")){
    console.log("Try again");
    guess = prompt("Enter your fav movie");
}