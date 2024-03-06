class Food {
  y;
  x;

  constructor(boardSize, snakeCoordinates) {
    let c;
    do {
      this.y = Math.floor(Math.random() * boardSize);
      this.x = Math.floor(Math.random() * boardSize);
      c = this.y + "-" + this.x;
    } while (snakeCoordinates.includes(c));
  }
}

export { Food };
