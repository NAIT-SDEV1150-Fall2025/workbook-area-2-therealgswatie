console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const title = document.querySelector('#page-title'); // id
const tagline = document.querySelector('.tagline'); // class
const heroImage = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.getElementById('footer-note'); // document.querySelectorAll is useful for classes and the like
// const small = document.querySelector('small') // selects the tag: small
// query selector selects the first occurence of the tag.
// something here
// const footerNote = document.getElementById('footer-note'); // Same a the other one, maybe faster
// 2. textContent vs innerHTML
// title.textContent = 'something';
dynamicBox.innerHTML = `<p class = "desc"> This block was <strong>injected</strong> using <em>innerHTML</em></p>`;
heroCaption.textContent = 'This caption was updated using textContent.';
// 3. Attributes & styles
heroImage.setAttribute('alt', 'A replaceable sample image'); // equivelent to: alt='A replaceable sample image' in the index tag
heroImage.style.borderColor = `#31F5FF`;
// 4. Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) { // checks if el exists ^
    return console.warn('No element is found for', selector);
  }
  el.textContent = text;
}
// updateText(title, `someting`);
function updateInnerHTML(selector, HTMLContent) {
  const el = document.querySelector(selector);

  if (!el) {
    return console.warn('No element is found for', selector);
  }

  el.innerHTML = HTMLContent;
}

updateText('.tagline', 'TEXT HERE');
updateInnerHTML('#dynamic-box', `<p class="desc"> Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.</p>`);
// 5. Use helpers to perform simple tasks

// 6. Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
footerNote.innerHTML = `&copy; 2025 Front End Fundamentals`;
// Require innerHTML here to render the &copy; entity correctly
// function definition
/*
function greeting() {
  console.log('Welcome to the lesson-05.');
};
// function call
greeting();
function helloWorld() {
  console.log('Hello World!');
};

helloWorld();

function add(num1, num2) {
  return (num1 + num2);
};

let sum = add(1, 2);
console.log(sum);
console.log(add(4, 5));

function subtract(a, b) {
  return (a - b);
}

console.log(subtract(5, 2));

function multiply(a, b) {
  return (a * b);
};

console.log(multiply(2, 2));

function square(n) {
  return (n ** 2);
};

function evenOdd(n) {
  if (n % 2 === 0) {
    return ('even number');
  } else {
    return ('is odd');
  };
};

function large(x, y, z) {
  let largest;
  if (x > y) {
    largest = x;
  } else {
    largest = y;
  };

  if (z > largest) {
    largest = z;
  };
  return (largest);
}
console.log(large(45, 22, 46));
// && is and
// || is or
evenOdd(3);
*/