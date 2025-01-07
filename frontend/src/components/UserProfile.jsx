import React, { useEffect } from 'react'
import "./Profile.css"
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { userid } = useParams();
  //   const [isFollow, setIsFollow] = useState(false);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("jwt"));
    fetch(`http://localhost:5339/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setPosts(result.posts);
        setUser(result.user);
      })

  }, []);



  return (
    <div className='profile'>
      <div className="profile-frame">
        <div className="profile-pic">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWZyY2h8MXx8GVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Image Description"
          />
        </div>

        <div className="profile-data">
          <h1>{user.name}</h1>
          <div className="profile-info ">
            <p>{posts.length} posts</p>
            <p>40 followers</p>
            <p>40 following</p>
          </div>
        </div>
      </div>


      <hr style={{
        width: "90%",
        margin: "auto",
        opacity: "0.8",
        margin: "25px auto"
      }} />

      <div className="gallery">
        {posts.map((pics) => {
          return (
            <img
              key={pics._id}
              src={pics.photo}
              // onClick={() => {
              //     toggleDetails(pics)
              // }}
              className="item"
            ></img>
          );
        })}
      </div>
      {/* {show &&
                <PostDetail item={posts} toggleDetails={toggleDetails} />
            } */}
      {/* {
        changePic &&
        <ProfilePic changeprofile={changeprofile} />
      } */}

    </div>
  )
}

export default UserProfile