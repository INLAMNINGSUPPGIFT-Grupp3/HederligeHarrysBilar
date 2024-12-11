import { cars } from './data-cars.js';
import './hamburger-menu.js';

// const urlParams = new URLSearchParams(window.location.search);
// const carId = urlParams.get("id");

// if (carId && cars.some((car) => car.id == carId)) {
//   const car = cars.find((car) => car.id == carId);
//   document.getElementById("car-image").src = car.img;
//   document.getElementById("car-title").textContent = car.title;
//   document.getElementById("car-type").textContent = car.type;
//   document.getElementById("car-year").textContent = "År: " + car.year;
//   document.getElementById("car-price").textContent = "Pris: " + car.price;
  
//   setLoanAmount(car);
// } else {
//   document.getElementById("car-details").innerHTML =
//     "<p>Ingen bilinformation tillgänglig.</p>";
// }


// function setLoanAmount(car) {
//   const loanAmountField = document.getElementById("loan-amount");
//   const interestRateField = document.getElementById("interest-rate");
  
//   loanAmountField.value = car.price.replace(' kr', '').replace(/\s/g, '');
//   interestRateField.value = 15; 
  
//   loanAmountField.readOnly = true;
//   interestRateField.readOnly = true;
// }

// Get the car ID from URL parameters


// Visa bildetaljer


function displayCarDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const carId = parseInt(urlParams.get("id"));
  const car = cars.find(car => car.id === carId);

  // Price formatter
  const priceFormatter = new Intl.NumberFormat('sv-SE', {
    style: 'decimal',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });

  if (car) {
    // Update image information
    document.getElementById("car-image").src = car.img;
    document.getElementById("car-title").textContent = `${car.brand} ${car.model}`;
    document.getElementById("car-brand").textContent = `Märke: ${car.brand}`;
    document.getElementById("car-model").textContent = `Modell: ${car.model}`;
    document.getElementById("car-year").textContent = `År: ${car.year}`;
    document.getElementById("car-price").textContent = `Pris: ${priceFormatter.format(car.price)} kr`;


    // Initialize calculator
    const loanAmountField = document.getElementById("loan-amount");
    loanAmountField.value = car.price;
    loanAmountField.readOnly = true;
  } else {
    document.getElementById("car-details").innerHTML = 
      "<p class='text-danger'>Ingen bilinformation tillgänglig.</p>";
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', displayCarDetails);