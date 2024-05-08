class Level {
  level = 1;

  constructor() {
    this.update();
  }

  increment() {
    this.level++;
  }

  update() {
    const levelDiv = document.getElementById("level");
    levelDiv.innerHTML = this.level;
  }

  updateSpeed() {
    if (this.level > 5) {
      return 100;
    } else {
      return 300;
    }
  }
}

export { Level };
