// Grade Calculator assignment

// let studentScore = prompt('Enter your total score:');

// if(studentScore > 100 || studentScore < 0 || studentScore === "" || isNaN(studentScore)){
//     alert('Enter a valid score')
// }else if(studentScore >= 70){
//     console.log('You scored an A');
// }else if(studentScore < 70 && studentScore >=60){
//     console.log('You scored a B');
// }else if(studentScore < 60 && studentScore >=50){
//     console.log('You scored a C');
// }else if(studentScore < 50 && studentScore >= 40){
//     console.log('You scored a D');
// }else{
//     console.log('You scored an F. come back next year');
// }


// Temperature conversion assignment
// let celsiusValue = prompt('Enter your Temperature in celsius:');
// let fahrenheitValue;

// if(celsiusValue === '' || isNaN(celsiusValue)){    
//     alert('Enter a valid temperature');
// }else{
//     fahrenheitValue = (celsiusValue * (9/5)) + 32;
//     console.log(fahrenheitValue);
// }


// Even and odd number seperator
// let randomNumbers = [];
// let oddNumbers = [];
// let evenNumbers = [];

// for(let count = 1; count <= 20; count++){
//     // generate random numbers
//     // let randomNumber = Math.random() ;
//     let randomNumber = Math.random() * 10;
//     // console.log(randomNumber);
//     // ROund the random numbers to whole numberss
//     let roundedNumber = Math.round(randomNumber)

//     // Add each rounded number to the array of numbers
//     randomNumbers.push(roundedNumber);
//     // console.log(roundedNumber)
// }

// console.log(randomNumbers)

// randomNumbers.forEach(number => {
//     console.log(number)
// })

// randomNumbers.forEach(function(number){
//     console.log(number)
// })

// for(thing of randomNumbers){
//     if(thing % 2 === 0){
//         evenNumbers.push(thing)
//     }else{
//         oddNumbers.push(thing);
//     }
//     // console.log('number is:' + thing)
// }

// console.log({randomNumbers: randomNumbers});
// console.log({evenNumbers});
// console.log({oddNumbers});


// updated number seperator
const randomNumbers = [];
const oddNumbers = [];
const evenNumbers = [];
let evenNumber = 0;
let oddNumber = 0;

// Generate 100 random numbers between 1 and 100

do {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber != 0) {
    if (randomNumber % 2 === 0 && evenNumber < 10) {
      evenNumbers.push(randomNumber);
      evenNumber++;
      randomNumbers.push(randomNumber);
    } else if (randomNumber % 2 !== 0 && oddNumber < 10) {
      oddNumbers.push(randomNumber);
      oddNumber++;
      randomNumbers.push(randomNumber);
    }
  }
} while (randomNumbers.length < 20);

console.log(randomNumbers.length);
console.log(randomNumbers);
console.log(evenNumbers.length);
console.log(evenNumbers);
console.log(oddNumbers.length);
console.log(oddNumbers);
