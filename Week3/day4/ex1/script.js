let sentence = "This life is not really not that bad!";
console.log(sentence);
let wordNot = sentence.indexOf("not");
let wordBad =  sentence.indexOf("bad");

if (wordBad == -1 || wordNot == -1 || wordBad < wordNot){
    console.log(sentence);
}

else {
    sentence = sentence.replace(/not.* bad/, "good");
    console.log(sentence)
}

