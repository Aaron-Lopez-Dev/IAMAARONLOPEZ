const textElement = document.getElementById("textChange");
const fullText = ["DESIGN","DEVELOPER","LOPEZ"];
let charIndex = 0;
const typingSpeed = 90; // milliseconds per character
fullTextIndex = 0;

function typeWriter() {
    if (charIndex < fullText[fullTextIndex].length) {
        textElement.textContent += fullText[fullTextIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }else if (charIndex == fullText[fullTextIndex].length){
        textElement.textContent = "";
        fullTextIndex++;
        charIndex = 0;
            typeWriter();
    }

}

document.addEventListener("DOMContentLoaded", typeWriter())

//console.log(fullText.length)