//Homework 2 Task 1
let a = 1;
let b = 2;
let c = 3;
if (a < b && b < c) {
  console.log("Істинність висловлювання вірна")
} else {
  console.log("Істинність висловлювання невірна")
}
//Homework 2 Task 2
let x = 1;
let y = 2;
let res1 = "1" + (x * y) ;
console.log(res1);
console.log(typeof res1);
let res2 = "true" + y;
console.log(res2);
console.log(typeof res2);
let res3 = x != y;
console.log(res3);
console.log(typeof res3);
let res4 = x * "number"
console.log(res4);
console.log(typeof res4);
//Homework 2 Task 3
let age = parseInt(prompt("Ведіть свій вік"));
let isAdult = (age < 18) ? "Ви ще надто молоді" : "Ви досягли повнолітнього віку";
alert(isAdult);

//Homework 2 Task 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]

// Створюємо об'єкт, в якому зберігатимемо кількість входжень кожного числа
let data = {};

// Перебираємо елементи масиву
for (let i = 0; i < arr.length; i++) {
  let number = arr[i];

  // Якщо число вже присутнє в об'єкті frequency, збільшуємо його кількість на 1
  if (data[number]) {
    data[number]++;
  } else {
    // Якщо число ще не присутнє в об'єкті frequency, створюємо новий ключ і присвоюємо йому значення 1
    data[number] = 1;
  }
}

// Знаходимо число, яке найбільш часто входить в масив
let mostDataNumber;
let highestData = 0;

for (let number in data) {
  if (data[number] > highestData) {
    mostDataNumber = number;
    highestData = data[number];
  }
}
console.log(data);
// Видаляємо всі входження найчастішого числа з поточного масиву
arr = arr.filter((number) => number !== parseInt(mostDataNumber));

console.log(arr); // [4, 2, 1, 6, 3, 2]


//Homework 2 Task 5
const side1 = parseFloat(prompt("Введіть довжину першої сторони"));
const side2 = parseFloat(prompt("Введіть довжину другої сторони"));
const side3 = parseFloat(prompt("Введіть довжину другої сторони"));
if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <=0 || side3 <= 0) {
  console.log("Incorrect data");
} else {
  const semiperimeter = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3));
  console.log("Площа трикутника: " + area.toFixed(3));
  const isRightTriangle = (side1 ** 2 === side2 ** 2 + side3 ** 2) || (side2 ** 2 === side1 ** 2 + side3 ** 2) || (side3 ** 2 === side1 ** 2 + side2 ** 2);
  console.log("Цей трикутник є прямокутним: " + isRightTriangle);
};
//Homework 2 Task 6
function calc(a, b, op) {
  let result;
  switch (op) {
    case 1:
     result = a - b;
     break;
    case 2:
      result = a * b;
      break;
    case 3:
      result = a / b;
      break;
    default:
      result = a + b;
  }
  return result;
}

//Homework 2 Task 7
function findUnique(arr) {
  // Створюємо новий Set, який автоматично видаляє дублікати елементів
 const uniqueSet = new Set(arr);
// Порівнюємо довжину початкового масиву з довжиною Set
// Якщо вони співпадають, то всі елементи є унікальними
if (arr.length === uniqueSet.size) {
  return true;
} else {
  return false;
}
}
prompt(findUnique([1, 2, 3, 5, 3]));
prompt(findUnique([1, 2, 3, 5, 11]));
