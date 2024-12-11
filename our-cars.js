
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

// Generera bilkort
function generateCarCard(car) {
  return `
    <div class="card mb-4 shadow-sm">
      <a href="singlecar.html?id=${car.id}" class="car-link">
        <img class="card-img-top" src="${car.img}" alt="${car.brand} ${car.model}">
        <div class="card-body">
          <h5 class="card-title">${car.brand}</h5>
          <h6 class="card-subtitle mb-2">${car.model}</h6>
          <p class="card-text">År: ${car.year}</p>
          <p class="card-text fw-bold">Pris: ${car.price.toLocaleString()} SEK</p>
        </div>
      </a>
    </div>
  `;
}

// Rendera alla bilar när sidan laddas
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("carCardsContainer");
  const carsHTML = cars.map(car => generateCarCard(car)).join('');
  container.innerHTML = carsHTML;

  // Lägg till hover-effekt på korten
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});