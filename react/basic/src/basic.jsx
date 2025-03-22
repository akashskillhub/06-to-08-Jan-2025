// jsx => JavaScript XML 
// JSX (JavaScript XML) is a syntax extension for JavaScript
const Basic = () => {
    const show = (arg) => {
        console.log("clicked", arg)
    }
    const x = "dell"
    const price = 500
    const test = false
    const arr = ["hp", "apple"]
    const obj = { name: "ross" }
    return <div>
        <h1>basic jsx</h1>
        <p>hello</p>
        <h1>{x}</h1>
        <h1>{price}</h1>
        <h1>{test}</h1>
        <h1>{arr}</h1>
        <h1>{obj.name}</h1>
        <button onClick={show}>click me</button>
        <button onClick={() => show("hp")}>click me</button>
        <button onClick={() => console.log("clicked again")}>click me</button>
    </div>
}

export default Basic