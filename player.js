class Player {
  constructor(name, color, start, zone) {
    this.name = name
    this.x = start.x
    this.y = start.y
    this.radius = 40
    this.zone = zone
    this.color = color
    this.xVelocity = 0
    this.yVelocity = 0
    this.directionsToGrid = {
      left: { axis: 'x', direction: -1 },
      right: { axis: 'x', direction: 1 },
      up: { axis: 'y', direction: -2 }
    }
  }

  leftSideX() {
    return this.x - this.radius
  }

  rightSideX() {
    return this.x + this.radius
  }

  topY() {
    return this.y - this.radius
  }

  bottomY() {
    return this.y // slime is flat on the bottom
  }


  rightZoneEdge() {
    return this.zone.xMax - this.radius
  }

  leftZoneEdge() {
    return this.zone.xOrigin + this.radius
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, Math.PI, 2 * Math.PI, false);
    canvas.fillStyle = this.color;
    canvas.fill();
  }

  move() {
    const xNext = this.x + this.xVelocity
    if(xNext <= this.rightZoneEdge() && xNext > this.leftZoneEdge()) this.x = xNext

    if(this.y !== this.zone.yMax) this.yVelocity += 1 // gravity
    const yNext = this.y + this.yVelocity
    if(yNext <= this.zone.yMax) {
      this.y = yNext
    } else {
      this.y = this.zone.yMax
      this.yVelocity = 0
    }
  }

  startMoving(direction) {
    this.setVelocityVector(direction, 10)
  }

  stopMoving(direction) {
    this.setVelocityVector(direction, 0)
  }

  setVelocityVector(humanDirection, amount) {
    // cant jump if youre in the air!
    if(humanDirection === 'up' && this.y !== this.zone.yMax) return

    const {axis, direction} = this.directionsToGrid[humanDirection]
    this[`${axis}Velocity`] = direction * amount
  }

  currentXAxisHumanDirection() {
    if(this.xVelocity > 0) return 'right'
    if(this.xVelocity < 0) return 'left'
    return null
  }
}
