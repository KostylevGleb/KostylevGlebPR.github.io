
//1:Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }
  //alert(sumTo(4));


//2:Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n-1);
}
//alert(factorial(5));

//3:Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

/*alert(fib(3));
alert(fib(7));
alert(fib(77));*/

//4:
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  //циклы
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  
  }
  //printList(list);
  //рекурсия
  function printList(list) {

    alert(list.value); // выводим текущий элемент
  
    if (list.next) {
      printList(list.next); // делаем то же самое для остальной части списка
    }
  
  }
  
  printList(list);

  //в обратном порядке
  function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }
  printReverseList(list);