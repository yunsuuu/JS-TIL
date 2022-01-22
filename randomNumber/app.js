const $rangeForm = document.querySelector(".range-form");
const $rangeInput = document.querySelector(".range-input");
const $guessForm = document.querySelector(".guess-form");
const $numInput = document.querySelector(".num-input");
const $btn = document.querySelector("button");
const $showNum = document.querySelector(".show-num");
const $showResult = document.querySelector(".show-result");

const paintResult = (myNumValue, randNumValue) => {
  myNumValue = parseInt(myNumValue);
  const maxNumValue = $rangeInput.value;
  $showNum.innerHTML = `You chose: <strong>${myNumValue}</strong>, the machine chose: <strong>${randNumValue}</strong>`;
  if(myNumValue === randNumValue) {
    $showResult.innerHTML = `<strong>You won!</strong>`;
    $showResult.style.color = "#0000CD";
  } else if(myNumValue < 0 || myNumValue >= maxNumValue) {
    alert(`0 이상 ${maxNumValue} 미만의 값을 입력하세요!`);
    $showNum.innerText = "";
    $showResult.innerText = "";
  } else {
    $showResult.innerHTML = `<strong>You lost!</strong>`;
    $showResult.style.color = "#DC143C";
  }
}

const playGame = (e) => {
  e.preventDefault();

  const myNumValue = $numInput.value;
  const maxNumValue = $rangeInput.value;
  const randNumValue = Math.floor(Math.random()*maxNumValue);
  
  $numInput.value = "";
  $numInput.focus();

  paintResult(myNumValue, randNumValue);
}

const makeMaxNum = (e) => {
  e.preventDefault();
  
  $showNum.innerText = "";
  $showResult.innerText = "";

  $guessForm.addEventListener("submit", playGame);
}

$rangeForm.addEventListener("submit", makeMaxNum);