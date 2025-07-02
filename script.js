const textElement = document.getElementById("textChange");
const fullText = ["DESIGN.","DEVELOP.","HOST."];
let charIndex = 0;
const typingSpeed = 200; // milliseconds per character
fullTextIndex = 0;

function typeWriter() {
    if (charIndex < fullText[fullTextIndex].length) {
        textElement.textContent += fullText[fullTextIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (charIndex == fullText[fullTextIndex].length) {

        textElement.textContent = " ";
        charIndex = 0;
        fullTextIndex++;

        if (fullTextIndex >= fullText.length) {
            fullTextIndex = 0;
        }

        setTimeout(typeWriter, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter())

