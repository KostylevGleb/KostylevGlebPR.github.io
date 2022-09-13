"use strict";
//Функции:
//1:Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
    if (age > 18) {
      return alert(true);
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }
  //checkAge(18);
                    
  function checkAge1(age) {
    if (age > 18) {
        alert(true);
    }
    return confirm('Родители разрешили?');
  }
  //checkAge1(19);
  //обе функции работают одинаково работают одинаково

  //2:Перепишите функцию, используя оператор '?' или '||'
  function checkAge2(age) {
    (age > 18) ? alert(true) : confirm('Родители разрешили?');
  }
  //checkAge2(19);
  function checkAge2(age) {
    (age > 18) || confirm('Родители разрешили?');
  }
  //checkAge2(18);

  //3:Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
  function min(a,b) {
    if(a < b) {
        return a;
    }else {
        return b;
    }
  }
  /*alert(min(2, 5));
  alert(min(3, -1));
  alert(min(1, 1));*/

  //4:Напишите функцию pow(x,n), которая возвращает x в степени n.
  function pow(x,n) {
    for(let i = 1; i < n; i++){
        x = x * x;
    }
    return x;
  }
  let x = prompt("Введите x:", '');
  let n = prompt("Введите n:", '');
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert(pow(x,n));
  }



