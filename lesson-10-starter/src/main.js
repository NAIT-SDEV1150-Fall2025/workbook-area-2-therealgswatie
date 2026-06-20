console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');
console.log(form.elements);
// 2. Function to gather and structure form data
function serializeForm(formEl) {
  // Instructor TODO: get the name

  // Student TODO: get the email and bio
  const { fullName, email, bio } = formEl.elements; // object destructuring
  // const fullName = formEl.elements.fullName.value;
  // const email = formEl.elements.email.value;
  // const bio = formEl.elements.bio.value;
  
  // OPTIONAL: get the plan and topic values as well
  const plan = formEl.elements.plan.value;// getting the values of radiobuttons
  // getting checkboxes values.
  const nodeList = formEl.querySelectorAll('input[name="topics"]:checked');
  const array = Array.from(nodeList);
  const topics = array.map(cb => cb.value);
  // Array.from() converts to an array (from nodelist/htmlcollection)
  // forEach() and .map() are similar but forEach returns/runs some code. .map() always returns an array.
  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    plan,
    topics,
    bio: bio.value.trim() };
  // .trim() gets rid of trailing and leading whitespaces
}

// Instructor TODO: return the fullName within an object literal
// Student TODO: add the remaining fields

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = serializeForm(form);
  console.log(data);
  result.textContent = `
  ${data.fullName}
  ${data.bio}
  ${data.email}
  ${data.plan}
  ${data.topics}
   `
  });
// Prevent default behavior (navigation/reload) using event.preventDefault()
// Instructor TODO: display the fullName value

// Student TODO: display the remaining values

// 4. Handle form reset - reset the result area text when the form is reset
form.addEventListener('reset', () => {
  result.textContent = 'Awaiting Submission';
});
