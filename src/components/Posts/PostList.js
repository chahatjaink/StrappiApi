import React, { useState, useEffect } from "react";
import './Posts.css'
import Button from "../Button/Button";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const token=localStorage.getItem('jwtToken')
  
  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:1337/api/books?populate=*", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
        if(response.status!==200 && response.status!==201){
            throw new Error('Invalid path')
        }
        const postArr = await response.json();
        setPosts(postArr);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [posts]);

  const deletePostHandler = postId => {
    fetch('http://localhost:1337/api/books/' + postId, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Deleting a post failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setPosts(prevState => {
          const updatedPosts = prevState.posts.data.filter(p => p.id !== postId);
          return { posts: updatedPosts};
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  
  return (
    <div className="container">
      {posts.data?.map((post) => (
  <div key={post.id} className="card">
    {post.attributes ? (
      <>
        <h3 className="title">{post.attributes.title}</h3>
        <p className="body">{post.attributes.genre}</p>
        <p className="body">{post.attributes.title}</p>
        <p className="body">{post.attributes.author}</p>
        <p className="body">{post.attributes.publication_date}</p>
        <p className="body">{post.attributes.image}</p>
      <Button mode="flat" design="danger" onClick={()=>deletePostHandler(post.id)}>
        Delete
      </Button>
      </>
    ) : (
      <p>No attributes found</p>
    )}
  </div>
))}
    </div>
  );
};

export default PostList;
