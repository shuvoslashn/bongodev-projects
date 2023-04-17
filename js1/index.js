/**
 *      Excercises - A
 */

// JS-1-a: Write code to find the length of the string my_name
let my_name = 'Shuvo Sarker';
console.log(`\nJS-1-a: Length of the string: ${my_name.length}`);

// JS-1-b: Write code to find the length of the array myArray
let myArray = [3, 5, 9, 'a', 'ant', 'Nure', [4, 5, 9]];
console.log(`JS-1-b: Length of the array: ${myArray.length}`);

// JS-1-c: Write code to find the Index of e from the string my_name
let myName = 'Nure Siddiq';
console.log(`JS-1-c: Index of 'e': ${myName.indexOf('e')}`);

// JS-1-d: Write code to convert a string to a number and
// retrieve the sum of my_number and 40. The sum should be 70
let my_number = '30';
const sum = Number(my_number) + 40;
console.log(`JS-1-d: Sum of '30' and 40: ${sum} and it's a ${typeof sum}`);

// JS-1-e: Write code to make the string in upper case.
// The output should be NURE SIDDIQ
let my_name_1 = 'nURe SiDDiQ';
console.log(`JS-1-e: Output in Uppercase: ${my_name_1.toUpperCase()}`);

// JS-1-f: Write code to make the string in lowercase. The output should be nure siddiq
console.log(`JS-1-f: Output in Lowercase: ${my_name_1.toLowerCase()}`);

// JS-1-g: Write code to find the type of the variable myAge. What is the type
let myAge = '56';
console.log(`JS-1-g: Type of my age: ${typeof myAge}`);

// JS-1-h: Create two string variables, firstName and lastName.
// Concatenate the 2 variables to console.log Nure Siddiq
let firstName = 'Nure';
let lastName = 'Siddiq';
console.log(`JS-1-h: Full Name: ${firstName + ' ' + lastName}`);

// JS-1-i: Create three variables: month, dayOfMonth, year. Use these variables to
// console.log today’s date in one line, like this format: "March 30, 2023"
let date = new Date();
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();
let today = `${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`;
console.log(`JS-1-i: Today: ${today}`);

// JS-1-j: Create a variable with your age (i.e. let myAge = 30)
// to console.log the following string
let my_age = 30;
console.log(`JS-1-j: I'm ${my_age} years old`);
