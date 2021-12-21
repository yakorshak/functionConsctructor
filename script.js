/* Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств. */

function Calculator(){
   //read();
   this.read = function(){
     this.operand1 = prompt('введите 1');
     this.operand2 = prompt('введите 2');
   }
   //sum();
   this.sum = function(){
     return alert( +this.operand1 + +this.operand2 );
   }
   //mul();
   this.mul = () => {return alert( this.operand1 * this.operand2 )}; 
}



let calculation1 =  new Calculator();
calculation1.read();
calculation1.sum();
calculation1.mul();

console.log(calculation1);

/* Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue. */

