//Homework 5 Task 1
class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
    setCenter(x, y) {
      this.x = x;
      this.y = y;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    area() {
      return Math.PI * this.r ** 2;
    } 
    
    getLength() {
      
      return 2 * Math.PI * this.radius ;
      
    }
    static lengthRadius(radius) {
      return 2 * Math.PI * radius;
    }
    clone () {
      return new Circle(this.x, this.y, this.radius);
    }
    static coordinatesCenterRadius(x, y, radius) {
      const circle = new Circle();
      circle.setCenter(x, y);
      circle.setRadius(radius);
      return circle;
    }
    getpointInside(x, y) {
      const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
      return distance <= this.radius;
    }
    toString () {
      return `Circle with center (${this.x}, ${this.y}, and radius ${this.radius})`
    }
    
  }
  //Homework 5 Task 2
  function propsCount(currentObject) {
    const properties = Object.keys(currentObject);
    return properties.length;
  }
  
  // Приклад використання функції
  const obj = { 
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  const count = propsCount(obj);
  console.log(count); // Виведе: 3
   
  
  //Homework 5 Task 3
  class Person {
   constructor(name, surname) {
    this.name = name;
    this.surname = surname;
   }
   showFullName() {
    console.log(`${this.name} ${this.surname}`);
   }
  }
  class Student extends Person {
    constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    }
    showFullName(midleName) {
      super.showFullName;
      this.midleName = midleName;
      console.log(`${this.name} ${this.surname} ${midleName}`);
    }
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      if (course < 1 || course > 6) {
        throw new Error("Невірно введений параметр year")
      };
      console.log(course);
    }
  }
  const student1 = new Student("Petro", "Petrenko", 2013);
  student1.showFullName("Petrovych");
  try {
    console.log("Current course: " + student1.showCourse());
  } catch (error) {
    console.error(error.message);
  };
  const person = new Person('John', 'Doe');
  person.showFullName();
  
  //Homework 5 Task 4
  
  class Marker {
    constructor(color, levelInk) {
      this.color = color;
      this.levelInk = levelInk;
    }
  
    print(text) {
      const words = text.split(" "); // Розбиваємо рядок на окремі слова
  
      let printedText = "";
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
  
        // Проходимо по кожному символу в поточному слові
        for (let j = 0; j < word.length; j++) {
          const symbol = word[j];
  
          // Перевіряємо, чи символ не є пробілом і чи ще є чорнило в маркері
          if (symbol !== " " && this.levelInk > 0) {
            printedText += symbol; // Додаємо символ до виведеного тексту
            this.levelInk -= 0.005; // Віднімаємо чорнило від рівня чорнила маркера
          } else {
            break; // Якщо зустріли пробіл або чорнило закінчилося, перериваємо цикл
          }
        }
  
        printedText += " "; // Додаємо пробіл між словами
      }
  
      console.log(printedText); // Виводимо текст 
    }
  
    checkLevelInk() {
      console.log(`Ink level: ${this.levelInk}`);
    }
  }
  
  class RefillableMarker extends Marker {
    refill() {
      this.levelInk = 1;
      console.log("Marker refilled.");
    }
  }
  
  const marker1 = new Marker("blue", 0.5);
  marker1.print("Hello JS!");
  
  const marker2 = new RefillableMarker("red", 0.7);
  marker2.print("Good night)");
  marker2.refill();
  marker2.print("I'm happy)))");
  marker2.checkLevelInk();
  
  //Homework 5 Task 5
  
  class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    }
    showSalary() {
       const salary = this.dayRate * this.workingDays;
       console.log(`Salary of ${this.fullName} is ${salary}`)
    }
    showSalaryWithExperience() {
      const salaryWithExperience = this.dayRate * this.workingDays * this._experience;
      console.log(`Salary of ${this.fullName} with experience is ${salaryWithExperience}`);
    }
    get experience() {
      return this._experience;
    }
    set experience(value) {
      this._experience = value;
    }
    
  }
  let workerM = new Worker("Mykailo Romaniuk", 1000, 22);
  console.log("Current experience:", workerM.experience);
  workerM.experience = 1.5;
  console.log("New experience:", workerM.experience);
  
  let worker1 = new Worker("Jon Trawolta", 2100, 20);
  let worker2 = new Worker("Liam Nison", 2300, 19);
  let worker3 = new Worker("Jake Jilinkhol", 3100, 23);
  worker1.showSalary();
  worker2.showSalary();
  worker3.showSalary();
  
  worker1.experience = 1.6;
  worker2.experience = 1.8;
  worker3.experience = 1.4;
  let workers1 = [worker1, worker2, worker3];
  workers1.sort((a,b) => a.experience - b.experience);
  for (let worker of workers1) {
    worker.showSalary();
  }
  //Динамічне сортування
  function sortWorkersByExperience(workers) {
    return workers.sort((a, b) => a.experience - b.experience);
  }
  let workers = [
    new Worker("Ted Lasso", 3500, 21),
    new Worker("Harry Poter", 1001, 30),
    new Worker("Din Winchester", 2222, 29),
  ];
  const sortedWorkers = sortWorkersByExperience(workers);
  sortedWorkers.forEach(function(worker) {
    console.log(`${worker.fullName}:`);
    worker.showSalaryWithExperience();
  });