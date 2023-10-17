document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the input text value
    const inputText = document.getElementById('inputText').value;

    // Convert 'a' to 'あ'
    const convertedText = inputText.replace(/a/g, 'あ');

    // Display the converted text
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `Converted Text: ${convertedText}`;
});
