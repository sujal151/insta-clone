import React from 'react'
import './PostDetail.css'

const PostDetail = ({ item }) => {

    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);

    return (
        <div className="showComment">
            <div className="container">
                <div className="postPic">
                    <img src={item.photo} alt="" />
                </div>
                <div className="details">
                    <div
                        className="card-header"
                        style={{ borderBottom: "1px solid #00000029" }}
                    >
                        <div className="card-pic">
                            <img
                                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWZyY2h8MXx8GVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt="Image Description"
                            />
                        </div>
                        <h4>{item.postedBy.name}</h4>
                    </div>

                    <div
                        className="comment-section"
                        style={{ borderBottom: "1px solid #00000029" }}
                    >
                        {item.comments.map((comment) => {
                            return <p className='comm'>
                                <span
                                    className="commenter"
                                    style={{ fontWeight: "bolder" }}
                                > {comment.postedBy.name} </span>
                                <span className='commentText'> {comment.comment}</span>
                            </p>
                        })}


                    </div>

                    <div className="card-content">
                        <p>{item.likes.length} like</p>
                        <p>{item.body}</p>
                    </div>

                    <div className="add-comment">
                        <span className="material-symbols-outlined">
                            mood
                        </span>
                        <input
                            type="text"
                            placeholder='Add a comment'
                            // value={comment}
                        // onChange={(e) => { setComment(e.target.value) }}
                        />
                        <button className='comment'
                        //  onClick={() => { makeComment(comment, item._id) 
                        //     toggleComment()
                        //  }}

                        >Post</button>
                    </div>
                </div>
            </div>
            <div
                className="close-comment"
            //  onClick={() => { toggleComment() }}
            >
                <span className="material-symbols-outlined material-symbols-outlined-comment">
                    close
                </span>
            </div>
        </div>
    )
}

export default PostDetail
