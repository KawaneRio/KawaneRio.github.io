const transliterationForm = document.getElementById('transliterationForm');
const japaneseInput = document.getElementById('japaneseInput');
const result = document.getElementById('result');

transliterationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const japaneseText = japaneseInput.value;
    const romanizedText = Hepburn.fromKana(japaneseText); // Hepburn.fromKana() handles both kana and kanji

    result.textContent = `Romanized Text: ${romanizedText}`;
});
