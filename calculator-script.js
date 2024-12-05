document.querySelector('.loan-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Förhindrar att formuläret skickas
    
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const annualInterestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanLengthYears = parseInt(document.getElementById('loan-length').value, 10);

    // Kontrollera att värdena är giltiga
    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanLengthYears)) {
        alert('Var god och fyll i alla fält med giltiga värden.');
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


/*

import "./styles.css";

const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK"
});

const form = document.querySelector(".loan-form");
const paymentAmount = document.querySelector(".payment-amount");

const loan = () => 
    parseInt(document.getElementById("loan-amount").value, 10);

const monthlyInterestRate = () => {
    const rate = parseInt(document.getElementById("interest-rate").value, 10);
    return rate / 100 / 12;
}

const numOfPaymentMonths = () => {
    const loanLength = parseInt(document.getElementById("loan-length").value, 0);
    return loanLength * 12;
}

function monthlyPayment(loan, numOfPayments, interestRate) {
    if (interestRate == 0) {
        return loan / numOfPayments;
    }

    return (
        (loan * interestRate * Math.pow(1 + interestRate, numOfPayments)) / 
        (Math.pow(1 + interestRate, numOfPayments) - 1)
    );
}

const submit = (e) => {
    e.preventDefault();

    const monthlyMortgagePayment = monthlyPayment(
        loan(),
        numOfPaymentMonths(),
        monthlyInterestRate()
    ).toFixed(2);

    const formattedPayment = formatter.format(monthlyMortgagePayment);

    paymentAmount.textContent = `${formattedPayment}`;
    paymentAmount.style.visibility = "visible";
};

form.onsubmit = submit;

*/