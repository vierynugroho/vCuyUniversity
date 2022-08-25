let loginBtn = document.getElementById("loginBtn");
let registerBtn = document.getElementById("register");
let registerSubmit = document.getElementById("registerSubmit");
let check = document.getElementById("check");
let doneShowDataBtn = document.getElementById("doneShowDataBtn");
let main = document.body.querySelector("main");
let containerRegister = document.querySelector(".registerPage");
let showBlog = document.getElementById("showBlogBtn");
let newUser = document.getElementById("newUser");
let newPass = document.getElementById("newpass");
let trNew = document.querySelector(".newData");
let tdUser = document.createElement("td");
let tdPass = document.createElement("td");
let tdRole = document.createElement("td");
let username = document.getElementById("username");
let password = document.getElementById("password");
let regUsername = document.getElementById("usernameRegister");
let regPassword = document.getElementById("passwordRegister");
let btnCancelRegister = document.getElementById("cancel");
let role = document.getElementById("role");
let containerAddData = document.querySelector(".saddData");
let showData = document.querySelector(".showData");

// Data
addEventListener("DOMContentLoaded", function () {
  tdUser.innerText = `${localStorage.getItem("username")}`;
  tdPass.innerText = `${localStorage.getItem("password")}`;
  tdRole.innerText = `${localStorage.getItem("role")}`;

  trNew.appendChild(tdUser);
  trNew.appendChild(tdPass);
  trNew.appendChild(tdRole);
});

// Lets Code
function onLogin() {
  // admin
  if (username.value == "admin" && password.value == "admin") {
    localStorage.setItem("username", "admin");
    localStorage.setItem("role", "admin");
    location.href = "admin.html";
  } else if (username.value == localStorage.getItem("username") && password.value == localStorage.getItem("password") && localStorage.getItem("role") == "admin") {
    localStorage.setItem("role", "admin");
    location.href = "admin.html";
  }

  // karyawan
  else if (username.value == "karyawan" && password.value == "karyawan") {
    localStorage.setItem("username", "karyawan");
    localStorage.setItem("role", "karyawan");
    location.href = "karyawan.html";
  } else if (username.value === localStorage.getItem("username") && password.value === localStorage.getItem("password") && localStorage.getItem("role") == "karyawan") {
    localStorage.setItem("role", "karyawan");
    location.href = "karyawan.html";
  }

  // error
  else if (username.value != localStorage.getItem("username") || password.value != localStorage.getItem("password")) {
    alert("Username dan Password invalid!");
  }

  // tamu
  else {
    localStorage.setItem("role", "other");
    location.href = "other.html";
  }
}

// On LogOut
function onLogout() {
  localStorage.clear();
  location.href = "home.html";
}

// Check Data ?
check.addEventListener("click", function () {
  showData.style.display = "flex";
});

// Done Check
doneShowDataBtn.addEventListener("click", function () {
  showData.style.display = "none";
});

// Register Btn
registerBtn.addEventListener("click", function () {
  containerRegister.style.display = "flex";
});

// cancelBtnRegister
btnCancelRegister.addEventListener("click", function () {
  containerRegister.style.display = "none";
});

// Show Blog
showBlog.addEventListener("click", function () {
  location.href = "https://www.youtube.com/c/DeaAfrizal";
});

// register
registerSubmit.addEventListener("click", function () {
  localStorage.setItem("username", regUsername.value);
  localStorage.setItem("password", regPassword.value);
  localStorage.setItem("role", role.value);
  alert("created account success!");
  containerRegister.style.display = "none";
});
