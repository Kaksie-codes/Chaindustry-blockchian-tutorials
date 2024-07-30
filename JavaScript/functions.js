function greeting(name, time){
    console.log(`hello good ${time}`);
    console.log(`welcome on board ${name}`);
    console.log('>>>>>');
    console.log('     ');
}

// greeting('Musa', 'Night');
// greeting('Mary', 'Morning');

function Add(num1, num2){
    console.log(num1 + num2);
}

// Add(3, 5);
// Add(2, 6);
// Add(30, 5000);
// Add(31, 52);

function hello(){
    console.log('hello');
    console.log(' ');
}

// for(let count = 0; count < 5; count++){
//     hello();
// }
// console.log('Random Number:' + Math.random());
// console.log(Math.round(2.7));
// console.log(Math.floor(2.7));
// console.log(Math.ceil(2.7));

function generateNationality(country){
    if(country === 'USA'){
        return 'American'
    }else if(country === 'Nigeria'){
        return 'Nigerian'
    }else if(country === 'China'){
        return 'Chinese'
    }else{
        return 'sorry, i dont know your nationality'
    }
}

let mynationalty = generateNationality('Cameroon');

console.log({mynationalty});

// function multiplyNum(num1, num2){
//     let answer =  num1 * num2;
    // return answer
// }

const multiplyNum = (num1, num2) => {
    let answer =  num1 * num2;
    return answer
}

let result = multiplyNum(2, 3)
console.log({result});