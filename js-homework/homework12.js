// Homework 12 Task 1
// Створюю змінні для модулів
const http = require("http");
const os = require("os");
const path = require("path"); 
// Створюю Nose.js http сервер
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-type": "text/html"});
  response.write('<h1>System information</h1>');
  // Створюю змінні що містить ім’я поточного користувача операційної системи, 
  // тип операційної системи, час роботи системи в хвилинах 
  const userInfo = os.userInfo();
  const type = os.type();
  const uptime = os.uptime();
  // Створюю змінні, що містять поточну робочу директорію і назву файлу сервер
  const currentDirectory = path.dirname(__filename);
  const serverFileName = path.basename(__filename);
  // Додаю інформацію до відповіді сервера
  response.write(`
  <p>Ім'я поточного користувача: ${userInfo}</p>
  <p>Тип операційної системи: ${type}</p>
  <p>Час роботи системи в хвилинах: ${Math.floor(uptime/60)}</p>
  <p>Поточна робоча директорія: ${currentDirectory}</p>
  <p>Назва файлу сервера: ${serverFileName}</p>`);
  response.end();

}).listen(5000);
console.log("Server is running on port 5000");

// Homewor 12 Task 2

// Тепер переходимо до створення нашого сервера
const http1 = require("http");
const personalModule = require("./personalmodule.js");
http1.createServer((request, response) => {
  const username = 'oivaniu';
  const greeting = personalModule.greetingUser(username);
  const currentTime = new Date().toString();
  response.writeHead(200, {"Content-type": "text/html"});
  response.write(`Date of request: ${currentTime}<br>${greeting}`);
  response.end();
}).listen(8000);
console.log("Server is running on port 8000");

