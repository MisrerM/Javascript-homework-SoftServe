// Створюю функцію, яка виводить привітання в залежності від періоду доби та імя юзера
function greetingUser(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting;
    if (currentHour < 6) {
      greeting = "Good Night";
    } else if (currentHour < 10 && currentHour >= 6) {
      greeting = "Good Morning";
    } else if (currentHour >= 10 && currentHour < 16) {
      greeting = "Good Day";
    } else if (currentHour >= 16 && currentHour < 20) {
      currentHour = "Good Afternoon";
    } else {
      currentHour = "Good Evening";
    } 
    return `${greeting}, ${username}`;
  }
  // Прописую модуль, в який експортую вище записану функцію
  module.exports = {greetingUser};