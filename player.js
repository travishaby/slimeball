class Player {
  constructor(name, color, start, zone) {
    this.name = name
    this.x = start.x
    this.y = start.y
    this.zone = zone
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
    canvas.arc(this.x, this.y, 40, Math.PI, 2 * Math.PI, false);
    canvas.fillStyle = this.color;
    canvas.fill();
  }

  move() {
    const xNext = this.x + this.xVelocity
    if(xNext < this.zone.xMax && xNext > this.zone.xOrigin) this.x = xNext
    const yNext = this.y + this.yVelocity
    if((yNext < this.zone.yMax) && yNext > this.zone.yOrigin) this.y = yNext
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
