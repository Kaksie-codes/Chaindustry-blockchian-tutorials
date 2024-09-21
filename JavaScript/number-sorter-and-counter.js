let randomNumbers = [];


// for(let k = 0; k <=15; k++){
//     let randomNumber = Math.round(Math.random() * 50);
//     randomNumbers.push(randomNumber)
// }

// console.log(randomNumbers);



for(let i = 0; i < randomNumbers.length; i++){
    // Optimize: Reduce the number of iterations of the inner loop
    for(let j = 0; j < randomNumbers.length - 1 - i; j++) {
        if(randomNumbers[j] > randomNumbers[j + 1]){
            let biggerNumber = randomNumbers[j];
            let smallerNumber = randomNumbers[j + 1];
            randomNumbers[j] = smallerNumber;
            randomNumbers[j + 1] = biggerNumber;
        }
    }    
}

// randomNumbers.sort((a, b) => a-b);

// randomNumbers.sort((a, b) => {
//     return a - b;
// })


// randomNumbers.sort(function(a, b) {
//     return a - b 
// })
// randomNumbers[0] = 67;

console.log(randomNumbers);
