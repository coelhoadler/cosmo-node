const Utils = require('./modules/utils.js');
const readLine = require('readline');

let reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Digite uma frase: \n", phrase => {
    if (phrase.trim()) {
        const reverseStr = Utils.reverse(phrase);
        console.log(`
            🔖  [Frase Original] => ${phrase}.

            🔖  [Frase Invertida] => ${reverseStr}.
        `);
    } else {
        console.error('Digite uma frase válida!');
    }
    reader.close();
});