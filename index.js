function processText() {
     text = document.getElementById('inputText').value;

     originalText = text;
    uppercaseText = text.toUpperCase();
     lowercaseText = text.toLowerCase();
    count = text.length;
     repeatText = text.repeat(2);
    reversedText = text.split('').reverse().join('');
    replacedText = text.replace(/a/g, '@');
}