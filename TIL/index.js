// Array
const toBuy = ["apple", "tomato", "potato"]
// console.log(toBuy)

toBuy.push("rice")
// console.log(toBuy)


// * Object
const player = {
    name: "nico",
    age: 12,
    fat: true,
}

// console.log(player);

player.age = 9;
player.lastName = "lala";

// console.log(player);


// ** parameter (매개변수)
function addNum(x, y, z){ // x, y, z 라는 매개변수를 가지는 함수
    if(x === undefined)
    x = 0;
    if(y === undefined)
    y = 0;
    if(z === undefined)
    z = 0;
    return x + y + z;
    }

addNum(1, 2, 3);
// console.log(addNum(1, 2, 3));
addNum(1, 2);
// console.log(addNum(1, 2));
addNum(1);
// console.log(addNum(1));
addNum();
// console.log(addNum());


// ** argument (인수)
function addNum2(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){ // 전달받은 인수의 총 수만큼 반복
        sum += arguments[i]; // 각각의 인수를 sum에 더함
    }
    return sum;
}

addNum2(1, 2, 3); 
// console.log(addNum2(1, 2, 3)); // 6
addNum2(1, 2);
addNum2(1);
addNum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(addNum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55


// 이름, 나이 데이터 받기
function sayHello(a, b){
    // console.log("Hello my name is " + a + " and I'm " + b);
}

sayHello("nico", 12);
sayHello("lala", 9);
sayHello("momo", 20);


// function 내부 데이터를 function 외부로 꺼내는 방법,
// fucntion 외부 데이터를 function 내부에서 실행하는 방법
const coworker = {
    name: "lala",
    sayHi: function(a){
        console.log(`Hello ${a} my name is ${coworker.name}`);
    }
}

// console.log(coworker.name);
// coworker.sayHi("momo");


// return
function printSquare(x){
    // console.log(x*x);
}

function getSquare(x){
    return(x*x);
}

printSquare(5); // 콘솔에 25 출력
getSquare(5); // 값을 실행하고 돌려줌
// console.log(getSquare(5)); // 25 출력
// console.log(printSquare(5)); // return이 없는 함수를 실행하면 함수 호출 부분은 undefind 값을 받음

// 직사각형 넓이 구하기
function calculateRectangleArea(width, height){
    return width * height;
}

const area1 = calculateRectangleArea(4, 5);
const area2 = calculateRectangleArea(5, 6);
const area3 = calculateRectangleArea(6, 7);

// console.log(`직사각형1: ${area1}, 직사각형2: ${area2}, 직사각형3: ${area3}`);

function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x + y;
}


// 조건문
// const age = parseInt(prompt("How old are you?"));

// console.log(age);

// if(isNaN(age) || age < 0){
//     console.log("Please write a number!")
// } else if(age < 18){
//     console.log("You are too young!")
// } else if(age >= 18 && age <= 50){
//     console.log("You can drink!")
// } else if(age >= 51 && age <= 80){
//     console.log("You should exercise!")
// } else {
//     console.log("You can do whatever you want!")
// }


// JS에서 CSS 요소 변경
const div = document.querySelector(".hello");
const h3 = document.createElement("h3")
div.append(h3);
h3.innerText = "Hello!";

function handleHiClick(){
    h3.classList.toggle("clicked");
}

h3.addEventListener("click", handleHiClick);

// function handleHiClick(){
//     const currentColor = h3.style.color;
//     let newColor;
//     if(currentColor === "blue"){ // true
//         newColor = "orange";
//     } else {
//         newColor = "blue"; // false
//     }
//     h3.style.color = newColor;
// }

// h3.addEventListener("click", handleHiClick);


// CSS는 CSS / JS는 JS
// const div = document.querySelector(".hello");
// const title = document.querySelector(".hello h2");
// const sayHi = document.createElement("h3");
// div.append(sayHi);
// sayHi.innerText = "Hello!";


// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if(title.className === clickedClass){
//         title.className = "";
//     } else {
//         title.className = clickedClass;
//     }
// }

// function handleHiClick(){
//     sayHi.classList.toggle('clicked');
// }

// title.addEventListener("click", handleTitleClick);
// sayHi.addEventListener("mouseover", handleHiClick);


// current time
const h4 = document.getElementById("clock");

function handleClock(){
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const dd = date.getDay();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    h4.innerText = `지금은 ${y}년 ${m}월 ${d}일, ${hour}:${min}:${sec}`;
}

handleClock();
setInterval(handleClock, 1000);

// dataset
const button = document.getElementsByTagName("button");
const result = document.getElementById("result");

for(i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        const cName = this.dataset.coffeeName;
        const cPrice = this.dataset.price;

        result.innerText = `${cName} : ${cPrice}`;
    })
}


