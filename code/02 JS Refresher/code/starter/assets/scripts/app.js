//import { apiKey } from './util.js';
//import { apiKey, abc } from './util.js';
//import * as Util from './util.js';

//console.log(Util.apiKey);

// variables, values and operators
//variables are data containers
//Reusability and readability

// let userMessage = 'Hello world!';
// console.log(userMessage);

// const userName = 'Max';
// userName = 'Mary'; //error
// console.log(userName);

// console.log(10 + 6); // addition
// console.log(10 - 6); // subtraction
// console.log(10 * 6); // multiplication
// console.log(10 / 6); // division
// console.log(10 % 6); // modulus
// console.log(10 ** 6); // exponentiation
// console.log(10 == 6); // equality
// console.log(10 === 6); // strict equality
// console.log(10 != 6); // inequality
// console.log(10 >= 6); // greater than or equal to
// console.log(10 <= 6); // less than or equal to

// functions
// function greetUser(userName, message = 'Hello') {
//   // console.log(userName + ' says ' + message);

//   return 'Hi , I am ' + userName + '. ' + message + '.';
// }

// greetUser('Max', 'Good morning');
// const greeting = greetUser('Max', 'Good morning');
// console.log(greeting);

// arrow functions

// export default (userName, message) => {
//   console.log('Hello');
//   return userName + ' says ' + message;
// };

// Objects and classes

// const user = {
//   name: 'Max',
//   age: 34,
//   greet: function () {
//     console.log(
//       'Hi, I am ' + this.name + '.' + ' I am ' + this.age + ' years old.'
//     );
//   },
// };

// console.log(user.greet());

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + '.' + ' I am ' + this.age + ' years old.'
//     );
//   }
// }

// const user1 = new Person('Max', 34);
// console.log(user1.greet());

// Arrays and Array methods

// const hobbies = ['Sports', 'Cooking', 'Swimming', 'Reading', 'Cycling'];
// console.log(hobbies[3]);

// hobbies.push('Singing');
// console.log(hobbies);

// const index = hobbies.findIndex((hobby) => hobby === 'Reading');
// console.log(index);

// const funHobbies = hobbies.map((hobby) => ({
//   text: hobby,
// })); //map
// console.log(funHobbies);

// const firstName = userNameData[0];
// const lastName = userNameData[1];
// const [firstName, lastName] = ['Jarl', 'Windhelm'];
// console.log(firstName);
// console.log(lastName);
// console.log()

// const { name, age } = {
//   name: 'Vlad',
//   age: 34,
// };

// spread operator
// const hobbies = ['Sports', 'Cooking', 'Swimming', 'Reading', 'Cycling'];
// const user = {
//   name: 'Jepser',
//   age: 34,
// };

// const newHobbies = ['Climbing'];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = { isAdmin: true, ...user };
// console.log(extendedUser);

// Control structures

//const password = prompt('Enter your password');

// if (password === '123456') {
//   console.log('Password is correct');
// } else {
//   console.log('Password is incorrect');
// }

// const hobbies = ['Sports', 'Cooking', 'Swimming', 'Reading', 'Cycling'];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector('ul');
// list.remove();

// using functions as values

// function handleTimeout() {
//   console.log('Timeout!');
// }

// const handleTimeout2 = () => {
//   console.log('Timeout ...again!');
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log('Timeout one more time!');
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log('Hello!'));

//functions inside of functions
// function init() {
//   function greet() {
//     console.log('Hello');
//   }

//   greet();
// }

// init();

//refrence vs primitive values

// let userMessage = 'Hello world!';
// userMessage = 'Hello';

// const hobbies = ['Sports', 'Cooking', 'Swimming', 'Reading', 'Cycling'];
// hobbies.push('Singing');
// console.log(hobbies);

// const message = 'potato';
