/* function largeNUmber(numbers) {
    let max = numbers[0];
    for(let i=0;i < numbers.length; i++) {
        const element = numbers[i];
        if(element > max) {
            max = element;
        }
    }
} */

/* const names = ["abul", "babul", "caul", "daul","babul", " kabul", "abul"];
function removeDuplicate(names){
    const unique = [];
    for(let i=0; i < names.length; i++) {
        let element = names[i];
        console.log(element);
    } 
    for (const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

/* const greeting = "Assalamu Alikum";
function reverse(text) {
    let reverseP = "";
    for(const letter of text) {
        console.log(letter);
        reverseP = letter + reverseP;
    }
}
const reversed = reverse(greeting);
console.log(reversed); */
/* 
function add (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(50,98);
// console.log(firstTotal);
const secondTotal = add(65,100);
// console.log(secondTotal);

function multiply ( num1, num2){
    const result = num1 * num2;
    return result;
}

const firstResult = multiply(50,11);
console.log(firstResult); */

/* function woodCalculator(chair, table, bed){
    const chairwood = 3;
    const tablewood = 10;
    const bedwood = 20;
    const chairQnt = chair * chairwood;
    const tableQnt = table * tablewood;
    const bedQnt = bed * bedwood;
    const totalwood =chairQnt + tableQnt + bedQnt;
    return totalwood;
}
const firstoption = woodCalculator(1, 1, 1);
console.log(firstoption); */

/* for (let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("First Foo Dao then Uriya dao");
    } else if(i % 3 == 0){
        console.log("Foo");
    } else if(i % 5 == 0) {
        console.log("Panga")
    } else {
        console.log(i);
    }
} */

/* const phones = [
    {name: "Real Me", price: 113000, camera:4.5, storage: 64},
    {name: "Vivo", price: 14000, camera:6.5, storage: 64},
    {name: "Oppo", price: 18000, camera:8.5, storage: 64},
    {name: "Htc", price: 20000, camera:8.5, storage: 132},

];

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest); */

/* const card = [
    {name: "laptop", price: 40000, quantity: 1},
    {name: "shirt", price: 500, quantity: 8},
    {name: "watch", price: 500, quantity: 5},
    {name: "phone", price: 5000, quantity: 2}
];


let cardtotal = 0;
for(const product of card) {
    const productTotal = product.price * product.quantity;
    cardtotal = cardtotal + productTotal;
}
console.log(cardtotal); */
/* 
function animalCount(miles){
   
        const count = miles * 10;
        return count;
    
}

const animals = animalCount(78);
console.log(animals); */

/* let sum=0; for( let i = 0; i<=3;i++){ 
    sum = sum + i; 
}
console.log(sum); */

function leapYear(year) {
  const reminder = year % 4;
  if(reminder == 0){
    return true;
  }
  else{
    return false;
  }
}
const test = leapYear(2024);
console.log(test);