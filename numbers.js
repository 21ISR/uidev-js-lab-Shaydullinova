const temperature = 36.6789
console.log("Округленное значение температуры:", temperature.toFixed(1))

const a = 17
const b = 5
console.log("Целочисленное деление:", Math.floor(a/b))
console.log("Остаток от деления:", a%b)

console.log("Случайное число от 1 до 10:", Math.floor(Math.random() * 10) + 1)

console.log("Является ли '100' / 5 не числом?:", isNaN("100" / 5))
console.log("Является ли 'сто' / 5 не числом?:", isNaN("сто" / 5)) 

console.log("Максимальное число:", Math.max(14, -3, 77, 0, -100, 42)) 
console.log("Минимальное число:", Math.min(14, -3, 77, 0, -100, 42))