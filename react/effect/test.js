/*
    primitive   number string boolean
    non primitive => array object function
*/

const arr = ["dell"]
const x = [...arr, "hp"]
// x.push("test")
console.log(x)
// console.log(arr)

const notes = ["t1", "t2", "t3"]
// const z = notes.findIndex(item => item === "t2")
// const z = notes.map(item => `<div>${item}</div>`)
const z = notes.filter(item => item === "t1")
console.log(z)
console.log(notes)


const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const b = a.filter(item => item < 5)
console.log(b)




