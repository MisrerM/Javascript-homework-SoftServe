//Homework 9
$(function() {
    //Task 1
    $("h2.head")
    $("h2.head").css("backgroundColor", "green");
    $("h2.head .inner").css("fontSize", "35px");
    
    //Task 2
    $('a[href^="https://"]').each(function() {
      $(this).attr("target", "_blank");
    });
  
    //Task 3
    //Знаходжу всі еелменти h3
    let h3 = $("h3");
    //Прохоходжуся методом each по h3
    h3.each(function() {
      //Знаходжу наступний div після h3
      let div = $(this).next('div');
      //Переміщую div перед h3
      $(this).before(div);
    })
  
    //Task 4
    //Оглошую змінні. Спочатку для всі елементів input з типом checkbox
    const checkboxes = $("input[type='checkbox']");
    //Створюю змінну що буде рахувати кількість вибраних чекбоксів
    let chengeCheckbox = 0;
    //Методом each проходимося по усіх checkboxes. Та встановлюємо disabled, якщо chengeCheckbox стає 3
    checkboxes.each(function() {
      $(this).change(function() {
        if (this.checked) {
          chengeCheckbox++;
          if (chengeCheckbox >= 3) {
            checkboxes.prop('disabled', true);
          }
        } else {
          chengeCheckbox--;
        }
      });
    });
    
    
  
  })