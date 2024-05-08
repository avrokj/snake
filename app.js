import { GameBoard } from "./src/GameBoard.js";
import { Snake } from "./src/Snake.js";
import { Food } from "./src/Food.js";
import { Score } from "./src/Score.js";
import { Level } from "./src/Level.js";

const boardSize = 20;

const gameBoard = new GameBoard(boardSize);
const snake = new Snake(boardSize);
let food = new Food(boardSize, snake.getCoordinates());
const score = new Score();
const level = new Level();

let intervalSpeed = 400;

const intervalId = setInterval(() => {
  const newHead = snake.calculateNewHead(boardSize);

  const snakeCoordinates = snake.getCoordinates();
  const foodCoordinates = food.y + "-" + food.x;

  if (snakeCoordinates.includes(newHead)) {
    gameBoard.gameOver();
    score.saveHighScore();
    clearInterval(intervalId);
  } else {
    snake.unshift(newHead);
  }

  if (foodCoordinates == snakeCoordinates[0]) {
    // New food
    food = new Food(boardSize, snakeCoordinates);
    score.increment();
    score.update();

    if (score.score > 5 && score.score % 5 === 0) {
      level.increment();
      level.update();
      intervalSpeed = 10;
      clearInterval(intervalId);
      intervalId = setInterval(intervalFunction, intervalSpeed);
    }
  } else {
    snake.pop();
  }
  gameBoard.draw(snakeCoordinates, food);
}, 200);
