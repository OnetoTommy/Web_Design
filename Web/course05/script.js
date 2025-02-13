function init() {
    window.alert("ii")

    const aa = document.querySelector("p:nth-child(2)")
    console.log(aa)
    const newNode = aa.insertAdjacentHTML("afterbegin", "<p>dup</p>")

    const
}

window.addEventListener("DOMContentLoaded", init)