class Game {
  constructor(objects, canvas) {
    this.player1 = objects.player1
    this.player2 = objects.player2
    this.net = objects.net
    this.ball = objects.ball
    this.canvas = canvas
    this.playerMovements = {
      a: { player: 'player1', direction: 'left' },
      d: { player: 'player1', direction: 'right' },
      w: { player: 'player1', direction: 'up' },
      j: { player: 'player2', direction: 'left' },
      l: { player: 'player2', direction: 'right' },
      i: { player: 'player2', direction: 'up' },
    }
    this.changePlayerMovement = this.changePlayerMovement.bind(this)
  }

  drawableObjects() {
    return [this.player1, this.player2, this.ball, this.net]
  }

  movingObjects() {
    return [this.player1, this.player2, this.ball]
  }

  loop() {
    this.movingObjects().forEach(object => object.move())
    this.handleCollisions()
    this.draw()
  }

  draw() {
    this.canvas.fillStyle = "#FFFFFF"
    const {height, width} = this.canvas.canvas
    this.canvas.fillRect(0, 0, width, height)
    this.drawableObjects().forEach(object => object.draw(this.canvas))
  }

  handleKeydown(keydownEvent) {
    this.changePlayerMovement(keydownEvent.key, 'startMoving')
  }

  handleKeyup(keyupEvent) {
    this.changePlayerMovement(keyupEvent.key, 'stopMoving')
  }

  changePlayerMovement(key, action) {
    const keyMapping = this.playerMovements[key]
    if(keyMapping) {
      const { player, direction } = keyMapping
      this[player][action](direction)
    }
  }

  handleCollisions() {
    const objects = this.movingObjects()
    objects.forEach(firstObject => {
      this.movingObjects().forEach(secondObject => {
        if (firstObject.name !== secondObject.name) {
          this.checkForCollision(firstObject, secondObject)
        }
      })
    })
  }

  checkForCollision(first, second) {
    const xCollision = first.rightSideX() >= second.leftSideX()
      && first.leftSideX() < second.rightSideX()
    if (xCollision) {
      console.log('COLLISION!')
    }

  }
}
