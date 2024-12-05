// Din array med bilar
const cars = [
    {
        id: 1,
        image: 'https://objectstorage.eu-amsterdam-1.oraclecloud.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F1.png',
        name: 'Tesla Model S',
        type: 'Elbil',
        year: 2023,
        price: '799 000 SEK'
    },
    {
        id: 2,
        image: 'https://objectstorage.eu-amsterdam-1.oraclecloud.com/n/axmjqhyyjpat/b/randomimages/o/cars%2F2.png',
        name: 'Volvo XC90',
        type: 'SUV',
        year: 2021,
        price: '599 000 SEK'
    }
    // Fler bilar kan läggas till här
];

// Hämta ID från URL:en
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'), 10);

// Hitta aktuell bil
const car = cars.find(c => c.id === carId);

// Uppdatera sidan med bilens information
if (car) {
    document.getElementById('car-image').src = car.image;
    document.getElementById('car-name').textContent = car.name;
    document.getElementById('car-type').textContent = `Typ: ${car.type}`;
    document.getElementById('car-year').textContent = `År: ${car.year}`;
    document.getElementById('car-price').textContent = `Pris: ${car.price}`;
} else {
    document.querySelector('.car-page').innerHTML = '<p>Bilen hittades inte!</p>';
}


// Navigation
function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
  }
