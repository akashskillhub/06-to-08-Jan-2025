const http = require("http")

// routing
// controller
// models

// express js
// django
// spring boot

const app = http.createServer((req, res) => {

    // console.log(req.url)
    // console.log(req.method)
    if (req.url === "/" && req.method === "GET") {
        //   database
        res.write("get response")
        res.end()
    } else if (req.url === "/todos" && req.method === "GET") {
        res.write("todo fetch success")
        res.end()
    } else if (req.url === "/" && req.method === "POST") {
        res.write("todo create success")
        res.end()
    }

})
app.listen(5000, console.log("server running..."))

// http://localhost:5000