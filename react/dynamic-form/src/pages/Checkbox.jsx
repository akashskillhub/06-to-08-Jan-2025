import { useState } from "react"

const Checkbox = () => {
    const [skills, setSkills] = useState()

    const handleCheckbox = e => {
        const { value, checked } = e.target
        if (checked) {
            // push
            if (skills) {
                setSkills([...skills, value])
            } else {
                setSkills([value])
            }
        } else {
            // remove
            setSkills(skills.filter(item => item !== value))
        }
    }
    return <>
        <h1>{skills}</h1>
        <div>
            <input type="checkbox" id="html" value="html" onChange={handleCheckbox} />
            <label htmlFor="html">html</label>
        </div>
        <div>
            <input type="checkbox" id="css" value="css" onChange={handleCheckbox} />
            <label htmlFor="css">css</label>
        </div>
        <div>
            <input type="checkbox" id="js" value="js" onChange={handleCheckbox} />
            <label htmlFor="js">js</label>
        </div>
    </>
}

export default Checkbox