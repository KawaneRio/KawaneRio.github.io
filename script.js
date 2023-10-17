const transliterationForm = document.getElementById('transliterationForm');
const japaneseInput = document.getElementById('japaneseInput');
const result = document.getElementById('result');
const kanjiInput = '漢字'; // Kanji input
const hiraganaReading = wanakana.toHiragana(kanjiInput);

console.log(hiraganaReading); // Output: 'かんじ'

const iso3602strictMapping = {
    あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
    か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
    さ: 'sa', し: 'si', す: 'su', せ: 'se', そ: 'so',
    た: 'ta', ち: 'ti', つ: 'tu', て: 'te', と: 'to',
    な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
    は: 'ha', ひ: 'hi', ふ: 'hu', へ: 'he', ほ: 'ho',
    ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
    や: 'ya', ゆ: 'yu', よ: 'yo',
    ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
    わ: 'wa', を: 'wo', ん: 'n',
    が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
    ざ: 'za', じ: 'zi', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
    だ: 'da', ぢ: 'di', づ: 'du', で: 'de', ど: 'do',
    ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
    ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
    きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo',
    ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
    しゃ: 'sya', しゅ: 'syu', しょ: 'syo',
    じゃ: 'zya', じゅ: 'zyu', じょ: 'zyo',
    ちゃ: 'tya', ちゅ: 'tyu', ちょ: 'tyo',
    ぢゃ: 'dya', ぢゅ: 'dyu', ぢょ: 'dyo',
    にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
    ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo',
    びゃ: 'bya', びゅ: 'byu', びょ: 'byo',
    ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo',
    みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
    りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo',
    ぁ: 'xa', ぃ: 'xi', ぅ: 'xu', ぇ: 'xe', ぉ: 'xo',
    っ: 'xtu', ゃ: 'xya', ゅ: 'xyu', ょ: 'xyo',
    ア: 'a', イ: 'i', ウ: 'u', エ: 'e', オ: 'o',
    カ: 'ka', キ: 'ki', ク: 'ku', ケ: 'ke', コ: 'ko',
    サ: 'sa', シ: 'si', ス: 'su', セ: 'se', ソ: 'so',
    タ: 'ta', チ: 'ti', ツ: 'tu', テ: 'te', ト: 'to',
    ナ: 'na', ニ: 'ni', ヌ: 'nu', ネ: 'ne', ノ: 'no',
    ハ: 'ha', ヒ: 'hi', フ: 'hu', ヘ: 'he', ホ: 'ho',
    マ: 'ma', ミ: 'mi', ム: 'mu', メ: 'me', モ: 'mo',
    ヤ: 'ya', ユ: 'yu', ヨ: 'yo',
    ラ: 'ra', リ: 'ri', ル: 'ru', レ: 're', ロ: 'ro',
    ワ: 'wa', ヰ: 'wi', ヱ: 'we', ヲ: 'wo', ン: 'n',
    ガ: 'ga', ギ: 'gi', グ: 'gu', ゲ: 'ge', ゴ: 'go',
    ザ: 'za', ジ: 'zi', ズ: 'zu', ゼ: 'ze', ゾ: 'zo',
    ダ: 'da', ヂ: 'di', ヅ: 'du', デ: 'de', ド: 'do',
    バ: 'ba', ビ: 'bi', ブ: 'bu', ベ: 'be', ボ: 'bo',
    パ: 'pa', ピ: 'pi', プ: 'pu', ペ: 'pe', ポ: 'po',
    キャ: 'kya', キュ: 'kyu', キョ: 'kyo',
    ギャ: 'gya', ギュ: 'gyu', ギョ: 'gyo',
    シャ: 'sya', シュ: 'syu', ショ: 'syo',
    ジャ: 'zya', ジュ: 'zyu', ジョ: 'zyo',
    チャ: 'tya', チュ: 'tyu', チョ: 'tyo',
    ヂャ: 'dya', ヂュ: 'dyu', ヂョ: 'dyo',
    ニャ: 'nya', ニュ: 'nyu', ニョ: 'nyo',
    ヒャ: 'hya', ヒュ: 'hyu', ヒョ: 'hyo',
    ビャ: 'bya', ビュ: 'byu', ビョ: 'byo',
    ピャ: 'pya', ピュ: 'pyu', ピョ: 'pyo',
    ミャ: 'mya', ミュ: 'myu', ミョ: 'myo',
    リャ: 'rya', リュ: 'ryu', リョ: 'ryo',
    ァ: 'xa', ィ: 'xi', ゥ: 'xu', ェ: 'xe', ォ: 'xo',
    ッ: 'xtu', ャ: 'xya', ュ: 'xyu', ョ: 'xyo'
};


function toISO3602Strict(hiraganaText) {
    return Array.from(hiraganaText).map(char => iso3602strictMapping[char] || char).join('');
}

const kanjiInput = '漢字';
const hiraganaReading = wanakana.toHiragana(kanjiInput);
const iso3602strictRomanization = toISO3602Strict(hiraganaReading);

console.log(iso3602strictRomanization); // Output: 'kanji'
