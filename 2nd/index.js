// const myNumber = -5;
// const output = Math.abs(myNumber);

// const myNumber = 2.5398;

// for(let i =0; i < 20; i++) {
//     const outPut = Math.random() * 10;
//     const rounded = Math.ceil(outPut);
//     console.log(rounded);
// }

// let first = 5;
// let second = 7;
/* console.log(first, second);

let temp = first;
first = second;
second = temp;
console.log(first, second);
*/
// destructuring
// [first, second] = [second, first]
// console.log(first, second);

/* const firstMan = 650;
const secondMan = 550;
const thirdMan = 500;

let max = Math.max(firstMan, secondMan, thirdMan);
console.log("big number is = ",max); */


/* if (firstMan > secondMan && firstMan > thirdMan) {
    console.log("First is big");
} else if(secondMan > firstMan && secondMan > thirdMan) {
    console.log("second is big");
} else {
    console.log("third is big")
} */


/* function largestNumber (first, second, third) {
    if ( first < second && first < third) {
        return first;
    } else if ( second < first && second < third) {
        return second;
    }else {
        return third;
    }
}
const largeOne = largestNumber(500, 80, 100);
console.log(largeOne); */

/* const numbers = [10, 20, 3, 30, 33, 50, 80, 100];
let sum = 0;
for (let i=0; i<numbers.length; i++) {
    const elemnet = numbers[i];
    sum = sum + elemnet;
}
console.log(sum); */

/* function arrayTotal (number) {
    let sum =0;
    for(let i=0; i <  number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([55, 80, 90]);
console.log(total); */

/* function largestElement(numbers) {
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element < largest){
            largest = element;
        }        
    }
    return largest;
}

const ages = [7, 12, 18, 20, 50, 35, 45, 80];
const oldest = largestElement(ages);
console.log(oldest); */

/* function smallestAge (age) {
    let smallest = age[0];
    for(let i=0; i < age.length; i++){
        const element = age[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;    
}

const ages = [5,8,10,15,18,20,40,50];
const smallest = smallestAge(ages);
console.log(smallest); */
//
/* const fibo = [0,1];
for(let i=2; i <= 10; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); */

/* function fiboNacciSeres(num) {
    if(typeof num !='number'){
        return "Please give me a number";
    } else if(num < 2) {
        return "Please enter positive value";
    }
    const fibo = [0,1];
    for(let i=2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fibonumbers = fiboNacciSeres(5);
console.log(fibonumbers);  */


/* const numbers = [10, 20, 3, 30, 33, 50, 80, 100];
let sum = 0;
for (let i=0; i<numbers.length; i++) {
    const elemnet = numbers[i];
    sum = sum + elemnet;
}
console.log(sum); */

/* function arrayTotal (number) {
    let sum =0;
    for(let i=0; i <  number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([55]);
console.log(total); */

/* const number = -78;
const answer = Math.abs(number);
console.log(answer); */

/* let a = 2;
let b = 3;
if( a >= b) {
    console.log("hello");
} */

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(count=='a'){
    count++;
  }
}
console.log(count);