// Exercise 1

let age = prompt("What is your age?");

function checkDriverAge(age){
    if(age > 18){
        alert("You are old enough to drive, Powering On. Enjoy the ride!");
    }

    else if(age == 18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }

    else{
        alert("Sorry, you are too young to drive this car. Powering off");
    }
}

checkDriverAge(age);

// Exercise 2

function changeEnough(wallet, total){
    let walletTotal = wallet[0]*0.25 + wallet[1]*0.1 + wallet[2]*0.05 + wallet[3]*0.01;
    if(walletTotal>total){
        return true;
    }

    return false;
}
let wallet = [4,3,5,10];
let total = 1.2;
console.log(changeEnough(wallet, total));

// Exercise 3

function factors(){
    let Elements = []
    for(let i = 0; i < 500; i++){
        if(i % 23 == 0){
            Elements.push(i);
        }
    }

    console.log(Elements);
    console.log(Elements.reduce((a,b) => a + b))
}

factors();

// Exercise 4

function checkBasket(){

    let amazonBasket = {
        glasses: 1,
        books: 2,
        floss: 100
    }    

    let item = prompt("Which item would you like?");
    if(item in amazonBasket){
        alert("Your item is in the basket.");
        return;
    }
    alert("Your item is not in the basket.");
}

checkBasket();
// Exercise 5

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  ;

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} ;

let shopping_list = ["banana", "orange", "apple"];

function myBill(){
    let sum = 0;
    for(let i = 0; i < shopping_list.length; i++){
        sum += prices[shopping_list[i]]; 
    }
    return sum;
} 

// Exercise 6

function tipCalc(bill){
    if(bill < 50){
        return bill*.2;
    }
    else if(bill < 200){
        return bill*.15;
    }
    else{
        return bill*0.1;
    }
}

let bills = prompt("Enter your bills, John, separated by commas.").split(",");

let tips = [];
let totals = [];
var bill;
for(bill of bills){
    let tip = tipCalc(bill);
    console.log(tip);
    tips.push(tip);
    totals.push(tip + parseInt(bill));
}

console.log(tips, totals);

// Exercise 7

function hotel_cost(){
    let nights = "";
    do {
        nights = parseInt(prompt("How many nights are you staying?"));
    }
    while(isNaN(nights));
    return nights*140;
}

function plane_ride_cost(){
    let location = "";
    do {
        location = prompt("Where are you flying to?");
    }
    while(typeof location != "string" || !isNaN(parseFloat(location)));

    switch(location){
        case "London":
            return 183;
        
        case "Paris":
            return 220;
        
        default:
            return 300;
    }
}

function rental_car_cost(){
    let days = "";
    do {
        days = parseInt(prompt("How many days are you staying?"));
    }
    while(isNaN(days));
    let total = 40*days;
    return (days > 10)*(-0.05)*total + total; 
}

function total_vacation_cost(){
    return hotel_cost() + plane_ride_cost() + rental_car_cost();
}

total_vacation_cost();