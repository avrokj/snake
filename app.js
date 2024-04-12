import { GameBoard } from "./src/GameBoard.js";
import { Snake } from "./src/Snake.js";
import { Food } from "./src/Food.js";
import { Score } from "./src/Score.js";

const boardSize = 20;

const gameBoard = new GameBoard(boardSize);
const snake = new Snake(boardSize);
let food = new Food(boardSize, snake.getCoordinates());

const score = new Score();

const intervalId = setInterval(() => {
  const newHead = snake.calculateNewHead(boardSize);

  const snakeCoordinates = snake.getCoordinates();
  const foodCoordinates = food.y + "-" + food.x;

  if (snakeCoordinates.includes(newHead)) {
    gameBoard.gameOver();
    clearInterval(intervalId);
  } else {
    snake.unshift(newHead);
  }

  if (foodCoordinates == snakeCoordinates[0]) {
    // uus toit
    food = new Food(boardSize, snakeCoordinates);
    score.increment();
    score.update();
  } else {
    //
    snake.pop();
  }
  gameBoard.draw(snakeCoordinates, food);
}, 300);
