// const moment = require('./node_modules/moment');
// const TAF='ADA9C1AFC7E69ACC3B14688AE34E265CCBB2A208';
// function getCurrentDate() {
//     const dateNow = new Date();
//     return moment(dateNow).format('YYYY-MM-DD');
//   }
  
// function getToken() {
//     console.log(`md5(${TAF}${getCurrentDate()})`);
//     return `md5(${TAF}${getCurrentDate()})`;
//   }

//   // getToken();

//   function generator(min, max) {
//     const number = +(Math.random() * (max - min) + min).toFixed(1);
//     if(number%1==0.0) return parseInt(number);
//     else return number;
//     // return  +(Math.random() * (max - min) + min).toFixed(2);
//   }
//   // console.log(generator(0,20));

//   async function delay() {
//     return await new Promise(resolve => setTimeout(resolve, 300));
//   }
  
//   async function delayedLog(item) {
//     // мы можем использовать await для Promise
//     // который возвращается из delay
//     await delay();
//     console.log(item);
//   }
//   async function processArray(array) {
//     array.forEach(async (item) => {
//       await delayedLog(item);
//     })
//     console.log('Done!');
//   }

// let now = new Date('02 Mar 2022');
//   // console.log(Date.parse('02 Mar 2022'));

//   // console.log(Date.parse('17 Feb 2022'));

//   console.log(now);

// let i = -2.03;

// console.log(typeof -i.toFixed(2));

// let arrayOfFailedScenarioNames= [];

// arrayOfFailedScenarioNames.push(`1`);

// console.log(arrayOfFailedScenarioNames[0]);

// const result = `auto${Math.random().toString(36).substring(2, 10 + 2)}`;

// console.log(result);

// const arr = ['xx', 'aaa', 'aa', 'xx', 'bbb', 'bbb', 'bbb'];
// console.log(arr.filter((item, position, array) => (array[position] !== array[position + 1])));

// const str = "012345";
// console.log(Number(str));
// console.log(Number(str)-1);

// const str = "+447400 123456";
// console.log(str.replace(/\s+/g, ''));

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// export  const a = getRandomInt(100);
