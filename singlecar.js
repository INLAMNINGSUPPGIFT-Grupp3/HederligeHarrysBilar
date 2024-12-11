
// Navigation --------------------------------------------------------------------------------------------------
function toggleMenu () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


// array med bilar -----------------------------------------------------------------------------------
const cars = [
  {
    "id": 1,
    "img":"../assets/McLaren-Artura.jpg",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2021,
    "price": 225000
  },
  {
    "id": 2,
    "img":"../assets/Riley.jpg",
    "brand": "Riley",
    "model": "Nine Roadster",
    "year": 1939,
    "price": 50000
  },
  {
    "id": 3,
    "img":"../assets/Lamborghini.jpg",
    "brand": "Lamborghini",
    "model": "Huracán",
    "year": 2020,
    "price": 300000
  },
  {
    "id": 4,
    "img":"../assets/Porsche-911.jpg",
    "brand": "Porsche",
    "model": "911 GT3",
    "year": 2022,
    "price": 200000
  },
  {
    "id": 5,
    "img":"../assets/Mercedes-Benz.jpg",
    "brand": "Mercedes-Benz",
    "model": "AMG GT R",
    "year": 2021,
    "price": 162900
  },
  {
    "id": 6,
    "img":"../assets/Chevrolet-Corvette.jpg",
    "brand": "Chevrolet",
    "model": "Corvette ZR1",
    "year": 2019,
    "price": 135000
  },
  {
    "id": 7,
    "img":"../assets/Rolls-RoyceGhost.jpg",
    "brand": "Rolls-Royce",
    "model": "Ghost",
    "year": 2020,
    "price": 400000
  },
  {
    "id": 8,
    "img":"../assets/Porsche-Cayman.jpg",
    "brand": "Porsche",
    "model": "718 Cayman",
    "year": 2020,
    "price": 100000
  },
  {
    "id": 9,
    "img":"../assets/Rolls-Royce.jpg",
    "brand": "Rolls-Royce",
    "model": "MyModel",
    "year": 2020,
    "price": 160000
  },
  {
    "id": 10,
    "img":"../assets/McLaren-720S.jpg",
    "brand": "McLaren",
    "model": "720S",
    "year": 2017,
    "price": 300000
  }
];

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

  if (car) {
    // Uppdatera bildinformation
    document.getElementById("car-image").src = car.img;
    document.getElementById("car-title").textContent = `${car.brand} ${car.model}`;
    document.getElementById("car-brand").textContent = `Märke: ${car.brand}`;
    document.getElementById("car-model").textContent = `Modell: ${car.model}`;
    document.getElementById("car-year").textContent = `År: ${car.year}`;
    document.getElementById("car-price").textContent = `Pris: ${car.price.toLocaleString()} SEK`;


    // Initialisera lånekalkylatorn
    const loanAmountField = document.getElementById("loan-amount");
    loanAmountField.value = car.price;
    loanAmountField.readOnly = true; // Priset ska inte kunna ändras
  } else {
    document.getElementById("car-details").innerHTML = 
      "<p class='text-danger'>Ingen bilinformation tillgänglig.</p>";
  }
}

// Initialisera sidan
document.addEventListener('DOMContentLoaded', displayCarDetails);