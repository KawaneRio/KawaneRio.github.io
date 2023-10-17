const japaneseInput = document.getElementById('japaneseInput');
const result = document.getElementById('result');

japaneseInput.addEventListener('input', function() {
    const japaneseText = japaneseInput.value;
    const latinText = wanakana.toRomaji(japaneseText);
    result.textContent = latinText;
});
