import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/register", { username, email, password });
      if (result.status === 201) {
        alert("Successfully registered. Please log in.");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" style={{ color: "black", fontWeight: "bold" }}>
          Create Account & Register!
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default RegisterForm;
