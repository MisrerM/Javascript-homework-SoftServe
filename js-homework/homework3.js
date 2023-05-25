//Homework 3 Task 1
function compact(arr) {
    let result = [];
    for (let value of arr) {
      if (result.indexOf(value) === -1) {
        result.push(value);
      }  
    } 
    return result;
  }
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2) 
  //Це інший спосіб. Напевно що ним більше користуються на практиці...?
  /* function compact(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  }
  
  */
  
  //Homework 3 Task 2
  
  function createArray(start, end) {
    let newArray = [];
    for (let i = start; i <= end; i++) {
      newArray.push(i);
    }
    return newArray;
  }
  let anyArr = createArray(2, 9);
  console.log(anyArr);
  
  //Homework 3 Task 3
  
  function numbers(a, b) {
    for (let i = a; i <= b; i++) {
      for (let n = 0; n < i - a + 1; n++) {
        console.log(i);
      }
    }
  }
  numbers(2, 8);
  
  //Homewor 3 Task 4
  
  function randArray(k) {
    const resultNamber = [];
    for (let i = 0; i < k; i++) {
      let randomNamber = Math.floor(Math.random() * 500) + 1;
      resultNamber.push(randomNamber);
    }
    console.log(resultNamber)
  }
  randArray(5);
  
  //Homework 3 Task 5
  
  function stringNum(arrr) {
    let numbers = [];
    let string = [];
    for (let element of arrr) {
      if (typeof element === 'string') {
        string.push(element);
      } else if (typeof element === 'number') {
        numbers.push(element);
      } else if (Array.isArray(element)) {
        for (let investElement of element) {
          if (typeof investElement === 'string') {
            string.push(investElement);
          } else if (typeof investElement === 'number') {
            numbers.push(investElement);
          }
        }
      }
    }
    return [numbers, string];
  }
  let  arrr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  let arrrNew = stringNum(arrr);
  console.log(arrrNew);
  //Homework 3 Task 6,7 - необовязкові до виконання, оскільки повторються з попереднім Д/з
  
  //Homework 3 Task 8
  let hourIf = new Date().getHours();
  if (hourIf >= 23 || hourIf < 5) {
    alert("Доброї ночі");
  } else if (hourIf >= 5 && hourIf < 11) {
    alert("Доброго ранку");
  } else if (hourIf >= 11 && hourIf < 17) {
    alert("Доброго дня");
  } else {
    alert("Доброго вечора")
  }
  
  let hourSwitch = new Date().getHours();
  let hello;
  switch (true) {
    case (hourSwitch >=23 || hourIf < 5):
      hello = "Доброї ночі";
      break;
    case (hourSwitch >= 5 && hourSwitch < 11):
      hello = "Доброго ранку";
      break;
    case (hourSwitch >= 11 && hourSwitch < 17):
      hello = "Доброго дня";
      break;
    default:
      hello = "Доброго вечора"
  }
  console.log(hello)