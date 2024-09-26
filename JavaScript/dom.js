// DOM stands for Document Object Model. 
// It's a way to represent the structure of an HTML document (a webpage) in a tree-like format. 
// This tree structure allows JavaScript to interact with the content, structure, and styles of a webpage.

// Nodes
// Everything in the DOM is a node. The document itself, elements, attributes, and text are all nodes.

// HTML tags become element nodes in the DOM.
// Attributes: HTML attributes become attribute nodes in the DOM.
// Text: Text inside an element becomes text nodes in the DOM.

// The DOM allows you to do the following with JavaScript.
// 1.) Change the content of a webpage (like updating text).
// 2.) Change the structure of a webpage (like adding or removing elements).
// 3.) Change the styles of a webpage (like changing colors or fonts).
// 4.) Respond to user interactions (like clicking a button).


// To work with the DOM in JavaScript, 
// you need to know how to select elements, 
// change their content, and respond to user actions.



// Selecting Elements
// To change something on your webpage, 
// you first need to "select" or "grab" the element you want to modify. 
// JavaScript provides several methods to do this.

// 1.) document.getElementById()
// Usage: Retrieves an element by its unique id attribute.

// document.getElementById()
const selectedH1 = document.getElementById('title');
console.log(selectedH1);

// 2.) document.getElementsByClassName()
// Usage: Retrieves a collection of elements with the specified class name..
const headers = document.getElementsByClassName('main-header');
console.log(headers);

// 3.) document.getElementsByTagName()
// Usage: Retrieves a collection of elements with the specified tag name..

const myParagraph = document.getElementsByTagName('p');
console.log(myParagraph);

// 4.) document.querySelector()
// Usage: Retrieves the first element that matches a specified CSS selector.
const mainheaderElement = document.querySelector('h3.main-header');
console.log(mainheaderElement);
mainheaderElement.innerText = 'Happy Hour';
mainheaderElement.style.color = 'Red'

// 5.) document..querySelectorAll()
// Usage: Retrieves all elements that match a specified CSS selector
const allSpecialHeadings = document.querySelectorAll('h3.main-header');
console.log(allSpecialHeadings);

// const AfricanTExt = document.querySelector('span h3');
const AfricanTExt = document.querySelector('section.box h3');
AfricanTExt.style.color = 'green';


const targetDiv = document.getElementById('box');
console.log(targetDiv);

targetDiv.style.backgroundColor = 'blue';
targetDiv.style.height = '300px';
targetDiv.style.width = '300px';
targetDiv.style.color = '#fff';
targetDiv.style.fontSize = '50px';
targetDiv.style.display = 'grid';
targetDiv.style.placeContent = 'center';

// const whorepresentswho = 'Jason'

// Changing Styles

// const titleElement = document.getElementById("title");
// console.log(titleElement); // Outputs the h1 element



// Changing Content
// Once you've selected an element, you can change its content using the innerHTML, innerText or textContent properties.

// difference between innerHTML, textContent and innerText

// 1. innerHTML
// Purpose: Gets or sets the HTML content of an element.
// Usage: Allows you to insert HTML tags, which will be parsed and rendered as HTML.
// Can lead to security vulnerabilities (like XSS attacks) if not used carefully, especially with user input.

    //Example
    // const element = document.getElementById('example');
    // console.log(element);
    // console.log(element.innerHTML);

    // element.innerHTML = `<p>Hidden text</p><p>Visible text</p>`;
    // console.log(element);
    // console.log(element.innerHTML);

// 2. textContent
// Purpose: Gets or sets the text content of an element and all its descendants.
// Usage: Strips out HTML tags and returns only the text. Useful when you need to work with plain text.
// Considerations: More secure for user input as it does not interpret HTML tags.

    //Example
    // const element = document.getElementById('example');
    // console.log(element.textContent);

    // element.textContent = `<p>Hidden text</p><p>Visible text</p>`

// 3. innerText
// Purpose: Gets or sets the visible text content of an element and its descendants.
// Usage: Similar to textContent, but also takes into account CSS styles (like display: none) and returns only the text that is visible to the user.
// Considerations: Computes the text based on the rendered appearance of the content, which might make it slower than textContent.


    //Example
    const element = document.getElementById('example');
    console.log(element.innerText);

    // const word = document.getElementById('heading')
    // word.innerText = `<p>Hidden text</p>
    //         <p>Visible text</p>`
