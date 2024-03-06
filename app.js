import { GameBoard } from "./src/GameBoard.js";
import { Snake } from "./src/Snake.js";
import { Food } from "./src/Food.js";

const boardSize = 20;

const gameBoard = new GameBoard(boardSize);
const snake = new Snake(boardSize);
const food = new Food(boardSize, snake.getCoordinates());

const intervalId = setInterval(() => {
  snake.move();
  gameBoard.draw(snake.getCoordinates(), food);
}, 500);
