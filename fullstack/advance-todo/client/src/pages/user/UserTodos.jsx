import React from 'react'
import UserNavbar from '../../componant/user/UserNavbar'
import { useComplateTodoMutation, useViewTodoQuery } from '../../redux/Api/user.api'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Loading from '../../share/Loading'

const UserTodos = () => {
    const { data } = useViewTodoQuery()
    const [complete, { isSuccess, isLoading }] = useComplateTodoMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("todo complete")
        }
    }, [isSuccess])

    if (isLoading) {
        return <Loading />
    }
    return <>
        <UserNavbar />
        {
            data && <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Taks</th>
                        <th>Desc</th>
                        <th>Priority</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.result.map(item => <tr>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>{
                                item.complete
                                    ? "Complete"
                                    : <button
                                        type="button"
                                        class="btn btn-success"
                                        onClick={e => complete(item)}>Mark Complete</button>
                            }</td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>

}

export default UserTodos