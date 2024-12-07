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
]

  function generateCarCard(car) {
    return `
        <div class="card mb-4 shadow-sm">
          <a href="carDetails.html" id="${car.id}">
            <img class="card-img-top" src="${car.img}" alt="${car.brand} ${car.model}">
          </a>
          <div class="card-body">
            <h6 class="card-title">${car.brand} - ${car.model}</h6>
            <p class="card-text justify-content-center">År: ${car.year}</p>
            <p class="card-text">Pris: ${car.price} SEK</p>
          </div>
        </div>
    `;
  }

  const container = document.getElementById("carCardsContainer");
  carData.forEach(car => {
    container.innerHTML += generateCarCard(car);
  });