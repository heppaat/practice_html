type Car = { brand: string; km: number; price: number };
type Expectation = { km: number; price: number };

const data: Car[] = [
  { brand: "Mercedes", km: 245_000, price: 8500 },
  { brand: "Audi", km: 158_000, price: 5500 },
  { brand: "Renault", km: 120_000, price: 8900 },
  { brand: "BMW", km: 285_000, price: 4500 },
  { brand: "Skoda", km: 185_000, price: 1800 },
];

const findGoodCars = (cars: Car[], expectation: Expectation): Car[] => {
  let result: Car[] = [];
  for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    if (car.km < expectation.km && car.price < expectation.price) {
      result = [...result, car];
    }
  }
  return result;
};

//console.log(findGoodCars(data, { km: 159000, price: 9000 }));

const searchButton = document.getElementById("search")! as HTMLButtonElement;
const kmInput = document.getElementById("km-input")! as HTMLInputElement;
const priceInput = document.getElementById("price-input")! as HTMLInputElement;
const resultContainer = document.getElementById(
  "result-container"
)! as HTMLDivElement;

const myFunction = () => {
  const priceInputValue = +priceInput.value;
  const kmInputValue = +kmInput.value;
  console.log(priceInputValue);
  console.log(kmInputValue);
};

searchButton.addEventListener("click", myFunction);
