
// Prisformaterare för svenska format
const priceFormatter = new Intl.NumberFormat('sv-SE', {
  style: 'decimal',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
});

// Get value from the car 
function setLoanAmount(vehicleId) {
  const vehicle = cars.find(v => v.id === vehicleId);
  if (vehicle) {
      const loanAmountField = document.getElementById("loan-amount");
      loanAmountField.value = vehicle.price;
      loanAmountField.readOnly = true; 
  }
}

// Reset specific form fields 
function resetCalculator() {
  document.getElementById('loan-length').value = '';
  document.getElementById('interest-rate').value = '15';
  document.querySelector('.payment-amount').textContent = '';
  document.getElementById('loan-length-error').textContent = '';
}

// Calculate monthly payment 
function calculateMonthlyPayment(loanAmount, years, interestRate) {
  const monthlyInterestRate = interestRate / 12;
  const totalMonths = years * 12;
  
  return (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));
}
// Form validation and submission 
document.querySelector('.loan-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const annualInterestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
  const loanLengthYears = parseInt(document.getElementById('loan-length').value, 10);
  const loanLengthError = document.getElementById('loan-length-error');
  
  // Clear previous error message
  loanLengthError.textContent = '';
  
  // Validate loan duration
  if (isNaN(loanLengthYears) || loanLengthYears <= 0 || loanLengthYears >= 16) {
    loanLengthError.textContent = 'Lånelängd måste vara mellan 1 och 15 år.';
    return;
  }
  
  // Calculate and display result
  const monthlyPayment = calculateMonthlyPayment(loanAmount, loanLengthYears, annualInterestRate);
  const paymentAmountElement = document.querySelector('.payment-amount');
  paymentAmountElement.textContent = `${priceFormatter.format(Math.round(monthlyPayment))} kr`;
});

// Reset form 
document.querySelector('.loan-form button[type="reset"]').addEventListener('click', function(e) {
  e.preventDefault();
  resetCalculator();
});