import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import "../style/signup.css";

const Register = () => {
  const [formData, setFormData] = useState({ fName: "", lName: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("action", "signUp");
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await fetch("register.php", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      setMessage(result.message);

      if (result.status === "success") {
        setFormData({ fName: "", lName: "", email: "", password: "" });
        window.location.to = "/login";
      }
    } catch (error) {
      setMessage("Registration failed.");
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />
      <div className="auth-wrapper">
        <div className="sign-container">
          <h1 className="form-title">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" name="fName" placeholder="First Name" required value={formData.fName} onChange={handleChange} />
              <label for="fName">First Name</label>
            </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" name="lName" placeholder="Last Name" required value={formData.lName} onChange={handleChange} />
              <label for="lName">Last Name</label>
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
              <label for="email">Email</label>
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
              <label for="password">Password</label>
            </div>
            <input type="submit" name="signUp" id="signUp" class="sign_btn" value="Sign Up" />
          </form>
          <p className="or">----------or-----------</p>
          <div class="icons">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook"></i>
          </div>
          <div className="links">
            <p>Already Have Account ?</p>
            <NavLink className="nav-link" to="/login" >Sign In</NavLink>
          </div>
          {message && <div className="message-box">{message}</div>}
        </div>
      </div>
    </>
  );
};

export default Register;
