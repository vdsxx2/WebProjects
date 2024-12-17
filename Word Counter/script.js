let wordCount = document.getElementById("word-count");
let charCount = document.getElementById("character-count");
let wordInput = document.getElementById("word-input");
let spaceCheck = document.getElementById("space-checkbox");

wordInput.addEventListener("input", count);
spaceCheck.addEventListener("change", count);

function count(){
    let spaceCounter = 0;
    let userInput = wordInput.value.trim();
    while(userInput.includes("  ")){
        userInput = userInput.replace("  ", " ");
    }
    for(var i = 0; i < userInput.length; i++){
        if(userInput[i] == " "){
            spaceCounter++;
        }
    }
    if(userInput != ""){
        wordCount.textContent = `Words: ${spaceCounter + 1}`;
    } else {
        wordCount.textContent = `Words: 0`;
    }
    if (spaceCheck.checked){
            charCount.textContent = `Characters: ${wordInput.value.length}`;
    } else {
        charCount.textContent = `Characters: ${userInput.length - spaceCounter}`;
    }
}