const userName = prompt(`Come ti chiami?`);

const userSurname = prompt(`Dimmi il tuo cognome?`);

const userColor = prompt(`Qual è il tuo colore preferito?`);

const userNumber = 23

const eleSpan = document.getElementById(`result`);

eleSpan.innerHTML = userName + userSurname + userColor + userNumber