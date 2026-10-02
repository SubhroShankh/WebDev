// let jsonRes = 
//     '{"fact":"Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.","length":103}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name: "subhhh",
//     marks: "95",
// };



let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((Response) => {
//         console.log(Response);
//         Response.json()
//         .then((data) => {
//             console.log(data)
//         })
//     })
//     .catch((err) => {
//         console.log("ERROR --", err)
//     })


// async function getFacts(){
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
// }


async function getFacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);

    } catch (e){
        console.log("error -", e);
    }

    console.log("bye");
}