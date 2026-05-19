//1 задание
const book = {
    title: "Мастер и Маргарита",
    author: "Булгаков М.А.",
    year: 1967,
    pages: 480,
    available: true,
    info() {
        return `"${this.title}", "${this.author}", ${this.year} г., ${this.pages} стр.`;
    }
}
console.log("1.", book.info())


//2 задание
const { title, author } = book
console.log("2.", title)
console.log(author)

const { rating = 0 } = book
console.log(rating)


//3 задание
const students = [
    { name: "Анна", grade: 4.8, passed: true },
    { name: "Борис", grade: 2.9, passed: false },
    { name: "Вера", grade: 3.5, passed: true },
    { name: "Григорий", grade: 4.1, passed: true },
    { name: "Дарья", grade: 2.5, passed: false },
]

console.log("Сдали экзамен:", students.filter(s => s.passed).map(s => s.name))
console.log("Студенты с оценкой > 4.5:", students.find(s => s.grade > 4.5))
console.log("Средний балл:", students.reduce((acc, s) => acc + s.grade, 0) / students.length)

//4 задание
function mergeUsers(user1, user2) {
    return { ...user1, ...user2 };
}

const u1 = { name: "Иван", age: 20, city: "Казань" };
const u2 = { name: "Иван Petrov", email: "ivan@mail.ru", city: "Москва" };

const result = mergeUsers(u1, u2);
console.log("Результат:", result);


//5 задание
function countByField(arr, field) {
    const counter = {}
    for (const obj of arr) {
        const value = obj[field]

        if (counter[value] === undefined) {
            counter[value] = 1
        } else {
            counter[value] += 1
        }
    }

    return counter
}

console.log("Подсчет по полю 'passed':", countByField(students, "passed"));
