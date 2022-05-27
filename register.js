const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("#loginBtn");
const signupBtn = document.querySelector("#signUpBtn");
const signupLink = document.querySelector("form .signup-link a");
let loginChange = document.querySelector("#login");
let SignUpChange = document.querySelector("#signup");


loginBtn.onclick = (e) => {
  e.preventDefault();
  var Uname = document.querySelector("#userName").value;
  let Pass = document.querySelector("#passw").value;

  if (
    Uname == localStorage.getItem("name") &&
    Pass == localStorage.getItem("password")
  ) {
    //target page on successful login
    window.location.href = "/nav.html";
    console.log(Uname);
  }
  else{
    //target page on unsuccessful login
  }
};

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginChange.checked = true;
  move();
  var Uname = document.querySelector("#SMail").value;
  localStorage.setItem("name", Uname);
  let Pass = document.querySelector("#SPass").value;
  localStorage.setItem("password", Pass);
  console.log(localStorage);
});

signupLink.onclick = (e) => {
  e.preventDefault();
  SignUpChange.checked = true;
  move();
};

function move() {
  if (loginChange.checked) {
    document.querySelector(".form-inner .login").style.left = "0%";
    document.querySelector(".form-inner .signup").style.left = "0%";
    document.querySelector(".title-text .login").style.left = "0%";
    document.querySelector(".title-text .signup").style.left = "0%";
    console.log("login");
  } else if (SignUpChange.checked) {
    document.querySelector(".title-text .login").style.left = "-50%";
    document.querySelector(".title-text .signup").style.left = "-50%";
    document.querySelector(".form-inner .login").style.left = "-50%";
    document.querySelector(".form-inner .signup").style.left = "-50%";
    console.log("signup");
  }
}

loginChange.addEventListener("click", () => {
  move();
});
SignUpChange.addEventListener("click", () => {
  move();
});
