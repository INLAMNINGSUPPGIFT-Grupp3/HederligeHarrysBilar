
// Navigation --------------------------------------------------------------------------------------------------
function toggleMenu () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


// array med bilar --------------------------------------------------------------------------------------------------
const carData = [
  {
    "id": 1,
    "img":"../assets/McLaren.jpg",
    "brand": "McLaren",
    "model": "Artura",
    "year": 2022,
    "price": 225000
  },
  {
    "id": 2,
    "img":"../assets/Riley.jpg",
    "brand": "Riley",
    "model": "Riley Nine Roadster",
    "year": 1939,
    "price": 50000
  },
  {
    "id": 3,
    "img":"../assets/Lamborghini.jpg",
    "brand": "Lamborghini",
    "model": "Troligtvis",
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
    "img":"../assets/Chevrolet.jpg",
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
    "img":"../assets/McLaren-Artura.jpg",
    "brand": "McLaren",
    "model": "720S",
    "year": 2017,
    "price": 300000
  }
];

// Hämta ID från URL:en
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'), 10);

// Hitta aktuell bil
const car = carData.find(c => c.id === carId);

// Uppdatera sidan med bilens information
if (car) {
  document.getElementById('car-img').src = car.img;
  document.getElementById('car-brand').textContent = car.brand;
  document.getElementById('car-model').textContent = `Märke: ${car.model}`;
  document.getElementById('car-year').textContent = `År: ${car.year}`;
  document.getElementById('car-price').textContent = `Pris: ${car.price}`;
} else {
  document.querySelector('.car-page').innerHTML = '<p>Bilen hittades inte!</p>';
}
