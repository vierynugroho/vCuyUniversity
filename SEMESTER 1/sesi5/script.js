let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let message = document.querySelector("h1");
function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  if (usernameInput.value == "admin" && passwordInput.value == "admin") {
    message.innerText = "Welcome Admin!";
    localStorage.setItem("role", "admin");
  } else if (usernameInput.value == "siswa" && passwordInput.value == "siswa") {
    message.innerText = "Welcome Siswa!";
    localStorage.setItem("role", "siswa");
  } else {
    message.innerText = `Welcome ${usernameInput.value}`;
    localStorage.setItem("role", "other");
  }

  message.innerText = `Selamat Datang ${localStorage.getItem("username")}! \n Anda Adalah ${localStorage.getItem("role")}`;
}

function onLogout() {
  localStorage.clear();
  message.innerText = "";
}
