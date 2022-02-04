//১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
/* let stringVar = "This is String";
let num = 10;
let type = true; */


//২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
/* let name = "Shahidul";
name = "Masud";
console.log(name);

const nam = "rupa";
console.log(nam); */


//৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 
/* let x = 10;
let y = 20;

let sum = x + y;
let multiply = x * y;
let divide = x / y;
let minus = x - y;
let persent = x % y;
console.log(sum, multiply, divide, minus, persent); */


//৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 
/* let a = 5;
let b = 10;
//< এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে ছোট কিনা 
if (a < b) {
    console.log("Yes A small number");
} else {
    console.log("NO a is not small number");
}
//> এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে বড় কিনা 
if ( a > b) {
    console.log("Yes A is a big number");
} else {
    console.log("A is not a big number But B is a big number");
}
//== এইটা দিয়ে চেক করবে বাম পাশেরটা আর ডানপাশেরটা দুইটাই সমান কিনা
if(a == b) {
    console.log(true);
}else{
    console.log(false);
}
//!= এইটা দিয়ে চেক করবে বাম পাশেরটা আর ডানপাশেরটা দুইটাই অসমান (ডিফারেন্ট বা আলাদা) কিনা
if(a != b){
    console.log(true);
}else{
    console.log(false);
}
//<= এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে ছোট বা সমান কিনা
if (a <= b) {
    console.log(true);
}else{
    console.log(false);
}
//>= এইটা দিয়ে চেক করবে বাম পাশে যেটা আছে সেটা ডানপাশেরটা থেকে বড় বা সমান কিনা 

if(a >= b){
    console.log(true);
}else{
    console.log(false)
}
 */

//৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

/* //&& থাকার মানে দুইটা শর্তই পূরণ করতে হবে। একটা করবে আরেকটা করবে না। তাহলে হবে না।

if(a < b && a <= b){
    console.log(true);
}else {
    console.log(false);
}

//।। থাকার মানে দুইটা শর্তেরযেকোন একটা পূরণ করলেই হবে। তবে দুইটাই না করলে হবে না। 

if(a < b || a > b){
    console.log(true);
}else{
    console.log(false);
} */

//৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
/* let love = 10;
let job = true;
let house = false;

if (love == 100 && job == true){
    console.log("I will marry you");
}else if (job == true && house == true) {
    console.log("I will also marry you");
}else{
    console.log("Mara kha.")
} */


//৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

//না পারলে এই ভিডিও দেখো: 17_5-3 More while loops, odd numbers, even numbers

/* var number = 7;
while(number <= 19 ){
    console.log(number);
    number = number + 2;    

} */

//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

/* // 1. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। 
let mainArry = [10, 20, 30, 40,50];
console.log(mainArry);
console.log(mainArry.length);
// 2. সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে।
console.log(mainArry[3]);
mainArry[3] = 60;
console.log(mainArry);
//3. array এর মধ্যে দুইটা উপাদান যোগ করতে হবে।
mainArry.push(70, 80);
console.log(mainArry);

//4.একটা উপাদান কে বের করে দিতে হবে।
mainArry.pop(); 
console.log(mainArry); */


//৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

/* let mainArry = ["Masud", "Rana", "Rifat", "Shahanaj"];

for(const name of mainArry){
    console.log(name);
} */


//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

/*  const largeNum = [60, 70, 80, 90,100, 20, 130, 50];

for(const large of largeNum){
    if(large > 80){
        console.log(large);
    }
} */



//১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

/* function numMultiply(num1, num2, num3){
    return num1 * num2 * num3; 
}
const result = numMultiply(10,20,30);
console.log(result); */


//১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

/* let student = {
    name: "Masud",
    age: 27,
    roll: 07,
    class:12,
    gpa: 3.50,
    from: "Bangladesh"
}
student.age = 25;
console.log(student); */

//১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

/* function feetToInch(feet){
    let inch = feet * 12;
    return inch;

}
const inch = feetToInch(1);
console.log(inch); */

//২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
/* function centimeterToMeter(centimeter){
    let meter = centimeter / 100;
    return meter;
}
const meter = centimeterToMeter(2);
console.log(meter); */




//৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

//এইবার ভালো করে খেয়াল করো। প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

/* function paperRequirements(firstB5, secondB3, thirdB10) {
    const firstBook = 100;
    const secondBook = 200;
    const thirdBook = 300;
    const totalPage = (firstB5*firstBook) + (secondB3 * secondBook) + (thirdB10 * thirdBook);

    return totalPage;
}

const totalPage = paperRequirements(10, 30,10);
console.log(totalPage); */


//৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

/* function bestFriend(array){
    let largeFriend = array[0];
    for(let i=0; i< array.length; i++){
        const element = array[i];
        if(element.length > largeFriend.length){
            largeFriend = element;
        }
    }
    return largeFriend;
}

const myFriendList = ["Masud", "Sabina", "Shahanj Parvin Saon", "Shahidul Islam"];
const largefriend = bestFriend(myFriendList);
console.log(largefriend); */



//৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

let store = [];
let arrayNum = [5, 10, 20, -5, 12, -8, 19];

for(let i=0; i < arrayNum.length; i++){
    const elements = arrayNum[i];

    if(elements > 0){
        store.push(arrayNum[i]);
    }else{
        break;
    }
}
console.log(store);