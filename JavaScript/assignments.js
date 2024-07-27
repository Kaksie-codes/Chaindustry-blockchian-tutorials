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
let randomNumbers = [];

for(let count = 1; count <= 20; count++){
    // generate random numbers
    let randomNumber = Math.random() * 10;

    // ROund the random numbers to whole numberss
    let roundedNumber = Math.round(randomNumber)

    // Add each rounded number to the array of numbers
    randomNumbers.push(roundedNumber);
    // console.log(roundedNumber)
}

console.log(randomNumbers)