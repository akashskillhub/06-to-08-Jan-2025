const Learn_prop_drilling = () => {
    const brand = "skillhub"
    return <>
        <div>Learn_prop_drilling</div>
        <hr />
        <Child data={brand}></Child>
    </>
}
// state

const Child = ({ data }) => {
    return <>
        <h1>Child</h1>
        <hr />
        <GrandChild test={data}></GrandChild>
    </>
}

const GrandChild = ({ test }) => {
    return <>
        <h1>GrandChild</h1>
        <h1>{test}</h1>
    </>
}
export default Learn_prop_drilling