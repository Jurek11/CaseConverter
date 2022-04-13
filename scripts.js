//Convert text - each letter in the upper case.
const upperCaseButton = document.getElementById("upper-case");
upperCaseButton.addEventListener("click", function () {
    let upperText = document.querySelector("textarea").value.toUpperCase();
    document.querySelector("textarea").value = upperText;
});

//Convert text - each letter in the lower case.
const lowerCaseButton = document.getElementById("lower-case");
lowerCaseButton.addEventListener("click", function () {
    let lowerText = document.querySelector("textarea").value.toLowerCase();
    document.querySelector("textarea").value = lowerText;
});

//Convert text - each word starts with the upper case.
const properCaseButton = document.getElementById("proper-case");
properCaseButton.addEventListener("click", function () {
    let myText = document.querySelector("textarea").value.toLowerCase();
    let textArray = myText.split(" ");
    function capitalizeFirstElement(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    let properTextArray = textArray.map(capitalizeFirstElement);
    let properCase = properTextArray.join(" ");
    document.querySelector("textarea").value = properCase;
});

//Convert text - each sentence starts with an upper case letter.
const sentenceCaseButton = document.getElementById("sentence-case");
sentenceCaseButton.addEventListener("click", function () {
    let myText = document.querySelector("textarea").value.toLowerCase();
    let textArray = myText.split(". ");
    function capitalizeFirstElement(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    let sentenceTextArray = textArray.map(capitalizeFirstElement);
    let sentenceCase = sentenceTextArray.join(". ");
    document.querySelector("textarea").value = sentenceCase;
});

//Save the text as a .txt file.
const textSaveButton = document.getElementById("save-text-file");
textSaveButton.addEventListener("click", function () {
    let myText = document.querySelector("textarea").value;
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    // Start file download.
    download("text.txt",myText);
});