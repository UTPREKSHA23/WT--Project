function findLength() {
    let str1 = document.getElementById("input1").value;
    let str2 = document.getElementById("input2").value;
    document.getElementById("result").innerText = "Lengths: " + str1.length + " & " + str2.length;
}

function reverseString() {
    let str1 = document.getElementById("input1").value;
    let str2 = document.getElementById("input2").value;
    let combined = str1 + str2;
    // Fix: Using 'combined' instead of 'str'
    let reversed = combined.split("").reverse().join("");
    document.getElementById("result").innerText = "Reversed: " + reversed;
}

function checkPalindrome() {
    let str1 = document.getElementById("input1").value;
    let str2 = document.getElementById("input2").value;
    let combined = (str1 + str2).toLowerCase();
    let rev = combined.split("").reverse().join("");

    if (combined !== "" && combined === rev) {
        document.getElementById("result").innerText = "Palindrome";
    } else {
        document.getElementById("result").innerText = "Not Palindrome";
    }
}

function concatenateStrings() {
    let str1 = document.getElementById("input1").value;
    let str2 = document.getElementById("input2").value;
    document.getElementById("result").innerText = "Combined: " + str1 + str2;
}

function findInitials() {
    let str1 = document.getElementById("input1").value.trim();
    let str2 = document.getElementById("input2").value.trim();
    
    // Fix: Corrected the punctuation (: and ;) in the ternary logic
    let firstInitial = str1.length > 0 ? str1[0] : "";
    let secondInitial = str2.length > 0 ? str2[0]: "";
    
    document.getElementById("result").innerText = "Initials: " + firstInitial + secondInitial;
}

function clearFields() {
    // Replace 'input1', 'input2', and 'result' with the actual IDs in your HTML
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('result').innerHTML = ""; 
    
    // If you used a result box that needs to be hidden:
    // document.getElementById('result').style.display = 'none';
}
