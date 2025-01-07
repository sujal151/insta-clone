import React, { useEffect } from 'react'
import "./Profile.css"
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { userid } = useParams();
  const [isFollow, setIsFollow] = useState(false);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  const followUser = (userId) => {
    fetch("http://localhost:5339/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsFollow(true);
      });
  };

  const unfollowUser = (userId) => {
    fetch("http://localhost:5339/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        followId: userId
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setIsFollow(!isFollow)
      })
  }


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
        if (result.user.followers.includes(JSON.parse(localStorage.getItem("user"))._id)) {
          setIsFollow(true);
        }
      })
  }, [isFollow]);



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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <h1>{user.name}</h1>
            <button className='followBtn'
              onClick={() => {
                if (isFollow) {
                  unfollowUser(user._id)
                }else{
                  followUser(user._id)
                }
              }}
            >
              {isFollow ? "Unfollow" : "Follow"}
            </button>
          </div>
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