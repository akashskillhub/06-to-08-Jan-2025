import React, { useState } from 'react'
// "key" prop.
// value form dynamic form

// bootstrap
// mui
// daisy / shadcn
const useDynamicForm = (config) => {
    const [formValue, setFormValue] = useState({})

    const handleChange = e => {
        const { value, name, checked, type } = e.target
        if (type === "file") {

        } else if (type === "checkbox") {
            if (checked) {
                // push
                if (formValue[name]) {
                    setFormValue({ ...formValue, [name]: [...formValue[name], value] })
                } else {
                    setFormValue({ ...formValue, [name]: [value] })
                }
            } else {
                // remove
                setFormValue({ ...formValue, [name]: formValue[name].filter(item => item !== value) })
            }
        } else {
            setFormValue({ ...formValue, [name]: value })
        }
    }
    return <>
        {
            config.map((item, i) => {
                switch (item.type) {
                    case "checkbox":
                    case "radio": return <div key={item.name}>
                        {item.op.map(o => <div key={o}>
                            <input onChange={handleChange} value={o} type={item.type} name={item.name} id={o} />
                            <label htmlFor={o}>{o}</label>
                        </div>)}
                    </div>

                    case "textarea": return <textarea key={item.name} placeholder={`please enter ${item.name}`}></textarea>

                    case "select": return <select key={item.name}>
                        <option value="">choose {item.name}</option>
                        {item.op.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    // 👇 OR condition in switch case
                    case "email":
                    case "password":
                    case "date":
                    case "number":
                    case "file":
                    case "color":
                    case "range":
                    case "time":
                    case "text": return <input
                        name={item.name}
                        onChange={handleChange}
                        key={item.name}
                        type={item.type}
                        placeholder={`please enter ${item.name}`} />

                }
            })
        }
    </>

}

export default useDynamicForm