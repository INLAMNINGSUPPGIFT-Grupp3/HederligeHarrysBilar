// Validating form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  let formSubmitted = false; 

  // Validate on submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSubmitted = true;
    
    let isValid = true;
    
    // name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'name-error', 'Vänligen ange ditt namn');
      isValid = false;
    } else {
      hideError(nameInput, 'name-error');
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, 'email-error', 'Vänligen ange en giltig e-postadress');
      isValid = false;
    } else {
      hideError(emailInput, 'email-error');
    }

    // Message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'message-error', 'Vänligen ange ett meddelande');
      isValid = false;
    } else {
      hideError(messageInput, 'message-error');
    }

    if (isValid) {

      /* Code to submit the form here */
      
      console.log('Formulär skickat!');
      form.reset();
      formSubmitted = false;
    }
  });

  // Live validation after first submit
  function validateIfSubmitted(input, errorId, validationFn, errorMessage) {
    if (formSubmitted) {
      if (!validationFn(input.value.trim())) {
        showError(input, errorId, errorMessage);
      } else {
        hideError(input, errorId);
      }
    }
  }
 
  nameInput.addEventListener('input', () => {
    validateIfSubmitted(
      nameInput, 
      'name-error', 
      value => value.length > 0,
      'Vänligen ange ditt namn'
    );
  });

  emailInput.addEventListener('input', () => {
    validateIfSubmitted(
      emailInput, 
      'email-error', 
      value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      'Vänligen ange en giltig e-postadress'
    );
  });

  messageInput.addEventListener('input', () => {
    validateIfSubmitted(
      messageInput, 
      'message-error', 
      value => value.length > 0,
      'Vänligen ange ett meddelande'
    );
  });
});

// Help functions
function showError(input, errorId, message) {
  const errorElement = document.getElementById(errorId);
  input.classList.add('input-error');
  errorElement.textContent = message;
}

function hideError(input, errorId) {
  const errorElement = document.getElementById(errorId);
  input.classList.remove('input-error');
  errorElement.textContent = '';
}