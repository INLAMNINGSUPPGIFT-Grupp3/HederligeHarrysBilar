import { cars } from './data-cars.js';
import './hamburger-menu.js';

// Generate cards
function generateCarCard(car) {
  
  // Price formatter
  const priceFormatter = new Intl.NumberFormat('sv-SE', {
    style: 'decimal',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });

  const formattedPrice = priceFormatter.format(car.price);

  return `
    <div class="card mb-4 shadow-sm">
      <a href="singlecar.html?id=${car.id}" class="car-link">
        <img class="card-img-top" src="${car.img}" alt="${car.brand} ${car.model}">
        <div class="card-body">
          <h5 class="card-title">${car.brand}</h5>
          <h6 class="card-subtitle mb-2">${car.model}</h6>
          <p class="card-text">År: ${car.year}</p>
          <p class="card-text fw-bold">Pris: ${formattedPrice} kr</p>
        </div>
      </a>
    </div>
  `;
}

// Render all cars on page load
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("carCardsContainer");
  const carsHTML = cars.map(car => generateCarCard(car)).join('');
  container.innerHTML = carsHTML;

  // Hover-effekt
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