import React, { useState } from "react";
import "./style.css";

const AuthForm = () => {
  // 使用 useState 管理显示状态
  const [showSignUp, setShowSignUp] = useState(false); // 默认显示登录界面

  // 切换函数
  const handleShowSignUp = () => setShowSignUp(true);
  const handleShowSignIn = () => setShowSignUp(false);

  return (
    <>
      {/* FontAwesome 图标样式 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />

      {/* 注册表单 */}
      {showSignUp && (
        <div className="container" id="signup">
          <h1 className="form-title">Register</h1>
          <form action="http://localhost/shopping_ai/backend/register.php" method="post">
            <input type="hidden" name="action" value="signUp" />
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" name="fName" placeholder="First Name" required />
              <label htmlFor="fName">First Name</label>
            </div>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" name="lName" placeholder="Last Name" required />
              <label htmlFor="lName">Last Name</label>
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" required />
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" className="btn" value="Sign Up" />
          </form>
          <p className="or">----------or-----------</p>
          <div className="icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <div className="links">
            <p>Already Have Account ?</p>
            <button onClick={handleShowSignIn}>Sign In</button>
          </div>
        </div>
      )}

      {/* 登录表单 */}
      {!showSignUp && (
        <div className="container" id="signin">
          <h1 className="form-title">Sign In</h1>
          <form action="http://localhost/shopping_ai/backend/register.php" method="post">
            <input type="hidden" name="action" value="signIn" />
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" required />
              <label htmlFor="password">Password</label>
            </div>
            <p className="recover">
              <a href="#">Recover Password</a>
            </p>
            <input type="submit" className="btn" value="Sign In" />
          </form>
          <p className="or">----------or-----------</p>
          <div className="icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <div className="links">
            <p>Don't Have Account ?</p>
            <button onClick={handleShowSignUp}>Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthForm;
