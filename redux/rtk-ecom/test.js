
const cart = [
    { id: 2, name: "moto", qty: 2, price: 500 },
    { id: 1, name: "poco", qty: 2, price: 1000 },
]

let sum = 0
for (const item of cart) {
    // sum = sum + (item.qty * item.price) // 1000 + 1000
    sum += (item.qty * item.price) // 1000 + 1000
}
console.log(sum);

const result = cart.reduce((sum, item) => sum + (item.qty * item.price), 0)
console.log(result)



// const payload = 1
// const result = cart.findIndex(item => item.id === payload)
// console.log(result)
// cart[result].qty++
// // result.qty++
// // console.log(result)
// console.log(cart)


// let x = "5", y = "2"
// // console.log(x + y)
// console.log(x * y)
console.log(25000 / 100 * 5)
console.log(25000 * 5 / 100)



