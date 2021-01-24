let people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);
people[2] = "Jason";
people.push("Jeremy");

for(let i = 0; i<people.length; i++){
    pname = people[i]
    console.log(pname);
    if(pname == "Jason"){
        break;
    }    
}

let newPeople = people.slice(1,3);
let mary = people.indexOf("Mary");
let Foo = people.indexOf("Foo");
let last = people[people.length-1];
console.log(last);