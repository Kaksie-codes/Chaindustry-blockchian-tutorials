// A function is a block of reuseable code.

function Greetings(){
    console.log('Hello World');
    console.log('Hello People');
    console.log('how far');
    console.log('Wa Guan!'); 
    console.log('    ');   
}



// Greetings();
// Greetings();
// Greetings();
// Greetings();

// for(let i=0; i<5; i++) {
//     Greetings();
// }

// const num3 = 10;

function addNum(num1, num2){
    // let num1 = 4;
    // let num2 = 5;
    const num3 = 50;
    var num4 = 100;
    // console.log('result >>>>' + num1 + num2);
    let result = num1 + num2;
    // console.log(`result >>>>> ${result}`);
    console.log(`result: ${result}`);
    // return result;
    // console.log({num3});
}



// console.log({num3});
// console.log({num4});

// let myAnswer = addNum(10, 10);
// console.log({ answer: myAnswer});
// console.log({ myAnswer: myAnswer});
// console.log({ myAnswer});

// addNum(2, 3);
// addNum();
// addNum(20, 13);
// addNum(25, 35);

function example() {
    var x = 10;
    
    const z = 12;
    if (true) {
        let m = 9;
        var y = 20; // Block scope
        console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // Error: y is not defined
    console.log(m); // Error: y is not defined
}

// example();

function loopFromLowtoHigh(low, high){
    let array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

let myArray = loopFromLowtoHigh(100, 150);

// console.log(myArray);

function ReverseArray(){
   let myArray1 = [];
   let myArray2 = [];
   for(let i = 0; i < 20; i++){
        const randomNumber = Math.floor(Math.random() * 50)
       myArray1.push(randomNumber);
   }

   for(let i = myArray1.length - 1; i >= 0; i--){
        myArray2.push(myArray1[i])
   }

   console.log(myArray1);
   console.log(myArray2);
}


ReverseArray(); 
// console.log({m})

// console.log(num3);
// console.log(num4);
// console.log(num1);

// AddNum();
// AddNum();
// AddNum();
// addNum(5);
// addNum(50, 100);

function substractNums(num1, num2){
    return num1 - num2;
}

// function substractNums(num1, num2){
//     return num1 + num2;
// }


// Arrow functions
// let substractNums = (num1, num2) => {
//     return num1 - num2;
// }

// let substractNums = (num1, num2) => {
//     return num1 + num2;
// }

let answer = substractNums(10, 5);

// console.log({ answer });

// let result = substractNums(7,5);
let result = substractNums(7,5);
// console.log({result});
