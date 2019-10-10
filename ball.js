class Ball {
  constructor(start) {
    this.x = start.x
    this.y = start.y
    this.zone = start.zone
    this.xVelocity = 0
    this.yVelocity = 0
  }

  move() {
    if(this.y !== this.zone.yMax) this.yVelocity += 1 // gravity

    const yNext = this.y + this.yVelocity
    if(yNext <= this.zone.yMax) {
      this.y = yNext
    } else {
      this.y = this.zone.yMax
      this.yVelocity = -this.yVelocity
    }
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(this.x, this.y, 10, Math.PI, 4 * Math.PI, false);
    canvas.fillStyle = 'black';
    canvas.fill();
  }
}
