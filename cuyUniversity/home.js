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

// Data;
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
    location.href = "/cuyUniversity/admin.html";
  } else if (username.value == localStorage.getItem("username") && password.value == localStorage.getItem("password") && localStorage.getItem("role") == "admin") {
    localStorage.setItem("role", "admin");
    location.href = "/cuyUniversity/admin.html";
  }

  // Dosen
  else if (username.value == "dosen" && password.value == "dosen") {
    localStorage.setItem("username", "dosen");
    localStorage.setItem("role", "dosen");
    location.href = "/cuyUniversity/dosen.html";
  } else if (username.value == localStorage.getItem("username") && password.value == localStorage.getItem("password") && localStorage.getItem("role") == "dosen") {
    localStorage.setItem("role", "dosen");
    location.href = "/cuyUniversity/dosen.html";
  }
  // mahasiswa
  else if (username.value == "mahasiswa" && password.value == "mahasiswa") {
    localStorage.setItem("username", "mahasiswa");
    localStorage.setItem("role", "mahasiswa");
    location.href = "/cuyUniversity/mahasiswa.html";
  } else if (username.value == localStorage.getItem("username") && password.value == localStorage.getItem("password") && localStorage.getItem("role") == "mahasiswa") {
    localStorage.setItem("role", "mahasiswa");
    location.href = "/cuyUniversity/mahasiswa.html";
  }

  // tamu
  else if (username.value == "tamu" && password.value == "tamu") {
    localStorage.setItem("username", "tamu");
    localStorage.setItem("role", "tamu");
    location.href = "/cuyUniversity/tamu.html";
  } else if (username.value == localStorage.getItem("username") && password.value == localStorage.getItem("password") && localStorage.getItem("role") == "tamu") {
    localStorage.setItem("role", "tamu");
    location.href = "/cuyUniversity/tamu.html";
  }

  // error
  // error
  else if (username.value != localStorage.getItem("username") || password.value != localStorage.getItem("password")) {
    alert("Username dan Password invalid!");
  }
}

// On LogOut
function onLogout() {
  localStorage.clear();
  location.href = "../index.html";
}

// Check Data ?
check.addEventListener("click", function () {
  showData.style.display = "flex";
  containerRegister.style.display = "none";
});

// Done Check
doneShowDataBtn.addEventListener("click", function () {
  showData.style.display = "none";
});

// Register Btn
registerBtn.addEventListener("click", function () {
  containerRegister.style.display = "flex";
  showData.style.display = "none";
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

  tdUser.innerText = `${localStorage.getItem("username")}`;
  tdPass.innerText = `${localStorage.getItem("password")}`;
  tdRole.innerText = `${localStorage.getItem("role")}`;

  trNew.appendChild(tdUser);
  trNew.appendChild(tdPass);
  trNew.appendChild(tdRole);
});
