import { createContext, useContext } from "react"

const SkillhubContext = createContext()
const LearnProps = () => {
    const x = "apple"
    const y = "hp"
    return <SkillhubContext.Provider value={"bmw"}>
        <div>LearnProps</div>
        <Test data="skillhub" brand="dell" price={500} kahipn={x} y={y}>
            <button>hello</button>
        </Test>
    </SkillhubContext.Provider>
}

const Test = ({ data, brand, price, children, kahipn, y }) => {
    return <>
        <div>test</div>
        <div>{data} {brand} {price}</div>
        {children}
        <hr />
        <Demo y={y}>{kahipn}</Demo>
    </>
}

const Demo = ({ children, y }) => {
    const result = useContext(SkillhubContext)
    console.log(children)
    return <>
        <div>demo</div>
        <h1>{y}</h1>
        <h1>{result}</h1>
    </>
}

export default LearnProps