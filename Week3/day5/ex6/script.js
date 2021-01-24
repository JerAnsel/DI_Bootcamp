let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sorted = names.sort();

console.log(sorted);

let secret = "";

for(const name of names){
    secret+= name[0];
}

console.log(secret);