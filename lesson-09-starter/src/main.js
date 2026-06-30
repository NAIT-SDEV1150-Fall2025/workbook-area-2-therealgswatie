console.log('Lesson 10 starter loaded');

// ============== Propagation demo

// 1. Select required elements
const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');
const innerBtnPropagate = document.getElementById('btn-propagate');
const log = document.getElementById('log');
// 2. Add event listeners
function outerClick() {
  log.textContent += 'Outer has been clicked|';
}
// 2.1 Outer div - using a named function
outerDiv.addEventListener('click', outerClick);
// 2.2 Inner div - using an anonymous function
innerDiv.addEventListener('click', function () {
  log.textContent += 'Inner has been clicked|';
});
// 2.3 Button - using an arrow function
innerBtnPropagate.addEventListener('click', () => {
  log.textContent += 'Button has been clicked|';
});
// ============== Gallery demo

// 1. Select required elements
const thumbnails = document.querySelector('.thumbnails');
const imageMainViewer= document.getElementById('main-image');
const closeViewerBtn = document.getElementById('close-viewer');
const viewer = document.querySelector('.viewer');
// 2. Add event listeners

// 2.1 Thumbnails container - using an arrow function
thumbnails.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') { // tag name in UPPERCASE
    imageMainViewer.src = e.target.src;
    viewer.classList.add('show');
  };
});
// 2.2 Close button - using an arrow function
closeViewerBtn.addEventListener('click', () => {
  viewer.classList.remove('show');
});
// Student TODO: Add event listener to document, which closes
// the viewer when the Escape key is pressed
