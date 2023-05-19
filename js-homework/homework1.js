
// Homework 1 Task 2
console.log("Romaniuk");
// Homework 1 Task 3
let peremoha = "FREEDOM";
let defeat = "slavery";
alert(peremoha);
alert(defeat);
defeat = peremoha;
console.log(peremoha);
console.log(defeat);
// Homework 1 Task 4
const misterM = {
    name: "Mykhailo",
    surname: "Romaniuk",
    age: 31,
    info: null,
    newInfo: undefined
};
// Homework 1 Task 5
let isAdult = confirm("You are 18 years old ?");
console.log(isAdult);
// Homework 1 Task 6
const firsName = "Mykhailo";
const lastName = "Romaniuk";
const studyGroup = "UA-1019";
const age = 31;
let merried = true;
console.log(typeof firsName);
console.log(typeof lastName);
console.log(typeof studyGroup);
console.log(typeof age);
console.log(typeof merried);
console.log(age, merried, firsName, lastName);
const war = null;
const y = undefined
console.log(war, y);
// Homework 1 Task 7
let login  = prompt("Please enter your login");
let aMail  = prompt("Please enter your a-mail");
let password  = prompt("Please enter your password");
let logText = "Dear User, your login is"
let aMailText = ", your a-mail is"
let passwordText = ", your password is"
console.log(logText, login, aMailText, aMail, passwordText, password);
// Homework 1 Task 8
const secMinute = 60;
const secHour = secMinute * 60;
const secDay = secHour * 24;
const secMonth = secDay * 31;
console.log(secHour, secDay, secMonth);
// Homework 1 Task ***
function findSection() {
    const ticketNumber = parseInt(document.getElementById("ticketNumber").value);
  
    if (ticketNumber >= 1 && ticketNumber <= 54) {
      let sectionNumber;
      let seatType;
      let bedType;
  
      if (ticketNumber <= 36) {
        sectionNumber = Math.ceil(ticketNumber / 4);
        seatType = "купейне";
        bedType = ticketNumber % 2 === 0 ? "верхнє" : "нижнє";
      } else {
        sectionNumber = Math.ceil((ticketNumber - 36) / 2);
        seatType = "бічне";
        bedType = ticketNumber % 2 === 0 ? "верхнє" : "нижнє";
      }
  
      document.getElementById("result").innerHTML =
        "Номер купе: " + sectionNumber +
        "<br>Тип місця: " + seatType +
        "<br>Тип ліжка: " + bedType;
    } else {
      document.getElementById("result").innerHTML = "Невірний номер місця";
    }
  }
  



