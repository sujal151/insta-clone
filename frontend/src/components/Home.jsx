import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem("jwt")
        if (!token) {
            navigate("/signup")
        }

        fetch("http://localhost:5339/allposts", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='home'>
            {
                data.map((posts) => {
                    return (
                        <div className="card" key={posts._id}>
                            <div className="card-header">
                                <div className="card-pic">
                                    <img
                                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWZyY2h8MXx8GVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Image Description"
                                    />
                                </div>
                                <h4>{posts.postedBy.name}</h4>
                            </div>

                            <div className="card-image">
                                <img src={posts.photo} alt="" />
                            </div>

                            <div className="card-content">
                                <span className="material-symbols-outlined">
                                    favorite
                                </span>
                                <p>1 like</p>
                                <p>{posts.body}</p>
                            </div>

                            <div className="add-comment">
                                <span className="material-symbols-outlined">
                                    mood
                                </span>
                                <input type="text" placeholder='Add a comment' />
                                <button className='comment'>Post</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home
