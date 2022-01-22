const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const $btn = document.querySelector("button");

const handleClick = () => {
    const a = colors[Math.floor(Math.random()*colors.length)];
    const b = colors[Math.floor(Math.random()*colors.length)];

    if(a === b) {
        return handleClick(); 
        // 색상이 겹칠 경우 handleClick을 재실행 (함수 내부에 자기 자신을 호출하는 함수를 재귀함수)
    };

    document.body.style.backgroundImage = `linear-gradient(to left, ${a}, ${b})`; 
}

$btn.addEventListener("click", handleClick);