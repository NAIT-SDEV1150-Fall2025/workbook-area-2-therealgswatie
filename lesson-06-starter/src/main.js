console.log('Lesson 06 starter loaded');

// Selecting elements
const titleEl = document.querySelector('#page-title'); // query selector selects first occurence only
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

// 1. Create a new variable for the feature list element
const listItem = document.createElement('li'); // creates <li></li>
const featureList = document.getElementById('feature-list');

// 3. Modify list content
listItem.className = 'feature'; // changes to <li class='feature'></li>
listItem.textContent = 'Flexible'; // changes to <li class='feature'>Flexible</li>
// 4. Add a new item dynamically
featureList.appendChild(listItem); // this adds the child to the html doc.
// 2. Add feature list to the displayed elements below
console.log('Selected elements:', {
  titleEl, taglineEl, heroImg, heroCaption, dynamicBox, footerNote,
});

// 5. Retreive all list items (querySelectorAll) and update their text
const allFeatures = document.querySelectorAll('.feature');
allFeatures.forEach((item, i) => { // arrow function
  item.textContent = `${i + 1}. ${item.textContent}`;
});
// 6. Removing the first item from the list using DOM relationships to find it
featureList.removeChild(featureList.firstElementChild);
// 7. Update the second item using nextElementSibling
featureList.firstElementChild.nextElementSibling.textContent += '(updated)';
// 8. Move the last item to the front of the list
const lastChild = featureList.removeChild(featureList.lastChild); // saves the lastChild into lastChild and removes the last child as well.
featureList.insertBefore(lastChild, featureList.firstChild);
// insertbefore(elementToInsert,locationOfInsert);
// 9. Use a timer to add a new item after 3 seconds have passed
const listItemAgain = document.createElement('li');
listItemAgain.className = 'feature';
listItemAgain.textContent = `it's been 3 seconds`;
setTimeout(() => {
  featureList.appendChild(listItemAgain);
}, 3000); // 3000 miliseconds is 3 seconds
// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

// When you only need text (no markup), prefer textContent:
heroCaption.textContent = 'This caption was updated using textContent.';

// Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd'; // inline style to illustrate visual change

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.innerHTML = html;
}

function setAttr(selector, name, value) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.setAttribute(name, value);
}

function setStyle(selector, styleObj = {}) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  Object.entries(styleObj).forEach(([k, v]) => {
    el.style[k] = v;
  });
}

// Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

setAttr('#hero-img', 'title', 'Hover title set from JS');
setStyle('#hero-img', { borderColor: 'navy' });

// Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';

// Null-safety tip: check selections before using them
// const missing = document.querySelector('#does-not-exist');
// if (!missing) {
//  console.warn('Selector #does-not-exist did not match any element.');
//}
