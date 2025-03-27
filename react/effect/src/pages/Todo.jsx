
// axios
import { useState } from "react"

const Todo = () => {
    const [task, setTask] = useState("")
    const [notes, setNotes] = useState([])
    const handleAdd = () => {
        setNotes([...notes, task]) // push
    }
    const handleRemove = (arg) => {
        setNotes(notes.filter(item => item !== arg))
    }
    return <>
        <input type="text" onChange={e => setTask(e.target.value)} />
        <button onClick={handleAdd}>add</button>

        {
            notes.map(item => <div className="alert alert-success">
                {item}
                <button onClick={e => handleRemove(item)} type="button" class="btn btn-danger">delete</button>
            </div>)
        }
    </>
}

export default Todo