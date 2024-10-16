// JavaScript can perform tasks in the background (like fetching data from the internet), 
// while continuing to execute other code. 
// This is known as asynchronous programming.

// Why is Asynchronous Programming Important?
// When you're doing tasks that take some time to complete (like reading a file or fetching data from an API), 
// you don't want the entire program to stop and wait. 
// Instead, JavaScript can continue to run other code while it waits for the slow task to finish.

// Asynchronous Programming with Callbacks
// Callbacks are often used to handle asynchronous operations. 
// Let's look at an example of how they work.

// console.log('one');
// console.log('two');
// console.log('three');


// console.log("Task 1: Start");

// const displaySomething = () => {
//   console.log("Task 2: This is delayed by 5 seconds");
// }

// Callback function executed after 2 seconds (2000 milliseconds)
// setTimeout(displaySomething, 5000);

// setTimeout(function() {
//   console.log("Task 2: This is delayed by 2 seconds");
// }, 2000);

// console.log("Task 3: End");
// const data = { user: "Nsikak", age: 30 };

// function fetchData(callback) {
//   console.log("Fetching data...");

//   // Simulate a delay (e.g., fetching data from an API)
//   setTimeout(() => {
//     const data = { user: "Musa", age: 29 };
//     callback(data);
//   }, 2000); // Wait 2 seconds before executing the callback
// }

// console.log(data)
// function processData(parameter) {
//   console.log(`User: ${parameter.user}, Age: ${parameter.age}`);
// }

// function sayHello(data){
//   console.log(data);
// }

// // Passing 'processData' as a callback to 'fetchData'
// fetchData(processData);
// fetchData(sayHello);



// Callback Hell Example
// Callback Hell happens when you have too many nested callbacks, making the code hard to read and maintain.
// Let's simulate a scenario where we need to fetch user details, process them, and save them to a database:

function getUser(callback) {
  console.log('running getUser');
  setTimeout(() => {
    console.log('running getUser Callback');    
      callback({ name: "Nsikak" });
  }, 3000);
}

function getAge(user, callback) {
  setTimeout(() => {
      callback({ ...user, age: 45 });
  }, 1000);
}

function getLocation(user, callback) {
  setTimeout(() => {
    callback({ ...user, location: "Nigeria" });  // Add location to user and pass it to the callback
  }, 1000);
}

const nameLogger = (dataObject) => {
  console.log(dataObject); 
  // getAge(dataObject, nameAndAgeLogger);  // Call getAge with the updated user object 
}

const nameAndAgeLogger = (dataObject) => {
  console.log(dataObject);  
  getLocation(dataObject, nameAndAgeAndLocationLogger);  // Call getLocation with the updated user object
}

const nameAndAgeAndLocationLogger = (dataObject) => {
  console.log(dataObject);  
}

// This results in nested callbacks, which is known as "callback hell"
// getUser((user) => {
//   console.log("User fetched:", user);
//   getAge(user, (userWithAge) => {
//     console.log("Age fetched:", userWithAge);
//     getLocation(userWithAge, (message) => {
//           console.log(message); 
//       });
//   });
// });

// getUser(nameLogger);


// const doings = () => {
//   setTimeout(() => {
//     console.log('Decide what you want to eat'); 
//     setTimeout(() => {
//       console.log('I want to eat Indomie noodles');
//       setTimeout(() => {
//         console.log('I just bought three cartons of Indomie noodles');
//         setTimeout(() => {
//           console.log('I just placed a sauce-pan on fire');
//           setTimeout(() => {
//             console.log('I have added some water to the pot');
//             setTimeout(() => {
//               console.log('The water is boiling');
//               setTimeout(() => {
//                 console.log('I successfully added my noodles to the pan');
//                 setTimeout(() => {
//                   console.log('My Delicious pan of noodles is ready');
//                   setTimeout(() => {
//                     console.log('I have hurriedly and successfully finished all my Noodles')
//                   }, 1000)
//                 }, 5000)
//               }, 1000)
//             }, 4000)
//           }, 1000)
//         }, 1000)
//       }, 3000)
//     }, 2000)   
//   }, 0)
// }

// doings();


// Callback Hell makes code harder to follow. Promises and async/await can help solve this problem.

//   Introduction to Promises
//   Callbacks are useful, but they can become tricky to manage when you have multiple asynchronous operations. 
//   Promises provide a cleaner way to handle asynchronous tasks.

//   What is a Promise?
//   A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

//   A promise can have one of three states:
//   Pending: The operation is ongoing.
//   Fulfilled: The operation completed successfully.
//   Rejected: The operation failed.

// const myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation
//   const success = false;

//   setTimeout(() => {
//     if (success) {
//       resolve("Operation successful!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 2000);
// });

// console.log('myPromise >>>', myPromise)

//   Handling a Promise
//   We can handle promises using .then() and .catch().

// myPromise.then((message) => {
//   console.log(message); // Output: Operation successful!
// }).catch((error) => {
//   console.log(error); // If failed, output: Operation failed!
// });


// Chaining Promises
// When you have multiple asynchronous tasks, you can chain promises to handle them in order.

const fetchUser = new Promise((resolve, reject) => {

  setTimeout(() => resolve({ user: "Nsikak" }), 1000);
});

const fetchAge = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ age: 45 }), 2000);
});

// fetchUser
// .then((userData) => {
//   console.log(userData); // Output: { user: "Nsikak" }
//   return fetchAge;
// })
// .then((ageData) => {
//   console.log(ageData); // Output: { age: 45 }
// })
// .catch((error) => {
//   console.error(error);
// });

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const button = document.querySelector('button');

const sayClicked = (name) => {
  alert('I was clicked by ' + name);
}
button.addEventListener('click', () => sayClicked('Musa'))

// const wait = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms)
//   });
// }

// const doings = () => {
//   wait(0)
//     .then(() => {
//       console.log('Decide what you want to eat');
//       return wait(2000);
//     })
//     .then(() => {
//       console.log('I want to eat Indomie noodles');
//       return wait(3000);
//     })
//     .then(() => {
//       console.log('I just bought three cartons of Indomie noodles');
//       return wait(1000);
//     })
//     .then(() => {
//       console.log('I just placed a sauce-pan on fire');
//       return wait(1000);
//     })
//     .then(() => {
//       console.log('I have added some water to the pot');
//       return wait(4000);
//     })
//     .then(() => {
//       console.log('The water is boiling');
//       return wait(1000);
//     })
//     .then(() => {
//       console.log('I successfully added my noodles to the pan');
//       return wait(5000);
//     })
//     .then(() => {
//       console.log('My Delicious pan of noodles is ready');
//       return wait(1000);
//     })
//     .then(() => {
//       console.log('I have hurriedly and successfully finished all my Noodles');
//     })
//     .catch((error) => console.error('Something went wrong:', error));
// };

// doings();




// ----------------------------------------------------------------------------
// Using async/await
// ----------------------------------------------------------------------------
// async/await is a newer syntax to handle asynchronous operations.
// It makes the code look synchronous while still being asynchronous under the hood.
// async/await improves readability, especially when there are multiple async operations.

// async function fetchUserData() {
//   try {
//       // Simulate fetching user data
//       const user = await new Promise((resolve) => {
//           setTimeout(() => resolve({ user: "Nsikak" }), 1000);
//       });
//       console.log("User fetched:", user);

//       // Simulate fetching age data
//       const age = await new Promise((resolve) => {
//           setTimeout(() => resolve({ age: 45 }), 1000);
//       });
//       console.log("Age fetched:", age);

//       // Combine user and age data
//       const userData = { ...user, ...age };
//       console.log("Combined User Data:", userData);

//   } catch (error) {
//       console.error("Error fetching data:", error);
//   }
// }

// fetchUserData();

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const doings = async () => {
//   console.log('Decide what you want to chop');
//   await wait(2000);

//   console.log('I want to eat Indomie noodles');
//   await wait(3000);

//   console.log('I just bought three cartons of Indomie noodles');
//   await wait(1000);

//   console.log('I just placed a sauce-pan on fire');
//   await wait(1000);

//   console.log('I have added some water to the pot');
//   await wait(4000);

//   console.log('The water is boiling');
//   await wait(1000);

//   console.log('I successfully added my noodles to the pan');
//   await wait(5000);

//   console.log('My Delicious pan of noodles is ready');
//   await wait(1000);

//   console.log('I have hurriedly and successfully finished all my Noodles');
// };

// doings();


// Explanation of async/await:
// 1. The `async` keyword before the function makes it return a Promise.
// 2. The `await` keyword pauses the execution until the Promise resolves or rejects.
// 3. We use `try...catch` to handle any errors, making the code more robust.
// Use cases for async/await include fetching data from APIs, reading files from disk, and making database queries.

// ----------------------------------------------------------------------------
// try...catch with Promises
// ----------------------------------------------------------------------------
// If you need to catch errors in Promises, a try...catch block can be used within an async function.

// async function handlePromiseWithError() {
//   const myPromise = new Promise((resolve, reject) => {
//       setTimeout(() => reject("Something went wrong!"), 1000); // This simulates an error
//   });

//   try {
//       const result = await myPromise;
//       console.log(result); // This line won't run due to the error
//   } catch (error) {
//       console.error("Caught an error:", error); // Error caught here
//   }
// }

// handlePromiseWithError();

const wait = (ms) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (ms < 0) {
      reject('Invalid delay time'); // Simulate an error condition
    } else {
      resolve();
    }
  }, ms);
});

const doings = async () => {
  try {
    console.log('Decide what you want to chop');
    await wait(2000);

    console.log('I want to eat Indomie noodles');
    await wait(3000);

    console.log('I just bought three cartons of Indomie noodles');
    await wait(1000);

    console.log('I just placed a sauce-pan on fire');
    await wait(1000);

    console.log('I have added some water to the pot');
    await wait(4000);

    console.log('The water is boiling');
    await wait(1000);

    console.log('I successfully added my noodles to the pan');
    await wait(5000);

    console.log('My Delicious pan of noodles is ready');
    await wait(1000);

    console.log('I have hurriedly and successfully finished all my Noodles');
  } catch (error) {
    console.error('Something went wrong:', error);
  }
};

// doings();


// ----------------------------------------------------------------------------
// Summary of Asynchronous Programming Techniques
// ----------------------------------------------------------------------------
// 1. Callbacks: Older technique, prone to "callback hell" if nested deeply.
// 2. Promises: Offers a cleaner way to handle async code, using .then() and .catch().
// 3. Async/Await: Built on top of Promises, makes asynchronous code easier to read and maintain.
//    It also allows us to use try...catch for error handling instead of .catch() with Promises.

// Always choose the right tool depending on the complexity of the async operations you're handling!


// const productsContainer = document.getElementById('products-container');

// Fetching a list of products from FakeStore API
// fetch('https://fakestoreapi.com/products')
//   .then((response) => response.json())
//   .then((products) => {
//     console.log('FakeStore API Products:', products);
//     products.forEach((product) => {
//       const { category, description, image, price, title} = product;
//       productsContainer.innerHTML += `
//       <div>
//             <h1>Title: ${title}</h1>
//             <h2>Category: ${category}</h2>
//             <img src=${image} alt=${title}>
//             <p>Price: ${price}</p>
//             <p>Description: ${description}</p>
//             <button>Add to Cart</button>
//         </div>
//     `
//     })
    
//   })
//   .catch((error) => console.error('Error:', error));

// Fetching a single product from FakeStore API
// fetch('https://fakestoreapi.com/products/1')
//   .then(response => response.json())
//   .then(product => console.log('FakeStore API Single Product:', product))
//   .catch(error => console.error('Error:', error));