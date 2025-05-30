const x = { name: "dell" } // non primitive
const y = x
// const y = { name: "dell" }
// console.log(x == y)
y.name = 55
console.log(y)
console.log(x)

