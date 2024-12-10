/* Hämta värde från bil */

function setLoanAmount(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
        const loanAmountField = document.getElementById("loan-amount");
        loanAmountField.value = vehicle.price;
    }
}

/* Kalkylator med validering av formulär, med felmeddelanden */

document.querySelector('.loan-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Förhindrar att formuläret skickas

    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanLengthYears = parseInt(document.getElementById('loan-length').value, 10);
    const loanLengthError = document.getElementById('loan-length-error');

    // Ta bort tidigare felmeddelanden
    loanLengthError.textContent = '';

    // Kontrollera att lånelängd är giltig
    if (isNaN(loanLengthYears) || loanLengthYears <= 0 || loanLengthYears >= 16) {
        loanLengthError.textContent = 'Lånelängd måste vara mellan 1 och 15 år.';
        return;
    }

    const monthlyInterestRate = annualInterestRate / 12;
    const totalMonths = loanLengthYears * 12;

    // Formel för månadsbetalning
    const monthlyPayment = 
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));

    // Visa resultatet
    const paymentAmountElement = document.querySelector('.payment-amount');
    paymentAmountElement.textContent = monthlyPayment.toFixed(2) + ' SEK';
});