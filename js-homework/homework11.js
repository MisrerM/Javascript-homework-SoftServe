//Homework 11 Task 1
function getPromise(massage, delay) {
    return new Promise((resolve, reject) => {
      if (typeof massage !== 'string') {
        reject(new Error("Повідомлення 'massage' не є текстовим!"));
      };
      if (typeof delay !== 'number' || !Number.isInteger(delay) || delay < 0) {
        reject(new Error("Значення 'delay' має бути цілим додатнім числом!"));
      }
      setTimeout(() => {
        resolve(massage);
  
      }, delay);
    });
  }
  getPromise("romjkl", 20.5).then((data) => {console.log(data);})
                     .catch((error) => {console.log(error);});
  
  //Homework 11 Task 2
  function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      //За допомогою if перевіряю чи кожен елемент масиву arr є числом
      //В умові використовую метод every до масиву arr. Всередині цього методу я застосовую cтрілочну функцію з параметром element.
      //Якшо всі element не є NaN то дана умова виконється
      if (arr.every((element) => !isNaN(element))) {
        //Створюється змінна result для якої викликається метод reduce() на масиві arr. 
        //Метод reduce застосовує функцію до аккумулятора sum та кожного елементу масиву indexArr
        // та повертає кінцевий результат. В даному випадку функція множить кожен елемент масиву на аккумулятор 
        //(початкове значення аккумулятора встановлено як 1) і повертає результат.
        const result = arr.reduce((sum, indexArr) => sum * indexArr, 1);
        resolve(result);
      } else {
          reject("Error! Incorrect array!");
      };
  
    });
  }
  calcArrProduct([3, 5, 6, 8]).then(result => console.log(result));
  calcArrProduct([3, 4 , "null", 9]).then(result => console.log(result))
  
  //Homework 11 Task 3
  new Promise(function (resolve, reject) {
    let number = prompt("Введіть число"); // Запитуємо у користувача number за допомогою prompt()
    if (isNaN(number)) {                   // Якщо користувач ввів не число - викликаємо reject()
      reject("Введено нечислове занчення");
    } else {                               // Якщо користувач ввів число- викликаємо resolve(number)
         resolve(number);               
    }
  }).catch(function (error) {
    return new Promise(function (resolve, reject) {
       let number = prompt("Введіть число ще раз");// Запитуємо у користувача number, до тих пір, поки він його не введе
       if (isNaN(number)) {                   // Якщо користувач ввів не число - викликаємо reject()
      reject("Введено нечислове занчення");
    } else {                               // Якщо користувач ввів число- викликаємо resolve(number)
         resolve(number); // Після вводу числа - викликаємо resolve(number)
    }
  });
  }).then(function (result) {
    console.log('Введене число:', result);// Вивід number у консоль
  });
  
  //Homework 11 Task 4
  const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
  //Робимо функцію асинхронною
  async function showNumbers() {
    //За домогою циклу for виводимов консоль числа від 0 до 10 з випадковим інтервалом до 3 сек.
    for (let i = 0; i <= 10; i++) {
      await delay(i, Math.random() * 3000);
      console.log(i);
    } // your code with using delay(i, time)
  }
  showNumbers();
  
  