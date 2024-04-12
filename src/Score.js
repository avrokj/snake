class Score {
  score = 0;
  highScore = 0;

  constructor() {
    this.update();
    this.updateHighScore();
  }

  increment() {
    this.score++;
  }

  update() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.innerHTML = this.score;
  }

  updateHighScore() {
    const scoreDiv = document.getElementById("high-score");
    scoreDiv.innerHTML = this.highScore;
  }
}

export { Score };
