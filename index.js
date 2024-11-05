const data = new Date();
const timeElement = document.getElementById("time");

function vaqt() {
  const data = new Date();
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();

  timeElement.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(vaqt, 1000);

vaqt();

var donen = document.querySelector(":root");

// Sahifa yuklanganda holatni tiklaymiz
window.onload = function () {
  var isOn = localStorage.getItem("isOn") === "true"; // localStorage dan holatni olish
  if (isOn) {
    document
      .getElementsByClassName("clickOnOrOff")[0]
      .classList.remove("d-right");
    donen.style.setProperty("--white", "#fff");
    donen.style.setProperty("--black", "#000");
  } else {
    document.getElementsByClassName("clickOnOrOff")[0].classList.add("d-right");
    donen.style.setProperty("--white", "#000");
    donen.style.setProperty("--black", "#fff");
  }
};

function onOff() {
  if (document.getElementsByClassName("d-right")[0]) {
    document
      .getElementsByClassName("clickOnOrOff")[0]
      .classList.remove("d-right");
    donen.style.setProperty("--white", "#fff");
    donen.style.setProperty("--black", "#000");
    localStorage.setItem("isOn", "true");
  } else {
    document.getElementsByClassName("clickOnOrOff")[0].classList.add("d-right");
    donen.style.setProperty("--white", "#000");
    donen.style.setProperty("--black", "#fff");
    localStorage.setItem("isOn", "false");
  }
}
