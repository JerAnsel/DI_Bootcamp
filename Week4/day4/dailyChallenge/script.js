let bottles = parseInt(prompt("How many bottles of beer are we drinking?"));
let drinkers = 1;
let body = "";
while(bottles>0 && bottles > drinkers){
    body += (bottles + " bottle" + String.prototype.repeat("s",bottles>1) + " of beer on the wall" + '\n' + bottles + " bottle" + String.prototype.repeat("s",bottles>1) + " of beer" + '\n');
    body += "Take " + drinkers + " down, pass " + ((bottles>1) ? "them" : "it") + " around" + '\n'; 
    bottles -= drinkers;
    body += bottles + " bottle" + String.prototype.repeat("s",bottles>1) + " of beer on the wall" + '\n'
    drinkers++;
}

if(bottles<drinkers){
    body += "We're out of beer. Better get some more!";
}

let bod = document.body;
console.log(bod);
bod.innerText = body;