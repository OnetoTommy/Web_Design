const login = document.getElementById("login")
const signup = document.getElementById("signup")
const login_lg = document.getElementById("login_lg")
const login_sp = document.getElementById("login_sp")
const signup_sp = document.getElementById("signup_sp")

login_sp.addEventListener("click", () =>{
  login.style.display = "none";
  signup.style.display = "block";
})