import { GameBoard } from "./src/GameBoard.js";
import { Snake } from "./src/Snake.js";
import { Food } from "./src/Food.js";

const boardSize = 20;

const gameBoard = new GameBoard(boardSize);
const snake = new Snake(boardSize);
let food = new Food(boardSize, snake.getCoordinates());

const intervalId = setInterval(() => {
  snake.move(food);
  const snakeCoordinates = snake.getCoordinates();
  const foodCoordinates = food.y + "-" + food.x;
  if (foodCoordinates == snakeCoordinates[0]) {
    // uus toit
    food = new Food(boardSize, snakeCoordinates);
  } else {
    //
    snake.pop();
  }
  gameBoard.draw(snakeCoordinates, food);
}, 500);
