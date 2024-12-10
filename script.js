// Navigation --------------------------------------------------------------------------------------------------
function toggleMenu () {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

// Cards-slider ------------------------------------------------------------------------------------------------
const carousel = document.querySelector(".carousel");

// Filtrera kort för att visa endast Porsche, Audi, Lamborghini, Ford Taurus och Bentley
const selectedCards = [
  { id: 3, image: "/assets/car4.jpg", name: "Porsche 911", year: "30/12", type: "Evolution av perfektion", price: "" },
  { id: 4, image: "/assets/audiQ5.webp", name: "Mercedes AMG GT", year: "15/12", type: "Tysk ingenjörskonst", price: "" },
  { id: 5, image: "/assets/lambo revuelto.jpg", name: "Lamborghini Revuelto", year: "15/12", type: "Sportbil från 60-talet", price: "" },
  { id: 6, image: "/assets/Ford taurus.webp", name: "Ford Taurus", year: "15/12", type: "Sportbil från 60-talet", price: "" },
  { id: 7, image: "/assets/bentaygahybrid01.webp", name: "Bentley Bentayga", year: "15/12", type: "Sportbil från 60-talet", price: "" }
];

// Rendera karrusellen med endast dessa kort
selectedCards.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    <a href="singlecar.html?id=${card.id}" class="singlecar">
      <img src="${card.image}" alt="${card.name}" />
      <div class="card-date">${card.year}</div>
      <h3>${card.name}</h3>
      <p>${card.type}</p>
    </a>
  `;
  carousel.appendChild(cardElement);
});

let currentPosition = -2; // index istället för pixlar
let isAnimating = false;

// Funktion för att uppdatera carouselens position
function updatePosition() {
  const cardWidth = document.querySelector(".card").offsetWidth + 32; // 32 är gap mellan korten
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
  const totalCards = 5; // Här är det 5 kort vi vill ha
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
