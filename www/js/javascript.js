//Henter html elementene fra class

let unitElm = document.querySelector(".unit-bløtkokt");
let timeElm = document.querySelector(".time");
let wrapperElm = document.querySelector(".timer-select-wrapper");

let eggSizeSElm = document.querySelector(".s-size");
let eggSizeMElm = document.querySelector(".m-size");
let eggSizeLElm = document.querySelector(".l-size");

let boiledTypeBLElm = document.querySelector(".soft-boiled");
let boiledTypeSMElm = document.querySelector(".medium");
let boiledTypeHAElm = document.querySelector(".hard-boiled");
let minutesElm = document.querySelector(".minutes");

let buttonTimeRunningElm = document.querySelector("#start-button");
let timeRunningElm = document.querySelector(".time-running-wrapper");
let countNumberElm = document.querySelector(".count-number");
let countTextNumberElm = document.querySelector(".count-text-number");

let eggSize = "M"; // setter standard verdi
let boiledType = "ME";
let minutes = 7;
let seconds = 0;
let intervalId = 0;
boiledTypeSMElm.classList.add("active");
eggSizeMElm.classList.add("active");

//eggButtonElm

// Legger til click function
eggSizeSElm.addEventListener("click", () => setEggSize("S"));
eggSizeMElm.addEventListener("click", () => setEggSize("M"));
eggSizeLElm.addEventListener("click", () => setEggSize("L"));

boiledTypeBLElm.addEventListener("click", () => BoiledType("BL"));
boiledTypeSMElm.addEventListener("click", () => BoiledType("ME"));
boiledTypeHAElm.addEventListener("click", () => BoiledType("HA"));

function setEggSize(value) {
  eggSizeSElm.classList.remove("active");
  eggSizeMElm.classList.remove("active");
  eggSizeLElm.classList.remove("active");

  if (value == "S") eggSizeSElm.classList.add("active");
  if (value == "M") eggSizeMElm.classList.add("active");
  if (value == "L") eggSizeLElm.classList.add("active");

  // valgt egg størrelse verdi
  console.log(value);
  eggSize = value; // setter verdien for eggstørrelse
  getBoilTime(); // setter minutter basert på eggstørrelse og type kok
  minutesElm.innerHTML = minutes + " minutter"; // sette minutter i html
}

function BoiledType(value) {
  boiledTypeBLElm.classList.remove("active");
  boiledTypeSMElm.classList.remove("active");
  boiledTypeHAElm.classList.remove("active");

  if (value == "BL") boiledTypeBLElm.classList.add("active");
  if (value == "ME") boiledTypeSMElm.classList.add("active");
  if (value == "HA") boiledTypeHAElm.classList.add("active");

  // valgt koketype
  console.log(value);
  boiledType = value; //sette kokeverdien
  getBoilTime(); // setter minutter basert på eggstørrelse og type kok
  minutesElm.innerHTML = minutes + " minutter";
}

// Switch
function getBoilTime() {
  switch (eggSize) {
    case "S":
      findSmallBoileTime();
      break;
    case "M":
      findMediumBoileTime();
      break;
    case "L":
      findLargeBoileTime();
      break;
    default:
      break;
  }
}

function findSmallBoileTime() {
  switch (boiledType) {
    case "BL":
      minutes = 3;
      break;
    case "ME":
      minutes = 6;
      break;
    case "HA":
      minutes = 10;
      break;
    default:
      break;
  }
}

function findMediumBoileTime() {
  switch (boiledType) {
    case "BL":
      minutes = 4;
      break;
    case "ME":
      minutes = 7;
      break;
    case "HA":
      minutes = 10;
      break;
    default:
      break;
  }
}

function findLargeBoileTime() {
  switch (boiledType) {
    case "BL":
      minutes = 5;
      break;
    case "ME":
      minutes = 8;
      break;
    case "HA":
      minutes = 11;
      break;
    default:
      break;
  }
}

buttonTimeRunningElm.addEventListener("click", function () {
  //console.log("click");
  if (wrapperElm.classList.contains("display-none")) {
    wrapperElm.classList.remove("display-none");
    buttonTimeRunningElm.textContent = "Start";
    //buttonTimeRunningElm.classList.add("active");
    timeRunningElm.classList.add("display-none");
    window.clearInterval(intervalId);
    seconds = 0;
  } else {
    wrapperElm.classList.add("display-none");
    buttonTimeRunningElm.textContent = "Stopp";
    timeRunningElm.classList.remove("display-none");
    startCountdown();
  }
});

function startCountdown() {
  showTime();

  function countDown() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes < 0) {
      window.clearInterval(intervalId);
      seconds = 0;
      minutes = 0;
    }
    showTime();
  }

  intervalId = window.setInterval(countDown, 1000);
}

function showTime() {
  let sec = seconds;

  if (sec < 10) {
    sec = "0" + seconds;
  }

  countNumberElm.textContent = minutes + ":" + sec;
}

//countTextNumberElm

/*
startButtonElm.addEventListener("click", startCountdown);
/*function startCountdown() {
startTimerNySideElm.classList.add("hidden");
timeLeftelement.innerHTML = minutes + " Min";
timeRunningElm.classList.remove("hidden");
}*/
