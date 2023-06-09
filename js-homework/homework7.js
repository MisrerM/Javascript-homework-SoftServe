//Homework 7 Task 1

let newWindow = window.open("http://127.0.0.1:5500/", "myhtml", "width=300,height=300,top=200,left=150");
setTimeout (function(){
    newWindow.resizeTo(500, 500);
    setTimeout (function(){
        newWindow.moveTo(200, 200);
    }, 2000);
    setTimeout (function(){
        newWindow.close();
    }, 2000);
}, 2000);

//Homework 7 Task 2

//Створюю змінні для для майбутньої події
const textP = document.querySelector("#text");
const btn = document.querySelector("#btn");
//Створюю подію
btn.addEventListener('click', function() {
    textP.style.color = 'orange';
    textP.style.fontSize = '20px';
    textP.style.fontStyle = 'Comic Sans MS'
})

//Homework 7 Task 3

const body = document.querySelector('body');
//Створюємо змінні кнопок та лінки
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const link = document.querySelector('a');
//Створюємо поді\ для кожної кнопки та лінки
btn1.addEventListener('click', function() {
    body.style.backgroundColor = 'blue';
});
btn2.addEventListener('dblclick', function() {
    body.style.backgroundColor = 'pink';
})
btn3.addEventListener('mousedown', function() {
    body.style.background = 'brown';
});
btn3.addEventListener('mouseup', function() {
    body.style.background = 'white';
});
link.addEventListener('mouseover', function(){
    body.style.background = 'yellow';
});
link.addEventListener('mouseout', function(){
    body.style.background = 'white';
});

//Homework 7 Task 4

//Створюємо потрбні нам змінні
const selectedValue = document.querySelector('#listElements');
const deleteBtn = document.querySelector('#deleteBtn');
//Створюємо подію для видалення елемента зі списку, 
deleteBtn.addEventListener('click', function(){
   if (selectedValue.selectedIndex >= 0 && selectedValue.selectedIndex < selectedValue.options.length) {
    selectedValue.remove(selectedValue.selectedIndex);
   }
})

//Homework 7 Task 5

//Створюємо потрібнe нам для подій змінну
const btnTask5 = document.querySelector(".btnTask5");
//Створюємо самі події 
btnTask5.addEventListener('click', function() {
    alert("I was pressed!");
});
btnTask5.addEventListener('mouseover', function() {
    console.log("Mouse on me!");
});
btnTask5.addEventListener('mouseout', function() {
    console.log("Mouse is not on me!");
})