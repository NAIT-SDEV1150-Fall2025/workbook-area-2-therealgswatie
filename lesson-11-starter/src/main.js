console.log('Lesson 11 starter loaded');

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  const fullNameValue = formEl.elements.fullName.value;
  const emailValue = formEl.elements.email.value;
  const bioValue = formEl.elements.bio.value;

  const planValue = formEl.elements.plan.value;
  let topicValue = '';
  formEl.elements.topics.forEach((el) => {
    if (el.checked) {
      topicValue += `${el.value} `;
    }
  });

  return {
    fullName: fullNameValue,
    email: emailValue,
    bio: bioValue,
    plan: planValue,
    topics: topicValue,
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); // webpage doesn't reload and doesn't sumbit data to the server
  const data = serializeForm(form);

  // Student TODO: Add validation logic to the form, ensure all fields are valid before allowing submission
  // HINT: see the 'input' event listener below for examples of validation logic. Perhaps
  // you can reuse some of that code here to validate all fields on submit, or create validation
  // functions that can be reused in both places.

  // OPTIONAL - use the following alongside the `novalidate` form attribute
  // to trigger built-in HTML validation
  // if (form.checkValidity()) {
  if (form.checkValidity()) { // best practices!!!! important
    result.textContent = `
      Submission received:
      - Name: ${data.fullName}
      - Email: ${data.email}
      - Bio: ${data.bio}
      - Plan: ${data.plan}
      - Topics: ${data.topics}
    `;
  };
  // } // end if form.checkValidity()
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});

// 1. Add validation logic to the form on 'input' events
form.addEventListener('input', (e) => {
// 1.1 custom validation for fullName (must contain two words)
  if (e.target.name === 'fullName') { // target is fullName
  //  const nameParts = e.target.value.trim().split(' ');// another way to do it is to use a var(lame)
    if (e.target.value.trim().split(' ').length < 2) {
      e.target.setCustomValidity('Full Name must contain at least 2 words.');
    } else {
      e.target.setCustomValidity('');
    };
  };
  // 1.2 custom validation for bio (minimum length = 40 WORDS)
  if (e.target.name === 'bio') { // if target is bio
    if (e.target.value.trim().split(' ').length < 40) {
      e.target.setCustomValidity('Bio must be at least 40 words long.');
    } else {
      e.target.setCustomValidity('');
    }
  }
  // 1.3 custom validation for email (basic '@' symbol check)
  if (e.target.name === 'email') { // target is email
    if (!e.target.value.includes('@')) {
      e.target.setCustomValidity('Email must contain @ symbol.');
    } else {
      e.target.setCustomValidity('');
    }
  }
  e.target.reportValidity();
});

// 1.4 report the validity status to the user
