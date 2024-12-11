import { cars } from './data-cars.js';
import './hamburger-menu.js';

// Cards-slider old -------------------------------------------------------------------------------------------------
// const carousel = document.querySelector(".carousel");
// const card = document.querySelector(".card");
// let currentPosition = -2; // index istället för pixlar
// let isAnimating = false;

// // Funktion för att uppdatera carouselens position
// function updatePosition() {
//   const cardWidth = card.offsetWidth + 32; // 32 är gap mellan korten
//   carousel.style.transform = `translateX(${currentPosition * cardWidth}px)`;
// }

// // Initial setup
// updatePosition();

// // slide-funktion
// function slide(direction) {
//   if (isAnimating) return;
//   isAnimating = true;
//   currentPosition -= direction;
//   carousel.style.transition = "transform 0.5s ease-in-out";
//   updatePosition();
// }

// // Hantera oändlig loop
// carousel.addEventListener('transitionend', () => {
//   const totalCards = 5; 
  
//   if (currentPosition < -totalCards - 1) {
//     currentPosition += totalCards;
//     resetTransition();
//   } else if (currentPosition > -1) {
//     currentPosition -= totalCards;
//     resetTransition();
//   }
  
//   isAnimating = false;
// });

// // Hjälpfunktion för att återställa transition
// function resetTransition() {
//   carousel.style.transition = "none";
//   updatePosition();
//   void carousel.offsetHeight; 
//   carousel.style.transition = "transform 0.5s ease-in-out";
// }

// // Resize-hantering
// let resizeTimeout;
// window.addEventListener('resize', () => {
//   clearTimeout(resizeTimeout); 
//   resizeTimeout = setTimeout(() => {
//     updatePosition();
//   }, 250);
// });

// // Navigera till singlecar
// function navigateToCarDetails(carId) {
//   window.location.href = `singlecar.html?id=${carId}`;
// }

// // klickhändelselyssnare till alla kort
// document.addEventListener('DOMContentLoaded', () => {
//   const cards = document.querySelectorAll('.card');
//   cards.forEach(card => {
//     card.style.cursor = 'pointer'; 
    
    
//     card.addEventListener('mouseenter', () => {
//       card.style.transform = 'translateY(-5px)';
//     });
    
//     card.addEventListener('mouseleave', () => {
//       card.style.transform = 'translateY(0)';
//     });
//   });
// });


/* New carousel, generate dynamically instead */
function generateCarouselCards() {
  const carousel = document.querySelector(".carousel");
  let cardsHTML = '';

  // price formatter
  const priceFormatter = new Intl.NumberFormat('sv-SE', {
    style: 'decimal',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });
  
  // First set of cards (for infinite scroll)
  cars.slice(0, 5).forEach((car, index) => {
    const formattedPrice = priceFormatter.format(car.price);
    cardsHTML += `
      <div class="card" data-index="${index}" data-car-id="${car.id}">
        <img src="${car.img}" alt="${car.brand} ${car.model}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${car.brand}</h5>
          <h6 class="card-subtitle mb-2">${car.model}</h6>
          <p class="card-text">År: ${car.year}</p>
          <p class="card-text fw-bold">Pris: ${formattedPrice} kr</p>
        </div>
      </div>
    `;
  });

  // Duplicate cards for infinite scroll
  carousel.innerHTML = cardsHTML + cardsHTML;

  // Click handlers for all cards
  const cards = carousel.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const carId = card.dataset.carId;
      window.location.href = `singlecar.html?id=${carId}`;
    });
  });
}


// Cards-slider ------------------------------------------------------------------------------------------------
// Variables for carousel
let carousel;
let card;
let currentPosition = -2; // index instead of pixels
let isAnimating = false;

// Update position of the carousel
function updatePosition() {
  if (!carousel || !card) return;
  const cardWidth = card.offsetWidth + 32;
  carousel.style.transform = `translateX(${currentPosition * cardWidth}px)`;
}

// Slide-function
function slide(direction) {
  if (isAnimating) return;
  isAnimating = true;
  currentPosition -= direction;
  carousel.style.transition = "transform 0.5s ease-in-out";
  updatePosition();
}

// Handle infinite loop
function setupCarouselListeners() {
  carousel.addEventListener('transitionend', () => {
    const totalCards = 5;
    if (currentPosition < -totalCards - 1) {
      currentPosition += totalCards;
      resetTransition();
    } else if (currentPosition > -1) {
      currentPosition -= totalCards;
      resetTransition();
    }
    isAnimating = false;
  });
}

// Helper function to restore transition
function resetTransition() {
  carousel.style.transition = "none";
  updatePosition();
  void carousel.offsetHeight; // Force reflow
  carousel.style.transition = "transform 0.5s ease-in-out";
}

// Resize-handling
function setupResizeHandler() {
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updatePosition();
    }, 250);
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  carousel = document.querySelector(".carousel");
  
  generateCarouselCards();
  
  card = document.querySelector(".card");
  
  // Add button event listeners
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  
  prevButton.addEventListener('click', () => slide(-1));
  nextButton.addEventListener('click', () => slide(1));
  
  // Event listener and initial position
  setupCarouselListeners();
  setupResizeHandler();
  updatePosition();

  // Hover effect 
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