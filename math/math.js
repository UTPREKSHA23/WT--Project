function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (a + b);
}

function subtract() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (a - b);
}

function multiply() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + (a * b);
}

function divide() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (b === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
        return;
    }

    document.getElementById("result").innerText = "Result: " + (a / b);
}

function power() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = "Result: " + Math.pow(a, b);
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "";
}
