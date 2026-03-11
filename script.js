// // console.log('hello Ramadan!');
// // var num; //declaration
// var num = 2;   // assignment
// var num1 = 2;
// // var num = 24; // initialization
// console.log(num == num1);
// // let sum = (num + num1) * 4;
// console.log('sum is equal to ' + (num1 + num) * 5);

// let x = 5;
// let y = 2;
// let z = x % y;

// console.log('reminder is ' + z);

let student = "Ali";
// if (student == 'Ali') {
//     console.log("allow to come inside.")
// }
// else if (student == 'Ahmed') {
//     console.log('allow to come inside.')
// }
// else {
//     console.log('your not allowed!')
// }

console.log((student == "Ali") ? "welcome" : "Not welcome");

// if (student != 'Ali') {
//     console.log('Ali is absent')
// }

let day;
let date = new Date().getDay();

// console.log(date);

switch (date) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log(day);




