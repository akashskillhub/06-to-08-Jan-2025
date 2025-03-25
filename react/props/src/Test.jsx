//      👇 component
const Test = () => {
    const brand = "dell"
    const arr = [10, 20, 30]
    const obj = { city: "london" }
    const handleClick = () => console.log("hello")
    const handleTest = (n1) => console.log(n1)

    return <>
        <div>Test</div>
        <h1>{brand}</h1>
        <p>{arr}</p>
        <h1>{obj.city}</h1>
        <button onClick={handleClick}>click me</button>
        <button onClick={() => console.log("hello again")}>click again</button>
        {/*              👇 callback function */}
        <button onClick={() => handleTest(500)}>click test</button>
    </>

}

export default Test