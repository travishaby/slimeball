class Ball {
  constructor(start) {
    this.x = start.x;
    this.y = start.y;
    this.radius = 10;
    this.zone = start.zone;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.name = "ball";

    this.directionsToGrid = {
      left: { axis: "x", direction: -1 },
      right: { axis: "x", direction: 1 },
      up: { axis: "y", direction: -1 },
    };
  }

  leftSideX() {
    return this.x - this.radius;
  }

  rightSideX() {
    return this.x + this.radius;
  }

  topY() {
    return this.y - this.radius;
  }

  bottomY() {
    return this.y + this.radius;
  }

  move() {
    // y-axis
    if (this.y !== this.zone.yMax) this.yVelocity += 1; // gravity

    const yNext = this.y + this.yVelocity;
    if (yNext <= this.zone.yMax) {
      this.y = yNext;
    } else {
      this.y = this.zone.yMax;
      this.yVelocity = -this.yVelocity;
    }

    // x-axis
    const xNext = this.x + this.xVelocity;
    if (xNext <= this.zone.xMax && xNext >= this.zone.xOrigin) {
      this.x = xNext;
    } else if (xNext <= this.zone.xOrigin) {
      this.x = this.zone.xOrigin;
      this.xVelocity = -this.xVelocity;
    } else {
      this.x = this.zone.xMax;
      this.xVelocity = -this.xVelocity;
    }
  }

  draw(canvas) {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, Math.PI, 4 * Math.PI, false);
    canvas.fillStyle = "black";
    canvas.fill();
  }

  setVelocityVector(humanDirection, amount) {
    const { axis, direction } = this.directionsToGrid[humanDirection];
    this[`${axis}Velocity`] = direction * amount;
  }
}
