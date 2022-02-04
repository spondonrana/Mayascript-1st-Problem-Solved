/* function addTwoNumber(num1, num2){
    var sum = num1 + num2;
    console.log(sum);
}

addTwoNumber(55,60);
addTwoNumber(5,12); */

var numbers = [10, 20, 30, 40, 225, 666, 857];


// console.log(numbers.length);
/* for (let index=0; index < numbers.length; index++) {
    console.log(numbers[index], index);
} */

/* function printAllArrayNum(numArray) {
    for(let i=0; i < numArray.length; i++) {
        console.log(numArray[i], i);
    }
}

printAllArrayNum(numbers);
printAllArrayNum([500, 550, 580, 659]);

console.log(object); */

/* function isPositive(number) {
    if(number > 0){
        return true;
    } else {
        return false;
    }
}
let myNumber = isPositive(1);

if(myNumber == true){
    ans = myNumber + 5;
}
console.log(ans); */

/* function ispositive(number){
    let result = 0;
    if(number > 0){
        result = "positive"
    } else {
        result = "Nagetive"
    }
    return result;
}
console.log(ispositive(2)); */

/* function positive(numbers){
    let positiveNum = [];
    for(let i=0; i < numbers.length; i++){
        let element = numbers[i];
        if(numbers[i] < 0){
            break;
        } 
        if(element > 0){
            positiveNum.push(numbers[i]);
        }
    }
    return positiveNum;
    
}

const myNum = [10, 25, -9, 15, 50, 02, -7];
const result = positive(myNum);
console.log(result); */

/* function isNagative(nums){
    let positiveElemnets = [];
    for (const num of nums) {
        if (num >= 0) {
            positiveElemnets.push(num);
        }else{
            break;
        }
    }
    return positiveElemnets;
}
const mynumber = [5, 9, 12, 7, -8, 8];
const result = isNagative(mynumber);

console.log(result); */

// Print all even number from 1 -20;

/* function isEven(numbers){
    for(let i=1; i <= 20; i++) {
        if(i%2 == 0){
            console.log(i);
        }
    }
}
isEven(); */

/* function countNum(){
    let count = 0;
    for(let i=1; i <= 30; i++){
        if (i%3 == 0){
        //    console.log(i);
           count = count + 1;
        }
    }
    return count;
}

let result = countNum();
console.log(result); */

// calculate the average of all the number that is divisible by 3

function averageNum(num) {
    let sum = 0;
    let count = 0;
    for(let i=1; i< num; i++){
        
        if(i%3 == 0){
            sum = sum + i;
            count = count + 1;
        }
    }

    let avg = sum / count;
    return avg;

}
const result = averageNum(100);
console.log(result);