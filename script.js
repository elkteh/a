const messages = [
    "Estas segura?",
    "Muy segura?",
    "De verdad estas segura?",
    "Por favor...",
    "Piensalo por favor...",
    "Si dices que no, estare muy triste...",
    "Voy a estar muy triste...",
    "Voy a estar muy muy triste...",
    "Esta bien, ya no te voy a preguntar...",
    "No te creas, ya di que si por favor ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "pag_si.html";
}
