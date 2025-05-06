const tbtn = Math.ceil(10 / 3) // 3.3 => 4  ceil c, 3 => floor
// const x = Array(tbtn) // non itrable
const x = [...Array(tbtn).keys()] //  itrable
console.log(x)
