const arr = ["dell", "hp", "apple"]

// arr.splice(1, 1)
// console.log(arr)

// const x = arr.findIndex(item => item === "apple")
// const x = arr.map(item => `<h1>${item}</h1>`)
const x = arr.filter(item => item !== "hp")
console.log(x)
console.log(arr)
