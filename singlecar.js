const cars = [
  {
    id: 1,
    img: "/assets/car2.jpg",
    title: "Aston Martin DB5",
    type: "Grand Tourer",
    year: 1964,
    price: "25 000 000 kr",
  },
  {
    id: 2,
    img: "/assets/ferrari roma spider.jpg",
    title: "Ferrari Roma Spider",
    type: "Cabriolet",
    year: 2015,
    price: "2 800 000 kr",
  },
  {
    id: 3,
    img: "/assets/car4.jpg",
    title: "Porsche 911",
    type: "Sportbil",
    year: 1964,
    price: "1 200 000 kr",
  },
  {
    id: 4,
    img: "/assets/audiQ5.webp",
    title: "Audi Q5",
    type: "SUV",
    year: 2023,
    price: "599 999 kr",
  },
  {
    id: 5,
    img: "/assets/lambo revuelto.jpg",
    title: "Lamborghini Revuelto",
    type: "Sportbil",
    year: 2024,
    price: "6 955 222 kr",
  },
  /*{
    id: 6,
    img: "/assets/car2.jpg",
    title: "Aston Martin DB5",
    type: "Klassiker",
    year: 1964,
    price: "25 000 000 kr",
  },
  {
    id: 7,
    img: "/assets/car3.jpg",
    title: "Ferrari Spider",
    type: "Klassiker",
    year: 2015,
    price: "1 858 000 kr",
  },
  {
    id: 8,
    img: "/assets/car4.jpg",
    title: "Porsche 911",
    type: "Sportbil",
    year: 1964,
    price: "1 500 000 kr",
  },
  {
    id: 9,
    img: "/assets/audiQ5.webp",
    title: "Audi Q5",
    type: "S line TDI quattro fyrhjulsdrift S tronic",
    year: 2023,
    price: "1 181 170 kr",
  },
  {
    id: 10,
    img: "/assets/car1.jpg",
    title: "Lamborghini Aventador",
    type: "Sportbil",
    year: 1967,
    price: "3 344 331 kr",
  },*/
];

const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get("id");

if (carId && cars.some((car) => car.id == carId)) {
  const car = cars.find((car) => car.id == carId);
  document.getElementById("car-image").src = car.img;
  document.getElementById("car-title").textContent = car.title;
  document.getElementById("car-type").textContent = car.type;
  document.getElementById("car-year").textContent = "År: " + car.year;
  document.getElementById("car-price").textContent = "Pris: " + car.price;
} else {
  document.getElementById("car-details").innerHTML =
    "<p>Ingen bilinformation tillgänglig.</p>";
}
