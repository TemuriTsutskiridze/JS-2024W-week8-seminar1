// 1. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ რიცხვს და ორ ქოლბექ ფუქნციას პარამეტრებად. თუ ორი რიცხვი ტოლია,
// გამოიძახეთ პირველი ქოლბექ ფუნქცია, თუარადა - მეორე.

// function checkEqual(num1, num2, funcEquals, funcNotEquals) {
//   if (num1 === num2) {
//     funcEquals();
//   } else {
//     funcNotEquals();
//   }
// }

// checkEqual(
//   5,
//   10,
//   () => {
//     console.log("Equals");
//   },
//   () => {
//     console.log("Not Equals");
//   }
// );

// 2. შექმენით ფრომისი, რომელიც დარეზოლვდება ან დარეჯექთდება 3 წამის შემდეგ. დარეზოლვდეს თუ იუზერი სრულწლოვანია
// და დარეჯექთდეს - თუ არაა.

// const age = parseInt(prompt("Enter your age: "));

// const userPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (age >= 18) {
//       resolve("Adult");
//     } else {
//       reject("Minor");
//     }
//   }, 3000);
// });

// userPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("hi");

// 3. შექმენით ორი ფრომისი. პირველმა დაარეზოლვოს რიცხვი და მეორემ დარეზოლვებული რიცხვი გაამრავლოს 2-ზე. გამოიყენეთ promise chaining

// function firstPromise() {
//   return new Promise((resolve) => {
//     resolve(6);
//   });
// }

// function secondPromise(num) {
//   return new Promise((resolve) => {
//     resolve(num * 2);
//   });
// }

// firstPromise()
//   .then((number) => {
//     console.log("First Promise:", number);
//     return secondPromise(number);
//   })
//   .then((finalNumber) => {
//     console.log("Second Promise:", finalNumber);
//   });

// 4. დაწერეთ პროგრამა, რომელსაც API-დან მოაქვს ორი განსხვავებული ინფორმაცია და დაბეჭდავს, როდესაც ორივეს მიიღებს.
// const fetchData1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// const fetchData2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
// const fetchData3 = fetch("https://jsonplaceholder.typicode.com/todos/3");
// const fetchData4 = fetch("https://jsonplaceholder.typicode.com/todos/4");
// const fetchData5 = fetch("https://jsonplaceholder.typicode.com/todos/5");
// const fetchData6 = fetch("https://jsonplaceholder.typicode.com/todos/6");
// const fetchData7 = fetch("https://jsonplaceholder.typicode.com/todos/7");
// const fetchData8 = fetch("https://jsonplaceholder.typicode.com/todos/8");
// const fetchData9 = fetch("https://jsonplaceholder.typicode.com/todos/9");
// const fetchData10 = fetch("https://jsonplaceholder.typicode.com/todos/10");
// console.log(fetchData1);

// Promise.all([
//   fetchData1,
//   fetchData2,
//   fetchData3,
//   fetchData4,
//   fetchData5,
//   fetchData6,
//   fetchData7,
//   fetchData8,
//   fetchData9,
//   fetchData10,
// ]).then((responses) => {
//   Promise.all(responses.map((response) => response.json()))
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// });

// async function fetchAll() {
//   const responses = await Promise.all([
//     fetchData1,
//     fetchData2,
//     fetchData3,
//     fetchData4,
//     fetchData5,
//     fetchData6,
//     fetchData7,
//     fetchData8,
//     fetchData9,
//     fetchData10,
//   ]);
//   console.log(responses);
//   const data = await Promise.all(responses.map((response) => response.json()));
//   console.log(data);
// }
// fetchAll();

// 5. დაწერეთ პროგრამა, რომელიც API-დან წამოიღებს სამ განსხვავებულ დატას და დაბეჭდავს იმას, რომელსაც ყველაზე მალე მიიღებს.
const URLs = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

const promises = URLs.map((url) =>
  fetch(url).then((response) => response.json())
);
Promise.race(promises)
  .then((fastestData) => console.log(fastestData))
  .catch((error) => console.log(error));
