const history = [
    { amount: 50000, category: "salary", type: "credit" },
    { amount: 5000, category: "petrol", type: "debit" },
    { amount: 5000, category: "pizza", type: "debit" },
    { amount: 2000, category: "rent", type: "credit" },
]

console.log(history.reduce((total, item) => total + item.amount, 0))

const x = history
    .filter(item => item.type === "debit")
    .reduce((total, item) => total + item.amount, 0)
const y = history
    .filter(item => item.type === "credit")
    .reduce((total, item) => total + item.amount, 0)
console.log(y - x)



// console.log(history.reduce((total, item) => {
//     if (item.type === "debit") {
//         total + item.amount
//     }
//     return
// }, 0))

// reduce
let total = 0
for (const item of history) {
    if (item.type === "debit") {
        total += item.amount
    }
}
console.log(total)


const arr = [1, 2, 3]
let sum = 0
for (const item of arr) {
    sum += item // sum = 1 + 2
}
console.log(sum);

console.log(arr.reduce((sum, item) => sum + item, 0))

