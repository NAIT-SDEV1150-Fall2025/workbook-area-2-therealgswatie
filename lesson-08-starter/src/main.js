console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
});
console.log(`a`);
setTimeout(() => {
  console.log(`b`);
}, 0);
console.log(`c`);

// 2. Selecting elements
const buttonToggle = document.querySelector(`#btn-toggle`);
// 3. click: toggle a highlight class on the body
let numberOfTimes = 0;
buttonToggle.addEventListener(`click`, () => {
  numberOfTimes++;
  console.log(`button is clicked ${numberOfTimes} times`);
});
buttonToggle.addEventListener(`click`, () => {
  document.body.classList.toggle(`highlight`);
  const on = document.body.classList.contains(`highlight`); // contains checks if highlight is there as a class or not, returns true/false based on highlight class being there or not.
  buttonToggle.textContent = on ? `highlight is on` : `highlight is off`;
});
// 4. click: change message textContent (no HTML parsing)

// 5. mouseover / mouseout: display hover status on the card

// 6. keydown: show last key pressed (global listener)

// 7. Event delegation: one listener on the <ul> for all <li> elements
