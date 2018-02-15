var sentiment = require('sentiment-swedish');
 
var r1 = sentiment('Katter är dumma.');
console.dir(r1);        // Score: -2, Comparative: -0.666 
 
var r2 = sentiment('Katter är totalt fantastiska!');
console.dir(r2);        // Score: 4, Comparative: 1 

var r3 = sentiment('Jag heter Marina och jag älskar katter.')
console.dir(r3);
