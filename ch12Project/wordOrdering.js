class WordList {
    constructor(wordsArray) {
        this.words = wordsArray;
    }

    sortAlphabetical() {
        this.words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    }

    sortReverseAlphabetical() {
        this.sortAlphabetical();
        this.words.reverse();
    }

    sortRandom() {
        for (let i = this.words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.words[i], this.words[j]] = [this.words[j], this.words[i]];
        }
    }

    getWordsString() {
        return this.words.join(" ");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("wordInput");
    const errorDisplay = document.getElementById("errorMessage");

    const processWords = (sortType) => {
        const rawValue = inputField.value.trim();
        errorDisplay.textContent = "";

        if (rawValue === "") {
            errorDisplay.textContent = "The word list box is empty. You must enter words in it.";
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(rawValue)) {
            errorDisplay.textContent = "The input is invalid. You must enter valid words in the word list box.";
            return;
        }

        const wordsArray = rawValue.split(/\s+/);
        const myWordList = new WordList(wordsArray);

        if (sortType === "alpha") {
            myWordList.sortAlphabetical();
        } else if (sortType === "reverse") {
            myWordList.sortReverseAlphabetical();
        } else if (sortType === "random") {
            myWordList.sortRandom();
        }

        inputField.value = myWordList.getWordsString();
    };

    document.getElementById("alphaBtn").addEventListener("click", () => processWords("alpha"));
    document.getElementById("revAlphaBtn").addEventListener("click", () => processWords("reverse"));
    document.getElementById("randomBtn").addEventListener("click", () => processWords("random"));
});