const body = {
    name: "ross",
    email: "john@gmail.com",
}

const password = body.name.split("").slice(0, 2).join("")
    + body.email.split("").slice(0, 2).join("")
console.log(password)

// const x = "john"
// console.log(x.split("").slice(0, 2).join(""))

// const arr = ["dell", "hp", "apple"]
// console.log(arr.join(""));

// arr.slice(1, 2) // apple
// arr.splice(1, 2)
