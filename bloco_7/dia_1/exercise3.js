const button = document.getElementById("button");
let click = document.getElementById("click");
let count = 0;

button.addEventListener("click", () => {
    count += 1;
    click.innerHTML = count;
});

console.log(count);