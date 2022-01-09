// Задача 2. Сделать каждый эл-т массива с заглавной буквы
let massiv2 = ["a", "b", "c", "hello", "world"];
const UpperCaseLttrs = (value2) => {
  let arr2 = [];
  for (let k = 0; k < value2.length; k++) {
    arr2.push(value2[k].toUpperCase());
  }
  return arr2;
};
console.log(UpperCaseLttrs(massiv2));

// Задача 3. Написать функцию, которая делает первую букву в каждом элементе массива заглавной, а не строчные элементы (числа, булеаны, объекты и т.д.) удаляет
let massiv3 = [0, "hello", "world", 45, 74, false, "winter", undefined];
let NewMassiv3 = massiv3.filter((item) => {
  return typeof item == "string";
});

const UpperCaseFun3 = (value) => {
  let arr = [];
  for (let r = 0; r < value.length; r++) {
    arr[r] = value[r].substring(0, 1).toUpperCase() + value[r].substring(1);
  }
  return arr;
};
console.log(UpperCaseFun3(NewMassiv3));

//Задача 4.Написать функцию, которая округляет все числовые значения в массиве в большую сторону, а не числовые элементы удаляет.
let massiv4 = [0.001, "hello", "world", 45.78, 74.33, false, 1.7, undefined];
let NewMassiv4 = massiv4.filter((item2) => {
  return typeof item2 == "number";
});

NewMassiv4 = NewMassiv4.map((each_element) => {
  return (each_element = Math.ceil(each_element));
});
console.log(NewMassiv4);

// Задача 6. Функция которая разворачивает массив в обратном порядке
let massiv6 = [1, 2, 3, 4, 5];
const Reverse = (value6) => {
  for (let i = 0; i < value6.length - 1; i++) {
    value6.splice(i, 0, value6.pop());
  }
  return value6;
};
console.log(Reverse(massiv6));

// Задача 7. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
let massin7 = [0, 1, false, 2, undefined, "", 3, null];
console.log(massin7.filter((el) => el));

//Задача 8. Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
const arrayClone = (arr) => {
  return arr.slice(0);
};
let arrClone = arrayClone(vegetables);
console.log(arrClone);

// Задача 9. Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
let vegetables2 = ["Капуста", "Репа", "Редиска", "Морковка"];
console.log(vegetables2.join());

// Задача 11.Напишите функцию, которая убирает повторяющиеся значения.
let massiv8 = [1, 2, 4, 1, 5, 6, 6, 7, 10, 10, 10];
const doSmth = (arr3) => {
  let arr4 = [...new Set(arr3)];
  return arr4;
};
console.log(doSmth(massiv8));

// Задача 12. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
const arr_1 = [1, 2, 3, 4];
const arr_2 = [1, 2, 3, 4];
const arr_3 = [1, 2, 3, 5];
const arr_4 = [1, 2, 3, 4, 5];
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  const result0 = firstArray.map((el, id) => secondArray[id] === el);
  return !result0.includes(false);
};
console.log(isEqual(arr_1, arr_2));
console.log(isEqual(arr_1, arr_3));
console.log(isEqual(arr_1, arr_4));

// Задача 14. Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые n элементов массива.
let massiv9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const getFirst = (array, n) => {
  return array.slice(0, n);
};
console.log(getFirst(massiv9, 8));

// Задача 15. Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние n элементов массива.
let massiv10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const getLast = (array, n2) => {
  return array.slice(-n2);
};
console.log(getLast(massiv10, 4));

// Задача 16. Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.
const sumOfSquares = (array2) => {
  let sum = 0;
  for (let i2 = 0; i2 < array2.length; i2++) {
    sum += Math.pow(array2[i2], 2);
  }
  return sum;
};
console.log(sumOfSquares([1, 2, 3, 4, 5]));

// Задача 17.Напишите код, который определяет сумму и произведение значений массива.
let massiv11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SummaFun = (array3) => {
  let summa = 0;

  for (let i3 = 0; i3 < array3.length; i3++) {
    summa += array3[i3];
  }
  return summa;
};

const ProductFun = (array4) => {
  let product = 1;
  for (let i4 = 1; i4 < array4.length; i4++) {
    product = product * array4[i4];
  }
  return product;
};
console.log(
  `Сумма: ${SummaFun(massiv11)}, Произведение: ${ProductFun(massiv11)}`
);

//Задача 18. Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.
const removeItem = (arr4, num) => {
  let i5 = 0;
  while (i5 < arr4.length) {
    if (arr4[i5] === num) {
      arr4.splice(i5, 1);
    } else {
      ++i5;
    }
  }
  return arr4;
};
console.log(removeItem([3, 5, 7, 8, 5], 5));

//Задача 19. Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.
var massiv12 = ["a", "b", "c", "d", "e"];
const moveElement = (arr5, from, to) => {
  arr5.splice(to, 0, arr5.splice(from, 1)[0]);
  return arr5;
};
console.log(moveElement(massiv12, 3, 1));

// Задача 20.Напишите функцию generateRange(start, end), которая генерирует массив заданной длины len, заполненный целыми числами. Каждое последующее число в массиве должно быть больше предыдущего на единицу.
const generateNumbers = (start, len) => {
  let arr6 = new Array(len);
  for (let i6 = 0; i6 < len; i6++, start++) {
    arr6[i6] = start;
  }
  return arr6;
};
console.log(generateNumbers(0, 5));
console.log(generateNumbers(-5, 4));

// Задача 21. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
let vegetables4 = ["Капуста", "Репа", "Редиска", "Морковка"];
let vegetableLength = vegetables4.map((lengthVgtbl) => lengthVgtbl.length);
// alert(vegetableLength);

// Задача 23.
let str = "Каждый охотник желает знать, где сидит фазан.";
const firstLetters = (letters, i7, arr7) => {
  if (i7 == 0) {
    return true;
  } else {
    return arr7[i7 - 1] === " ";
  }
};
let array5 = [].filter.call(str, firstLetters);
console.log(array5);

// Задача 24. Напишите код, объединяющий три массива цифр.
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const getArr = (a2, b2, c2) => {
  const NewMas = a2.concat(b2, c2);
  const NewMas2 = NewMas.reverse();
  return NewMas2;
};
console.log(getArr(a, b, c));

//Задача 26*. Напишите функцию, которая разделяет массив на части заданного размера.
let massiv13 = [1, 2, 3, 4, 5, 6, 7];

const chunk = (array5, size) => {
  let chunkArr = [];
  let i8 = 0;
  while (i8 < array5.length) {
    chunkArr.push(array5.slice(i8, size + i8));
    i8 += size;
  }
  return chunkArr;
};
console.log(chunk(massiv13, 2));
console.log(chunk(massiv13, 3));
