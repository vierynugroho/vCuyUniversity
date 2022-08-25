let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");
let lampu3 = document.getElementById("lampu3");
let lampu4 = document.getElementById("lampu4");
let lampu5 = document.getElementById("lampu5");
let lampu6 = document.getElementById("lampu6");
let lampu7 = document.getElementById("lampu7");
let lampu8 = document.getElementById("lampu8");
let lampu9 = document.getElementById("lampu9");
let lampu10 = document.getElementById("lampu10");

let allLamp = document.getElementsByClassName("lampu");

function saklar(action, lampNumber) {
  if (action == "on") {
    if (lampNumber == 1) {
      lampu1.src = "assets/on.png";
    }
    if (lampNumber == 2) {
      lampu2.src = "assets/on.png";
    }
    if (lampNumber == 3) {
      lampu3.src = "assets/on.png";
    }
    if (lampNumber == 4) {
      lampu4.src = "assets/on.png";
    }
    if (lampNumber == 5) {
      lampu5.src = "assets/on.png";
    }
    if (lampNumber == 6) {
      lampu6.src = "assets/on.png";
    }
    if (lampNumber == 7) {
      lampu7.src = "assets/on.png";
    }
    if (lampNumber == 8) {
      lampu8.src = "assets/on.png";
    }
    if (lampNumber == 9) {
      lampu9.src = "assets/on.png";
    }
    if (lampNumber == 10) {
      lampu10.src = "assets/on.png";
    }
  }

  if (action == "off") {
    if (lampNumber == 1) {
      lampu1.src = "assets/off.png";
    }
    if (lampNumber == 2) {
      lampu2.src = "assets/off.png";
    }
    if (lampNumber == 3) {
      lampu3.src = "assets/off.png";
    }
    if (lampNumber == 4) {
      lampu4.src = "assets/off.png";
    }
    if (lampNumber == 5) {
      lampu5.src = "assets/off.png";
    }
    if (lampNumber == 6) {
      lampu6.src = "assets/off.png";
    }
    if (lampNumber == 7) {
      lampu7.src = "assets/off.png";
    }
    if (lampNumber == 8) {
      lampu8.src = "assets/off.png";
    }
    if (lampNumber == 9) {
      lampu9.src = "assets/off.png";
    }
    if (lampNumber == 10) {
      lampu10.src = "assets/off.png";
    }
  }
}

function saklarSemua(action, room) {
  if (action == "on") {
    if (room == "keluarga") {
      lampu1.src = "assets/on.png";
      lampu2.src = "assets/on.png";
      lampu3.src = "assets/on.png";
    }
    if (room == "tidur") {
      lampu5.src = "assets/on.png";
      lampu6.src = "assets/on.png";
    }
    if (room == "tamu") {
      lampu7.src = "assets/on.png";
      lampu8.src = "assets/on.png";
      lampu9.src = "assets/on.png";
      lampu10.src = "assets/on.png";
    }
  }

  if (action == "off") {
    if (room == "keluarga") {
      lampu1.src = "assets/off.png";
      lampu2.src = "assets/off.png";
      lampu3.src = "assets/off.png";
    }
    if (room == "tidur") {
      lampu5.src = "assets/off.png";
      lampu6.src = "assets/off.png";
    }
    if (room == "tamu") {
      lampu7.src = "assets/off.png";
      lampu8.src = "assets/off.png";
      lampu9.src = "assets/off.png";
      lampu10.src = "assets/off.png";
    }
  }
}
