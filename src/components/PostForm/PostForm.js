import React, { useState } from "react";

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    genre: "",
    title: "",
    author: "",
    publication_date: "",
    // image: "",
  });
  const token=localStorage.getItem('jwtToken');
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const today = new Date();
     const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; 
    let dd = today.getDate();
     if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      const formattedToday = yyyy + '-' + mm + '-' + dd;
      // if(formData.image===""){
      //   formData.image=null;
      // }
      // else{
      //   const imgArr=formData.image.split('\\');
      //   const img=imgArr[imgArr.length-1];
      //   console.log(img);
      //   formData.image=img;
      // }
    const convertedObject = {
      "data":{
        "genre": formData.genre,
        "title": formData.title,
        "author": formData.author,
        "publication_date": formattedToday,
        // "image": formData.image,
      }
    }
  console.log(JSON.stringify(convertedObject))
    try {
      const response = await fetch("http://localhost:1337/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(convertedObject),
      });
      if (response.status!==200 && response.status!==201 ) {
        throw new Error("Failed to create post");
      }
      alert("Post created successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
      </div>
      {/* <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
      </div> */}
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
