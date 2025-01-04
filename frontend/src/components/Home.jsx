import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [comment, setComment] = useState("")

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


    const likePost = (id) => {
        fetch("http://localhost:5339/like", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                postId: id,
            }),
        })
            .then(res => res.json())
            .then(result => {
                const newData = data.map((posts) => {
                    if (posts._id === result._id) {
                        return result
                    } else {
                        return posts
                    }
                })
                setData(newData)
                console.log(result)
            })
    }

    const unlikePost = (id) => {
        fetch("http://localhost:5339/unlike", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                postId: id,
            }),
        })
            .then(res => res.json())
            .then(result => {
                const newData = data.map((posts) => {
                    if (posts._id === result._id) {
                        return result
                    } else {
                        return posts
                    }
                })
                setData(newData)
                console.log(result)
            })
    }

    const makeComment = (text,id) => {
        fetch("http://localhost:5339/comment", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
                text:text,
                postId: id,
            }),
        })
            .then(res => res.json())
            .then(result => {
               console.log(result)
            })
    }

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
                                {
                                    posts.likes.includes(JSON.parse(localStorage.getItem("user"))._id)
                                        ?
                                        (<span className="material-symbols-outlined material-symbols-outlined-red" onClick={() => unlikePost(posts._id)}>
                                            favorite
                                        </span>)
                                        :
                                        (<span className="material-symbols-outlined " onClick={() => likePost(posts._id)}>
                                            favorite
                                        </span>)
                                }


                                <p>{posts.likes.length} likes</p>
                                <p>{posts.body}</p>
                            </div>

                            <div className="add-comment">
                                <span className="material-symbols-outlined">
                                    mood
                                </span>
                                <input type="text" placeholder='Add a comment' value={comment} onChange={(e) => { setComment(e.target.value) }} />
                                <button className='comment' onClick={() => { makeComment(comment,posts._id) }}>Post</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home
