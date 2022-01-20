document.body.style.backgroundColor = "#800000";
document.body.style.color = "#fff";
const clockTitle = document.querySelector("#clock");

const getClock = () => {
  const now = new Date();
  const xmas = new Date("2022-12-25:23:59:59+0900");
  const gap = xmas.getTime() - now.getTime();
  const date = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");

  clockTitle.innerText = `D-day : ${date}d ${hours}h ${minutes}m ${seconds}s !`;
};

const init = () => {
  getClock();
  setInterval(getClock, 1000);
};

init();
