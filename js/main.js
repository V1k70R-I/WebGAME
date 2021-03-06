window.onload = () => {
  let timer;

  // Заполняем массив (псевдополе)

  let tetris = [];

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

  let tetrisField = document.querySelector("#tetris-field");
  let scoreField = document.querySelector(".score-field");
  let score = 0;

  function draw() {
    // Реализация с помощью if else

    // let out = "";
    // for (let i = 0; i < tetris.length; i++) {
    //   for (let j = 0; j < tetris[i].length; j++) {
    //     if (tetris[i][j] == 0) {
    //       out += '<div class="circle white"></div>';
    //     } else if (tetris[i][j] == 1 || tetris[i][j] == 11) {
    //       out += '<div class="circle red"></div>';
    //     } else if (tetris[i][j] == 2 || tetris[i][j] == 12) {
    //       out += '<div class="circle gold"></div>';
    //     } else if (tetris[i][j] == 3 || tetris[i][j] == 13) {
    //       out += '<div class="circle green"></div>';
    //     } else if (tetris[i][j] == 4 || tetris[i][j] == 14) {
    //       out += '<div class="circle blue"></div>';
    //     } else if (tetris[i][j] == 5 || tetris[i][j] == 15) {
    //       out += '<div class="circle pink"></div>';
    //     }
    //   }
    // }

    // Реализация с помощью switch case

    let out = "";
    for (let i = 0; i < tetris.length; i++) {
      for (let j = 0; j < tetris[i].length; j++) {
        switch (tetris[i][j]) {
          case 0:
            out += '<div class="circle white"></div>';
            break;
          case 1:
          case 11:
            out += '<div class="circle red"></div>';
            break;
          case 2:
          case 12:
            out += '<div class="circle gold"></div>';
            break;
          case 3:
          case 13:
            out += '<div class="circle green"></div>';
            break;
          case 4:
          case 14:
            out += '<div class="circle blue"></div>';
            break;
          case 5:
          case 15:
            out += '<div class="circle pink"></div>';
            break;
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

  // Запуск игры ("Start")

  let buttonRun = document.querySelector("#start");
  let flag; // Проверка когда запускать следующий элемент

  function start() {
    timer = setTimeout(() => {
      draw();
      flag = true;
      for (let i = tetris.length - 1; i >= 0; i--) {
        for (let j = 0; j < tetris[i].length; j++) {
          if (tetris[i][j] < 9) {
            if (tetris[i][j] != 0) {
              if (i == tetris.length - 1) {
                tetris[i][j] = tetris[i][j] + 10;
              } else if (tetris[i + 1][j] == 0) {
                tetris[i + 1][j] = tetris[i][j];
                tetris[i][j] = 0;
                flag = false;
              }
            }
          }
        }
      }
      if (flag) {
        circle();
      }
    }, 200);
  }

  // Функции для сдвига элемента по нажатию на клавишу

  function tetrisRight() {
    for (let i = tetris.length - 1; i >= 0; i--) {
      for (let j = tetris[i].length - 1; j >= 0; j--) {
        if (tetris[i][j] < 10) {
          if (tetris[i][j] != 0 && tetris[i][j + 1] === 0) {
            tetris[i][j + 1] = tetris[i][j];
            tetris[i][j] = 0;
          }
        }
      }
    }
    draw();
  }

  function tetrisRight() {
    for (let i = tetris.length - 1; i >= 0; i--) {
      for (let j = 0; j < tetris[i].length; j++) {
        if (tetris[i][j] < 10) {
          if (tetris[i][j] != 0 && tetris[i][j - 1] === 0) {
            tetris[i][j - 1] = tetris[i][j];
            tetris[i][j] = 0;
          }
        }
      }
    }
    draw();
  }

  // Запускаем

  init();
  draw();
  circle();
  buttonRun.onclick = start;
  document.onkeydown = function (event) {
    switch (evnt.code) {
      case "ArrowRight":
        tetrisRight();
        break;
      case "ArrowLeft":
        tetrisLeft();
        break;
    }
    return false;
  };
};
