'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

/*
////////////////////////////////////////////////////
// Working with String Part - 3

// split() and join()
console.log('a+very+nice+string'.split('+'));
console.log('Andrius Siupaila'.split(' '));

const [firstName, lastName] = 'Andrius Siupaila'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);
/////////////////////////////////////

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // another option
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('andrius suipaila');

///////////////////////////
// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Andrius'.padStart(25, '+'));
console.log('Antanas'.padStart(25, '+').padEnd(35, '+'));

/////////
const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}


console.log(maskCreditCard(433565212168546321));
console.log(maskCreditCard(985653212156598953));
console.log(maskCreditCard(56598953));

//////////////
// Repeat
const message2 = 'Bad wheater... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);

*/

////////////////////////////////////////////////////
// Working with String Part - 2
// const airlane = 'TAP Air Portugal';
// console.log(airlane.toLowerCase());
// console.log(airlane.toUpperCase());
// console.log('andrius'.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = 'Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');

// console.log(priceGB);
// console.log(priceUS);

// const announcement = 'All passenger come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate')); work

// // regex
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boing'));

// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // practice exercise
// const checkBaggage = function(items) {
//   // always turn into lowercase
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

////////////////////////////////////////////////////
// Working with String Part - 1

// const airlane = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B373'[0]);

// console.log('B373'.length);
// console.log(airlane.length);
// // zero based
// console.log(airlane.indexOf('r'));
// console.log(airlane.lastIndexOf('r'));
// console.log(airlane.indexOf('Portugal'));
// console.log(airlane.indexOf('portugal'));

// console.log(airlane.slice(4));
// console.log(airlane.slice(4, 7));

// console.log(airlane.slice(0 , airlane.indexOf(' '))); // first word
// console.log(airlane.slice(airlane.lastIndexOf(' ') + 1));// last word and remove white space

// console.log(airlane.slice(-2));
// console.log(airlane.slice(1, -1));

// const checkMidleSeat = function(seat) {
//   // Extract last element, for this is letter
//   const s = seat.slice(-1);

//   if (s== 'B' || s == 'E') {
//     console.log('You got the midle seat😊');
//   } else {
//     console.log('You got lucky');
//   }
// }

// checkMidleSeat('11B');
// checkMidleSeat('23C');
// checkMidleSeat('3E');

// console.log(new String('andrius'));
// console.log(typeof new String('andrius'));
// console.log(typeof new String('andrius').slice(1));

//////////////////////////////////////////////////////
// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// Quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer')); not uncomment

// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert Map to Array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);



//////////////////////////////////////////////////////
// Default parameters

const bookings = [];
// on ES6 default values we can specified in function parameters
const createdBooking = function(flightNum, numPassengers = 1, price = 199) {
  // ES5 old version
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }
console.log(booking);
bookings.push(booking);
}

createdBooking('LH123');
createdBooking('LH123', 1, 179);
createdBooking('LH123', 2, 500);

//////////////////////////////////////////////////////
// String Methods Practice
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴': ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44);
  console.log(output);
}
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  // console.log(rows);
  // console.log(text);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second);
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
})

*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.
// // console.log([...gameEvents.values()]);

// // Set new Set
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// // Converted into array and pop() the last one index
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// // 4.
// for (const [min, events] of gameEvents) {
//   const half = min <= 45 ? 'First' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${events}`);
// }

//////////////////////////////////////////////////////
// Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// Example that current time is 21
// const time = 21; // change below 11- will be closed
// Checked or restaurant are open
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2); //rm Lisbon, Portugal
// rest.clear();  // clear all data

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

/*
//////////////////////////////////////////////////////
// Sets- cannot be duplicate and no indexes, values unique
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Andrius'));

console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); // added only one
orderSet.delete('Risotto');
// orderSet.clear();

console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = new Set(staff);
// console.log(staffUnique); // Set ["Waiter", "Chef", "Manager"]

const staffUnique = [...new Set(staff)];
console.log(staffUnique); // Array ["Waiter", "Chef", "Manager"]
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // unique size
console.log(new Set(staff).size); // unique size

console.log(new Set('antanasKavaliaskas').size); // 9 unique
*/

/*
///////////////////////////////////////////////////////////
// Looping Objects: Keys, values, entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

// Looping obj keys in openingHours
for (const day of properties) {
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// entries() (key and values)
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
///////////////////////////////////////////////////////////
// Optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); // error

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  // Checked wich days are open
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods (optional operator ?) (?? nulish coalescing operator)
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Array
const users = [{ name: 'Andrius', email: 'hello@andrius.io' }];
// const users = [];

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
// Same as above but less coding with ? and ??
console.log(users[0]?.name ?? 'User array empty');

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
*/

/*
////////////////////////////////
// Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// Printed menu
for (const item of menu) console.log(item);
// entries method
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

*/
/*
const rest1 = {
  name: 'Capri',
  // numGests: 20,
  numGests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR ||= assignment operator
// rest1.numGests = rest1.numGests || 10;
// rest2 = 20 because short-circuiting
// rest2.numGuests = rest1.numGests || 10;

// 👆 Same as above logical assignment operator 👆
// rest1.numGests ||= 10;
// rest2.numGests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGests ??= 10;
rest2.numGests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'; // undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // <ANONYMOUS>

// 👆 Same as above logical assignment operator 👆
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
//////////////////////////////////////////////////////////
// Nulish Coalescing Operator (??)

restaurant.numGests = 0;
const guests = restaurant.numGests || 10;
console.log(guests); // 10

// Nullish: null and undifined (NOT 0 or '')
// null and undifined is truthy in Nullish
const guestCorrect = restaurant.numGests ?? 10;
console.log(guestCorrect); // 0
*/

/*
///////////////////////////////////////////////////////////
// Short circuiting OR and AND

console.log('---- OR ----');
// Use any data type, return any data type, short-circuiting
// If the first is truthty than second not will be evaluated
console.log(3 || 'Andrius'); // 3
console.log('' || 'Andrius'); // Andrius
console.log(true || 0); // true
console.log(undefined || null); // null

// Hello is first truthy so is return
//           falsy    falsy  falsy  truthy    truthy  truthy
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// There is no nmGests so print default 10
const guests1 = restaurant.numGests ? restaurant.numGests : 10;
console.log(guests1); // 10

restaurant.numGests = 23;
const guests2 = restaurant.numGests || 10;
console.log(guests2); // 23

restaurant.numGests = 0;
const guests3 = restaurant.numGests || 10;
console.log(guests3);

console.log('---- AND ----');
// AND - works oposite than OR operator
// If first is false print this and stop evaluating
console.log(0 && 'Andrius'); // 0

//If first true, second true, stop evaluating - print last truthy
console.log(7 && 'Andrius'); // Andrius

// first T, T, null is falsy - stop continues
//          true     true   false    true
console.log('Hello' && 23 && null && 'Andrius'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
// Both true - evaluated last true
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

/*
////////////////////////////////////////////
// Rest Pattern and Parameters

// Take one main ingredient and REST ingredients store into array
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// Take one main ingredient and REST ingredients store into empty array
restaurant.orderPizza('mushrooms');

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]
// REST element must be the LAST element in array
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
// ...weekdays - rest object properties stored in weekdays variable
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
// here rest operator - is used where we would otherwise write variables names, separated by a commas. Rest and Spread same syntax, but works oposite
const add = function (...numbers) {
  let sum = 0;
  // Was wrapped into {} and was diff print
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// Created another array and used spread operator with this variable into function add
const x = [23, 5, 7];
add(...x); // here spread operator - is used where we would otherwise write values, separated by a comma.
*/

/*
/////////////////////////////////
// Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Used spread operator ...
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // Spread operator (...) printed indexes

// added new dish and displayed to the console all new Menu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(
//   `Copied main Menu - ${mainMenuCopy}, also check new Menu ${newMenu} `
// );
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Andrius';
const letters = [...str, ' ', 'S.'];
console.log(letters); // same as unpack string
console.log(...letters); // A n d r i u s
// console.log(`${...str}`); // error

// orderPasta, real example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1 ?"),
  // prompt('Ingredient 2 ?'),
  // prompt('Ingredient 3 ?'),
];
console.log(ingredients); // to see ingredients

// Old way and not good
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Easy way and expand all elements, call function with user inputed ingredients
restaurant.orderPasta(...ingredients);

// Objects - copied restaurant obj into new variable
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
console.log(newRestaurant.foundedIn);
console.log(newRestaurant.founder);
console.log(restaurant); // do not effected

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
///////////////////////////////////////
// Destructuring objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// Give new variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Set default value, also rename variable for starterMenu
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Have to be wrapped in ()
console.log(a, b);

// Nested objects
// const { fri } = openingHours;
// console.log(fri);  // printed object

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // printed value 11 23

const {
  fri: { open: o, close: c }, // renamed variables
} = openingHours;
console.log(o, c); // printed value 11 23
*/

/*
//////////////////////////
// Deconstructoring array

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary); // Italian Pizzeria

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Pizzeria Italian

// Destructuring array
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
// console.log(i, j); // 2 4

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

const [t = 1, w = 1, u = 1] = [8, 9];
console.log(t, w, u); // 8 9 1
*/
//////////////////////////////////////////////////
// Data Structures, Modern Operators and Strings
/*
Challenge 1

We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
//////////////////////////////////////////////////////
// Challenge - 2
// 1. Print scored players
const playerScored = game.scored.entries();

for (const [i, player] of playerScored) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2. Calculate avg of odd
// const odds = Object.keys(game.odds);
// console.log(odds);

// const oddValues = Object.values(game.odds);
// console.log(oddValues);

// let sum = 0;
// for (const c of oddValues) {
//   sum += c;
// }
// console.log(sum);
// const averageOdds = sum / oddValues.length;
// console.log(averageOdds);

// Same but less coding
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.x}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

//
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : 'victory ${game[team]}';
  console.log(`Odd of ${teamStr} ${odd}`);
}

// // Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
//      }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/

/*
// Challenge - 1 
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7. true && 'string', also tru, last one print
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/
