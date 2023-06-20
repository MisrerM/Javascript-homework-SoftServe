//Homework 10 Task 1
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
  };
  
  let { first: f, third: x, fifth: fifth = "Name №5" } = names;
  console.log(f);
  console.log(x);
  console.log(fifth);
  
  //Homework 10 Task 2
  let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
  };
  let { names: [, name2, , name4], ages: [, age2, , age4] } = data;
  console.log(name2); // "Tom"
  console.log(age2); // 24
  console.log(name4); // "Bob"
  console.log(age4); // 26
  
  //Homework 10 Task 3
  function mul(...args) {
    //Спочатку створюю змінні
    let rezult = 1;
    //Змінна hasNumber,має початкове значення false і використовується для відстеження наявності числових параметрів.
    let hasNumber = false;
    //Створюємо цикл for 
    //Де ми проходимося по масиву args, в якому при виконанні умови що є числові значення, ми виконуємо їхнє множення
    //Якщо зустрічається числовий параметр, ми встановлюємо hasNumber на true
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === 'number') {
        rezult *= args[i];
        hasNumber = true;
      }
    }
    //Після циклу ми перевіряємо, чи є hasNumber true, і повертаємо result, якщо так, або 0, якщо hasNumber є false.
    return hasNumber ? rezult : 0;
  }
  
  console.log(mul(1, "str", 2, 3, true)); // 6
  console.log(mul(null, "str", false, true)); // 0
  
  //Homework 10 Task 4
  let server = {
    data: 0,
    convertToString: function(callback) {
      callback(() => this.data + "");
    }
  };
  let client = {
    server: server,
    result: "",
    calc: function(data) {
      this.server.data = data;
      this.server.convertToString(this.notification());
    },
    notification: function() {
      return (callback) => {
        this.result = callback();
      };
    }
  };
  
  client.calc(123);
  console.log(client.result); // "123"
  console.log(typeof client.result); // "string"
  
  //Homework 10 Task 5
  function mapBuilder(keysArray, valuesArrays) {
    keysArray.length === valuesArrays.length;
    let map = new Map (keysArray.map((key, index) => [key, valuesArrays[index]]));
    return map;
  }
  
  let keys = [1, 2, 3, 4];
  let values = ["div", "span", "b", "i"];
  let map = mapBuilder(keys, values);
  console.log(map.size); // 4
  console.log(map.get(2)); // "span"
  
  //Homework 10 Task 6
  