const arr = Array(); // creates an an empty array
console.log(arr);
const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let index = fruits.indexOf('banana'); // 0
index != -1 ? console.log('This fruit does exist in the array') :
    console.log('This fruit does not exist in the array');
const numbers = [1, [2, 3], 4, 5];
console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position
const newNumber = numbers.slice();
newNumber[1][0] = 1;
console.log(newNumber);
console.log(numbers);
//TODO assignment 1 day 1
const newArr = [];
const newArr2 = new Array(6);
for (let i = 0; i < newArr2.length; i++) {
    newArr2[i] = i;
}
console.log(newArr2[newArr2.length / 2]);
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
for (let i of itCompanies) {
    console.log(i.toUpperCase());
};
console.log(itCompanies.splice());
console.log(itCompanies);
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(' ');
console.log(words);
console.log(words.length);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

const ages = [12, 19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const max = Math.max(...ages);
console.log(max);
const min = Math.min(...ages);
console.log(min);

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach((number, i) => {
//   console.log(number, i)
// })

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
countries.forEach((country, i, arr) => {
    console.log(i, country.toUpperCase());
});
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
};

for (const key in user) {
    console.log(key, user[key]);
}
let a = 20;
function add() {
    let a = 21;
    var b = 20;
    console.log(a);
    console.log(a + b);
}
console.log(a);

add();