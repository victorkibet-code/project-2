function swapCase(inputString) {
    let swappedString = "";
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}
let inputStr = 'The Quick Brown Fox';
let outputStr = swapCase(inputStr);
console.log(outputStr); 