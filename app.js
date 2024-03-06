import { GameBoard } from "./src/GameBoard.js";
import { Snake } from "./src/Snake.js";

const boardSize = 20;

const snake = new Snake();
const gameBoard = new GameBoard(boardSize);
gameBoard.draw(snake.getCoordinates());
