//Homework 4 Task 1

function sumSliceArray(arr, first, second) {
    try {
      if (!Array.isArray(arr)) {
        throw new Error('Перший аргумент має бути масивом.');
      } else if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('"first" та "second" аргументи мають бути числами.');
      } else if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
        throw new Error('Недійсні індекси.');
      } else {
        return arr[first] + arr[second];
      }
    } catch (error) {
      console.log("Сталася помилка", error.message);
    }
      
    }
    
    // Приклад використання функції з обробкою винятків
    try {
      const arr = "[1, 2, 3, 4, 5]";
      const result = sumSliceArray(arr, 3, 5);
      console.log('Результат:', result);
    } catch (error) {
      console.error('Сталася помилка:', error.message);
      const arr = [1, 2, 3, 4, 5];
      const result = sumSliceArray(arr, 3, 5);
      console.log('Результат без обробки помилки:', result);
    
    }
    
    //Homework 4 Task 2
    
    function checkAge() {
      try {
        const name = prompt("Введіть своє ім'я");
        const age = prompt("Введіть свій вік");
        const status = prompt("Введіть свій статус");
        if (age < 18 || age > 70) {
          throw new RangeError("Age was entered incorrectly");
        } else if (age === "") {
          throw new Error("The field is empty! Please enter your age");
        } else if (status !== "admin" && status !== "moderator" && status !== "user") {
          throw new EvalError("Invalid status! Please enter admin, moderator, or user.");
        } else if (isNaN(age)) {
          throw new TypeError("Invalid age value! Please enter a number.");
        } else {
          alert("You can watch the movie!");
        }
      } catch (error) {
        alert(`Error: ${error.name}\nDescription: ${error.message}`);
      }
    }
    checkAge(); 
    //Homework 4 Task 3
    
    function calcRectangleArea(width, height) {
    try {
      const square = width * height;
      if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error("It's not a number");
      } else {
        alert (square);
      }
    
    } catch (error) {
       console.log("Сталася помилка: ", error.message)
    }
    }
    calcRectangleArea(3, "4")
    
    //Homework 4 Task 4
    
    class MonthException {
      constructor(message) {
        this.name = "MonthException";
        this.message = message;
      }
    }
    function showMonthName(month) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      if (month >= 1 && month <= 12) {
        return months[month - 1];
      } else {
        throw new MonthException("Incorrect month number");
      }
    }
    try {
      console.log(showMonthName(2));
      console.log(showMonthName(22))
    } catch (error) {
      console.log(`${error.name} ${error.message}`);
    }
    
    //Homework 4 Task 5
    function showUser(id) {
      if (id < 0) {
        throw new Error("Вказаний вами id не може бути від'ємним: " + id);
      } else {
        return {id};
      }
    }
    
    function showUsers(ids) {
    const result = [];
    for (let id of ids) {
      try {
        let user = showUser(id);
        result.push(user);
      } catch (error) {
        console.log(error.message);
      }
      }
      return result;
    }
    const ids = [7, -12, 44, 22];
    const users = showUsers(ids);
    console.log(users);