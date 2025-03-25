let x
const test = (n1) => { x = n1 }
const useState = (arg) => {
    x = arg
    return [x, test]
}

const [count, setCount] = useState(50)
console.log(count)
setCount(20)
console.log(x)

