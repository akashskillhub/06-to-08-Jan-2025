const Home = () => {
    const handleAddLocalStorage = () => {
        localStorage.setItem("test", "john")
    }
    const handleRemoveLocalStorage = () => {
        localStorage.removeItem("test")
    }
    const handleGetLocalStorage = () => {
        const result = localStorage.getItem("test")
        console.log(result)
    }
    // local storage -------------------- 
    // ~5mb
    // per domain + port
    // unlimited

    // session --------------------
    // ~5mb
    // per tab
    // until tab open


    const handleAddSessionStorage = () => {
        sessionStorage.setItem("test", "john")
    }

    // cookie ----------------------
    // 4kb
    // per domain
    // manual expiry

    const addCookie = () => {
        document.cookie = "demo=dell; max-age=5"
    }
    const getCookies = () => {
        console.log(document.cookie)
    }
    return <>
        <button onClick={handleAddLocalStorage}>add</button>
        <button onClick={handleRemoveLocalStorage}>remove</button>
        <button onClick={handleGetLocalStorage}>get</button>
        <hr />
        <button onClick={handleAddSessionStorage}>add</button>
        <hr />
        <button onClick={addCookie}>add cookie</button>
        <button onClick={getCookies}>get cookie</button>
    </>
}

export default Home