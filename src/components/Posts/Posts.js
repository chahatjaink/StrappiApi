// import React, { useState, useEffect, Fragment } from "react";
// import Post from '../post'

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const token=localStorage.getItem('jwtToken');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:1337/api/books?populate=*", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         }
//       });
//         if(response.status!==200 || response.status!==201){
//             throw new Error('Invalid path')
//         }
//         const posts = await response.json();
//         setPosts(posts);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);


//   return (
//     <Fragment>

//               {posts.data?.map(post => (
//                 <Post
//                   id={post.attributes.id}
//                   genre={post.attributes.genre}
//                   title={post.attributes.title}
//                   author={post.attributes.author}
//                   date={post.attributes.publication_date}
//                   image={post.attributes.image.data.attributes.name}
//                   onDelete={deletePostHandler.bind(this, post.attributes.id)}
//                 />
//               ))}
//       </Fragment>
//   );
// };

// export default Posts;