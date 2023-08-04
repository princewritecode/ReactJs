const countries = require("./countries");
const webTechs = require("./web_techs");
let country = "Ethiopia";
for (let i of countries) {
    if (i === country) {
        console.log(i.toUpperCase());
    }
}
console.log(countries);
for (let i = 0; i < 10; i++) {
    console.log(countries[i]);
};
let middleArrayStart = countries[Math.floor(countries.length / 2) - 1];
console.log(middleArrayStart);

