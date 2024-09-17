// A function is a block of reuseable code.

function Greetings(){
    console.log('Hello World');
    console.log('Hello People');
    console.log('how far');
    console.log('Wa Guan!'); 
    console.log('    ');   
}


Greetings();

const num3 = 10;

function addNum(num1, num2){
    // let num1 = 4;
    // let num2 = 5;
    const num3 = 50;
    // console.log('result >>>>' + num1 + num2);
    console.log(`result >>>>> ${num1 + num2}`);
    // console.log(num3);
}

function example() {
    var x = 10;
    if (true) {
        var y = 20; // Block scope
        console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // Error: y is not defined
}

// example();

console.log(num3);
// console.log(num4);
// console.log(num1);

// AddNum();
// AddNum();
// AddNum();
addNum(5);
addNum(50, 100);

// function substractNums(num1, num2){
//     return num1 - num2;
// }



// Arrow functions
var substractNums = (num1, num2) => {
    return num1 - num2;
}

let substractNums = (num1, num2) => {
    return num1 + num2;
}

// let result = substractNums(7,5);
let result = substractNums(7,5);
console.log({result});
