let sum = 0;
let evenNumbers = [];

for (let i = 4; i <= 50; i += 2) {
    evenNumbers.push(i);
    sum += i;
}

console.log("Զույգ թվերը:", evenNumbers);
console.log("Զույգ թվերի գումարը:", sum);