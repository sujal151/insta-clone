import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <div className='home'>
            <div className="card">
                <div className="card-header">
                    <div className="card-pic">
                        <img
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWZyY2h8MXx8GVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Image Description"
                        />
                    </div>
                    <h4>ramlo</h4>
                </div>

                <div className="card-image">
                    <img src="https://plus.unsplash.com/premium_photo-1681666713677-8bd559bef6bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww" alt="" />
                </div>

                <div className="card-content">
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                    <p>1 like</p>
                    <p>This is amazing</p>
                </div>

                <div className="add-comment">
                    <span className="material-symbols-outlined">
                        mood
                    </span>
                    <input type="text" placeholder='Add a comment' />
                    <button className='comment'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Home
