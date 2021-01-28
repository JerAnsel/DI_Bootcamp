// Exercise 1

var num = 8;
var num = 10;
console.log(num);

// Output: 10 var can be reused

// Exercise 2

function numbers() {
    for (let i = 0; i < 5; i += 1) {
      console.log(i);
    }
      console.log(i);
  }
numbers();

var money = 1000000000;
const VAT = 1.17;
let lastMonth = {revenue: 100000, expenses: 10000};
let afterTax = lastMonth["expenses"]*VAT;
money += (lastMonth["revenue"] - afterTax);
console.log(money);


