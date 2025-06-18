// console.log(process)
// import { } from "" // ES6 module

// common js

// CLI
const fs = require("fs")
if (process.argv[2] === "--c") {
    fs.writeFileSync(process.argv[3], "hello from nodejs")
} else if (process.argv[2] === "--d") {
    fs.unlinkSync(process.argv[3])
}

// console.log(process.argv)