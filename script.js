<<<<<<< HEAD

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
  
  // First set of cards (for infinite scroll)
  cars.slice(0, 5).forEach((car, index) => {
    cardsHTML += `
      <div class="card" data-index="${index}" onclick="navigateToCarDetails(${car.id})">
        <img src="${car.img}" alt="${car.brand} ${car.model}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${car.brand}</h5>
          <h6 class="card-subtitle mb-2">${car.model}</h6>
          <p class="card-text">År: ${car.year}</p>
          <p class="card-text fw-bold">Pris: ${car.price.toLocaleString()} SEK</p>
        </div>
      </div>
    `;
  });

  // Duplicate cards for infinite scroll
  carousel.innerHTML = cardsHTML + cardsHTML;
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
  const cardWidth = card.offsetWidth + 32; // 32 är gap mellan korten
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

// Navigate to singelcar
function navigateToCarDetails(carId) {
  window.location.href = `singlecar.html?id=${carId}`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  carousel = document.querySelector(".carousel");
  
  generateCarouselCards();
  
  card = document.querySelector(".card");
  
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
=======
>>>>>>> 07583ecce9f13328a82ab0612cfd417acf7b8fae
