function handleClick() {
    const numerator = parseFloat(document.getElementById("numerator").value);
    const denominator = parseFloat(document.getElementById("denominator").value);
    console.log(numerator);
    console.log(denominator);
    const calcu = document.querySelector("#btn-calculate")

    if (isNaN(numerator) || isNaN(denominator)) {
        window.alert("Please enter valid numbers!");
        return;
    }

    if (denominator === 0) {
        window.alert("Error: Division by zero is not allowed!");
        return;
    }

    let result = numerator / denominator;
    window.alert("Final result is" + result)


}