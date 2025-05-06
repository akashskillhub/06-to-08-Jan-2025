import React from 'react'

const Home = () => {
    const users = [
        { name: "john", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", about: "fake about" },
        { name: "ross", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", about: "fake about" },
        { name: "rachel", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", about: "fake about" },
        { name: "joe", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", about: "fake about" },
        { name: "monica", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", about: "fake about" },
    ]
    return <div className='flex'>
        {/* sidebar start */}
        <div className='w-52 bg-slate-500 h-screen'>
            <div className='flex items-center justify-around bg-green-950 text-white py-4'>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className='size-10 rounded-full' alt="" />
                <i className="bi-house"></i>
                <i className="bi-house"></i>
                <i className="bi-house"></i>
                <i className="bi-house"></i>
                <i className="bi-house"></i>
            </div>
            <div className='flex items-center'>
                <input type="text" />
                <i className="bi-filter text-2xl"></i>
            </div>
            <div>
                {
                    users.map(item => <div className='flex gap-4 items-center p-2 hover:bg-slate-400'>
                        <img src={item.photo} className='size-10 rounded-full' alt="" />
                        <div>
                            <p>{item.name}</p>
                            <p className='text-[12px]'>{item.about}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
        {/* sidebar end */}


        {/* main start */}
        <div>
            <div className='flex flex-col h-screen'>
                <div>header</div>
                <div className='flex-1'>body</div>
                <div>footer</div>
            </div>
        </div>
        {/* main end */}
    </div>

}

export default Home