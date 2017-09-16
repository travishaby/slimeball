class Player {
  constructor(name, x, y, color) {
    this.name = name
    this.x = x
    this.y = y
    this.color = color
    this.xVelocity = 0
    this.yVelocity = 0
    this.directionsToGrid = {
      left: { axis: 'x', direction: -1 },
      right: { axis: 'x', direction: 1 },
      up: { axis: 'y', direction: -1 },
      down: { axis: 'y', direction: 1 }
    }
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(this.x, this.y, 50, Math.PI, 2 * Math.PI, false);
    canvas.fillStyle = this.color;
    canvas.fill();
  }

  move() {
    this.x = this.x + this.xVelocity
    this.y = this.y + this.yVelocity
  }

  startMoving(direction) {
    this.setVelocityVector(direction, 10)
  }

  stopMoving(direction) {
    this.setVelocityVector(direction, 0)
  }

  setVelocityVector(humanDirection, amount) {
    const {axis, direction} = this.directionsToGrid[humanDirection]
    this[`${axis}Velocity`] = direction * amount
  }
}
