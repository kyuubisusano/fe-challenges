function showMessage() {
    const email = document.getElementById('email').value;
    const form = document.getElementById('form');
    const messageDisplay = document.getElementById('message');
    if (email) {
        form.classList.add('hidden');
        messageDisplay.classList.remove('hidden');
        document.getElementById("insertedText").textContent = email;
    }
}

function returnToForm() {
    const form = document.getElementById('form');
    const messageDisplay = document.getElementById('message');

    form.classList.remove('hidden');
    messageDisplay.classList.add('hidden');
}
