const cars = [
  {
    id: 1,
    img: "/assets/astonmartin.jpgjpg",
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
  {
    id: 6,
    img: "/assets/Ford taurus.webp",
    title: "Ford Taurus",
    type: "Sedan",
    year: 2024,
    price: "500 000 kr",
  },
  {
    id: 7,
    img: "/assets/bentaygahybrid01.webp",
    title: "Bentley Bentayga",
    type: "SUV",
    year: 2024,
    price: "1 858 000 kr",
  },
  {
    id: 8,
    img: "/assets/Nissan GT-R.jpeg",
    title: "Nissan GT-R",
    type: "Sportbil",
    year: 2024,
    price: "1 500 000 kr",
  },
  {
    id: 9,
    img: "/assets/mclaren artura spider.jpg",
    title: "McLaren Artura Spider",
    type: "Sportbil",
    year: 2024,
    price: "8 181 170 kr",
  },
  {
    id: 10,
    img: "/assets/Ford f-150.jpg",
    title: "Ford F-150",
    type: "Pickup",
    year: 2024,
    price: "1 344 331 kr",
  },
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
  
  setLoanAmount(car);
} else {
  document.getElementById("car-details").innerHTML =
    "<p>Ingen bilinformation tillgänglig.</p>";
}


function setLoanAmount(car) {
  const loanAmountField = document.getElementById("loan-amount");
  const interestRateField = document.getElementById("interest-rate");
  
  loanAmountField.value = car.price.replace(' kr', '').replace(/\s/g, '');
  interestRateField.value = 15; 
  
  loanAmountField.readOnly = true;
  interestRateField.readOnly = true;
}