//Homework 6 Task 1

const liList = document.querySelector("#list");
alert(liList.querySelector("li:first-child").textContent);
alert(liList.querySelector("li:last-child").textContent);
alert(liList.querySelector("li:nth-child(2)").textContent);
alert(liList.querySelector("li:nth-child(4)").textContent);
alert(liList.querySelector("li:nth-child(3)").textContent);

//Homework 6 Task 2

const headerH1 = document.querySelector("h1");
const div = document.querySelector("#myDiv");
const paragraf = document.querySelectorAll("p");
const list = document.querySelectorAll("#myList li");
const span = document.querySelector("span");
//Далі стилізуємо. Це я піддивлявся в інтернеті, як правильно.
headerH1.style.fontSize = '32px';
headerH1.style.backgroundColor = 'green';
div.style.display = 'display-flex';
paragraf[0].style.color = 'black';
paragraf[0].style.fontWeight = 'bold';
paragraf[1].style.color = 'red';
paragraf[2].style.textDecoration = 'underline';
paragraf[3].style.fontStyle = 'italic';

list.forEach(item => item.style.display = 'inline');
span.style.visibility = 'hidden';

//Homework 6 Task 3
let body = document.querySelector("body")
let rozmitka = `
 <main class="mainClass check item">         
     <div id="myDiv1">
         <p>First paragraph</p>           
     </div>
 </main> 
`;
// Додаю цей метод, а не innerHTML, У звізку з тим що він замінить мені все що є в body//
body.insertAdjacentHTML('beforeend', rozmitka); 

//Homework 6 Task 4
// Отримуємо посилання на кнопку, форму та поле outBlock
const submitButton = document.querySelector(".btn");
const outBlock = document.querySelector(".out");
const form = document.querySelector("fieldset");
//Оголошуємо пустий масив для зберігання даних
let newArr = [];
//Додаємо обробник подій для кнопки "Надіслати"
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Робимо зупинку стандартної поведінки форми
    // Оголошуємо змінні, які відповідатимуть за отримання даних з полів форми
    const fio = document.querySelector('input[name="fio"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const birthday = document.querySelector('input[name="birthday"]').value;
    const email = document.querySelector('input[name="email"]').value;
    //задаємо змінну, що буде містити наш новий сформований обєкт
    const newObject = {
        'Введіть своє ПБІ': fio,
        'Номер телефону': phone,
        'дата народження: число, місяць, рік': birthday,
        'введіть свій email': email
    };
    //Додаємо новий обєкт до масиву newArr
    newArr.push(newObject);
    //Очищаємо поля форми
    form.reset();
    //Виводимо масив у outBlock
    outBlock.textContent = JSON.stringify(newArr, null, 2);
})

//Homework 6 Task 5
// Вибираємо всі елементи з класом "circle"
const circles = document.querySelectorAll(".circle");
// Перебираємо кожен елемент
circles.forEach(circle => {
    // Отримуємо значення атрибута "data-anim"
    const animation = circle.getAttribute("data-amin");
    // Додаємо значення атрибута як клас до елемента
    circle.classList.add(animation);
    // Перевіряємо, чи застосувалися анімації
    const isAnimationApplied = circle.classList.contains(animation);
    //Виводимо результат в консоль
    console.log(`Анімація "${animation}" застосована: ${isAnimationApplied}`);
})

//Homework 6 Task 6
//Початкова ціна
let price = 189.99;
//У перші й змінній тримуються всі елементи з класом "color", які представляють кнопки кольорів. 
//У другому рядку отримується елемент <h1>, який представляє елемент ціни товару.
const colorButtons = document.querySelectorAll(".color");
const priceElement = document.querySelector(".price h1");
//Функція оновлення ціни товару
function updatePrice(newPrice) {
    priceElement.textContent = newPrice.toFixed(2);
}
// Додавання обробників подій для кнопок кольорів
colorButtons.forEach((button) => {
    button.addEventListener('click', function() {
      const selectedColor = this.getAttribute('color');
      // Ваш код для визначення нової ціни товару на основі вибраного кольору
      if (selectedColor === 'blue') {
        price = 189.99; // Нова ціна для кольору "blue"
      } else if (selectedColor === 'red') {
        price = 199.99; // Нова ціна для кольору "red"
      } else if (selectedColor === 'green') {
        price = 209.99; // Нова ціна для кольору "green"
      } else if (selectedColor === 'orange') {
        price = 219.99; // Нова ціна для кольору "orange"
      } else if (selectedColor === 'black') {
        price = 229.99; // Нова ціна для кольору "black"
      }
  
      // Оновлення ціни товару
      updatePrice(price);
    });
  });