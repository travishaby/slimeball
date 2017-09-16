class Player {
  constructor(name, x, y) {
    this.name = name
    this.x = x
    this.y = y
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(this.x, this.y, 50, Math.PI, 2 * Math.PI, false);
    canvas.fillStyle = 'blue';
    canvas.fill();
  }

  move(direction) {
    const upDown = {
      up: -15,
      down: 15
    }
    const leftRight = {
      left: -15,
      right: 15,
    }
    if(upDown[direction]) this.y = this.y + upDown[direction]
    if(leftRight[direction]) this.x = this.x + leftRight[direction]
  }
}
