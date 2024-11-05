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
function onOff() {
  if (document.getElementsByClassName("d-right")[0]) {
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
}
