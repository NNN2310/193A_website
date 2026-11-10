function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Apply or remove fancy formatting when a radio button changes.
function changeStyle() {
    const textArea = document.getElementById("textInput");
    const fancySelected = document.getElementById("fancy").checked;

    if (fancySelected) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}


function mooText() {
    const textArea = document.getElementById("textInput");

    
    const sentences = textArea.value.toUpperCase().split(".");

   
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].replace(/(\S+)(\s*)$/, "$1-Moo$2");
    }

    // Join the sentences back together.
    textArea.value = sentences.join(".");
}