let text = prompt("Enter some words divided by commas:").split(",");
let max_length = 0;
let max_index = 0;
for(const word of text){
    if(word.length > max_length){
        max_length = word.length;
        max_index = text.indexOf(word);
    }
}
console.log("*".repeat(max_length+4));
for(const word of text){
    console.log("* " + word +" ".repeat(max_length-word.length) + " *")
}
console.log("*".repeat(max_length+4));
