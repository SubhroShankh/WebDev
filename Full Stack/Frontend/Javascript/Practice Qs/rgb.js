const heading = document.querySelector("#heading");
const btn = document.querySelector("#genrateBtn");
const colorBox = document.querySelector("#box");

btn.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const newColor = `rgb(${r}, ${g}, ${b})`;

    heading.innerText = newColor;

    colorBox.style.backgroundColor = newColor;
});