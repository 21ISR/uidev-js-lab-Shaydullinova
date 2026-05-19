const nums = [4, 5, 3, 5, 2, 4, 5, 3]
const avg = nums.reduce((acc, n) => acc + n, 0) / [4, 5, 3, 5, 2, 4, 5, 3].length.toFixed(2)
console.log("1. Средний балл студента:", avg)

const grays = [4, 5, 3, 5, 2, 4, 5, 3]
const filter = nums.filter(n => n > 3).map(n => `Оценка: ${n}`)
console.log("2. Оценки выше 3:", filter); 


console.log("3. Отсортированные фрукты:", ["банан", "яблоко", "вишня", "абрикос", "груша"].sort().join(", ")); 


const products = [
  { name: "Ноутбук", price: 75000 }, { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 }, { name: "Клавиатура", price: 3500 }, { name: "Наушники", price: 8000 }
];
console.log("4. Дешевые товары:", products.filter(element => element.price < 10000));
console.log("Названия товаров:", products.map(product => product.name));
console.log("Суммарная стоимость:", products.reduce((acc, p) => acc + p.price, 0)); 


console.log("5. Есть ли число > 40?:", [12, 45, 7, 33, 18].some(n => n > 40)); 
console.log("Все ли числа > 5?:", [12, 45, 7, 33, 18].every(n => n > 5));