const btn = document.querySelector("#click")

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let randomNum = Math.floor(Math.random() * 100000) + 1;
    document.getElementById("num").innerHTML = randomNum
})