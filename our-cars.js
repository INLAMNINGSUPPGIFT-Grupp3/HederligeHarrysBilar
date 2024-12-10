const cars = [
  {
    id: 1,
    img: "/assets/astonmartin.jpg",
    title: "Aston Martin DB5",
    type: "Grand Tourer",
    year: 1964,
    price: "25 000 000",
  },
  {
    id: 2,
    img: "/assets/ferrari roma spider.jpg",
    title: "Ferrari Roma Spider",
    type: "Cabriolet",
    year: 2015,
    price: "2 800 000",
  },
  {
    id: 3,
    img: "/assets/car4.jpg",
    title: "Porsche 911",
    type: "Sportbil",
    year: 1964,
    price: "1 200 000",
  },
  {
    id: 4,
    img: "/assets/audiQ5.webp",
    title: "Audi Q5",
    type: "SUV",
    year: 2023,
    price: "599 999",
  },
  {
    id: 5,
    img: "/assets/lambo revuelto.jpg",
    title: "Lamborghini Revuelto",
    type: "Sportbil",
    year: 2024,
    price: "6 955 222",
  },
  {
    id: 6,
    img: "/assets/Ford taurus.webp",
    title: "Ford Taurus",
    type: "Sedan",
    year: 2024,
    price: "500 000",
  },
  {
    id: 7,
    img: "/assets/bentaygahybrid01.webp",
    title: "Bentley Bentayga",
    type: "SUV",
    year: 2024,
    price: "1 858 000",
  },
  {
    id: 8,
    img: "/assets/Nissan GT-R.jpeg",
    title: "Nissan GT-R",
    type: "Sportbil",
    year: 2024,
    price: "1 500 000",
  },
  {
    id: 9,
    img: "/assets/mclaren artura spider.jpg",
    title: "McLaren Artura Spider",
    type: "Sportbil",
    year: 2024,
    price: "8 181 170",
  },
  {
    id: 10,
    img: "/assets/Ford f-150.jpg",
    title: "Ford F-150",
    type: "Pickup",
    year: 2024,
    price: "1 344 331",
  },
];

// Rendera alla bilars cards
function generateCarCard(car) {
    return `
        <div class="card mb-4 shadow-sm">
          <a href="car-details.html?id=${car.id}" id="${car.id}">
            <img class="card-img-top" src="${car.img}" alt="${car.title} ${car.type}">
          </a>
          <div class="card-body">
            <h6 class="card-title">${car.title} - ${car.type}</h6>
            <p class="card-text justify-content-center">År: ${car.year}</p>
            <p class="card-text">Pris: ${car.price} SEK</p>
          </div>
        </div>
    `;
  }

  const container = document.getElementById("carCardsContainer");
  cars.forEach(car => {
    container.innerHTML += generateCarCard(car);
  });
      
