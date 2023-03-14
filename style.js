const signupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

signupBtn.addEventListener("click", () => {
  moveBtn.classList.add("rightBtn");
  signup.classList.add("signupForm");
  login.classList.remove("loginForm");
  moveBtn.innerHTML = "Signup";
});

loginBtn.addEventListener("click", () => {
  moveBtn.classList.remove("rightBtn");
  login.classList.add("loginForm");
  signup.classList.remove("signupForm");
  moveBtn.innerHTML = "Login";
});


function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}