class Game {
  constructor(player1, player2, canvas) {
    this.player1 = player1
    this.player2 = player2
    this.canvas = canvas
    this.playerMovements = {
      a: { player: 'player1', direction: 'left' },
      d: { player: 'player1', direction: 'right' },
      w: { player: 'player1', direction: 'up' },
      s: { player: 'player1', direction: 'down' },
      j: { player: 'player2', direction: 'left' },
      l: { player: 'player2', direction: 'right' },
      i: { player: 'player2', direction: 'up' },
      k: { player: 'player2', direction: 'down' }
    }
    this.changePlayerMovement = this.changePlayerMovement.bind(this)
  }

  players() {
    return [this.player1, this.player2]
  }

  loop() {
    this.players().forEach(player => player.move())
    this.draw()
  }

  draw() {
    this.canvas.fillStyle="#FFFFFF"
    const {height, width} = this.canvas.canvas
    this.canvas.fillRect(0, 0, width, height)
    this.players().forEach(player => player.draw(this.canvas))
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
}
