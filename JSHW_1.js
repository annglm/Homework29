
let item_1 = 5;
console.log(item_1);

let item_2 = 3;
console.log(item_2);

let item_3 = item_1 + item_2;
console.log(item_3);
let item_4 = "Yolochka";
console.log(item_4);

console.log(item_3 + item_4);

console.log(item_3 * item_4);

let item_5 = item_3;

let item_6 = 15;
console.log(typeof(item_6));
let item_6_type = typeof(item_6);

console.log("item_6==" + typeof item_6 + item_6);

console.log("item_6_type==" + typeof item_6_type + item_6_type);

let item_7 = "item_6";

let item_7_type = typeof(item_7);

console.log(typeof(item_7));

console.log("item_7== " + typeof(item_7) + item_7);
console.log("item_7_type== " + typeof (item_7_type) + item_7_type);

let age1 = 10;

let age2 = 18;

let age3 = 60;

if (age1 < age2) {

    console.log("You don't have acces cause your age is " + age1 + " it's less than " + age2);
}

else if (age3 > age1 && age1 >= age2){
    console.log("Welcome!");
}
else if (age1 > age3){
    console.log("Keep calm and watch Culture channel");
}
else {
    console.log("Technical work");
}
