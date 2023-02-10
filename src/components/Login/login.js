import React, { useState } from "react";
import './LoginForm.css'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    identifier:"",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify(formData),
      });
      if(response.status!==200 && response.status!==201){
            throw new Error('Validation failed')
      }
      const data = await response.json();
      console.log(data.jwt);
      localStorage.setItem('jwtToken',data.jwt)
      console.log(data);
      if(localStorage.getItem('jwtToken')!==null){
        alert('Login Successful')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="identifier"
        name="identifier"
        value={formData.identifier}
        onChange={handleChange}
      />
      </div>
      <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        />
        </div>

      <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        />
        </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
