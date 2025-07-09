const x = { name: "ross", name: "kate" }
const t = JSON.parse(localStorage.getItem("skillhub"))

localStorage.setItem("skillhub", JSON.stringify({ ...t, name: "ross" }))
localStorage.setItem("skillhub", JSON.stringify({ name: "kate" }))
console.log(x)
