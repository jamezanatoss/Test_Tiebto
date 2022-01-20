const prompt = require('prompt-sync')();

var letter = prompt("Please Input Data : ");

var chars = '';
var Capital = 0;
var Small = 0;
var i = 0;

while (i < letter.length){
    chars = letter.charAt(i);
        if(chars == chars.toUpperCase()) {
            Capital++;
        }

        else if(chars == chars.toLowerCase()) {
            Small++;
        }
    i++;
}

if(Capital == letter.length && Capital < 10000){
    console.log('All Capital Letter');
}

else if(Small == letter.length && Small < 10000){
    console.log('All Small Letter');
}
else{
    console.log('Mix');
}
