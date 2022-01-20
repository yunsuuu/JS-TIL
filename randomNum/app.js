const generateForm = document.querySelector(".generate-form");
const maxNum = document.querySelector(".maxNum");
const range = document.querySelector(".rangeInput");
const guessForm = document.querySelector(".guess-form");
const inputNum = document.querySelector(".inputNum");
const paintChoseNum = document.querySelector(".paintChoseNum");
const paintResult = document.querySelector(".paintResult");

function showResult(myNumValue, randNumValue){
    inputNum.value = "";
    const maxNumValue = range.value;
    paintChoseNum.innerText = `You chose: ${myNumValue}, the machine chose: ${randNumValue}`;
    myNumValue = parseInt(myNumValue);

    if(myNumValue === randNumValue){
        paintResult.innerText = `You won!`;
    } else if(myNumValue < 0 || myNumValue > maxNumValue){
        paintChoseNum.innerText = "This is wrong number";
        paintResult.innerText = "";
    } else{
        paintResult.innerText = `You lost!`;
    }
}

function playGame(e){
    e.preventDefault();

    const myNumValue = inputNum.value;
    const maxNumValue = range.value;
    const randNumValue = Math.floor(Math.random()*maxNumValue);

    showResult(myNumValue, randNumValue);
}

// range input을 받아 범위 설정
function handleRange(){
    const rangeNum = range.value;
    maxNum.innerText = rangeNum;
    maxNum.style.color = "#800000";

    guessForm.addEventListener("submit", playGame);
}

// 앱 실행시 가장 처음 동작하는 함수
function init(){
    range.oninput = handleRange;
    // range input이 동작하면 handleRange 함수 실행
}

init();