function findLength() {
    let str = document.getElementById("input1").value;
    document.getElementById("result").innerText = str.length;
}

function reverseString() {
    let str = document.getElementById("input1").value;
    document.getElementById("result").innerText = str.split("").reverse().join("");
}

function checkPalindrome() {
    let str = document.getElementById("input1").value;
    let rev = str.split("").reverse().join("");

    if (str === rev) {
        document.getElementById("result").innerText = "Palindrome";
    } else {
        document.getElementById("result").innerText = "Not Palindrome";
    }
}

function concatenateStrings() {
    let str1 = document.getElementById("input1").value;
    let str2 = document.getElementById("input2").value;
    document.getElementById("result").innerText = str1 + str2;
}

function findInitials() {
    let str = document.getElementById("input1").value.trim();
    let words = str.split(" ");
    let initials = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            initials += words[i][0].toUpperCase();
        }
    }

    document.getElementById("result").innerText = initials;
}

function clearFields() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").innerText = "";
}
