import { toast } from 'react-toastify'

const LearnToast = () => {
    return <>
        <hr />
        <button onClick={e => toast.success("success")}>success</button>
        <button onClick={e => toast.warning("warning")}>warning</button>
        <button onClick={e => toast.error("error")}>error</button>
        <button onClick={e => toast.info("info")}>info</button>
    </>
}

export default LearnToast