class Net {
  constructor(location) {
    this.xOrigin = location.xOrigin
    this.yOrigin = location.yOrigin
    this.width = location.width
    this.height = location.height
  }

  draw(canvas) {
    canvas.fillStyle = 'green';
    canvas.fillRect(
      this.xOrigin,
      this.yOrigin,
      this.width,
      this.height
    )
  }
}
