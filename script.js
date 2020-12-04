// Properties and methods

// Console

/*
Below we have the abbreviation.
It will be supposed to be correct if each case gets Upper
*/

const upper = "unesco";
console.log(upper.toUpperCase());

/*
The word below must be composed of lower cases
*/

const low = "REVOLUTION";
console.log(low.toLocaleLowerCase());

/*
Below we will define the length of the phrase
The answer must be given in the console log
*/ 
const length = "Hello, world!";
console.log(length.length);

// Split

const greeting = "Bonjour";
console.log(greeting.split(''));

// Just one more example

const hello = "Guten Tag, mein Freud";
console.log(hello.split(' ,'));

const search = 'Try to find the word';
console.log(search.indexOf('find'));

// LastIndexOf

const word = "He is a cool guy";
console.log(word.lastIndexOf('Jerry'));

const phrase = "Time to sleep";
console.log(phrase.replace('sleep', 'run'));

// String Methods 
// The results will be shown in the Browser

var numbers = '123456789';
var get = numbers.indexOf('6');
document.getElementById('index').innerHTML = get;

var text = "The weather is very nice today!";
var long = text.length;
document.getElementById("length").innerHTML = long;

/*
The result will be -1, cause the name Igor is missing in the text
*/ 

var text = "Mr. Torgaiev is a smart man";
var last = text.lastIndexOf('Igor');
document.getElementById('last').innerHTML = last;

// Search

var text = 'Where is the word "this"?';
var searching = text.search("this");
document.getElementById("search").innerHTML = searching;

// Slice

var text = "Let's go out for a walk";
var slice = text.slice(0,5);
document.getElementById("slice").innerHTML = slice;

// Substr

var text = "Stone, scissors, paper";
var extract = text.substr(7,8);
document.getElementById("substr").innerHTML = extract;

// Substring

var text = "Hello, honey";
var extracting = text.substring(0,5);
document.getElementById("substring").innerHTML = extracting;

// Replace

var text = "Now I am a courier";
var change = text.replace("courier", "programmer");
document.getElementById("replacing").innerHTML = change;

// concat

var word1 = "Good";
var word2 = "to";
var word3 = "see";
var word4 = "you";
var welcome = word1.concat(" ", word2, " ", word3, " ", word4);
document.getElementById("concat").innerHTML = welcome;

// JavaScript String Padding

// padStart
var letter = "A";
var start = letter.padStart(5,0);
document.getElementById("start").innerHTML = start;

// padEnd
var letter = "A";
var end = letter.padStart(5,0);
document.getElementById("end").innerHTML = end;

// Property Access

var str = "Persons";
document.getElementById("access").innerHTML = str[6];
document.getElementById("access1").innerHTML = "You can say either 'Person' or 'People'";