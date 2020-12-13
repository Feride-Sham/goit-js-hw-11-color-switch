import css from "./styles.css";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const bodyRef = document.querySelector("body");
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

let colorIndex = null;

// слушатели на кнопки
startBtn.addEventListener("click", onStartBtn);
stopBtn.addEventListener("click", onStopBtn);

// call-back функция, которая срабатывает при нажатии на старт
// делает кнопку "старт" неактивной и меняет фон
function onStartBtn() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  colorIndex = setInterval(selectColor, 1000);
}

// call-back функция, которая срабатывает при нажатии на стоп
// делает кнопку "стоп" неактивной и останавливает смену цвета фона
function onStopBtn() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(colorIndex);
}

// функция выбора цвета
function selectColor() {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

// функция рандомного числа
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
