import React from 'react'
import { useCreateNoteMutation, useGetNotesQuery, useRemoveNoteMutation } from '../redux/note.api'

const Notes = () => {
    const { data } = useGetNotesQuery()
    const [addNote] = useCreateNoteMutation()
    const [removeNote] = useRemoveNoteMutation()
    return <>

        <button onClick={e => addNote({ task: "fake task", desc: "fake desc" })}>add</button>
        {
            data && <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Desc</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr>
                            <td>{item._id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>
                                <button>update</button>
                                <button onClick={e => removeNote(item._id)}>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }

    </>
}

export default Notes