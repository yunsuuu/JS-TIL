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
  
  const $body = document.querySelector("body");
  const $btn = document.querySelector("button");
  
  const onClickChangeColor = () => {
    let randomColorsArray = [];
    for (let i = 0; i < 2; i++) {
      const randomColors = colors[Math.floor(Math.random() * colors.length)];
      if (randomColorsArray.indexOf(randomColors) === -1) {
        randomColorsArray.push(randomColors);
      } else {
        i--;
      }
    }
    $body.style.backgroundImage = `linear-gradient(0.25turn, ${randomColorsArray})`;
  };
  
  $btn.addEventListener("click", onClickChangeColor);
  