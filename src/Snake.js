class Snake {
  coordinates = [];
  direction = "u";

  constructor(boardSize) {
    const y = Math.floor(boardSize / 2);
    const x = Math.floor(boardSize / 2);
    const c = y + "-" + x;

    this.coordinates.push(c);

    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.direction = "u";
          break;

        case "ArrowDown":
          this.direction = "d";
          break;

        case "ArrowLeft":
          this.direction = "l";
          break;

        case "ArrowRight":
          this.direction = "r";
          break;
      }
    });
  }

  getCoordinates() {
    return this.coordinates;
  }

  move(food) {
    let [y, x] = this.coordinates[0].split("-");
    let c;

    switch (this.direction) {
      case "u":
        y--;
        break;

      case "d":
        y++;
        break;
      case "l":
        x--;
        break;
      case "r":
        x++;
        break;
    }

    c = y + "-" + x;
    this.coordinates.unshift(c);
  }

  pop() {
    this.coordinates.pop();
  }
}

export { Snake };
