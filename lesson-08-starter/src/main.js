// const { preprocessCSS } = require("vite");

console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
});

// 2. Selecting elements
const buttonToggle = document.querySelector(`#btn-toggle`);
// 3. click: toggle a highlight class on the body
let numberOfTimes = 0;
buttonToggle.addEventListener(`click`, () => {
  numberOfTimes++;
  console.log(`button is clicked ${numberOfTimes} times`);
});
buttonToggle.addEventListener(`click`, () => {
  document.body.classList.toggle(`highlight`); // toggle turns the highlight class on or off
  const on = document.body.classList.contains(`highlight`); // contains checks if highlight is there as a class or not, returns true/false based on highlight class being there or not.
  buttonToggle.textContent = on ? `highlight is on` : `highlight is off`;// if on is true then left side else right side.
});

// 4. click: change message textContent (no HTML parsing)
const buttonChangeMessage = document.querySelector(`#btn-message`);
const message = document.querySelector(`#message`);

buttonChangeMessage.addEventListener(`click`, () => {
  const timeString = new Date().toLocaleTimeString(); // new creates a new object
  buttonChangeMessage.nextElementSibling.textContent = `Message updated at ${timeString}`; // instead of message.textcontent   just for practice.
});
// 5. mouseover / mouseout: display hover status on the card
const hoverCard = document.querySelector(`#hover-card`);
const hoverStatus = document.querySelector(`#hover-status`);

hoverCard.addEventListener(`mouseover`, () => {
  hoverStatus.textContent = 'Status: Hovering';
});
hoverCard.addEventListener(`mouseout`, () => {
  hoverStatus.textContent = 'Status: Not Hovering';
});
// 6. keydown: show last key pressed (global listener)
const keyOutput = document.getElementById(`key-output`);
document.addEventListener(`keydown`, (e) => { // e is event object
  keyOutput.textContent = `Last Key: ${e.key} (code: ${e.code})`; // e.code give the exact location of the key that was pressed. e.key gives the name of the key
});
// 7. Event delegation: one listener on the <ul> for all <li> elements
const list = document.getElementById(`list`);
const selection = document.getElementById(`selection`);

list.addEventListener(`click`, (e) => {
  // could also call e.target an element.  tagName refers to the tag name in uppercase
  if (e.target.tagName === 'LI') {
    const prev = e.target.querySelector(`li.active`);
    if (prev) {
      prev.classList.remove(`active`);
    };
    e.target.classList.add(`active`);
    const id = e.target.getAttribute(`data-id`);
    selection.textContent = `Selected: ${id}`;
  };
});