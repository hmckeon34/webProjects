let sentence = "";

const wordInput = document.getElementById("wordInput");
const addBtn = document.getElementById("addBtn");
const startBtn = document.getElementById("startBtn");
const display = document.getElementById("sentenceDisplay");
const promptLabel = document.getElementById("promptLabel");

addBtn.onclick = function() {
    let currentWord = wordInput.value;
    
    if (currentWord !== "") {
        if (sentence === "") {
            sentence = currentWord;
            promptLabel.textContent = "Next word for your sentence:";
        } else {
            sentence = sentence + " " + currentWord;
        }
        
        display.textContent = sentence;
        wordInput.value = "";
    }
    
    wordInput.focus();
};

startBtn.onclick = function() {
    sentence = "";
    display.textContent = "";
    wordInput.value = "";
    promptLabel.textContent = "Starting word for your sentence:";
    wordInput.focus();
};