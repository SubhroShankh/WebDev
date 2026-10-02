let btn = document.querySelector("#cats");
let dg = document.querySelector("#dogs");

btn.addEventListener("click", async () =>{
    console.log("button was clicked");
    let fact = await getFacts();
    let p = document.querySelector("#fact");
    p.innerText = fact;
})

dg.addEventListener("click", async () => {
    let img = await dogImage();
    let display = document.querySelector("#img");
    display.src = img;
})


let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e){
        console.log("error - ", e);
        return "No fact found";
    }
}
 
async function dogImage() {
    try{
        let img = await axios.get(url2);
        return img.data.message;
    } catch(e) {
        console.log("error - ",e);
        return "NO dog Images";
    }
}


// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = {Headers: {Accept: application/json}};
//         let res = axios.get(url, configdj);
//         console.log(res.data);

//     }catch(err){
//         console.log(err);
//     }
// }