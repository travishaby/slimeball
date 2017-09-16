class Player {
  constructor(name, x, y) {
    this.name = name
    this.x = x
    this.y = y
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(Math.random() * 100, Math.random() * 100, 50, Math.PI, 2 * Math.PI, false);
    canvas.fillStyle = 'blue';
    canvas.fill();
  }
}
