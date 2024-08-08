// let person = {
//     firstName: 'Bob',
//     lastName: 'Cruise',
//     fullname: function (){
//         console.log(`${person.firstName} ${person.lastName}`);        
//     }
// }

// console.log(person.firstName);
// person.fullname()


// Nodes
// Everything in the DOM is a node. The document itself, elements, attributes, and text are all nodes.

// HTML tags become element nodes in the DOM.
// Attributes: HTML attributes become attribute nodes in the DOM.
// Text: Text inside an element becomes text nodes in the DOM.




// Methods to Access the DOM
// There are several ways to access and manipulate the DOM using JavaScript. Here are the primary methods:



// 1.) document.getElementById()
// Usage: Retrieves an element by its unique id attribute.

// let ourH1 = document.getElementById('coding');
// console.log(ourH1.textContent);

// 2.) document.getElementsByClassName()
// Usage: Retrieves a collection of elements with the specified class name..

// 3.) document.getElementsByTagName()
// Usage: Retrieves a collection of elements with the specified tag name..

// 4.) document.querySelector()
// Usage: Retrieves the first element that matches a specified CSS selector.

// 5.) document..querySelectorAll()
// Usage: Retrieves all elements that match a specified CSS selector




// difference between innerHTML, textContent and innerText

// 1. innerHTML
// Purpose: Gets or sets the HTML content of an element.
// Usage: Allows you to insert HTML tags, which will be parsed and rendered as HTML.
// Can lead to security vulnerabilities (like XSS attacks) if not used carefully, especially with user input.

    //Example
    const element = document.getElementById('example');
    console.log(element.innerHTML);

    const myH1 = document.getElementById('coding')
    // myH1.innerHTML = `<p>Hidden text</p><p>Visible text</p>`
    myH1.innerHTML = `<input type="text" placeholder="enter your password">`

// 2. textContent
// Purpose: Gets or sets the text content of an element and all its descendants.
// Usage: Strips out HTML tags and returns only the text. Useful when you need to work with plain text.
// Considerations: More secure for user input as it does not interpret HTML tags.

    //Example
    // const element = document.getElementById('example');
    // console.log(element.textContent);

    // const word = document.getElementById('coding')
    // word.textContent = `<p>Hidden text</p><p>Visible text</p>`

// 3. innerText
// Purpose: Gets or sets the visible text content of an element and its descendants.
// Usage: Similar to textContent, but also takes into account CSS styles (like display: none) and returns only the text that is visible to the user.
// Considerations: Computes the text based on the rendered appearance of the content, which might make it slower than textContent.


    //Example
    // const element = document.getElementById('example');
    // console.log(element.innerText);

    // const word = document.getElementById('heading')
    // word.innerText = `<p>Hidden text</p>
    //         <p>Visible text</p>`


// Manipulating Attributes
// Usage: Get, set, or remove attributes.

    // Example
    // const element = document.getElementById('myElement');
    // element.setAttribute('class', 'newClass');  // Sets an attribute
    // const attr = element.getAttribute('class');  // Gets an attribute
    // element.removeAttribute('class');  // Removes an attribute


// Changing Styles
// Usage: Change the CSS styles of an element.

    // Example
    // const element = document.getElementById('myElement');
    // element.style.color = 'red';  // Changes the text color
    // element.style.backgroundColor = 'blue';  // Changes the background color


// Adding and Removing Classes
// Usage: Manipulate the classes of an element.

    // Example
    // const element = document.getElementById('myElement');
    // element.classList.add('newClass');  // Adds a class
    // element.classList.remove('oldClass');  // Removes a class
    // element.classList.toggle('active');  // Toggles a class
