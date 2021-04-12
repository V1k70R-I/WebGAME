window.onload = () => {
  let tetris = [];
  let tetrisField = document.querySelector("#tetris-field");
  let scoreField = document.querySelector(".score-field");
  let timer;
  let score = 0;

  // Заполняем массив

  function init() {
    let column = 9;
    let row = 15;
    for (let i = 0; i < row; i++) {
      tetris[i] = [];
      for (let j = 0; j < column; j++) {
        tetris[i][j] = 0;
      }
    }
  }

  // Рисуем игровое поле

  function draw() {
    let out = "";
    for (let i = 0; i < tetris.length; i++) {
      for (let j = 0; j < tetris[i].length; j++) {
        if (tetris[i][j] == 0) {
          out += '<div class="circle white"></div>';
        }
        else if (tetris[i][j] == 1) {
          out += '<div class="circle red"></div>';
        }
        else if (tetris[i][j] == 2) {
          out += '<div class="circle gold"></div>';
        }
        else if (tetris[i][j] == 3) {
          out += '<div class="circle green"></div>';
        }
        else if (tetris[i][j] == 4) {
          out += '<div class="circle blue"></div>';
        }
        else if (tetris[i][j] == 5) {
          out += '<div class="circle pink"></div>';
        }
      }
    }
    tetrisField.innerHTML = out; // Перерисовываем поле
    scoreField.innerHTML = score; // Перерисовываем очки
  }

  // Рисуем игровой блок

  function circle() {
    function randomInteger(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }

    tetris[0][0] = randomInteger(1, 5);
  }

  // Запускаем

  init();
  draw();
  circle();
  draw();
};
