
// Navigation
function toggleMenu () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}


// Cards-slider
const carousel = document.querySelector(".carousel");
const card = document.querySelector(".card");
let currentPosition = -2; // index istället för pixlar
let isAnimating = false;

// Funktion för att uppdatera carouselens position
function updatePosition() {
  const cardWidth = card.offsetWidth + 32; // 32 är gap mellan korten
  carousel.style.transform = `translateX(${currentPosition * cardWidth}px)`;
}

// Initial setup
updatePosition();

// slide-funktion
function slide(direction) {
  if (isAnimating) return;
  isAnimating = true;
  currentPosition -= direction;
  carousel.style.transition = "transform 0.5s ease-in-out";
  updatePosition();
}

// Hantera oändlig loop
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

// Hjälpfunktion för att återställa transition
function resetTransition() {
  carousel.style.transition = "none";
  updatePosition();
  void carousel.offsetHeight; 
  carousel.style.transition = "transform 0.5s ease-in-out";
}

// Resize-hantering
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout); 
  resizeTimeout = setTimeout(() => {
    updatePosition();
  }, 250);
});